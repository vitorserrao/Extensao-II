import React from 'react';
import { ArrowRight, MousePointerClick, Wrench, Cable, ShieldCheck } from 'lucide-react';
import type { TutorialTab } from './TutorialPage';
import { SectionHeading } from './SectionHeading';

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
    <section id="como-recuperamos" className="py-16 sm:py-24 border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Texto + chamada principal */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              num={5}
              label="Como recuperamos"
              line1={<>Da bancada <span className="marker-yellow">à nova luz.</span></>}
            >
              <p>
                A recuperação acontece na bancada, um componente de cada vez. Montamos um laboratório virtual aberto para quem quiser entender o processo ou aprender a fazer.
              </p>
            </SectionHeading>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => abrir('seguranca')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-sans font-bold text-[#161204] bg-[#FFB938] hover:bg-[#F5A623] transition-all shadow-xs hover:shadow-sm cursor-pointer"
              >
                <span>Entrar no laboratório virtual</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
              <p className="text-xs text-[#6B7F74]">Acesso livre para estudantes e comunidade.</p>
            </div>
          </div>

          {/* O que tem no laboratório: cada card abre direto no tópico */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {topicos.map(({ tab, icon: Icon, title, desc }) => (
              <button
                key={tab}
                type="button"
                onClick={() => abrir(tab)}
                className="card-soft group text-left p-6 rounded-2xl cursor-pointer flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F9E41]"
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-5 h-5 text-[#2F9E41] group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <ArrowRight className="w-4 h-4 text-[#6B7F74] group-hover:text-[#2F9E41] group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-[#0D241C] mb-2.5">{title}</h3>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">{desc}</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
