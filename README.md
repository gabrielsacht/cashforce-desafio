# cashforce-desafio
  Esse projeto foi desenvolvido como parte de um desafio tecnico para um processo seletivo. O objetivo é criar uma aplicação full-stack 
  para a visualização de informações referentes a notas fiscais.
  Foi utilizado **Typescript**, **express** e **sequelize** para fazer a api e **mysql** para o banco de dados. O frontend foi feito com **React.js**

## Como rodar o projeto
Para rodar o projeto você terá que ter instalado o mysql em sua máquina local!

Clone o repositoio para sua máquina local.

`git clone git@github.com:gabrielsacht/cashforce-desafio.git`

`cd cashforce-desafio/`

`git checkout master`

Certifique-se de estar na branch 'master'. Na raiz do projeto entre no diretório 'backend'

`cd backend/`

e renomeie o arquivo ".env-example" para ".env" e preencha com as informações necessárias, como o usuario e a senha utilizada no seu **mysql** local.
Por padrão a API irá rodar no porta 3002 e ela se conecta com o banco de dados pela porta 3306. Caso queira mudar, substitua os valores nos campos 'APP_PORT' e 'DB_PORT' 
respectivamente.

Rode

`npm install`

`npm run db:reset`

`npm start`

Agora, em um novo terminal, entre no diretório 'cashforce-frontend' que está no diretório 'frontend' a partir da raiz do projeto

Rode 

`npm install`

`npm start`

Uma aba será aberta no seu navegador com a aplicação rodando no endereço "http://localhost:3000/"
