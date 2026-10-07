import React, { useState } from 'react';
import { collectionPointsData } from '../data/projectData';

interface DonationTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationTicketModal: React.FC<DonationTicketModalProps> = ({ isOpen, onClose }) => {
  const [lampQty, setLampQty] = useState<number>(3);
  const [lampType, setLampType] = useState<string>('bulbo_e27');
  const [condition, setCondition] = useState<string>('queimada');
  const [selectedCampus, setSelectedCampus] = useState<string>(collectionPointsData[0]?.id || 'campus-1');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [generatedTicket, setGeneratedTicket] = useState<{
    code: string;
    date: string;
    pointName: string;
    qty: number;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const point = collectionPointsData.find(p => p.id === selectedCampus) || collectionPointsData[0] || {
      name: 'Ponto Central IFSC',
      campus: 'Campus Florianópolis'
    };
    const randomCode = `IFSC-${Math.floor(1000 + Math.random() * 9000)}`;
    
    setGeneratedTicket({
      code: randomCode,
      date: new Date().toLocaleDateString('pt-BR'),
      pointName: point.name,
      qty: lampQty,
    });
  };

  const handleReset = () => {
    setGeneratedTicket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-zinc-200 rounded-3xl shadow-xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-6 bg-zinc-50 border-b border-zinc-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="text-sm font-display font-bold text-zinc-900">
              {generatedTicket ? 'Identificador de Lote Gerado' : 'Entregar Lâmpadas no IFSC'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700 p-1.5 rounded-full hover:bg-zinc-200/60 cursor-pointer text-sm"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!generatedTicket ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Preencha os dados do seu lote para gerar o identificador. Você pode fixar o código na embalagem na entrega.
              </p>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Quantidade aproximada de lâmpadas:
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={lampQty}
                    onChange={(e) => setLampQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 px-3 py-2 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 font-mono text-center focus:border-zinc-900 focus:outline-none"
                    required
                  />
                  <span className="text-xs text-zinc-500">
                    lâmpada(s) LED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Tipo de lâmpada:
                  </label>
                  <select
                    value={lampType}
                    onChange={(e) => setLampType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none"
                  >
                    <option value="bulbo_e27">Bulbo comum (Rosca E27)</option>
                    <option value="tubular_t8">Tubular LED (T8 / G13)</option>
                    <option value="spot_gu10">Spot / Dicroica (GU10)</option>
                    <option value="misto">Lote Misto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Sintoma:
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none"
                  >
                    <option value="queimada">Totalmente apagada</option>
                    <option value="piscando">Piscando / Fraca</option>
                    <option value="desconhecido">Não testada</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Ponto de entrega:
                </label>
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none"
                >
                  {collectionPointsData.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.city})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Nome (opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Email (opcional):
                  </label>
                  <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:border-zinc-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-[11px] text-amber-900 font-normal">
                Lembrete: Não aceitamos lâmpadas com o bulbo de vidro trincado ou quebrado por segurança dos estudantes.
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-800 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-display font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer shadow-xs"
                >
                  Gerar Identificador
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-center">
              
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                ✓
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-zinc-900">
                  Lote Registrado!
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  Anote o código abaixo na caixa ou sacola com suas lâmpadas:
                </p>
              </div>

              {/* Code Box */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                  Código de Rastreio
                </span>
                <span className="text-2xl font-mono font-bold tracking-wider text-emerald-800 select-all block">
                  {generatedTicket.code}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 block">
                  Data: {generatedTicket.date} · {generatedTicket.qty} lâmpada(s)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-left space-y-1">
                <span className="font-semibold text-zinc-900 block">
                  Ponto de Entrega:
                </span>
                <p className="text-zinc-800 font-medium">
                  {generatedTicket.pointName}
                </p>
                <p className="text-zinc-500 text-[11px]">
                  Basta depositar o recipiente na caixa do projeto na recepção ou hall de entrada.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-display font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
                >
                  Concluir e Fechar
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
