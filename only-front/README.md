# only-front

Esta pasta contém **somente o front-end** (arquivos estáticos já buildados) + assets/configs de marca, extraídos do bundle do app.

Objetivo: deixar um "pacote leve" para você subir no Bolt/refazer a UI sem carregar o restante do Electron (executáveis, DLLs, locales etc.).

## O que tem aqui

- `app/dist/` — front-end buildado (HTML/CSS/JS/assets)
- `app/company/` — logos/imagens/configs por empresa
- `app/APPVersion.json` e `app/CurrentCompany.json` — metadados usados pelo app

## Como usar no Bolt

- Aponte o Bolt para esta pasta `only-front/`.
- Use `app/dist/index.html` como referência do que existe hoje (rotas, assets, estrutura de build).

## Observações

- Isso **não** é o código-fonte original (não tem `src/`). É a saída de build.
- Se você quiser reconstruir o front de verdade, o ideal é gerar um novo projeto (React/Vite/etc.) e copiar/aproveitar apenas assets e comportamento que fizer sentido.
