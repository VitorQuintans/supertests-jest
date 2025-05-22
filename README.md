🚀 API com Testes Automatizados - Jest + Supertest

Este projeto é um exemplo de API REST simples desenvolvida com Node.js e Express, com testes automatizados utilizando Jest e Supertest.

O objetivo é demonstrar boas práticas no desenvolvimento e teste de APIs, servindo como um material de estudo e referência.

🛠️ Tecnologias utilizadas:

Node.js

Express

Jest

Supertest

📁 Estrutura do projeto:

app.js: Configuração principal da aplicação.

routes/users.js: Rotas relacionadas a usuários.

data/users.js: Simulação de um banco de dados em memória.

tests/api-tests.spec.js: Arquivo de testes com Jest + Supertest.

package.json

README

⚙️ Funcionalidades da API:

GET /ping → Retorna { message: 'pong' }

GET /users → Lista todos os usuários

GET /users/:id → Retorna um usuário por ID

POST /users → Cria um novo usuário

PUT /users/:id → Atualiza um usuário existente

DELETE /users/:id → Remove um usuário

✅ Funcionalidades testadas:

Testes realizados:

Teste do GET /ping → Verifica status 200 e mensagem "pong".

Teste do POST /users:

Com nome válido → Deve retornar 201 e os dados do usuário.

Com nome vazio → Deve retornar 400 Bad Request.

Os testes são executados com Jest e as requisições simuladas com Supertest.

🚀 Como executar o projeto:

Clone o repositório;

Instale as dependências:
npm install

Execute os testes:
npm test
ou diretamente com Jest:
npx jest

💻 Exemplos de comandos:

npm test → Para rodar os testes automatizados.

📚 Aprendizados:

Configuração de testes automatizados com Jest.

Simulação de requisições HTTP com Supertest.

Organização de código com routes e data separados.

Implementação de testes para cenários positivos e negativos.

📋 Pré-requisitos:

Node.js versão 14 ou superior.

npm versão 6 ou superior.

👨‍💻 Autor:

Feito com dedicação por Vitor.

LinkedIn: https://www.linkedin.com/in/vitor-quintans-qa-engineer-automation-a96a64221/
GitHub: https://github.com/VitorQuintans

📄 Licença:

Este projeto está sob a licença MIT.
Sinta-se livre para usar, estudar e contribuir.
