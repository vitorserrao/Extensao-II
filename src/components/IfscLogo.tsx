import React from 'react';

interface IfscLogoProps {
  variant?: 'horizontal' | 'vertical' | 'symbol-only';
  theme?: 'color' | 'negative' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  campus?: string;
  className?: string;
}

/**
 * Símbolo e Marca Oficial do IFSC (Instituto Federal de Santa Catarina)
 * Construção técnica exata conforme Manual da Marca IFSC (2ª edição - 2024):
 * - Módulo X = 20
 * - Espaçamento entre módulos = 0.2X = 4
 * - Raio de arredondamento dos quadrados = 0.1X = 2
 * - Diâmetro do círculo = 1.1X = 22 (raio = 11)
 * - 9 quadrados verdes (Pantone 362 C / #2F9E41)
 * - 1 círculo vermelho (Pantone 187 C / #CD191E)
 * - Tipografia: Open Sans (INSTITUTO FEDERAL em Bold, Santa Catarina em Regular)
 */
export const IfscLogo: React.FC<IfscLogoProps> = ({
  variant = 'horizontal',
  theme = 'color',
  size = 'md',
  campus = 'Câmpus Florianópolis',
  className = '',
}) => {
  const isNegative = theme === 'negative';
  const isMonochrome = theme === 'monochrome';

  const greenFill = isNegative ? '#FFFFFF' : isMonochrome ? '#1A1A1A' : '#2F9E41';
  const redFill = isNegative ? '#FFFFFF' : isMonochrome ? '#1A1A1A' : '#CD191E';
  const textColorPrimary = isNegative ? '#FFFFFF' : '#1A1A1A';
  const textColorSecondary = isNegative ? '#E2E8E2' : '#2F9E41';
  const textColorCampus = isNegative ? '#CBD6CD' : '#4A554E';

  // Dimension scaling
  const scale = size === 'sm' ? 0.32 : size === 'lg' ? 0.58 : 0.44;
  const symbolW = 68 * scale;
  const symbolH = 92 * scale;

  const renderSymbol = () => (
    <svg
      width={symbolW}
      height={symbolH}
      viewBox="0 0 68 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-label="Símbolo oficial do Instituto Federal"
    >
      {/* Coluna 0 (i): Círculo Vermelho no topo (Row 0) + 3 Quadrados Verdes (Rows 1, 2, 3) */}
      <circle cx="10" cy="10" r="11" fill={redFill} />
      <rect x="0" y="24" width="20" height="20" rx="2" fill={greenFill} />
      <rect x="0" y="48" width="20" height="20" rx="2" fill={greenFill} />
      <rect x="0" y="72" width="20" height="20" rx="2" fill={greenFill} />

      {/* Coluna 1 (Haste do F): 4 Quadrados Verdes (Rows 0, 1, 2, 3) */}
      <rect x="24" y="0" width="20" height="20" rx="2" fill={greenFill} />
      <rect x="24" y="24" width="20" height="20" rx="2" fill={greenFill} />
      <rect x="24" y="48" width="20" height="20" rx="2" fill={greenFill} />
      <rect x="24" y="72" width="20" height="20" rx="2" fill={greenFill} />

      {/* Coluna 2 (Braços do F): 2 Quadrados Verdes (Row 0 e Row 2) */}
      <rect x="48" y="0" width="20" height="20" rx="2" fill={greenFill} />
      <rect x="48" y="48" width="20" height="20" rx="2" fill={greenFill} />
    </svg>
  );

  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderSymbol()}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center gap-2 select-none ${className}`}>
        {renderSymbol()}
        <div className="font-sans leading-tight pt-1">
          <span 
            className="block font-bold text-xs sm:text-sm tracking-wider uppercase"
            style={{ color: textColorPrimary }}
          >
            INSTITUTO FEDERAL
          </span>
          <span 
            className="block text-xs sm:text-sm font-normal"
            style={{ color: textColorSecondary }}
          >
            Santa Catarina
          </span>
          {campus && (
            <span 
              className="block text-[10px] sm:text-[11px] font-normal pt-0.5"
              style={{ color: textColorCampus }}
            >
              {campus}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Horizontal (versão mais usual e oficial para web)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {renderSymbol()}
      <div className="font-sans leading-none flex flex-col justify-center">
        <span 
          className="font-bold text-xs sm:text-sm tracking-wide uppercase block"
          style={{ color: textColorPrimary }}
        >
          INSTITUTO FEDERAL
        </span>
        <span 
          className="text-xs sm:text-sm font-normal block pt-1"
          style={{ color: textColorSecondary }}
        >
          Santa Catarina
        </span>
        {campus && (
          <span 
            className="text-[10px] sm:text-[11px] font-normal block pt-0.5"
            style={{ color: textColorCampus }}
          >
            {campus}
          </span>
        )}
      </div>
    </div>
  );
};
