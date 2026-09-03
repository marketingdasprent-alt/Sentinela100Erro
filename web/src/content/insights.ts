// FICTÍCIO — 3 artigos de arranque para a secção "Perspetivas", escritos como
// conteúdo editorial genérico (filosofia de investimento, não aconselhamento
// financeiro específico). Substituir/expandir com autoria real antes de publicar.

export type Insight = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  body: string[]; // parágrafos
};

export const insights: Insight[] = [
  {
    slug: "disciplina-em-ciclos-de-volatilidade",
    tag: "Mercados",
    title: "Disciplina em ciclos de volatilidade",
    excerpt:
      "Como mantemos o foco no valor de longo prazo quando o ruído de curto prazo domina as manchetes.",
    date: "2026-08-04",
    readTime: "4 min",
    body: [
      "A volatilidade de curto prazo é, para a maioria dos investidores, o momento em que a disciplina é mais testada — e mais necessária. Quando as manchetes dominam a conversa, a tentação de reagir a cada movimento de mercado cresce, mesmo quando a tese de investimento original permanece intacta.",
      "A nossa abordagem parte de uma distinção simples: separar ruído de sinal. Uma queda generalizada de mercado, motivada por fatores macroeconómicos alheios aos fundamentais de uma posição específica, é ruído. Uma deterioração real na governação, nos resultados ou na posição competitiva de uma participada é sinal — e esse, sim, exige reavaliação.",
      "Esta distinção só é possível quando a tese de investimento é escrita antes da posição ser tomada, com critérios explícitos de saída definidos com antecedência. É essa disciplina — não a ausência de reação, mas a reação fundamentada — que permite atravessar ciclos de volatilidade sem comprometer o horizonte de longo prazo que sustenta o retorno.",
      "Na prática, isto significa revisitar cada posição em queda com a mesma pergunta: o que mudou, de facto, na tese original? Se a resposta for “nada”, a posição mantém-se. Se a resposta for “algo estrutural”, ajusta-se — independentemente do preço de mercado no momento.",
    ],
  },
  {
    slug: "o-que-procuramos-numa-participacao-social",
    tag: "Governação",
    title: "O que procuramos numa participação social",
    excerpt:
      "Os critérios de governação e alinhamento de interesses que pesam em cada decisão de longo prazo.",
    date: "2026-07-18",
    readTime: "5 min",
    body: [
      "Gerir participações sociais é, antes de mais, gerir relações de longo prazo — com gestores, com outros acionistas, com o próprio negócio. Por isso, os critérios que aplicamos antes de assumir uma posição vão além dos números: procuram entender se existe alinhamento genuíno de interesses entre quem gere e quem detém capital.",
      "Três critérios pesam de forma consistente na nossa avaliação. Primeiro, a qualidade e independência da governação — um conselho capaz de questionar a gestão executiva é, na nossa experiência, um dos melhores indicadores de resiliência de longo prazo. Segundo, a transparência na comunicação com acionistas, sobretudo quando os resultados não são os esperados. Terceiro, o horizonte temporal da própria gestão: negócios geridos para o trimestre seguinte tendem a tomar decisões estruturalmente diferentes dos geridos para a década seguinte.",
      "Nenhum destes critérios é, isoladamente, garantia de sucesso. Mas a combinação dos três reduz de forma material o risco de surpresas desagradáveis — que é, no fundo, o que a gestão de participações sociais mais procura evitar antes de procurar multiplicar capital.",
    ],
  },
  {
    slug: "proteger-capital-antes-de-o-multiplicar",
    tag: "Risco",
    title: "Proteger capital antes de o multiplicar",
    excerpt:
      "Porque a gestão de risco vem primeiro na forma como avaliamos qualquer nova posição.",
    date: "2026-06-02",
    readTime: "4 min",
    body: [
      "É comum pensar-se em gestão de risco como um travão à performance — uma camada de burocracia que impede a captura de oportunidades. Na nossa experiência, é o contrário: a disciplina de risco é o que permite manter-se investido tempo suficiente para que o valor de longo prazo se materialize.",
      "Antes de qualquer decisão de alocação, a pergunta que colocamos não é “quanto se pode ganhar”, mas “quanto se pode perder, e em que condições”. Esta inversão de prioridade muda a forma como se dimensiona cada posição: o tamanho de uma aposta não depende só da convicção na tese, mas também da magnitude do impacto se a tese estiver errada.",
      "Esta disciplina aplica-se tanto a carteiras de ações como a participações sociais, ainda que de forma diferente — numa carteira líquida, o risco gere-se sobretudo através de dimensionamento e diversificação; numa participação social, através de governação e dos termos contratuais que protegem a posição minoritária.",
      "O resultado prático é uma carteira que cresce de forma menos espetacular nos períodos favoráveis, mas que evita as perdas irrecuperáveis que, historicamente, são a principal causa de destruição de valor de longo prazo.",
    ],
  },
];
