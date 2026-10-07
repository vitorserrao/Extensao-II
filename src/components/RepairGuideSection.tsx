import React from 'react';

interface RepairGuideSectionProps {
  onOpenFullGuideModal: () => void;
}

export const RepairGuideSection: React.FC<RepairGuideSectionProps> = ({ onOpenFullGuideModal }) => {
  const guideHighlights = [
    {
      title: 'Componentes',
      desc: 'Placa de alumínio com diodos SMD, driver regulador de corrente e base E27.',
      icon: '⚙️',
    },
    {
      title: 'Ferramentas',
      desc: 'Multímetro digital com teste de diodo, ferro de solda 30W-40W e pinça térmica.',
      icon: '🔧',
    },
    {
      title: 'Procedimentos',
      desc: 'Localização do LED aberto, raspagem, jumper ou substituição por chip novo.',
      icon: '📋',
    },
    {
      title: 'Cuidados de segurança',
      desc: 'Descarga prévia de capacitores, ensaio em lâmpada série e normas elétricas.',
      icon: '⚡',
    },
  ];

  return (
    <section id="guia" className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block mb-3">
              08 — Guia de reparo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-900 leading-[1.15]">
              Quer entender como uma lâmpada pode ser recuperada?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Componentes, ferramentas, procedimentos e cuidados de segurança — explicados passo a passo.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenFullGuideModal}
              className="px-6 py-3.5 text-xs font-display font-semibold tracking-wide text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Acessar guia de reparo</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* 4 Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guideHighlights.map((item) => (
            <div
              key={item.title}
              onClick={onOpenFullGuideModal}
              className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-4 block" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="text-base font-display font-bold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-medium text-amber-600">
                  Ver protocolo
                </span>
                <span className="text-xs text-zinc-400">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
