import React, { useState } from 'react';
import { collectionPointsData } from '../data/projectData';

interface ParticipateSectionProps {
  onOpenDonateModal?: () => void;
  onOpenGuideModal?: () => void;
}

export const ParticipateSection: React.FC<ParticipateSectionProps> = () => {
  const [selectedPointId, setSelectedPointId] = useState<string>(
    collectionPointsData[0]?.id || 'ifsc-fln-central'
  );

  const selectedPoint =
    collectionPointsData.find((p) => p.id === selectedPointId) ||
    collectionPointsData[0];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${selectedPoint.name}, ${selectedPoint.address}, ${selectedPoint.city}`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${selectedPoint.name}, ${selectedPoint.address}, ${selectedPoint.city}`
  )}`;

  return (
    <section id="participe" className="py-16 sm:py-24 bg-[#F4F6F2] border-b border-[#CCD6C7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Principal: Pontos de Coleta, Posto e Mapa */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#CCD6C7] shadow-sm space-y-8">
          
          {/* Cabeçalho direto da seção */}
          <div className="border-b border-[#CCD6C7] pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 bg-[#C97A3D]" />
                <span>7 — PONTOS DE COLETA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D241C] tracking-tight">
                Pontos de Coleta
              </h2>
              <p className="text-sm sm:text-base text-[#384C43] max-w-2xl leading-relaxed">
                Selecione um posto para conferir o endereço completo, horários de atendimento e a localização exata no mapa.
              </p>
            </div>
          </div>

          {/* ÁREA DOS PONTOS DE COLETA & MAPA */}
          <div id="pontos-de-entrega" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna 1: Lista de Postos de Coleta */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2A5E4D]">
                  Postos Disponíveis ({collectionPointsData.length})
                </span>
                <span className="text-[11px] font-mono text-[#5A7367]">
                  Clique para ver no mapa
                </span>
              </div>

              <div className="space-y-2.5">
                {collectionPointsData.map((pt) => {
                  const isSelected = pt.id === selectedPointId;
                  const isAtivo = pt.status === 'Ativo';

                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setSelectedPointId(pt.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#EAF1EC] border-[#1E5C47] shadow-sm ring-1 ring-[#1E5C47]'
                          : 'bg-[#FAFBF9] hover:bg-[#F2F6F3] border-[#CCD6C7]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <svg
                              className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#1E5C47]' : 'text-[#738B7E]'}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="font-display font-bold text-sm text-[#0D241C] truncate block">
                              {pt.name}
                            </span>
                          </div>
                          <p className="text-xs text-[#52695E] pl-6 line-clamp-1">
                            {pt.address}
                          </p>
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
            </div>

            {/* Coluna 2: Detalhes do Posto + Mapa do Endereço */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Cartão de Informações do Posto Selecionado */}
              <div className="p-6 rounded-2xl bg-[#FAFBF8] border border-[#CCD6C7] space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E1E8DD] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#2A5E4D] font-bold">
                        Posto Selecionado
                      </span>
                      <span className="text-xs text-[#738B7E]">•</span>
                      <span className="text-xs font-mono text-[#5A7367]">
                        {selectedPoint.campus}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#0D241C] mt-0.5">
                      {selectedPoint.name}
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#E6EFEA] text-[#1E5C47] border border-[#BFD9CD] self-start sm:self-auto">
                    {selectedPoint.status}
                  </span>
                </div>

                {/* Grid de Detalhes Práticos do Posto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E3EAE0] space-y-1">
                    <span className="font-mono font-bold text-[10px] uppercase text-[#738B7E] block">
                      Endereço Completo
                    </span>
                    <p className="font-medium text-[#132A21]">{selectedPoint.address}</p>
                    <p className="text-[#647C71] text-[11px]">{selectedPoint.city}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E3EAE0] space-y-1">
                    <span className="font-mono font-bold text-[10px] uppercase text-[#738B7E] block">
                      Horário de Funcionamento
                    </span>
                    <p className="font-medium text-[#132A21]">{selectedPoint.schedule}</p>
                    <p className="text-[#647C71] text-[11px]">Dias úteis</p>
                  </div>

                  <div className="sm:col-span-2 p-3.5 rounded-xl bg-white border border-[#E3EAE0] space-y-1">
                    <span className="font-mono font-bold text-[10px] uppercase text-[#738B7E] block">
                      Localização no Local / Ponto de Coleta
                    </span>
                    <p className="font-medium text-[#132A21]">{selectedPoint.room}</p>
                    <p className="text-[#647C71] text-[11px]">
                      Contato: <span className="font-mono font-semibold text-[#1A4B3A]">{selectedPoint.contactEmail}</span>
                    </p>
                  </div>
                </div>

                {/* Seção do Mapa do Endereço */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#2A5E4D] uppercase">
                      <svg className="w-4 h-4 text-[#1E5C47]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>Mapa do Endereço</span>
                    </div>

                    <a
                      href={externalMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#1A4B3A] hover:underline"
                    >
                      <span>Abrir no Google Maps</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Frame do Mapa Interativo */}
                  <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-[#CCD6C7] bg-[#E8EDE6] shadow-2xs">
                    <iframe
                      title={`Mapa de localização: ${selectedPoint.name}`}
                      src={mapEmbedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
