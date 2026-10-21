import React, { useState } from 'react';
import { Trash2, Search, Wrench, Leaf } from 'lucide-react';
import { LifetimeComparison } from './LifetimeComparison';
import { SectionHeading } from './SectionHeading';

export const TheProblemSection: React.FC = () => {

  const steps = [
    {
      etapa: 'ETAPA 1',
      title: 'Descarte',
      desc: 'Uma lâmpada que deixa de funcionar pode acabar sendo descartada por completo.',
      icon: Trash2,
    },
    {
      etapa: 'ETAPA 2',
      title: 'Diagnóstico',
      desc: 'Em alguns casos, a falha está concentrada em um ou poucos componentes.',
      icon: Search,
    },
    {
      etapa: 'ETAPA 3',
      title: 'Reaproveitamento',
      desc: 'Quando a recuperação é tecnicamente viável, parte do equipamento pode voltar a ter uso.',
      icon: Wrench,
    },
    {
      etapa: 'ETAPA 4',
      title: 'Recursos',
      desc: 'Quando um equipamento segue em uso, pode diminuir a demanda por materiais e energia para fabricar outro.',
      icon: Leaf,
    },
  ];

  return (
    <>
    <section id="o-problema" className="py-16 sm:py-24 section-alt border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Mesmo padrão da seção 1: 12 colunas, duas metades. Texto à esquerda, cards à direita. */}
        {/* Título em largura total, acima das duas colunas */}
        <div className="mb-10 lg:mb-12">
          <SectionHeading
              num={2}
              label="O problema"
              line1="Uma lâmpada para de funcionar."
              line2={<span className="marker-yellow">Mas nem tudo nela queimou.</span>}
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Texto */}
          <div className="lg:col-span-6">
            <div className="section-lead space-y-3">
            <p>
              Muitas lâmpadas LED deixam de funcionar devido à falha de um único componente, enquanto outras partes ainda podem estar em boas condições. Sem avaliação ou possibilidade de recuperação, essas lâmpadas podem ser descartadas prematuramente, desperdiçando materiais e recursos que ainda têm valor.
            </p>
            </div>
          </div>

          {/* Cards 2×2 */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((item) => (
              <div
                key={item.etapa}
                className="card-soft p-6 rounded-2xl flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F9E41] font-bold">
                      {item.etapa}
                    </span>
                    <item.icon className="w-5 h-5 text-[#2F9E41] group-hover:scale-110 transition-transform" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#0D241C] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

    {/* Seção 3: Eficiência Energética e Ciclo de Vida (seção própria, para alternar o tom) */}
    <section id="eficiencia-energetica" className="py-16 sm:py-24 border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Título em largura total, acima das duas colunas */}
          <div className="mb-10 lg:mb-12">
            <SectionHeading
                num={3}
                label="Eficiência energética"
                line1="Eficiência também é aproveitar"
                line2={<span className="marker-yellow">melhor o que já existe.</span>}
              />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Conceito de Eficiência */}
            <div className="lg:col-span-6 space-y-5">
              <div className="section-lead space-y-3">
                <p>
                  Prolongar a vida útil de uma lâmpada LED recuperável ajuda a aproveitar melhor os materiais e os recursos empregados em sua fabricação. Quando a recuperação é viável, evitar o descarte prematuro pode reduzir a necessidade de substituição e contribuir para uma iluminação mais sustentável.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F8F4] border border-[#D5E2D6] text-xs text-[#1A1A1A] space-y-1.5">
                <span className="font-sans font-bold text-[11px] uppercase text-[#2F9E41] tracking-wider block">
                  PRINCÍPIO DE ECONOMIA CIRCULAR
                </span>
                <p className="leading-relaxed text-[#3A453F]">
                  Recuperar uma lâmpada é uma oportunidade de prolongar sua vida útil, reduzir o desperdício de materiais e evitar, quando possível, a necessidade de fabricar um produto novo.
                </p>
              </div>
            </div>

            {/* Right Column: comparativo visual de vida útil */}
            <div className="lg:col-span-6">
              <LifetimeComparison />
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  );
};
