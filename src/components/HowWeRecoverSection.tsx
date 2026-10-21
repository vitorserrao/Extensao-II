import React from 'react';
import { ArrowRight, MousePointerClick, Wrench, Cable, ShieldCheck } from 'lucide-react';
import type { TutorialTab } from './TutorialPage';

interface HowWeRecoverSectionProps {
  onOpenTutorial?: (tab?: TutorialTab) => void;
  onOpenGuideModal?: () => void;
}

const topicos: { tab: TutorialTab; icon: React.ElementType; title: string; desc: string }[] = [
  {
    tab: 'simulador',
    icon: MousePointerClick,
    title: 'Bancada passo a passo',
    desc: 'As 5 etapas do reparo: abertura, diagnóstico, remoção, jumper e teste.',
  },
  {
    tab: 'ferramentas',
    icon: Wrench,
    title: 'Ferramentas',
    desc: 'O que é preciso ter na bancada antes de começar.',
  },
  {
    tab: 'circuito',
    icon: Cable,
    title: 'Como funciona o jumper',
    desc: 'Por que fechar o circuito de um LED queimado devolve a luz à lâmpada.',
  },
  {
    tab: 'seguranca',
    icon: ShieldCheck,
    title: 'Segurança elétrica',
    desc: 'Cuidados da NR-10: rede desligada, descarga de capacitores, lâmpada série e solda.',
  },
];

export const HowWeRecoverSection: React.FC<HowWeRecoverSectionProps> = ({ onOpenTutorial }) => {
  const abrir = (tab?: TutorialTab) => onOpenTutorial?.(tab);

  return (
    <section id="como-recuperamos" className="py-16 sm:py-24 bg-dark-grid text-white border-b border-[#143B2F] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Texto + chamada principal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#FFB938] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB938] shadow-[0_0_8px_rgba(255,185,56,0.9)] animate-pulse shrink-0" />
              <span>5 — COMO RECUPERAMOS</span>
            </div>

            <h2 className="title-2l text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight" style={{ '--fit': '16.58cqi' } as React.CSSProperties}>
              <span className="title-line">Da bancada</span>
              <span className="title-line">à nova luz.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A8CCBC] leading-relaxed">
              A recuperação acontece na bancada, um componente de cada vez. Montamos um laboratório virtual aberto para quem quiser entender o processo ou aprender a fazer.
            </p>

            <div className="space-y-3 pt-1">
              <button
                type="button"
                onClick={() => abrir('seguranca')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-sans font-bold text-[#161204] bg-[#FFB938] hover:bg-[#F5A623] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Entrar no laboratório virtual</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
              <p className="text-xs text-[#7FA897]">Acesso livre para estudantes e comunidade.</p>
            </div>
          </div>

          {/* O que tem no tutorial: cada card abre direto no tópico */}
          <div className="lg:col-span-7">
            <span className="block mb-4 text-[10px] font-mono uppercase tracking-widest font-bold text-[#86E49E]">
              O que você encontra no laboratório
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {topicos.map(({ tab, icon: Icon, title, desc }) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => abrir(tab)}
                  className="group text-left p-5 rounded-2xl bg-[#0A221A]/80 border border-[#1B4F3B] hover:border-[#FFB938]/70 hover:bg-[#0D2B21] transition-colors cursor-pointer flex flex-col gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB938]"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[#0F382A] border border-[#1E6047] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FFB938]" aria-hidden="true" />
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#4F7F6B] group-hover:text-[#FFB938] group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-display font-bold text-white">{title}</h3>
                    <p className="text-xs text-[#9EC7B5] leading-relaxed">{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
