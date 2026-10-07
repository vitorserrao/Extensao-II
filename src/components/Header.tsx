import React, { useState } from 'react';

interface HeaderProps {
  onOpenDonate?: () => void;
  onOpenGuide?: () => void;
  onOpenImpact?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all shadow-xs">
      
      {/* 01. Institutional Top Strip (Dark Green) */}
      <div className="bg-[#08211A] text-[#A6C5B7] border-b border-[#12362C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase">
          <div className="flex items-center gap-2 truncate">
            <span>IFSC - INSTITUTO FEDERAL DE SANTA CATARINA</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#95B7A8] truncate">
            <span>CURSO SUPERIOR DE TECNOLOGIA EM SISTEMAS DE ENERGIA</span>
          </div>
        </div>
      </div>

      {/* 02. Main Navigation Bar (Pale Sage / Ivory #EDF1E8) */}
      <div className="bg-[#EDF1E8] border-b border-[#DFE5D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo with the Lamp whose yellow dot pulses/lights up */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Página inicial">
            <div className="relative flex items-center justify-center">
              
              {/* Pulsing ambient glow circle behind the lamp's yellow dot */}
              <div 
                className="absolute w-8 h-8 rounded-full bg-amber-400/40 blur-md pointer-events-none animate-pulse"
                aria-hidden="true"
              />

              {/* Símbolo oficial da Lâmpada com Seta Circular e Ponto Amarelo Central (gemini-svg.svg) */}
              <svg
                width="36"
                height="40"
                viewBox="0 0 64 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform group-hover:scale-105"
                aria-label="Símbolo de Lâmpada com ciclo de renovação"
              >
                {/* Arco da Lâmpada (lado esquerdo até a rosca) */}
                <path
                  d="M 23.5 11 A 16.5 16.5 0 0 0 23.5 38 L 22.5 43"
                  stroke="#0E231C"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Arco da Lâmpada (da rosca subindo até a abertura no topo direito) */}
                <path
                  d="M 41.5 43 L 40.5 38 A 16.5 16.5 0 0 0 42 12.5"
                  stroke="#0E231C"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Seta no topo-esquerdo apontando no sentido horário (renovação/recomeço) */}
                <polygon
                  points="31.5,9.5 22.5,4 24.5,15"
                  fill="#0E231C"
                />

                {/* Rosca do soquete E27: Barra horizontal superior */}
                <rect
                  x="22"
                  y="44"
                  width="20"
                  height="4"
                  rx="2"
                  fill="#0E231C"
                />

                {/* Rosca do soquete E27: Barra horizontal intermediária */}
                <rect
                  x="25.5"
                  y="50.5"
                  width="13"
                  height="3.5"
                  rx="1.75"
                  fill="#0E231C"
                />

                {/* Terminal inferior da base */}
                <circle
                  cx="32"
                  cy="57.5"
                  r="2.5"
                  fill="#0E231C"
                />

                {/* Halo de luz sutil ao redor do ponto amarelo */}
                <circle
                  cx="32"
                  cy="26.5"
                  r="10"
                  fill="#FFB938"
                  opacity="0.25"
                  className="animate-ping"
                  style={{ animationDuration: '2.5s' }}
                />

                {/* PONTO AMARELO CENTRAL QUE FICA ACENDENDO E PULSANDO */}
                <circle
                  cx="32"
                  cy="26.5"
                  r="6.2"
                  fill="#FFB938"
                  className="lamp-dot-pulse"
                />
              </svg>
            </div>
          </a>

          {/* Desktop Navigation Links matching requested structure */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs xl:text-sm font-medium text-[#112A22]">
            <a 
              href="#projeto" 
              className="hover:text-emerald-800 transition-colors"
            >
              O projeto
            </a>
            <a 
              href="#o-problema" 
              className="hover:text-emerald-800 transition-colors"
            >
              O problema
            </a>
            <a 
              href="#entenda-a-lampada" 
              className="hover:text-emerald-800 transition-colors"
            >
              Entenda a lâmpada
            </a>
            <a 
              href="#como-recuperamos" 
              className="hover:text-emerald-800 transition-colors"
            >
              Como recuperamos
            </a>
            <a 
              href="#resultados" 
              className="hover:text-emerald-800 transition-colors"
            >
              Resultados
            </a>
            <a 
              href="#extensao" 
              className="hover:text-emerald-800 transition-colors"
            >
              Extensão
            </a>
            <a 
              href="#participe" 
              className="hover:text-emerald-800 font-semibold px-3 py-1.5 rounded-lg bg-emerald-900/10 text-[#0D241C] transition-colors"
            >
              Participe
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0E231C] hover:bg-[#DEE6D9] rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 bg-[#EDF1E8] border-b border-[#DFE5D9] space-y-2 text-sm font-medium text-[#112A22]">
          <a 
            href="#projeto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#DEE6D9]"
          >
            O projeto
          </a>
          <a 
            href="#o-problema" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#DEE6D9]"
          >
            O problema
          </a>
          <a 
            href="#entenda-a-lampada" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#DEE6D9]"
          >
            Entenda a lâmpada
          </a>
          <a 
            href="#como-recuperamos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#DEE6D9]"
          >
            Como recuperamos
          </a>
          <a 
            href="#resultados" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#DEE6D9]"
          >
            Resultados
          </a>
          <a 
            href="#extensao" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#DEE6D9]"
          >
            Extensão
          </a>
          <a 
            href="#participe" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg bg-emerald-900/10 text-[#0D241C] font-semibold"
          >
            Participe
          </a>
        </div>
      )}

    </header>
  );
};
