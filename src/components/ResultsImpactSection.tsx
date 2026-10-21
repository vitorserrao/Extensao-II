import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { CountUp, CountBar } from './CountUp';

// Placar do contador (valores provisórios)
const RECEBIDAS = 100;
const RECUPERADAS = 90;

// Fatores de cálculo centralizados do simulador (facilmente configuráveis para nova metodologia)
export const SIMULATOR_FACTORS = {
  WEIGHT_PER_LAMP_KG: 0.085, // ~85g por lâmpada LED A60 típica (alumínio + polímeros)
  SAVINGS_PER_LAMP_BRL: 18.00, // Custo médio de compra de lâmpada nova no comércio
  CO2_KG_PER_LAMP: 1.20, // Estimativa de pegada de fabricação e transporte evitada
  HOURS_PER_LAMP: 7500, // Horas médias estimadas de vida útil recuperada
};

export const ResultsImpactSection: React.FC = () => {
  const [lampCount, setLampCount] = useState<number>(8);

  const avoidedKg = (lampCount * SIMULATOR_FACTORS.WEIGHT_PER_LAMP_KG).toFixed(1);
  const moneySaved = (lampCount * SIMULATOR_FACTORS.SAVINGS_PER_LAMP_BRL).toLocaleString('pt-BR');
  const co2Avoided = (lampCount * SIMULATOR_FACTORS.CO2_KG_PER_LAMP).toFixed(1);
  const hoursRecovered = (lampCount * SIMULATOR_FACTORS.HOURS_PER_LAMP).toLocaleString('pt-BR');

  // Lâmpadas equivalentes a uma sala de aula ou residência
  const presetOptions = [
    { label: '1 lâmpada', count: 1, note: 'Teste individual' },
    { label: '4 lâmpadas', count: 4, note: 'Residência' },
    { label: '12 lâmpadas', count: 12, note: 'Comércio / Sala' },
    { label: '30 lâmpadas', count: 30, note: 'Condomínio / Escola' },
  ];

  return (
    <section id="resultados" className="py-16 sm:py-24 section-alt border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* DISTRIBUIÇÃO PRINCIPAL: PAINEL INTEGRADO (INDICADORES + REGISTRO OFICIAL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              num={6}
              label="Resultados e impacto"
              line1="Depois de conhecer o projeto:"
              line2={<span className="marker-yellow">quanto já foi feito?</span>}
            >
              <p>
                Transparência técnica, indicadores institucionais do IFSC e projeção do benefício ecológico e econômico devolvido à comunidade.
              </p>
            </SectionHeading>

          {/* LADO DIREITO (5 Colunas): Tabela 1 — Registro Oficial dos Indicadores */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2F9E41]">
                Contador
              </span>
              <span className="text-[10px] font-mono text-[#6B7F74]">CST Sistemas de Energia</span>
            </div>

            <div className="rounded-2xl border border-[#D5E2D6] bg-white overflow-hidden shadow-2xs">
              <div className="bg-[#0D241C] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider">Contador de lâmpadas</h4>
                  <p className="text-[10px] text-[#EBF7ED]">Bancada de Extensão Universitária</p>
                </div>
              </div>

              {/* Placar */}
              <div className="grid grid-cols-2 divide-x divide-[#E0E6DC]">
                <div className="p-5 sm:p-6 space-y-1">
                  <span className="block text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">Recebidas</span>
                  <CountUp to={RECEBIDAS} className="block font-display font-black text-5xl sm:text-6xl text-[#1A1A1A] tracking-tight leading-none" />
                  <span className="block text-xs text-[#4A554E]">lâmpadas entregues ao projeto</span>
                </div>
                <div className="p-5 sm:p-6 space-y-1">
                  <span className="block text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">Recuperadas</span>
                  <CountUp to={RECUPERADAS} className="block font-display font-black text-5xl sm:text-6xl text-[#2F9E41] tracking-tight leading-none" />
                  <span className="block text-xs text-[#4A554E]">testadas e funcionando</span>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 space-y-1.5">
                <CountBar pct={(RECUPERADAS / RECEBIDAS) * 100} />
                <span className="block text-[11px] text-[#6B7F74]">
                  {Math.round((RECUPERADAS / RECEBIDAS) * 100)}% das lâmpadas recebidas voltaram a funcionar
                </span>
              </div>

            </div>
          </div>
          </div>

          {/* LADO ESQUERDO (7 Colunas): Painel de Métricas Comunitárias em Destaque */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F4F8F4] border border-[#D5E2D6] text-[10px] font-mono font-bold text-[#2F9E41] uppercase tracking-wider">
                <span>Painel Aberto de Impacto Comunitário</span>
              </div>
              <span className="text-[11px] font-mono text-[#6B7F74]">Metas do ciclo 2024/2025</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Taxa de Recuperação */}
              <div className="card-soft p-6 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                    Eficiência Técnica
                  </span>
                  <span className="w-6 h-6 rounded-md bg-[#FFF6DF] text-[#9A6700] flex items-center justify-center text-xs font-bold font-mono">
                    82%
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#1A1A1A] tracking-tight">
                    82%
                  </div>
                  <strong className="text-xs font-bold text-[#1A1A1A] block mt-0.5">
                    Taxa de Recuperação
                  </strong>
                  <div className="w-full bg-[#E3ECE4] h-1.5 rounded-full overflow-hidden my-2">
                    <div className="bg-[#2F9E41] h-full rounded-full" style={{ width: '82%' }} />
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    Na maioria dos casos, apenas 1 componente pontual falhou enquanto a estrutura permanece íntegra.
                  </p>
                </div>
              </div>

              {/* Card 2: Lâmpadas Recuperadas */}
              <div className="card-soft p-6 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                    Equipamentos Salvos
                  </span>
                  <span className="w-6 h-6 rounded-md bg-[#EBF7ED] text-[#2F9E41] flex items-center justify-center text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#1A1A1A] tracking-tight">
                    248
                  </div>
                  <strong className="text-xs font-bold text-[#1A1A1A] block mt-0.5">
                    Lâmpadas Recuperadas
                  </strong>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-[#EBF7ED] border border-[#D5E2D6] text-[10px] font-mono text-[#1E6B2C] my-1 font-semibold">
                    100% testadas e aprovadas
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    Devolvidas para famílias, salas e entidades comunitárias com segurança.
                  </p>
                </div>
              </div>

              {/* Card 3: Resíduos Desviados */}
              <div className="card-soft p-6 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                    Economia Circular
                  </span>
                  <span className="w-6 h-6 rounded-md bg-[#EBF7ED] text-[#2F9E41] flex items-center justify-center text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#1A1A1A] tracking-tight">
                    98 kg
                  </div>
                  <strong className="text-xs font-bold text-[#1A1A1A] block mt-0.5">
                    Lixo Eletrônico Evitado
                  </strong>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed mt-1">
                    Alumínio e polímeros nobres preservados em ciclo de uso, fora de aterros sanitários.
                  </p>
                </div>
              </div>

              {/* Card 4: Economia Gerada */}
              <div className="card-soft p-6 rounded-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                    Impacto Social
                  </span>
                  <span className="w-6 h-6 rounded-md bg-[#FFF6DF] text-[#9A6700] flex items-center justify-center text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#9A6700] tracking-tight">
                    R$ 4.460
                  </div>
                  <strong className="text-xs font-bold text-[#1A1A1A] block mt-0.5">
                    Economia Estimada
                  </strong>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed mt-1">
                    Poupados diretamente por famílias e instituições parceiras do projeto de extensão.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* PARTE 2: SIMULADOR DE IMPACTO COMUNITÁRIO (DESIGN EM 2 COLUNAS CONECTADAS) */}
        <div id="simulador-impacto" className="rounded-3xl bg-white border border-[#D5E2D6] shadow-sm overflow-hidden">
          
          {/* Faixa Superior do Simulador */}
          <div className="bg-[#0D241C] text-white px-6 sm:px-10 py-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-white/10 text-[#FFB938] flex items-center justify-center shadow-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                Simulador de Impacto do Reparo
              </h3>
            </div>
          </div>

          {/* Corpo do Simulador com Grid Balanceado */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LADO ESQUERDO (5 Colunas): Painel de Controle e Ajuste da Quantidade */}
            <div className="lg:col-span-5 space-y-6 lg:pr-4 lg:border-r lg:border-[#D5E2D6]/70">
              
              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C] leading-tight">
                  Quantas lâmpadas você tem paradas?
                </h4>
                <p className="text-xs sm:text-sm text-[#3A453F] leading-relaxed">
                  Ajuste a quantidade para calcular o benefício imediato de recuperar no IFSC em vez de comprar novas e gerar lixo:
                </p>
              </div>

              {/* Display do Contador e Slider */}
              <div className="p-5 rounded-2xl bg-[#F4F8F4] border border-[#D5E2D6] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3A453F]">
                    Lâmpadas selecionadas:
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white rounded-full border border-[#D5E2D6] shadow-2xs">
                    <span className="text-2xl font-display font-black text-[#1A1A1A]">
                      {lampCount}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#6B7F74]">
                      {lampCount === 1 ? 'unidade' : 'unidades'}
                    </span>
                  </div>
                </div>

                {/* Range Slider com Track Visual */}
                <div className="space-y-1.5">
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={lampCount}
                    onChange={(e) => setLampCount(Number(e.target.value))}
                    className="w-full h-3 bg-[#E3ECE4] rounded-lg accent-[#2F9E41] cursor-pointer"
                    aria-label="Ajustar quantidade de lâmpadas para simulação de impacto"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#6B7F74]">
                    <span>1 un.</span>
                    <span>10 un.</span>
                    <span>20 un.</span>
                    <span>30 un.</span>
                    <span>40 un.</span>
                  </div>
                </div>

                {/* Atalhos Rápidos com Contexto Prático */}
                <div className="space-y-2 pt-1 border-t border-[#D5E2D6]">
                  <span className="text-[10px] font-mono text-[#6B7F74] uppercase font-bold block">
                    Cenários comuns:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {presetOptions.map((opt) => (
                      <button
                        key={opt.count}
                        type="button"
                        onClick={() => setLampCount(opt.count)}
                        className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                          lampCount === opt.count
                            ? 'bg-[#0D241C] text-white border-[#0D241C] shadow-2xs'
                            : 'bg-white text-[#3A453F] hover:bg-[#F4F8F4] border-[#D5E2D6]'
                        }`}
                      >
                        <div className="text-xs font-mono font-bold">{opt.label}</div>
                        <div className={`text-[10px] ${lampCount === opt.count ? 'text-[#EBF7ED]' : 'text-[#6B7F74]'}`}>
                          {opt.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DIREITO (7 Colunas): Grade 2x2 com Cartões de Impacto Calculado em Tempo Real */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2F9E41]">
                  Impacto Calculado em Tempo Real
                </span>
                <span className="text-[11px] font-mono text-[#6B7F74]">
                  Base: {lampCount} {lampCount === 1 ? 'lâmpada' : 'lâmpadas'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Resíduos Evitados */}
                <div className="card-soft p-6 rounded-2xl group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                      Resíduos Evitados
                    </span>
                    <span className="w-5 h-5 rounded flex items-center justify-center text-[#2F9E41] bg-[#EBF7ED]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#1A1A1A] tracking-tight group-hover:text-[#2F9E41] transition-colors">
                    ~{avoidedKg} kg
                  </div>
                  <p className="text-xs font-bold text-[#1A1A1A] mt-1 mb-0.5">
                    Alumínio e polímeros nobres
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    Materiais pesados e plásticos de engenharia que deixam de ir para o aterro sanitário.
                  </p>
                </div>

                {/* 2. Economia Financeira */}
                <div className="card-soft p-6 rounded-2xl group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                      Economia no Bolso
                    </span>
                    <span className="w-5 h-5 rounded flex items-center justify-center text-[#9A6700] bg-[#FFF6DF]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#9A6700] tracking-tight">
                    R$ {moneySaved},00
                  </div>
                  <p className="text-xs font-bold text-[#9A6700] mt-1 mb-0.5">
                    Sem precisar comprar novas
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    Considerando o preço médio de mercado de R$ 18,00 por lâmpada LED residencial equivalente.
                  </p>
                </div>

                {/* 3. CO2 Não Emitido */}
                <div className="card-soft p-6 rounded-2xl group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                      Pegada de Carbono
                    </span>
                    <span className="w-5 h-5 rounded flex items-center justify-center text-[#2F9E41] bg-[#EBF7ED]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#1A1A1A] tracking-tight group-hover:text-[#2F9E41] transition-colors">
                    ~{co2Avoided} kg
                  </div>
                  <p className="text-xs font-bold text-[#1A1A1A] mt-1 mb-0.5">
                    CO₂ eq. não emitido
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    Poupança energética direta na extração mineral, fabricação fabril e transporte marítimo.
                  </p>
                </div>

                {/* 4. Horas de Iluminação Devolvidas */}
                <div className="card-soft p-6 rounded-2xl group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#2F9E41]">
                      Iluminação Útil
                    </span>
                    <span className="w-5 h-5 rounded flex items-center justify-center text-[#2F9E41] bg-[#EBF7ED]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#2F9E41] tracking-tight">
                    +{hoursRecovered} h
                  </div>
                  <p className="text-xs font-bold text-[#1A1A1A] mt-1 mb-0.5">
                    Horas de luz restauradas
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                    Estimativa de mais de 7.500 horas de ciclo operacional adicional por lâmpada recuperada.
                  </p>
                </div>

              </div>

              {/* Resumo Consolidado do Impacto com Barra Visual */}
              <div className="p-4 rounded-2xl bg-[#0D241C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-[#EBF7ED] font-bold uppercase tracking-wider">
                    Equivalente Ambiental Coletivo:
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {lampCount} {lampCount === 1 ? 'lâmpada' : 'lâmpadas'} = ~{avoidedKg} kg a menos de lixo e R$ {moneySaved},00 poupados
                  </div>
                </div>
                <a
                  href="#participe"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFB938] text-[#0D241C] font-mono text-xs font-bold hover:bg-[#F5A623] transition-colors shrink-0 shadow-xs"
                >
                  <span>Entregar lâmpadas</span>
                  <span>→</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
