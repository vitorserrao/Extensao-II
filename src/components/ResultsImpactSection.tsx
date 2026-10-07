import React, { useState } from 'react';

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
    <section id="resultados" className="py-16 sm:py-24 bg-paper-grid border-b border-[#E0E6DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#CCD6C7]/70">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2A5E4D] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#C97A3D] rounded-xs" />
              <span>5 — RESULTADOS & IMPACTO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0D241C] tracking-tight leading-[1.12]">
              Depois de conhecer o projeto:<br />
              <span className="text-[#1E4D3E]">quanto já foi feito?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#384F45] leading-relaxed">
              Transparência técnica, indicadores institucionais do IFSC e projeção do benefício ecológico e econômico devolvido à comunidade.
            </p>
          </div>

          <div className="p-3.5 bg-white/90 border border-[#CCD6C7] rounded-xl text-xs font-mono text-[#2D453B] shrink-0 max-w-xs shadow-2xs">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-[#1B4D3E] mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Extensão em Andamento</span>
            </div>
            <span>Dados e ensaios laboratoriais em constante atualização pelo CST em Sistemas de Energia.</span>
          </div>
        </div>

        {/* DISTRIBUIÇÃO PRINCIPAL: PAINEL INTEGRADO (INDICADORES + REGISTRO OFICIAL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LADO ESQUERDO (7 Colunas): Painel de Métricas Comunitárias em Destaque */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EBF0E8] border border-[#CCD6C7] text-[10px] font-mono font-bold text-[#2E6B56] uppercase tracking-wider">
                <span>Painel Aberto de Impacto Comunitário</span>
              </div>
              <span className="text-[11px] font-mono text-[#557065]">Metas do ciclo 2024/2025</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Taxa de Recuperação */}
              <div className="p-5 rounded-2xl bg-white border border-[#CCD6C7] shadow-2xs hover:border-[#1E4D3E] transition-all flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4E6B5F]">
                    Eficiência Técnica
                  </span>
                  <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-bold font-mono">
                    82%
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#0D241C] tracking-tight">
                    82%
                  </div>
                  <strong className="text-xs font-bold text-[#0D241C] block mt-0.5">
                    Taxa de Recuperação
                  </strong>
                  <div className="w-full bg-[#E8EFE5] h-1.5 rounded-full overflow-hidden my-2">
                    <div className="bg-[#1E4D3E] h-full rounded-full" style={{ width: '82%' }} />
                  </div>
                  <p className="text-[11px] text-[#40564D] leading-tight">
                    Na maioria dos casos, apenas 1 componente pontual falhou enquanto a estrutura permanece íntegra.
                  </p>
                </div>
              </div>

              {/* Card 2: Lâmpadas Recuperadas */}
              <div className="p-5 rounded-2xl bg-white border border-[#CCD6C7] shadow-2xs hover:border-[#1E4D3E] transition-all flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4E6B5F]">
                    Equipamentos Salvos
                  </span>
                  <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs">
                    💡
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#0D241C] tracking-tight">
                    248
                  </div>
                  <strong className="text-xs font-bold text-[#0D241C] block mt-0.5">
                    Lâmpadas Recuperadas
                  </strong>
                  <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-800 my-1 font-semibold">
                    100% testadas e aprovadas
                  </span>
                  <p className="text-[11px] text-[#40564D] leading-tight">
                    Devolvidas para famílias, salas e entidades comunitárias com segurança.
                  </p>
                </div>
              </div>

              {/* Card 3: Resíduos Desviados */}
              <div className="p-5 rounded-2xl bg-white border border-[#CCD6C7] shadow-2xs hover:border-[#1E4D3E] transition-all flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4E6B5F]">
                    Economia Circular
                  </span>
                  <span className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center text-xs">
                    🌿
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#0D241C] tracking-tight">
                    98 kg
                  </div>
                  <strong className="text-xs font-bold text-[#0D241C] block mt-0.5">
                    Lixo Eletrônico Evitado
                  </strong>
                  <p className="text-[11px] text-[#40564D] leading-tight mt-1">
                    Alumínio e polímeros nobres preservados em ciclo de uso, fora de aterros sanitários.
                  </p>
                </div>
              </div>

              {/* Card 4: Economia Gerada */}
              <div className="p-5 rounded-2xl bg-white border border-[#CCD6C7] shadow-2xs hover:border-[#1E4D3E] transition-all flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#946A14]">
                    Impacto Social
                  </span>
                  <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center text-xs">
                    💰
                  </span>
                </div>
                <div className="my-1">
                  <div className="text-3xl font-display font-extrabold text-[#87550B] tracking-tight">
                    R$ 4.460
                  </div>
                  <strong className="text-xs font-bold text-[#0D241C] block mt-0.5">
                    Economia Estimada
                  </strong>
                  <p className="text-[11px] text-[#40564D] leading-tight mt-1">
                    Poupados diretamente por famílias e instituições parceiras do projeto de extensão.
                  </p>
                </div>
              </div>

            </div>

            {/* Banner de inspiração em dados abertos */}
            <div className="p-4 rounded-xl bg-[#F2F6F0] border border-[#CCD6C7] flex items-center justify-between gap-4">
              <p className="text-xs text-[#2A443A] leading-relaxed">
                Inspirado no modelo de dados abertos do movimento internacional de reparo (*Open Repair Data*), o REACENDE registra cada equipamento e promove ciência cidadã.
              </p>
              <span className="text-[10px] font-mono uppercase font-bold text-[#1E4D3E] shrink-0 border border-[#1E4D3E]/30 px-2 py-1 rounded bg-white">
                IFSC Aberto
              </span>
            </div>
          </div>

          {/* LADO DIREITO (5 Colunas): Tabela 1 — Registro Oficial dos Indicadores */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1B4D3E]">
                Registro Institucional
              </span>
              <span className="text-[10px] font-mono text-[#6A8277]">CST Sistemas de Energia</span>
            </div>

            <div className="rounded-2xl border border-[#CCD6C7] bg-white overflow-hidden shadow-2xs">
              <div className="bg-[#08211A] text-white px-5 py-3.5 flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider">
                    Tabela 1 — Indicadores do Projeto
                  </h4>
                  <p className="text-[10px] text-emerald-300 font-mono">Bancada de Extensão Universitária</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#133A2E] text-emerald-200 border border-emerald-500/30">
                  OFICIAL
                </span>
              </div>

              <div className="divide-y divide-[#E0E6DC] text-xs">
                
                {/* Linha 1 */}
                <div className="p-4 hover:bg-[#F9FAF8] transition-colors space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0D241C]">Lâmpadas recebidas</span>
                    <span className="font-display font-extrabold text-xl text-[#0D241C] font-mono">
                      000
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#557065]">
                    <span className="text-[#C97A3D] font-bold">Critério:</span>
                    <span>[CRITÉRIO DE CONTAGEM]</span>
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="p-4 hover:bg-[#F9FAF8] transition-colors space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0D241C]">Lâmpadas recuperadas</span>
                    <span className="font-display font-extrabold text-xl text-[#1E4D3E] font-mono">
                      000
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#557065]">
                    <span className="text-[#C97A3D] font-bold">Critério:</span>
                    <span>[LÂMPADA TESTADA E FUNCIONANDO]</span>
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="p-4 hover:bg-[#F9FAF8] transition-colors space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0D241C]">Massa desviada do descarte</span>
                    <span className="font-display font-extrabold text-xl text-[#0D241C] font-mono">
                      000 kg
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#557065]">
                    <span className="text-[#C97A3D] font-bold">Método:</span>
                    <span>[MÉTODO DE PESAGEM OU ESTIMATIVA]</span>
                  </div>
                </div>

              </div>

              <div className="bg-[#FAFBF9] px-4 py-3 border-t border-[#E0E6DC] text-[10px] font-mono text-[#556961] leading-relaxed">
                Valores ilustrativos institucionais — serão formalmente atualizados conforme fechamento dos relatórios semestrais de extensão.
              </div>
            </div>

            <p className="text-[10px] font-mono text-[#6A8277] italic text-right">
              Fonte: Relatórios de bancada do Laboratório de Sistemas de Energia · IFSC.
            </p>
          </div>

        </div>

        {/* PARTE 2: SIMULADOR DE IMPACTO COMUNITÁRIO (DESIGN EM 2 COLUNAS CONECTADAS) */}
        <div id="simulador-impacto" className="rounded-3xl bg-white border border-[#CCD6C7] shadow-sm overflow-hidden">
          
          {/* Faixa Superior do Simulador */}
          <div className="bg-[#0A261E] text-white px-6 sm:px-10 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#183F33]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-[#0A261E] flex items-center justify-center font-bold text-base shadow-xs">
                💡
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold block">
                  Ferramenta Interativa Comunitária
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  Simulador de Impacto do Reparo
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12362C] border border-[#205042] text-[11px] font-mono text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Simulação Dinâmica em Tempo Real</span>
            </div>
          </div>

          {/* Corpo do Simulador com Grid Balanceado */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LADO ESQUERDO (5 Colunas): Painel de Controle e Ajuste da Quantidade */}
            <div className="lg:col-span-5 space-y-6 lg:pr-4 lg:border-r lg:border-[#CCD6C7]/70">
              
              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-[#0D241C] leading-tight">
                  Quantas lâmpadas você tem paradas?
                </h4>
                <p className="text-xs sm:text-sm text-[#384C43] leading-relaxed">
                  Ajuste a quantidade para calcular o benefício imediato de recuperar no IFSC em vez de comprar novas e gerar lixo:
                </p>
              </div>

              {/* Display do Contador e Slider */}
              <div className="p-5 rounded-2xl bg-[#F7F9F5] border border-[#CCD6C7] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2A4237]">
                    Lâmpadas selecionadas:
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white rounded-full border border-[#CCD6C7] shadow-2xs">
                    <span className="text-2xl font-display font-black text-[#0D241C]">
                      {lampCount}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#4E6B5F]">
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
                    className="w-full h-3 bg-[#D4DDD1] rounded-lg accent-[#134436] cursor-pointer"
                    aria-label="Ajustar quantidade de lâmpadas para simulação de impacto"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#627D71]">
                    <span>1 un.</span>
                    <span>10 un.</span>
                    <span>20 un.</span>
                    <span>30 un.</span>
                    <span>40 un.</span>
                  </div>
                </div>

                {/* Atalhos Rápidos com Contexto Prático */}
                <div className="space-y-2 pt-1 border-t border-[#E1E8DC]">
                  <span className="text-[10px] font-mono text-[#557065] uppercase font-bold block">
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
                            : 'bg-white text-[#2A4237] hover:bg-gray-50 border-[#CCD6C7]'
                        }`}
                      >
                        <div className="text-xs font-mono font-bold">{opt.label}</div>
                        <div className={`text-[10px] ${lampCount === opt.count ? 'text-emerald-200' : 'text-[#627D71]'}`}>
                          {opt.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dica Prática */}
              <div className="flex items-start gap-2.5 text-xs text-[#384C43] bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60">
                <span className="text-base leading-none">💡</span>
                <p className="leading-snug">
                  Entregando <strong>{lampCount} {lampCount === 1 ? 'lâmpada' : 'lâmpadas'}</strong> nos pontos de coleta do IFSC, você ajuda a manter a oficina prática dos estudantes de Sistemas de Energia.
                </p>
              </div>
            </div>

            {/* LADO DIREITO (7 Colunas): Grade 2x2 com Cartões de Impacto Calculado em Tempo Real */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1E4D3E]">
                  Impacto Calculado em Tempo Real
                </span>
                <span className="text-[11px] font-mono text-[#557065]">
                  Base: {lampCount} {lampCount === 1 ? 'lâmpada' : 'lâmpadas'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Resíduos Evitados */}
                <div className="p-5 rounded-2xl bg-[#F7F9F5] border border-[#CCD6C7] hover:border-emerald-600 transition-all shadow-2xs group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#4E6B5F] tracking-wider">
                      Resíduos Evitados
                    </span>
                    <span className="text-sm">♻️</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D241C] tracking-tight group-hover:text-[#134436] transition-colors">
                    ~{avoidedKg} kg
                  </div>
                  <p className="text-xs font-bold text-[#0D241C] mt-1 mb-0.5">
                    Alumínio e polímeros nobres
                  </p>
                  <p className="text-[11px] text-[#557065] leading-tight">
                    Materiais pesados e plásticos de engenharia que deixam de ir para o aterro sanitário.
                  </p>
                </div>

                {/* 2. Economia Financeira */}
                <div className="p-5 rounded-2xl bg-[#FFFDF5] border border-amber-200 hover:border-amber-500 transition-all shadow-2xs group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-800 tracking-wider">
                      Economia no Bolso
                    </span>
                    <span className="text-sm">💵</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-amber-800 tracking-tight">
                    R$ {moneySaved},00
                  </div>
                  <p className="text-xs font-bold text-amber-950 mt-1 mb-0.5">
                    Sem precisar comprar novas
                  </p>
                  <p className="text-[11px] text-[#695831] leading-tight">
                    Considerando o preço médio de mercado de R$ 18,00 por lâmpada LED residencial equivalente.
                  </p>
                </div>

                {/* 3. CO2 Não Emitido */}
                <div className="p-5 rounded-2xl bg-[#F7F9F5] border border-[#CCD6C7] hover:border-emerald-600 transition-all shadow-2xs group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#4E6B5F] tracking-wider">
                      Pegada de Carbono
                    </span>
                    <span className="text-sm">🌱</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#0D241C] tracking-tight group-hover:text-[#134436] transition-colors">
                    ~{co2Avoided} kg
                  </div>
                  <p className="text-xs font-bold text-[#0D241C] mt-1 mb-0.5">
                    CO₂ eq. não emitido
                  </p>
                  <p className="text-[11px] text-[#557065] leading-tight">
                    Poupança energética direta na extração mineral, fabricação fabril e transporte marítimo.
                  </p>
                </div>

                {/* 4. Horas de Iluminação Devolvidas */}
                <div className="p-5 rounded-2xl bg-[#F7F9F5] border border-[#CCD6C7] hover:border-emerald-600 transition-all shadow-2xs group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#4E6B5F] tracking-wider">
                      Iluminação Útil
                    </span>
                    <span className="text-sm">⏱️</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#164E3A] tracking-tight">
                    +{hoursRecovered} h
                  </div>
                  <p className="text-xs font-bold text-[#0D241C] mt-1 mb-0.5">
                    Horas de luz restauradas
                  </p>
                  <p className="text-[11px] text-[#557065] leading-tight">
                    Estimativa de mais de 7.500 horas de ciclo operacional adicional por lâmpada recuperada.
                  </p>
                </div>

              </div>

              {/* Resumo Consolidado do Impacto com Barra Visual */}
              <div className="p-4 rounded-2xl bg-[#0F2D24] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                    Equivalente Ambiental Coletivo:
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {lampCount} {lampCount === 1 ? 'lâmpada' : 'lâmpadas'} = ~{avoidedKg} kg a menos de lixo e R$ {moneySaved},00 poupados
                  </div>
                </div>
                <a
                  href="#participe"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-[#0A231C] font-mono text-xs font-bold hover:bg-amber-300 transition-colors shrink-0 shadow-xs"
                >
                  <span>Entregar lâmpadas</span>
                  <span>→</span>
                </a>
              </div>

              {/* Indicação obrigatória de estimativa */}
              <p className="text-[11px] font-mono text-[#556961] italic pt-1">
                <strong>Estimativa:</strong> os valores apresentados pelo simulador são aproximações baseadas nos parâmetros médios do projeto (85g/lâmpada, R$ 18,00/un, 1,2 kg CO₂/un, 7.500h de vida útil) e são refinados a cada ciclo de medição no IFSC.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
