# SENTINELA100ERRO — Prompt de construção do site em produção

> Este documento é um prompt autossuficiente. Cola-o inteiro numa conversa nova (comigo
> ou noutro agente) quando quiseres arrancar a construção — não depende do histórico
> desta conversa para fazer sentido.

## Objetivo

Substituir o site atual ("cartão de visita" / *coming soon*, em `index.html` estático)
por um site institucional de produção completo para a **SENTINELA100ERRO — SGPS,
Unipessoal Lda.**, gestora de participações sociais e carteiras de ações sediada em
Lisboa.

## O que já existe e deve ser aproveitado (não redesenhar do zero)

O site atual em `C:\Users\Pichau\Documents\GitHub\Sentinela100Erro-main` já passou por
duas rondas de trabalho e contém decisões válidas que devem migrar para a versão nova:

- **Sistema de design**: tokens em `styles.css` (`:root`) — paleta monocromática
  (`--ink #0a0a0a`, `--paper #f3f2ef`) com gradiente de destaque azul→verde-esmeralda
  (`--accent-a #2f6bff`, `--accent-b #0c7a5a` — **já ajustado para passar WCAG AA**,
  não reverter para o verde-menta original `#12b886`, que falha contraste). Escala de
  espaçamento em `clamp()`, raio `18px`, easings customizados.
- **Tokens de cor de texto secundário**: `--muted #666666` e `--muted-2 #7d7d7d` (fundos
  claros) vs `--muted-2-dark #9a9a9a` (fundos escuros — secções "Abordagem" e
  "Contactos") — esta separação existe porque a mesma cor não passa WCAG AA nos dois
  contextos simultaneamente. Preservar a lógica, não o token único.
- **Acessibilidade**: estados `:focus-visible` com anel azul (branco em secções escuras),
  `prefers-reduced-motion` respeitado em todas as animações, cursor customizado que
  esconde corretamente o cursor nativo (`cursor:none` só quando o JS confirma que está
  ativo — ver `script.js`).
- **Segurança**: cabeçalhos CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy já
  definidos em `server.js` — replicar equivalente em produção (ver secção Hosting).
- **SEO técnico**: canonical, Open Graph com imagem absoluta, Twitter Card, JSON-LD
  `Organization`, `sitemap.xml`, `robots.txt`. Domínio assumido: `sentinela100erro.pt`
  (placeholder — confirmar antes de publicar).
- **Imagens**: as 3 fotos em uso têm originais em alta resolução guardados em
  `images/originals/` — usar como fonte para reexportar, não os ficheiros grandes
  diretamente. Já existem variantes WebP/JPG em 3 tamanhos cada.
- **Copy institucional**: texto de "Sobre", os 4 princípios de "Abordagem" e as 3 fases
  de "Processo" já foram escritos e aprovados neste projeto — reaproveitar tal e qual,
  não reescrever.
- **`privacidade.html`**: política de privacidade RGPD já redigida — adaptar ao novo
  formulário de contacto (que vai passar a recolher dados pessoais, o que a versão atual
  explicitamente diz que não acontece).

## Stack técnica (decidida)

- **Framework**: **Next.js (App Router), React 18+.** Não uma SPA em Vite/CRA puro —
  este site depende de meta tags Open Graph e conteúdo indexável por motores de busca e
  crawlers de redes sociais, que não executam JavaScript; por isso as páginas de
  marketing/conteúdo têm de ser geradas estaticamente ou renderizadas no servidor
  (`generateStaticParams` / SSG onde possível), não client-side only.
- **Estilo**: CSS simples — sem Tailwind, sem CSS-in-JS. Um ficheiro global com os tokens
  (`:root` variables, migrado de `styles.css`) + CSS Modules por componente
  (`Componente.module.css`) para evitar colisão de classes sem introduzir uma
  dependência de build extra.
- **Conteúdo de "Perspetivas" (blog/insights)**: ficheiros **MDX** dentro do repositório
  (`content/insights/*.mdx`), não um CMS externo — não há ainda volume de conteúdo que
  justifique a complexidade/custo de um Sanity/Contentful. Estruturar de forma que migrar
  para um CMS headless mais tarde seja uma troca de camada de dados, não uma reescrita.
- **Formulário de contacto**: Next.js Route Handler (`app/api/contact/route.ts`) que
  envia via **Resend** (ou Formspree se preferirem zero backend próprio) — sem base de
  dados própria, sem armazenar submissões além do necessário para reenvio em caso de
  falha.
- **Analytics**: **Plausible** (ou Fathom) — sem cookies, sem banner de consentimento
  necessário, contrariamente a Google Analytics.
- **Hosting**: **Vercel** — zero-config para Next.js, deploy automático por push,
  preview por PR. (Alternativa equivalente: Netlify, se preferirem por alguma razão de
  billing/organização.)
- **Cabeçalhos de segurança**: recriar o CSP/X-Frame-Options/Referrer-Policy/
  Permissions-Policy atuais via `next.config.js` → `headers()`, ajustando `script-src`
  e `connect-src` para incluir o domínio do Plausible e do serviço de formulário.

## Arquitetura de informação (páginas)

| Rota | Conteúdo | Nota |
|---|---|---|
| `/` | Home institucional | Reaproveita hero, sobre, serviços, abordagem, processo, números (com dados reais) |
| `/equipa` | Equipa completa | Página própria, não só secção da home — permite bios mais longas |
| `/servicos` ou `/servicos/[slug]` | Detalhe por área de atuação | Decidir se as 3 áreas (Carteiras de ações / Participações sociais / Gestão de ativos) justificam páginas próprias ou ficam só na home |
| `/perspetivas` + `/perspetivas/[slug]` | Listagem + artigo individual | Alimentado pelos ficheiros MDX |
| `/contactos` | Formulário + morada + mapa | Substitui o `mailto:`/`tel:` único por formulário real |
| `/privacidade` | Política RGPD atualizada | Migrar de `privacidade.html` |
| `/termos` | Novo — termos de uso | Não existe ainda, avaliar se é necessário dado o formulário novo |

## Fases de execução (ordem pensada para não haver retrabalho)

**Fase 0 — Levantamento de conteúdo (bloqueante, ver checklist abaixo).**
Sem isto, dá para avançar com Fase 1 em paralelo, mas não com Fase 2 em diante.

**Fase 1 — Scaffolding técnico**
1. `create-next-app` (App Router, TypeScript recomendado, ESLint).
2. Migrar tokens de `styles.css` para `app/globals.css`.
3. Configurar `next.config.js` com os cabeçalhos de segurança.
4. Configurar Vercel (domínio, env vars para Resend/Plausible).

**Fase 2 — Componentização**
Converter as secções atuais do `index.html` em componentes React
(`Header`, `Hero`, `Stats`, `About`, `TeamGrid`, `ServiceCards`, `Approach`, `Process`,
`Metrics`, `Insights`, `ContactBand`, `Footer`) preservando exatamente as classes/CSS
Modules migrados — reescrever o HTML em JSX, não o design.

**Fase 3 — Conteúdo real**
Substituir todos os placeholders (equipa fictícia, números "ilustrativos", texto
"em breve") pelos dados recolhidos na Fase 0.

**Fase 4 — Perspetivas (MDX) + Formulário + Analytics**
Implementar a listagem/artigo MDX, o Route Handler de contacto com Resend, e o script
do Plausible.

**Fase 5 — Paridade SEO/A11y/Performance**
Confirmar que tudo o que já foi validado no site atual continua a passar na versão
Next.js: contraste WCAG AA, `:focus-visible`, `sitemap.xml`/`robots.txt` gerados
dinamicamente (`app/sitemap.ts`, `app/robots.ts`), JSON-LD, imagens via `next/image`
com os tamanhos já otimizados como fonte.

**Fase 6 — QA e deploy**
Testar em mobile/tablet/desktop, Lighthouse (Performance/A11y/SEO ≥ 90 em todas),
verificar envio real do formulário, apontar o domínio, remover o `index.html` estático
antigo do histórico ativo (mantê-lo arquivado, não apagar o histórico git).

## Checklist de conteúdo a fornecer (Fase 0 — bloqueante)

- [ ] **Equipa real**: nome, cargo, foto (ou decisão consciente de não publicar fotos),
      bio de 1-2 frases por pessoa — a substituir os 4 perfis fictícios atuais.
- [ ] **Morada, telefone, e-mail definitivos** — os atuais (`Rua Castilho 14C`,
      `+351 910 205 029`, `geral@sentinela100erro.pt`) são os reais ou placeholders?
- [ ] **Domínio definitivo** — confirmar `sentinela100erro.pt` ou outro.
- [ ] **Números reais ou decisão de não publicar números** — os "12 anos", "30+ posições/
      trimestre", "100% capital próprio" são ilustrativos; decidir se há métricas reais
      publicáveis ou se essa secção sai do site.
- [ ] **Enquadramento regulatório** — confirmar com jurídico se a atividade descrita
      (gestão de carteiras de ações/participações sociais para terceiros) implica registo
      CMVM e, se sim, o texto/disclaimer obrigatório a incluir.
- [ ] **Fotografia própria** — as 3 fotos atuais são Wikimedia Commons (CC BY-SA,
      créditos no rodapé); decidir se para produção querem fotografia profissional da
      sede/equipa real, ou manter as de arquivo.
- [ ] **Conteúdo inicial de "Perspetivas"** — quantos artigos para lançar (mínimo
      recomendado: 3), autoria, tema.
- [ ] **Textos de serviço mais detalhados**, se as páginas `/servicos/[slug]` avançarem
      (o texto atual é uma frase por serviço, suficiente só para a home).
- [ ] **Acesso**: conta Vercel (ou decisão de quem cria), domínio já comprado ou por
      comprar, conta Resend/Formspree, conta Plausible.

## Não-negociáveis (herdados do trabalho já feito, não regredir)

- Contraste de texto ≥ AA em todas as combinações cor/fundo (usar os tokens corrigidos,
  não os originais).
- `:focus-visible` em todo o elemento interativo.
- `prefers-reduced-motion` respeitado.
- CSP e cabeçalhos de segurança equivalentes aos atuais.
- Imagens sempre com `width`/`height` (ou `next/image`, que trata disto automaticamente)
  para não regredir CLS.
- Política de privacidade atualizada **antes** de o formulário de contacto ir ao ar
  (agora vai recolher dados pessoais de verdade).

## Critérios de aceitação (Definition of Done)

- Lighthouse (mobile) ≥ 90 em Performance, Acessibilidade, SEO, Boas Práticas.
- Formulário de contacto testado com envio real (não só validação client-side).
- Zero conteúdo placeholder/fictício publicado (equipa, números, "em breve").
- `sitemap.xml` reflete todas as rotas reais, incluindo artigos de Perspetivas.
- Site funcional e testado em pelo menos: Chrome desktop, Safari iOS, Chrome Android.

---

**Como usar este prompt**: cola-o inteiro no início de uma conversa nova. A Fase 0
(checklist de conteúdo) deve ser respondida antes ou durante essa conversa — o resto do
prompt já tem contexto suficiente para o agente arrancar sozinho com a Fase 1 em
paralelo, sem precisar de voltar a explicar o histórico do projeto.
