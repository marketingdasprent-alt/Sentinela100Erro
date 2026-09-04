// FICTÍCIO — placeholder até haver dados reais da equipa (ver checklist no
// PRODUCTION_BRIEF.md). Propositadamente sem fotografia: em vez de associar o
// rosto de uma pessoa real (banco de imagens) a um nome e função fictícios,
// usam-se iniciais — mesma solução do site estático original.

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bioShort: string;
  bioLong: string;
};

export const team: TeamMember[] = [
  {
    slug: "miguel-castro",
    name: "Miguel Castro",
    role: "Sócio-gerente",
    initials: "MC",
    bioShort:
      "Percurso em mercados de capitais europeus, com foco em equity e alocação disciplinada.",
    bioLong:
      "Miguel lidera a estratégia de investimento da SENTINELA100ERRO, com um percurso construído em mercados de capitais europeus. A sua abordagem assenta em alocação disciplinada e numa leitura de longo prazo sobre ciclos de mercado, privilegiando convicção sobre dispersão em cada posição assumida.",
  },
  {
    slug: "beatriz-nogueira",
    name: "Beatriz Nogueira",
    role: "Diretora de Investimentos",
    initials: "BN",
    bioShort:
      "Lidera a análise fundamental e a construção de carteiras orientadas para o valor.",
    bioLong:
      "Beatriz é responsável pela análise fundamental que sustenta cada decisão de investimento, e pela construção de carteiras orientadas para o valor. Trabalha de perto com a equipa de risco para garantir que cada posição tem uma tese clara e mensurável.",
  },
  {
    slug: "rui-falcao",
    name: "Rui Falcão",
    role: "Gestão de Risco",
    initials: "RF",
    bioShort:
      "Responsável pela monitorização contínua e proteção de capital em todas as posições.",
    bioLong:
      "Rui garante que a proteção de capital é considerada antes de qualquer decisão de alocação. A sua função é monitorizar continuamente o perfil de risco de cada posição e da carteira como um todo, funcionando como o contrapeso disciplinado às convicções de investimento.",
  },
  {
    slug: "ines-salgado",
    name: "Inês Salgado",
    role: "Relações Institucionais",
    initials: "IS",
    bioShort:
      "Ponto de contacto para parceiros, participadas e relações de longo prazo.",
    bioLong:
      "Inês é o ponto de contacto entre a SENTINELA100ERRO e os seus parceiros, participadas e demais interlocutores institucionais, assegurando uma comunicação clara e uma relação de confiança construída ao longo do tempo.",
  },
];
