// Fonte única de verdade para todo o conteúdo do site.
// Nenhuma informação aqui deve ser inventada — apenas dados fornecidos.

export const site = {
  name: "Gabriella Ferreira Schmalh",
  shortName: "Gabriella Ferreira",
  role: "Nutricionista Clínica e Esportiva",
  crn: "CRN-3 68956/P",
  city: "São José dos Campos",
  uf: "SP",
  url: "https://gabriellaferreira.com.br",
  whatsappNumber: "5512992432749",
  whatsappDisplay: "(12) 99243-2749",
  whatsappLink: "https://wa.me/5512992432749",
  email: "gabiferreiranutri@gmail.com",
  instagramHandle: "@gabiferreira.nutri",
  instagramUrl: "https://www.instagram.com/gabiferreira.nutri",
  address: {
    line1: "R. Dr. Orlando Feirabend Filho, 230",
    line2: "Torre B, Sala 402",
    neighborhood: "Jardim Aquarius",
    city: "São José dos Campos - SP",
    zip: "12246-190",
  },
  livesAccompanied: "2.000",
  education: [
    "UNESP",
    "Universidad de Santiago de Compostela",
    "Pós-graduação em Nutrição Clínica Integrativa Funcional",
    "Especialização em Nutrição Esportiva",
  ],
  recognitions: [
    "Nutricionista Destaque SJC 2026",
    "2ª nutricionista mais votada de São José dos Campos",
  ],
} as const;

function whatsappLinkWithText(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const waLinks = {
  default: whatsappLinkWithText(
    "Olá, Gabriella! Encontrei seu site e gostaria de agendar uma consulta."
  ),
  clinica: whatsappLinkWithText(
    "Olá, Gabriella! Vim pelo site e tenho interesse em acompanhamento de nutrição clínica."
  ),
  esportiva: whatsappLinkWithText(
    "Olá, Gabriella! Vim pelo site e tenho interesse em acompanhamento de nutrição esportiva."
  ),
  acompanhamento: whatsappLinkWithText(
    "Olá, Gabriella! Gostaria de entender melhor como funciona o acompanhamento nutricional."
  ),
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Sobre", href: "/sobre" },
  { label: "Especialidades", href: "/especialidades" },
  { label: "Acompanhamento", href: "/acompanhamento" },
  { label: "Clínica", href: "/nutricao-clinica" },
  { label: "Esportiva", href: "/nutricao-esportiva" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Contato", href: "/contato" },
];

export type Specialty = {
  number: string;
  slug: string;
  title: string;
  short: string;
  detail: string;
};

export const specialties: Specialty[] = [
  {
    number: "01",
    slug: "metabolismo",
    title: "Metabolismo",
    short:
      "Entender como o seu corpo processa energia é o ponto de partida de qualquer estratégia nutricional consistente.",
    detail:
      "O metabolismo é influenciado por histórico de saúde, rotina de sono, nível de atividade física, composição corporal e uma série de outros fatores individuais. Antes de qualquer plano alimentar, o trabalho começa por entender como o seu corpo funciona hoje — para então construir uma estratégia realista, sem fórmulas prontas.",
  },
  {
    number: "02",
    slug: "emagrecimento",
    title: "Emagrecimento",
    short:
      "Um processo conduzido com estratégia, consistência e respeito ao tempo do seu corpo — sem extremismo.",
    detail:
      "O emagrecimento é tratado como consequência de um conjunto de ajustes sustentáveis, e não como resultado de restrições extremas ou protocolos genéricos. O acompanhamento considera rotina, preferências alimentares, histórico e objetivos, construindo um caminho que possa ser mantido no longo prazo.",
  },
  {
    number: "03",
    slug: "saude-intestinal",
    title: "Saúde intestinal",
    short:
      "O intestino tem papel central em digestão, absorção de nutrientes e bem-estar geral.",
    detail:
      "Questões como desconforto digestivo, inchaço e irregularidade intestinal costumam estar relacionadas a padrões alimentares e de rotina. A avaliação busca entender esses sinais em contexto, com orientações alimentares individualizadas e, quando pertinente, encaminhamento para investigação complementar.",
  },
  {
    number: "04",
    slug: "composicao-corporal",
    title: "Composição corporal",
    short:
      "Mais do que o número na balança: massa magra, gordura corporal e distribuição importam.",
    detail:
      "O acompanhamento de composição corporal olha para o conjunto — massa muscular, percentual de gordura e evolução ao longo do tempo — como referência para ajustar a estratégia nutricional de forma mais precisa do que o peso isoladamente permitiria.",
  },
  {
    number: "05",
    slug: "performance-esportiva",
    title: "Performance esportiva",
    short:
      "Estratégia alimentar aplicada ao treino, à recuperação e à rotina de quem pratica esporte com regularidade.",
    detail:
      "Para quem treina com constância — do amador ao competitivo —, a alimentação é parte da estratégia de performance: energia disponível para o treino, recuperação muscular, hidratação e ajustes conforme o volume e a intensidade da rotina esportiva.",
  },
  {
    number: "06",
    slug: "qualidade-de-vida",
    title: "Qualidade de vida",
    short:
      "Uma alimentação que sustenta energia, disposição e bem-estar no dia a dia.",
    detail:
      "Nem todo acompanhamento nutricional tem como foco central emagrecimento ou performance. Para muitas pessoas, o objetivo é simplesmente comer melhor, ter mais energia e construir uma relação mais tranquila com a alimentação dentro da rotina real.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Entender",
    description:
      "Uma escuta detalhada sobre histórico de saúde, rotina, objetivos e relação com a alimentação.",
  },
  {
    number: "02",
    title: "Avaliar",
    description:
      "Avaliação da composição corporal e, quando necessário, análise de exames complementares.",
  },
  {
    number: "03",
    title: "Estratégia",
    description:
      "Construção de um plano alimentar individualizado, coerente com a rotina e os objetivos apresentados.",
  },
  {
    number: "04",
    title: "Acompanhar",
    description:
      "Ajustes contínuos ao longo do processo, com acompanhamento próximo após a consulta.",
  },
];

export const acompanhamentoInclui = [
  {
    title: "Consulta de aproximadamente 1h a 1h30",
    description:
      "Tempo dedicado a entender seu histórico, rotina e objetivos com profundidade — sem pressa.",
  },
  {
    title: "Entrevista detalhada",
    description:
      "Levantamento completo de histórico de saúde, hábitos, rotina e relação com a alimentação.",
  },
  {
    title: "Avaliação de composição corporal",
    description:
      "Referência para acompanhar a evolução ao longo do processo, além do peso isolado.",
  },
  {
    title: "Plano alimentar personalizado",
    description:
      "Construído a partir da sua realidade — não de um modelo padronizado.",
  },
  {
    title: "Orientação sobre suplementos, quando necessário",
    description:
      "Indicação apenas quando houver necessidade identificada na avaliação.",
  },
  {
    title: "Avaliação e solicitação de exames, quando necessário",
    description:
      "Para embasar a estratégia nutricional com informações clínicas relevantes.",
  },
  {
    title: "Acompanhamento pós-consulta",
    description:
      "Suporte contínuo para ajustes e dúvidas ao longo do processo.",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqAcompanhamento: FAQItem[] = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira consulta é dedicada a entender seu histórico de saúde, rotina, hábitos alimentares e objetivos em profundidade. É a partir dela que a estratégia nutricional começa a ser construída.",
  },
  {
    question: "O atendimento é presencial ou online?",
    answer:
      "O atendimento acontece em São José dos Campos e também online, conforme a sua disponibilidade e preferência.",
  },
  {
    question: "Quanto tempo dura a consulta?",
    answer: "A consulta tem duração aproximada de 1h a 1h30.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer:
      "Após a primeira consulta, o acompanhamento segue com ajustes ao longo do processo e suporte contínuo, de acordo com a evolução de cada pessoa.",
  },
  {
    question: "A nutrição esportiva também é atendida?",
    answer:
      "Sim. O acompanhamento contempla tanto nutrição clínica quanto nutrição esportiva, para quem pratica atividade física com regularidade.",
  },
  {
    question: "Como agendar?",
    answer:
      "O agendamento pode ser feito diretamente pelo WhatsApp ou pelo formulário de contato do site.",
  },
];

export const faqClinica: FAQItem[] = [
  {
    question: "O acompanhamento serve para qualquer objetivo?",
    answer:
      "O acompanhamento é sempre individualizado. Independentemente do objetivo — metabolismo, emagrecimento, saúde intestinal ou qualidade de vida — a estratégia é construída a partir da sua avaliação específica.",
  },
  {
    question: "Vocês tratam doenças diretamente pela nutrição?",
    answer:
      "O trabalho nutricional atua como parte de uma estratégia de saúde mais ampla, sempre dentro do escopo da nutrição. Quando necessário, há articulação com outros profissionais de saúde.",
  },
  {
    question: "Existe um plano alimentar padrão?",
    answer:
      "Não. Cada plano é construído individualmente, a partir da avaliação, da rotina e dos objetivos apresentados na consulta.",
  },
];

export const faqEsportiva: FAQItem[] = [
  {
    question: "A nutrição esportiva é só para atletas?",
    answer:
      "Não. O acompanhamento esportivo atende desde quem está começando a treinar com regularidade até quem compete — sempre respeitando o nível e os objetivos de cada pessoa.",
  },
  {
    question: "A estratégia muda conforme a modalidade?",
    answer:
      "Sim. Volume de treino, modalidade e objetivos de performance são considerados na construção da estratégia alimentar.",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  readingTime: string;
  featured?: boolean;
};

export const articleCategories = [
  "Metabolismo",
  "Emagrecimento",
  "Saúde intestinal",
  "Performance",
  "Nutrição clínica",
  "Rotina",
] as const;

export const articles: Article[] = [
  {
    slug: "metabolismo-nao-e-so-calorias",
    category: "Metabolismo",
    title: "Por que metabolismo não é apenas uma questão de calorias?",
    excerpt:
      "Reduzir o metabolismo a uma conta de calorias ignora fatores como sono, rotina, histórico de saúde e composição corporal.",
    readingTime: "6 min",
    featured: true,
    body: [
      "É comum ouvir que emagrecer ou ganhar massa é apenas uma questão de \"calorias que entram versus calorias que saem\". Essa conta existe, mas ela é bem mais complexa do que parece — e tratá-la de forma simplista costuma gerar frustração.",
      "O metabolismo é influenciado por diversos fatores: composição corporal, histórico de dietas anteriores, qualidade do sono, nível de estresse, rotina hormonal e nível de atividade física, entre outros. Duas pessoas com o mesmo peso e altura podem ter necessidades energéticas bastante diferentes.",
      "Por isso, protocolos genéricos baseados apenas em fórmulas de calorias tendem a falhar no médio prazo. Um acompanhamento individualizado observa o conjunto — não apenas um número — para construir uma estratégia que realmente faça sentido para o seu corpo.",
      "Entender o próprio metabolismo é o primeiro passo para parar de repetir ciclos de dietas restritivas e começar a construir uma relação mais estável com a alimentação.",
    ],
  },
  {
    slug: "saude-intestinal-sinais-de-atencao",
    category: "Saúde intestinal",
    title: "Saúde intestinal: quando o corpo começa a pedir atenção",
    excerpt:
      "Inchaço, desconforto e irregularidade intestinal costumam ser sinais que merecem investigação — não naturalização.",
    readingTime: "5 min",
    body: [
      "Inchaço abdominal, desconforto após as refeições e irregularidade intestinal são sinais frequentemente naturalizados no dia a dia — como se fizessem parte da rotina de qualquer pessoa. Mas, na maioria das vezes, esses sinais merecem atenção.",
      "A saúde intestinal está diretamente relacionada à forma como o corpo absorve nutrientes, regula a imunidade e até influencia o bem-estar emocional. Padrões alimentares, rotina de hidratação, sono e nível de estresse têm impacto direto nesse equilíbrio.",
      "Uma avaliação nutricional cuidadosa busca entender esses sinais dentro do contexto de vida de cada pessoa, com ajustes alimentares individualizados. Quando necessário, a investigação é complementada com exames e outros profissionais de saúde.",
      "Prestar atenção a esses sinais não é alarmismo — é parte de cuidar da saúde de forma mais completa.",
    ],
  },
  {
    slug: "alimentacao-saudavel-cabe-na-rotina",
    category: "Rotina",
    title: "Uma alimentação saudável precisa caber na sua rotina",
    excerpt:
      "Planos alimentares que ignoram a rotina real de quem os segue dificilmente se sustentam no tempo.",
    readingTime: "5 min",
    body: [
      "Um plano alimentar tecnicamente perfeito, mas incompatível com a rotina de quem vai segui-lo, tende a durar pouco. Trabalho, família, deslocamento, sono e disponibilidade financeira são variáveis reais — e precisam ser consideradas na construção da estratégia nutricional.",
      "Isso não significa abrir mão de critério técnico. Significa traduzir esse critério em algo aplicável: refeições possíveis de preparar, opções para dias mais corridos e flexibilidade para imprevistos.",
      "A consistência ao longo do tempo é mais determinante para os resultados do que a rigidez em curtos períodos. Por isso, entender a rotina de cada pessoa é uma etapa tão importante quanto qualquer cálculo nutricional.",
      "Uma alimentação sustentável é aquela que continua fazendo sentido mesmo nas semanas mais cheias.",
    ],
  },
  {
    slug: "performance-esportiva-comeca-na-alimentacao",
    category: "Performance",
    title: "Performance esportiva também começa na alimentação",
    excerpt:
      "Energia para treinar, recuperação muscular e consistência dependem de uma estratégia alimentar bem construída.",
    readingTime: "6 min",
    body: [
      "Quem treina com regularidade sabe que o resultado de um treino não depende só do que acontece durante a sessão. A energia disponível antes, a recuperação depois e a consistência ao longo das semanas têm relação direta com a alimentação.",
      "Isso vale tanto para quem está começando a se exercitar com constância quanto para atletas em busca de performance. A estratégia alimentar precisa considerar volume de treino, modalidade, rotina de sono e objetivos específicos.",
      "Hidratação, timing das refeições em relação ao treino e recuperação muscular são elementos que, quando bem ajustados, sustentam a evolução no esporte de forma mais consistente.",
      "Performance não é sobre um único treino perfeito — é sobre construir uma rotina que sustente a evolução ao longo do tempo, e a alimentação faz parte dessa base.",
    ],
  },
  {
    slug: "sem-terrorismo-alimentar",
    category: "Nutrição clínica",
    title:
      "Sem terrorismo alimentar: o que significa uma nutrição mais estratégica?",
    excerpt:
      "Uma abordagem nutricional pode ser rigorosa tecnicamente sem recorrer a medo, culpa ou proibições generalizadas.",
    readingTime: "5 min",
    body: [
      "É comum associar disciplina alimentar a listas de proibições, medo de determinados alimentos e culpa após \"escapadas\". Essa lógica, conhecida como terrorismo alimentar, costuma gerar mais ansiedade do que resultado.",
      "Uma abordagem nutricional estratégica parte de outro lugar: entender o contexto de cada pessoa, hierarquizar o que realmente importa e construir hábitos sustentáveis — sem transformar a alimentação em fonte constante de culpa.",
      "Isso não significa ausência de critério técnico. Significa aplicar esse critério com equilíbrio, priorizando consistência ao longo do tempo em vez de perfeição em curtos períodos.",
      "Uma relação mais tranquila com a comida não é incompatível com resultado — pelo contrário, costuma ser o que sustenta o resultado no longo prazo.",
    ],
  },
  {
    slug: "alimentacao-sustentavel-no-dia-a-dia",
    category: "Emagrecimento",
    title: "Como construir uma alimentação sustentável no dia a dia",
    excerpt:
      "Pequenos ajustes consistentes tendem a sustentar resultados mais do que mudanças radicais e temporárias.",
    readingTime: "6 min",
    body: [
      "Mudanças alimentares radicais costumam gerar resultados rápidos — e igualmente rápidos de se perder. Isso acontece porque esse tipo de mudança raramente é sustentável dentro da rotina real de quem a segue.",
      "Construir uma alimentação sustentável passa por ajustes graduais: entender quais mudanças são possíveis de manter, respeitar preferências alimentares e considerar o tempo disponível para preparo das refeições.",
      "Esse processo também envolve reconhecer que nem toda semana será igual — e que isso faz parte de uma rotina real. O objetivo não é a perfeição, mas a consistência possível ao longo do tempo.",
      "Um acompanhamento nutricional individualizado ajuda a identificar quais ajustes fazem sentido para a sua vida — e não para um modelo genérico de dieta.",
    ],
  },
];
