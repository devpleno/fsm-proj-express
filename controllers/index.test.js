const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
  it('home', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Fullstack Master')
    indexController.home({}, res)
  })

  it('handles without num1 and num2', () => {
    let res = {
      send: function () { }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc({ query: {} }, res)
  })

  it('handles without num1', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num2: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc(req, res)
  })

  it('handles without num2', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num1: '10'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Calculadora')
    indexController.calc(req, res)
  })

  it('calcs', () => {
    let res = {
      send: function () { }
    }
    let req = {
      query: {
        num1: 10,
        num2: 20
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('A soma é: 30')
    // indexController.calc({ query: {} }, res)
    indexController.calc(req, res)
  })
})