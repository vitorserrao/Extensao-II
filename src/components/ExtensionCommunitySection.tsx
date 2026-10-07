import React from 'react';
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
    <section id="extensao" className="py-16 sm:py-24 bg-white border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-18">
        
        {/* PARTE 1: Cabeçalho e Fluxo de Extensão */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
              <span>6 — EXTENSÃO E COMUNIDADE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Extensão é colocar o<br />
              conhecimento em<br />
              movimento.
            </h2>

            <p className="text-sm sm:text-base text-[#2E423A] leading-relaxed font-normal pt-1">
              No projeto, aquilo que é aprendido no curso de Sistemas de Energia ganha aplicação prática e retorna para a comunidade em forma de conhecimento, serviço e participação.
            </p>
          </div>

          {/* Linear Chain */}
          <div className="p-6 rounded-2xl bg-[#F7F8F5] border border-[#CCD6C7] overflow-x-auto shadow-2xs">
            <div className="flex items-center gap-2 sm:gap-3 min-w-[620px]">
              {extensionChain.map((node, idx) => (
                <React.Fragment key={node.name}>
                  <div
                    className={`px-4 py-3 rounded-lg font-mono text-xs uppercase font-bold text-center shrink-0 shadow-2xs ${
                      node.isAmber
                        ? 'bg-[#FFB938] text-[#1E1704]'
                        : node.isHighlight
                        ? 'bg-[#0D241C] text-white'
                        : 'bg-white text-[#193328] border border-[#CCD6C7]'
                    }`}
                  >
                    {node.name}
                  </div>

                  {idx < extensionChain.length - 1 && (
                    <span className="text-[#88A397] font-mono text-base font-bold shrink-0">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* PARTE 2: Quem faz acontecer (Estudantes, Orientação, Parceiros + 3 fotos reais) */}
        <div className="space-y-8 pt-8 border-t border-[#CCD6C7]">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2E6B56] font-bold block">
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5DDD2] shadow-xs relative group">
                <img
                  src={studentsBenchImage}
                  alt="Estudantes trabalhando no laboratório"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs">
                  FOTO REAL · BANCADA DE ENSAIOS
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#556961] italic">
                Figura 7 — Estudantes trabalhando no laboratório.
              </p>
              <div className="pt-2 border-t border-[#D5DDD2]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#4E6B5F] block mb-0.5">
                  ESTUDANTES
                </span>
                <p className="text-xs sm:text-sm text-[#1D332A] font-semibold">
                  Alunos do Curso Superior de Tecnologia em Sistemas de Energia
                </p>
              </div>
            </div>

            {/* Card 2: ORIENTAÇÃO */}
            <div className="space-y-3.5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5DDD2] shadow-xs relative group">
                <img
                  src={handLampImage}
                  alt="Lâmpada em avaliação"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs">
                  FOTO REAL · AVALIAÇÃO DE BANCADA
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#556961] italic">
                Figura 8 — Lâmpada em avaliação.
              </p>
              <div className="pt-2 border-t border-[#D5DDD2]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#4E6B5F] block mb-0.5">
                  ORIENTAÇÃO
                </span>
                <p className="text-xs sm:text-sm text-[#1D332A] font-semibold">
                  Professores e Orientadores do IFSC
                </p>
              </div>
            </div>

            {/* Card 3: PARCEIROS */}
            <div className="space-y-3.5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5DDD2] shadow-xs relative group">
                <img
                  src={lampPartsImage}
                  alt="Placa de LEDs e ferramentas de reparo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs">
                  FOTO REAL · CIRCUITO E INSTRUMENTAÇÃO
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#556961] italic">
                Figura 9 — Placa de LEDs e ferramentas de reparo.
              </p>
              <div className="pt-2 border-t border-[#D5DDD2]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#4E6B5F] block mb-0.5">
                  PARCEIROS
                </span>
                <p className="text-xs sm:text-sm text-[#1D332A] font-semibold">
                  Pontos de Coleta Comunitários e Sociedade Civil
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PARTE 3: Conhecimento que sai da sala de aula (Fechamento institucional da seção) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F261E] text-white space-y-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight leading-tight">
                Conhecimento que sai da sala de aula.
              </h4>
              <p className="text-xs sm:text-sm text-[#B7D1C5] leading-relaxed font-normal">
                Estudantes e professores do IFSC aplicam conhecimentos de energia, eletrônica e eficiência energética em uma ação que chega à comunidade.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xl block">🏛️</span>
                <span className="text-xs font-mono font-bold text-white block">IFSC</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xl block">⚡</span>
                <span className="text-xs font-mono font-bold text-white block">Eficiência</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xl block">🌱</span>
                <span className="text-xs font-mono font-bold text-white block">Impacto</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xl block">🤝</span>
                <span className="text-xs font-mono font-bold text-white block">Comunidade</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
