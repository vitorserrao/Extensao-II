import React, { useState } from 'react';
import { InteractiveLedBulb } from './InteractiveLedBulb';

export const UnderstandLampSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  // Estados do Simulador de Diagnóstico Interativo
  const [activeObservation, setActiveObservation] = useState<string>('Pontos pretos');
  const [activeBehavior, setActiveBehavior] = useState<string>('Não liga');

  // Estado do Fluxo de Triagem / Decisão interativa
  const [triageStep, setTriageStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    structureIntact: boolean | null;
    isolatedFailure: boolean | null;
    componentsAvailable: boolean | null;
  }>({
    structureIntact: null,
    isolatedFailure: null,
    componentsAvailable: null,
  });

  const resetTriage = () => {
    setTriageStep(1);
    setAnswers({
      structureIntact: null,
      isolatedFailure: null,
      componentsAvailable: null,
    });
  };

  const layers = [
    {
      num: '01',
      name: 'LENTE',
      subtitle: 'Difusor óptico',
      function: 'distribuir a luz e reduzir o ofuscamento.',
      description: 'A lente ou difusor é a parte externa que protege o conjunto óptico e modifica a distribuição da luz emitida pelos LEDs. Em muitos modelos, é fabricada em plástico translúcido, como policarbonato.',
      repairNote: 'A fixação varia conforme o modelo e pode ser feita por encaixe, pressão ou adesivo. Sua remoção deve permitir acesso aos componentes internos sem danificar o difusor.',
    },
    {
      num: '02',
      name: 'LED',
      subtitle: 'Módulo de LEDs',
      function: 'transformar energia elétrica em luz.',
      description: 'Os LEDs são semicondutores que emitem luz quando percorridos por corrente elétrica. Em lâmpadas comerciais, vários LEDs podem ser montados em uma placa, frequentemente de alumínio, que também auxilia na transferência de calor.',
      repairNote: 'Em configurações nas quais os LEDs estão conectados em série, a abertura de um LED pode interromper o circuito e fazer com que toda a sequência deixe de funcionar. A identificação dessa condição faz parte do diagnóstico da lâmpada.',
    },
    {
      num: '03',
      name: 'DRIVER',
      subtitle: 'Circuito de alimentação',
      function: 'fornecer aos LEDs as condições elétricas necessárias para o funcionamento.',
      description: 'O driver é o circuito eletrônico responsável por receber a energia da rede elétrica e convertê-la, controlar e adequar a alimentação aos LEDs. Dependendo do projeto, pode realizar funções de retificação, filtragem, limitação e controle de corrente.',
      repairNote: 'O driver possui componentes eletrônicos que podem sofrer degradação ao longo do tempo. Temperatura de operação, tensão elétrica e condições de uso podem influenciar a vida útil desses componentes.',
    },
    {
      num: '04',
      name: 'DISSIPADOR',
      subtitle: 'Estrutura térmica',
      function: 'transferir o calor dos LEDs para o ambiente.',
      description: 'Durante o funcionamento, os LEDs produzem calor além da luz. A estrutura térmica ajuda a conduzir esse calor para fora do módulo, contribuindo para manter a temperatura de operação dentro dos limites do projeto.\n\nA construção varia conforme o modelo e pode utilizar alumínio, polímeros ou uma combinação de materiais.',
      repairNote: 'A condição térmica influencia diretamente a vida útil dos LEDs e de outros componentes. Quando a estrutura está íntegra e adequada ao projeto, ela pode ser mantida durante a recuperação da lâmpada.',
    },
    {
      num: '05',
      name: 'BASE',
      subtitle: 'Rosca Edison E27',
      function: 'realizar a conexão mecânica e elétrica com o soquete.',
      description: 'A base E27 utiliza uma rosca metálica de diâmetro nominal de aproximadamente 27 mm e contatos elétricos que conectam a lâmpada ao circuito de alimentação.',
      repairNote: 'Os contatos podem apresentar oxidação, desgaste ou mau contato. Também podem ocorrer falhas nas conexões internas entre a base e o circuito eletrônico da lâmpada.',
    },
  ];

  const observationItems = [
    {
      id: 'pontos-pretos',
      title: 'Pontos pretos',
      desc: 'Marcas escuras sobre os LEDs.',
      hint: 'Indício visual de que o filamento semicondutor fundiu por pico térmico ou de corrente.',
      partAffected: '02 — Módulo de LEDs',
      actionRecommendation: 'Substituição pontual do diodo SMD ou jumper técnico (se viável na topologia do driver).',
      recoverable: true,
      tag: 'Falha muito comum',
    },
    {
      id: 'carbonizacao',
      title: 'Carbonização',
      desc: 'Regiões queimadas na placa.',
      hint: 'Evidência de arco elétrico, curto-circuito em trilhas ou queima severa de resistores.',
      partAffected: '03 — Driver / 02 — Módulo',
      actionRecommendation: 'Verificar se o substrato de fenolite/alumínio foi danificado. Se comprometeu o isolamento, descartar.',
      recoverable: false,
      tag: 'Severo',
    },
    {
      id: 'componentes-danificados',
      title: 'Componentes danificados',
      desc: 'Peças inchadas, rachadas ou soltas.',
      hint: 'Geralmente capacitores eletrolíticos com eletrólito seco ou estufamento no circuito driver.',
      partAffected: '03 — Driver de Alimentação',
      actionRecommendation: 'Dessoldagem e substituição do capacitor de mesmo valor e tensão nominal superior.',
      recoverable: true,
      tag: 'Recuperável',
    },
    {
      id: 'superaquecimento',
      title: 'Superaquecimento',
      desc: 'Plástico deformado ou amarelado.',
      hint: 'Sinal de falha na transferência de calor entre a placa e o dissipador térmico.',
      partAffected: '04 — Dissipador Térmico',
      actionRecommendation: 'Inspecionar pasta térmica. Se a carcaça deformou e perdeu a integridade de isolamento elétrico, não recuperar.',
      recoverable: false,
      tag: 'Atenção térmica',
    },
    {
      id: 'soldas',
      title: 'Soldas',
      desc: 'Pontos soltos ou trincados.',
      hint: 'Fadiga mecânica por ciclos de dilatação e contração térmica intermitente.',
      partAffected: '05 — Base E27 / Conexões do Driver',
      actionRecommendation: 'Refazer a solda com estanho e fluxo adequado. Testar continuidade com multímetro.',
      recoverable: true,
      tag: 'Reparo simples',
    },
  ];

  const behaviorItems = [
    {
      id: 'nao-liga',
      title: 'Não liga',
      desc: 'Nenhuma luz ao ser acionada.',
      status: 'Circuito totalmente aberto ou fusistor de entrada rompido',
      diagnosticTest: 'Medir continuidade da base E27 e tensão na saída do retificador do driver.',
      possibleCause: 'Fusível de segurança aberto por sobretensão transitória da rede elétrica.',
      typicalAction: 'Troca do resistor fusistor de entrada (RF) e revisão dos diodos retificadores.',
    },
    {
      id: 'pisca',
      title: 'Pisca / Oscila',
      desc: 'A luz oscila ou falha de forma intermitente.',
      status: 'Capacitor do driver com ESR elevada ou solda com mau contato',
      diagnosticTest: 'Inspecionar ripple com osciloscópio/multímetro na saída DC.',
      possibleCause: 'Capacitor de filtragem esgotado que não mantém a corrente contínua estável.',
      typicalAction: 'Substituição do capacitor de filtragem eletrolítico do estágio de saída.',
    },
    {
      id: 'luz-fraca',
      title: 'Luz fraca',
      desc: 'Brilho muito abaixo do fluxo nominal.',
      status: 'Subtensão no driver ou LEDs com fuga interna',
      diagnosticTest: 'Medição da corrente nominal circulante no módulo de LEDs em carga.',
      possibleCause: 'Degradação em série de múltiplos chips ou falha no circuito integrado regulador.',
      typicalAction: 'Avaliar individualmente cada LED com fonte regulada de teste a 3V/6V/9V.',
    },
    {
      id: 'desliga-sozinha',
      title: 'Desliga sozinha',
      desc: 'Apaga após alguns minutos ligada.',
      status: 'Proteção térmica do driver ou solda fria dilatando sob calor',
      diagnosticTest: 'Monitorar temperatura do dissipador com termômetro infravermelho.',
      possibleCause: 'Falta de pasta térmica condutiva entre o MCPCB de alumínio e a carcaça.',
      typicalAction: 'Limpeza e reaplicação de composto térmico adequado, garantindo pressão mecânica.',
    },
  ];

  return (
    <section id="entenda-a-lampada" className="py-16 sm:py-24 bg-paper-grid border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* PARTE 1: Anatomia em 5 Camadas */}
        <div className="space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
              <span>3 — ENTENDA A LÂMPADA · ANATOMIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Cinco partes, cada uma com<br />
              seu papel.
            </h2>
            <p className="text-xs sm:text-sm text-[#476357] max-w-2xl">
              Uma lâmpada LED moderna é um sistema integrado de componentes mecânicos, elétricos e térmicos. Clique nas camadas para inspecionar cada elemento:
            </p>
          </div>

          {/* Exploded Layers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Visual 5 Layers Stack */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <InteractiveLedBulb
                activeLayer={activeLayer}
                onSelectLayer={setActiveLayer}
              />

              <p className="mt-3 text-[11px] font-mono text-[#556961] italic text-center">
                Figura 3 — Modelo interativo em camadas da lâmpada LED. Clique nas peças para inspecionar.
              </p>
            </div>

            {/* Right Column: Layer Details */}
            <div className="lg:col-span-7 border-t border-b border-[#CCD6C7] divide-y divide-[#CCD6C7]">
              {layers.map((layer, index) => {
                const isSelected = activeLayer === index;
                return (
                  <div
                    key={layer.num}
                    onClick={() => setActiveLayer(index)}
                    className={`py-4 transition-all duration-300 cursor-pointer px-4 sm:px-5 rounded-2xl ${
                      isSelected ? 'bg-white shadow-xs border-l-4 border-l-[#0D241C]' : 'hover:bg-white/50 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-5">
                      <span className={`font-mono text-xs font-bold pt-1 ${isSelected ? 'text-[#0D241C]' : 'text-[#7B958B]'}`}>
                        {layer.num}
                      </span>

                      <div className="flex-1">
                        {/* Header: Always visible */}
                        <div className="flex items-baseline justify-between gap-2">
                          <div>
                            <h3 className="text-base sm:text-lg font-display font-extrabold text-[#0D241C] tracking-tight">
                              {layer.num} — {layer.name}
                            </h3>
                            <h4 className="text-sm font-display font-semibold text-[#235846] mt-0.5">
                              {layer.subtitle}
                            </h4>
                          </div>

                          {!isSelected && (
                            <span className="text-[11px] font-mono text-[#55756B] shrink-0 hover:underline">
                              Clique para ver detalhes →
                            </span>
                          )}
                        </div>

                        {/* Full text content: only visible when this layer is selected */}
                        {isSelected && (
                          <div className="mt-3 pt-3 border-t border-[#E5EAE1] space-y-3 animate-fadeIn">
                            <p className="text-xs sm:text-sm text-[#243B30] leading-relaxed">
                              <strong>Função:</strong> {layer.function}
                            </p>

                            <div className="text-xs sm:text-sm text-[#384D43] leading-relaxed whitespace-pre-line">
                              {layer.description}
                            </div>

                            <div className="p-3.5 rounded-xl bg-[#F4F7F2] border border-[#D5E0D2] text-xs text-[#203D31] space-y-1">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1B4B3A] block">
                                Observação técnica
                              </span>
                              <p className="leading-relaxed text-[#2D453A]">
                                {layer.repairNote}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* PARTE 2: Transição Natural para o Diagnóstico */}
        <div id="diagnostico" className="pt-12 border-t border-[#CCD6C7] space-y-14 scroll-mt-20">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
              <span>3 — ENTENDA A LÂMPADA · DIAGNÓSTICO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Antes de reparar, precisamos<br />
              diagnosticar.
            </h2>

            {/* Workflow Sequence */}
            <div className="pt-3 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[#40594F] font-semibold">
              {['Conhecer', 'Observar', 'Diagnosticar', 'Decidir', 'Reparar', 'Testar'].map((step, idx) => (
                <React.Fragment key={step}>
                  <span className={`px-2.5 py-1 rounded-md border shadow-2xs transition-colors ${
                    idx === 1 || idx === 2 || idx === 3
                      ? 'bg-[#184E3B] text-white border-[#184E3B]'
                      : 'bg-white text-[#40594F] border-[#CCD6C7]'
                  }`}>
                    {step}
                  </span>
                  {idx < 5 && <span className="text-[#89A197]">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* O que observar? & Como ela se comporta? - INTERATIVO */}
          <div className="space-y-12">
            
            {/* Bloco 1: O que observar na bancada (com seleção interativa) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0D241C]">
                    O que observar na bancada?
                  </h3>
                  <p className="text-xs text-[#556960] font-mono">
                    Selecione um indício visual para ver a análise de bancada:
                  </p>
                </div>
                <span className="text-xs font-mono bg-[#EBF0E8] text-[#1E4334] px-3 py-1 rounded-full font-bold self-start sm:self-auto">
                  5 sinais observáveis
                </span>
              </div>

              {/* Botões / Cards selecionáveis */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {observationItems.map((item) => {
                  const isSelected = activeObservation === item.title;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveObservation(item.title)}
                      className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between min-h-[120px] ${
                        isSelected
                          ? 'bg-[#0F2D22] text-white border-[#0F2D22] shadow-md scale-[1.02]'
                          : 'bg-white text-[#0D241C] border-[#D1DCD0] hover:border-[#1E4D3B] hover:bg-[#F8FAF7]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <strong className="text-sm font-display font-bold block">
                            {item.title}
                          </strong>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#FFB938] shrink-0" />
                          )}
                        </div>
                        <p className={`text-xs line-clamp-2 ${isSelected ? 'text-[#C5D9CE]' : 'text-[#4A6357]'}`}>
                          {item.desc}
                        </p>
                      </div>

                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded mt-3 self-start font-semibold ${
                        isSelected ? 'bg-white/15 text-[#E6F4ED]' : 'bg-[#EDF2EB] text-[#476054]'
                      }`}>
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Painel de detalhe do sinal observado selecionado */}
              {(() => {
                const currentObs = observationItems.find(o => o.title === activeObservation) || observationItems[0];
                return (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#CBD7CA] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-5 animate-fadeIn">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase font-bold text-[#1E4D3B] bg-[#E3EFE7] px-2.5 py-0.5 rounded">
                          Peça avaliada: {currentObs.partAffected}
                        </span>
                        <span className={`font-mono text-xs px-2.5 py-0.5 rounded font-bold ${
                          currentObs.recoverable ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {currentObs.recoverable ? 'Potencialmente recuperável' : 'Critério de descarte/substituição total'}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[#11241C]">
                        {currentObs.hint}
                      </p>
                      <p className="text-xs text-[#40594F]">
                        <strong>Conduta recomendada:</strong> {currentObs.actionRecommendation}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 border-t md:border-t-0 md:border-l border-[#E2E8DE] pt-3 md:pt-0 md:pl-5">
                      <span className="text-xs font-mono text-[#556961]">
                        Visualizando: <span className="font-bold text-[#0D241C]">{currentObs.title}</span>
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Bloco 2: Como ela está se comportando? (Interativo) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0D241C]">
                    Como ela está se comportando?
                  </h3>
                  <p className="text-xs text-[#556960] font-mono">
                    Clique em um sintoma elétrico para verificar hipótese e teste no laboratório:
                  </p>
                </div>
                <span className="text-xs font-mono bg-[#EBF0E8] text-[#1E4334] px-3 py-1 rounded-full font-bold self-start sm:self-auto">
                  4 sintomas operacionais
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {behaviorItems.map((item) => {
                  const isSelected = activeBehavior === item.title;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveBehavior(item.title)}
                      className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#18392B] text-white border-[#18392B] shadow-md ring-2 ring-[#FFB938]/40'
                          : 'bg-white text-[#0D241C] border-[#CCD6C7] hover:border-[#1E4D3B] hover:bg-[#F8FAF7]'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-display font-bold block">
                            {item.title}
                          </strong>
                          {isSelected && (
                            <span className="text-[10px] font-mono bg-[#FFB938] text-black px-1.5 py-0.5 rounded font-bold">
                              Ativo
                            </span>
                          )}
                        </div>
                        <p className={`text-xs ${isSelected ? 'text-[#D0E2D8]' : 'text-[#3D5248]'}`}>
                          {item.desc}
                        </p>
                      </div>

                      <div className={`mt-4 pt-3 border-t text-[11px] font-mono ${
                        isSelected ? 'border-white/20 text-[#E0EDE6]' : 'border-[#E3E8DF] text-[#5A7367]'
                      }`}>
                        {item.status}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Hipótese e ensaio técnico para o comportamento selecionado */}
              {(() => {
                const currentBehav = behaviorItems.find(b => b.title === activeBehavior) || behaviorItems[0];
                return (
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#F6F8F5] border border-[#CCD6C7] space-y-3 animate-fadeIn">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8E1D5] pb-2.5">
                      <span className="font-mono text-xs font-bold text-[#143B2C] uppercase tracking-wide">
                        Investigação laboratorial para: <span className="underline underline-offset-2">{currentBehav.title}</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#556960]">
                        Protocolo de Bancada IFSC
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 bg-white rounded-xl border border-[#DDE4DA] space-y-1">
                        <span className="font-mono font-bold text-[#1F4938] block text-[11px] uppercase">
                          Causa mais provável
                        </span>
                        <p className="text-[#2B3E35] leading-relaxed">
                          {currentBehav.possibleCause}
                        </p>
                      </div>

                      <div className="p-3.5 bg-white rounded-xl border border-[#DDE4DA] space-y-1">
                        <span className="font-mono font-bold text-[#1F4938] block text-[11px] uppercase">
                          Procedimento de teste com instrumentos
                        </span>
                        <p className="text-[#2B3E35] leading-relaxed">
                          {currentBehav.diagnosticTest}
                        </p>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-xs text-[#3E574B]">
                      <span>
                        <strong>Ação típica de bancada:</strong> {currentBehav.typicalAction}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* SIMULADOR INTERATIVO: Vale reparar? (Perguntas interativas passo a passo) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#CCD6C7] space-y-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5EAE1] pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#184E3A]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#184E3A]">
                    Simulador Interativo de Decisão
                  </span>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-[#0D241C] mt-1">
                  Vale a pena reparar esta lâmpada?
                </h3>
              </div>
              <button
                type="button"
                onClick={resetTriage}
                className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-[#CCD6C7] text-[#40594F] hover:bg-[#F2F6F0] self-start sm:self-auto cursor-pointer transition-colors"
              >
                Reiniciar Simulação
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#40594F] leading-relaxed max-w-3xl">
              Responda às perguntas sequenciais como se estivesse diante da bancada com o multímetro e a fonte de ensaio. O algoritmo de triagem indicará se o caso é de <strong>recuperação direta</strong>, <strong>aproveitamento de peças</strong> ou <strong>descarte seguro</strong>.
            </p>

            {/* Stepper interativo */}
            <div className="space-y-6 max-w-3xl">

              {/* PASSO 1 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                answers.structureIntact === true
                  ? 'bg-[#F5F8F4] border-[#CCD6C7]'
                  : answers.structureIntact === false
                  ? 'bg-rose-50 border-rose-300'
                  : 'bg-white border-[#BFCDBA] ring-2 ring-[#184E3A]/20'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-[#1B4B3A] tracking-wider block">
                      Pergunta 1 · Inspeção Mecânica e Térmica Externa
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#0D241C]">
                      A carcaça e a estrutura física estão íntegras?
                    </h4>
                    <p className="text-xs text-[#52685E]">
                      Sem trincas no plástico, sem rosca E27 rompida e sem deformação por calor excessivo.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setAnswers({ structureIntact: false, isolatedFailure: null, componentsAvailable: null });
                        setTriageStep(1);
                      }}
                      className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                        answers.structureIntact === false
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-[#EBF0E8] text-[#476054] hover:bg-rose-100 hover:text-rose-800'
                      }`}
                    >
                      NÃO (Dano físico)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAnswers(prev => ({ ...prev, structureIntact: true }));
                        if (triageStep === 1) setTriageStep(2);
                      }}
                      className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                        answers.structureIntact === true
                          ? 'bg-[#184E3A] text-white shadow-xs'
                          : 'bg-[#EBF0E8] text-[#476054] hover:bg-emerald-100 hover:text-emerald-800'
                      }`}
                    >
                      SIM (Estrutura íntegra)
                    </button>
                  </div>
                </div>
              </div>

              {/* PASSO 2 (Só aparece se Passo 1 foi SIM) */}
              {answers.structureIntact === true && (
                <div className={`p-5 rounded-2xl border transition-all animate-fadeIn ${
                  answers.isolatedFailure === true
                    ? 'bg-[#F5F8F4] border-[#CCD6C7]'
                    : answers.isolatedFailure === false
                    ? 'bg-amber-50 border-amber-300'
                    : 'bg-white border-[#BFCDBA] ring-2 ring-[#184E3A]/20'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] font-bold uppercase text-[#1B4B3A] tracking-wider block">
                        Pergunta 2 · Diagnóstico Elétrico & Localização da Falha
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0D241C]">
                        A falha está concentrada em poucos componentes específicos?
                      </h4>
                      <p className="text-xs text-[#52685E]">
                        Exemplo: apenas 1 LED aberto na série ou capacitor de filtro esgotado, com trilhas da placa intactas.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setAnswers(prev => ({ ...prev, isolatedFailure: false, componentsAvailable: null }));
                          setTriageStep(2);
                        }}
                        className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                          answers.isolatedFailure === false
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'bg-[#EBF0E8] text-[#476054] hover:bg-amber-100 hover:text-amber-800'
                        }`}
                      >
                        NÃO (Dano generalizado)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAnswers(prev => ({ ...prev, isolatedFailure: true }));
                          if (triageStep <= 2) setTriageStep(3);
                        }}
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                          answers.isolatedFailure === true
                            ? 'bg-[#184E3A] text-white shadow-xs'
                            : 'bg-[#EBF0E8] text-[#476054] hover:bg-emerald-100 hover:text-emerald-800'
                        }`}
                      >
                        SIM (Falha localizada)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* PASSO 3 (Se Passo 2 foi SIM) */}
              {answers.structureIntact === true && answers.isolatedFailure === true && (
                <div className={`p-5 rounded-2xl border transition-all animate-fadeIn ${
                  answers.componentsAvailable === true
                    ? 'bg-[#F5F8F4] border-[#CCD6C7]'
                    : answers.componentsAvailable === false
                    ? 'bg-slate-50 border-slate-300'
                    : 'bg-white border-[#BFCDBA] ring-2 ring-[#184E3A]/20'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] font-bold uppercase text-[#1B4B3A] tracking-wider block">
                        Pergunta 3 · Viabilidade de Reposição e Segurança
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0D241C]">
                        Há componente substituto compatível no estoque/sucata do laboratório?
                      </h4>
                      <p className="text-xs text-[#52685E]">
                        Mesma especificação de corrente/tensão para manter os padrões técnicos e térmicos seguros.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, componentsAvailable: false }))}
                        className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                          answers.componentsAvailable === false
                            ? 'bg-slate-700 text-white shadow-xs'
                            : 'bg-[#EBF0E8] text-[#476054] hover:bg-slate-200'
                        }`}
                      >
                        NÃO (Sem peça)
                      </button>
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, componentsAvailable: true }))}
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                          answers.componentsAvailable === true
                            ? 'bg-[#184E3A] text-white shadow-xs'
                            : 'bg-[#EBF0E8] text-[#476054] hover:bg-emerald-100 hover:text-emerald-800'
                        }`}
                      >
                        SIM (Peça disponível)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* CARD DE RESULTADO CONCLUSIVO DO DIAGNÓSTICO */}
              {/* Caso 1: Estrutura Danificada */}
              {answers.structureIntact === false && (
                <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 text-[#5C1A1A] space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-rose-600 text-white font-mono text-xs font-bold uppercase">
                      Decisão: Não Recuperar (Risco Estrutural / Isolamento)
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-base text-rose-950">
                    Encaminhar diretamente para Logística Reversa / Descarte Certificado
                  </h5>
                  <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
                    A perda da integridade mecânica ou isolamento elétrico expõe o usuário a risco de choque e sobreaquecimento. Lâmpadas sem segurança estrutural não são recondicionadas no projeto. Seus componentes ainda podem ser triados como doadores de peças (LEDs funcionais ou indutores).
                  </p>
                </div>
              )}

              {/* Caso 2: Falha Generalizada */}
              {answers.structureIntact === true && answers.isolatedFailure === false && (
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-[#5B3E08] space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-amber-600 text-white font-mono text-xs font-bold uppercase">
                      Decisão: Doação de Peças / Sucata Técnica
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-base text-amber-950">
                    Desmontar e aproveitar peças boas em outras lâmpadas
                  </h5>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    O custo energético e de materiais para reconstruir um circuito totalmente carbonizado não é viável. No entanto, o difusor, o dissipador de alumínio e os LEDs que não sofreram sobretensão são separados para reparar outros equipamentos.
                  </p>
                </div>
              )}

              {/* Caso 3: Sem componente no momento */}
              {answers.structureIntact === true && answers.isolatedFailure === true && answers.componentsAvailable === false && (
                <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300 text-slate-800 space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-slate-700 text-white font-mono text-xs font-bold uppercase">
                      Decisão: Aguardar Lote / Banco de Componentes
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-base text-slate-900">
                    Armazenamento temporário na bancada do laboratório
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A lâmpada tem excelente prognóstico de recuperação. Ficará identificada na prateleira até a triagem de um lote que contenha a peça compatível (doador).
                  </p>
                </div>
              )}

              {/* Caso 4: Sucesso Total / Recuperação viável */}
              {answers.structureIntact === true && answers.isolatedFailure === true && answers.componentsAvailable === true && (
                <div className="p-6 rounded-2xl bg-[#EAF5EE] border border-[#2A7557] text-[#0C3826] space-y-3 shadow-xs animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#164E3A] text-[#FFB938] font-mono text-xs font-extrabold uppercase">
                      Decisão: Recuperação 100% Viável ✓
                    </span>
                    <span className="font-mono text-xs text-[#20523D] font-bold">
                      Protocolo de Bancada Aprovado
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-lg text-[#0B2E1E]">
                    Recuperar, soldar, realizar ensaio de segurança e reinserir em uso
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1F4936] leading-relaxed">
                    A lâmpada segue imediatamente para a bancada: substituição do componente danificado com ferro de solda termocontrolado, teste com carga controlada, medição de temperatura do dissipador e verificação do fator de potência.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-[#184E3A]">
                    <span className="bg-white/80 px-2.5 py-1 rounded border border-[#BDD4C7]">✓ Economia de matéria-prima</span>
                    <span className="bg-white/80 px-2.5 py-1 rounded border border-[#BDD4C7]">✓ Redução de resíduo eletrônico</span>
                    <span className="bg-white/80 px-2.5 py-1 rounded border border-[#BDD4C7]">✓ Extensão da vida útil</span>
                  </div>
                </div>
              )}

            </div>

            <p className="text-[11px] font-mono text-[#556961] italic pt-4 border-t border-[#D5DDD2]">
              Simulação baseada nos protocolos de triagem técnica adotados nas disciplinas práticas de Sistemas de Energia do IFSC.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
