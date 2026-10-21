import React from 'react';

/**
 * Lâmpada vista de frente, usada como "cena" entre as etapas da bancada.
 *  - open:  a espátula corre pela emenda e o difusor sai
 *  - light: a lâmpada recuperada pisca e acende
 */
export const LampFrontScene: React.FC<{ scene: 'open' | 'light' }> = ({ scene }) => {
  const leds = [58, 72, 86, 100, 114, 128, 142];
  return (
    <svg viewBox="0 0 200 260" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="fsBody" x1="0" x2="1">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="45%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <linearGradient id="fsBase" x1="0" x2="1">
          <stop offset="0%" stopColor="#A1A1AA" />
          <stop offset="50%" stopColor="#F4F4F5" />
          <stop offset="100%" stopColor="#A1A1AA" />
        </linearGradient>
        <radialGradient id="fsDome" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </radialGradient>
        <radialGradient id="fsHalo">
          <stop offset="0%" stopColor="#FFF7D6" stopOpacity="1" />
          <stop offset="45%" stopColor="#FFD86B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFB938" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* halo e raios (só ao acender) */}
      {scene === 'light' && (
        <g className="fs-glow">
          <circle cx="100" cy="92" r="110" fill="url(#fsHalo)" />
          <g className="fs-rays" stroke="#FFC83D" strokeWidth="4" strokeLinecap="round">
            {Array.from({ length: 10 }, (_, i) => {
              const a = (i / 10) * Math.PI * 2;
              return (
                <line
                  key={i}
                  x1={100 + 78 * Math.cos(a)}
                  y1={92 + 78 * Math.sin(a)}
                  x2={100 + 96 * Math.cos(a)}
                  y2={92 + 96 * Math.sin(a)}
                />
              );
            })}
          </g>
        </g>
      )}

      {/* base E27 */}
      <rect x="74" y="190" width="52" height="46" rx="4" fill="url(#fsBase)" stroke="#71717A" />
      {[198, 208, 218, 228].map((y) => (
        <path key={y} d={`M 74 ${y} L 126 ${y + 5}`} stroke="#71717A" strokeWidth="2" />
      ))}
      <path d="M 82 236 L 118 236 L 110 248 L 90 248 Z" fill="#27272A" />
      <circle cx="100" cy="251" r="4" fill="#CA8A04" />

      {/* corpo de alumínio */}
      <path d="M 40 120 L 160 120 L 128 190 L 72 190 Z" fill="url(#fsBody)" stroke="#64748B" />
      {[138, 154, 170].map((y) => (
        <line key={y} x1={40 + (y - 120) * 0.45} y1={y} x2={160 - (y - 120) * 0.45} y2={y} stroke="#64748B" strokeWidth="1" opacity="0.5" />
      ))}

      {/* placa com LEDs (visível quando o difusor sai) */}
      <rect x="44" y="114" width="112" height="8" rx="2" fill="#E5E7EB" stroke="#94A3B8" />
      {leds.map((x) => (
        <rect key={x} x={x - 4} y={110} width="8" height="5" rx="1" fill="#FCD34D" stroke="#D97706" strokeWidth="0.6" className={scene === 'light' ? 'fs-led' : undefined} />
      ))}

      {/* difusor */}
      <g className={scene === 'open' ? 'fs-dome-off' : undefined}>
        <path
          d="M 40 120 A 60 64 0 1 1 160 120 Z"
          fill={scene === 'light' ? '#FFF4C7' : 'url(#fsDome)'}
          stroke="#CBD5E1"
          strokeWidth="2"
          className={scene === 'light' ? 'fs-dome-lit' : undefined}
        />
        {scene !== 'light' && <ellipse cx="78" cy="70" rx="16" ry="26" fill="#FFFFFF" opacity="0.8" transform="rotate(25 78 70)" />}
      </g>

      {/* espátula correndo pela emenda */}
      {scene === 'open' && (
        <g className="fs-spatula">
          <path d="M 0 0 L 8 -3 L 46 -14 L 44 -22 L 6 -11 Z" fill="#E2E8F0" stroke="#475569" />
          <rect x="44" y="-30" width="44" height="14" rx="5" fill="#2F9E41" stroke="#14532D" transform="rotate(-16 44 -30)" />
        </g>
      )}
    </svg>
  );
};
