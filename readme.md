# Dashboard pagamentos
## Requisitos
* instalar node.js (utilizar as versões LTS).
* Caso não tenha instalado: npm install -g nodemon,
* Caso esteja rodando no windows e não tenha instalado: npm install -g win-node-env

## Instruções
* Clone o projeto.
* No terminal, navegue até a pasta do projeto e execute: npm install

### Rodando em ambiente de Desenvolvimento
* No termimal execute: npm run dev.
* No navegador digitar: localhost:8181 ou usar porta caso tenha customizada.

### Rodando em ambiente de Produção
* No termimal execute: npm run build (demora um pouco).
* No termimal execute: npm run prod.
* No navegador digitar: localhost:8181 ou usar porta caso tenha customizada.

#### O que Importa é o css e o js gerado pois eles são compilados
    Em Produção, colocar o HTML(ou qualquer outro tipo de view)
    na pasta /dist/views/ e as imagens em dist/images.