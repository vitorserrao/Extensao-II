import React, { useState } from 'react';

export const DiagnosticSection: React.FC = () => {
  const [q1, setQ1] = useState<boolean | null>(true);
  const [q2, setQ2] = useState<boolean | null>(true);

  const observationItems = [
    {
      title: 'Pontos pretos',
      desc: 'Marcas escuras sobre os LEDs.',
      hint: 'Indica que o filamento interno do semicondutor fundiu e abriu o circuito em série.',
    },
    {
      title: 'Carbonização',
      desc: 'Regiões queimadas na placa.',
      hint: 'Evidência de arco voltaico ou curto-circuito em trilhas ou resistores.',
    },
    {
      title: 'Componentes danificados',
      desc: 'Peças inchadas, rachadas ou soltas.',
      hint: 'Geralmente capacitores eletrolíticos estufados no circuito driver.',
    },
    {
      title: 'Superaquecimento',
      desc: 'Plástico deformado ou amarelado.',
      hint: 'Falha de condução térmica entre a placa de LED e a carcaça de alumínio.',
    },
    {
      title: 'Soldas',
      desc: 'Pontos soltos ou trincados.',
      hint: 'Fadiga por dilatação térmica intermitente ou vibração.',
    },
  ];

  const behaviorItems = [
    {
      title: 'Não liga',
      desc: 'Nenhuma luz ao ser acesa.',
      status: 'Circuito totalmente interrompido',
    },
    {
      title: 'Pisca',
      desc: 'A luz oscila ou falha de forma intermitente.',
      status: 'Capacitor do driver esgotado ou solda fria',
    },
    {
      title: 'Luz fraca',
      desc: 'Brilho abaixo do esperado.',
      status: 'Subtensão no driver ou LEDs com fuga',
    },
    {
      title: 'Desliga sozinha',
      desc: 'Apaga depois de algum tempo ligada.',
      status: 'Proteção térmica do driver atuando',
    },
  ];

  return (
    <section id="diagnostico" className="py-16 sm:py-24 bg-white border-b border-[#E0E6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
            <span>5 — DIAGNÓSTICO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
            Antes de reparar, precisamos<br />
            diagnosticar.
          </h2>

          {/* Workflow Sequence */}
          <div className="pt-3 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[#40594F] font-semibold">
            {['Conhecer', 'Observar', 'Diagnosticar', 'Decidir', 'Reparar', 'Testar'].map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-2.5 py-1 rounded-md bg-[#F4F6F1] border border-[#CCD6C7]">
                  {step}
                </span>
                {idx < 5 && <span className="text-[#89A197]">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 2 Diagnostic Panels */}
        <div className="space-y-12">
          
          {/* O que observar? */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-[#0D241C]">
              O que observar?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {observationItems.map((item) => (
                <div
                  key={item.title}
                  className="card-soft p-5 rounded-2xl space-y-2"
                >
                  <strong className="text-sm font-display font-bold text-[#0D241C] block">
                    {item.title}
                  </strong>
                  <p className="text-xs text-[#3D5248] leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="text-[10px] font-mono text-[#668074] block pt-2 border-t border-[#E3E8DF]">
                    {item.hint}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Como ela está se comportando? */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-[#0D241C]">
              Como ela está se comportando?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {behaviorItems.map((item) => (
                <div
                  key={item.title}
                  className="card-soft p-5 rounded-2xl space-y-2"
                >
                  <strong className="text-sm font-display font-bold text-[#0D241C] block">
                    {item.title}
                  </strong>
                  <p className="text-xs text-[#3D5248] leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="text-[10px] font-mono text-[#668074] block pt-2 border-t border-[#E3E8DF]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive Decision Tree: Vale reparar? */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F8F5] border border-[#D5DDD2] space-y-8 shadow-2xs">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-[#0D241C]">
              Vale reparar?
            </h3>
            <span className="text-xs font-mono text-[#556961]">
              Simule a decisão clicando nos botões:
            </span>
          </div>

          <div className="max-w-3xl space-y-6">
            
            {/* Start Node */}
            <div className="inline-block px-5 py-2.5 rounded-xl bg-[#0D241C] text-white font-mono text-xs uppercase font-bold tracking-wider shadow-sm">
              Lâmpada que deixou de funcionar
            </div>

            {/* Step 1 */}
            <div className={`p-6 rounded-2xl border transition-all ${q1 === true ? 'bg-white border-[#CCD6C7]' : q1 === false ? 'bg-rose-50/50 border-rose-200' : 'bg-white border-[#CCD6C7]'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm font-semibold text-[#182C24]">
                  A estrutura está íntegra? <span className="font-normal text-gray-500 block sm:inline">Sem rachaduras nem deformação por calor.</span>
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => { setQ1(false); }}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                      q1 === false
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-[#EBF0E8] text-[#556960] hover:bg-gray-200'
                    }`}
                  >
                    NÃO → Descarte correto
                  </button>
                  <button
                    type="button"
                    onClick={() => { setQ1(true); }}
                    className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                      q1 === true
                        ? 'bg-[#164E3A] text-white shadow-xs'
                        : 'bg-[#EBF0E8] text-[#556960] hover:bg-gray-200'
                    }`}
                  >
                    SIM ↓
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 (if q1 is true) */}
            {q1 && (
              <div className={`p-6 rounded-2xl border transition-all animate-fadeIn ${q2 === true ? 'bg-white border-[#CCD6C7]' : q2 === false ? 'bg-rose-50/50 border-rose-200' : 'bg-white border-[#CCD6C7]'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm font-semibold text-[#182C24]">
                    A falha está em poucos componentes? <span className="font-normal text-gray-500 block sm:inline">Identificada no diagnóstico visual e nas medições.</span>
                  </p>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setQ2(false)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                        q2 === false
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-[#EBF0E8] text-[#556960] hover:bg-gray-200'
                      }`}
                    >
                      NÃO → Descarte correto
                    </button>
                    <button
                      type="button"
                      onClick={() => setQ2(true)}
                      className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                        q2 === true
                          ? 'bg-[#164E3A] text-white shadow-xs'
                          : 'bg-[#EBF0E8] text-[#556960] hover:bg-gray-200'
                      }`}
                    >
                      SIM ↓
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Outcome Display */}
            {q1 && q2 && (
              <div className="p-4 rounded-xl bg-[#FFB938] text-[#1E1704] font-mono text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 shadow-xs animate-fadeIn">
                <span>SIM ↓</span>
                <span>Recuperar, testar e reutilizar ✓</span>
              </div>
            )}

            {(!q1 || !q2) && (
              <div className="p-4 rounded-xl bg-gray-200 text-gray-800 font-mono text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 shadow-xs animate-fadeIn">
                <span>NÃO →</span>
                <span>Encaminhar para Descarte Correto (Logística Reversa)</span>
              </div>
            )}

          </div>

          <p className="text-[11px] font-mono text-[#556961] italic pt-4 border-t border-[#D5DDD2]">
            Figura 5 — Fluxo de decisão, em versão conceitual. Os critérios finais seguem o material técnico do projeto.
          </p>

        </div>

      </div>
    </section>
  );
};
