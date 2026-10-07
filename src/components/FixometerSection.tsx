import React, { useState } from 'react';

export const FixometerSection: React.FC = () => {
  const [lampCount, setLampCount] = useState<number>(8);

  // Impact calculations based on standard 9W-12W LED bulb metrics
  // Each bulb: ~85g of electronic & aluminum waste, ~15.000h remaining life, R$ 18,00 avg replacement cost, ~1.2kg CO2e avoided in manufacturing/transport
  const avoidedKg = ((lampCount * 0.085)).toFixed(1);
  const moneySaved = lampCount * 18;
  const hoursRecovered = (lampCount * 7500).toLocaleString('pt-BR');
  const co2Avoided = (lampCount * 1.2).toFixed(1);

  return (
    <section id="resultados" className="py-16 sm:py-24 bg-[#F2F7F2] border-b border-emerald-100/80">
      <div id="fixometro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-200/80 text-xs font-semibold text-emerald-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Fixômetro Comunitário · Inspirado em Dados Abertos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D3828] tracking-tight leading-tight">
              Medindo o impacto real da recuperação.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
              Inspirado no modelo de dados abertos do movimento internacional de reparo, o projeto mede cada lâmpada devolvida à vida e cada grama de lixo eletrônico evitado.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-2xl border border-emerald-200/60 shadow-2xs flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <span className="text-xs font-bold text-gray-900 block leading-tight">
                  82% de Taxa de Recuperação
                </span>
                <span className="text-[11px] text-gray-500">
                  Na maioria dos casos, só 1 componente falhou
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Real-time Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          
          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 font-mono">
                Lâmpadas
              </span>
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">
                💡
              </span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#0D3828] tracking-tight mb-1">
                248
              </div>
              <p className="text-xs text-gray-600">
                Lâmpadas recuperadas e testadas com segurança
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 font-mono">
                Lixo Evitado
              </span>
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">
                🌿
              </span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#0D3828] tracking-tight mb-1">
                98 kg
              </div>
              <p className="text-xs text-gray-600">
                De resíduos eletrônicos e metais fora dos aterros
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 font-mono">
                Vida Útil
              </span>
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm">
                ⏱️
              </span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#0D3828] tracking-tight mb-1">
                1.860 h
              </div>
              <p className="text-xs text-gray-600">
                De iluminação funcional devolvida à comunidade
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 font-mono">
                Economia Estimada
              </span>
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-sm">
                💰
              </span>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#0D3828] tracking-tight mb-1">
                R$ 4.460
              </div>
              <p className="text-xs text-gray-600">
                Poupados por famílias e entidades parceiras
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Fixometer Calculator (Calculadora de Impacto Pessoal) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Slider & Control */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Simulador de Impacto
                </span>
                <h3 className="text-2xl font-display font-bold text-gray-900">
                  Quantas lâmpadas você tem paradas em casa?
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Arraste para estimar quanto resíduo e dinheiro você e sua vizinhança podem poupar ao escolher consertar no IFSC em vez de descartar:
                </p>
              </div>

              {/* Slider UI */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700">Lâmpadas com defeito:</span>
                  <span className="text-xl font-display font-extrabold text-emerald-800 px-3.5 py-1 bg-emerald-50 rounded-full border border-emerald-200">
                    {lampCount} {lampCount === 1 ? 'lâmpada' : 'lâmpadas'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={lampCount}
                  onChange={(e) => setLampCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg accent-emerald-700 cursor-pointer"
                  aria-label="Selecionar quantidade de lâmpadas"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono">
                  <span>1 lâmpada</span>
                  <span>20 lâmpadas</span>
                  <span>40 lâmpadas</span>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Calculation Result Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-100 flex flex-col justify-between">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                  Resíduos evitados
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-800 my-1">
                  ~{avoidedKg} kg
                </div>
                <span className="text-[10px] text-gray-400">
                  Alumínio e polímeros nobres
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-100 flex flex-col justify-between">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                  Economia no bolso
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-600 my-1">
                  R$ {moneySaved},00
                </div>
                <span className="text-[10px] text-gray-400">
                  Sem precisar comprar novas
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-100 flex flex-col justify-between">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                  CO₂ eq. não emitido
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-800 my-1">
                  ~{co2Avoided} kg
                </div>
                <span className="text-[10px] text-gray-400">
                  Poupança na fabricação
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-emerald-100 flex flex-col justify-between">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                  Horas de luz geradas
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-800 my-1">
                  +{hoursRecovered} h
                </div>
                <span className="text-[10px] text-gray-400">
                  Nova vida para o circuito
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
