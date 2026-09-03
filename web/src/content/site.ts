// Dados institucionais centrais do site.
// IMPORTANTE: morada, telefone, e-mail e domínio replicam os já confirmados no site
// estático original. Tudo o resto marcado FICTÍCIO abaixo (equipa, números) é
// placeholder a substituir por dados reais antes de publicar — ver PRODUCTION_BRIEF.md.

export const site = {
  name: "SENTINELA100ERRO",
  legalName: "SENTINELA100ERRO — SGPS, Unipessoal Lda.",
  tagline: "Equity Portfolio Management",
  description:
    "SENTINELA100ERRO — SGPS. Gestão de carteiras de ações e de participações sociais, com rigor e visão de longo prazo.",
  domain: "sentinela100erro.pt",
  url: "https://sentinela100erro.pt",
  phone: "+351 910 205 029",
  phoneHref: "tel:+351910205029",
  email: "geral@sentinela100erro.pt",
  address: {
    street: "Rua Castilho, 14C, 5",
    postal: "1250-069",
    city: "Lisboa",
    country: "PT",
    full: "Rua Castilho, 14C, 5, 1250-069 Lisboa",
    mapsUrl: "https://maps.google.com/?q=Rua+Castilho+14C+5+1250-069+Lisboa",
  },
  plausibleDomain: "sentinela100erro.pt",
} as const;

export const nav = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/equipa", label: "Equipa" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/perspetivas", label: "Perspetivas" },
  { href: "/contactos", label: "Contactos" },
] as const;
