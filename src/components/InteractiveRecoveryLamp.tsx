import React, { useState } from 'react';

interface InteractiveRecoveryLampProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
}

export const InteractiveRecoveryLamp: React.FC<InteractiveRecoveryLampProps> = ({
  currentStep,
  onSelectStep,
}) => {
  const [lampPowered, setLampPowered] = useState<boolean>(true);

  // In step 5, lamp lights up if lampPowered is true
  const isGlowing = currentStep === 5 && lampPowered;

  // The defective LED index is index 2 (x=160, y=9)
  // In step 2, we are probing this LED with 2x AA batteries (3V)
  // In step 3, plier removes this LED
  // In step 4, soldering iron applies solder bridge over this pad
  // In step 5, lamp is assembled and glows beautifully

  return (
    <div className="w-full max-w-[380px] mx-auto p-5 sm:p-6 rounded-3xl bg-white border border-[#D5DDD2] shadow-sm flex flex-col items-center select-none transition-all duration-300">
      
      {/* Top Header & Bench Status Bar */}
      <div className="w-full flex items-center justify-between border-b border-[#E5EAE1] pb-3 mb-3">
        <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase font-bold text-[#164E3A]">
          <span className={`w-2.5 h-2.5 rounded-full transition-colors ${
            currentStep === 5
              ? (lampPowered ? 'bg-amber-500 animate-pulse' : 'bg-zinc-400')
              : currentStep === 4
              ? 'bg-sky-500'
              : currentStep === 3
              ? 'bg-rose-500'
              : currentStep === 2
              ? 'bg-amber-500'
              : 'bg-emerald-600'
          }`} />
          <span>Bancada de Recuperação</span>
        </div>

        {currentStep === 5 ? (
          <button
            type="button"
            onClick={() => setLampPowered(!lampPowered)}
            className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
              lampPowered
                ? 'bg-[#FFF3B0] text-[#7A5200] border border-[#F2D675] shadow-xs hover:bg-[#FFE885]'
                : 'bg-[#F0F4EE] text-[#5A6D63] border border-[#CCD8CE] hover:bg-gray-200'
            }`}
            title="Ligar ou desligar os LEDs no teste"
          >
            {lampPowered ? 'Lâmpada Acesa' : 'Lâmpada Apagada'}
          </button>
        ) : (
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#E8F0EA] text-[#164E3A] border border-[#CDE0D4]">
            Etapa 0{currentStep} / 05
          </span>
        )}
      </div>

      {/* SVG Canvas identical to InteractiveLedBulb (320 x 470) */}
      <div className="relative w-full aspect-[320/460] max-h-[460px] flex items-center justify-center py-1">
        
        {/* Glow ambient background when lamp is ON in step 5 */}
        {isGlowing && (
          <div
            className="absolute top-6 w-52 h-52 rounded-full pointer-events-none transition-opacity duration-700 blur-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 222, 107, 0.55) 0%, rgba(255, 193, 7, 0.2) 50%, transparent 75%)',
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
            <linearGradient id="recLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
              <stop offset="40%" stopColor="#F4F8F3" stopOpacity="0.92" />
              <stop offset="85%" stopColor="#E0EBE0" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#C9D6C9" stopOpacity="0.92" />
            </linearGradient>

            <linearGradient id="recLensGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFDE8" />
              <stop offset="50%" stopColor="#FFECA0" />
              <stop offset="100%" stopColor="#FFD768" />
            </linearGradient>

            {/* Aluminum MCPCB PCB Gradient */}
            <linearGradient id="recPcbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8DFD9" />
              <stop offset="30%" stopColor="#F5F8F5" />
              <stop offset="70%" stopColor="#C2CDC4" />
              <stop offset="100%" stopColor="#9AA99E" />
            </linearGradient>

            {/* SMD Phosphor Yellow */}
            <linearGradient id="recLedChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="50%" stopColor="#FFC107" />
              <stop offset="100%" stopColor="#E69500" />
            </linearGradient>

            {/* Heatsink Body Gradient */}
            <linearGradient id="recHeatsinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECEFEA" />
              <stop offset="35%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#DCE2DA" />
              <stop offset="100%" stopColor="#BAC6B8" />
            </linearGradient>

            {/* Screw Base Metallic Thread Gradient */}
            <linearGradient id="recMetalThreadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9BA3A0" />
              <stop offset="25%" stopColor="#E6EBE7" />
              <stop offset="50%" stopColor="#C5CEC9" />
              <stop offset="75%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#828C88" />
            </linearGradient>

            {/* Brass / Contact Tip Gradient */}
            <linearGradient id="recBrassTipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8E6527" />
              <stop offset="50%" stopColor="#E0AB4C" />
              <stop offset="100%" stopColor="#6E4D1A" />
            </linearGradient>

            <filter id="recLightGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Sparkle filter */}
            <filter id="sparkGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central Assembly Line */}
          <line
            x1="160"
            y1="10"
            x2="160"
            y2="455"
            stroke="#95A89E"
            strokeWidth="1.2"
            strokeDasharray="5,4"
            opacity="0.3"
          />

          {/* ======================================================== */}
          {/* BASE ROSCA E27 (Idêntica à da anatomia da lâmpada)      */}
          {/* ======================================================== */}
          <g id="base-e27" transform="translate(0, 284)">
            {/* Base top collar ring */}
            <rect
              x="134"
              y="0"
              width="52"
              height="8"
              rx="2"
              fill="#BAC4BE"
              stroke="#8A9791"
              strokeWidth="1"
            />

            {/* Helical Threads of E27 Screw */}
            <g>
              <path d="M 134 8 Q 160 14 186 8 L 186 17 Q 160 23 134 17 Z" fill="url(#recMetalThreadGrad)" stroke="#68736E" strokeWidth="0.8" />
              <path d="M 134 17 Q 160 23 186 17 L 186 26 Q 160 32 134 26 Z" fill="url(#recMetalThreadGrad)" stroke="#68736E" strokeWidth="0.8" />
              <path d="M 134 26 Q 160 32 186 26 L 186 35 Q 160 41 134 35 Z" fill="url(#recMetalThreadGrad)" stroke="#68736E" strokeWidth="0.8" />
              <path d="M 136 35 Q 160 41 184 35 L 182 42 Q 160 47 138 42 Z" fill="url(#recMetalThreadGrad)" stroke="#68736E" strokeWidth="0.8" />
            </g>

            {/* Black ceramic dielectric insulator disc */}
            <path d="M 142 42 Q 160 47 178 42 L 174 48 Q 160 52 146 48 Z" fill="#181D1A" stroke="#0A0D0B" strokeWidth="0.8" />

            {/* Brass Center Electrical Contact Foot Tip */}
            <ellipse cx="160" cy="50" rx="9" ry="4" fill="url(#recBrassTipGrad)" stroke="#6A4D1A" strokeWidth="1" />
          </g>

          {/* ======================================================== */}
          {/* DISSIPADOR DE CALOR (Idêntico à anatomia da lâmpada)     */}
          {/* ======================================================== */}
          <g id="dissipador" transform="translate(0, 180)">
            {/* Top opening rim of heatsink */}
            <ellipse
              cx="160"
              cy="12"
              rx="62"
              ry="12"
              fill="#D6DFD7"
              stroke="#A0AEA3"
              strokeWidth="1.5"
            />

            {/* Inner aluminum cup cutaway hole where driver sits */}
            <ellipse cx="160" cy="12" rx="42" ry="8" fill="#5F7267" opacity="0.6" />

            {/* Conical body with thermal dissipation profile */}
            <path
              d="M 98 12 C 98 48, 126 80, 134 92 L 186 92 C 194 80, 222 48, 222 12 Z"
              fill="url(#recHeatsinkGrad)"
              stroke="#8E9E94"
              strokeWidth="1.5"
            />

            {/* Vertical aerodynamic cooling grooves / fins */}
            <path d="M 120 22 C 122 48, 136 76, 140 88" fill="none" stroke="#C2CCC3" strokeWidth="1.5" />
            <path d="M 138 23 C 139 46, 147 74, 150 89" fill="none" stroke="#CAD4CB" strokeWidth="1.5" />
            <path d="M 160 24 L 160 90" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <path d="M 182 23 C 181 46, 173 74, 170 89" fill="none" stroke="#A7B5AB" strokeWidth="1.5" />
            <path d="M 200 22 C 198 48, 184 76, 180 88" fill="none" stroke="#9EAFA3" strokeWidth="1.5" />
          </g>

          {/* ======================================================== */}
          {/* PLACA DE LEDS (Idêntica à anatomia da lâmpada)           */}
          {/* ======================================================== */}
          <g id="placa-led" transform="translate(0, 172)">
            {/* Aluminum substrate disc with perspective bevel */}
            <ellipse
              cx="160"
              cy="20"
              rx="64"
              ry="16"
              fill="url(#recPcbGrad)"
              stroke="#8A9E92"
              strokeWidth="1.5"
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
              { id: 0, x: 120, y: 16, defective: false },
              { id: 1, x: 136, y: 11, defective: false },
              { id: 2, x: 160, y: 9, defective: true }, // The burned LED!
              { id: 3, x: 184, y: 11, defective: false },
              { id: 4, x: 200, y: 16, defective: false },
              { id: 5, x: 195, y: 24, defective: false },
              { id: 6, x: 176, y: 28, defective: false },
              { id: 7, x: 144, y: 28, defective: false },
              { id: 8, x: 125, y: 24, defective: false },
            ].map((chip) => {
              const isBurned = chip.defective;
              return (
                <g key={chip.id}>
                  {/* White chip carrier */}
                  <rect
                    x={chip.x - 4}
                    y={chip.y - 3}
                    width="8"
                    height="6"
                    rx="1"
                    fill="#FFFFFF"
                    stroke="#A0ADA4"
                    strokeWidth="0.5"
                  />

                  {/* Rendering based on recovery stage */}
                  {isBurned && currentStep <= 2 ? (
                    // Steps 1 & 2: Burned LED with characteristic black dot in center
                    <g>
                      <rect
                        x={chip.x - 3}
                        y={chip.y - 2}
                        width="6"
                        height="4"
                        rx="0.5"
                        fill="#B88A2E"
                      />
                      {/* Black burnt carbon center spot */}
                      <circle cx={chip.x} cy={chip.y} r="1.3" fill="#1A1A1A" stroke="#451A03" strokeWidth="0.4" />
                    </g>
                  ) : isBurned && currentStep === 3 ? (
                    // Step 3: LED removed by pliers! Exposed aluminum solder pads
                    <g>
                      <rect
                        x={chip.x - 3}
                        y={chip.y - 2}
                        width="6"
                        height="4"
                        rx="0.5"
                        fill="#A3B2A9"
                      />
                      {/* Desoldered pads */}
                      <line x1={chip.x - 2} y1={chip.y - 1} x2={chip.x - 2} y2={chip.y + 1} stroke="#E2E8F0" strokeWidth="1" />
                      <line x1={chip.x + 2} y1={chip.y - 1} x2={chip.x + 2} y2={chip.y + 1} stroke="#E2E8F0" strokeWidth="1" />
                    </g>
                  ) : isBurned && currentStep === 4 ? (
                    // Step 4: Soldered bridge! Shiny tin-lead / lead-free solder dome
                    <g>
                      <rect
                        x={chip.x - 3}
                        y={chip.y - 2}
                        width="6"
                        height="4"
                        rx="0.5"
                        fill="#88988F"
                      />
                      {/* Metallic solder blob with shiny reflection */}
                      <ellipse cx={chip.x} cy={chip.y} rx="2.8" ry="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.6" />
                      <circle cx={chip.x - 0.7} cy={chip.y - 0.5} r="0.8" fill="#FFFFFF" />
                    </g>
                  ) : (
                    // Step 5 or healthy LEDs
                    <rect
                      x={chip.x - 3}
                      y={chip.y - 2}
                      width="6"
                      height="4"
                      rx="0.5"
                      fill={isGlowing ? '#FFF475' : '#FFB938'}
                      filter={isGlowing ? 'url(#recLightGlow)' : undefined}
                    />
                  )}
                </g>
              );
            })}

            {/* Solder pads / Polarity marks */}
            <text x="146" y="22" fontSize="7" fontWeight="bold" fill="#B33924" fontFamily="monospace">+</text>
            <text x="171" y="22" fontSize="7" fontWeight="bold" fill="#1B3528" fontFamily="monospace">-</text>
          </g>

          {/* ======================================================== */}
          {/* LENTE DIFUSORA (Fechada no teste 5, removida ou levantada nos passos de bancada) */}
          {/* ======================================================== */}
          <g
            id="lente-difusora"
            className="transition-all duration-700 ease-out"
            transform={
              currentStep === 1
                ? 'translate(0, 18)' // Levantada com espátula na junta
                : currentStep >= 2 && currentStep <= 4
                ? 'translate(0, -140)' // Afastada da bancada para trabalho manual nos LEDs
                : 'translate(0, 110)' // Montada perfeitamente no passo 5
            }
            opacity={currentStep >= 2 && currentStep <= 4 ? 0 : 1}
            style={{ pointerEvents: currentStep >= 2 && currentStep <= 4 ? 'none' : 'auto' }}
          >
            {/* Diffuser Dome Shape */}
            <path
              d="M 85 92 C 85 40, 118 16, 160 16 C 202 16, 235 40, 235 92 C 235 97, 233 100, 226 100 L 94 100 C 87 100, 85 97, 85 92 Z"
              fill={isGlowing ? 'url(#recLensGlowGrad)' : 'url(#recLensGrad)'}
              stroke={isGlowing ? '#E69500' : '#A8B7AF'}
              strokeWidth={isGlowing ? '2.5' : '1.5'}
              className="transition-colors duration-300"
            />

            {/* Specular curved light reflection */}
            <path
              d="M 104 78 C 104 46, 126 30, 154 28"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={isGlowing ? '0.85' : '0.7'}
            />

            {/* Bottom snap-fit lip ring */}
            <rect
              x="92"
              y="97"
              width="136"
              height="6"
              rx="3"
              fill="#D2DBD3"
              stroke="#9EB0A5"
              strokeWidth="1"
            />
          </g>

          {/* Glowing radiation rays in Step 5 when illuminated */}
          {isGlowing && (
            <g stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
              <line x1="160" y1="90" x2="160" y2="60" strokeDasharray="4,4" />
              <line x1="105" y1="110" x2="80" y2="88" strokeDasharray="4,4" />
              <line x1="215" y1="110" x2="240" y2="88" strokeDasharray="4,4" />
              <line x1="70" y1="165" x2="42" y2="165" strokeDasharray="4,4" />
              <line x1="250" y1="165" x2="278" y2="165" strokeDasharray="4,4" />
            </g>
          )}

          {/* ======================================================== */}
          {/* ANIMAÇÕES REALISTAS E FERRAMENTAS POR ETAPA              */}
          {/* ======================================================== */}

          {/* -------------------------------------------------------- */}
          {/* ETAPA 01: Utilizando uma espátula realize a abertura da lâmpada */}
          {/* -------------------------------------------------------- */}
          {currentStep === 1 && (
            <g className="animate-fadeIn">
              {/* Espátula plástica técnica inserida na junção lente/carcaça */}
              <g transform="translate(210, 120)">
                {/* Lâmina da espátula entrando na fresta mecânica */}
                <path
                  d="M -30 2 L 0 -4 L 38 -12 L 40 -8 L 4 0 L -30 4 Z"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="1"
                />
                {/* Cabo ergonômico antiestático da espátula */}
                <rect
                  x="36"
                  y="-16"
                  width="54"
                  height="16"
                  rx="4"
                  fill="#0284C7"
                  stroke="#0369A1"
                  strokeWidth="1.2"
                />
                <text x="63" y="-5" fontSize="7.5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">
                  ESPÁTULA
                </text>
                {/* Ranhuras de aderência no cabo */}
                <line x1="50" y1="-13" x2="50" y2="-3" stroke="#38BDF8" strokeWidth="1.2" />
                <line x1="56" y1="-13" x2="56" y2="-3" stroke="#38BDF8" strokeWidth="1.2" />
                <line x1="62" y1="-13" x2="62" y2="-3" stroke="#38BDF8" strokeWidth="1.2" />
              </g>

              {/* Setas mecânicas de desencaixe para cima */}
              <g transform="translate(160, 96)">
                <line x1="0" y1="18" x2="0" y2="-12" stroke="#164E3A" strokeWidth="2.5" strokeDasharray="4,3" />
                <polygon points="-6,-10 6,-10 0,-20" fill="#164E3A" />
              </g>

              {/* Tag explicativa da ferramenta */}
              <g transform="translate(18, 55)">
                <rect x="0" y="0" width="118" height="28" rx="6" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
                <text x="59" y="12" fontSize="7.5" fontWeight="bold" fill="#0369A1" textAnchor="middle" fontFamily="monospace">
                  ABERTURA MECÂNICA
                </text>
                <text x="59" y="22" fontSize="8" fontWeight="bold" fill="#0C4A6E" textAnchor="middle" fontFamily="monospace">
                  ESPÁTULA NA JUNÇÃO
                </text>
              </g>
            </g>
          )}

          {/* -------------------------------------------------------- */}
          {/* ETAPA 02: Com o auxílio de duas pilhas AA (3V), teste os LEDs individualmente até identificar o LED queimado */}
          {/* -------------------------------------------------------- */}
          {currentStep === 2 && (
            <g className="animate-fadeIn">
              {/* Pacote de 2 pilhas AA em suporte (3V) */}
              <g transform="translate(18, 48)">
                {/* Suporte plástico das pilhas */}
                <rect x="0" y="0" width="98" height="52" rx="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                
                {/* Pilha AA #1 (1.5V) */}
                <g transform="translate(8, 7)">
                  <rect x="0" y="0" width="76" height="16" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="0.8" />
                  <rect x="0" y="0" width="22" height="16" rx="2" fill="#1E293B" />
                  <rect x="76" y="4" width="4" height="8" rx="1" fill="#CBD5E1" />
                  <text x="44" y="11" fontSize="7" fontWeight="bold" fill="#FEF3C7" fontFamily="monospace">AA 1.5V</text>
                  <text x="10" y="11" fontSize="8" fontWeight="bold" fill="#F59E0B" fontFamily="monospace">+</text>
                </g>

                {/* Pilha AA #2 (1.5V) */}
                <g transform="translate(8, 28)">
                  <rect x="0" y="0" width="76" height="16" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="0.8" />
                  <rect x="54" y="0" width="22" height="16" rx="2" fill="#1E293B" />
                  <rect x="-4" y="4" width="4" height="8" rx="1" fill="#CBD5E1" />
                  <text x="32" y="11" fontSize="7" fontWeight="bold" fill="#FEF3C7" fontFamily="monospace">AA 1.5V</text>
                  <text x="64" y="11" fontSize="8" fontWeight="bold" fill="#F59E0B" fontFamily="monospace">+</text>
                </g>

                <text x="49" y="62" fontSize="8" fontWeight="bold" fill="#164E3A" textAnchor="middle" fontFamily="monospace">
                  FONTE 3V (2x AA)
                </text>
              </g>

              {/* Cabos flexíveis de teste saindo do suporte */}
              {/* Cabo Positivo Vermelho */}
              <path
                d="M 98 62 C 122 62, 134 110, 153 175"
                fill="none"
                stroke="#DC2626"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Cabo Negativo Preto */}
              <path
                d="M 98 84 C 130 84, 150 120, 167 175"
                fill="none"
                stroke="#1E293B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Ponta de prova vermelha (+) no terminal esquerdo do LED queimado (160, 181) */}
              <g transform="translate(156, 181)">
                {/* Haste de teste vermelha */}
                <line x1="-8" y1="-26" x2="0" y2="0" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                {/* Agulha metálica */}
                <line x1="-1.5" y1="-5" x2="0" y2="0" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="-14" y="-38" width="10" height="16" rx="2" fill="#991B1B" />
                <text x="-9" y="-27" fontSize="7" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">+</text>
              </g>

              {/* Ponta de prova preta (-) no terminal direito do LED queimado (160, 181) */}
              <g transform="translate(164, 181)">
                {/* Haste de teste preta */}
                <line x1="8" y1="-26" x2="0" y2="0" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                {/* Agulha metálica */}
                <line x1="1.5" y1="-5" x2="0" y2="0" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="4" y="-38" width="10" height="16" rx="2" fill="#0F172A" />
                <text x="9" y="-27" fontSize="7" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">-</text>
              </g>

              {/* Indicador de identificação do LED queimado (circuito aberto / não acende com 3V) */}
              <g transform="translate(195, 75)">
                <rect x="0" y="0" width="115" height="38" rx="6" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.2" />
                <text x="57" y="13" fontSize="7.5" fontWeight="bold" fill="#991B1B" textAnchor="middle" fontFamily="monospace">
                  TESTE INDIVIDUAL 3V
                </text>
                <text x="57" y="24" fontSize="8" fontWeight="bold" fill="#B91C1C" textAnchor="middle" fontFamily="monospace">
                  NÃO ACENDEU (ABERTO)
                </text>
                <text x="57" y="33" fontSize="7" fontWeight="bold" fill="#7F1D1D" textAnchor="middle" fontFamily="monospace">
                  LED QUEIMADO ENCONTRADO
                </text>
              </g>

              {/* Alvo focal sobre o LED queimado */}
              <circle cx="160" cy="181" r="9" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3,2" className="animate-pulse" />
            </g>
          )}

          {/* -------------------------------------------------------- */}
          {/* ETAPA 03: Retire o LED queimado com um alicate */}
          {/* -------------------------------------------------------- */}
          {currentStep === 3 && (
            <g className="animate-fadeIn">
              {/* Alicate de corte diagonal / bico na posição exata sobre o LED queimado */}
              <g transform="translate(160, 181)">
                {/* Mandíbula do alicate prensando e destacando o chip LED */}
                {/* Lado esquerdo */}
                <g transform="translate(-8, -12)">
                  <path d="M -22 -44 L -12 -18 L 6 10 L 4 12 L -14 -16 L -26 -42 Z" fill="#475569" stroke="#1E293B" strokeWidth="1" />
                  {/* Cabo isolado vermelho */}
                  <rect x="-34" y="-62" width="12" height="26" rx="4" fill="#DC2626" stroke="#991B1B" strokeWidth="1" transform="rotate(12)" />
                </g>
                {/* Lado direito */}
                <g transform="translate(8, -12)">
                  <path d="M 22 -44 L 12 -18 L -6 10 L -4 12 L 14 -16 L 26 -42 Z" fill="#64748B" stroke="#1E293B" strokeWidth="1" />
                  {/* Cabo isolado vermelho */}
                  <rect x="22" y="-62" width="12" height="26" rx="4" fill="#DC2626" stroke="#991B1B" strokeWidth="1" transform="rotate(-12)" />
                </g>

                {/* Eixo de articulação do alicate */}
                <circle cx="0" cy="-20" r="4.5" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
                <circle cx="0" cy="-20" r="1.5" fill="#0F172A" />

                {/* Pequeno estilhaço mecânico / separação do encapsulamento */}
                <g transform="translate(0, 12)">
                  <polygon points="-4,-2 4,-2 2,3 -2,3" fill="#B88A2E" stroke="#78350F" strokeWidth="0.5" />
                  <line x1="-7" y1="-4" x2="-11" y2="-8" stroke="#DC2626" strokeWidth="1" strokeDasharray="1,1" />
                  <line x1="7" y1="-4" x2="11" y2="-8" stroke="#DC2626" strokeWidth="1" strokeDasharray="1,1" />
                </g>
              </g>

              {/* Tag explicativa da ferramenta */}
              <g transform="translate(195, 60)">
                <rect x="0" y="0" width="115" height="34" rx="6" fill="#FFF7ED" stroke="#EA580C" strokeWidth="1.2" />
                <text x="57" y="13" fontSize="7.5" fontWeight="bold" fill="#C2410C" textAnchor="middle" fontFamily="monospace">
                  REMOÇÃO MECÂNICA
                </text>
                <text x="57" y="24" fontSize="8" fontWeight="bold" fill="#9A3412" textAnchor="middle" fontFamily="monospace">
                  ALICATE DE CORTE
                </text>
              </g>
            </g>
          )}

          {/* -------------------------------------------------------- */}
          {/* ETAPA 04: Com o ferro de solda e estanho, solde o local que o LED foi retirado */}
          {/* -------------------------------------------------------- */}
          {currentStep === 4 && (
            <g className="animate-fadeIn">
              {/* Ferro de solda com ponta cônica e fio de estanho convergindo para o ponto */}
              {/* Ferro de Solda vindo da direita */}
              <g transform="translate(160, 181)">
                {/* Haste metálica aquecida */}
                <g transform="rotate(-35)">
                  {/* Ponta de cobre/níquel aquecida */}
                  <polygon points="0,0 4,-14 -4,-14" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
                  {/* Tubo de aço do aquecedor */}
                  <rect x="-5" y="-55" width="10" height="41" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
                  {/* Flange protetora */}
                  <ellipse cx="0" cy="-55" rx="9" ry="3" fill="#1E293B" />
                  {/* Empunhadura de borracha */}
                  <rect x="-8" y="-95" width="16" height="40" rx="3" fill="#0284C7" stroke="#0369A1" strokeWidth="1" />
                  {/* Ranhuras da empunhadura */}
                  <line x1="-8" y1="-85" x2="8" y2="-85" stroke="#38BDF8" strokeWidth="1" />
                  <line x1="-8" y1="-75" x2="8" y2="-75" stroke="#38BDF8" strokeWidth="1" />
                </g>

                {/* Rolo de Fio de Estanho vindo da esquerda */}
                <g transform="translate(-30, -32)">
                  {/* Fio de estanho prateado fino em direção à solda */}
                  <path d="M -10 -15 Q 10 10 30 32" fill="none" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="-35" y="-35" width="28" height="24" rx="4" fill="#059669" stroke="#047857" strokeWidth="1" />
                  <circle cx="-21" cy="-23" r="6" fill="#F1F5F9" />
                  <text x="-21" y="-21" fontSize="6" fontWeight="bold" fill="#047857" textAnchor="middle" fontFamily="monospace">Sn</text>
                  <text x="-21" y="-8" fontSize="6.5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">ESTANHO</text>
                </g>

                {/* Brilho e calor da solda líquida fundindo sobre a ilha */}
                <circle cx="0" cy="0" r="4" fill="#F59E0B" opacity="0.6" className="animate-ping" />
                <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" filter="url(#sparkGlow)" />

                {/* Pequenas fumaças finas de fluxo de solda */}
                <path d="M 0 -3 Q -4 -12 -2 -20" fill="none" stroke="#E2E8F0" strokeWidth="1" opacity="0.7" strokeDasharray="2,2" />
                <path d="M 2 -4 Q 6 -14 3 -24" fill="none" stroke="#E2E8F0" strokeWidth="1" opacity="0.7" strokeDasharray="2,2" />
              </g>

              {/* Tag explicativa da ferramenta */}
              <g transform="translate(18, 65)">
                <rect x="0" y="0" width="126" height="34" rx="6" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.2" />
                <text x="63" y="13" fontSize="7.5" fontWeight="bold" fill="#15803D" textAnchor="middle" fontFamily="monospace">
                  FECHAMENTO DO CIRCUITO
                </text>
                <text x="63" y="24" fontSize="8" fontWeight="bold" fill="#166534" textAnchor="middle" fontFamily="monospace">
                  PONTE DE SOLDA (JUMPER)
                </text>
              </g>
            </g>
          )}

          {/* -------------------------------------------------------- */}
          {/* ETAPA 05: A lâmpada é testada antes de voltar a ter uso */}
          {/* -------------------------------------------------------- */}
          {currentStep === 5 && (
            <g className="animate-fadeIn">
              {/* Soquete de teste na bancada conectado à base E27 */}
              <g transform="translate(160, 342)">
                <path d="M -24 0 L 24 0 L 28 32 L -28 32 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="-20" y="32" width="40" height="12" rx="2" fill="#0F172A" />
                {/* Cabos de alimentação da rede */}
                <path d="M -10 44 Q -16 64 -30 72" fill="none" stroke="#DC2626" strokeWidth="2.5" />
                <path d="M 10 44 Q 16 64 30 72" fill="none" stroke="#0284C7" strokeWidth="2.5" />
                <text x="0" y="20" fontSize="7" fontWeight="bold" fill="#38BDF8" textAnchor="middle" fontFamily="monospace">
                  SOQUETE E27
                </text>
              </g>

              {/* Tag de teste bem-sucedido */}
              <g transform="translate(18, 55)">
                <rect
                  x="0"
                  y="0"
                  width="128"
                  height="34"
                  rx="6"
                  fill={lampPowered ? '#FEFCE8' : '#F4F4F5'}
                  stroke={lampPowered ? '#CA8A04' : '#A1A1AA'}
                  strokeWidth="1.2"
                />
                <text x="64" y="13" fontSize="7.5" fontWeight="bold" fill={lampPowered ? '#854D0E' : '#52525B'} textAnchor="middle" fontFamily="monospace">
                  ENSAIO DE FUNCIONAMENTO
                </text>
                <text x="64" y="24" fontSize="8" fontWeight="bold" fill={lampPowered ? '#713F12' : '#27272A'} textAnchor="middle" fontFamily="monospace">
                  {lampPowered ? 'LÂMPADA REACENDIDA' : 'EM ESPERA DE TESTE'}
                </text>
              </g>
            </g>
          )}

        </svg>
      </div>

      {/* Bench status feedback label */}
      <div className="w-full mt-3 p-3 rounded-2xl bg-[#F4F8F4] border border-[#D0DFD5] text-center">
        <span className="text-xs font-mono font-bold text-[#0D241C] block leading-snug">
          {currentStep === 1 && 'Etapa 01: Utilizando uma espátula realize a abertura da lâmpada'}
          {currentStep === 2 && 'Etapa 02: Com o auxílio de duas pilhas AA (3V), teste os LEDs individualmente até identificar o LED queimado'}
          {currentStep === 3 && 'Etapa 03: Retire o LED queimado com um alicate'}
          {currentStep === 4 && 'Etapa 04: Com o ferro de solda e estanho, solde o local que o LED foi retirado'}
          {currentStep === 5 && (lampPowered ? 'Etapa 05: A lâmpada é testada antes de voltar a ter uso. Só então segue para reutilização.' : 'Etapa 05: Clique no botão acima para acender a lâmpada')}
        </span>
        <span className="text-[11px] font-mono text-[#4A6658] mt-1 block">
          {currentStep === 5 ? 'A lâmpada é testada antes de voltar a ter uso. Só então segue para reutilização.' : 'Procedimento prático executado na bancada acadêmica'}
        </span>
      </div>

      {/* Quick jump navigation steps */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSelectStep(s)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              currentStep === s 
                ? 'w-7 bg-[#164E3A]' 
                : 'w-2.5 bg-[#CCD8D0] hover:bg-[#A3B8AB]'
            }`}
            title={`Ir para etapa 0${s}`}
          />
        ))}
      </div>

    </div>
  );
};
