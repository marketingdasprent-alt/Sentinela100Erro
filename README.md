# SENTINELA100ERRO — site de produção (Next.js)

Versão de produção do site institucional, construída em Next.js (App Router) + React,
substituindo o protótipo estático arquivado em `legacy-static/`. Ver `PRODUCTION_BRIEF.md`
para o contexto completo da migração e a checklist de conteúdo real por fornecer.

> Esta app vive na **raiz do repositório** (não numa subpasta `web/`) de propósito —
> plataformas como o Vercel detetam Next.js automaticamente na raiz, sem precisar de
> configurar nenhuma "Root Directory".

## Estado atual

Conteúdo **fictício/placeholder** onde ainda não existem dados reais da empresa —
equipa, números e artigos de "Perspetivas". Ver comentários no topo de cada ficheiro em
`src/content/` para o que precisa de ser substituído antes de publicar.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abrir <http://localhost:3000>.

## Variáveis de ambiente

Copiar `.env.example` para `.env.local` e preencher:

- `RESEND_API_KEY` — necessário para o formulário de contacto enviar e-mail a sério
  (sem isto, o formulário aceita submissões mas só regista nos logs do servidor,
  não envia). Criar conta em [resend.com](https://resend.com).
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — definir para ativar o script de analytics
  (Plausible, sem cookies). Omitir para desativar analytics.
- `NEXT_PUBLIC_SITE_URL` — domínio público, usado em metadados/sitemap.

## Deploy (Vercel)

```bash
npx vercel
```

Configurar as mesmas variáveis de ambiente no dashboard do projeto na Vercel antes do
primeiro deploy de produção.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `src/app/` | Rotas (App Router) — home, `/equipa`, `/perspetivas`, `/contactos`, `/privacidade` |
| `src/components/chrome/` | Header, cursor customizado, preloader (globais, client components) |
| `src/components/sections/` | Secções da home reutilizadas noutras páginas |
| `src/components/ui/` | Primitivas reutilizáveis (Reveal, Counter, TiltCard) |
| `src/content/` | Dados do site — equipa, artigos, constantes institucionais |
| `src/app/globals.css` | Sistema de design (tokens, componentes) migrado do site estático |
| `src/app/api/contact/route.ts` | Route Handler do formulário de contacto (via Resend) |
