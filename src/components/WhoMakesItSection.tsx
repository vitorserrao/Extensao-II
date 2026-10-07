import React from 'react';

export const WhoMakesItSection: React.FC = () => {
  const actors = [
    {
      role: 'IFSC',
      description: 'Instituição que abriga o projeto, laboratórios e orientação.',
      tag: 'Instituto Federal',
    },
    {
      role: 'Estudantes',
      description: 'Fazem a triagem, o diagnóstico e a recuperação na bancada.',
      tag: 'Corpo Discente',
    },
    {
      role: 'Professores',
      description: 'Orientam a parte técnica, a segurança e a metodologia.',
      tag: 'Corpo Docente',
    },
    {
      role: 'Parceiros',
      description: 'Pontos de coleta e colaboradores da comunidade (a confirmar).',
      tag: 'Comunidade & Redes',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block mb-3">
            10 — Quem faz acontecer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Quem faz acontecer
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actors.map((actor) => (
            <div
              key={actor.role}
              className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Placeholder as requested: foto real em breve */}
                <div className="aspect-[4/3] rounded-xl bg-zinc-100/70 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-center p-4 mb-5">
                  <svg 
                    className="w-6 h-6 text-zinc-400 mb-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-medium">
                    foto real em breve
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  {actor.tag}
                </span>
                <h3 className="text-xl font-display font-bold text-zinc-900 mb-2">
                  {actor.role}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {actor.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Atuação ativa</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
