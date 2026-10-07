import React from 'react';
import studentsBenchImage from '../assets/images/estudantes_bancada_eletronica_1791041208045.jpg';
import handLampImage from '../assets/images/mao_lampada_led_verdadeira_1791413076620.jpg';
import lampPartsImage from '../assets/images/lampada_led_acesa_amarela_1791035780889.jpg';

export const WhoMakesItPdfSection: React.FC = () => {
  return (
    <section id="quem-faz-acontecer" className="py-16 sm:py-20 bg-[#F7F8F5] border-b border-[#E0E6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
            <span>9 — QUEM FAZ ACONTECER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
            Estudantes, professores e a<br />
            comunidade do IFSC.
          </h2>
        </div>

        {/* 3 Real Photo Cards (PDF Page 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="space-y-3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5DDD2] shadow-xs relative">
              <img
                src={studentsBenchImage}
                alt="Estudantes trabalhando no laboratório"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs">
                FOTO REAL · ESTUDANTES NA BANCADA
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#556961] italic">
              Figura 7 — Estudantes trabalhando no laboratório.
            </p>
            <div className="pt-2 border-t border-[#D5DDD2]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#4E6B5F] block mb-0.5">
                ESTUDANTES
              </span>
              <p className="text-xs text-[#1D332A] font-semibold">
                Alunos do Curso Superior de Tecnologia em Sistemas de Energia
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="space-y-3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5DDD2] shadow-xs relative">
              <img
                src={handLampImage}
                alt="Lâmpada em avaliação"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs">
                FOTO REAL · MÃO SEGURANDO UMA LÂMPADA
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#556961] italic">
              Figura 8 — Lâmpada em avaliação.
            </p>
            <div className="pt-2 border-t border-[#D5DDD2]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#4E6B5F] block mb-0.5">
                ORIENTAÇÃO
              </span>
              <p className="text-xs text-[#1D332A] font-semibold">
                Professores e Orientadores do IFSC
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="space-y-3">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#D5DDD2] shadow-xs relative">
              <img
                src={lampPartsImage}
                alt="Placa de LEDs e ferramentas de reparo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] uppercase tracking-wider backdrop-blur-xs">
                FOTO REAL · PLACA LED E ESTAÇÃO DE SOLDA
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#556961] italic">
              Figura 9 — Placa de LEDs e ferramentas de reparo.
            </p>
            <div className="pt-2 border-t border-[#D5DDD2]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#4E6B5F] block mb-0.5">
                PARCEIROS
              </span>
              <p className="text-xs text-[#1D332A] font-semibold">
                Pontos de Coleta Comunitários e Sociedade Civil
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
