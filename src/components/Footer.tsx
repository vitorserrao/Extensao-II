import React from 'react';
import { IfscLogo } from './IfscLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#124B1E] text-white py-12 border-t border-[#0E3D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1E6B2C]">
          
          {/* Assinatura Oficial IFSC (Modo Negativo) */}
          <div className="flex items-center gap-4">
            <IfscLogo theme="negative" size="md" variant="horizontal" campus="Câmpus Florianópolis" />
            
            <div className="h-10 w-px bg-[#2F9E41] hidden sm:block" />
            
            <div className="hidden sm:block">
              <span className="text-xs font-bold tracking-wide uppercase text-white block">
                PROJETO ReLED
              </span>
              <span className="text-[11px] font-sans text-[#D8EADB]">
                Recuperação de Lâmpadas LED · Projeto de Extensão
              </span>
            </div>
          </div>

          {/* Créditos e Contato */}
          <div className="space-y-1.5 text-xs text-[#D8EADB]">
            <p className="font-semibold text-white">
              Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina
            </p>
            <p className="text-[11px] text-[#B8D7BC]">
              CST em Sistemas de Energia · Departamento Acadêmico de Eletrotécnica
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://www.ifsc.edu.br"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[#7CE08D] hover:text-white underline underline-offset-2 transition-colors font-medium flex items-center gap-1.5"
              >
                <span>Portal IFSC: www.ifsc.edu.br</span>
              </a>
              <span className="text-[#3A7545]">·</span>
              <a
                href="mailto:contato@ifsc.edu.br"
                className="font-mono text-[#7CE08D] hover:text-white underline underline-offset-2 transition-colors font-medium flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@ifsc.edu.br
              </a>
            </div>
          </div>

          {/* Badge Institucional */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#0E3D18] border border-[#2F9E41] text-[11px] font-mono tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CD191E]" />
              <span>IFSC OFICIAL</span>
            </div>
            <a
              href="https://www.ifsc.edu.br/identidade-visual"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-mono text-[#B8D7BC] hover:text-white transition-colors underline"
            >
              Manual da Marca IFSC
            </a>
          </div>

        </div>

        {/* Links Rápidos com Tipografia Institucional */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B8D7BC] font-sans">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium">
            <a href="#projeto" className="hover:text-white transition-colors">1. O Projeto</a>
            <a href="#o-problema" className="hover:text-white transition-colors">2. O Problema</a>
            <a href="#entenda-a-lampada" className="hover:text-white transition-colors">3. Entenda a lâmpada</a>
            <a href="#como-recuperamos" className="hover:text-white transition-colors">4. Como recuperamos</a>
            <a href="#resultados" className="hover:text-white transition-colors">5. Resultados</a>
            <a href="#extensao" className="hover:text-white transition-colors">6. Extensão</a>
            <a href="#participe" className="hover:text-white transition-colors">7. Participe</a>
          </div>

          <p className="font-mono text-[10px] text-[#A2C9A7]">
            Projeto ReLED: Recuperação de Lâmpadas LED · IFSC Florianópolis / SC
          </p>
        </div>

      </div>
    </footer>
  );
};
