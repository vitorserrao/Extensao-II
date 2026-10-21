import React from 'react';

/**
 * Cabeçalho padrão das seções (referência: seções 1 e 2).
 * Rótulo numerado + título em duas linhas + texto de apoio, sempre com os mesmos tamanhos.
 * O título é dimensionado pela largura da coluna (meia coluna no desktop), então todas
 * as seções ficam com o mesmo corpo de título.
 */
interface SectionHeadingProps {
  num: number;
  label: string;
  line1: React.ReactNode;
  line2?: React.ReactNode; // opcional: títulos curtos ficam em uma linha só
  children?: React.ReactNode; // texto de apoio
  as?: 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ num, label, line1, line2, children, as = 'h2' }) => {
  const Title = as;
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#2F9E41] uppercase tracking-wider">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFB938] shadow-[0_0_8px_rgba(255,185,56,0.9)] animate-pulse shrink-0" />
        <span>
          {num} — {label}
        </span>
      </div>

      <Title className="title-2l section-title text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
        <span className="title-line">{line1}</span>
        {line2 && <span className="title-line">{line2}</span>}
      </Title>

      {children && <div className="section-lead space-y-3">{children}</div>}
    </div>
  );
};
