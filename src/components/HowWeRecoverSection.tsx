import React, { useState } from 'react';
import { InteractiveRecoveryLamp } from './InteractiveRecoveryLamp';

interface HowWeRecoverSectionProps {
  onOpenGuideModal?: () => void;
}

export const HowWeRecoverSection: React.FC<HowWeRecoverSectionProps> = () => {
  const [currentStep, setCurrentStep] = useState<number>(5);

  const stepsList = [
    { num: '01', title: 'Coleta', desc: 'Recebemos lâmpadas que deixaram de funcionar.' },
    { num: '02', title: 'Avaliação', desc: 'Triagem inicial do estado geral.' },
    { num: '03', title: 'Diagnóstico', desc: 'Identificamos onde está a falha.' },
    { num: '04', title: 'Recuperação', desc: 'Substituição ou reparo do componente defeituoso, quando tecnicamente viável.' },
    { num: '05', title: 'Testes', desc: 'Verificamos o funcionamento antes de liberar.' },
    { num: '06', title: 'Reutilização', desc: 'A lâmpada volta a ter uso.' },
  ];

  const animationStages = [
    {
      num: '01',
      name: 'Abertura da lâmpada',
      detail: 'Utilizando uma espátula realize a abertura da lâmpada',
    },
    {
      num: '02',
      name: 'Teste com pilhas (3V)',
      detail: 'Com o auxílio de duas pilhas AA (3V), teste os LEDs individualmente até identificar o LED queimado',
    },
    {
      num: '03',
      name: 'Remoção do LED',
      detail: 'Retire o LED queimado com um alicate',
    },
    {
      num: '04',
      name: 'Soldagem do ponto',
      detail: 'Com o ferro de solda e estanho, solde o local que o LED foi retirado',
    },
    {
      num: '05',
      name: 'Testar',
      detail: 'A lâmpada é testada antes de voltar a ter uso. Só então segue para reutilização.',
    },
  ];

  return (
    <section id="como-recuperamos" className="py-16 sm:py-24 bg-dark-grid text-white border-b border-[#143B2F] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFB938] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#FFB938]" />
            <span>4 — COMO RECUPERAMOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Da bancada à nova luz.
          </h2>
        </div>

        {/* 6 Top Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t border-[#174637] pt-10">
          {stepsList.map((step) => (
            <div key={step.num} className="space-y-2 group">
              <span className="text-xs font-mono font-bold text-[#FFB938] block group-hover:scale-105 transition-transform">
                {step.num}
              </span>
              <h3 className="text-sm font-display font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-[#A6C5B7] leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Animated Interactive Stage Box (Figura 6) */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#061712] border border-[#164636] space-y-6 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Realistic LED Bulb in Recovery */}
            <div className="lg:col-span-5">
              <InteractiveRecoveryLamp
                currentStep={currentStep}
                onSelectStep={setCurrentStep}
              />
            </div>

            {/* Stages Selector Buttons */}
            <div className="lg:col-span-7 space-y-3">
              {animationStages.map((stage, idx) => {
                const stageNum = idx + 1;
                const isSelected = currentStep === stageNum;
                return (
                  <div
                    key={stage.num}
                    onClick={() => setCurrentStep(stageNum)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFB938] text-[#161204] border-[#FFB938] shadow-md font-bold'
                        : 'bg-[#0E2920] border-[#174637] text-white hover:bg-[#13382C]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span>{stage.num} {stage.name}</span>
                      {isSelected && <span className="text-[10px] uppercase font-bold tracking-wider">Etapa Ativa</span>}
                    </div>
                    {isSelected && (
                      <p className="mt-2 text-xs font-normal leading-relaxed text-[#2B1F04] animate-fadeIn">
                        {stage.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
