import React, { useState } from 'react';

export const ExtensionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const extensionFlow = [
    { name: 'IFSC', role: 'Instituição pública que ancora pesquisa, infraestrutura e docentes.' },
    { name: 'Conhecimento', role: 'Teoria eletroeletrônica, métodos de ensaio e sustentabilidade.' },
    { name: 'Estudantes', role: 'Protagonistas que realizam a triagem, diagnóstico e recuperação.' },
    { name: 'Aplicação prática', role: 'Ensaios reais de bancada, soldagem, medições e testes de segurança.' },
    { name: 'Comunidade', role: 'Destino das lâmpadas e parceira ativa nos pontos de coleta.' },
    { name: 'Impacto', role: 'Menos lixo eletrônico, eficiência energética e iluminação pública digna.' },
  ];

  return (
    <section id="extensao" className="py-20 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block mb-3">
            09 — Extensão
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-900 leading-[1.15]">
            O conhecimento sai da sala de aula e chega à comunidade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Extensão é quando a instituição de ensino leva o que produz para fora dos seus muros — e aprende junto com quem recebe.
          </p>
        </div>

        {/* Dynamic Extension Flow Rail */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/70 shadow-xs">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-6">
            Cadeia Formativa e Social de Extensão
          </span>

          {/* Flow Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
            {extensionFlow.map((node, idx) => (
              <React.Fragment key={node.name}>
                <div
                  onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                  className={`p-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col justify-center min-h-[105px] ${
                    activeStep === idx
                      ? 'bg-white border-zinc-900 shadow-sm scale-105'
                      : 'bg-white border-zinc-200/80 hover:border-zinc-300'
                  }`}
                >
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-display font-bold text-zinc-900">
                    {node.name}
                  </h3>
                </div>

                {idx < extensionFlow.length - 1 && (
                  <div className="hidden lg:flex justify-center text-zinc-300 font-mono text-sm">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Explanatory text for active step or general overview */}
          <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-zinc-600">
              {activeStep !== null ? (
                <span>
                  <strong className="text-zinc-900">{extensionFlow[activeStep].name}:</strong>{' '}
                  {extensionFlow[activeStep].role}
                </span>
              ) : (
                <span>Clique em uma etapa acima para visualizar seu papel no ecossistema de extensão.</span>
              )}
            </div>
            <span className="text-xs font-mono text-emerald-600 font-medium">
              Ação integradora IFSC
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
