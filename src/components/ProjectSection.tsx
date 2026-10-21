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
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#2F9E41] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB938] shadow-[0_0_8px_rgba(255,185,56,0.9)] animate-pulse shrink-0" />
              <span>1 — O PROJETO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1A1A1A] tracking-tight leading-[1.12]">
              Conhecimento de sala<br />
              de aula, <span className="marker-yellow">aplicado numa bancada.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#3A453F] leading-relaxed font-normal space-y-3">
              <span className="block">
                O <strong className="text-[#1A1A1A] font-bold">Projeto ReLED</strong> é uma iniciativa de extensão universitária vinculada ao curso Superior de Tecnologia em Sistemas de Energia do Instituto Federal de Santa Catarina (IFSC), Câmpus Florianópolis. O projeto tem como objetivo promover a recuperação de lâmpadas LED, contribuindo para o prolongamento de sua vida útil e para o uso mais eficiente dos recursos.
              </span>
              <span className="block">
                A iniciativa busca incentivar a economia circular, reduzir o descarte de resíduos eletroeletrônicos e minimizar os impactos ambientais associados ao fim da vida útil desses produtos. Também destaca o papel da tecnologia LED na promoção da eficiência energética nos sistemas de iluminação. Além disso, integra ensino, pesquisa e extensão, aproximando a comunidade acadêmica e a sociedade de práticas mais sustentáveis e conscientes.
              </span>
            </p>
          </div>

          {/* Right Column: Key Facts Table */}
          <div className="lg:col-span-6 border-t border-b border-[#D5E2D6] divide-y divide-[#D5E2D6] text-xs sm:text-sm bg-white/90 backdrop-blur-xs rounded-xl px-4 sm:px-6 py-1 shadow-2xs">
            
            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-sans font-bold text-xs text-[#2F9E41] uppercase tracking-wider">
                PÚBLICO-ALVO
              </span>
              <p className="sm:col-span-8 text-[#1A1A1A] font-medium leading-relaxed">
                Estudantes e servidores do IFSC, além da comunidade externa interessada em sustentabilidade, eficiência energética e recuperação de lâmpadas LED.
              </p>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-sans font-bold text-xs text-[#2F9E41] uppercase tracking-wider">
                ONDE ACONTECE
              </span>
              <p className="sm:col-span-8 text-[#1A1A1A] font-medium leading-relaxed">
                Departamento Acadêmico de Eletrotécnica (DAE) do Instituto Federal de Santa Catarina (IFSC), Câmpus Florianópolis.
              </p>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-sans font-bold text-xs text-[#2F9E41] uppercase tracking-wider">
                O QUE FAZEMOS
              </span>
              <p className="sm:col-span-8 text-[#1A1A1A] font-medium leading-relaxed">
                Realizamos a coleta, triagem, avaliação, recuperação e distribuição de lâmpadas LED recuperadas. Também realizamos oficinas práticas de recuperação de lâmpadas e palestras sobre eficiência energética, sustentabilidade e economia circular, compartilhando conhecimentos e incentivando práticas mais conscientes.
              </p>
            </div>

            <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
              <span className="sm:col-span-4 font-sans font-bold text-xs text-[#2F9E41] uppercase tracking-wider">
                POR QUE EXISTIMOS
              </span>
              <p className="sm:col-span-8 text-[#1A1A1A] font-medium leading-relaxed">
                Porque uma lâmpada que deixa de funcionar nem sempre chegou ao fim de sua vida útil. Buscamos prolongar sua utilização, reduzir o descarte de resíduos eletroeletrônicos e contribuir para a preservação ambiental.
              </p>
            </div>

          </div>

        </div>

        {/* Figure 2: Lab photo */}
        <div>
          <div className="rounded-3xl overflow-hidden bg-white border border-[#D5DDD2] shadow-sm aspect-[21/9] sm:aspect-[24/8] max-h-[360px] group">
            <img
              src={labBenchImage}
              alt="Bancada do laboratório com lâmpadas aguardando avaliação"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
