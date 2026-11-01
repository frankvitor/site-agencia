# Site da agência

Site institucional e portfólio, em português e inglês.

**Stack:** Astro 7 · TypeScript · Tailwind CSS 4 · Zod · Vitest · Vercel

## Rodando localmente

Requer Node 24 (veja `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
```

| Comando           | O que faz                                                |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento                              |
| `npm run build`   | Gera o site estático em `dist/`                          |
| `npm run preview` | Serve o build localmente                                 |
| `npm test`        | Testes unitários                                         |
| `npm run verify`  | Lint + formatação + tipos + testes + build (igual ao CI) |

## Tarefas comuns

### Adicionar um projeto ao portfólio

1. Crie `src/content/cases/pt/<slug>.md` e `src/content/cases/en/<slug>.md` (mesmo slug).
2. Copie o frontmatter de um case existente e preencha.
3. Para a capa, coloque a imagem em `src/assets/cases/` e referencie: `cover: ../../../assets/cases/foto.jpg`.
4. Use `draft: true` para esconder o case em produção enquanto ele não está pronto.

O build falha se algum campo obrigatório estiver faltando.

### Trocar nome da marca, WhatsApp ou redes

Edite `src/config/site.ts`. Ao definir o domínio, atualize também `site` em `astro.config.mjs`.

### Ajustar cores e fontes

Tokens em `src/styles/global.css` (bloco `@theme`).

### Editar textos da interface

`src/i18n/ui.ts`.

## Deploy

Conecte o repositório na Vercel. O framework é detectado automaticamente e os headers de segurança vêm de `vercel.json`.
