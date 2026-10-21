import React from 'react';
import heroBgImage from '../assets/images/hero_lab_lampada_led_1791413063121.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 lg:min-h-[620px] flex items-center border-b border-[#E0E6DC] overflow-hidden bg-[#F8FAF8]"
    >
      {/* Imagem de fundo cobrindo toda a seção com os textos por cima */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBgImage}
          alt="Bancada de eletrônica com reparo de lâmpadas LED e esquemas técnicos no caderno"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Transição com fade mais claro sobre o lado da folha de caderno, garantindo leitura perfeita */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAF8]/95 via-[#F8FAF8]/75 via-45% to-transparent" />
      </div>



      {/* Conteúdo e textos mantendo o estilo original da aplicação */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Header Tag Oficial IFSC & Destaque do Curso */}
          <div className="space-y-2 font-sans">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EBF7ED] border border-[#D5E2D6] text-[#124B1E] text-xs font-bold shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CD191E]" />
              <span className="font-sans font-bold text-xs tracking-wider uppercase">
                PROJETO DE EXTENSÃO · IFSC
              </span>
            </div>

            <div>
              <p className="text-sm sm:text-base font-sans font-extrabold text-[#124B1E] tracking-normal uppercase">
                CURSO SUPERIOR DE TECNOLOGIA EM SISTEMAS DE ENERGIA
              </p>
            </div>
          </div>

          {/* Main Headline - Bloqueado estritamente em exatamente duas linhas */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-extrabold tracking-tight leading-[1.12] text-[#0D241C]">
            <span className="block whitespace-nowrap">
              Antes de descartar,
            </span>
            <span className="block whitespace-nowrap">
              <span className="marker-yellow">experimente recuperar</span>
            </span>
          </h1>

          {/* Box RESUMO com estética institucional limpa */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D5E2D6] space-y-1.5 max-w-xl shadow-xs">
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#2F9E41] font-bold block">
              RESUMO
            </span>
            <p className="text-xs sm:text-sm text-[#3A453F] leading-relaxed font-normal">
              O Projeto ReLED é um projeto de extensão do curso de Sistemas de Energia do IFSC focado em recuperar lâmpadas LED, prolongar sua vida útil e transformar o conhecimento acadêmico em eficiência energética e sustentabilidade para a sociedade.
            </p>
          </div>

          {/* Botões de ação alinhados à paleta IFSC */}
          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="#projeto"
              className="px-5 py-3 rounded-xl text-xs font-sans uppercase font-bold tracking-wider text-white bg-[#2F9E41] hover:bg-[#1E6B2C] transition-all shadow-xs hover:shadow-sm"
            >
              Sobre o Projeto →
            </a>

            <a
              href="#participe"
              className="px-5 py-3 rounded-xl text-xs font-sans uppercase font-bold tracking-wider text-[#1A1A1A] bg-white hover:bg-[#F4F8F4] border border-[#D5E2D6] transition-all shadow-2xs"
            >
              Como participar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
