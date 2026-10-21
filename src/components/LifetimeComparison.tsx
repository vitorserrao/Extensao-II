import React, { useEffect, useRef, useState } from 'react';
import { Trash2, Wrench, X, Check } from 'lucide-react';

/**
 * Comparativo visual: a mesma lâmpada, dois destinos.
 * As duas barras usam a mesma escala (0 a 25.000 h), então a diferença
 * de tamanho já conta a história antes de qualquer leitura.
 */

const TOTAL_H = 25000;
const DESCARTE_H = 3000;

const contrastes = [
  {
    tema: 'Quando 1 LED queima',
    sem: 'A lâmpada inteira para e vai para o lixo',
    com: 'Só o componente com defeito é trocado',
  },
  {
    tema: 'Materiais',
    sem: 'Alumínio, cúpula e rosca vão para o aterro',
    com: '98,8% dos materiais seguem em uso',
  },
];

export const LifetimeComparison: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pctDescarte = (DESCARTE_H / TOTAL_H) * 100;
  const ticks = [0, 5000, 10000, 15000, 20000, 25000];

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white border border-[#D5E2D6] shadow-[0_12px_32px_-12px_rgba(27,94,32,0.18)] overflow-hidden"
    >
      {/* Cabeçalho com o número de impacto */}
      <div className="px-5 sm:px-7 pt-6 pb-5 flex items-end justify-between gap-4 border-b border-[#D5E2D6]">
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-widest font-bold text-[#6B7F74]">
            Mesma lâmpada, dois destinos
          </span>
          <span className="block mt-1 text-sm text-[#3A453F]">Horas de luz que ela entrega</span>
        </div>
        <div className="text-right leading-none">
          <span className="font-display font-black text-4xl sm:text-5xl text-[#2F9E41] tracking-tight">8×</span>
          <span className="block mt-1 text-[11px] font-bold text-[#1E6B2C]">mais tempo de uso</span>
        </div>
      </div>

      {/* Barras na mesma escala */}
      <div className="px-5 sm:px-7 py-6 space-y-6">
        {/* Descarte */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#FFF6DF] border border-[#FFE3A3] flex items-center justify-center shrink-0">
                <Trash2 className="w-4 h-4 text-[#9A6700]" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-[#1A1A1A]">Descartada no 1º defeito</span>
            </div>
            <span className="font-display font-black text-xl text-[#9A6700] whitespace-nowrap">~3.000 h</span>
          </div>
          <div
            className="relative h-9 rounded-lg overflow-hidden bg-[repeating-linear-gradient(135deg,#FFF1D0_0_8px,#FFFAEE_8px_16px)] border border-[#FFE3A3]"
            role="img"
            aria-label="Cerca de 3.000 horas usadas de 25.000 possíveis; 22.000 horas desperdiçadas"
          >
            <div
              className="absolute inset-y-0 left-0 bg-[#FFB938] rounded-l-lg transition-[width] duration-1000 ease-out"
              style={{ width: visible ? `${pctDescarte}%` : '0%' }}
            />
            <span
              className={`absolute inset-y-0 right-3 flex items-center text-[11px] sm:text-xs font-bold text-[#9A6700] transition-opacity duration-700 delay-700 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              22.000 h jogadas fora
            </span>
          </div>
        </div>

        {/* Recuperada */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#EBF7ED] border border-[#D5E2D6] flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4 text-[#2F9E41]" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-[#1A1A1A]">Recuperada no projeto</span>
            </div>
            <span className="font-display font-black text-xl text-[#1E6B2C] whitespace-nowrap">até 25.000 h</span>
          </div>
          <div
            className="relative h-9 rounded-lg overflow-hidden bg-[#E3ECE4] border border-[#D5E2D6]"
            role="img"
            aria-label="Até 25.000 horas de uso, a vida útil completa"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-lg bg-gradient-to-r from-[#2F9E41] to-[#1E6B2C] transition-[width] duration-[1400ms] ease-out delay-200"
              style={{ width: visible ? '100%' : '0%' }}
            />
            <span
              className={`absolute inset-y-0 right-3 flex items-center text-[11px] sm:text-xs font-bold text-white transition-opacity duration-700 delay-1000 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              vida útil completa
            </span>
          </div>
        </div>

        {/* Escala */}
        <div className="relative h-4 text-[10px] font-mono text-[#6B7F74]" aria-hidden="true">
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full"
              style={{ left: `${(t / TOTAL_H) * 100}%` }}
            >
              {t === 0 ? '0' : `${t / 1000}k h`}
            </span>
          ))}
        </div>
      </div>

      {/* Contrastes rápidos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#D5E2D6] bg-[#F4F8F4]">
        {contrastes.map((c, i) => (
          <div
            key={c.tema}
            className={`px-5 sm:px-7 py-4 space-y-2 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-[#D5E2D6]' : ''}`}
          >
            <span className="block text-[10px] font-mono uppercase tracking-widest font-bold text-[#6B7F74]">
              {c.tema}
            </span>
            <p className="flex items-start gap-2 text-xs text-[#4A554E] leading-snug">
              <X className="w-3.5 h-3.5 mt-px text-[#9A6700] shrink-0" strokeWidth={3} aria-hidden="true" />
              <span>{c.sem}</span>
            </p>
            <p className="flex items-start gap-2 text-xs text-[#1E6B2C] font-semibold leading-snug">
              <Check className="w-3.5 h-3.5 mt-px text-[#2F9E41] shrink-0" strokeWidth={3} aria-hidden="true" />
              <span>{c.com}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
