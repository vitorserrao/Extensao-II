import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LampFrontScene } from './LampFrontScene';

/**
 * Bancada interativa vista de cima.
 * O ponteiro (mouse ou dedo) vira a ferramenta de cada etapa:
 *  1 espátula  → arrastar pela borda para soltar o difusor
 *  2 ponta de prova → tocar nos LEDs até achar o queimado
 *  3 pinça     → agarrar o LED queimado e puxar para fora
 *  4 ferro     → segurar sobre os pads até a solda fluir
 *  5 teste     → ligar a lâmpada e recolocar o difusor
 */

interface InteractiveBenchProps {
  step: number; // 1..5
  onDone: () => void;
}

const C = 200; // centro
const N_LEDS = 12;
const LED_R = 84;
const BAD = 4; // índice do LED queimado
const SEAM_R = 150;
const SEAM_SEGMENTS = 36;
const SEAM_NEEDED = 30;

const ledPos = (i: number) => {
  const a = (i / N_LEDS) * Math.PI * 2 - Math.PI / 2;
  return { x: C + LED_R * Math.cos(a), y: C + LED_R * Math.sin(a), deg: (a * 180) / Math.PI + 90 };
};
const BAD_POS = ledPos(BAD);

/** Terminais de cada LED: '+' (anodo) e '-' (catodo), nas laterais do chip. */
type Pole = '+' | '-';
const terminalPos = (i: number, pole: Pole) => {
  const { x, y, deg } = ledPos(i);
  const t = (deg * Math.PI) / 180;
  const lx = pole === '+' ? 16 : -16;
  return { x: x + lx * Math.cos(t), y: y + lx * Math.sin(t) };
};

type ProbeId = 'red' | 'black';
const PARK_MID = { x: 320, y: 368 };
const SNAP_R = 26;
const BATT = { red: { x: 94, y: 362 }, black: { x: 94, y: 380 } };
/** Ângulo (graus) da direção "para fora" do centro da lâmpada, passando por um ponto. */
const outwardDeg = (p: { x: number; y: number }) =>
  Math.hypot(p.x - C, p.y - C) < 10 ? -90 : (Math.atan2(p.y - C, p.x - C) * 180) / Math.PI;
/** Par de pontas alinhado como os terminais de um LED naquela direção: vermelho no +, preto no −. */
const probePair = (mid: { x: number; y: number }, aDeg: number) => {
  const a = (aDeg * Math.PI) / 180;
  const t = { x: -Math.sin(a), y: Math.cos(a) }; // mesma direção do eixo + do LED
  return {
    red: { x: mid.x + 16 * t.x, y: mid.y + 16 * t.y },
    black: { x: mid.x - 16 * t.x, y: mid.y - 16 * t.y },
  };
};
/** Rotação do corpo da caneta: aponta para fora da lâmpada, levemente aberta para o lado do seu terminal. */
const probeRot = (id: ProbeId, aDeg: number) => aDeg + 90 + (id === 'red' ? 14 : -14);
const probeEnd = (p: { x: number; y: number }, rotDeg: number) => {
  const t = (rotDeg * Math.PI) / 180;
  return { x: p.x + 74 * Math.sin(t), y: p.y - 74 * Math.cos(t) };
};

type Tool = 'espatula' | 'sonda' | 'pinca' | 'ferro' | null;
const TOOL_BY_STEP: Record<number, Tool> = { 1: 'espatula', 2: 'sonda', 3: 'pinca', 4: 'ferro', 5: null };

const HINTS: Record<number, string> = {
  1: 'Segure e arraste a espátula ao longo da borda do difusor.',
  2: 'Leve as duas pontas de prova até um LED: elas encaixam sozinhas nos terminais + e −.',
  3: 'Segure o LED queimado com a pinça e puxe para fora da placa.',
  4: 'Segure o ferro de solda sobre os dois pads até o estanho derreter.',
  5: 'Ligue a lâmpada no circuito de teste.',
};

export const InteractiveBench: React.FC<InteractiveBenchProps> = ({ step, onDone }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [pressed, setPressed] = useState(false);

  // Estado de cada etapa (as anteriores são consideradas concluídas)
  const [seam, setSeam] = useState<boolean[]>(() => Array(SEAM_SEGMENTS).fill(false));
  const [domeOff, setDomeOff] = useState(step > 1);
  const [tested, setTested] = useState<Set<number>>(() => (step > 2 ? new Set([BAD]) : new Set()));
  const [grab, setGrab] = useState<{ dx: number; dy: number } | null>(null);
  const [removed, setRemoved] = useState(step > 3);
  const [heat, setHeat] = useState(step > 4 ? 1 : 0);
  const [powered, setPowered] = useState(false);
  const [closed, setClosed] = useState(false);
  const [done, setDone] = useState(false);
  const [scene, setScene] = useState<'open' | 'light' | null>(null);
  const [probeMsg, setProbeMsg] = useState<string | null>(null);

  // Reinicia ao trocar de etapa
  useEffect(() => {
    setSeam(Array(SEAM_SEGMENTS).fill(step > 1));
    setDomeOff(step > 1);
    setTested(step > 2 ? new Set([BAD]) : new Set());
    setGrab(null);
    setRemoved(step > 3);
    setHeat(step > 4 ? 1 : 0);
    setPowered(false);
    setClosed(false);
    setDone(false);
  }, [step]);

  const finish = useCallback(() => {
    setDone((d) => {
      if (!d) onDone();
      return true;
    });
  }, [onDone]);

  const toSvg = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const m = svg.getScreenCTM();
    if (!m) return null;
    const p = pt.matrixTransform(m.inverse());
    return { x: p.x, y: p.y };
  };

  const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);

  /* --- Etapa 1: soltar a borda --- */
  const scrape = (p: { x: number; y: number }) => {
    const r = dist(p, { x: C, y: C });
    if (r < SEAM_R - 22 || r > SEAM_R + 22) return;
    let a = Math.atan2(p.y - C, p.x - C);
    if (a < 0) a += Math.PI * 2;
    const idx = Math.floor((a / (Math.PI * 2)) * SEAM_SEGMENTS) % SEAM_SEGMENTS;
    setSeam((s) => {
      if (s[idx]) return s;
      const next = [...s];
      next[idx] = true;
      if (next.filter(Boolean).length === SEAM_NEEDED) {
        setTimeout(() => {
          setDomeOff(true);
          setScene('open');
          setTimeout(() => setScene(null), 2900);
          finish();
        }, 150);
      }
      return next;
    });
  };

  /* --- Etapa 4: aquecer enquanto segura sobre os pads --- */
  const heatingRef = useRef(false);
  const overPads = pointer && dist(pointer, BAD_POS) < 26;
  heatingRef.current = step === 4 && pressed && !!overPads && heat < 1;

  useEffect(() => {
    if (step !== 4) return;
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      if (heatingRef.current) {
        setHeat((h) => {
          const n = Math.min(1, h + dt / 1.6);
          if (n >= 1 && h < 1) finish();
          return n;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [step, finish]);

  /* --- Eventos de ponteiro --- */
  const onDown = (e: React.PointerEvent<SVGSVGElement>) => {
    const p = toSvg(e);
    if (!p) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    setPointer(p);
    setPressed(true);

    if (step === 1 && !domeOff) scrape(p);



    if (step === 3 && !removed && dist(p, BAD_POS) < 20) {
      setGrab({ dx: 0, dy: 0 });
    }
  };

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const p = toSvg(e);
    if (!p) return;
    setPointer(p);
    if (!pressed) return;
    if (step === 1 && !domeOff) scrape(p);

    if (step === 3 && grab && !removed) {
      const dx = p.x - BAD_POS.x;
      const dy = p.y - BAD_POS.y;
      if (Math.hypot(dx, dy) > 55) {
        setGrab(null);
        setRemoved(true);
        finish();
      } else {
        setGrab({ dx, dy });
      }
    }
  };

  /* --- Etapa 2: o par de pontas encaixa no LED mais próximo --- */
  const nearLed = (() => {
    if (step !== 2) return null;
    if (done) return BAD;
    if (!pointer) return null;
    let best: number | null = null;
    let bestD = SNAP_R;
    for (let i = 0; i < N_LEDS; i++) {
      const d = dist(pointer, ledPos(i));
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    return best;
  })();

  useEffect(() => {
    if (step !== 2 || done || nearLed === null) return;
    setTested((t) => new Set(t).add(nearLed));
    if (nearLed === BAD) {
      setProbeMsg(null);
      finish();
    } else {
      setProbeMsg('Acendeu: esse LED está bom. Teste o próximo.');
    }
  }, [nearLed, step, done, finish]);

  // direção das canetas: sempre para fora da lâmpada, nunca por cima dos terminais
  const probeA = nearLed !== null ? outwardDeg(ledPos(nearLed)) : outwardDeg(pointer ?? PARK_MID);
  const probePos: Record<ProbeId, { x: number; y: number }> =
    nearLed !== null
      ? { red: terminalPos(nearLed, '+'), black: terminalPos(nearLed, '-') }
      : probePair(pointer ?? PARK_MID, probeA);
  /** Cabo: sai da caneta em linha reta para fora, contorna a lâmpada em arco e só então desce às pilhas. */
  const wireFor = (id: ProbeId) => {
    const end = probeEnd(probePos[id], probeRot(id, probeA));
    const from = BATT[id];
    const R = id === 'red' ? 176 : 186; // cada cabo em sua "pista" ao redor da lâmpada
    const ang = (p: { x: number; y: number }) => Math.atan2(p.y - C, p.x - C);
    const aEnd = ang(end);
    const aBat = ang(from);
    const onRing = (a: number) => ({ x: C + R * Math.cos(a), y: C + R * Math.sin(a) });
    const p1 = onRing(aEnd);
    const p2 = onRing(aBat);
    let d = aBat - aEnd;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    const sweep = d > 0 ? 1 : 0;
    const large = Math.abs(d) > Math.PI ? 1 : 0;
    return `M ${end.x} ${end.y} L ${p1.x} ${p1.y} A ${R} ${R} 0 ${large} ${sweep} ${p2.x} ${p2.y} L ${from.x} ${from.y}`;
  };

  const onUp = () => {
    setPressed(false);
    if (grab) setGrab(null); // soltou antes: o LED volta ao lugar
  };

  const tool = TOOL_BY_STEP[step];
  const seamCount = seam.filter(Boolean).length;
  const glowing = powered && closed;

  const progress =
    step === 1 ? Math.min(1, seamCount / SEAM_NEEDED) : step === 4 ? heat : done ? 1 : 0;

  const status = done
    ? {
        1: 'Difusor solto! A placa de LEDs está à mostra.',
        2: 'Achou! Esse LED não acende: está em circuito aberto.',
        3: 'LED removido. Os dois pads de cobre estão livres.',
        4: 'Jumper soldado. O circuito em série está fechado de novo.',
        5: 'A lâmpada acendeu. Reparo concluído!',
      }[step]
    : step === 2 && probeMsg
    ? probeMsg
    : step === 5 && powered
    ? 'Funcionou no teste. Agora recoloque o difusor.'
    : HINTS[step];

  return (
    <div className="w-full max-w-[420px] mx-auto rounded-3xl bg-[#F4F7F3] border border-[#D5DDD2] shadow-sm p-4 sm:p-5 select-none">
      <div className="flex items-center justify-between text-[11px] font-mono uppercase font-bold text-[#164E3A] pb-3 mb-3 border-b border-[#E0E7DD]">
        <span className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${done ? 'bg-emerald-600' : 'bg-amber-500 animate-pulse'}`} />
          Bancada interativa
        </span>
        <span className="text-[#5A7367]">
          {tool ? `Ferramenta: ${{ espatula: 'espátula', sonda: 'pontas de prova', pinca: 'pinça', ferro: 'ferro de solda' }[tool]}` : 'Teste final'}
        </span>
      </div>

      <div className="relative">
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="w-full h-auto rounded-2xl bg-[#E9EEE8]"
        style={{
          cursor: tool && !done ? 'none' : 'default',
          touchAction: tool && !done ? 'none' : 'auto',
        }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerLeave={() => {
          setPointer(null);
          onUp();
        }}
        role="application"
        aria-label={`Bancada interativa, etapa ${step}: ${HINTS[step]}`}
      >
        <defs>
          <radialGradient id="benchAlu" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </radialGradient>
          <radialGradient id="benchDome" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.93" />
          </radialGradient>
          <radialGradient id="benchGlow">
            <stop offset="0%" stopColor="#FFF7D6" stopOpacity="1" />
            <stop offset="60%" stopColor="#FFD86B" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFB938" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ledLit">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFE58A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* brilho geral no teste final */}
        {glowing && <circle cx={C} cy={C} r={190} fill="url(#benchGlow)" className="animate-pulse" />}

        {/* carcaça */}
        <circle cx={C} cy={C} r={162} fill="#D4D8DD" stroke="#9CA3AF" strokeWidth="2" />
        {/* placa de alumínio */}
        <circle cx={C} cy={C} r={128} fill="url(#benchAlu)" stroke="#94A3B8" strokeWidth="1.5" />
        <circle cx={C} cy={C} r={LED_R} fill="none" stroke="#C08457" strokeWidth="3" opacity="0.55" />
        <circle cx={C} cy={C} r={14} fill="#94A3B8" />
        <text x={C} y={C + 40} textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#64748B">
          LED SMD · série
        </text>

        {/* cabos das pontas de prova: por baixo dos LEDs, para nunca esconder os terminais */}
        {step === 2 &&
          (['black', 'red'] as ProbeId[]).map((id) => (
            <path
              key={id}
              d={wireFor(id)}
              stroke={id === 'red' ? '#DC2626' : '#111827'}
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
              pointerEvents="none"
            />
          ))}

        {/* LEDs */}
        {Array.from({ length: N_LEDS }, (_, i) => {
          const { x, y, deg } = ledPos(i);
          const isBad = i === BAD;
          const isTested = tested.has(i);
          const onProbes = step === 2 && nearLed === i;
          const lit = (onProbes && !isBad) || (powered && !isBad);

          if (isBad && removed) {
            return (
              <g key={i} transform={`translate(${x} ${y}) rotate(${deg})`}>
                <rect x={-11} y={-6} width={7} height={12} rx={1.5} fill="#C9763A" />
                <rect x={4} y={-6} width={7} height={12} rx={1.5} fill="#C9763A" />
                {heat > 0 && (
                  <rect
                    x={-11}
                    y={-6}
                    width={22}
                    height={12}
                    rx={5}
                    fill="#CBD5E1"
                    stroke="#94A3B8"
                    opacity={Math.min(1, heat * 1.15)}
                    transform={`scale(${0.4 + heat * 0.6} 1)`}
                  />
                )}
                {heat >= 1 && <ellipse cx={-3} cy={-2} rx={5} ry={2} fill="#F8FAFC" opacity="0.8" />}
              </g>
            );
          }

          const off = isBad && grab ? grab : { dx: 0, dy: 0 };
          return (
            <g key={i} transform={`translate(${x + off.dx} ${y + off.dy}) rotate(${deg})`}>
              {lit && <circle r={22} fill="url(#ledLit)" />}
              {step === 2 && (
                <>
                  <rect x={11} y={-5} width={9} height={10} rx={1.5} fill="#C9763A" />
                  <rect x={-20} y={-5} width={9} height={10} rx={1.5} fill="#C9763A" />
                </>
              )}
              <rect x={-12} y={-12} width={24} height={24} rx={3} fill="#F8FAFC" stroke="#94A3B8" />
              <circle r={8} fill={lit ? '#FFF3B0' : '#FCD34D'} stroke="#D97706" strokeWidth="0.8" />
              {isBad && <circle r={2.6} fill="#1F2937" />}
              {step === 2 && (
                <g fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  <text x={16} y={-8} fill="#B91C1C">+</text>
                  <text x={-16} y={-8} fill="#1F2937">−</text>
                </g>
              )}
              {step === 2 && isTested && isBad && (
                <g stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
                  <line x1={-14} y1={-14} x2={14} y2={14} />
                  <line x1={14} y1={-14} x2={-14} y2={14} />
                </g>
              )}
              {step >= 3 && isBad && !removed && (
                <circle r={16} fill="none" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
              )}
            </g>
          );
        })}

        {/* alvo da solda */}
        {step === 4 && heat < 1 && (
          <circle cx={BAD_POS.x} cy={BAD_POS.y} r={22} fill="none" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 3" className="animate-pulse" />
        )}
        {/* fumaça da solda */}
        {heatingRef.current &&
          [0, 1, 2].map((k) => (
            <circle
              key={k}
              cx={BAD_POS.x + (k - 1) * 6}
              cy={BAD_POS.y - 18 - ((Date.now() / 18 + k * 20) % 30)}
              r={4 + k}
              fill="#E2E8F0"
              opacity="0.6"
            />
          ))}

        {/* difusor */}
        <g
          style={{
            transition: 'transform 600ms ease, opacity 600ms ease',
            transform: domeOff && !closed ? 'translate(0px, -40px) scale(1.06)' : 'none',
            transformOrigin: '200px 200px',
            opacity: domeOff && !closed ? 0 : 1,
          }}
          pointerEvents="none"
        >
          <circle cx={C} cy={C} r={SEAM_R} fill={glowing ? '#FFF6D5' : 'url(#benchDome)'} stroke="#CBD5E1" strokeWidth="2" />
          {!glowing && <ellipse cx={C - 45} cy={C - 55} rx={45} ry={22} fill="#FFFFFF" opacity="0.7" transform={`rotate(-30 ${C - 45} ${C - 55})`} />}
          {step === 1 &&
            seam.map((s, i) => {
              const a0 = (i / SEAM_SEGMENTS) * Math.PI * 2;
              const a1 = ((i + 1) / SEAM_SEGMENTS) * Math.PI * 2;
              return (
                <path
                  key={i}
                  d={`M ${C + SEAM_R * Math.cos(a0)} ${C + SEAM_R * Math.sin(a0)} A ${SEAM_R} ${SEAM_R} 0 0 1 ${C + SEAM_R * Math.cos(a1)} ${C + SEAM_R * Math.sin(a1)}`}
                  stroke={s ? '#F59E0B' : '#64748B'}
                  strokeWidth={s ? 6 : 3}
                  strokeDasharray={s ? undefined : '2 3'}
                  fill="none"
                  strokeLinecap="round"
                />
              );
            })}
        </g>

        {/* ferramenta no ponteiro */}
        {/* pilhas, cabos e pontas de prova (etapa 2) */}
        {step === 2 && (
          <g pointerEvents="none">
            <rect x={14} y={352} width={80} height={38} rx={6} fill="#1F2937" />
            <rect x={18} y={356} width={34} height={14} rx={3} fill="#D97706" />
            <rect x={18} y={373} width={34} height={14} rx={3} fill="#D97706" />
            <rect x={56} y={356} width={34} height={14} rx={3} fill="#D97706" />
            <rect x={56} y={373} width={34} height={14} rx={3} fill="#D97706" />
            <text x={54} y={348} textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill="#374151">2× AA · 3V</text>
            {(['black', 'red'] as ProbeId[]).map((id) => {
              const pr = probePos[id];
              const color = id === 'red' ? '#DC2626' : '#111827';
              const t = probeRot(id, probeA);
              return (
                <g key={id}>
                  <g transform={`translate(${pr.x} ${pr.y}) rotate(${t})`}>
                    <line x1={0} y1={0} x2={0} y2={-16} stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" />
                    <rect x={-6} y={-74} width={12} height={60} rx={5} fill={color} stroke={id === 'red' ? '#7F1D1D' : '#000'} strokeWidth="1.5" />
                    <rect x={-6} y={-30} width={12} height={4} fill="#F8FAFC" opacity="0.5" />
                  </g>
                  {nearLed !== null && <circle cx={pr.x} cy={pr.y} r={5} fill="none" stroke={color} strokeWidth="2" />}
                </g>
              );
            })}
          </g>
        )}

        {tool && tool !== 'sonda' && !done && pointer && (
          <g transform={`translate(${pointer.x} ${pointer.y})`} pointerEvents="none">
            {tool === 'espatula' && (
              <g transform="rotate(-35)">
                <path d="M -5 0 L 5 0 L 7 -46 L -7 -46 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
                <rect x={-8} y={-96} width={16} height={52} rx={5} fill="#2F9E41" stroke="#14532D" strokeWidth="1.5" />
              </g>
            )}
            {tool === 'pinca' && (
              <g transform="rotate(-25)">
                <line x1={grab ? -2 : -7} y1={0} x2={-9} y2={-90} stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
                <line x1={grab ? 2 : 7} y1={0} x2={9} y2={-90} stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
              </g>
            )}
            {tool === 'ferro' && (
              <g transform="rotate(-35)">
                <path d="M 0 0 L -3 -14 L 3 -14 Z" fill={heatingRef.current ? '#F97316' : '#78716C'} />
                <rect x={-3} y={-50} width={6} height={36} fill="#A8A29E" />
                <rect x={-9} y={-112} width={18} height={62} rx={7} fill="#1F2937" stroke="#030712" strokeWidth="1.5" />
                {heatingRef.current && <circle r={7} fill="#FDBA74" opacity="0.6" />}
              </g>
            )}
          </g>
        )}
      </svg>

      {/* Cena de frente entre as etapas */}
      {scene && (
        <div className="scene-fade absolute inset-0 rounded-2xl bg-[#E9EEE8] flex flex-col items-center justify-center p-6">
          <div className="w-3/5 h-4/5">
            <LampFrontScene scene={scene} />
          </div>
          <span className="mt-1 text-[10px] font-mono uppercase tracking-widest font-bold text-[#5A7367]">
            {scene === 'open' ? 'Difusor saindo' : 'Lâmpada acesa'}
          </span>
        </div>
      )}
      </div>

      {/* Situação + progresso */}
      <div className="mt-3 space-y-2">
        <p className={`text-xs font-semibold leading-snug ${done ? 'text-emerald-800' : 'text-[#0D241C]'}`}>{status}</p>
        {(step === 1 || step === 4) && (
          <div className="h-2 rounded-full bg-[#DCE5DA] overflow-hidden">
            <div
              className={`h-full rounded-full transition-[width] duration-150 ${step === 4 ? 'bg-orange-500' : 'bg-amber-500'}`}
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        )}
        {step === 5 && (
          <div className="flex gap-2">
            <button
              type="button"
              disabled={powered}
              onClick={() => setPowered(true)}
              className="flex-1 px-3 py-2.5 rounded-xl text-xs font-bold bg-[#0D241C] text-white disabled:bg-[#B7C9BE] disabled:text-white cursor-pointer disabled:cursor-default"
            >
              {powered ? 'Teste aprovado' : 'Ligar no circuito de teste'}
            </button>
            <button
              type="button"
              disabled={!powered || closed}
              onClick={() => {
                setClosed(true);
                setScene('light');
                setTimeout(finish, 2200);
              }}
              className="flex-1 px-3 py-2.5 rounded-xl text-xs font-bold bg-[#FFB938] text-[#161204] disabled:bg-[#E3E8E1] disabled:text-[#8DA096] cursor-pointer disabled:cursor-default"
            >
              {closed ? 'Difusor no lugar' : 'Recolocar o difusor'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
