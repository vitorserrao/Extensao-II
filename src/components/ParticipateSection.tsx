import React, { useState } from 'react';
import { collectionPointsData } from '../data/projectData';

interface ParticipateSectionProps {
  onOpenDonateModal: () => void;
  onOpenGuideModal?: () => void;
}

export const ParticipateSection: React.FC<ParticipateSectionProps> = ({
  onOpenDonateModal,
  onOpenGuideModal,
}) => {
  const [selectedPointId, setSelectedPointId] = useState<string>(collectionPointsData[0]?.id || 'ifsc-fln-central');

  const selectedPoint = collectionPointsData.find((p) => p.id === selectedPointId) || collectionPointsData[0];

  return (
    <section id="participe" className="py-16 sm:py-24 bg-[#F4F6F2] border-b border-[#CCD6C7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Box: Heading + Chamados de Ação (Conserto & Entrega) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CCD6C7] shadow-sm space-y-10">
          
          {/* Header row com chamado para conserto e entrega */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
              <span>7 — PARTICIPE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center justify-between">
              <div className="lg:col-span-7 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] leading-[1.12]">
                  Pontos de Entrega & Conserto
                </h2>
                <p className="text-sm sm:text-base text-[#384C43] leading-relaxed max-w-2xl">
                  Tem lâmpadas LED que pararam de funcionar? Você pode <strong>consertá-las de forma prática e segura</strong> com nosso guia e simulador, ou <strong>entregá-las em um dos pontos de coleta</strong> do IFSC para triagem e oficinas do projeto.
                </p>
              </div>

              {/* Chamados de Ação Diretos */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
                <button
                  type="button"
                  onClick={onOpenGuideModal ? onOpenGuideModal : () => {
                    const el = document.getElementById('como-recuperamos');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-3 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-white bg-[#1A4B3A] hover:bg-[#0E3527] transition-all cursor-pointer text-center shadow-xs"
                >
                  Consertar: Ver Guia de Reparo →
                </button>
                <button
                  type="button"
                  onClick={onOpenDonateModal}
                  className="px-4 py-3 rounded-xl text-xs font-mono uppercase font-bold tracking-wider text-[#0D241C] bg-[#FAFBF8] border border-[#CCD6C7] hover:bg-[#EDF3EE] transition-all cursor-pointer text-center"
                >
                  Gerar Comprovante
                </button>
              </div>
            </div>
          </div>

          {/* SEÇÃO DETALHADA: PONTOS DE ENTREGA & COLETA */}
          <div id="pontos-de-entrega" className="pt-6 border-t border-[#CCD6C7] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-[#2A5E4D] block">
                  ONDE ENTREGAR SUAS LÂMPADAS
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C]">
                  Pontos de Coleta e Triagem
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5A7367]">
                Selecione um ponto para ver detalhes e horários de funcionamento
              </span>
            </div>

            {/* Grid dos Pontos de Coleta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Coluna 1: Lista Selecionável de Pontos */}
              <div className="lg:col-span-5 space-y-3">
                {collectionPointsData.map((pt) => {
                  const isSelected = pt.id === selectedPointId;
                  const isAtivo = pt.status === 'Ativo';

                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setSelectedPointId(pt.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E7EFEA] border-[#1E5C47] shadow-xs'
                          : 'bg-white hover:bg-[#FAFBF9] border-[#CCD6C7]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <span className="font-display font-bold text-sm text-[#0D241C] block">
                            {pt.name}
                          </span>
                          <span className="text-xs text-[#52695E] block">
                            {pt.address}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                            isAtivo
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-amber-100 text-amber-800 border border-amber-300'
                          }`}
                        >
                          {pt.status}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Coluna 2: Detalhes do Ponto Selecionado */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#FAFBF8] border border-[#CCD6C7] space-y-5">
                <div className="flex items-center justify-between border-b border-[#E1E8DD] pb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#2A5E4D] font-bold block">
                      Local de Entrega
                    </span>
                    <h4 className="text-lg font-display font-bold text-[#0D241C]">
                      {selectedPoint.name}
                    </h4>
                    <p className="text-xs text-[#5A7367]">
                      {selectedPoint.campus}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#E6EFEA] text-[#1E5C47] border border-[#BFD9CD]">
                    Status: {selectedPoint.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1 p-3 rounded-lg bg-white border border-[#E3EAE0]">
                    <span className="font-mono font-bold text-[10px] uppercase text-[#738B7E] block">
                      Endereço
                    </span>
                    <p className="font-medium text-[#132A21]">{selectedPoint.address}</p>
                    <p className="text-[#647C71] text-[11px]">{selectedPoint.city}</p>
                  </div>

                  <div className="space-y-1 p-3 rounded-lg bg-white border border-[#E3EAE0]">
                    <span className="font-mono font-bold text-[10px] uppercase text-[#738B7E] block">
                      Horário de Funcionamento
                    </span>
                    <p className="font-medium text-[#132A21]">{selectedPoint.schedule}</p>
                    <p className="text-[#647C71] text-[11px]">Dias úteis do calendário acadêmico</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-[#E3EAE0] space-y-1 text-xs">
                  <span className="font-mono font-bold text-[10px] uppercase text-[#738B7E] block">
                    Localização Exata no Campus
                  </span>
                  <p className="font-medium text-[#132A21] leading-relaxed">
                    {selectedPoint.room}
                  </p>
                  <p className="text-[#647C71] text-[11px] pt-1">
                    Procure a urna verde do REACENDE identificada com o logotipo do projeto ou entregue diretamente para a equipe de plantão nos laboratórios.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs border-t border-[#E1E8DD]">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[10px] uppercase text-[#738B7E] block font-bold">
                      Contato Local
                    </span>
                    <span className="font-mono text-[#194537] font-semibold text-xs">
                      {selectedPoint.contactEmail}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenDonateModal}
                    className="px-4 py-2 rounded-lg bg-[#0D241C] hover:bg-[#1E5C47] text-white font-mono text-xs font-bold transition-all cursor-pointer self-start sm:self-auto"
                  >
                    Gerar comprovante de entrega para este ponto →
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Contato Geral + Aviso de Segurança Crucial */}
          <div className="pt-6 border-t border-[#CCD6C7] grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-xs sm:text-sm">
            
            <div className="md:col-span-5 space-y-1.5">
              <span className="font-mono font-bold text-[11px] uppercase tracking-wider text-[#4E6B5F] block">
                COORDENAÇÃO & CONTATO
              </span>
              <p className="text-[#132A21] font-semibold text-xs sm:text-sm">
                reacende.extensao@ifsc.edu.br · @reacende.ifsc
              </p>
              <p className="text-[#647C71] text-xs">
                Curso Superior de Tecnologia em Sistemas de Energia · IFSC Florianópolis
              </p>
            </div>

            <div className="md:col-span-7">
              {/* Warning Alert */}
              <div className="p-4 rounded-xl bg-[#FFF8EB] border border-[#F2DAA0] text-[#4A380D] text-xs leading-relaxed font-normal shadow-2xs">
                ⚠️ <strong>Aviso fundamental de segurança:</strong> Se optar por entregar a lâmpada no IFSC, traga-a <strong>fechada</strong>. Caso queira consertar por conta própria, certifique-se de que a lâmpada esteja <strong>totalmente desconectada do soquete e da rede elétrica</strong> e utilize pilhas seguras de baixa tensão (3V) no diagnóstico.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
