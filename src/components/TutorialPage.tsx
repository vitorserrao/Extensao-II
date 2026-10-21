import React, { useState, useEffect } from 'react';
import { InteractiveRecoveryLamp } from './InteractiveRecoveryLamp';
import { repairSteps } from '../data/projectData';

interface TutorialPageProps {
  onBack: () => void;
}

export const TutorialPage: React.FC<TutorialPageProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState<number>(5);
  const [activeTab, setActiveTab] = useState<'simulador' | 'passos' | 'seguranca' | 'ferramentas' | 'circuito'>('simulador');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stepsList = [
    { num: '01', title: 'Coleta', desc: 'Recebimento de lâmpadas descartadas pela comunidade.' },
    { num: '02', title: 'Avaliação', desc: 'Inspeção visual preliminar e checagem da integridade física.' },
    { num: '03', title: 'Diagnóstico', desc: 'Identificação de LED aberto ou falha no driver via bancada.' },
    { num: '04', title: 'Recuperação', desc: 'Remoção do chip com defeito e fechamento de circuito (jumper/substituição).' },
    { num: '05', title: 'Testes', desc: 'Ensaio em lâmpada série e medição de consumo antes da liberação.' },
    { num: '06', title: 'Reutilização', desc: 'Devolução ao uso em ambientes comunitários e institucionais.' },
  ];

  const animationStages = [
    {
      num: '01',
      name: 'Abertura da lâmpada',
      detail: 'Com auxílio de uma espátula plástica ou metálica fina, descole cuidadosamente o bulbo de policarbonato da carcaça plástica sem romper as travas.',
    },
    {
      num: '02',
      name: 'Teste com pilhas (3V)',
      detail: 'Com duas pilhas AA em série (3V) ou multímetro na escala de diodo, toque nos terminais de cada LED SMD até identificar qual não acende (circuito aberto).',
    },
    {
      num: '03',
      name: 'Remoção do LED',
      detail: 'Retire o corpo do LED danificado com auxílio de um alicate de bico fino ou ferro de solda, deixando expostos os dois pads metálicos da placa.',
    },
    {
      num: '04',
      name: 'Soldagem do ponto',
      detail: 'Com o ferro de solda (30W-40W) e estanho de boa qualidade, realize uma ponte de solda (jumper) unindo os dois terminais do diodo removido.',
    },
    {
      num: '05',
      name: 'Testar e Recondicionar',
      detail: 'Conecte a lâmpada em soquete seguro com lâmpada série de proteção para teste elétrico e, após aprovação, recoloque o bulbo de policarbonato.',
    },
  ];

  const tools = [
    { name: 'Multímetro Digital', desc: 'Para medição de continuidade, tensão e escala de diodo.', icon: '⚡' },
    { name: 'Ferro de Solda (30W–40W)', desc: 'Para fusão do estanho e confecção do jumper entre pads.', icon: '🔥' },
    { name: 'Estanho 60/40 com fluxo', desc: 'Para soldagem eletrônica de precisão.', icon: '🧪' },
    { name: 'Duas Pilhas AA (3V)', desc: 'Fonte segura de baixa tensão para teste individual de LEDs.', icon: '🔋' },
    { name: 'Espátula de Desmontagem', desc: 'Para descolar o bulbo de policarbonato sem quebrar.', icon: '🪛' },
    { name: 'Alicate de Bico Fino', desc: 'Para manipulação mecânica e remoção do encapsulamento.', icon: '✂️' },
    { name: 'Lâmpada Série de Proteção', desc: 'Para ensaio elétrico inicial seguro contra curto-circuitos.', icon: '💡' },
    { name: 'Óculos de Proteção', desc: 'EPI indispensável contra fagulhas ou estilhaços de solda.', icon: '🥽' },
  ];

  return (
    <div className="min-h-screen bg-[#071913] text-[#EAF3EE] font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#06140F]/95 backdrop-blur-md border-b border-[#143B2E] px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0E2C22] hover:bg-[#164334] text-white text-xs font-semibold border border-[#1C5240] transition-colors cursor-pointer shadow-2xs"
            >
              <span>←</span>
              <span>Voltar à Página Principal</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#1C5240] text-xs font-semibold text-[#8EBBA6]">
              <span>IFSC Câmpus Florianópolis</span>
              <span>·</span>
              <span className="text-white">Projeto ReLED</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFB938] animate-pulse" />
            <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-[#FFB938]">
              TUTORIAL DE REPARO
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section of Tutorial */}
      <header className="relative py-12 sm:py-16 bg-gradient-to-b from-[#0B251C] to-[#071913] border-b border-[#143B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0E2F23] border border-[#1E5742] text-[#86E49E] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#2F9E41]" />
            <span>GUIA TÉCNICO DE BANCADA · SISTEMAS DE ENERGIA IFSC</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Tutorial de Recuperação de Lâmpadas LED
          </h1>

          <p className="text-base sm:text-lg text-[#9EC7B5] max-w-3xl leading-relaxed">
            Metodologia prática desenvolvida pelos estudantes do curso Superior de Tecnologia em Sistemas de Energia do IFSC. Passo a passo detalhado para abertura, diagnóstico, remoção de chip queimado, soldagem de jumper e testes de segurança.
          </p>

          {/* Navigation Tabs */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              { id: 'simulador', label: '1. Simulador Interativo' },
              { id: 'passos', label: '2. 6 Etapas do Processo' },
              { id: 'ferramentas', label: '3. Ferramentas Necessárias' },
              { id: 'circuito', label: '4. Como Funciona o Jumper' },
              { id: 'seguranca', label: '5. Segurança Elétrica' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#FFB938] text-[#161204] font-bold shadow-md'
                    : 'bg-[#0E2C22] text-[#C2DEC9] hover:bg-[#153F31] border border-[#1B4D3C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* TAB 1: SIMULADOR INTERATIVO */}
        {activeTab === 'simulador' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#FFB938] uppercase tracking-wider block">
                Bancada Virtual Interativa
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Simulador das 5 Etapas de Reparo
              </h2>
              <p className="text-sm text-[#9EC7B5] leading-relaxed">
                Clique nas etapas abaixo para acompanhar visualmente as transformações que ocorrem na lâmpada durante o processo de reparo no laboratório:
              </p>
            </div>

            <div className="p-6 sm:p-10 rounded-3xl bg-[#05140F] border border-[#164636] shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Bulb Canvas */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <InteractiveRecoveryLamp
                    currentStep={currentStep}
                    onSelectStep={setCurrentStep}
                  />
                  <span className="mt-3 text-[11px] font-mono text-[#6A9482]">
                    Etapa {currentStep} de 5 selecionada
                  </span>
                </div>

                {/* Steps Selector and Details */}
                <div className="lg:col-span-7 space-y-3">
                  {animationStages.map((stage, idx) => {
                    const stageNum = idx + 1;
                    const isSelected = currentStep === stageNum;
                    return (
                      <div
                        key={stage.num}
                        onClick={() => setCurrentStep(stageNum)}
                        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFB938] text-[#161204] border-[#FFB938] shadow-lg font-bold'
                            : 'bg-[#0E2920] border-[#174637] text-white hover:bg-[#13382C]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                          <span>{stage.num}. {stage.name}</span>
                          {isSelected && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#161204] text-[#FFB938]">
                              Ativa
                            </span>
                          )}
                        </div>
                        {isSelected && (
                          <p className="mt-2 text-xs sm:text-sm font-normal leading-relaxed text-[#2B1F04] animate-fadeIn">
                            {stage.detail}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: PASSOS DO REPARO */}
        {activeTab === 'passos' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#FFB938] uppercase tracking-wider block">
                Fluxo Completo de Recondicionamento
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                As 6 Etapas Institucionais
              </h2>
              <p className="text-sm text-[#9EC7B5] leading-relaxed">
                Cada lâmpada que chega ao laboratório passa por um protocolo padronizado para garantir segurança, funcionalidade e durabilidade:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stepsList.map((step) => (
                <div key={step.num} className="p-6 rounded-2xl bg-[#092219] border border-[#164939] space-y-3">
                  <span className="text-sm font-bold text-[#FFB938] block">
                    ETAPA {step.num}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#9EC7B5] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Detailed Steps list from projectData */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-display font-bold text-white">
                Procedimento Técnico Detalhado de Bancada
              </h3>
              <div className="space-y-3">
                {repairSteps.map((step) => (
                  <div key={step.number} className="p-5 rounded-2xl bg-[#092219] border border-[#164939] space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FFB938] text-[#161204] font-bold text-xs">
                        {step.number}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[#A7CEBE] leading-relaxed">
                      {step.description}
                    </p>
                    {step.warning && (
                      <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-600/50 text-xs text-amber-200">
                        <strong>⚠️ Atenção:</strong> {step.warning}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: FERRAMENTAS */}
        {activeTab === 'ferramentas' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#FFB938] uppercase tracking-wider block">
                Instrumental de Laboratório
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Ferramentas e Equipamentos
              </h2>
              <p className="text-sm text-[#9EC7B5] leading-relaxed">
                Equipamentos simples e de baixo custo utilizados pelos estudantes no laboratório de Sistemas de Energia do IFSC:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tools.map((t) => (
                <div key={t.name} className="p-5 rounded-2xl bg-[#092219] border border-[#164939] space-y-2.5">
                  <span className="text-2xl block">{t.icon}</span>
                  <h3 className="text-base font-bold text-white">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#9EC7B5] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: CIRCUITO & JUMPER */}
        {activeTab === 'circuito' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#FFB938] uppercase tracking-wider block">
                Teoria Elétrica Aplicada
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Como Funciona o Jumper (Curto-Circuito Controlado)
              </h2>
              <p className="text-sm text-[#9EC7B5] leading-relaxed">
                Por que a soldagem de uma ponte reativa a lâmpada inteira? Entenda a topologia de circuito série:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="p-6 rounded-3xl bg-[#092219] border border-[#164939] space-y-4">
                <h3 className="text-lg font-bold text-[#FFB938]">
                  Topologia em Série dos LEDs SMD
                </h3>
                <p className="text-sm text-[#C0DFCF] leading-relaxed">
                  Em uma lâmpada LED convencional, cerca de 10 a 24 chips SMD estão ligados em série como em um colar de lâmpadas natalinas. Se um único diodo abre o circuito (queima), a corrente é interrompida para todos os demais diodos.
                </p>
                <p className="text-sm text-[#C0DFCF] leading-relaxed">
                  Ao remover o diodo queimado e aplicar uma gota de estanho unindo seus dois terminais, restabelecemos o caminho para a circulação da corrente elétrica.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#092219] border border-[#164939] space-y-4">
                <h3 className="text-lg font-bold text-[#FFB938]">
                  O Papel do Driver de Corrente Constante
                </h3>
                <p className="text-sm text-[#C0DFCF] leading-relaxed">
                  O driver eletrônico da lâmpada é projetado para manter a corrente elétrica constante (geralmente entre 60mA e 120mA). Ao remover um LED e fazer o jumper, a tensão total do circuito cai ligeiramente (~3V a ~6V), e o driver ajusta a saída sem sobrecarregar excessivamente os demais chips.
                </p>
                <div className="p-3.5 rounded-xl bg-[#0E2E22] border border-[#235845] text-xs text-[#8BE4A6]">
                  <strong>Dica de ouro:</strong> Em lâmpadas com até 1 ou 2 LEDs danificados, o jumper restaura a lâmpada com perda imperceptível de fluxo luminoso e anos adicionais de vida útil.
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: SEGURANÇA */}
        {activeTab === 'seguranca' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                Segurança em Primeiro Lugar
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Cuidados Elétricos e Normas Técnicas
              </h2>
              <p className="text-sm text-[#9EC7B5] leading-relaxed">
                Antes de iniciar qualquer atividade de bancada, siga rigorosamente as diretrizes de segurança da NR-10:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '1. Desconecte sempre da rede elétrica',
                  desc: 'Nunca manuseie lâmpadas energizadas ou conectadas a soquetes de 127V/220V durante a desmontagem ou soldagem.',
                },
                {
                  title: '2. Descarga de capacitores eletrolíticos',
                  desc: 'O driver pode armazenar cargas de até 300V nos capacitores mesmo desligado da tomada. Descarregue-os utilizando um resistor de 1kΩ ou lâmpada de filamento.',
                },
                {
                  title: '3. Ensaio com Lâmpada Série',
                  desc: 'Após soldar o jumper, o primeiro teste deve ser feito obrigatoriamente através de um circuito de lâmpada série. Se houver curto-circuito, a lâmpada série acende e impede disparo de disjuntores.',
                },
                {
                  title: '4. Cuidado térmico com a solda',
                  desc: 'O ferro de solda atinge temperaturas superiores a 300°C. Não encoste a ponta na carcaça plástica e utilize suporte adequado.',
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-[#0E1E18] border border-[#234A3B] space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400">⚠️</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8C7B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA to return */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0C291E] to-[#123E2E] border border-[#1E5742] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Quer saber mais sobre o Projeto ReLED?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8CEBC]">
              Conheça os pontos de coleta, resultados de impacto e como participar no IFSC Florianópolis.
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-white hover:bg-[#F0F5F1] text-[#0D241C] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            ← Voltar ao Início
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#143B2E] py-8 text-center text-xs text-[#7B9E8F] bg-[#05120D]">
        <p>Instituto Federal de Santa Catarina · Câmpus Florianópolis · CST em Sistemas de Energia</p>
        <p className="mt-1">Projeto ReLED: Recuperação de Lâmpadas LED · Extensão Universitária</p>
      </footer>
    </div>
  );
};
