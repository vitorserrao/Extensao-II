import React from 'react';
import { SectionHeading } from './SectionHeading';
import studentsBenchImage from '../assets/images/estudantes_bancada_eletronica_1791041208045.jpg';
import handLampImage from '../assets/images/mao_lampada_led_verdadeira_1791413076620.jpg';
import lampPartsImage from '../assets/images/lampada_led_acesa_amarela_1791035780889.jpg';

export const ExtensionCommunitySection: React.FC = () => {
  const extensionChain = [
    { name: 'IFSC', isHighlight: true },
    { name: 'Conhecimento', isHighlight: false },
    { name: 'Estudantes', isHighlight: false },
    { name: 'Aplicação prática', isHighlight: false },
    { name: 'Comunidade', isHighlight: false },
    { name: 'Impacto', isHighlight: true, isAmber: true },
  ];

  return (
    <section id="extensao" className="py-16 sm:py-24 border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-18">
        
        {/* PARTE 1: Cabeçalho e Fluxo de Extensão */}
        <div className="space-y-8">
          {/* mesma largura de meia coluna das outras seções, para o título ficar do mesmo tamanho */}
          <div className="lg:w-[calc(58.333%-1.458rem)]">
            <SectionHeading
              num={7}
              label="Extensão e comunidade"
              line1="Extensão é colocar o"
              line2={<>conhecimento em <span className="marker-yellow">movimento.</span></>}
            >
              <p>
                No projeto, aquilo que é aprendido no curso de Sistemas de Energia ganha aplicação prática e retorna para a comunidade em forma de conhecimento, serviço e participação.
              </p>
            </SectionHeading>
          </div>

          {/* Linear Chain */}
          <div className="p-6 rounded-2xl bg-[#F4F8F4] border border-[#D5E2D6] overflow-x-auto shadow-2xs">
            <div className="flex items-center gap-2 sm:gap-3 min-w-[620px]">
              {extensionChain.map((node, idx) => (
                <React.Fragment key={node.name}>
                  <div
                    className={`px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold text-center shrink-0 shadow-2xs ${
                      node.isAmber
                        ? 'bg-[#FFB938] text-[#161204]'
                        : node.isHighlight
                        ? 'bg-[#0D241C] text-white'
                        : 'bg-white text-[#0D241C] border border-[#D5E2D6]'
                    }`}
                  >
                    {node.name}
                  </div>

                  {idx < extensionChain.length - 1 && (
                    <span className="text-[#6B7F74] font-mono text-base font-bold shrink-0">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#3A453F] leading-relaxed">
            Estudantes e professores do IFSC aplicam conhecimentos de energia, eletrônica e eficiência energética em uma ação que chega à comunidade.
          </p>
        </div>

        {/* PARTE 2: Quem faz acontecer (Estudantes, Orientação, Parceiros + 3 fotos reais) */}
        <div className="space-y-8 pt-8 border-t border-[#D5E2D6]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2F9E41] font-bold block">
              Quem faz acontecer
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0D241C]">
              Estudantes, professores e a comunidade do IFSC.
            </h3>
          </div>

          {/* 3 Real Photo Cards com Estudantes, Orientação e Parceiros */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: ESTUDANTES */}
            <div className="space-y-3.5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5E2D6] shadow-xs relative group">
                <img
                  src={studentsBenchImage}
                  alt="Estudantes trabalhando no laboratório"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="pt-2 border-t border-[#D5E2D6]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#6B7F74] block mb-0.5">
                  ESTUDANTES
                </span>
                <p className="text-xs sm:text-sm text-[#0D241C] font-semibold">
                  Alunos do Curso Superior de Tecnologia em Sistemas de Energia
                </p>
              </div>
            </div>

            {/* Card 2: ORIENTAÇÃO */}
            <div className="space-y-3.5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5E2D6] shadow-xs relative group">
                <img
                  src={handLampImage}
                  alt="Lâmpada em avaliação"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="pt-2 border-t border-[#D5E2D6]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#6B7F74] block mb-0.5">
                  ORIENTAÇÃO
                </span>
                <p className="text-xs sm:text-sm text-[#0D241C] font-semibold">
                  Professores e Orientadores do IFSC
                </p>
              </div>
            </div>

            {/* Card 3: PARCEIROS */}
            <div className="space-y-3.5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5E2D6] shadow-xs relative group">
                <img
                  src={lampPartsImage}
                  alt="Placa de LEDs e ferramentas de reparo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="pt-2 border-t border-[#D5E2D6]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#6B7F74] block mb-0.5">
                  PARCEIROS
                </span>
                <p className="text-xs sm:text-sm text-[#0D241C] font-semibold">
                  Pontos de Coleta Comunitários
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
