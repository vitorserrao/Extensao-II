import React from 'react';
import { ReacendeLogo } from './ReacendeLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08211A] text-white py-12 border-t border-[#12362C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#143B2F]">
          
          {/* Símbolo do projeto (sem o texto REACENDE) */}
          <div className="flex items-center gap-4">
            <ReacendeLogo variant="dark" size="md" showWordmark={false} />
            <div className="border-l border-[#1F4D3E] pl-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                IFSC
              </span>
              <span className="text-[11px] font-mono text-[#89A89A]">
                Campus Florianópolis
              </span>
            </div>
          </div>

          {/* Credits & Email */}
          <div className="space-y-1.5 text-xs text-[#A6C5B7]">
            <p className="font-semibold text-white">
              Projeto de Extensão II — Recuperação de Lâmpadas LED
            </p>
            <p>
              IFSC · Instituto Federal de Santa Catarina · Curso Superior de Tecnologia em Sistemas de Energia
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-[#739485] font-mono">Contato:</span>
              <a
                href="mailto:contato@ifsc.br"
                className="font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors font-medium flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@ifsc.br
              </a>
            </div>
          </div>

          {/* Institutional Badge */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#051712] border border-[#174637] text-[11px] font-mono tracking-wider text-[#A6C5B7] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>IFSC OFICIAL</span>
            </div>
            <a
              href="mailto:contato@ifsc.br"
              className="text-[11px] font-mono text-[#89A89A] hover:text-emerald-400 transition-colors"
            >
              contato@ifsc.br
            </a>
          </div>

        </div>

        {/* Quick Nav Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#789B8D] font-mono">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#projeto" className="hover:text-white transition-colors">1. O Projeto</a>
            <a href="#por-que-recuperar" className="hover:text-white transition-colors">2. Por que recuperar</a>
            <a href="#conheca-a-lampada" className="hover:text-white transition-colors">4. Conheça a lâmpada</a>
            <a href="#diagnostico" className="hover:text-white transition-colors">5. Diagnóstico</a>
            <a href="#como-recuperamos" className="hover:text-white transition-colors">6. Como recuperamos</a>
            <a href="#resultados" className="hover:text-white transition-colors">7. Resultados</a>
            <a href="#participe" className="hover:text-white transition-colors">8. Participe</a>
          </div>

          <p>
            Uma segunda vida para o que ainda pode iluminar.
          </p>
        </div>

      </div>
    </footer>
  );
};
