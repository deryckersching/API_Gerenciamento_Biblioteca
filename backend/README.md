# API de Gerenciamento de Biblioteca

## 1. Sobre o projeto

Este projeto consiste no desenvolvimento de uma API REST para o gerenciamento de uma biblioteca, utilizando Node.js, Express e MySQL.

A API tem como objetivo permitir o cadastro, a consulta, a atualização e a exclusão de informações relacionadas aos autores, livros, gêneros, usuários e empréstimos.

O sistema também considera os relacionamentos entre as entidades do banco de dados, permitindo consultar os autores de cada livro, os gêneros associados aos livros e os empréstimos relacionados a determinados livros.

O projeto foi desenvolvido como atividade prática para aplicar os conceitos de API REST, operações CRUD, banco de dados relacional e arquitetura MVC.

## 2. Tecnologias utilizadas

- **Node.js:** ambiente de execução JavaScript.
- **Express:** criação do servidor e gerenciamento das rotas da API.
- **MySQL:** sistema de gerenciamento do banco de dados.
- **MySQL2:** biblioteca utilizada para conectar a aplicação ao MySQL e executar consultas SQL.
- **dotenv:** carregamento das variáveis de ambiente.
- **JavaScript:** linguagem utilizada no desenvolvimento do backend.
- **MySQL Workbench:** ferramenta utilizada para administrar o banco de dados.
- **Thunder Client:** ferramenta utilizada para testar as requisições HTTP.

## 3. Organização do projeto

O projeto utiliza a arquitetura MVC para separar as responsabilidades da aplicação.

A estrutura de pastas está organizada da seguinte forma:

```text
API_Gerenciamento_Biblioteca/
└── backend/
    ├── database/
    │   └── biblioteca.sql
    ├── node_modules
    ├── src/
    │   ├── config/
    │   │   └── database.js
    │   ├── controllers/
    │   │   ├── autoresController.js
    │   │   ├── emprestimosController.js
    │   │   ├── generosController.js
    │   │   ├── livrosController.js
    │   │   └── usuariosController.js
    │   ├── models/
    │   │   ├── autoresModel.js
    │   │   ├── emprestimosModel.js
    │   │   ├── generosModel.js
    │   │   ├── livrosModel.js
    │   │   └── usuariosModel.js
    │   └── routes/
    │       ├── autoresRoutes.js
    │       ├── emprestimosRoutes.js
    │       ├── generosRoutes.js
    │       ├── livrosRoutes.js
    │       └── usuariosRoutes.js
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── server.js
```

### Responsabilidade de cada parte

- **server.js:** inicia o servidor Express e registra as rotas.
- **config/database.js:** configura a conexão com o banco de dados MySQL.
- **models/:** executa as consultas SQL para buscar, cadastrar, editar e excluir registros.
- **controllers/:** recebem as requisições, chamam os Models e retornam as respostas.
- **routes/:** definem os endpoints e associam cada rota ao Controller correspondente.
- **database/biblioteca.sql:** contém os comandos SQL para criar e popular o banco de dados.

## 4. Instalação

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js;
- MySQL Server;
- MySQL Workbench, para administrar o banco;
- Visual Studio Code, ou outro editor de código.

### Instalar as dependências

Abra o terminal do Visual Studio Code e entre na pasta `backend`:

```bash
cd backend
```

Instale as dependências do projeto:

```bash
npm install
```

Caso seja necessário instalar as bibliotecas utilizadas no projeto, execute:

```bash
npm install express mysql2 dotenv
```

## 5. Configuração do ambiente

O projeto utiliza o pacote `dotenv` para carregar as informações de conexão com o banco de dados a partir de variáveis de ambiente.

Na pasta `backend`, crie um arquivo chamado `.env` com as seguintes configurações:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_do_mysql
DB_NAME=biblioteca
API_PORT=3033
```

Substitua `sua_senha_do_mysql` pela senha configurada para o seu usuário do MySQL.

As variáveis utilizadas no arquivo `database.js` devem corresponder aos nomes definidos no `.env`.

### Arquivo .env.example

O arquivo `.env.example` deve ser disponibilizado para mostrar quais variáveis são necessárias, sem conter senhas reais.

Exemplo:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=biblioteca
API_PORT=3033
```

### Segurança

O arquivo `.env` deve ser incluído no `.gitignore` para evitar o envio de informações sensíveis ao repositório.

Exemplo de conteúdo do `.gitignore`:

```gitignore
node_modules/
.env
```

## 6. Banco de dados

O banco de dados utilizado pela aplicação chama-se `biblioteca`.

Ele armazena as informações dos autores, livros, gêneros, usuários e empréstimos, além das tabelas responsáveis pelos relacionamentos entre livros e autores e entre livros e gêneros.

### Criar e configurar o banco

1. Abra o MySQL Workbench.
2. Conecte-se à instância do MySQL.
3. Abra o arquivo `database/biblioteca.sql`.
4. Execute o script SQL para criar as tabelas e inserir os dados de teste, caso o banco ainda não esteja configurado.

O banco deve respeitar as chaves primárias, as chaves estrangeiras e as cardinalidades definidas no DER fornecido pela professora.

**Importante:** se o banco e as tabelas já existirem, não execute novamente comandos de criação sem verificar o conteúdo atual. Isso pode gerar erros ou duplicar dados de teste.

### Verificar as tabelas

Para conferir as tabelas existentes, execute:

```sql
USE biblioteca;
SHOW TABLES;
```

Para consultar os autores cadastrados:

```sql
SELECT * FROM autores;
```

## 7. Execução da aplicação

Na pasta `backend`, execute:

```bash
npm start
```

Esse comando inicia o servidor conforme o script configurado no `package.json`.

Se o servidor iniciar corretamente, deverá aparecer no terminal uma mensagem semelhante a:

```text
Servidor rodando na porta 3033
http://localhost:3033
```

A API estará disponível em:

```text
http://localhost:3033
```

Para testar as rotas, utilize o Thunder Client no Visual Studio Code ou outra ferramenta compatível com requisições HTTP.

## 8. Endpoints da API

Os endpoints abaixo organizam as operações CRUD e as consultas previstas para o projeto. A documentação final deve corresponder às rotas efetivamente implementadas na aplicação.

### 8.1. Autores

| Método HTTP | Endpoint | Finalidade |
|---|---|---|
| GET | `/autores` | Consultar todos os autores |
| GET | `/autores/:id` | Consultar um autor pelo ID |
| POST | `/autores` | Cadastrar um autor |
| PUT | `/autores/:id` | Atualizar um autor |
| DELETE | `/autores/:id` | Excluir um autor |
| GET | `/autores/:id/livros` | Consultar os livros de um autor |

#### Exemplo de cadastro de autor

**Requisição:**

```http
POST /autores
```

**Corpo JSON:**

```json
{
  "nome_completo": "Machado de Assis",
  "nacionalidade": "Brasileira",
  "data_nascimento": "1839-06-21"
}
```

**Exemplo de resposta:**

```json
{
  "id": 1,
  "nome_completo": "Machado de Assis",
  "nacionalidade": "Brasileira",
  "data_nascimento": "1839-06-21"
}
```

O ID é gerado automaticamente pelo banco de dados. O exemplo de resposta pode variar conforme os registros existentes.

### 8.2. Livros

| Método HTTP | Endpoint | Finalidade |
|---|---|---|
| GET | `/livros` | Consultar todos os livros |
| GET | `/livros/:id` | Consultar um livro pelo ID |
| POST | `/livros` | Cadastrar um livro |
| PUT | `/livros/:id` | Atualizar um livro |
| DELETE | `/livros/:id` | Excluir um livro |
| GET | `/livros/:id/emprestimos` | Consultar os empréstimos de um livro |

As consultas de livros deverão considerar o relacionamento com os autores. Quando implementadas, as consultas específicas também deverão apresentar os gêneros associados ao livro.

#### Exemplo de cadastro de livro

**Requisição:**

```http
POST /livros
```

**Corpo JSON:**

```json
{
  "titulo": "Harry Potter e a Pedra Filosofal",
  "isbn": "9788532530783",
  "ano_publicacao": 1997,
  "numero_paginas": 208,
  "sinopse": "Um jovem descobre que é um bruxo e inicia seus estudos em uma escola de magia."
}
```

Os campos enviados devem corresponder às colunas e aos relacionamentos definidos no banco de dados. Se o cadastro exigir o ID do autor ou outros relacionamentos, o corpo da requisição deverá incluir esses campos conforme a implementação.

### 8.3. Gêneros

| Método HTTP | Endpoint | Finalidade |
|---|---|---|
| GET | `/generos` | Consultar todos os gêneros |
| GET | `/generos/:id` | Consultar um gênero pelo ID |
| POST | `/generos` | Cadastrar um gênero |
| PUT | `/generos/:id` | Atualizar um gênero |
| DELETE | `/generos/:id` | Excluir um gênero |

#### Exemplo de cadastro de gênero

**Requisição:**

```http
POST /generos
```

**Corpo JSON:**

```json
{
  "nome": "Fantasia"
}
```

Um livro pode possuir vários gêneros, e um gênero pode estar associado a vários livros. Esse relacionamento N:N deve ser implementado por meio da tabela intermediária definida no banco de dados.

### 8.4. Usuários

| Método HTTP | Endpoint | Finalidade |
|---|---|---|
| GET | `/usuarios` | Consultar todos os usuários |
| GET | `/usuarios/:id` | Consultar um usuário pelo ID |
| POST | `/usuarios` | Cadastrar um usuário |
| PUT | `/usuarios/:id` | Atualizar um usuário |
| DELETE | `/usuarios/:id` | Excluir um usuário |

#### Exemplo de cadastro de usuário

**Requisição:**

```http
POST /usuarios
```

**Corpo JSON:**

```json
{
  "nome_completo": "João da Silva",
  "cpf": "12345678900",
  "email": "joao@email.com",
  "telefone": "47999999999",
  "data_nascimento": "2000-05-15"
}
```

Os dados são exemplos para testes. O cadastro deverá respeitar as restrições definidas no banco de dados.

### 8.5. Empréstimos

| Método HTTP | Endpoint | Finalidade |
|---|---|---|
| GET | `/emprestimos` | Consultar todos os empréstimos |
| GET | `/emprestimos/:id` | Consultar um empréstimo pelo ID |
| POST | `/emprestimos` | Cadastrar um empréstimo |
| PUT | `/emprestimos/:id` | Atualizar um empréstimo |
| DELETE | `/emprestimos/:id` | Excluir um empréstimo |

#### Exemplo de cadastro de empréstimo

**Requisição:**

```http
POST /emprestimos
```

**Corpo JSON:**

```json
{
  "data_emprestimo": "2026-10-08",
  "data_devolucao": null,
  "usuarios_id": 1,
  "livros_id": 1
}
```

O usuário e o livro informados devem existir no banco de dados. O exemplo considera `data_devolucao` como nula enquanto o empréstimo estiver em aberto, desde que essa regra corresponda à estrutura do banco.

## 9. Relacionamentos e consultas

A API deverá respeitar os relacionamentos definidos no DER.

### Livros e autores

As consultas de livros deverão permitir identificar seus respectivos autores, utilizando as chaves e os relacionamentos do banco de dados.

### Livros e gêneros

O relacionamento entre livros e gêneros é do tipo N:N. A tabela intermediária `livros_generos` deverá permitir associar vários gêneros a um livro e vários livros a um gênero.

### Livros de determinado autor

A rota prevista para essa consulta é:

```http
GET /autores/:id/livros
```

O parâmetro `:id` representa o ID do autor.

### Empréstimos de determinado livro

A rota prevista para essa consulta é:

```http
GET /livros/:id/emprestimos
```

O parâmetro `:id` representa o ID do livro.

Essas consultas devem utilizar os relacionamentos do banco de dados para retornar os registros correspondentes.

## 10. Tratamento de erros

A API deverá retornar respostas em JSON e utilizar códigos HTTP adequados para cada situação.

| Status HTTP | Significado | Exemplo de utilização |
|---|---|---|
| 200 OK | Requisição executada com sucesso | Consultar ou atualizar registros |
| 201 Created | Registro criado com sucesso | Cadastrar autor, livro ou usuário |
| 400 Bad Request | Dados inválidos ou obrigatórios ausentes | Cadastro incompleto |
| 404 Not Found | Registro não encontrado | Consultar ou alterar um ID inexistente |
| 500 Internal Server Error | Erro interno ou falha inesperada | Problema durante uma operação no servidor ou banco |

As mensagens de erro devem ajudar a identificar o problema sem expor informações sensíveis da aplicação.

## 11. Testes

As rotas podem ser testadas utilizando o Thunder Client.

Para cada entidade, devem ser testadas as operações de:

- consulta de todos os registros;
- consulta por ID;
- cadastro;
- atualização;
- exclusão.

Também devem ser testados IDs inexistentes, dados obrigatórios ausentes e relacionamentos com registros que não existem.

Para o GET de consulta, o status esperado normalmente é `200 OK`. Para um POST que cria um registro, o status esperado normalmente é `201 Created`.

## 12. Considerações finais

O projeto tem como finalidade aplicar os conceitos estudados durante as aulas de desenvolvimento backend, incluindo a criação de APIs REST, operações CRUD, conexão com MySQL, uso de variáveis de ambiente e separação de responsabilidades por meio da arquitetura MVC.

A implementação deve seguir o DER fornecido pela professora e garantir que as operações respeitem as regras e os relacionamentos do banco de dados.
