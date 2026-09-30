<!-- ATIVIDADE README.md
O projeto deverá possuir um arquivo README.md contendo:

Sobre o projeto
Uma breve descrição da API e de sua finalidade.

Tecnologias
Lista das tecnologias, bibliotecas e ferramentas utilizadas.

Instalação
Instruções para instalar as dependências.

Configuração
Instruções para configurar o .env.

Banco de dados
Instruções para criar e configurar o banco.

Execução
Instruções para executar a aplicação.

Endpoints
Documentação das rotas disponíveis, contendo:

método HTTP;
endpoint;
finalidade;
parâmetros, quando houver;
corpo da requisição, quando necessário; e
exemplo de resposta. -->




_________________________________________________

<!-- DICA : COMEÇAR PELO

MODELS, EM SEGUIDA
CONTROLLERS, E DEPOIS 
ROUTES

MVC Termo : separação de pastas, deixando as mais organizadas 

_________________________________________________

COMANDOS EM SEQUÉNCIA DO TERMINAL DO VSCODE 

npm init -y : SERVE PRA CRIAR O ARQUIVO package.json 

- - - - - - - - - - - - - - - - - - - - - - - - -

npm install express mysql2 dotenv : SERVE PRA Criar nossa API e as rotas,  Permitir que Node.js converse com MySQL, Ler as configurações do .env

EXEMPLO DO npm install express mysql2 dotenv : 

express > Criar nossa API e as rotas
mysql2 > Permitir que Node.js converse com MySQL
dotenv > Ler as configurações do .env

- - - - - - - - - - - - - - - - - - - - - - - - -

_________________________________________________

DEPOIS DOS COMANDOS EXECUTADOS ACIMA NO TERMINAL SERÁ FEITO ESSE

cd backend > pra entrar na corpo do projeto, em seguida será feito o
node server.js > pra rodar o arquivo node no terminal do projeto > e pra saber que o node está rodando corretamente, precisa aparecer no terminal : Servidor rodando na porta: 3033
http://localhost:3033

_________________________________________________




EXEMPLO DE COMO FUNCIONA AS PASTAS/ARQUIVOS

server.js
   ↓
inicia o servidor

config/database.js
   ↓
cuida da conexão com MySQL

models/
   ↓
faz consultas ao banco

controllers/
   ↓
controlam o que acontece nas requisições

routes/
   ↓
definem os endpoints

_________________________________________________

A sequência recomendada para eu aprender como funciona corretamente cada parte é:

1. Banco de dados ✅
        ↓
2. Configuração do projeto ✅
        ↓
3. Servidor Express ✅
        ↓
4. Testar conexão com MySQL ← ESTOU AQUI AGORA
        ↓
5. Criar Model
        ↓
6. Criar Controller
        ↓
7. Criar Routes
        ↓
8. Testar CRUD no Postman
        ↓
9. Relacionamentos
        ↓
10. Tratamento de erros
        ↓
11. README

_________________________________________________


-->