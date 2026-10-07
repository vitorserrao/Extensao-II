import React, { useState } from 'react';

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('Sábado, 24 de Outubro · 09h às 12h');
  const [lampCount, setLampCount] = useState(2);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#F2F7F2] border-b border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛠️</span>
            <div>
              <h3 className="text-sm font-display font-bold text-[#0D3828]">
                {confirmed ? 'Inscrição Confirmada!' : 'Inscrição na Oficina de Reparo (Bancada Aberta)'}
              </h3>
              <span className="text-[11px] text-gray-500">Laboratório do IFSC · 100% Gratuito</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!confirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-600 leading-relaxed">
                Garanta sua vaga na bancada. Nós fornecemos ferramentas, multímetros e a orientação técnica dos estudantes e professores.
              </p>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Selecione a sessão desejada:
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-800 focus:border-emerald-700 focus:outline-none"
                >
                  <option value="Sábado, 24 de Outubro · 09h às 12h">
                    Sábado, 24 de Outubro · 09h às 12h (Laboratório IFSC)
                  </option>
                  <option value="Quarta-feira, 11 de Novembro · 14h às 17h">
                    Quarta-feira, 11 de Novembro · 14h às 17h (Espaço Maker IFSC)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Seu nome completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nome do participante"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-800 focus:border-emerald-700 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email de contato:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-800 focus:border-emerald-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    WhatsApp (para lembrete):
                  </label>
                  <input
                    type="tel"
                    placeholder="(48) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-800 focus:border-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Quantas lâmpadas LED você pretende trazer para consertar?
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={lampCount}
                    onChange={(e) => setLampCount(Number(e.target.value))}
                    className="w-24 px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-800 text-center font-mono focus:border-emerald-700 focus:outline-none"
                  />
                  <span className="text-xs text-gray-500">
                    lâmpada(s) (recomendamos de 2 a 5 para melhor aproveitamento)
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-snug">
                💡 <strong>Dica da equipe:</strong> Não traga lâmpadas com o bulbo de vidro trincado ou quebrado por medidas de segurança.
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-display font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-xs"
                >
                  Confirmar Inscrição Gratuita
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                ✓
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-gray-900">
                  Vaga Reservada, {name.split(' ')[0]}!
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Enviamos os detalhes da sua sessão para o seu email:
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-200 text-left space-y-1.5 text-xs">
                <div>
                  <span className="text-gray-400 text-[10px] uppercase font-mono block">Data e Local</span>
                  <strong className="text-emerald-900 text-sm block">{selectedDate}</strong>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] uppercase font-mono block">Lâmpadas declaradas</span>
                  <span className="text-gray-700 font-medium">{lampCount} unidade(s)</span>
                </div>
                <div className="pt-2 text-[11px] text-gray-500 border-t border-emerald-100">
                  Endereço: Campus do IFSC · Procure pela sinalização da &ldquo;Oficina de Extensão II · Bancada Aberta&rdquo;.
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-display font-bold text-white bg-[#164E3A] hover:bg-[#0D3828] transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
