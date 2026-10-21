import React from 'react';
import { Building2, Zap, Leaf, Handshake } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* PARTE 1: texto à esquerda, fluxo da extensão à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
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

          {/* Fluxo da extensão */}
          <ol className="lg:col-span-6 bg-white border border-[#D5E2D6] shadow-2xs rounded-2xl p-6 space-y-2.5" aria-label="Fluxo da extensão">
            {extensionChain.map((node, idx) => (
              <li key={node.name} className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    node.isAmber ? 'bg-[#FFB938] text-[#1E1704]' : node.isHighlight ? 'bg-[#1A1A1A] text-white' : 'bg-[#EBF7ED] text-[#2F9E41]'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="text-sm font-bold text-[#1A1A1A]">{node.name}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* PARTE 2: Quem faz acontecer (Estudantes, Orientação, Parceiros + 3 fotos reais) */}
        <div className="space-y-8 pt-8 border-t border-[#CCD6C7]">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase tracking-wider text-[#2F9E41] font-bold block">
              Quem faz acontecer
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1A1A1A]">
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
                <Building2 className="w-5 h-5 mx-auto text-[#FFB938]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold text-white block">IFSC</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <Zap className="w-5 h-5 mx-auto text-[#FFB938]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold text-white block">Eficiência</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <Leaf className="w-5 h-5 mx-auto text-[#FFB938]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold text-white block">Impacto</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <Handshake className="w-5 h-5 mx-auto text-[#FFB938]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold text-white block">Comunidade</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
