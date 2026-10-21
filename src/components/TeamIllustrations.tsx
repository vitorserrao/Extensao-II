import React from 'react';

/**
 * Ilustrações da seção "Quem faz acontecer".
 * Desenho plano, nas cores do site, mostrando de forma direta o papel de cada grupo:
 * estudantes na bancada, professores orientando e a comunidade entregando lâmpadas.
 */

const C = {
  bg: '#EBF7ED',
  bg2: '#DCEFE0',
  green: '#2F9E41',
  greenDark: '#1E6B2C',
  dark: '#0D241C',
  amber: '#FFB938',
  amberDark: '#9A6700',
  white: '#FFFFFF',
  line: '#D5E2D6',
  metal: '#C9D3CC',
  metalDark: '#8FA197',
  skin: '#E8B98F',
  skin2: '#C98E62',
  hair: '#2B2420',
};

/** Pessoa simples (vista de frente ou de costas), sem rosto detalhado */
const Person: React.FC<{ x: number; y: number; shirt: string; skin?: string; back?: boolean; scale?: number }> = ({
  x,
  y,
  shirt,
  skin = C.skin,
  back = false,
  scale = 1,
}) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M -30 70 Q -30 20 0 18 Q 30 20 30 70 Z" fill={shirt} />
    <rect x={-6} y={6} width={12} height={14} rx={4} fill={skin} />
    <circle cx={0} cy={-6} r={17} fill={skin} />
    {back ? (
      <path d="M -17 -6 Q -18 -26 0 -25 Q 18 -26 17 -6 Q 12 4 0 4 Q -12 4 -17 -6 Z" fill={C.hair} />
    ) : (
      <path d="M -17 -8 Q -16 -26 0 -25 Q 16 -26 17 -8 Q 10 -16 -2 -15 Q -10 -14 -17 -8 Z" fill={C.hair} />
    )}
  </g>
);

const Frame: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label={title}>
    <title>{title}</title>
    <rect width="400" height="300" fill={C.bg} />
    {/* quadriculado leve, como o fundo do site */}
    <g stroke={C.bg2} strokeWidth="1">
      {Array.from({ length: 17 }, (_, i) => (
        <line key={`v${i}`} x1={i * 25} y1={0} x2={i * 25} y2={300} />
      ))}
      {Array.from({ length: 13 }, (_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 25} x2={400} y2={i * 25} />
      ))}
    </g>
    {children}
  </svg>
);

/* 1 — Estudantes testando uma lâmpada na bancada */
export const StudentsIllustration: React.FC = () => (
  <Frame title="Ilustração: estudantes na bancada testando os LEDs de uma lâmpada com o multímetro">
    {/* estudantes atrás da bancada */}
    <Person x={135} y={150} shirt={C.green} />
    <Person x={290} y={146} shirt={C.dark} skin={C.skin2} />

    {/* bancada */}
    <rect x={20} y={214} width={360} height={16} rx={4} fill={C.dark} />
    <rect x={40} y={230} width={12} height={60} fill={C.dark} />
    <rect x={348} y={230} width={12} height={60} fill={C.dark} />

    {/* lâmpada aberta sobre a bancada: corpo + placa com LEDs */}
    <path d="M 168 214 L 232 214 L 222 182 L 178 182 Z" fill={C.metal} stroke={C.metalDark} strokeWidth="2" />
    <ellipse cx={200} cy={180} rx={34} ry={9} fill={C.white} stroke={C.metalDark} strokeWidth="2" />
    {[178, 189, 200, 211, 222].map((cx, i) => (
      <circle key={cx} cx={cx} cy={180} r={3.6} fill={i === 3 ? C.dark : C.amber} />
    ))}

    {/* multímetro */}
    <rect x={270} y={160} width={56} height={54} rx={7} fill={C.amber} stroke={C.amberDark} strokeWidth="2" />
    <rect x={278} y={168} width={40} height={18} rx={3} fill={C.dark} />
    <text x={298} y={181} textAnchor="middle" fontSize="11" fontWeight="bold" fill={C.amber} fontFamily="monospace">2.6V</text>
    <circle cx={298} cy={200} r={7} fill={C.white} stroke={C.amberDark} strokeWidth="2" />
    {/* pontas de prova até o LED */}
    <path d="M 284 214 C 270 240, 230 236, 212 186" stroke="#DC2626" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M 312 214 C 300 246, 236 244, 223 186" stroke={C.dark} strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* ferro de solda no suporte */}
    <path d="M 34 214 L 46 200 L 58 214" stroke={C.metalDark} strokeWidth="3" fill="none" />
    <rect x={30} y={196} width={46} height={9} rx={4.5} fill={C.greenDark} />
    <line x1={76} y1={200.5} x2={98} y2={200.5} stroke={C.metalDark} strokeWidth="3" strokeLinecap="round" />
    <path d="M 30 200 C 18 204 16 212 22 214" stroke={C.dark} strokeWidth="2" fill="none" />

    {/* destaque: LED queimado encontrado */}
    <circle cx={211} cy={180} r={9} fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />
  </Frame>
);

/* 2 — Professor explicando o circuito em série */
export const TeachersIllustration: React.FC = () => (
  <Frame title="Ilustração: professor explicando no quadro como os LEDs ficam ligados em série">
    {/* quadro */}
    <rect x={40} y={40} width={250} height={150} rx={8} fill={C.white} stroke={C.dark} strokeWidth="4" />
    <text x={58} y={66} fontSize="14" fontWeight="bold" fill={C.dark} fontFamily="'Open Sans', sans-serif">LEDs em série</text>

    {/* circuito: fonte + 4 LEDs + retorno */}
    <g stroke={C.dark} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 70 150 L 70 100 L 270 100 L 270 150 L 70 150" />
    </g>
    {/* fonte */}
    <rect x={62} y={115} width={16} height={22} fill={C.white} />
    <line x1={60} y1={120} x2={80} y2={120} stroke={C.dark} strokeWidth="3" />
    <line x1={64} y1={130} x2={76} y2={130} stroke={C.dark} strokeWidth="3" />
    {/* LEDs (triângulo + barra) */}
    {[110, 155, 200, 245].map((x, i) => (
      <g key={x}>
        <rect x={x - 12} y={92} width={24} height={16} fill={C.white} />
        <path d={`M ${x - 8} 92 L ${x - 8} 108 L ${x + 6} 100 Z`} fill={i === 2 ? C.white : C.amber} stroke={C.dark} strokeWidth="2.5" strokeLinejoin="round" />
        <line x1={x + 7} y1={91} x2={x + 7} y2={109} stroke={C.dark} strokeWidth="2.5" />
        {i === 2 && (
          <g stroke="#DC2626" strokeWidth="3" strokeLinecap="round">
            <line x1={x - 10} y1={80} x2={x + 8} y2={120} />
            <line x1={x + 8} y1={80} x2={x - 10} y2={120} />
          </g>
        )}
      </g>
    ))}
    {/* nota: jumper */}
    <path d="M 186 132 Q 200 146 214 132" stroke={C.green} strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x={200} y={170} textAnchor="middle" fontSize="12" fontWeight="bold" fill={C.green} fontFamily="'Open Sans', sans-serif">jumper</text>

    {/* professor apontando */}
    <Person x={335} y={176} shirt={C.greenDark} skin={C.skin2} />
    <path d="M 312 200 L 280 150" stroke={C.greenDark} strokeWidth="12" strokeLinecap="round" />
    <line x1={280} y1={150} x2={232} y2={118} stroke={C.amberDark} strokeWidth="3" strokeLinecap="round" />

    {/* estudantes de costas */}
    <Person x={110} y={262} shirt={C.green} back scale={0.9} />
    <Person x={200} y={266} shirt={C.amber} back scale={0.9} />
  </Frame>
);

/* 3 — Comunidade entregando lâmpadas no ponto de coleta */
export const CommunityIllustration: React.FC = () => (
  <Frame title="Ilustração: pessoas da comunidade deixando lâmpadas queimadas no ponto de coleta">
    {/* prédio / campus ao fundo */}
    <rect x={250} y={60} width={120} height={150} rx={4} fill={C.white} stroke={C.line} strokeWidth="2" />
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={266 + c * 34} y={78 + r * 36} width={20} height={22} rx={2} fill={C.bg2} />)
    )}
    <rect x={334} y={180} width={28} height={30} fill={C.green} />

    {/* chão */}
    <rect x={0} y={250} width={400} height={50} fill={C.bg2} />

    {/* caixa de coleta */}
    <rect x={150} y={168} width={100} height={84} rx={8} fill={C.green} />
    <rect x={164} y={160} width={72} height={14} rx={4} fill={C.greenDark} />
    <rect x={176} y={164} width={48} height={5} rx={2} fill={C.dark} />
    <text x={200} y={208} textAnchor="middle" fontSize="13" fontWeight="bold" fill={C.white} fontFamily="'Open Sans', sans-serif">COLETA</text>
    {/* ícone de lâmpada na caixa */}
    <circle cx={200} cy={228} r={9} fill={C.amber} />
    <rect x={195} y={236} width={10} height={6} rx={1.5} fill={C.white} />

    {/* lâmpadas caindo na caixa */}
    {[
      { x: 186, y: 128, r: -15 },
      { x: 212, y: 108, r: 12 },
    ].map((l, i) => (
      <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r})`}>
        <circle r={10} fill={C.white} stroke={C.metalDark} strokeWidth="2" />
        <rect x={-6} y={8} width={12} height={10} rx={2} fill={C.metal} stroke={C.metalDark} strokeWidth="1.5" />
      </g>
    ))}
    <path d="M 200 140 L 200 156" stroke={C.green} strokeWidth="2" strokeDasharray="3 4" />

    {/* pessoas trazendo lâmpadas */}
    <Person x={80} y={192} shirt={C.amber} />
    <g transform="translate(116 196) rotate(10)">
      <circle r={9} fill={C.white} stroke={C.metalDark} strokeWidth="2" />
      <rect x={-5} y={7} width={10} height={8} rx={2} fill={C.metal} />
    </g>
    <Person x={292} y={206} shirt={C.dark} skin={C.skin2} scale={0.95} />
    <g transform="translate(258 214) rotate(-12)">
      <circle r={9} fill={C.white} stroke={C.metalDark} strokeWidth="2" />
      <rect x={-5} y={7} width={10} height={8} rx={2} fill={C.metal} />
    </g>

    {/* marcador de mapa */}
    <g transform="translate(60 70)">
      <path d="M 0 0 C -18 0 -22 22 0 44 C 22 22 18 0 0 0 Z" fill={C.amber} stroke={C.amberDark} strokeWidth="2" />
      <circle cx={0} cy={16} r={7} fill={C.white} />
    </g>
  </Frame>
);
