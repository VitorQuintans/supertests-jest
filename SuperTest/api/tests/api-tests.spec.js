// Importa a biblioteca supertest, que será usada para simular requisições HTTP
const supertest = require('supertest')
// Importa o app do Express (não está "escutando" nenhuma porta aqui, ideal para testes)
const app = require('../app') 
const db = require('../data/users')

beforeEach(() => {
  db.resetData()
})


// Grupo de testes relacionado à API
describe('API Initial Tests', () => {

    // Teste: Verifica se o endpoint GET /ping retorna o status 200 e a mensagem "pong"
    it('GET /ping should return pong', async () => {
        // Faz uma requisição GET para o endpoint /ping usando supertest
        const res = await supertest(app).get('/ping');

        // Verifica se o status da resposta é 200 (OK)
        expect(res.statusCode).toBe(200);

        // Verifica se o corpo da resposta é exatamente { message: 'pong' }
        expect(res.body).toEqual({ message: 'pong' });
    });

    // Teste: Verifica se o POST /user com um nome válido retorna 201 e os dados do usuário
    it('POST /user should return 201 and user data', async () => {
        // Faz uma requisição POST para /user enviando no body o nome "Vitor"
        const res = await supertest(app)
            .post('/users')
            .send({ name: 'Vitor' }); // .send simula o JSON enviado no body

        // Verifica se o status da resposta é 201 (Created)
        expect(res.statusCode).toBe(201);

        // Verifica se no corpo da resposta existe a propriedade 'id'
        expect(res.body).toHaveProperty('id');

        // Verifica se o nome retornado no corpo da resposta é "Vitor"
        expect(res.body.name).toBe('Vitor');
    });

    // Teste: Verifica se o POST /user com nome vazio retorna erro 400 (Bad Request)
    it('POST /user should return 400, because the name is empty', async () => {
        // Faz uma requisição POST para /user enviando um nome vazio
        const res = await supertest(app)
            .post('/users')
            .send({ name: '' }); // Aqui está enviando o nome vazio

        // Verifica se o status retornado é 400 (Bad Request)
        expect(res.statusCode).toBe(400);
    });

});
