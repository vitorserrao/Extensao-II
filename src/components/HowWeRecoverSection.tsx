import React from 'react';

interface HowWeRecoverSectionProps {
  onOpenTutorial?: () => void;
  onOpenGuideModal?: () => void;
}

export const HowWeRecoverSection: React.FC<HowWeRecoverSectionProps> = ({ onOpenTutorial }) => {
  const stepsList = [
    { num: '01', title: 'Coleta', desc: 'Recebimento de lâmpadas que deixaram de funcionar nos postos do IFSC.' },
    { num: '02', title: 'Avaliação', desc: 'Triagem visual inicial da carcaça e integridade dos componentes.' },
    { num: '03', title: 'Diagnóstico', desc: 'Identificação na bancada do circuito aberto ou componente com falha.' },
    { num: '04', title: 'Recuperação', desc: 'Remoção do chip danificado e confecção de jumper ou substituição.' },
    { num: '05', title: 'Testes', desc: 'Ensaio elétrico e verificação de fluxo luminoso antes da liberação.' },
    { num: '06', title: 'Reutilização', desc: 'A lâmpada volta a iluminar salas e espaços comunitários.' },
  ];

  return (
    <section id="como-recuperamos" className="py-16 sm:py-24 bg-dark-grid text-white border-b border-[#143B2F] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header com botão de acesso ao Tutorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#FFB938] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB938] shadow-[0_0_8px_rgba(255,185,56,0.9)] animate-pulse shrink-0" />
              <span>5 — COMO RECUPERAMOS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Da bancada à nova luz.
            </h2>
            <p className="text-sm sm:text-base text-[#A8CCBC] leading-relaxed">
              Conheça o fluxo de trabalho institucional do projeto e acesse o guia prático passo a passo de recuperação de lâmpadas LED.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenTutorial}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#161204] bg-[#FFB938] hover:bg-[#F5A623] transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
            >
              <span>Acessar Tutorial de Reparo</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* 6 Top Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t border-[#174637] pt-10">
          {stepsList.map((step) => (
            <div key={step.num} className="space-y-2 group">
              <span className="text-xs font-mono font-bold text-[#FFB938] block group-hover:scale-105 transition-transform">
                {step.num}
              </span>
              <h3 className="text-sm font-display font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-[#A6C5B7] leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Card de Destaque da Página do Tutorial com Simulador */}
        <div className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-[#061712] via-[#0A261D] to-[#0E3327] border border-[#1B523F] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F382A] border border-[#1E6047] text-[#86E49E] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FFB938] animate-pulse" />
                <span>Página Dedicada · Laboratório Virtual</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Quer aprender a recuperar na prática?
              </h3>
              <p className="text-sm sm:text-base text-[#9EC7B5] leading-relaxed max-w-2xl">
                Preparamos uma página completa com o simulador visual das 5 etapas da bancada (abertura, teste 3V, remoção, solda e recondicionamento), lista de ferramentas, teoria do jumper e orientações de segurança elétrica (NR-10).
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#C6E6D5]">
                <span className="px-3 py-1 rounded-lg bg-[#0E2F23] border border-[#1B4F3B]">✓ Simulador Interativo 3D</span>
                <span className="px-3 py-1 rounded-lg bg-[#0E2F23] border border-[#1B4F3B]">✓ Guia de Ferramentas</span>
                <span className="px-3 py-1 rounded-lg bg-[#0E2F23] border border-[#1B4F3B]">✓ Teoria do Circuito Jumper</span>
                <span className="px-3 py-1 rounded-lg bg-[#0E2F23] border border-[#1B4F3B]">✓ Normas de Segurança NR-10</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#061611]/80 border border-[#164939] text-center space-y-4">
              <div className="text-4xl">🔧⚡💡</div>
              <div>
                <span className="text-sm font-bold text-white block">Página do Tutorial</span>
                <span className="text-xs text-[#8BB7A3]">Acesso livre para estudantes e comunidade</span>
              </div>
              <button
                type="button"
                onClick={onOpenTutorial}
                className="w-full py-3 px-5 rounded-xl bg-[#FFB938] hover:bg-[#F5A623] text-[#161204] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Abrir Tutorial de Reparo →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
