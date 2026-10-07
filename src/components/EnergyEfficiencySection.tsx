import React, { useState } from 'react';

export const EnergyEfficiencySection: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);

  const formulaTerms = [
    {
      name: 'Uso eficiente',
      detail: 'Baixo consumo de watts gerando alto fluxo luminoso (lúmens por Watt).',
      tag: 'Tecnologia LED',
    },
    {
      name: 'Vida útil',
      detail: 'Componentes semicondutores projetados para até 25.000 horas de operação.',
      tag: 'Durabilidade',
    },
    {
      name: 'Reutilização',
      detail: 'Correção pontual do ponto de falha para recolocar a peça em uso imediato.',
      tag: 'Economia Circular',
    },
    {
      name: 'Consumo consciente',
      detail: 'Optar pelo conserto e doação antes do descarte compulsivo.',
      tag: 'Comunidade Ativa',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block mb-3">
            05 — Eficiência energética
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Não é só gastar menos energia.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Eficiência também é aproveitar ao máximo o que já foi fabricado. Uma lâmpada LED consome pouco — e, recuperada, também deixa de exigir a energia e os materiais de uma nova.
          </p>
        </div>

        {/* Formula Layout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/70 shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-6">
            Equação de Eficiência Sistêmica
          </span>

          {/* Equation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {formulaTerms.map((term, idx) => (
              <React.Fragment key={term.name}>
                <div
                  onClick={() => setSelectedTerm(selectedTerm === idx ? null : idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedTerm === idx
                      ? 'bg-white border-zinc-900 shadow-sm'
                      : 'bg-white/80 border-zinc-200/80 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1 uppercase">
                    {term.tag}
                  </span>
                  <h3 className="text-base font-display font-bold text-zinc-900 mb-1">
                    {term.name}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {term.detail}
                  </p>
                </div>

                {idx < formulaTerms.length - 1 && (
                  <div className="hidden md:flex justify-center text-zinc-400 font-mono text-lg font-light">
                    +
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Equation Result */}
          <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono text-zinc-400 font-light">=</span>
              <p className="text-sm sm:text-base font-display font-bold text-zinc-900">
                menos desperdício, mais luz pelo mesmo recurso.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Projeto LUMEN · IFSC
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
