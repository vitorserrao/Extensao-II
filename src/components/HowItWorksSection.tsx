import React, { useState } from 'react';
import studentsLabImage from '../assets/images/estudantes_bancada_eletronica_1791041208045.jpg';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Coleta',
      desc: 'Você leva sua lâmpada até um ponto de coleta.',
      bg: 'bg-[#2E7D32] text-white',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Diagnóstico',
      desc: 'Identificamos o problema e o componente com falha.',
      bg: 'bg-[#FBC02D] text-gray-900',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Reparo',
      desc: 'Realizamos o reparo com o apoio de estudantes e professores.',
      bg: 'bg-[#81C784] text-gray-900',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Teste e retorno',
      desc: 'A lâmpada volta a funcionar e pode ser usada novamente.',
      bg: 'bg-[#C8E6C9] text-gray-900',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-recuperamos" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div id="como-funciona" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Como funciona flowchart */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D3828] tracking-tight leading-tight">
                Como funciona?
              </h2>
              <p className="mt-2 text-sm text-gray-600 font-normal">
                O processo é simples e envolve estudantes, professores e a comunidade.
              </p>
            </div>

            {/* 4 Step Horizontal Flow with Arrows */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-start relative">
              {steps.map((step, idx) => (
                <div 
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 ${step.bg}`}>
                      {step.icon}
                    </div>
                    {idx < steps.length - 1 && (
                      <span className="hidden sm:inline text-gray-300 font-bold text-sm ml-2">→</span>
                    )}
                  </div>
                  <h3 className="text-xs font-display font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-600 leading-snug">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mini institutional note */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span>
                Ação realizada nos laboratórios do <strong>IFSC</strong> por discentes sob supervisão docente contínua.
              </span>
            </div>
          </div>

          {/* Center Column: Lab Workbench Documentary Photo */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex flex-col">
              <img
                src={studentsLabImage}
                alt="Estudantes no laboratório de eletrônica do IFSC trabalhando na bancada"
                referrerPolicy="no-referrer"
                className="w-full h-full min-h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Nosso impacto até agora */}
          <div className="lg:col-span-3">
            <div id="impacto" className="h-full p-6 sm:p-7 rounded-2xl bg-[#EAF5EE] border border-emerald-100/80 flex flex-col justify-between shadow-2xs">
              <div>
                <h3 className="text-lg font-display font-bold text-[#0D3828] mb-6">
                  Nosso impacto até agora
                </h3>

                <div className="space-y-6">
                  
                  {/* Metric 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-emerald-700/40 flex items-center justify-center text-emerald-800 bg-white/70 shadow-2xs shrink-0">
                      <span className="text-base">💡</span>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-extrabold text-[#0D3828] tracking-tight leading-none">
                        248
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        lâmpadas recuperadas
                      </span>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-emerald-700/40 flex items-center justify-center text-emerald-800 bg-white/70 shadow-2xs shrink-0">
                      <span className="text-base">🌿</span>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-extrabold text-[#0D3828] tracking-tight leading-none">
                        98 kg
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        de resíduos potencialmente evitados
                      </span>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-emerald-700/40 flex items-center justify-center text-emerald-800 bg-white/70 shadow-2xs shrink-0">
                      <span className="text-base">⏱️</span>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-extrabold text-[#0D3828] tracking-tight leading-none">
                        1.860 h
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        de vida útil recuperadas
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom quote */}
              <div className="mt-8 pt-5 border-t border-emerald-200/60">
                <p className="text-[11px] text-gray-600 leading-relaxed font-normal">
                  Cada número representa uma lâmpada que não virou resíduo e uma oportunidade de continuar iluminando.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
