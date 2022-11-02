const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../app');
// importado para fazer o dublê
const fs = require('fs').promises;
const cacauTrybeStub = require('./chocolate.fixture');

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {

  beforeEach(function () {
    // simular o comportamento do fs.writeFile 
    // e do readFile
    sinon.stub(fs, 'readFile')
      .resolves(JSON.stringify(cacauTrybeStub));
    sinon.stub(fs, 'writeFile')
      .resolves();
  })

  afterEach(function () {
    // restaurar comportamento
    sinon.restore();
  })

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método POST em /chocolates', () => {
    it('Retorna o chocolate criado com status 201', async () => {
      // TRIPLE AAA
      // ARRANGE - arranjar / arrumar
      const status = 201;
      // const chocoCreated = {
      //   id: 8,
      //   name: "Trybe choco",
      //   brandId: 1
      // };
      const chocoRequest = {
        name: "Trybe choco",
        brandId: 1
      };
      const chocoCreated = { 
        id: cacauTrybeStub.nextChocolateId
        , ...chocoRequest
      };

      // ACT - agir / executar
      const response = await chai
        .request(app)
        .post('/chocolates')
        .send(chocoRequest);

      // ASSERT - verificar
      expect(response.status).to.be.equal(status);
      expect(response.body).to.be.deep.equal(chocoCreated);
    });
  });

  describe('Usando o método DELETE em /chocolates/:id', function () {
    it('Remove um chocolate', async function () {
      const response = await chai
        .request(app)
        .delete('/chocolates/1');

      expect(response.status).to.be.equal(204);
    });

     it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai
        .request(app)
        .delete('/chocolates/555');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ 
        message: 'o chocolate do id 555 não existe',
      });
    });
  });

});
