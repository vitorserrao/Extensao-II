import React, { useState } from 'react';
import { InteractiveLedBulb } from './InteractiveLedBulb';
import { SectionHeading } from './SectionHeading';

export const UnderstandLampSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const layers = [
    {
      num: '01',
      name: 'DIFUSOR',
      subtitle: 'Bulbo de policarbonato',
      function: 'distribuir a luz e reduzir o ofuscamento.',
      description: 'O difusor (bulbo de policarbonato) é a parte externa que protege o conjunto óptico e suaviza a distribuição da luz emitida pelos LEDs. É fabricado em material termoplástico translúcido resistente a impactos.',
      repairNote: 'A fixação varia conforme o modelo e pode ser feita por encaixe, pressão ou adesivo de silicone. Sua remoção cuidadosa com espátula permite acesso aos componentes internos sem danificar o bulbo de policarbonato.',
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

  return (
    <section id="entenda-a-lampada" className="py-16 sm:py-24 section-alt border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Duas metades: texto e camadas à esquerda, modelo interativo à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              num={4}
              label="Entenda a lâmpada"
              line1="Cinco partes, cada uma"
              line2={<span className="marker-yellow">com seu papel.</span>}
            >
              <p>
                Uma lâmpada LED moderna é um sistema integrado de componentes mecânicos, elétricos e térmicos. Clique nas camadas para inspecionar cada elemento.
              </p>
            </SectionHeading>

            {/* Right Column: Layer Details */}
            <div className="border-t border-b border-[#D5E2D6] divide-y divide-[#D5E2D6]">
              {layers.map((layer, index) => {
                const layerId = index + 1;
                const isActive = activeLayer === layerId;

                return (
                  <div
                    key={layer.num}
                    onClick={() => setActiveLayer(layerId)}
                    className={`py-4 transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg-[#F4F8F4]/80 -mx-3 px-3 rounded-2xl shadow-2xs' : 'hover:bg-[#F4F8F4]/60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded transition-colors ${
                        isActive ? 'bg-[#0D241C] text-white' : 'text-[#2F9E41] bg-[#EBF7ED]'
                      }`}>
                        {layer.num}
                      </span>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-display font-bold text-base transition-colors ${
                            isActive ? 'text-[#0D241C]' : 'text-[#0D241C]'
                          }`}>
                            {layer.name} <span className="font-sans font-normal text-xs text-[#6B7F74]">({layer.subtitle})</span>
                          </h3>
                          {isActive && (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#2F9E41] font-bold">
                              Camada ativa
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#3A453F] leading-relaxed">
                          <span className="font-semibold text-[#1A1A1A]">Função: </span>
                          {layer.function}
                        </p>

                        {isActive && (
                          <div className="pt-2 text-xs text-[#3A453F] space-y-2 border-t border-[#D5E2D6]/50 mt-2 animate-fadeIn">
                            <p className="leading-relaxed whitespace-pre-line">{layer.description}</p>
                            <div className="p-3 rounded-xl bg-white/80 border border-[#D5E2D6] text-[#3A453F]">
                              <span className="font-bold text-[10px] uppercase font-mono tracking-wider block text-[#2F9E41]">
                                Observação Técnica:
                              </span>
                              <p className="mt-0.5 text-xs">{layer.repairNote}</p>
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

            {/* Modelo interativo */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <InteractiveLedBulb
                activeLayer={activeLayer}
                onSelectLayer={setActiveLayer}
              />
              <p className="mt-3 text-[11px] text-[#6B7F74] italic text-center">
                Modelo interativo em camadas da lâmpada LED. Clique nas peças para inspecionar.
              </p>
            </div>

          </div>
      </div>
    </section>
  );
};
