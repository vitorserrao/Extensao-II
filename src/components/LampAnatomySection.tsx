import React, { useState } from 'react';
import { InteractiveLedBulb } from './InteractiveLedBulb';

export const LampAnatomySection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      num: '01',
      name: 'Lente',
      desc: 'Protege e distribui a luz.',
      barColor: '#E2E8DF',
      tag: 'Policarbonato Difusor',
      detail: 'Cúpula plástica que suaviza o ofuscamento dos diodos e dispersa o feixe luminoso de forma homogênea no ambiente.',
      repairNote: 'Raramente quebra; basta remover com espátula plástica para ter acesso à placa interna.',
    },
    {
      num: '02',
      name: 'LED',
      desc: 'A fonte de luz: um semicondutor que emite luz quando recebe corrente.',
      barColor: '#FFB938',
      tag: 'Placa SMD de Alumínio',
      detail: 'Arranjo de chips emissores de luz montados em circuito série sobre uma chapa de alumínio condutora de calor.',
      repairNote: 'Ponto mais frequente de falha (78% dos casos). Quando 1 queima, o circuito abre. Pode ser substituído ou ponteado.',
    },
    {
      num: '03',
      name: 'Driver',
      desc: 'Adapta a energia da rede ao que os LEDs precisam para funcionar.',
      barColor: '#1A5340',
      tag: 'Conversor AC/DC Integrado',
      detail: 'Circuito eletrônico que retifica a corrente alternada da rede (127V/220V) para corrente contínua estável necessária aos LEDs.',
      repairNote: 'Segundo ponto de falha mais comum (capacitores eletrolíticos de filtragem com estufamento térmico).',
    },
    {
      num: '04',
      name: 'Dissipador',
      desc: 'Conduz o calor para longe do LED.',
      barColor: '#758C80',
      tag: 'Carcaça Térmica',
      detail: 'Corpo estrutural de alumínio e polímero termocondutor responsável por transferir o calor gerado pela junção semicondutora para o ar.',
      repairNote: 'Peça nobre e 100% reutilizável que nunca estraga, mas cujo descarte polui aterros com metais pesados.',
    },
    {
      num: '05',
      name: 'Base',
      desc: 'Faz a conexão elétrica com o soquete.',
      barColor: '#C4945A',
      tag: 'Rosca Padrão E27',
      detail: 'Rosca metálica padrão de 27mm de diâmetro e pino central de contato com isolador de cerâmica ou baquelite.',
      repairNote: 'Gera falha ocasional por oxidação nos terminais ou rompimento mecânico dos fios internos de alimentação.',
    },
  ];

  return (
    <section id="conheca-a-lampada" className="py-16 sm:py-24 bg-paper-grid border-b border-[#E0E6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
            <span>4 — CONHEÇA A LÂMPADA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
            Cinco partes, cada uma com<br />
            seu papel.
          </h2>
          <p className="text-xs sm:text-sm text-[#476357]">
            Clique em cada camada abaixo para explorar a anatomia técnica de uma lâmpada LED moderna:
          </p>
        </div>

        {/* Exploded Layers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Layered Diagram / Visual Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <InteractiveLedBulb
              activeLayer={activeLayer}
              onSelectLayer={setActiveLayer}
            />

            <p className="mt-3 text-[11px] font-mono text-[#556961] italic text-center">
              Figura 4 — Modelo interativo da lâmpada LED. Clique nas peças para inspecionar.
            </p>

          </div>

          {/* Right: Detailed Interactive List matching PDF Page 3 */}
          <div className="lg:col-span-7 border-t border-b border-[#CCD6C7] divide-y divide-[#CCD6C7]">
            {layers.map((layer, index) => {
              const isSelected = activeLayer === index;
              return (
                <div
                  key={layer.num}
                  onClick={() => setActiveLayer(index)}
                  className={`py-4.5 transition-all duration-300 cursor-pointer px-4 rounded-xl ${
                    isSelected ? 'bg-white shadow-xs border-l-4 border-l-[#0D241C]' : 'hover:bg-white/40'
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#0D241C]' : 'text-[#7B958B]'}`}>
                      {layer.num}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-display font-bold text-[#0D241C]">
                          {layer.name}
                        </h3>
                        <span className="text-[10px] font-mono text-[#55756B] bg-[#EBF0E8] px-2 py-0.5 rounded">
                          {layer.tag}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-[#384D43] leading-relaxed">
                        {layer.desc}
                      </p>

                      {isSelected && (
                        <div className="pt-2 text-xs text-[#2A4237] space-y-1.5 border-t border-[#E5EAE1] mt-2 animate-fadeIn">
                          <p>{layer.detail}</p>
                          <p className="text-[11px] font-mono text-[#7D5A12] bg-[#FFF8EB] p-2 rounded-lg">
                            🔍 <strong>Diagnóstico de Bancada:</strong> {layer.repairNote}
                          </p>
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
    </section>
  );
};
