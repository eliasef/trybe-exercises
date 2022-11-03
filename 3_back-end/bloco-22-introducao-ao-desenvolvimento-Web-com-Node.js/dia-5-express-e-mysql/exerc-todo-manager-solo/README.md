# Boas-vindas ao repositório do exercício sobre `Express com MySQL`

Esse é o exercício referente ao conteúdo de `Express com MySQL` e tem como objetivo consolidar os seguintes objetivos de aprendizagem:

- Configurar um container docker com MySQL;
- Utilizar o mysql2 para acessar um servidor MySQL por meio de uma aplicação express;
- Aplicar o conceito de variáveis de ambiente para separar os parâmetros de configuração do seu código;
- Escrever consultas SQL utilizando prepared statements;
- Desenvolver um CRUD com express integrado ao MySQL;
- Escrever testes de integração com mock do banco de dados.

### Orientações

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://docs.github.com/pt/get-started/quickstart/contributing-to-projects).

Feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install` para baixar as dependências do projeto de forma apropriada.

### Antes de começar os exercícios

Nesse exercício vamos criar uma *API REST* de Gerenciamento de Tarefas `todo-list-manager` utilizando o **Express** e o **MySQL** como banco de dados. Nessa *API* você vai armazenar e recuperar dados de tarefas por meio de **endpoints** que realizam o CRUD dos dados.

Este repositório já contém as dependências abaixo definidas no arquivo `package.json`. Ao executar o comando `npm install` as bibliotecas abaixo serão devidamente instaladas no projeto:

- express v4.17.1
- mysql2 v2.3.3
- nodemon v2.0.19
- mocha v10.0.0
- chai v4.3.6
- chai-http 4.3.0
- sinon v14.0.0

O exercício possui a estrutura de arquivos e pastas similar ao utilizado no conteúdo relacionado a `Express com MySQL`. Veja a árvore de arquivos e diretórios do projeto:

```text
.
└── exercise-express-mysql/
    ├── src/
    │   ├── routes/
    │   │   └── tasksRoutes.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── integration/
    │       └── -
    └── package.json
```

O arquivo `src/routes/tasksRoutes.js` contém as definições das rotas que serão utilizadas nos exercícios, mas que não realizam nenhuma operação.

Segue uma descrição do que é esperado que cada endpoint realize:

- `POST /tasks`: Endpoint responsável por cadastrar uma nova tarefa no banco de dados. Os dados a serem armazenados devem ser enviados no corpo da requisição em formato **JSON** seguindo a seguinte estrutura:

```json
{
  "nome": "Lavar louça",
  "descricao": "Tarefa Doméstica",
}
```

- `PUT /tasks/:id`: Endpoint responsável por alterar os dados de uma tarefa no banco de dados. Recebe como parâmetro de rota o `id` da tarefa a ser alterado e um **JSON** no corpo da requisição seguindo a seguinte estrutura:

```json
{
  "nome": "Entregar Pizza",
  "descricao": "Tarefa de Trabalho",
}
```

- `DELETE /tasks/:id`: Endpoint responsável por excluir os dados de uma tarefa no banco de dados. Recebe como parâmetro de rota o `id` da tarefa a ser excluído.

- `GET /tasks`: Endpoint responsável por recuperar todas as tarefas cadastradas no banco de dados. A resposta deve conter um **JSON** seguindo a seguinte estrutura:

```json
[
  {
    "id": 1,
    "nome": "Lavar louça",
    "descricao": "Tarefa Doméstica",
  },
  {
    "id": 2,
    "nome": "Entregar Pizza",
    "descricao": "Tarefa de Trabalho",
  },
]
```

- `GET /tasks/:id`: Endpoint responsável por recuperar uma tarefa cadastrada no banco de dados pelo seu `id`. Recebe como parâmetro de rota o `id` da tarefa a ser consultada do banco de dados. A resposta deve conter um **JSON** seguindo a seguinte estrutura:

```json
{
  "id": 1,
  "nome": "Entregar Pizza",
  "descricao": "Tarefa de Trabalho",
}
```

Ao final dos exercícios é esperado ter todos os **endpoints** funcionando conforme a especificação acima e que os dados sobre as tarefas sejam armazenados e consultados em um servidor MySQL.

**OBS 01**: Os retornos dos **endpoints** `POST /tasks`, `PUT /tasks/:id` e `DELETE /tasks/:id` podem ser implementados da forma que for conveniente.

### Exercícios

#### Exercício 01
Crie um arquivo `docker-compose.yaml` que seja capaz de inicializar um container docker com o MySQL v8.0.29 e que crie um banco de dados chamado `todolistdb`. Depois conecte-se ao servidor MySQL utilizando o console do *MySQL* ou o *MySQL Workbench* para criar as tabelas citadas executando o comando SQL a seguir:

```sql
USE todolistdb;

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
```

#### Exercício 02
Crie o arquivo `src/db/connection.js` que crie e exporte uma `pool` de conexões com o MySQL.

#### Exercício 03
Crie o arquivo `src/db/tasksDB.js` que contenha as seguintes funções:

- `insert`: Função que recebe como parâmetro um objeto `task` e utiliza uma `Prepared Statement` para armazenar os dados do objeto `task` no banco de dados. O objeto `task` recebido via parâmetro deve possuir a seguinte estrutura:

```javascript
{
  nome: 'Entregar Pizza',
  descricao: 'Tarefa de Trabalho',
}
```

- `update`: Função que recebe como parâmetro um objeto `task` e um `id` de uma tarefa e utiliza uma `Prepared Statement` para alterar os dados da tarefa com identificador igual ao parâmetro `id` com os dados do objeto `task` no banco de dados. O objeto `task` recebido via parâmetro deve possuir a seguinte estrutura:

```javascript
{
  nome: 'Entregar Pizza',
  descricao: 'Tarefa de Trabalho',
}
```

- `remove`: Função que recebe como parâmetro um `id` de uma tarefa e utiliza uma `Prepared Statement` para excluir a tarefa com identificador igual ao parâmetro `id` do banco de dados.

- `findAll`: Função que não recebe nenhum parâmetro e utiliza uma `Prepared Statement` para recuperar todas as tarefas cadastradas no banco de dados.
  
- `findById`: Função que recebe como parâmetro um `id` de uma tarefa e utiliza uma `Prepared Statement` para recuperar a tarefa com identificador igual ao parâmetro `id` do banco de dados.

#### Exercício 04 🚀

Refatore o arquivo `src/routes/tasksRoutes.js` de forma que o mesmo realize as operações de acordo com a especificação dada. Para isso, utilize o arquivo `src/db/tasksDB.js` criado no `Exercício 03` para realizar as operações necessárias no banco de dados.

#### Exercício 05 🚀
Escreva testes de integração para o **endpoint** `POST /tasks` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

### Bônus

#### Exercício 01 🚀
Escreva testes de integração para o **endpoint** `PUT /tasks/:id` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

#### Exercício 02 🚀
Escreva testes de integração para o **endpoint** `DELETE /tasks/:id` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

#### Exercício 03 🚀
Escreva testes de integração para o **endpoint** `GET /tasks` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.

#### Exercício 04 🚀
Escreva testes de integração para o **endpoint** `GET /tasks/:id` utilizando o `mocha`, `chai`, `chai-http` e `sinon`.
