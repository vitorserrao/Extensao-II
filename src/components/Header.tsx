import React, { useState } from 'react';

interface HeaderProps {
  onOpenDonate?: () => void;
  onOpenGuide?: () => void;
  onOpenImpact?: () => void;
  onOpenTutorial?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTutorial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all shadow-xs">
      
      {/* 01. Faixa Institucional */}
      <div className="bg-[#0D241C] text-[#EBF7ED] border-b border-[#0D241C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider uppercase">
          <div className="flex items-center gap-2 truncate font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#FFB938] animate-pulse" />
            <span>INSTITUTO FEDERAL DE SANTA CATARINA</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#6B7F74] truncate">
            <span>CÂMPUS FLORIANÓPOLIS · CST EM SISTEMAS DE ENERGIA</span>
          </div>
        </div>
      </div>

      {/* 02. Barra de Navegação Principal */}
      <div className="bg-white border-b border-[#E0E6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo Principal ReLED com lâmpada âmbar pulsante */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Página inicial do Projeto ReLED: Recuperação de Lâmpadas LED">
            <div className="relative flex items-center justify-center">
              <svg 
                width="30" 
                height="34" 
                viewBox="0 0 64 68" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              >
                <path d="M 23.5 11 A 16.5 16.5 0 0 0 23.5 38 L 22.5 43" stroke="#0D241C" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 41.5 43 L 40.5 38 A 16.5 16.5 0 0 0 42 12.5" stroke="#0D241C" strokeWidth="4.5" strokeLinecap="round" />
                <polygon points="31.5,9.5 22.5,4 24.5,15" fill="#0D241C" />
                <rect x="22" y="44" width="20" height="4" rx="2" fill="#0D241C" />
                <rect x="25.5" y="50.5" width="13" height="3.5" rx="1.75" fill="#0D241C" />
                <circle cx="32" cy="57.5" r="2.5" fill="#0D241C" />
                <circle cx="32" cy="26.5" r="6" fill="#FFB938" className="lamp-dot-pulse" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="font-display font-black text-xl tracking-[0.12em] text-[#0D241C] block">
                ReLED
              </span>
            </div>
          </a>

          {/* Links de Navegação */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs xl:text-sm font-semibold text-[#0D241C]">
            <a 
              href="#projeto" 
              className="hover:text-[#2F9E41] transition-colors"
            >
              O projeto
            </a>
            <a 
              href="#eficiencia-energetica" 
              className="hover:text-[#2F9E41] transition-colors"
            >
              Eficiência
            </a>
            <a 
              href="#entenda-a-lampada" 
              className="hover:text-[#2F9E41] transition-colors"
            >
              Entenda a lâmpada
            </a>
            <a 
              href="#como-recuperamos" 
              className="hover:text-[#2F9E41] transition-colors"
            >
              Como recuperamos
            </a>
            <a 
              href="#resultados" 
              className="hover:text-[#2F9E41] transition-colors"
            >
              Resultados
            </a>
            <a 
              href="#extensao" 
              className="hover:text-[#2F9E41] transition-colors"
            >
              Extensão
            </a>
            <button
              type="button"
              onClick={onOpenTutorial}
              className="text-xs font-bold px-3.5 py-2 rounded-xl bg-[#FFB938] hover:bg-[#F5A623] text-[#161204] transition-all shadow-2xs hover:shadow-xs cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Laboratório virtual</span>
            </button>
            <a 
              href="#participe" 
              className="font-bold px-4 py-2 rounded-xl bg-[#0D241C] hover:bg-[#0D241C] text-white transition-all shadow-xs"
            >
              Participe
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0D241C] hover:bg-[#F4F8F4] rounded-lg transition-colors"
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
        <div className="lg:hidden px-4 pt-2 pb-5 bg-white border-b border-[#D5E2D6] space-y-2 text-sm font-semibold text-[#0D241C]">
          <a 
            href="#projeto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#F4F8F4] hover:text-[#2F9E41]"
          >
            O projeto
          </a>
          <a 
            href="#eficiencia-energetica" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#F4F8F4] hover:text-[#2F9E41]"
          >
            Eficiência energética
          </a>
          <a 
            href="#entenda-a-lampada" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#F4F8F4] hover:text-[#2F9E41]"
          >
            Entenda a lâmpada
          </a>
          <a 
            href="#como-recuperamos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#F4F8F4] hover:text-[#2F9E41]"
          >
            Como recuperamos
          </a>
          <a 
            href="#resultados" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#F4F8F4] hover:text-[#2F9E41]"
          >
            Resultados
          </a>
          <a 
            href="#extensao" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-[#F4F8F4] hover:text-[#2F9E41]"
          >
            Extensão
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTutorial?.();
            }}
            className="w-full text-left py-2.5 px-3 rounded-xl bg-[#FFB938] text-[#161204] font-bold text-xs uppercase tracking-wider hover:bg-[#F5A623] flex items-center justify-between shadow-2xs"
          >
            <span>Laboratório virtual</span>
            <span>→</span>
          </button>
          <a 
            href="#participe" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg bg-[#0D241C] text-white font-bold text-center mt-2 shadow-xs"
          >
            Participe
          </a>
        </div>
      )}

    </header>
  );
};
