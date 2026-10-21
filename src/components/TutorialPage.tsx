import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Slice,
  Glasses,
  BatteryMedium,
  Gauge,
  Scissors,
  Flame,
  Droplet,
  Lightbulb,
  ShieldCheck,
  TriangleAlert,
  RotateCcw,
  Power,
  Trash2,
  Clock,
  Recycle,
} from 'lucide-react';
import { InteractiveBench } from './InteractiveBench';

/** Pontos de entrada usados pelos atalhos da página inicial. */
export type TutorialTab = 'simulador' | 'passos' | 'seguranca' | 'ferramentas' | 'circuito';

interface TutorialPageProps {
  onBack: () => void;
  initialTab?: TutorialTab;
}

/* ---------- Dados do laboratório ---------- */

type ToolId = 'oculos' | 'espatula' | 'pilhas' | 'multimetro' | 'alicate' | 'ferro' | 'estanho' | 'serie';

const TOOLS: Record<ToolId, { name: string; desc: string; icon: React.ElementType }> = {
  oculos: { name: 'Óculos de proteção', desc: 'EPI contra respingos de solda e estilhaços.', icon: Glasses },
  espatula: { name: 'Espátula plástica', desc: 'Separa o bulbo da carcaça sem quebrar as travas.', icon: Slice },
  pilhas: { name: 'Duas pilhas AA (3V)', desc: 'Fonte segura para testar um LED de cada vez.', icon: BatteryMedium },
  multimetro: { name: 'Multímetro digital', desc: 'Escala de diodo para achar o LED aberto.', icon: Gauge },
  alicate: { name: 'Alicate de bico fino', desc: 'Retira o corpo do LED danificado.', icon: Scissors },
  ferro: { name: 'Ferro de solda (30–40 W)', desc: 'Derrete o estanho para fazer o jumper.', icon: Flame },
  estanho: { name: 'Estanho com fluxo', desc: 'Une os dois pads e fecha o circuito.', icon: Droplet },
  serie: { name: 'Lâmpada série', desc: 'Protege o primeiro teste contra curto-circuito.', icon: Lightbulb },
};

const SAFETY = [
  {
    title: 'Lâmpada fora da tomada',
    desc: 'Nunca abra ou solde uma lâmpada ligada ao soquete de 127 V/220 V.',
  },
  {
    title: 'Capacitores descarregados',
    desc: 'O driver pode guardar até 300 V mesmo desligado. Descarregue com um resistor de 1 kΩ antes de tocar na placa.',
  },
  {
    title: 'Primeiro teste com lâmpada série',
    desc: 'Se houver curto, a lâmpada série acende e protege a instalação.',
  },
  {
    title: 'Ferro de solda no suporte',
    desc: 'A ponta passa de 300 °C. Não encoste na carcaça plástica e use óculos de proteção.',
  },
];

interface LabStep {
  title: string;
  short: string;
  instruction: string;
  tools: ToolId[];
  warning?: string;
  tip?: string;
  extra?: { question: string; answer: string[] };
  /** O que acabou de acontecer, mostrado quando a pessoa conclui a ação na bancada. */
  result: string;
}

const STEPS: LabStep[] = [
  {
    title: 'Abrir a lâmpada',
    result: 'O difusor saiu inteiro e as travas ficaram intactas: ele volta para o lugar no fim do reparo. Agora a placa com os LEDs está à mostra.',
    short: 'Abertura',
    instruction:
      'Encaixe a espátula na junção entre o bulbo e a carcaça e percorra a volta inteira, soltando o bulbo sem romper as travas.',
    tools: ['espatula', 'oculos'],
    tip: 'Com a placa à mostra, procure um ponto preto no centro de algum LED. Costuma ser exatamente o que queimou.',
  },
  {
    title: 'Encontrar o LED queimado',
    result: 'Os LEDs bons acenderam com 3 V; esse não. Ele está em circuito aberto e, como os LEDs ficam em série, um único LED aberto apaga a lâmpada inteira.',
    short: 'Diagnóstico',
    instruction:
      'Com duas pilhas AA em série (3 V) ou o multímetro na escala de diodo, toque nos terminais de cada LED. Os bons acendem; o queimado fica apagado (circuito aberto).',
    tools: ['pilhas', 'multimetro'],
    tip: 'Placas com LEDs de 6 V ou 9 V precisam de uma fonte de 6 V com resistor de 470 Ω em série para o teste.',
    extra: {
      question: 'E se todos os LEDs acenderem?',
      answer: [
        'Então o defeito está no driver, o circuito que alimenta os LEDs. Procure um capacitor eletrolítico estufado no topo ou um resistor de entrada aberto.',
        'A troca é feita por um componente igual, retirado de outra lâmpada do mesmo lote. Atenção à faixa negativa do capacitor para não inverter a polaridade.',
      ],
    },
  },
  {
    title: 'Retirar o LED',
    result: 'Sem o LED, os dois pads de cobre ficaram livres. Mas ainda não há caminho para a corrente passar: é isso que o jumper vai resolver.',
    short: 'Remoção',
    instruction:
      'Com o alicate de bico fino, retire só o corpo do LED danificado, deixando à mostra os dois pads metálicos da placa.',
    tools: ['alicate'],
    tip: 'Preserve os pads de cobre: são eles que vão receber a solda na próxima etapa.',
  },
  {
    title: 'Soldar o jumper',
    result: 'A gota de estanho ligou os dois pads. A corrente volta a percorrer todos os outros LEDs da série.',
    short: 'Solda',
    instruction:
      'Aqueça o ferro, aplique fluxo e una os dois pads com uma gota de estanho. Essa ponte (jumper) fecha o circuito no lugar do LED removido.',
    tools: ['ferro', 'estanho'],
    tip: 'A placa tem fundo de alumínio e dissipa muito calor: mantenha a ponta firme por 3 a 4 segundos até a solda fluir.',
    extra: {
      question: 'Por que o jumper faz a lâmpada voltar?',
      answer: [
        'Os LEDs de uma lâmpada (de 10 a 24 chips) ficam ligados em série, como um pisca-pisca de Natal: se um abre, a corrente para em todos.',
        'A ponte de estanho devolve o caminho para a corrente. O driver mantém a corrente constante e se ajusta à tensão um pouco menor, sem sobrecarregar os outros LEDs.',
        'Com 1 ou 2 LEDs substituídos por jumper, a perda de luz é praticamente imperceptível.',
      ],
    },
  },
  {
    title: 'Testar e fechar',
    result: 'A lâmpada acendeu no teste com o difusor no lugar.',
    short: 'Teste',
    instruction:
      'Ligue a lâmpada num soquete de bancada protegido por lâmpada série. Se acender normalmente, recoloque o bulbo e ela está pronta para voltar ao uso.',
    tools: ['serie', 'oculos'],
  },
];

const IMPACT = [
  { icon: Trash2, value: '1 lâmpada', label: 'a menos no lixo e no aterro' },
  { icon: Clock, value: 'até 20 mil h', label: 'de luz a mais com o mesmo equipamento' },
  { icon: Recycle, value: '98,8%', label: 'dos materiais seguem em uso' },
  { icon: Droplet, value: '1 gota', label: 'de estanho no lugar de uma lâmpada nova' },
];

/** step 0 = checagem de segurança; 1..5 = etapas da bancada */
const tabToStep: Record<TutorialTab, number> = {
  seguranca: 0,
  simulador: 1,
  passos: 1,
  ferramentas: 1,
  circuito: 4,
};

/* ---------- Página ---------- */

export const TutorialPage: React.FC<TutorialPageProps> = ({ onBack, initialTab = 'seguranca' }) => {
  const [step, setStep] = useState<number>(tabToStep[initialTab]);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([tabToStep[initialTab]]));
  const [checked, setChecked] = useState<boolean[]>(() => SAFETY.map(() => initialTab !== 'seguranca'));
  const [extraOpen, setExtraOpen] = useState<boolean>(initialTab === 'circuito');
  const [done, setDone] = useState(false);
  const [actionDone, setActionDone] = useState(false);
  const [recoveredCount, setRecoveredCount] = useState(0);

  // Conta quantas lâmpadas a pessoa já recuperou neste navegador
  useEffect(() => {
    if (!done) return;
    let n = 1;
    try {
      n = Number(localStorage.getItem('reled-lab-recuperadas') || '0') + 1;
      localStorage.setItem('reled-lab-recuperadas', String(n));
    } catch {
      /* armazenamento indisponível: segue sem contador */
    }
    setRecoveredCount(n);
  }, [done]);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (initialTab === 'ferramentas') {
      toolsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialTab]);

  const safetyOk = checked.every(Boolean);
  const current = step > 0 ? STEPS[step - 1] : null;

  const goTo = (s: number) => {
    setDone(false);
    setStep(s);
    setExtraOpen(false);
    setActionDone(false);
    setVisited((v) => new Set(v).add(s));
    // Em telas pequenas, mantém a bancada à vista ao trocar de etapa
    if (window.innerWidth < 1024) {
      workspaceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const restart = () => {
    setVisited(new Set([0]));
    setChecked(SAFETY.map(() => false));
    goTo(0);
  };

  const stepper = [{ short: 'Segurança' }, ...STEPS];

  return (
    <div className="min-h-screen bg-[#071913] text-[#EAF3EE] font-sans">
      {/* Barra superior */}
      <nav className="sticky top-0 z-50 bg-[#06140F]/95 backdrop-blur-md border-b border-[#143B2E] px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#C2DEC9] hover:text-white hover:bg-[#0E2C22] text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voltar ao site</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFB938] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#FFB938]">Laboratório virtual</span>
          </div>
        </div>
      </nav>

      {/* Abertura */}
      <header className="bg-gradient-to-b from-[#0B251C] to-[#071913] border-b border-[#143B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 space-y-5">
          <span className="block text-[11px] font-mono uppercase tracking-widest font-bold text-[#86E49E]">
            ReLED · Sistemas de Energia IFSC
          </span>
          <h1
            className="title-2l text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]"
            style={{ '--fit': '6.95cqi' } as React.CSSProperties}
          >
            <span className="title-line">Recupere uma lâmpada LED</span>
            <span className="title-line text-[#FFB938]">na bancada virtual.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#9EC7B5] max-w-2xl leading-relaxed">
            O processo realizado pelos estudantes no laboratório, organizado em cinco etapas. Em cada uma, você acompanha as mudanças na lâmpada, as ferramentas utilizadas e os cuidados necessários durante a recuperação.
          </p>
        </div>

        {/* Progresso do experimento */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <ol className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" aria-label="Etapas do experimento">
            {stepper.map((s, i) => {
              const active = i === step && !done;
              const seen = visited.has(i) || (done && i <= STEPS.length);
              return (
                <li key={s.short} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={active ? 'step' : undefined}
                    className={`flex items-center gap-2 pl-2 pr-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#FFB938] text-[#161204] border-[#FFB938]'
                        : 'bg-[#0B231B] text-[#C2DEC9] border-[#1B4D3C] hover:border-[#2F7A5C]'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                        active ? 'bg-[#161204] text-[#FFB938]' : seen ? 'bg-[#1A7F5A] text-white' : 'bg-[#123A2C] text-[#7FA897]'
                      }`}
                    >
                      {i === 0 ? (
                        <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : seen && !active ? (
                        <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                      ) : (
                        i
                      )}
                    </span>
                    <span>{s.short}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {/* Bancada */}
        <div ref={workspaceRef} className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual da lâmpada */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative">
              <div className={`transition-all duration-500 ${step === 0 && !done ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                <InteractiveBench key={step} step={Math.max(step, 1)} onDone={() => (step === STEPS.length ? setDone(true) : setActionDone(true))} />
              </div>
              {step === 0 && !done && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06140F]/90 border border-[#1B4D3C] text-xs font-bold text-[#C2DEC9]">
                    <Power className="w-4 h-4 text-[#FFB938]" aria-hidden="true" />
                    Bancada desligada
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Painel da etapa */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0A221A] border border-[#164939] p-6 sm:p-8 space-y-6">
              {done ? (
                /* Conclusão */
                <div className="scene-fade space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex w-12 h-12 rounded-2xl bg-[#FFB938] items-center justify-center shrink-0 shadow-[0_0_28px_rgba(255,185,56,0.55)]">
                      <Lightbulb className="w-6 h-6 text-[#161204]" aria-hidden="true" />
                    </span>
                    <div className="space-y-1.5">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        Parabéns, você recuperou uma lâmpada!
                      </h2>
                      <p className="text-sm text-[#9EC7B5] leading-relaxed">
                        Na vida real, ela voltaria a iluminar uma sala ou um espaço comunitário em vez de ir para o lixo.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {IMPACT.map(({ icon: Icon, value, label }, i) => (
                      <div
                        key={label}
                        className="scene-fade p-4 rounded-2xl bg-[#0F3125] border border-[#1E5742]"
                        style={{ animationDelay: `${150 + i * 120}ms`, animationFillMode: 'both' }}
                      >
                        <Icon className="w-5 h-5 text-[#86E49E] mb-2" aria-hidden="true" />
                        <span className="block font-display font-black text-xl sm:text-2xl text-white leading-tight">{value}</span>
                        <span className="block mt-0.5 text-xs text-[#9EC7B5] leading-snug">{label}</span>
                      </div>
                    ))}
                  </div>

                  {recoveredCount > 1 && (
                    <p className="text-xs text-[#86E49E] font-semibold">
                      Você já recuperou {recoveredCount} lâmpadas no laboratório virtual.
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="button"
                      onClick={onBack}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFB938] hover:bg-[#F5A623] text-[#161204] text-sm font-bold transition-colors cursor-pointer"
                    >
                      Conhecer o projeto e participar
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={restart}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#1E5742] text-[#C2DEC9] hover:text-white hover:border-[#2F7A5C] text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      Refazer
                    </button>
                  </div>
                </div>
              ) : step === 0 ? (
                /* Checagem de segurança */
                <>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-rose-300">
                      Antes de começar
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Checagem de segurança</h2>
                    <p className="text-sm text-[#9EC7B5] leading-relaxed">
                      Confirme os quatro cuidados (NR-10) para ligar a bancada.
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {SAFETY.map((item, i) => (
                      <li key={item.title}>
                        <label
                          className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-colors ${
                            checked[i] ? 'bg-[#0F3125] border-[#2F7A5C]' : 'bg-[#071A14] border-[#1B4D3C] hover:border-[#2F7A5C]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={checked[i]}
                            onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                          />
                          <span
                            className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-[#FFB938] ${
                              checked[i] ? 'bg-[#2F9E41] border-[#2F9E41]' : 'border-[#3E6E5B]'
                            }`}
                          >
                            {checked[i] && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} aria-hidden="true" />}
                          </span>
                          <span className="space-y-0.5">
                            <span className="block text-sm font-bold text-white">{item.title}</span>
                            <span className="block text-xs text-[#9EC7B5] leading-relaxed">{item.desc}</span>
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <span className="text-xs text-[#7FA897]">
                      {checked.filter(Boolean).length} de {SAFETY.length} confirmados
                    </span>
                    <button
                      type="button"
                      disabled={!safetyOk}
                      onClick={() => goTo(1)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-colors bg-[#FFB938] hover:bg-[#F5A623] text-[#161204] cursor-pointer disabled:bg-[#163A2D] disabled:text-[#5E8573] disabled:cursor-not-allowed"
                    >
                      <Power className="w-4 h-4" aria-hidden="true" />
                      Ligar a bancada
                    </button>
                  </div>
                </>
              ) : (
                current && (
                  /* Etapa da bancada */
                  <>
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#FFB938]">
                        Etapa {step} de {STEPS.length}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">{current.title}</h2>
                      <p className="text-sm sm:text-base text-[#C0DFCF] leading-relaxed">{current.instruction}</p>
                    </div>

                    {actionDone && step < STEPS.length && (
                      <div className="scene-fade rounded-2xl bg-[#103A2B] border border-[#2F9E41]/60 overflow-hidden" role="status">
                        <div className="p-4 flex gap-3">
                          <span className="w-7 h-7 rounded-full bg-[#2F9E41] flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} aria-hidden="true" />
                          </span>
                          <div className="space-y-1">
                            <span className="block text-sm font-bold text-white">Etapa concluída</span>
                            <p className="text-xs sm:text-sm text-[#BFE9CC] leading-relaxed">{current.result}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2.5">
                      <span className="block text-[10px] font-mono uppercase tracking-widest font-bold text-[#7FA897]">
                        Na bancada
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {current.tools.map((id) => {
                          const { name, icon: Icon } = TOOLS[id];
                          return (
                            <span
                              key={id}
                              className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg bg-[#0F3125] border border-[#1E5742] text-xs font-semibold text-white"
                            >
                              <Icon className="w-4 h-4 text-[#FFB938]" aria-hidden="true" />
                              {name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {current.warning && (
                      <div className="flex gap-3 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40">
                        <TriangleAlert className="w-5 h-5 text-rose-300 shrink-0" aria-hidden="true" />
                        <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">{current.warning}</p>
                      </div>
                    )}

                    {current.tip && (
                      <div className="flex gap-3 p-4 rounded-2xl bg-[#0E2E22] border border-[#235845]">
                        <Lightbulb className="w-5 h-5 text-[#86E49E] shrink-0" aria-hidden="true" />
                        <p className="text-xs sm:text-sm text-[#BFE9CC] leading-relaxed">
                          <strong className="text-[#86E49E]">Dica de bancada: </strong>
                          {current.tip}
                        </p>
                      </div>
                    )}

                    {current.extra && (
                      <div className="rounded-2xl border border-[#1B4D3C] overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setExtraOpen((o) => !o)}
                          aria-expanded={extraOpen}
                          className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-bold text-white hover:bg-[#0E2C22] transition-colors cursor-pointer"
                        >
                          {current.extra.question}
                          <ChevronDown
                            className={`w-4 h-4 text-[#7FA897] transition-transform ${extraOpen ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                        {extraOpen && (
                          <div className="px-4 pb-4 space-y-2 text-xs sm:text-sm text-[#A8C7B8] leading-relaxed">
                            {current.extra.answer.map((p) => (
                              <p key={p}>{p}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#164939]">
                      <button
                        type="button"
                        onClick={() => goTo(step - 1)}
                        className="inline-flex items-center gap-2 px-3 py-2.5 mt-4 rounded-xl text-[#C2DEC9] hover:text-white text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        {step === 1 ? 'Segurança' : 'Anterior'}
                      </button>
                      {actionDone ? (
                        <button
                          type="button"
                          onClick={() => (step === STEPS.length ? setDone(true) : goTo(step + 1))}
                          className="inline-flex items-center gap-2 px-5 py-3 mt-4 rounded-xl bg-[#FFB938] hover:bg-[#F5A623] text-[#161204] text-sm font-bold transition-colors cursor-pointer"
                        >
                          {step === STEPS.length ? 'Concluir reparo' : `Próxima: ${STEPS[step].short}`}
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      ) : (
                        <span className="mt-4 text-xs text-[#7FA897] text-right">Faça a etapa na bancada para continuar</span>
                      )}
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>

        {/* Inventário da bancada */}
        <section ref={toolsRef} className="scroll-mt-20 space-y-5">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">Bancada completa</h2>
            <p className="text-sm text-[#9EC7B5]">
              Material simples e de baixo custo. Os itens em destaque são os usados na etapa atual.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(Object.keys(TOOLS) as ToolId[]).map((id) => {
              const { name, desc, icon: Icon } = TOOLS[id];
              const inUse = !!current && !done && current.tools.includes(id);
              return (
                <div
                  key={id}
                  className={`flex gap-3 p-4 rounded-2xl border transition-colors ${
                    inUse ? 'bg-[#13392C] border-[#FFB938]/60' : 'bg-[#092219] border-[#164939]'
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      inUse ? 'bg-[#FFB938] text-[#161204]' : 'bg-[#0F382A] text-[#86E49E]'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-white">{name}</h3>
                    <p className="text-xs text-[#9EC7B5] leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#143B2E] py-8 text-center text-xs text-[#7B9E8F] bg-[#05120D]">
        <p>Instituto Federal de Santa Catarina · Câmpus Florianópolis · CST em Sistemas de Energia</p>
        <p className="mt-1">Projeto ReLED: Recuperação de Lâmpadas LED · Extensão Universitária</p>
      </footer>
    </div>
  );
};
