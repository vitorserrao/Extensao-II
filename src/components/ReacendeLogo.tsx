import React from 'react';

interface ReacendeLogoProps {
  variant?: 'dark' | 'light' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const ReacendeLogo: React.FC<ReacendeLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showWordmark = true,
}) => {
  // Colors based on variant:
  // dark: on #0D2B24 -> outline white/light, dot #FFB938, text white
  // light: on #EDF0E8 -> outline #0E1A16, dot #FFB938, text #0E1A16
  // amber: on #FFB938 -> outline #0E1A16, dot #0E1A16, text #0E1A16

  const iconColor = variant === 'dark' ? '#EDF0E8' : '#0E1A16';
  const dotColor = variant === 'amber' ? '#0E1A16' : '#FFB938';
  const textColor = variant === 'dark' ? '#EDF0E8' : '#0E1A16';

  const iconSizes = {
    sm: { w: 28, h: 32 },
    md: { w: 34, h: 38 },
    lg: { w: 44, h: 48 },
  };

  const textSizes = {
    sm: 'text-base tracking-[0.14em]',
    md: 'text-xl tracking-[0.16em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.18em]',
  };

  const { w, h } = iconSizes[size];

  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* Símbolo oficial REACENDE */}
      <svg
        width={w}
        height={h}
        viewBox="0 0 64 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="Símbolo REACENDE"
      >
        {/* Arco da Lâmpada (lado esquerdo até a rosca) */}
        <path
          d="M 23.5 11 A 16.5 16.5 0 0 0 23.5 38 L 22.5 43"
          stroke={iconColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Arco da Lâmpada (da rosca subindo até a abertura no topo direito) */}
        <path
          d="M 41.5 43 L 40.5 38 A 16.5 16.5 0 0 0 42 12.5"
          stroke={iconColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Seta no topo-esquerdo apontando no sentido horário (renovação/recomeço) */}
        <polygon
          points="31.5,9.5 22.5,4 24.5,15"
          fill={iconColor}
        />

        {/* Rosca do soquete E27: Barra horizontal superior */}
        <rect
          x="22"
          y="44"
          width="20"
          height="4"
          rx="2"
          fill={iconColor}
        />

        {/* Rosca do soquete E27: Barra horizontal intermediária */}
        <rect
          x="25.5"
          y="50.5"
          width="13"
          height="3.5"
          rx="1.75"
          fill={iconColor}
        />

        {/* Terminal inferior da base */}
        <circle
          cx="32"
          cy="57.5"
          r="2.5"
          fill={iconColor}
        />

        {/* Ponto âmbar central */}
        <circle
          cx="32"
          cy="26.5"
          r="6.2"
          fill={dotColor}
          className="lamp-dot-pulse"
        />
      </svg>

      {showWordmark && (
        <span
          className={`font-display font-extrabold uppercase ${textColor} ${textSizes[size]} leading-none`}
        >
          REACENDE
        </span>
      )}
    </div>
  );
};
