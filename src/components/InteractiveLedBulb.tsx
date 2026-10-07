import React, { useState } from 'react';

interface InteractiveLedBulbProps {
  activeLayer: number;
  onSelectLayer: (layerIndex: number) => void;
}

export const InteractiveLedBulb: React.FC<InteractiveLedBulbProps> = ({
  activeLayer,
  onSelectLayer,
}) => {
  const [viewMode, setViewMode] = useState<'exploded' | 'assembled'>('exploded');
  const [isLightOn, setIsLightOn] = useState<boolean>(true);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const parts = [
    {
      idx: 0,
      num: '01',
      name: 'Lente Difusora',
      tag: 'Policarbonato',
      color: '#E2E8DF',
      activeColor: '#164E3A',
    },
    {
      idx: 1,
      num: '02',
      name: 'Placa de LEDs',
      tag: 'SMD Alumínio',
      color: '#FFB938',
      activeColor: '#C97A3D',
    },
    {
      idx: 2,
      num: '03',
      name: 'Driver AC/DC',
      tag: 'Conversor',
      color: '#1A5340',
      activeColor: '#164E3A',
    },
    {
      idx: 3,
      num: '04',
      name: 'Dissipador',
      tag: 'Carcaça Térmica',
      color: '#758C80',
      activeColor: '#365347',
    },
    {
      idx: 4,
      num: '05',
      name: 'Base E27',
      tag: 'Rosca Metálica',
      color: '#C4945A',
      activeColor: '#8C5E28',
    },
  ];

  // Vertical offsets based on view mode
  // In 'exploded' mode, parts are spaced out vertically to see each component
  // In 'assembled' mode, parts sit seamlessly together forming the complete bulb
  const offsets = viewMode === 'exploded' 
    ? {
        lens: 0,
        ledPlate: 108,
        driver: 178,
        heatsink: 260,
        base: 366,
      }
    : {
        lens: 110,
        ledPlate: 172,
        driver: 198,
        heatsink: 180,
        base: 284,
      };

  return (
    <div className="w-full max-w-[380px] p-5 sm:p-6 rounded-3xl bg-white border border-[#D5DDD2] shadow-sm flex flex-col items-center select-none transition-all duration-300">
      
      {/* Top Header & Interactive Mode Bar */}
      <div className="w-full flex items-center justify-between border-b border-[#E5EAE1] pb-3 mb-3">
        <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold text-[#2A5E4D]">
          <span className="w-2 h-2 rounded-full bg-[#164E3A]" />
          <span>Lâmpada LED Interativa</span>
        </div>

        {/* Light toggle button without emoji */}
        <button
          type="button"
          onClick={() => setIsLightOn(!isLightOn)}
          className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
            isLightOn
              ? 'bg-[#FFF3B0] text-[#7A5200] border border-[#F2D675] shadow-xs hover:bg-[#FFE885]'
              : 'bg-[#F0F4EE] text-[#5A6D63] border border-[#CCD8CE] hover:bg-gray-200'
          }`}
          title="Ligar ou desligar os LEDs"
        >
          <span>{isLightOn ? 'Acesa' : 'Apagada'}</span>
        </button>
      </div>

      {/* Interactive Helper Text */}
      <p className="text-[11px] text-[#556961] font-mono mb-2 text-center">
        Clique em qualquer peça da lâmpada para inspecionar:
      </p>

      {/* SVG Canvas with Realistic Interactive LED Lamp */}
      <div className="relative w-full aspect-[320/460] max-h-[460px] flex items-center justify-center py-1">
        
        {/* Glow ambient effect when lamp is ON */}
        {isLightOn && (
          <div
            className="absolute top-6 w-52 h-52 rounded-full pointer-events-none transition-opacity duration-700 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 222, 107, 0.45) 0%, rgba(255, 193, 7, 0.15) 50%, transparent 75%)',
            }}
          />
        )}

        <svg
          viewBox="0 0 320 470"
          className="w-full h-full overflow-visible transition-all duration-500"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(10,35,28,0.06))' }}
        >
          <defs>
            {/* Diffuser Dome Gradient */}
            <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
              <stop offset="40%" stopColor="#F4F8F3" stopOpacity="0.92" />
              <stop offset="85%" stopColor="#E0EBE0" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#C9D6C9" stopOpacity="0.92" />
            </linearGradient>

            <linearGradient id="lensGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDE8" />
              <stop offset="50%" stopColor="#FFECA0" />
              <stop offset="100%" stopColor="#FFD768" />
            </linearGradient>

            {/* Aluminum MCPCB PCB Gradient */}
            <linearGradient id="pcbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8DFD9" />
              <stop offset="30%" stopColor="#F5F8F5" />
              <stop offset="70%" stopColor="#C2CDC4" />
              <stop offset="100%" stopColor="#9AA99E" />
            </linearGradient>

            {/* SMD Phosphor Yellow */}
            <linearGradient id="ledChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="50%" stopColor="#FFC107" />
              <stop offset="100%" stopColor="#E69500" />
            </linearGradient>

            {/* Heatsink Body Gradient */}
            <linearGradient id="heatsinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECEFEA" />
              <stop offset="35%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#DCE2DA" />
              <stop offset="100%" stopColor="#BAC6B8" />
            </linearGradient>

            {/* Screw Base Metallic Thread Gradient */}
            <linearGradient id="metalThreadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9BA3A0" />
              <stop offset="25%" stopColor="#E6EBE7" />
              <stop offset="50%" stopColor="#C5CEC9" />
              <stop offset="75%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#828C88" />
            </linearGradient>

            {/* Brass / Contact Tip Gradient */}
            <linearGradient id="brassTipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8E6527" />
              <stop offset="50%" stopColor="#E0AB4C" />
              <stop offset="100%" stopColor="#6E4D1A" />
            </linearGradient>

            {/* Drop Shadow for active part */}
            <filter id="activeGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#164E3A" floodOpacity="0.45" />
            </filter>
            
            <filter id="lightGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Assembly Line (Linha de centro técnica) */}
          <line
            x1="160"
            y1="10"
            x2="160"
            y2="455"
            stroke="#95A89E"
            strokeWidth="1.2"
            strokeDasharray="5,4"
            opacity={viewMode === 'exploded' ? '0.7' : '0.25'}
          />

          {/* ======================================================== */}
          {/* LAYER 0: LENTE DIFUSORA (01 - Policarbonato Difusor)    */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-500 group"
            onClick={() => onSelectLayer(0)}
            onMouseEnter={() => setHoveredLayer(0)}
            onMouseLeave={() => setHoveredLayer(null)}
            transform={`translate(0, ${offsets.lens})`}
            filter={activeLayer === 0 ? 'url(#activeGlow)' : undefined}
          >
            {/* Diffuser Dome Shape */}
            <path
              d="M 85 92 C 85 40, 118 16, 160 16 C 202 16, 235 40, 235 92 C 235 97, 233 100, 226 100 L 94 100 C 87 100, 85 97, 85 92 Z"
              fill={isLightOn ? 'url(#lensGlowGrad)' : 'url(#lensGrad)'}
              stroke={activeLayer === 0 ? '#164E3A' : hoveredLayer === 0 ? '#164E3A' : '#A8B7AF'}
              strokeWidth={activeLayer === 0 ? '3' : '1.5'}
              className="transition-colors duration-300"
            />

            {/* Specular curved light reflection */}
            <path
              d="M 104 78 C 104 46, 126 30, 154 28"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={isLightOn ? '0.85' : '0.7'}
            />

            {/* Bottom snap-fit lip ring */}
            <rect
              x="92"
              y="97"
              width="136"
              height="6"
              rx="3"
              fill="#D2DBD3"
              stroke={activeLayer === 0 ? '#164E3A' : '#9EB0A5'}
              strokeWidth={activeLayer === 0 ? '2' : '1'}
            />

            {/* Interactive Badge indicator on side */}
            {viewMode === 'exploded' && (
              <g transform="translate(244, 52)">
                <line x1="0" y1="0" x2="-15" y2="12" stroke="#164E3A" strokeWidth="1" strokeDasharray="2,2" />
                <rect x="0" y="-12" width="68" height="22" rx="6" fill={activeLayer === 0 ? '#164E3A' : '#FAFBF9'} stroke={activeLayer === 0 ? '#164E3A' : '#C2D1C6'} strokeWidth="1.2" />
                <text x="34" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill={activeLayer === 0 ? '#FFFFFF' : '#164E3A'}>
                  01 LENTE
                </text>
              </g>
            )}
          </g>

          {/* ======================================================== */}
          {/* LAYER 1: PLACA DE LED (02 - SMD Alumínio MCPCB)         */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-500 group"
            onClick={() => onSelectLayer(1)}
            onMouseEnter={() => setHoveredLayer(1)}
            onMouseLeave={() => setHoveredLayer(null)}
            transform={`translate(0, ${offsets.ledPlate})`}
            filter={activeLayer === 1 ? 'url(#activeGlow)' : undefined}
          >
            {/* Aluminum substrate disc with perspective bevel */}
            <ellipse
              cx="160"
              cy="20"
              rx="64"
              ry="16"
              fill="url(#pcbGrad)"
              stroke={activeLayer === 1 ? '#C97A3D' : hoveredLayer === 1 ? '#164E3A' : '#8A9E92'}
              strokeWidth={activeLayer === 1 ? '3' : '1.5'}
            />
            {/* PCB 3D thickness lip */}
            <path
              d="M 96 20 C 96 29, 224 29, 224 20 L 224 24 C 224 33, 96 33, 96 24 Z"
              fill="#9BA89F"
              stroke="#7E8D83"
              strokeWidth="0.8"
            />

            {/* Circular Copper Tracks */}
            <ellipse cx="160" cy="20" rx="46" ry="11" fill="none" stroke="#C9A060" strokeWidth="1" strokeDasharray="14,6" opacity="0.8" />
            <ellipse cx="160" cy="20" rx="28" ry="7" fill="none" stroke="#C9A060" strokeWidth="0.8" strokeDasharray="10,4" opacity="0.8" />

            {/* Central hole for wires */}
            <ellipse cx="160" cy="20" rx="9" ry="3.5" fill="#3D4B43" stroke="#25332C" strokeWidth="1" />

            {/* SMD LEDs Array around perimeter */}
            {[
              { x: 120, y: 16 },
              { x: 136, y: 11 },
              { x: 160, y: 9 },
              { x: 184, y: 11 },
              { x: 200, y: 16 },
              { x: 195, y: 24 },
              { x: 176, y: 28 },
              { x: 144, y: 28 },
              { x: 125, y: 24 },
            ].map((pt, i) => (
              <g key={i}>
                {/* White chip carrier */}
                <rect
                  x={pt.x - 4}
                  y={pt.y - 3}
                  width="8"
                  height="6"
                  rx="1"
                  fill="#FFFFFF"
                  stroke="#A0ADA4"
                  strokeWidth="0.5"
                />
                {/* Yellow phosphor emitting surface */}
                <rect
                  x={pt.x - 3}
                  y={pt.y - 2}
                  width="6"
                  height="4"
                  rx="0.5"
                  fill={isLightOn ? '#FFF475' : '#FFB938'}
                  filter={isLightOn ? 'url(#lightGlow)' : undefined}
                />
              </g>
            ))}

            {/* Solder pads / Polarity marks */}
            <text x="146" y="22" fontSize="7" fontWeight="bold" fill="#B33924" fontFamily="monospace">+</text>
            <text x="171" y="22" fontSize="7" fontWeight="bold" fill="#1B3528" fontFamily="monospace">-</text>

            {/* Interactive Badge indicator on side */}
            {viewMode === 'exploded' && (
              <g transform="translate(10, 16)">
                <line x1="68" y1="5" x2="88" y2="5" stroke="#C97A3D" strokeWidth="1" strokeDasharray="2,2" />
                <rect x="0" y="-7" width="68" height="22" rx="6" fill={activeLayer === 1 ? '#C97A3D' : '#FAFBF9'} stroke={activeLayer === 1 ? '#C97A3D' : '#DFCEB5'} strokeWidth="1.2" />
                <text x="34" y="8" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill={activeLayer === 1 ? '#FFFFFF' : '#8A4F1E'}>
                  02 LED SMD
                </text>
              </g>
            )}
          </g>

          {/* ======================================================== */}
          {/* LAYER 2: DRIVER AC/DC (03 - Conversor Integrado)        */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-500 group"
            onClick={() => onSelectLayer(2)}
            onMouseEnter={() => setHoveredLayer(2)}
            onMouseLeave={() => setHoveredLayer(null)}
            transform={`translate(0, ${offsets.driver})`}
            filter={activeLayer === 2 ? 'url(#activeGlow)' : undefined}
          >
            {/* Driver PCB Green Board */}
            <rect
              x="130"
              y="10"
              width="60"
              height="48"
              rx="4"
              fill="#18523A"
              stroke={activeLayer === 2 ? '#FFD54F' : hoveredLayer === 2 ? '#FFD54F' : '#0B291D'}
              strokeWidth={activeLayer === 2 ? '3' : '1.5'}
            />

            {/* High Voltage Electrolytic Capacitor (Cilíndrico Preto com faixa dourada) */}
            <g transform="translate(136, 16)">
              <rect x="0" y="0" width="16" height="28" rx="2" fill="#202624" stroke="#0E1210" strokeWidth="0.8" />
              {/* Negative pole gold stripe */}
              <line x1="3" y1="0" x2="3" y2="28" stroke="#FFD54F" strokeWidth="2.5" />
              <text x="3" y="16" fontSize="5" fontWeight="bold" fill="#202624" textAnchor="middle">-</text>
              {/* Capacitor Top Vent */}
              <circle cx="8" cy="2" r="2.5" fill="#5A6661" />
            </g>

            {/* Inductor / Transformer Ferrite Core */}
            <g transform="translate(158, 17)">
              <rect x="0" y="0" width="24" height="22" rx="3" fill="#D68029" stroke="#7A4510" strokeWidth="0.8" />
              <rect x="3" y="3" width="18" height="16" rx="2" fill="#2E2822" />
              {/* Copper Winding Lines */}
              <line x1="6" y1="4" x2="6" y2="18" stroke="#E69535" strokeWidth="1.5" />
              <line x1="10" y1="4" x2="10" y2="18" stroke="#E69535" strokeWidth="1.5" />
              <line x1="14" y1="4" x2="14" y2="18" stroke="#E69535" strokeWidth="1.5" />
            </g>

            {/* IC Controller / Switching Chip (SOP-8) */}
            <rect x="144" y="46" width="14" height="8" rx="1" fill="#151A18" />
            <circle cx="147" cy="48" r="0.8" fill="#FFFFFF" />

            {/* AC input lead wires extending downward */}
            <path d="M 148 58 Q 146 72 154 82" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
            <path d="M 172 58 Q 174 72 166 82" fill="none" stroke="#1E2824" strokeWidth="2" strokeLinecap="round" />

            {/* Interactive Badge indicator on side */}
            {viewMode === 'exploded' && (
              <g transform="translate(244, 25)">
                <line x1="0" y1="8" x2="-45" y2="8" stroke="#1A5340" strokeWidth="1" strokeDasharray="2,2" />
                <rect x="0" y="-3" width="68" height="22" rx="6" fill={activeLayer === 2 ? '#1A5340' : '#FAFBF9'} stroke={activeLayer === 2 ? '#1A5340' : '#BACBC2'} strokeWidth="1.2" />
                <text x="34" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill={activeLayer === 2 ? '#FFFFFF' : '#1A5340'}>
                  03 DRIVER
                </text>
              </g>
            )}
          </g>

          {/* ======================================================== */}
          {/* LAYER 3: DISSIPADOR DE CALOR (04 - Carcaça Térmica)      */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-500 group"
            onClick={() => onSelectLayer(3)}
            onMouseEnter={() => setHoveredLayer(3)}
            onMouseLeave={() => setHoveredLayer(null)}
            transform={`translate(0, ${offsets.heatsink})`}
            filter={activeLayer === 3 ? 'url(#activeGlow)' : undefined}
          >
            {/* Top opening rim of heatsink */}
            <ellipse
              cx="160"
              cy="12"
              rx="62"
              ry="12"
              fill="#D6DFD7"
              stroke={activeLayer === 3 ? '#164E3A' : hoveredLayer === 3 ? '#164E3A' : '#A0AEA3'}
              strokeWidth={activeLayer === 3 ? '3' : '1.5'}
            />

            {/* Inner aluminum cup cutaway hole where driver sits */}
            <ellipse cx="160" cy="12" rx="42" ry="8" fill="#5F7267" opacity="0.6" />

            {/* Conical body with thermal dissipation profile */}
            <path
              d="M 98 12 C 98 48, 126 80, 134 92 L 186 92 C 194 80, 222 48, 222 12 Z"
              fill="url(#heatsinkGrad)"
              stroke={activeLayer === 3 ? '#164E3A' : hoveredLayer === 3 ? '#164E3A' : '#8E9E94'}
              strokeWidth={activeLayer === 3 ? '3' : '1.5'}
            />

            {/* Vertical aerodynamic cooling grooves / fins */}
            <path d="M 120 22 C 122 48, 136 76, 140 88" fill="none" stroke="#C2CCC3" strokeWidth="1.5" />
            <path d="M 138 23 C 139 46, 147 74, 150 89" fill="none" stroke="#CAD4CB" strokeWidth="1.5" />
            <path d="M 160 24 L 160 90" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <path d="M 182 23 C 181 46, 173 74, 170 89" fill="none" stroke="#A7B5AB" strokeWidth="1.5" />
            <path d="M 200 22 C 198 48, 184 76, 180 88" fill="none" stroke="#9EAFA3" strokeWidth="1.5" />

            {/* Interactive Badge indicator on side */}
            {viewMode === 'exploded' && (
              <g transform="translate(10, 40)">
                <line x1="68" y1="8" x2="110" y2="35" stroke="#758C80" strokeWidth="1" strokeDasharray="2,2" />
                <rect x="0" y="-3" width="76" height="22" rx="6" fill={activeLayer === 3 ? '#365347' : '#FAFBF9'} stroke={activeLayer === 3 ? '#365347' : '#C4D1C7'} strokeWidth="1.2" />
                <text x="38" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill={activeLayer === 3 ? '#FFFFFF' : '#365347'}>
                  04 DISSIPADOR
                </text>
              </g>
            )}
          </g>

          {/* ======================================================== */}
          {/* LAYER 4: BASE ROSCA E27 (05 - Base Metálica com Rosca)   */}
          {/* ======================================================== */}
          <g
            className="cursor-pointer transition-all duration-500 group"
            onClick={() => onSelectLayer(4)}
            onMouseEnter={() => setHoveredLayer(4)}
            onMouseLeave={() => setHoveredLayer(null)}
            transform={`translate(0, ${offsets.base})`}
            filter={activeLayer === 4 ? 'url(#activeGlow)' : undefined}
          >
            {/* Base top collar ring */}
            <rect
              x="134"
              y="0"
              width="52"
              height="8"
              rx="2"
              fill="#BAC4BE"
              stroke={activeLayer === 4 ? '#C4945A' : hoveredLayer === 4 ? '#C4945A' : '#8A9791'}
              strokeWidth={activeLayer === 4 ? '2.5' : '1'}
            />

            {/* Helical Threads of E27 Screw (Edison screw threads) */}
            <g>
              {/* Thread ridge 1 */}
              <path
                d="M 134 8 Q 160 14 186 8 L 186 17 Q 160 23 134 17 Z"
                fill="url(#metalThreadGrad)"
                stroke="#68736E"
                strokeWidth="0.8"
              />
              {/* Thread ridge 2 */}
              <path
                d="M 134 17 Q 160 23 186 17 L 186 26 Q 160 32 134 26 Z"
                fill="url(#metalThreadGrad)"
                stroke="#68736E"
                strokeWidth="0.8"
              />
              {/* Thread ridge 3 */}
              <path
                d="M 134 26 Q 160 32 186 26 L 186 35 Q 160 41 134 35 Z"
                fill="url(#metalThreadGrad)"
                stroke="#68736E"
                strokeWidth="0.8"
              />
              {/* Thread ridge 4 */}
              <path
                d="M 136 35 Q 160 41 184 35 L 182 42 Q 160 47 138 42 Z"
                fill="url(#metalThreadGrad)"
                stroke="#68736E"
                strokeWidth="0.8"
              />
            </g>

            {/* Black ceramic dielectric insulator disc */}
            <path
              d="M 142 42 Q 160 47 178 42 L 174 48 Q 160 52 146 48 Z"
              fill="#181D1A"
              stroke="#0A0D0B"
              strokeWidth="0.8"
            />

            {/* Brass Center Electrical Contact Foot Tip */}
            <ellipse
              cx="160"
              cy="50"
              rx="9"
              ry="4"
              fill="url(#brassTipGrad)"
              stroke={activeLayer === 4 ? '#FFD54F' : '#6A4D1A'}
              strokeWidth={activeLayer === 4 ? '2' : '1'}
            />

            {/* Active highlight ring on base */}
            {activeLayer === 4 && (
              <rect
                x="130"
                y="-2"
                width="60"
                height="58"
                rx="8"
                fill="none"
                stroke="#C4945A"
                strokeWidth="2.5"
                strokeDasharray="4,3"
              />
            )}

            {/* Interactive Badge indicator on side */}
            {viewMode === 'exploded' && (
              <g transform="translate(244, 18)">
                <line x1="0" y1="8" x2="-45" y2="8" stroke="#C4945A" strokeWidth="1" strokeDasharray="2,2" />
                <rect x="0" y="-3" width="68" height="22" rx="6" fill={activeLayer === 4 ? '#C4945A' : '#FAFBF9'} stroke={activeLayer === 4 ? '#C4945A' : '#DFCDB6'} strokeWidth="1.2" />
                <text x="34" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="monospace" fill={activeLayer === 4 ? '#FFFFFF' : '#87561F'}>
                  05 BASE E27
                </text>
              </g>
            )}
          </g>

        </svg>
      </div>

      {/* Bottom Layer Selector Quick Tabs */}
      <div className="w-full mt-2 pt-3 border-t border-[#E5EAE1] space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#556961]">
          <span>Peça em foco:</span>
          <span className="font-bold text-[#0D241C]">
            {parts[activeLayer].num} — {parts[activeLayer].name}
          </span>
        </div>

        {/* 5 Quick Selection Pills */}
        <div className="grid grid-cols-5 gap-1.5">
          {parts.map((p) => {
            const isSel = activeLayer === p.idx;
            return (
              <button
                key={p.num}
                type="button"
                onClick={() => onSelectLayer(p.idx)}
                className={`py-1.5 px-1 rounded-lg text-center font-mono text-[10px] font-bold transition-all cursor-pointer truncate ${
                  isSel
                    ? 'bg-[#0D241C] text-white shadow-xs ring-1 ring-[#0D241C]'
                    : 'bg-[#F2F6F0] text-[#4A6357] hover:bg-[#E4ECE1]'
                }`}
                title={`${p.num} ${p.name}`}
              >
                {p.num}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
