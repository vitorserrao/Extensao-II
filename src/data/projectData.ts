import { CollectionPoint, LedComponentAnatomy, RepairGuideStep } from '../types';

export const initialImpactData = {
  coletadas: 1420,
  recuperadas: 1186,
  reutilizadas: 940,
  residuosEvitadosKg: 148,
};

export const collectionPointsData: CollectionPoint[] = [
  {
    id: 'ifsc-fln-central',
    name: 'IFSC Campus Florianópolis (Mauro Ramos)',
    campus: 'Florianópolis - Mauro Ramos',
    address: 'Av. Mauro Ramos, 950 - Centro',
    city: 'Florianópolis - SC',
    schedule: 'Segunda a Sexta: 08h às 19h',
    room: 'Hall de Entrada & Laboratório de Sistemas de Energia (Bloco Eletrotécnica)',
    contactEmail: 'reacende.fln@ifsc.edu.br',
    status: 'Ativo',
  },
  {
    id: 'ifsc-sao-jose',
    name: 'IFSC Campus São José',
    campus: 'São José - Praia Comprida',
    address: 'R. José Lino Kretzer, 608 - Praia Comprida',
    city: 'São José - SC',
    schedule: 'Segunda a Sexta: 08h às 18h',
    room: 'Bancada de Triagem dos Laboratórios de Telecom e Elétrica',
    contactEmail: 'reacende.sj@ifsc.edu.br',
    status: 'Ativo',
  },
  {
    id: 'ifsc-palhoca',
    name: 'IFSC Campus Palhoça Bilíngue',
    campus: 'Palhoça - Pedra Branca',
    address: 'R. João Pereira dos Santos, 303 - Pedra Branca',
    city: 'Palhoça - SC',
    schedule: 'Segunda a Sexta: 09h às 17h',
    room: 'Ponto de Coleta e Triagem - Bloco A',
    contactEmail: 'reacende.palhoca@ifsc.edu.br',
    status: 'Em implantação',
  },
  {
    id: 'centro-comunitario-costeira',
    name: 'Associação Comunitária Parceira',
    campus: 'Costeira do Pirajubaé',
    address: 'Av. Jorge Lacerda, 1420 - Costeira',
    city: 'Florianópolis - SC',
    schedule: 'Terças e Quintas: 14h às 17h',
    room: 'Caixa de Coleta e Balcão de Apoio Comunitário',
    contactEmail: 'comunidade.reacende@ifsc.edu.br',
    status: 'Em implantação',
  },
];

export const anatomyComponents: LedComponentAnatomy[] = [
  {
    id: 'leds',
    name: 'Placa de LEDs SMD (Diodos emissores)',
    failureRate: '75% dos defeitos diagnosticados',
    reusableRate: '92% dos semicondutores íntegros',
    role: 'Conjunto de chips emissores de luz (pacotes SMD 2835 ou 5730) ligados eletricamente em série sobre placa circular de alumínio.',
    diagnostic: 'Em 3 de cada 4 lâmpadas que chegam à nossa bancada, apenas 1 LED falhou (com o ponto preto característico de queima). Como o circuito é em série, a interrupção de um diodo impede a circulação de corrente para todos os demais.',
    repairMethod: 'Remoção do chip avariado e execução de jumper com solda de estanho de alta condutividade ou substituição do SMD através de ferro e ar quente.'
  },
  {
    id: 'driver',
    name: 'Driver de Corrente Constante (Conversor AC/DC)',
    failureRate: '18% dos casos',
    reusableRate: '82% recuperável',
    role: 'Converte a corrente alternada da rede (127V/220V) em corrente contínua estabilizada (DC) dimensionada para a corrente de trabalho dos LEDs.',
    diagnostic: 'Verificação com multímetro: danos frequentes no capacitor eletrolítico de alta tensão (topo estufado/seco), abertura do resistor fusor de entrada ou queima de diodos na ponte retificadora.',
    repairMethod: 'Substituição pontual do capacitor eletrolítico de alta tensão (mínimo 400V) ou resistor fusível por peças de doadoras em perfeito estado.'
  },
  {
    id: 'heatsink',
    name: 'Dissipador Térmico de Alumínio',
    failureRate: '0% de falha funcional',
    reusableRate: '100% reutilizável',
    role: 'Estrutura metálica de alumínio injetado ou extrudado que dissipa o calor gerado pela junção semicondutora p-n dos LEDs.',
    diagnostic: 'Componente passivo e permanente. O problema comum é a dessecação da camada intermediária de pasta térmica após milhares de horas em operação.',
    repairMethod: 'Limpeza minuciosa dos resíduos antigos com álcool isopropílico e reaplicação uniforme de pasta térmica de silicone e óxido de zinco.'
  },
  {
    id: 'diffuser',
    name: 'Bulbo Difusor de Policarbonato',
    failureRate: '5% (trinca mecânica externa)',
    reusableRate: '95% reutilizável',
    role: 'Cúpula termoplástica opalescente que distribui o feixe luminoso isotropicamente e protege o usuário do contato com a tensão de rede.',
    diagnostic: 'Fixado por estrias plásticas ou cordão fino de silicone. Permanece intacto na imensa maioria das lâmpadas descartadas.',
    repairMethod: 'Desencaixe perimetral controlado com espátula de nylon e posterior recravamento com vedante neutro de bancada.'
  },
  {
    id: 'base',
    name: 'Base Metálica Rosca Edison E27',
    failureRate: '2% (oxidação ou solda fria)',
    reusableRate: '98% reutilizável',
    role: 'Interface mecânica e elétrica padronizada de rosca com contato central de fase/neutro.',
    diagnostic: 'Teste de continuidade entre o contato central, a rosca lateral e os pinos condutores isolados que alimentam o circuito do driver.',
    repairMethod: 'Remoção de camada superficial de óxido e ressoldagem dos fios internos nas ilhós de conexão rápida.'
  }
];

export const repairSteps: RepairGuideStep[] = [
  {
    number: '01',
    title: 'Segurança Elétrica Indispensável (Norma NR-10)',
    category: 'seguranca',
    description: 'NUNCA realize intervenções com a lâmpada rosqueada no soquete ou ligada à tomada. Antes de tocar nos terminais internos, certifique-se de que o capacitor do driver está completamente descarregado encostando um resistor de 10kΩ ou ponta de prova isolada entre os terminais. Utilize óculos de proteção EPI durante toda a permanência na bancada.',
    tools: ['Óculos de proteção EPI', 'Bancada eletricamente isolada', 'Ponta isolada para descarga de capacitor'],
    warning: 'Risco de choque elétrico severo caso a lâmpada esteja energizada ou o capacitor de alta tensão retido!',
    proTip: 'Aguarde ao menos 2 minutos após desligar qualquer dispositivo de teste antes de tocá-lo com as mãos.'
  },
  {
    number: '02',
    title: 'Abertura Mecânica e Triagem Visual',
    category: 'diagnostico',
    description: 'Com uma espátula plástica rígida, insira a ponta na linha de junção entre o bulbo translúcido e a carcaça de alumínio. Percorra o perímetro rompendo o selante leve de fábrica. Sob iluminação de bancada, examine a placa de circuito impresso circular à procura de sinais evidentes de queima.',
    tools: ['Espátula plástica', 'Luminária de bancada LED', 'Lupa com iluminação auxiliar'],
    proTip: 'Identifique imediatamente o ponto preto milimétrico no centro do fósforo amarelo de um dos chips SMD: esse é o ponto clássico de fusão interna do LED.'
  },
  {
    number: '03',
    title: 'Diagnóstico com Multímetro na Escala de Diodo',
    category: 'diagnostico',
    description: 'Configure o multímetro digital na escala de teste de diodo/continuidade. Posicione as pontas agulhadas nos terminais anodo e catodo de cada LED individualmente. O multímetro injeta ~2,5V de prova: LEDs saudáveis acendem com leve brilho âmbar/branco. O LED queimado não apresentará luminescência e indicará circuito aberto (OL).',
    tools: ['Multímetro digital com teste de semicondutores', 'Pontas de prova agulhadas finas'],
    proTip: 'Em placas com LEDs de 6V ou 9V (múltiplas junções internas), usamos uma fonte DC regulada em 6V com resistor limitador de 470Ω em série.'
  },
  {
    number: '04',
    title: 'Intervenção Técnica: Jumper de Solda ou Troca SMD',
    category: 'intervencao',
    description: 'Com uma pinça fina, retire o corpo plástico do LED carbonizado, expondo os dois pads de cobre condutores sobre a chapa de alumínio. Aqueça a ponta do ferro de solda a 350°C, aplique fluxo e una os dois pads com uma gota uniforme de estanho de alta condutividade para restabelecer a continuidade do circuito série.',
    tools: ['Ferro de solda regulado a 350°C', 'Fio de solda estanho com fluxo de resina', 'Pinça metálica de precisão'],
    proTip: 'A placa dissipa muito calor devido ao alumínio traseiro. Mantenha a ponta do ferro firme no contato por 3 a 4 segundos para fusão perfeita da solda.'
  },
  {
    number: '05',
    title: 'Inspeção do Driver e Substituição de Componentes',
    category: 'intervencao',
    description: 'Caso todos os LEDs estejam acendendo no multímetro, a falha reside no conversor (driver). Verifique se o capacitor eletrolítico cilíndrico está estufado no topo ou se o resistor de proteção de entrada (fusível) abriu. Substitua por componente idêntico extraído de lâmpada doadora do mesmo lote.',
    tools: ['Sugador de solda a vácuo', 'Capacitor eletrolítico 400V de reposição', 'Alicate de corte rente'],
    proTip: 'Observe rigorosamente a tarja negativa indicada no corpo do capacitor eletrolítico para não inverter a polaridade na placa.'
  },
  {
    number: '06',
    title: 'Bancada de Testes com Lâmpada Série e Selagem',
    category: 'teste',
    description: 'Antes de fechar a cúpula, ligue a lâmpada em soquete de bancada protegido com lâmpada incandescente série de 60W (proteção contra curto-circuito). Verifique o acendimento instantâneo e meça a temperatura de estabilização da carcaça com pirômetro óptico por 15 minutos contínuos. Aprovada, fecha-se o difusor.',
    tools: ['Circuito de teste com lâmpada série', 'Termômetro infravermelho de bancada', 'Silicone neutro de vedação'],
    proTip: 'A temperatura na carcaça metálica deve se manter abaixo de 68°C. Todas as unidades aprovadas recebem a chancela do Projeto REACENDE / IFSC.'
  }
];

export const extensionPillars = [
  {
    title: 'IFSC',
    description: 'Instituto Federal de Santa Catarina. O Curso Superior de Tecnologia em Sistemas de Energia disponibiliza laboratórios, bancadas de ensaios e orientação docente.'
  },
  {
    title: 'Conhecimento',
    description: 'Eletroeletrônica de potência, circuitos em série, semicondutores optoeletrônicos, ensaios térmicos e normas de segurança elétrica (NR-10).'
  },
  {
    title: 'Estudantes',
    description: 'Nós, estudantes de Sistemas de Energia, assumimos as bancadas: triamos, testamos diodo a diodo, soldamos e registramos os dados de cada equipamento.'
  },
  {
    title: 'Aplicação prática',
    description: 'A bancada é nosso ambiente de investigação empírica. Não apenas recuperamos um circuito: investigamos as causas reais da obsolescência prematura.'
  },
  {
    title: 'Comunidade',
    description: 'Moradores, associações de bairro e escolas públicas trazem suas lâmpadas defeituosas e recebem de volta luminárias testadas e com luz garantida.'
  },
  {
    title: 'Impacto',
    description: 'Menos lixo eletrônico, menos mineração de novos materiais e mais iluminação pública e social de qualidade pelo mesmo recurso.'
  }
];

