import React, { useState } from 'react';

export const ImpactSection: React.FC = () => {
  const [showSimulation, setShowSimulation] = useState(false);
  const [lampQty, setLampQty] = useState(25);

  // Estimative ratios
  const simulatedRecovered = Math.round(lampQty * 0.82);
  const simulatedReused = Math.round(lampQty * 0.70);
  const simulatedKg = (lampQty * 0.085).toFixed(1);

  return (
    <section id="impacto" className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block mb-3">
              04 — Impacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-900 leading-[1.15]">
              O projeto está acontecendo — e dá para acompanhar.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSimulation(!showSimulation)}
              className="px-4 py-2 rounded-full text-xs font-medium border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-950 transition-all cursor-pointer shadow-xs"
            >
              {showSimulation ? 'Ver dados base (000)' : 'Simular impacto na comunidade'}
            </button>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Lâmpadas coletadas */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-4">
              Entrada
            </span>
            <div className="text-5xl sm:text-6xl font-display font-bold text-zinc-900 tracking-tight mb-2">
              {showSimulation ? lampQty : '000'}
            </div>
            <p className="text-sm font-medium text-zinc-600">
              Lâmpadas coletadas
            </p>
          </div>

          {/* Lâmpadas recuperadas */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500 block mb-4">
              Bancada IFSC
            </span>
            <div className="text-5xl sm:text-6xl font-display font-bold text-zinc-900 tracking-tight mb-2">
              {showSimulation ? simulatedRecovered : '000'}
            </div>
            <p className="text-sm font-medium text-zinc-600">
              Lâmpadas recuperadas
            </p>
          </div>

          {/* Lâmpadas reutilizadas */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-500 block mb-4">
              Comunidade
            </span>
            <div className="text-5xl sm:text-6xl font-display font-bold text-zinc-900 tracking-tight mb-2">
              {showSimulation ? simulatedReused : '000'}
            </div>
            <p className="text-sm font-medium text-zinc-600">
              Lâmpadas reutilizadas
            </p>
          </div>

          {/* kg de resíduos evitados */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                Preservação
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 text-zinc-600">
                estimativa
              </span>
            </div>
            <div className="text-5xl sm:text-6xl font-display font-bold text-zinc-900 tracking-tight mb-2">
              {showSimulation ? `${simulatedKg}` : '000'}
            </div>
            <p className="text-sm font-medium text-zinc-600">
              kg de resíduos evitados
            </p>
          </div>

        </div>

        {/* Dynamic Simulator Drawer when toggled */}
        {showSimulation && (
          <div className="mt-8 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm transition-all space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-display font-bold text-zinc-900">
                  Calculadora Interativa de Lâmpadas Coletadas
                </h4>
                <p className="text-xs text-zinc-500">
                  Ajuste o volume para calcular o potencial ecológico estimado de recuperação.
                </p>
              </div>
              <span className="text-sm font-mono font-bold text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200/60">
                {lampQty} lâmpadas
              </span>
            </div>

            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={lampQty}
              onChange={(e) => setLampQty(Number(e.target.value))}
              className="w-full accent-zinc-900 h-2 bg-zinc-200 rounded-lg cursor-pointer"
              aria-label="Ajustar quantidade de lâmpadas"
            />
          </div>
        )}

        {/* Institutional disclaimer required by the brief */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 text-xs text-zinc-400 font-mono">
          <p>
            * Valores ilustrativos — serão substituídos pelos dados reais do projeto.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Contagem em tempo real na bancada de extensão</span>
          </div>
        </div>

      </div>
    </section>
  );
};
