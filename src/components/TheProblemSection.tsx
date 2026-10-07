import React, { useState } from 'react';

export const TheProblemSection: React.FC = () => {
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
    <section id="o-problema" className="py-16 sm:py-24 bg-white border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
            <span>2 — O PROBLEMA</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Uma lâmpada para de funcionar.<br />
              Nem todas as suas peças pararam.
            </h2>
            <p className="text-sm sm:text-base text-[#384C43] leading-relaxed">
              Muitas lâmpadas LED são descartadas no lixo comum ou reciclagem apenas porque um único diodo ou capacitor abriu o circuito, enquanto 90% dos componentes e materiais nobres permanecem em perfeitas condições.
            </p>
          </div>
        </div>

        {/* 4 Cards: Etapa 1 a 4 */}
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

        {/* Bloco Integrado: Eficiência Energética e Ciclo de Vida */}
        <div className="pt-10 border-t border-[#E5EAE1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Conceito de Eficiência */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2E6B56] font-bold block">
                Eficiência Energética no Ciclo de Vida
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0D241C] tracking-tight leading-tight">
                Não é só gastar menos energia.
              </h3>

              <p className="text-xs sm:text-sm text-[#384C43] leading-relaxed font-normal">
                Eficiência energética também envolve aproveitar melhor os recursos ao longo da vida útil de um equipamento. O projeto relaciona a eficiência do LED com a possibilidade de prolongar sua utilização quando a recuperação é viável.
              </p>

              <div className="p-4 rounded-xl bg-[#F7F8F5] border border-[#CCD6C7] text-xs text-[#2A4237] space-y-1">
                <span className="font-mono font-bold text-[10px] uppercase text-[#47665B] block">
                  Princípio de Extensão:
                </span>
                <p>
                  Fabricar uma nova lâmpada consome minérios, plásticos e energia elétrica. Evitar o descarte precoce é uma das formas mais diretas de eficiência sustentável.
                </p>
              </div>
            </div>

            {/* Right Column: Comparative Life Cycle Bar Scheme */}
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

              {/* Sem recuperação (Modo normal) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#445E54] block">
                  Modo normal (Sem recuperação):
                </span>
                <div className="h-10 w-full rounded-xl overflow-hidden flex text-[10px] font-mono font-bold tracking-wider uppercase text-white shadow-2xs">
                  <div className="bg-[#0D241C] w-1/3 flex items-center justify-center transition-all duration-500">
                    Uso
                  </div>
                  <div className="bg-[#B0BDB5] text-[#243B32] w-2/3 flex items-center justify-center transition-all duration-500">
                    Descarte prematuro
                  </div>
                </div>
              </div>

              {/* Com recuperação, quando viável */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#445E54] block">
                  Com recuperação, quando viável:
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
                Esquema sem escala: serve para explicar a ideia, não para medir resultados.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
