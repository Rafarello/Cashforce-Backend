require('dotenv').config();

const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { expect } = chai;

const OrdersService = require('../services/OrdersService');

const { ordersMock } = require('./orders.mock');

const API = `http://${process.env.HOSTNAME}:${process.env.API_PORT}`;

chai.use(chaiHttp);

describe('Teste de Rota - Orders', () => {
  let chaiHttpResponse;

  before(() => {
    sinon.stub(OrdersService, 'getOrdersInfo').resolves(ordersMock);
  })

  after(() => {
    sinon.stub(OrdersService.getOrdersInfo).restore()
  })
  
  it('É possível buscar as Orders realizadas com informações dos Compradores e Provedores', async () => {
    

    chaiHttpResponse = await chai
      .request(API)
      .get('/orders')

    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body).to.be.deep.equal(ordersMock)
  })
})
