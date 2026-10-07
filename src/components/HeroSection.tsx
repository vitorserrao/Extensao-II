import React from 'react';
import originalLabImage from '../assets/images/mao_lampada_lab_ifsc_1791334885996.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:min-h-[640px] flex items-center border-b border-[#E0E6DC] overflow-hidden bg-quadriculado"
    >
      {/* Decorative technical coordinate badge at top-right */}
      <div className="absolute top-4 right-6 hidden md:block text-[10px] font-mono text-[#2B5244] uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#CCD6C7] shadow-2xs z-20 pointer-events-none select-none">
        IFSC · EXT II · LAT -27.5954° LON -48.5480°
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            
            {/* Header Tag */}
            <div className="space-y-1 font-mono text-xs text-[#2A5E4D] uppercase tracking-wider font-semibold">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 border border-[#CCD6C7] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#164E3A]" />
                <span>PROJETO DE EXTENSÃO II · IFSC</span>
              </div>
              <p className="text-[11px] text-[#2C5246] tracking-wider pt-1 font-semibold">
                CURSO SUPERIOR DE TECNOLOGIA EM SISTEMAS DE ENERGIA
              </p>
            </div>

            {/* Main Headline em duas linhas */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-display font-black tracking-tight leading-[1.08] text-[#164E3A]">
              <span className="block drop-shadow-2xs">
                Antes de descartar,
              </span>
              <span className="block relative">
                experimente recuperar
                {/* Subtle highlighter yellow stroke underneath */}
                <span 
                  className="absolute left-0 bottom-1.5 w-full h-3.5 bg-[#FFB938]/45 -z-10 rounded-sm -rotate-0.5"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Box RESUMO */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#D5DDD2] shadow-sm space-y-2 max-w-xl transition-all hover:border-[#A2B8AC]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2E6B56] font-bold block">
                RESUMO
              </span>
              <p className="text-xs sm:text-sm text-[#2C3B35] leading-relaxed font-normal">
                Um projeto de extensão do curso de Sistemas de Energia do IFSC focado em recuperar lâmpadas LED, prolongar sua vida útil e transformar o conhecimento acadêmico em eficiência energética e sustentabilidade para a sociedade.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projeto"
                className="px-6 py-3.5 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-white bg-[#0D241C] hover:bg-[#1A3D31] transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                Ler o projeto →
              </a>

              <a
                href="#participe"
                className="px-6 py-3.5 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-[#0D241C] bg-white hover:bg-[#EEF2EA] border border-[#CCD6C7] transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                Como participar
              </a>
            </div>

          </div>

          {/* Right Column: A foto exata do usuário com transição suave para o fundo quadriculado */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
            
            <div className="relative w-full max-w-[480px] xl:max-w-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#D5DDD2] bg-[#FAF9F5] group">
              
              {/* A foto exata enviada pelo usuário */}
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={originalLabImage}
                  alt="Foto real do laboratório do IFSC: mão segurando lâmpada LED acesa com estudantes ao fundo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />

                {/* Sutil transição interna na borda esquerda com o fundo quadriculado */}
                <div 
                  className="hidden sm:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAF9F5]/30 to-transparent pointer-events-none"
                />

                {/* Badge institucional sobre a foto real */}
                <div className="absolute top-3.5 left-3.5 bg-black/65 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>FOTOGRAFIA REAL · LABORATÓRIO IFSC</span>
                </div>
              </div>

            </div>

            {/* Legenda com padrão institucional */}
            <p className="mt-3 text-[11px] font-mono text-[#3D5E53] italic text-center lg:text-right max-w-[480px]">
              Figura 1 — Lâmpada LED acesa na bancada do laboratório de Sistemas de Energia do IFSC com estudantes.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
