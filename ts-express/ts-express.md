# EXPRESS COM TYPESCRIPT

###
> - npm init
> - tsc --init || npx tsc --init

### Dependências de Desenvolvimento
> **@types/express**: Tipos do Express
> **@types/node**: Tipos do NodeJS
> **ts-node-dev**: Rodar typescript com TS em server de desenvolvimento
> **typescript**: Typescript
> **- No final --save-dev**: Salvar no package.json como dependências de desenvolvimento.
>
### Dependências
> **express**: Será dependência padrão, não de desenvolvimento, pois nosso projeto necessita do Express para rodar, do resto não.
### Scripts
> **dev: "ts-node-dev --respawn --transpile-only src/app.ts"**: Usando nosso pacote ts-node-dev, usamos o respawn para atualizar a cada mudança, o transpile-only para transpilar de ts para JS, e ao final colocamos o path da nossa aplicação principal.