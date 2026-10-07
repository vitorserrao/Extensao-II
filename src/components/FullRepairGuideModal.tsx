import React, { useState } from 'react';
import { repairSteps } from '../data/projectData';

interface FullRepairGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullRepairGuideModal: React.FC<FullRepairGuideModalProps> = ({ isOpen, onClose }) => {
  const [selectedSection, setSelectedSection] = useState<'passos' | 'ferramentas' | 'seguranca' | 'circuitos'>('passos');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-900/40 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 uppercase tracking-wider">
              <span>IFSC · EXTENSÃO</span>
              <span>·</span>
              <span>GUIA DE REPARO</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-zinc-900 mt-1">
              Guia de Recondicionamento de Lâmpadas LED
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700 p-2 rounded-full hover:bg-zinc-200/60 cursor-pointer text-sm"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-200 bg-white px-6 gap-2 shrink-0 overflow-x-auto">
          <button
            type="button"
            onClick={() => setSelectedSection('passos')}
            className={`py-3.5 px-4 text-xs font-medium border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              selectedSection === 'passos' 
                ? 'border-zinc-900 text-zinc-900 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Passos do Reparo (01 a 06)
          </button>
          <button
            type="button"
            onClick={() => setSelectedSection('seguranca')}
            className={`py-3.5 px-4 text-xs font-medium border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              selectedSection === 'seguranca' 
                ? 'border-zinc-900 text-zinc-900 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Segurança Elétrica (NR-10)
          </button>
          <button
            type="button"
            onClick={() => setSelectedSection('circuitos')}
            className={`py-3.5 px-4 text-xs font-medium border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              selectedSection === 'circuitos' 
                ? 'border-zinc-900 text-zinc-900 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Como Funciona o Jumper
          </button>
          <button
            type="button"
            onClick={() => setSelectedSection('ferramentas')}
            className={`py-3.5 px-4 text-xs font-medium border-b-2 whitespace-nowrap cursor-pointer transition-colors ${
              selectedSection === 'ferramentas' 
                ? 'border-zinc-900 text-zinc-900 font-semibold' 
                : 'border-transparent text-zinc-500 hover:text-zinc-900'
            }`}
          >
            Ferramentas Necessárias
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-sm text-zinc-700">
          
          {selectedSection === 'passos' && (
            <div className="space-y-4">
              {repairSteps.map((step) => (
                <div key={step.number} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-zinc-900 px-2 py-0.5 rounded bg-white border border-zinc-200">
                        {step.number}
                      </span>
                      <h4 className="font-display font-bold text-zinc-900 text-sm sm:text-base">
                        {step.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-500">
                      {step.category}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {step.warning && (
                    <div className="text-[11px] text-red-800 bg-red-50 border border-red-200 p-2.5 rounded-xl">
                      ⚠️ <strong>Atenção:</strong> {step.warning}
                    </div>
                  )}

                  <div className="pt-2 text-[11px] text-amber-900 flex items-start gap-1 font-mono">
                    <span className="font-semibold shrink-0">Dica prática:</span>
                    <span>{step.proTip}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedSection === 'seguranca' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed space-y-2">
                <h4 className="font-display font-bold text-sm">
                  ⚠️ Segurança em Primeiro Lugar: Regras de Bancada
                </h4>
                <p>
                  A eletricidade domiciliar (127V ou 220V) requer atenção. Siga sempre as precauções de segurança:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                  <h5 className="font-bold text-zinc-900">1. Desenergização Completa</h5>
                  <p className="text-zinc-600">
                    Nunca execute abertura mecânica ou soldagem com a lâmpada conectada a qualquer bocal ou tomada.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                  <h5 className="font-bold text-zinc-900">2. Descarga de Capacitores</h5>
                  <p className="text-zinc-600">
                    O capacitor do driver retém carga elétrica mesmo minutos após desligado. Descarregue antes de manipular.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                  <h5 className="font-bold text-zinc-900">3. EPIs Obrigatórios</h5>
                  <p className="text-zinc-600">
                    Use óculos de proteção para evitar contato com estilhaços ou respingos de solda a 350°C.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                  <h5 className="font-bold text-zinc-900">4. Bancada com Lâmpada Série</h5>
                  <p className="text-zinc-600">
                    O primeiro teste de acendimento deve ser feito com lâmpada série de proteção contra curto-circuito.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedSection === 'circuitos' && (
            <div className="space-y-4 text-xs">
              <h4 className="font-display font-bold text-zinc-900 text-base">
                Como funciona o circuito série e por que o Jumper recupera a lâmpada?
              </h4>
              <p className="text-zinc-600 leading-relaxed font-normal">
                As lâmpadas LED domésticas utilizam diodos SMD conectados em <strong>circuito em série</strong>. A corrente fornecida pelo driver precisa percorrer cada um dos diodos sucessivamente.
              </p>

              <div className="p-5 rounded-2xl bg-zinc-50 font-mono text-[11px] text-zinc-800 border border-zinc-200 overflow-x-auto space-y-1.5">
                <div>[ REDE 127V/220V ] → [ DRIVER DC ]</div>
                <div className="pl-4">↓</div>
                <div className="pl-4">[ LED 1 ] ── [ LED 2 ] ── [ LED 3 (QUEIMADO) ] ── [ LED 4 ] ... ── [ LED 16 ]</div>
                <div className="pl-4 text-red-600">▲ Se 1 LED queimar (abrir), a corrente cessa e toda a lâmpada apaga!</div>
                <div className="pl-4 text-emerald-700 font-semibold">▲ O jumper de solda fecha o circuito novamente, permitindo que os outros 15 LEDs acendam.</div>
              </div>
            </div>
          )}

          {selectedSection === 'ferramentas' && (
            <div className="space-y-4 text-xs">
              <h4 className="font-display font-bold text-zinc-900 text-base">
                Kit de Ferramentas Essenciais
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-0.5">Multímetro Digital</span>
                  <span className="text-zinc-600">Na escala de diodo para teste dos semicondutores.</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-0.5">Ferro de Solda (30W-40W)</span>
                  <span className="text-zinc-600">Com ponta fina e temperatura de 350°C.</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-0.5">Estanho com Fluxo</span>
                  <span className="text-zinc-600">Para união dos contatos do LED.</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-0.5">Espátula Plástica</span>
                  <span className="text-zinc-600">Para desencaixar o bulbo difusor com segurança.</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-zinc-400">
            Projeto de Extensão II · IFSC
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-display font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
