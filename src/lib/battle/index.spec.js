import { expect } from 'chai'
// import sinon from 'sinon'
import Starship from '../starship'
import Battle from '.'

describe('Battle', () => {
  describe('#constructor', () => {
    describe('with missing parameters', () => {
      it('should throw an error', () => {
        expect(() => {
          const battle = new Battle()
          battle.start(() => {})
        }).to.throw(Error)
      })
    })

    describe('with one missing parameter', () => {
      it('should throw an error', () => {
        const ship = new Starship()

        expect(() => {
          const battle = new Battle(ship)
          battle.start(() => {})
        }).to.throw(Error)
      })
    })

    describe('with valid parameters', () => {
      it('should create the interface', () => {
        const shipA = new Starship()
        const shipB = new Starship()
        const battle = new Battle(shipA, shipB)

        expect(typeof battle.start).to.equal('function')
      })
    })
  })

  describe('#start', () => {
    let shipA
    let shipB

    before(() => {
      shipA = new Starship({
        name: 'A',
        firepower: 1,
        shield: 0,
        hull: 1
      })

      shipB = new Starship({
        name: 'B',
        firepower: 1,
        shield: 0,
        hull: 1
      })
    })

    it('should call the callback with the winner and turn', () => {
      const battle = new Battle(shipA, shipB)

      battle.start((err, result) => {
        expect(typeof result).to.equal('object')
        expect(typeof result.winner).to.equal('object')
        expect(typeof result.turn).to.equal('number')
      })
    })

    it('should call the callback with shipA as winner', () => {
      const battle = new Battle(shipA, shipB)

      battle.start((err, result) => {
        const { name } = result.winner.get()
        expect(name).to.equal('A')
        expect(result.turn).to.equal(1)
      })
    })

    it('should call the callback with shipB as winner', () => {
      const battle = new Battle(shipB, shipA)

      battle.start((err, result) => {
        const { name } = result.winner.get()
        expect(name).to.equal('B')
        expect(result.turn).to.equal(1)
      })
    })

    it('should call the callback with a draw', () => {
      const battle = new Battle(shipA, shipB, 0)

      battle.start((err, result) => {
        expect(typeof result).to.equal('object')
        expect(typeof result.winner).to.equal('undefined')
        expect(typeof result.turn).to.equal('undefined')
        expect(result.draw).to.equal(true)
      })
    })
  })
})
