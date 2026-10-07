import React from 'react';
import labBenchImage from '../assets/images/bancada_eletronica_ifsc_1791035796504.jpg';

export const ProjectSection: React.FC = () => {
  return (
    <section id="projeto" className="py-16 sm:py-24 bg-tech-grid border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
              <span>1 — O PROJETO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Conhecimento de sala<br />
              de aula, aplicado numa<br />
              bancada.
            </h2>

            <p className="text-sm sm:text-base text-[#2E423A] leading-relaxed font-normal">
              Somos estudantes do Curso Superior de Tecnologia em Sistemas de Energia do IFSC, e o <strong className="text-[#0D241C] font-bold">REACENDE</strong> é o nosso Projeto de Extensão II. Recebemos lâmpadas LED que deixaram de funcionar, investigamos o que falhou e avaliamos se vale recuperar.
            </p>
          </div>

          {/* Right Column: Key Facts Table */}
          <div className="lg:col-span-6 border-t border-b border-[#CCD6C7] divide-y divide-[#CCD6C7] text-xs sm:text-sm bg-white/70 backdrop-blur-xs rounded-xl px-4 sm:px-6 py-1 shadow-2xs">
            
            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-mono font-bold text-[11px] text-[#47665B] uppercase tracking-wider">
                QUEM PARTICIPA
              </span>
              <p className="sm:col-span-8 text-[#172E25] font-medium leading-relaxed">
                Estudantes e professores do curso, junto com a comunidade que entrega as lâmpadas.
              </p>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-mono font-bold text-[11px] text-[#47665B] uppercase tracking-wider">
                ONDE ACONTECE
              </span>
              <p className="sm:col-span-8 text-[#172E25] font-medium leading-relaxed">
                [CAMPUS E LABORATÓRIO DO IFSC] · Laboratórios de Eletrotécnica e Sistemas de Energia.
              </p>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-mono font-bold text-[11px] text-[#47665B] uppercase tracking-wider">
                O QUE FAZEMOS
              </span>
              <p className="sm:col-span-8 text-[#172E25] font-medium leading-relaxed">
                Coletamos, avaliamos, diagnosticamos, recuperamos quando é viável e testamos.
              </p>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-mono font-bold text-[11px] text-[#47665B] uppercase tracking-wider">
                POR QUE EXISTE
              </span>
              <p className="sm:col-span-8 text-[#172E25] font-medium leading-relaxed">
                Porque nem toda lâmpada que para de funcionar chegou ao fim da sua vida útil.
              </p>
            </div>

          </div>

        </div>

        {/* Figure 2: Lab photo */}
        <div className="space-y-2">
          <div className="rounded-3xl overflow-hidden bg-white border border-[#D5DDD2] shadow-sm aspect-[21/9] sm:aspect-[24/8] max-h-[360px] group">
            <img
              src={labBenchImage}
              alt="Bancada do laboratório com lâmpadas aguardando avaliação"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </div>
          <p className="text-[11px] font-mono text-[#556961] italic text-center sm:text-left">
            Figura 2 — Bancada do laboratório com lâmpadas aguardando avaliação.
          </p>
        </div>

      </div>
    </section>
  );
};
