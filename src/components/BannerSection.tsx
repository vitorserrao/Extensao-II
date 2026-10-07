import React from 'react';

export const BannerSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#16211D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight leading-tight">
              Conhecimento que<br />
              sai <span className="text-emerald-400 font-bold">da</span> sala de aula.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal max-w-lg">
              Estudantes e professores do IFSC aplicam conhecimentos de energia, eletrônica e eficiência energética em uma ação que chega à comunidade.
            </p>
          </div>

          {/* Right Column: 4 Pillars with Icons */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            
            {/* Pillar 1: IFSC */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="text-xs font-display font-bold text-white block">
                IFSC
              </span>
            </div>

            {/* Pillar 2: Eficiência energética */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs font-display font-bold text-white block">
                Eficiência energética
              </span>
            </div>

            {/* Pillar 3: Impacto ambiental */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.033 8.033 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-xs font-display font-bold text-white block">
                Impacto ambiental
              </span>
            </div>

            {/* Pillar 4: Comunidade */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-xs font-display font-bold text-white block">
                Comunidade
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
