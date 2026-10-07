import React, { useState } from 'react';
import { InteractiveLedBulb } from './InteractiveLedBulb';

export const UnderstandLampSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  // Estados do Diagnóstico
  const [activeTab, setActiveTab] = useState<'guia' | 'simulador'>('guia');
  const [symptomType, setSymptomType] = useState<'visual' | 'eletrico'>('visual');
  const [activeObservation, setActiveObservation] = useState<string>('Pontos pretos');
  const [activeBehavior, setActiveBehavior] = useState<string>('Não liga');

  // Estado do Fluxo de Triagem / Decisão interativa
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

        {/* PARTE 2: Diagnóstico e Triagem Técnica */}
        <div id="diagnostico" className="pt-14 border-t border-[#CCD6C7] space-y-10 scroll-mt-20">
          
          {/* Cabeçalho da Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
                <span>3.2 — DIAGNÓSTICO & TRIAGEM TÉCNICA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
                Diagnóstico de Bancada e Decisão
              </h2>
              <p className="text-sm sm:text-base text-[#384C43] leading-relaxed">
                Antes de qualquer intervenção, identificamos com precisão a falha e avaliamos se a lâmpada atende aos critérios técnicos de segurança e viabilidade.
              </p>
            </div>

            {/* Alternador Principal de Abas */}
            <div className="flex p-1.5 bg-[#EAEFE7] rounded-2xl border border-[#CCD6C7] self-start md:self-auto shrink-0 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('guia')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'guia'
                    ? 'bg-[#143B2C] text-white shadow-xs'
                    : 'text-[#3E574B] hover:text-[#0D241C] hover:bg-white/60'
                }`}
              >
                <span>🔍</span>
                <span>Guia de Falhas & Sintomas</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('simulador')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'simulador'
                    ? 'bg-[#143B2C] text-white shadow-xs'
                    : 'text-[#3E574B] hover:text-[#0D241C] hover:bg-white/60'
                }`}
              >
                <span>⚖️</span>
                <span>Simulador: Vale Recuperar?</span>
              </button>
            </div>
          </div>

          {/* ABA 1: GUIA DE FALHAS & SINTOMAS */}
          {activeTab === 'guia' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Sub-filtro: Visual vs Elétrico */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#E1E8DE]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#4B665A] uppercase">Tipo de Análise:</span>
                  <div className="inline-flex rounded-xl bg-white border border-[#CBD7CA] p-1 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setSymptomType('visual')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                        symptomType === 'visual'
                          ? 'bg-[#143B2C] text-white'
                          : 'text-[#4A6457] hover:text-[#0D241C]'
                      }`}
                    >
                      👁️ Sinais Visuais (5)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSymptomType('eletrico')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all cursor-pointer ${
                        symptomType === 'eletrico'
                          ? 'bg-[#143B2C] text-white'
                          : 'text-[#4A6457] hover:text-[#0D241C]'
                      }`}
                    >
                      ⚡ Sintomas Elétricos (4)
                    </button>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#587366] italic">
                  Clique em um item para carregar a ficha técnica
                </span>
              </div>

              {/* Master-Detail Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Coluna da Esquerda: Lista de Opções */}
                <div className="lg:col-span-5 space-y-2.5">
                  {symptomType === 'visual' ? (
                    observationItems.map((item) => {
                      const isSelected = activeObservation === item.title;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveObservation(item.title)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#143B2C] text-white border-[#143B2C] shadow-md'
                              : 'bg-white text-[#0D241C] border-[#D4DED2] hover:border-[#1E4D3B] hover:bg-[#F8FAF7]'
                          }`}
                        >
                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-display font-bold truncate">
                                {item.title}
                              </span>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-[#FFB938] shrink-0" />
                              )}
                            </div>
                            <p className={`text-xs truncate ${isSelected ? 'text-[#C5D9CE]' : 'text-[#4A6357]'}`}>
                              {item.desc}
                            </p>
                          </div>

                          <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded shrink-0 ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : item.recoverable
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-900'
                          }`}>
                            {item.recoverable ? 'Recuperável' : 'Critério de descarte'}
                          </span>
                        </button>
                      );
                    })
                  ) : (
                    behaviorItems.map((item) => {
                      const isSelected = activeBehavior === item.title;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveBehavior(item.title)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#143B2C] text-white border-[#143B2C] shadow-md'
                              : 'bg-white text-[#0D241C] border-[#D4DED2] hover:border-[#1E4D3B] hover:bg-[#F8FAF7]'
                          }`}
                        >
                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-display font-bold truncate">
                                {item.title}
                              </span>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-[#FFB938] shrink-0" />
                              )}
                            </div>
                            <p className={`text-xs truncate ${isSelected ? 'text-[#C5D9CE]' : 'text-[#4A6357]'}`}>
                              {item.desc}
                            </p>
                          </div>

                          <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded shrink-0 ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-[#EBF0E8] text-[#335345]'
                          }`}>
                            Ensaio em bancada
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>

                {/* Coluna da Direita: Ficha de Bancada Detalhada */}
                <div className="lg:col-span-7">
                  {symptomType === 'visual' ? (
                    (() => {
                      const current = observationItems.find(o => o.title === activeObservation) || observationItems[0];
                      return (
                        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#CBD7CA] shadow-2xs space-y-6 animate-fadeIn">
                          {/* Topo da Ficha */}
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3EAE0] pb-4">
                            <div>
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#355748] font-bold block">
                                Ficha de Inspeção Visual
                              </span>
                              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C] mt-0.5">
                                {current.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#EAF2E9] text-[#1D4A38]">
                                {current.partAffected}
                              </span>
                              <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                                current.recoverable
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-900'
                              }`}>
                                {current.recoverable ? '✓ Recuperável' : '⚠️ Descarte / Sucata'}
                              </span>
                            </div>
                          </div>

                          {/* Campos Estruturados */}
                          <div className="space-y-4 text-xs sm:text-sm">
                            <div className="p-4 rounded-xl bg-[#F8FAF7] border border-[#DCE4DA] space-y-1">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2D5A47] block">
                                O que esse sinal indica
                              </span>
                              <p className="text-[#1D3228] leading-relaxed">
                                {current.hint}
                              </p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#F8FAF7] border border-[#DCE4DA] space-y-1">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2D5A47] block">
                                Conduta recomendada na bancada
                              </span>
                              <p className="text-[#1D3228] leading-relaxed">
                                {current.actionRecommendation}
                              </p>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-[#E3EAE0] flex items-center justify-between text-xs text-[#526B5E] font-mono">
                            <span>Tag do defeito: {current.tag}</span>
                            <span>Protocolo IFSC de Triagem</span>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    (() => {
                      const current = behaviorItems.find(b => b.title === activeBehavior) || behaviorItems[0];
                      return (
                        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#CBD7CA] shadow-2xs space-y-6 animate-fadeIn">
                          {/* Topo da Ficha */}
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3EAE0] pb-4">
                            <div>
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#355748] font-bold block">
                                Investigação Laboratorial
                              </span>
                              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C] mt-0.5">
                                {current.title}
                              </h3>
                            </div>
                            <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-[#EAF2E9] text-[#1D4A38]">
                              {current.status}
                            </span>
                          </div>

                          {/* Campos Estruturados */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div className="p-4 rounded-xl bg-[#F8FAF7] border border-[#DCE4DA] space-y-1.5">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2D5A47] block">
                                Causa Mais Provável
                              </span>
                              <p className="text-[#1D3228] leading-relaxed">
                                {current.possibleCause}
                              </p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#F8FAF7] border border-[#DCE4DA] space-y-1.5">
                              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2D5A47] block">
                                Procedimento com Instrumentos
                              </span>
                              <p className="text-[#1D3228] leading-relaxed">
                                {current.diagnosticTest}
                              </p>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-[#EDF3EC] border border-[#C5D7C6] space-y-1 text-xs sm:text-sm">
                            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#143B2C] block">
                              Ação Típica de Bancada
                            </span>
                            <p className="text-[#153427] font-semibold leading-relaxed">
                              {current.typicalAction}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[#E3EAE0] flex items-center justify-between text-xs text-[#526B5E] font-mono">
                            <span>Ensaio com fonte regulada e multímetro</span>
                            <span>Protocolo IFSC de Triagem</span>
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ABA 2: SIMULADOR DE DECISÃO (VALE A PENA REPARAR?) */}
          {activeTab === 'simulador' && (
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#CCD6C7] space-y-8 shadow-xs animate-fadeIn">
              
              {/* Topo do Simulador */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5EAE1] pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#184E3A]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#184E3A]">
                      Árvore de Decisão Interativa
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-[#0D241C] mt-1">
                    Vale a pena reparar esta lâmpada?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#476054] mt-1">
                    Responda às 3 perguntas de triagem técnica para obter a recomendação imediata.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetTriage}
                  className="text-xs font-mono font-bold px-4 py-2 rounded-xl border border-[#CCD6C7] text-[#334E43] hover:bg-[#F2F6F0] self-start sm:self-auto cursor-pointer transition-colors shadow-2xs"
                >
                  Reiniciar Triagem
                </button>
              </div>

              {/* Indicador de Passos */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 font-mono text-xs">
                <div className={`p-3 rounded-xl border text-center transition-all ${
                  answers.structureIntact === null
                    ? 'bg-[#143B2C] text-white border-[#143B2C] shadow-xs'
                    : answers.structureIntact === true
                    ? 'bg-[#EAF3EB] text-[#184E3A] border-[#BDD4C7]'
                    : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}>
                  <span className="block font-bold">1. Integridade</span>
                  <span className="text-[10px] opacity-80">Carcaça e rosca</span>
                </div>

                <div className={`p-3 rounded-xl border text-center transition-all ${
                  answers.structureIntact !== true
                    ? 'bg-[#F5F8F4] text-[#8EA298] border-[#DCE4DA]'
                    : answers.isolatedFailure === null
                    ? 'bg-[#143B2C] text-white border-[#143B2C] shadow-xs'
                    : answers.isolatedFailure === true
                    ? 'bg-[#EAF3EB] text-[#184E3A] border-[#BDD4C7]'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  <span className="block font-bold">2. Localização</span>
                  <span className="text-[10px] opacity-80">Falha concentrada</span>
                </div>

                <div className={`p-3 rounded-xl border text-center transition-all ${
                  answers.structureIntact !== true || answers.isolatedFailure !== true
                    ? 'bg-[#F5F8F4] text-[#8EA298] border-[#DCE4DA]'
                    : answers.componentsAvailable === null
                    ? 'bg-[#143B2C] text-white border-[#143B2C] shadow-xs'
                    : answers.componentsAvailable === true
                    ? 'bg-[#EAF3EB] text-[#184E3A] border-[#BDD4C7]'
                    : 'bg-slate-100 text-slate-800 border-slate-300'
                }`}>
                  <span className="block font-bold">3. Peças</span>
                  <span className="text-[10px] opacity-80">Compatibilidade</span>
                </div>
              </div>

              {/* Cartão de Pergunta Ativa ou Resultado */}
              <div className="space-y-6">
                
                {/* PERGUNTA 1 */}
                {answers.structureIntact === null && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAF7] border border-[#CCD6C7] space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold uppercase text-[#1B4B3A] tracking-wider block">
                        Etapa 1 de 3 · Inspeção Física e Térmica Externa
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C]">
                        A carcaça, o isolamento e a estrutura física estão íntegros?
                      </h4>
                      <p className="text-sm text-[#476054]">
                        Verifique se não há trincas no corpo plástico, se a rosca metálica E27 não está frouxa e se o plástico não deformou por calor excessivo.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setAnswers({ structureIntact: true, isolatedFailure: null, componentsAvailable: null })}
                        className="p-5 rounded-2xl bg-white border border-[#B8CAB5] hover:border-[#143B2C] hover:bg-[#F2F7F1] text-left transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-bold text-[#0D241C] group-hover:text-[#143B2C]">
                            SIM, estrutura 100% íntegra
                          </span>
                          <span className="text-lg">✓</span>
                        </div>
                        <p className="text-xs text-[#526B5E]">
                          Sem trincas, rosca firme e carcaça perfeitamente isolada.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAnswers({ structureIntact: false, isolatedFailure: null, componentsAvailable: null })}
                        className="p-5 rounded-2xl bg-white border border-rose-200 hover:border-rose-400 hover:bg-rose-50/50 text-left transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-bold text-rose-900">
                            NÃO, possui quebras ou deformação
                          </span>
                          <span className="text-lg">✕</span>
                        </div>
                        <p className="text-xs text-rose-700">
                          Carcaça rachada, rosca solta ou plástico derretido.
                        </p>
                      </button>
                    </div>
                  </div>
                )}

                {/* RESULTADO SE NÃO NO PASSO 1 */}
                {answers.structureIntact === false && (
                  <div className="p-7 rounded-2xl bg-rose-50 border border-rose-300 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-rose-700 text-white font-mono text-xs font-bold uppercase">
                        Decisão: Não Recuperar (Risco Estrutural / Isolamento)
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-rose-950">
                      Encaminhar para Logística Reversa / Ponto de Coleta Seguro
                    </h4>
                    <p className="text-sm text-rose-800 leading-relaxed max-w-3xl">
                      A quebra da carcaça compromete a isolação contra choque elétrico e a ancoragem mecânica da rosca E27. Lâmpadas sem segurança mecânica não são recolocadas em uso. Seus componentes internos intactos podem ser retirados para doação de peças.
                    </p>
                    <button
                      type="button"
                      onClick={resetTriage}
                      className="px-4 py-2 rounded-xl bg-rose-700 text-white font-mono text-xs font-bold hover:bg-rose-800 transition-colors cursor-pointer"
                    >
                      Fazer nova avaliação
                    </button>
                  </div>
                )}

                {/* PERGUNTA 2 */}
                {answers.structureIntact === true && answers.isolatedFailure === null && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAF7] border border-[#CCD6C7] space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold uppercase text-[#1B4B3A] tracking-wider block">
                        Etapa 2 de 3 · Diagnóstico do Circuito
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C]">
                        A falha está concentrada em poucos componentes específicos?
                      </h4>
                      <p className="text-sm text-[#476054]">
                        Exemplo: apenas 1 LED aberto na série ou 1 capacitor com capacitância esgotada, mantendo as trilhas e a placa sãs.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, isolatedFailure: true }))}
                        className="p-5 rounded-2xl bg-white border border-[#B8CAB5] hover:border-[#143B2C] hover:bg-[#F2F7F1] text-left transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-bold text-[#0D241C] group-hover:text-[#143B2C]">
                            SIM, falha pontual e localizada
                          </span>
                          <span className="text-lg">✓</span>
                        </div>
                        <p className="text-xs text-[#526B5E]">
                          Trilhas preservadas, apenas um componente aberto ou queimado.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, isolatedFailure: false }))}
                        className="p-5 rounded-2xl bg-white border border-amber-300 hover:border-amber-500 hover:bg-amber-50/50 text-left transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-bold text-amber-950">
                            NÃO, dano elétrico generalizado
                          </span>
                          <span className="text-lg">⚠️</span>
                        </div>
                        <p className="text-xs text-amber-800">
                          Placa carbonizada, múltiplos semicondutores em curto ou trilhas rompidas.
                        </p>
                      </button>
                    </div>
                  </div>
                )}

                {/* RESULTADO SE NÃO NO PASSO 2 */}
                {answers.structureIntact === true && answers.isolatedFailure === false && (
                  <div className="p-7 rounded-2xl bg-amber-50 border border-amber-300 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-amber-700 text-white font-mono text-xs font-bold uppercase">
                        Decisão: Doação de Peças / Sucata Técnica
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-amber-950">
                      Desmontar e aproveitar peças boas em outras lâmpadas
                    </h4>
                    <p className="text-sm text-amber-900 leading-relaxed max-w-3xl">
                      Reconstruir um circuito severamente queimado consome tempo e recursos excessivos. No entanto, o difusor plástico, o dissipador metálico e os LEDs que não sofreram sobretensão são separados para o estoque de reparo.
                    </p>
                    <button
                      type="button"
                      onClick={resetTriage}
                      className="px-4 py-2 rounded-xl bg-amber-800 text-white font-mono text-xs font-bold hover:bg-amber-900 transition-colors cursor-pointer"
                    >
                      Fazer nova avaliação
                    </button>
                  </div>
                )}

                {/* PERGUNTA 3 */}
                {answers.structureIntact === true && answers.isolatedFailure === true && answers.componentsAvailable === null && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAF7] border border-[#CCD6C7] space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <span className="font-mono text-xs font-bold uppercase text-[#1B4B3A] tracking-wider block">
                        Etapa 3 de 3 · Viabilidade de Reposição
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C]">
                        Há componente substituto compatível no estoque do laboratório?
                      </h4>
                      <p className="text-sm text-[#476054]">
                        O componente de reposição precisa ter as mesmas especificações elétricas (tensão de ruptura, corrente e potência) para garantir a segurança.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, componentsAvailable: true }))}
                        className="p-5 rounded-2xl bg-white border border-[#B8CAB5] hover:border-[#143B2C] hover:bg-[#F2F7F1] text-left transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-bold text-[#0D241C] group-hover:text-[#143B2C]">
                            SIM, componente compatível disponível
                          </span>
                          <span className="text-lg">✓</span>
                        </div>
                        <p className="text-xs text-[#526B5E]">
                          LED SMD ou capacitor de mesma especificação pronto para montagem.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, componentsAvailable: false }))}
                        className="p-5 rounded-2xl bg-white border border-slate-300 hover:border-slate-500 hover:bg-slate-50 text-left transition-all cursor-pointer shadow-2xs group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-base font-bold text-slate-900">
                            NÃO, sem componente no momento
                          </span>
                          <span className="text-lg">⏳</span>
                        </div>
                        <p className="text-xs text-slate-700">
                          Sem peça idêntica no estoque de sucatas do laboratório.
                        </p>
                      </button>
                    </div>
                  </div>
                )}

                {/* RESULTADO SE NÃO NO PASSO 3 */}
                {answers.structureIntact === true && answers.isolatedFailure === true && answers.componentsAvailable === false && (
                  <div className="p-7 rounded-2xl bg-slate-50 border border-slate-300 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-slate-700 text-white font-mono text-xs font-bold uppercase">
                        Decisão: Aguardar Lote / Banco de Espera
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-slate-900">
                      Armazenar temporariamente para reparo posterior
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                      A lâmpada tem excelente prognóstico de recuperação. Ficará identificada na prateleira técnica até a chegada de outro lote de doadoras com a peça necessária.
                    </p>
                    <button
                      type="button"
                      onClick={resetTriage}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-white font-mono text-xs font-bold hover:bg-slate-900 transition-colors cursor-pointer"
                    >
                      Fazer nova avaliação
                    </button>
                  </div>
                )}

                {/* RESULTADO SE SIM NO PASSO 3 (SUCESSO TOTAL) */}
                {answers.structureIntact === true && answers.isolatedFailure === true && answers.componentsAvailable === true && (
                  <div className="p-7 sm:p-8 rounded-2xl bg-[#EAF5EE] border border-[#2A7557] space-y-4 shadow-xs animate-fadeIn">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-[#164E3A] text-[#FFB938] font-mono text-xs font-extrabold uppercase">
                        Decisão: Recuperação 100% Viável ✓
                      </span>
                      <span className="font-mono text-xs text-[#20523D] font-bold">
                        Protocolo de Bancada Aprovado
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0B2E1E]">
                      Recuperar, soldar, realizar ensaio de segurança e reinserir em uso
                    </h4>
                    <p className="text-sm text-[#1F4936] leading-relaxed max-w-3xl">
                      A lâmpada segue imediatamente para a bancada: substituição do componente danificado com ferro de solda termocontrolado, teste com carga controlada, medição de temperatura do dissipador e verificação do fator de potência.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#184E3A]">
                      <span className="bg-white/90 px-3 py-1.5 rounded-lg border border-[#BDD4C7] font-semibold">✓ Economia de matéria-prima</span>
                      <span className="bg-white/90 px-3 py-1.5 rounded-lg border border-[#BDD4C7] font-semibold">✓ Redução de resíduo eletrônico</span>
                      <span className="bg-white/90 px-3 py-1.5 rounded-lg border border-[#BDD4C7] font-semibold">✓ Extensão da vida útil</span>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={resetTriage}
                        className="px-4 py-2 rounded-xl bg-[#164E3A] text-white font-mono text-xs font-bold hover:bg-[#0D241C] transition-colors cursor-pointer"
                      >
                        Avaliar outra lâmpada
                      </button>
                    </div>
                  </div>
                )}

              </div>

              <p className="text-[11px] font-mono text-[#556961] italic pt-4 border-t border-[#D5DDD2]">
                Critérios técnicos fundamentados nos procedimentos das disciplinas de Sistemas de Energia do IFSC.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
