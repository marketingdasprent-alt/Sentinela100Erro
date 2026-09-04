import type { NextConfig } from "next";
import path from "node:path";

// Replica os cabeçalhos de segurança do servidor de desenvolvimento estático
// original (server.js), ajustados para os serviços externos que a versão de
// produção passa a usar: Plausible (analytics sem cookies) e o próprio
// domínio para o Route Handler do formulário de contacto.
//
// 'unsafe-inline' em script-src é necessário (e não existia no site estático
// original) porque o Next.js App Router entrega o payload de hidratação via
// <script> inline em cada página — sem isto o CSP bloqueia a própria
// hidratação da aplicação. A alternativa correta (nonces via proxy/middleware)
// obrigaria a renderização dinâmica em todas as páginas, perdendo a geração
// estática que sustenta a performance/SEO deste site. Ver a secção "Content
// Security Policy" na documentação do Next.js para o trade-off completo.
const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://plausible.io${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  font-src 'self';
  connect-src 'self' https://plausible.io;
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  object-src 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspHeader },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
