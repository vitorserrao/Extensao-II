import React, { useState } from 'react';

export const WhyRecoverPdfSection: React.FC = () => {
  const [highlightExtension, setHighlightExtension] = useState(true);

  const steps = [
    {
      etapa: 'ETAPA 1',
      title: 'Descarte',
      desc: 'Uma lâmpada que deixa de funcionar pode acabar sendo descartada por completo.',
      icon: '🗑️',
    },
    {
      etapa: 'ETAPA 2',
      title: 'Diagnóstico',
      desc: 'Em alguns casos, a falha está concentrada em um ou poucos componentes.',
      icon: '🔍',
    },
    {
      etapa: 'ETAPA 3',
      title: 'Reaproveitamento',
      desc: 'Quando a recuperação é tecnicamente viável, parte do equipamento pode voltar a ter uso.',
      icon: '🛠️',
    },
    {
      etapa: 'ETAPA 4',
      title: 'Recursos',
      desc: 'Quando um equipamento segue em uso, pode diminuir a demanda por materiais e energia para fabricar outro.',
      icon: '🌱',
    },
  ];

  return (
    <section id="por-que-recuperar" className="py-16 sm:py-24 bg-white border-b border-[#E0E6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 2 — POR QUE RECUPERAR? */}
        <div className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
              <span>2 — POR QUE RECUPERAR?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Uma lâmpada para de funcionar.<br />
              Nem todas as suas peças<br />
              pararam.
            </h2>
          </div>

          {/* 4 Cards with card-soft styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.etapa}
                className="card-soft p-7 rounded-2xl flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#55756B] font-bold">
                      {item.etapa}
                    </span>
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0D241C] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#3C5047] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 — EFICIÊNCIA ENERGÉTICA */}
        <div className="pt-10 border-t border-[#E5EAE1] space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
                <span>3 — EFICIÊNCIA ENERGÉTICA</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D241C] tracking-tight leading-tight">
                Não é só gastar<br />menos energia.
              </h3>

              <p className="text-xs sm:text-sm text-[#384C43] leading-relaxed">
                Eficiência energética também envolve aproveitar melhor os recursos ao longo da vida útil de um equipamento. O projeto relaciona a eficiência do LED com a possibilidade de prolongar sua utilização quando a recuperação é viável.
              </p>
            </div>

            {/* Right Column: Comparative Life Cycle Bar Scheme with interactive toggle */}
            <div className="lg:col-span-6 p-7 rounded-3xl bg-[#F7F8F5] border border-[#D5DDD2] space-y-6 shadow-2xs">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#355246]">
                  Esquema Comparativo de Ciclo de Vida
                </span>
                <button
                  type="button"
                  onClick={() => setHighlightExtension(!highlightExtension)}
                  className="text-[10px] font-mono font-semibold px-2 py-1 rounded bg-white border border-[#CCD6C7] text-[#0A231C] hover:bg-gray-50 cursor-pointer"
                >
                  {highlightExtension ? 'Modo Normal' : 'Destacar Extensão'}
                </button>
              </div>

              {/* Sem recuperação */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#445E54] block">
                  Sem recuperação
                </span>
                <div className="h-10 w-full rounded-xl overflow-hidden flex text-[10px] font-mono font-bold tracking-wider uppercase text-white shadow-2xs">
                  <div className="bg-[#0D241C] w-1/3 flex items-center justify-center transition-all duration-500">
                    Uso
                  </div>
                  <div className="bg-[#B0BDB5] text-[#243B32] w-2/3 flex items-center justify-center transition-all duration-500">
                    Descarte
                  </div>
                </div>
              </div>

              {/* Com recuperação, quando viável */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#445E54] block">
                  Com recuperação, quando viável
                </span>
                <div className="h-10 w-full rounded-xl overflow-hidden flex text-[10px] font-mono font-bold tracking-wider uppercase shadow-2xs">
                  <div className="bg-[#0D241C] text-white w-1/3 flex items-center justify-center">
                    Uso
                  </div>
                  <div 
                    className={`bg-[#FFB938] text-[#1E1704] w-2/3 flex items-center justify-center font-extrabold transition-all duration-500 ${
                      highlightExtension ? 'shadow-[0_0_15px_rgba(255,185,56,0.6)] animate-pulse' : ''
                    }`}
                  >
                    Uso prolongado (+ vida útil)
                  </div>
                </div>
              </div>

              <p className="text-[10px] font-mono text-[#5E756C] italic pt-2 border-t border-[#D5DDD2]">
                Figura 3 — Vida útil de uma lâmpada, em esquema. Sem escala: serve para explicar a ideia, não para medir resultados.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
