
# Cashforce Backend - Node, Express e Sequelize

Projeto construído em Vue.js para um teste técnico de uma aplicação Fullstack da Cashforce.


## Autores

- [@RafaelMoraes](https://www.github.com/rafarello)


## Documentação

Para iniciar o projeto basta seguir os passos a seguir:

- Baixar uma cópia do repositório ou realizar o clone em sua máquina
- Executar o comando `npm install` para instalar as dependências
- Executar o comando `npm start` para iniciar a aplicação
- Para ambiente de desenvolvimento, recomendado utilizar `npm run dev`

## Sobre

O Teste contempla a criação de uma API conectada a um banco de dados disponibilizado.

## Rotas

Para construção dessa API e considerando os requisitos impostos, foi necessário apenas a implementação da rota `/orders`
## Banco de Dados - Configuração de Conexão

 Se encontra em:

│---/src</br>
│----└── /database</br> 
│--------└── /config</br>
│------------└── config.js</br>

O arquivo utiliza variáveis de ambiente que podem ser configuradas de acordo com o arquivo `.env.example`

## Sequelize - Configuração

Se encontra em:

│---/src</br>
│----└── /database</br> 
│--------└── /models</br>
│------------└── index.js</br>

## Models

Se encontram em:

│---/src</br>
│----└── /database</br> 
│--------└── /models</br>
│------------└── Buyers.js</br>
│------------└── Cnpj.js</br>
│------------└── Offers.js</br>
│------------└── OrderPortions.js</br>
│------------└── Orders.js</br>
│------------└── Providers.js</br>
│------------└── Sponsors.js</br>
│------------└── Users.js</br>

## Service - Orders

Se encontra em: 

│---/src</br>
│----└── /services</br> 
│--------└── OrdersService.js</br>

## Controller - Orders

Se encontra em:

│---/src</br>
│----└── /controllers</br> 
│--------└── OrdersController.js</br>

## Router - Orders

Se encontra em:

│---/src</br>
│----└── /router</br> 
│--------└── OrdersRouter.js</br>


## Variáveis de Ambiente

Foram utilizadas as seguintes variáveis de ambientes:

```
HOSTNAME=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=example
MYSQL_USER=root
MYSQL_PASSWORD=1234
API_PORT=3001

NODE_ENV=development

```

O arquivo `.env.example` pode ser copiado para facilitar esta configuração

## Teste - Orders

Foi implementado um arquivo de `Teste` para a rota de Orders utilizando `Chai`, `Sinon` e `Mocha`

O script desse teste pode ser executado através de `npm run test`

## Mock - Orders

Foi utilizado um arquivo auxiliar para o `Mock` de `Orders` e este pode ser encontrado em:

│---/src</br>
│----└── /tests</br> 
│--------└── orders.mock.js</br>
