import React, { useState } from 'react';
import leavesImage from '../assets/images/folhas_verdes_impacto_1791041220520.jpg';

export const WhyRecoverSection: React.FC = () => {
  const [showDataDetails, setShowDataDetails] = useState(false);

  return (
    <section id="por-que-recuperar" className="py-14 sm:py-20 bg-[#F2F7F2] border-y border-emerald-100/60">
      <div id="sobre" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid: Reference Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, description, Saiba mais */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D3828] tracking-tight leading-tight">
              Por que<br className="hidden sm:inline" /> recuperar?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              Uma lâmpada recuperada é uma forma de aproveitar melhor os recursos, reduzir o descarte de materiais e contribuir para a eficiência energética.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowDataDetails(!showDataDetails)}
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#0D3828] hover:text-emerald-700 transition-colors cursor-pointer"
              >
                <span>{showDataDetails ? 'Ocultar dados de bancada' : 'Ver dados de diagnóstico de bancada'}</span>
                <span aria-hidden="true">{showDataDetails ? '↑' : '→'}</span>
              </button>
            </div>
          </div>

          {/* Center Column: 3 Pillars with Circular Outline Icons */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            
            {/* Pillar 1: Mais eficiência energética */}
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#164E3A] flex items-center justify-center text-[#164E3A] bg-white shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-sm font-display font-bold text-[#0D3828] leading-tight">
                Mais eficiência energética
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Prolonga a vida útil e evita substituições precoces.
              </p>
            </div>

            {/* Pillar 2: Menos impacto ambiental */}
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#164E3A] flex items-center justify-center text-[#164E3A] bg-white shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 2.38-.93 4.54-2.45 6.13M12 3v18M12 12c-2.5 0-4.5 2-4.5 4.5" />
                </svg>
              </div>
              <h3 className="text-sm font-display font-bold text-[#0D3828] leading-tight">
                Menos impacto ambiental
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Evita o descarte de materiais que podem ser reaproveitados.
              </p>
            </div>

            {/* Pillar 3: Conecta a comunidade */}
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#164E3A] flex items-center justify-center text-[#164E3A] bg-white shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-display font-bold text-[#0D3828] leading-tight">
                Conecta a comunidade
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Leva conhecimento universitário para além da universidade.
              </p>
            </div>

          </div>

          {/* Right Column: Fresh Green Leaves with Handwritten Note */}
          <div className="lg:col-span-3 relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Handwritten Note with yellow doodle arrow */}
              <div className="absolute -top-8 right-0 sm:-right-4 z-10 max-w-[160px] text-right pointer-events-none select-none">
                <p className="font-handwriting text-xl sm:text-2xl text-gray-800 leading-tight">
                  Pequenas ações geram grandes impactos.
                </p>
                {/* Hand drawn yellow doodle arrow */}
                <div className="flex justify-end pr-4">
                  <svg className="w-12 h-10 text-amber-400 transform -rotate-12" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10,15 Q45,10 55,40" />
                    <path d="M45,35 L55,40 L65,30" />
                  </svg>
                </div>
              </div>

              {/* Plant sprout photograph circle */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src={leavesImage}
                  alt="Brotos de folhas verdes sustentabilidade"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Expandable Open Repair Data Card (Inspirado no The Restart Project) */}
        {showDataDetails && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200/80 shadow-sm space-y-6 transition-all animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Dados Abertos da Bancada de Ensaios · IFSC
                </span>
                <h3 className="text-xl font-display font-bold text-gray-900 mt-0.5">
                  O que descobrimos ao abrir as lâmpadas descartadas?
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Padrão Open Repair Data
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                <span className="text-3xl font-display font-extrabold text-emerald-700 block mb-1">
                  78%
                </span>
                <strong className="text-xs text-gray-900 block font-semibold mb-1">
                  Apenas 1 LED SMD aberto
                </strong>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Como os diodos estão em circuito em série, 1 LED queimado apaga a lâmpada inteira, embora 90% dos componentes continuem funcionando perfeitamente.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                <span className="text-3xl font-display font-extrabold text-amber-600 block mb-1">
                  14%
                </span>
                <strong className="text-xs text-gray-900 block font-semibold mb-1">
                  Capacitor de filtragem no driver
                </strong>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Degradação térmica do capacitor eletrolítico que causa oscilação (flicker). A troca por um de maior tensão restaura a lâmpada com longa vida útil.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100">
                <span className="text-3xl font-display font-extrabold text-[#164E3A] block mb-1">
                  8%
                </span>
                <strong className="text-xs text-gray-900 block font-semibold mb-1">
                  Contato mecânico ou solda fria
                </strong>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Oxidação no ponto de contato da rosca E27 ou fio solto na carcaça. Reparo rápido sem necessidade de novos componentes.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
