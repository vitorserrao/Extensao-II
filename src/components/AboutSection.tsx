import React from 'react';
import labBenchImage from '../assets/images/bancada_eletronica_ifsc_1791035796504.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="projeto" className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag & Headline */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block mb-3">
            02 — O projeto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Conhecimento técnico transformado em ação concreta.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Estudantes e professores do IFSC recebem lâmpadas LED descartadas, identificam o defeito e recuperam as que ainda podem funcionar. O objetivo é reduzir o descarte, gerar aprendizado prático e devolver luz à comunidade.
          </p>
        </div>

        {/* Fluid Modern Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3 Pillars (Por quê, Quem, Onde) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Por quê */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/70 shadow-xs hover:border-zinc-300 transition-all">
              <span className="text-[11px] font-mono font-medium text-amber-600 uppercase tracking-wider block mb-1">
                Motivação
              </span>
              <h3 className="text-lg font-display font-bold text-zinc-900 mb-1.5">
                Por quê
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Muitas lâmpadas são jogadas fora com só uma peça com defeito.
              </p>
            </div>

            {/* Quem */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/70 shadow-xs hover:border-zinc-300 transition-all">
              <span className="text-[11px] font-mono font-medium text-emerald-600 uppercase tracking-wider block mb-1">
                Participantes
              </span>
              <h3 className="text-lg font-display font-bold text-zinc-900 mb-1.5">
                Quem
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Estudantes, professores e a comunidade do entorno.
              </p>
            </div>

            {/* Onde */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200/70 shadow-xs hover:border-zinc-300 transition-all">
              <span className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-wider block mb-1">
                Espaço Físico
              </span>
              <h3 className="text-lg font-display font-bold text-zinc-900 mb-1.5">
                Onde
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Laboratórios do IFSC, como ação de extensão.
              </p>
            </div>

          </div>

          {/* Workbench Photo & Bench Note */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-2xl overflow-hidden bg-white border border-zinc-200/70 p-3 shadow-xs flex flex-col justify-between">
              <div className="relative aspect-[16/10] sm:aspect-auto sm:flex-1 rounded-xl overflow-hidden bg-zinc-100 min-h-[220px]">
                <img
                  src={labBenchImage}
                  alt="Bancada de ensaios do IFSC"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-medium text-zinc-800 shadow-xs">
                  Laboratório IFSC · Bancada de Ensaios
                </div>
              </div>

              <div className="pt-4 px-2">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Ambiente prático onde instrumentos de precisão, multímetros e estações de retrabalho são operados por discentes sob orientação docente.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
