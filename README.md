# SENTINELA100ERRO — Site institucional

Página institucional ("site em construção") da **SENTINELA100ERRO — SGPS, Unipessoal Lda.**,
sociedade gestora de participações sociais.

Site estático, sem dependências externas (HTML + CSS + JavaScript vanilla).

## Estrutura

| Ficheiro | Função |
|---|---|
| `index.html` | Estrutura da página |
| `styles.css` | Estilos (design monocromático e responsivo) |
| `script.js` | Interações (animações, contadores, cursor) |
| `images/` | Logótipo e símbolo (versões preta e branca) |
| `server.js` | Servidor de desenvolvimento (Node nativo, sem dependências) |
| `package.json` | Scripts npm |
| `robots.txt` | Indexação por motores de busca |

## Ver localmente

Requer [Node.js](https://nodejs.org) (versão 18 ou superior). Na pasta do projeto:

```bash
npm start
```

Depois abrir <http://localhost:8080>.

Para usar outra porta:

```bash
PORT=4000 npm start
```

> O servidor não tem dependências externas (usa apenas o módulo `http` do Node)
> e envia os mesmos cabeçalhos de segurança de produção (CSP, etc.), pelo que o
> ambiente local replica fielmente o site publicado.

## Publicar (GitHub Pages)

1. Fazer *commit* e *push* dos ficheiros para o GitHub.
2. Em **Settings → Pages**, escolher a branch `main` e a pasta raiz (`/root`).
3. O site fica disponível em `https://<utilizador>.github.io/<repositório>/`.

## Contactos

- **Morada:** Rua Castilho, 14C, 5 · 1250-069 Lisboa
- **Telemóvel:** +351 910 205 029
