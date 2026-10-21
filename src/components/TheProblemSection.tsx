import React, { useState } from 'react';

export const TheProblemSection: React.FC = () => {

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
          <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#2F9E41] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB938] shadow-[0_0_8px_rgba(255,185,56,0.9)] animate-pulse shrink-0" />
            <span>2 — O PROBLEMA</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1A1A1A] tracking-tight leading-[1.12]">
              Uma lâmpada para de funcionar.<br />
              <span className="marker-yellow">Nem todos os seus componentes chegaram ao fim da vida útil.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#3A453F] leading-relaxed">
              Muitas lâmpadas LED deixam de funcionar devido à falha de um único componente, enquanto outras partes ainda podem estar em boas condições. Sem avaliação ou possibilidade de recuperação, essas lâmpadas podem ser descartadas prematuramente, desperdiçando materiais e recursos que ainda têm valor.
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
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F9E41] font-bold">
                    {item.etapa}
                  </span>
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-[#1A1A1A] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A554E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco 3: Eficiência Energética e Ciclo de Vida */}
        <div id="eficiencia-energetica" className="pt-10 border-t border-[#D5E2D6] scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Conceito de Eficiência */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#2F9E41] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB938] shadow-[0_0_8px_rgba(255,185,56,0.9)] animate-pulse shrink-0" />
                <span>3 — EFICIÊNCIA ENERGÉTICA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1A1A1A] tracking-tight leading-[1.12]">
                Eficiência também é<br />
                <span className="marker-yellow">aproveitar melhor o que já existe.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#3A453F] leading-relaxed font-normal">
                Prolongar a vida útil de uma lâmpada LED recuperável ajuda a aproveitar melhor os materiais e os recursos empregados em sua fabricação. Quando a recuperação é viável, evitar o descarte prematuro pode reduzir a necessidade de substituição e contribuir para uma iluminação mais sustentável.
              </p>

              <div className="p-4 rounded-xl bg-[#F4F8F4] border border-[#D5E2D6] text-xs text-[#1A1A1A] space-y-1.5">
                <span className="font-sans font-bold text-[11px] uppercase text-[#2F9E41] tracking-wider block">
                  PRINCÍPIO DE ECONOMIA CIRCULAR
                </span>
                <p className="leading-relaxed text-[#2C3831]">
                  Recuperar uma lâmpada é uma oportunidade de prolongar sua vida útil, reduzir o desperdício de materiais e evitar, quando possível, a necessidade de fabricar um produto novo.
                </p>
              </div>
            </div>

            {/* Right Column: Comparative Life Cycle - Dois Cards Claros */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* CARD 1: Sem Recuperação (Descarte Comum) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFBF9] border border-[#DFE5DC] flex flex-col justify-between space-y-5 shadow-2xs">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="text-[10px] font-mono uppercase font-bold text-rose-800 tracking-wider">
                        Sem Projeto · Descarte Comum
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-display font-bold text-[#0D241C]">
                        Lixo ao primeiro defeito
                      </h4>
                      <p className="text-xs text-[#4F685D] mt-1 leading-relaxed">
                        A lâmpada inteira vai para o lixo comum assim que um componente para.
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#263D33] pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                        <span><strong>Falha pontual:</strong> Queima de 1 LED interrompe o circuito em série da lâmpada.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                        <span><strong>Desperdício total:</strong> Carcaça de alumínio, cúpula e rosca E27 vão para o aterro.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                        <span><strong>Perda de potencial:</strong> Perde-se até 80% da vida útil útil restante dos componentes sãos.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Resumo do impacto: Vida útil em Horas */}
                  <div className="pt-4 border-t border-[#E1E7DE] space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#5A7367] tracking-wider">
                        Vida Útil Alcançada:
                      </span>
                      <div className="text-right">
                        <span className="font-display font-black text-base text-rose-700">~3.000 h</span>
                        <span className="font-mono text-[10px] text-[#698075]"> / 25.000 h</span>
                      </div>
                    </div>

                    {/* Barra visual de horas comparativas */}
                    <div className="w-full bg-[#E2E8DF] h-3 rounded-full overflow-hidden flex p-0.5">
                      <div 
                        className="bg-rose-500 h-full rounded-full w-[15%]" 
                        title="3.000 horas aproveitadas" 
                      />
                      <div 
                        className="h-full w-[85%] border-l border-dashed border-rose-300 bg-rose-100/40" 
                        title="22.000 horas desperdiçadas no lixo"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-rose-700 font-semibold">🛑 22.000h desperdiçadas</span>
                      <span className="text-[#688176]">~12% do potencial</span>
                    </div>
                  </div>
                </div>

                {/* CARD 2: Com o Projeto ReLED (Recuperação no IFSC) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#F2F8F3] border border-[#B8D8BF] ring-1 ring-[#1A7F5A]/20 flex flex-col justify-between space-y-5 shadow-xs">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1A7F5A] animate-pulse" />
                      <span className="text-[10px] font-mono uppercase font-bold text-[#145C41] tracking-wider">
                        Com Projeto de Extensão
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-display font-bold text-[#0D241C]">
                        Diagnóstico e vida prolongada
                      </h4>
                      <p className="text-xs text-[#285744] mt-1 leading-relaxed">
                        Intervenção na bancada que repara a falha e preserva o equipamento.
                      </p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-[#1D3E30] pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[#1A7F5A] font-bold shrink-0 mt-0.5">✓</span>
                        <span><strong>Reparo cirúrgico:</strong> Alunos identificam e trocam apenas o componente danificado.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1A7F5A] font-bold shrink-0 mt-0.5">✓</span>
                        <span><strong>Materiais preservados:</strong> 98,8% dos materiais nobres seguem em funcionamento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1A7F5A] font-bold shrink-0 mt-0.5">✓</span>
                        <span><strong>Mais iluminação:</strong> Retorno de +15.000h a 20.000h de luz útil à comunidade.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Resumo do impacto: Vida útil em Horas */}
                  <div className="pt-4 border-t border-[#C7DFC9] space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#145C41] tracking-wider">
                        Vida Útil Alcançada:
                      </span>
                      <div className="text-right">
                        <span className="font-display font-black text-base text-[#114E36]">Até 25.000 h</span>
                        <span className="font-mono text-[10px] text-[#285744] font-semibold"> (plena)</span>
                      </div>
                    </div>

                    {/* Barra visual de horas comparativas */}
                    <div className="w-full bg-[#D5EADB] h-3 rounded-full overflow-hidden flex p-0.5">
                      <div 
                        className="bg-gradient-to-r from-[#1A7F5A] to-[#12533B] h-full rounded-full w-full shadow-2xs" 
                        title="25.000 horas aproveitadas com o reparo do Projeto ReLED (IFSC)" 
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#145C41] font-bold">✨ +20.000h restauradas</span>
                      <span className="text-[#114E36] font-bold">100% do potencial</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
