import React from 'react';
import heroBgImage from '../assets/images/hero_lab_lampada_led_1791413063121.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:min-h-[620px] flex items-center border-b border-[#E0E6DC] overflow-hidden bg-[#FAF9F5]"
    >
      {/* Imagem de fundo cobrindo toda a seção com os textos por cima */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBgImage}
          alt="Bancada de eletrônica com reparo de lâmpadas LED e esquemas técnicos no caderno"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Overlay suave para legibilidade perfeita dos textos no lado esquerdo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/90 via-[#FAF9F5]/70 to-[#FAF9F5]/25 md:to-transparent" />
      </div>

      {/* Identificador técnico no topo direito */}
      <div className="absolute top-4 right-6 hidden md:block text-[10px] font-mono text-[#2E423A] uppercase tracking-widest bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#D5DDD2] shadow-2xs z-20 pointer-events-none select-none">
        IFSC · EXT II · LAT -27.5954° LON -48.5480°
      </div>

      {/* Conteúdo e textos mantendo o estilo original da aplicação */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          
          {/* Header Tag */}
          <div className="space-y-1 font-mono text-xs uppercase tracking-wider text-[#2E423A]">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#E4ECE1] border border-[#CCD6C7] text-[#172E25]">
              <span className="w-2 h-2 rounded-full bg-[#1A7F5A]" />
              <span>PROJETO DE EXTENSÃO II · IFSC</span>
            </div>
            <p className="text-[11px] text-[#556E62] tracking-wider pt-0.5 font-medium">
              CURSO SUPERIOR DE TECNOLOGIA EM SISTEMAS DE ENERGIA
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-display font-black tracking-tight leading-[1.08] text-[#0D241C]">
            <span className="block">
              Antes de descartar,
            </span>
            <span className="block relative text-[#0D241C]">
              experimente recuperar
              {/* Marca-texto amarelo característico */}
              <span 
                className="absolute left-0 bottom-1 w-full h-3.5 bg-[#FFB938]/40 -z-10 rounded-xs"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Box RESUMO original */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#EBF2E8]/90 backdrop-blur-md border border-[#D5DDD2] space-y-1.5 max-w-xl shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2A5E4D] font-bold block">
              RESUMO
            </span>
            <p className="text-xs sm:text-sm text-[#2E423A] leading-relaxed font-normal">
              Um projeto de extensão do curso de Sistemas de Energia do IFSC focado em recuperar lâmpadas LED, prolongar sua vida útil e transformar o conhecimento acadêmico em eficiência energética e sustentabilidade para a sociedade.
            </p>
          </div>

          {/* Botões de ação no estilo original */}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="#projeto"
              className="px-5 py-3 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-[#061B14] bg-[#FFB938] hover:bg-[#F5B02E] transition-all shadow-xs hover:shadow-sm"
            >
              Ler o projeto →
            </a>

            <a
              href="#participe"
              className="px-5 py-3 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-[#172E25] bg-white hover:bg-[#F4F6F1] border border-[#CCD6C7] transition-all shadow-2xs"
            >
              Como participar
            </a>
          </div>

          {/* Tags informativas */}
          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-[#2E423A]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-[#D5DDD2]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Oficina Prática de LED
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-[#D5DDD2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A7F5A]" />
              Economia Circular & Descarte Zero
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-[#D5DDD2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A5E4D]" />
              Extensão Comunitária Aberta
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
