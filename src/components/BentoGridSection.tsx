import React from 'react';
import disassembledBulbImage from '../assets/images/lampada_led_acesa_amarela_1791035780889.jpg';
import handBulbImage from '../assets/images/mao_lampada_led_verdadeira_1791413076620.jpg';

interface BentoGridSectionProps {
  onOpenDonateModal: () => void;
  onOpenGuideModal: () => void;
}

export const BentoGridSection: React.FC<BentoGridSectionProps> = ({
  onOpenDonateModal,
  onOpenGuideModal,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Cards Bento Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Pontos de coleta (col-span-3 or 4) */}
          <div 
            id="pontos-de-coleta"
            className="lg:col-span-3 p-6 sm:p-7 rounded-2xl bg-[#F4F9F5] border border-emerald-100 flex flex-col justify-between relative overflow-hidden group shadow-2xs hover:shadow-md transition-all"
          >
            {/* Stylized vector map background with pins */}
            <div className="absolute right-0 bottom-0 w-44 h-44 opacity-25 pointer-events-none">
              <svg className="w-full h-full text-emerald-600" viewBox="0 0 200 200" fill="none">
                <path d="M20,40 Q80,20 120,60 T190,140" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M10,120 Q60,100 110,130 T180,180" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="70" cy="50" r="6" fill="currentColor" />
                <circle cx="130" cy="110" r="6" fill="currentColor" />
                <circle cx="160" cy="70" r="6" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#0D3828] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-display font-bold text-[#0D3828]">
                  Pontos de coleta
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Veja <span className="text-emerald-700 font-bold">onde você</span> pode entregar suas lâmpadas com defeito.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-gray-800 bg-white border border-gray-200 hover:border-emerald-600 hover:text-emerald-800 transition-all shadow-xs cursor-pointer"
              >
                <span>Ver pontos de coleta</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Card 2: Tutorial (col-span-3 or 4) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#16382D] text-white p-5 flex flex-col justify-between relative overflow-hidden shadow-2xs group hover:shadow-md transition-all">
            
            <div className="flex items-center gap-4">
              {/* Photo thumbnail of disassembled bulb */}
              <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-900 border border-white/20 shrink-0">
                <img
                  src={disassembledBulbImage}
                  alt="Placa interna e componentes de lâmpada LED"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                    <span className="text-[10px] pl-0.5">▶</span>
                  </div>
                  <h3 className="text-sm font-display font-bold text-white">
                    Tutorial
                  </h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-snug">
                  Aprenda a identificar falhas e como funciona o processo de reparo.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/10">
              <button
                type="button"
                onClick={onOpenGuideModal}
                className="w-full py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Acessar o guia</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Card 3: Você também pode fazer parte! (col-span-3) */}
          <div 
            id="participe"
            className="lg:col-span-3 p-6 rounded-2xl bg-[#FFF9EB] border border-amber-200/80 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-[#0D3828] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-display font-bold text-gray-900 leading-tight">
                  Você também<br />pode fazer parte!
                </h3>
              </div>

              {/* Checklist */}
              <ul className="space-y-1.5 text-[11px] text-gray-700">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Tem lâmpadas com defeito?</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Quer entender como funciona?</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Quer aprender a diagnosticar e reparar?</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Quer acompanhar o impacto do projeto?</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenDonateModal}
                className="w-full py-2.5 px-4 rounded-full bg-[#164E3A] hover:bg-[#0F3828] text-xs font-display font-bold text-white transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Saiba como participar</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Card 4: Juntos podemos ir mais longe! Photo Card (col-span-3) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#FFF9EB] border border-amber-200/80 p-4 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xs">
            
            {/* Handwritten note with yellow doodle rays */}
            <div className="absolute top-3 right-3 z-10 text-right pointer-events-none select-none">
              <p className="font-handwriting text-2xl text-gray-800 leading-tight">
                Juntos<br />podemos<br />ir mais<br />longe!
              </p>
            </div>

            {/* Photo of hand holding lamp with hand-drawn rays */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-3 border-white shadow-md my-2">
              <img
                src={handBulbImage}
                alt="Mãos com lâmpada acesa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Doodle red/yellow ray bursts */}
              <div className="absolute -top-1 -left-1 pointer-events-none">
                <svg className="w-8 h-8 text-amber-500" viewBox="0 0 40 40" stroke="currentColor" strokeWidth="3">
                  <line x1="10" y1="10" x2="2" y2="2" />
                  <line x1="20" y1="8" x2="20" y2="0" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
