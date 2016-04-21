import { expect } from 'chai'
import Battlecruiser from '.'
import config from './config'

const defaultShip = config

describe('Battlecruiser', () => {
  describe('#constructor', () => {
    describe('without config', () => {
      it('should create a default starship', () => {
        const ship = new Battlecruiser()
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with empty config', () => {
      it('should create a default starship', () => {
        const ship = new Battlecruiser({})
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with valid config', () => {
      it('should create the interface', () => {
        const ship = new Battlecruiser()

        // other methods inherited from Starship
        expect(typeof ship.set).to.equal('function')
        expect(typeof ship.recharge).to.equal('function')
      })

      it('should create a Battlecruiser with the given parameters', () => {
        const ship = new Battlecruiser({
          recharge: 15
        })

        const testShip = defaultShip
        testShip.recharge = 15

        expect(ship.get()).to.deep.equal(testShip)
      })
    })
  })

  describe('#set', () => {
    describe('without config', () => {
      it('should not make changes', () => {
        const ship = new Battlecruiser()
        ship.set()
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with empty config', () => {
      it('should not make changes', () => {
        const ship = new Battlecruiser({})
        ship.set({})
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with config', () => {
      it('should change given parameters', () => {
        const ship = new Battlecruiser()
        ship.set({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          firepower: 23,
          recharge: 15
        })
        expect(ship.get()).to.deep.equal({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          firepower: 23,
          energy: defaultShip.energy,
          recharge: 15
        })
      })
    })
  })

  describe('#recharge', () => {
    it('should increase shield and decrease energy', () => {
      const ship = new Battlecruiser({ shield: 10, energy: 15, recharge: 10 })
      ship.recharge()
      const { shield, energy, recharge } = ship.get()

      expect(shield).to.equal(20)
      expect(energy).to.equal(5)
      expect(recharge).to.equal(10)
    })

    it('should not decrease energy to less than 0', () => {
      const ship = new Battlecruiser({ shield: 10, energy: 6, recharge: 10 })
      ship.recharge()
      const { shield, energy, recharge } = ship.get()

      expect(shield).to.equal(16)
      expect(energy).to.equal(0)
      expect(recharge).to.equal(10)
    })

    it('should not increase energy to more than 100', () => {
      const ship = new Battlecruiser({ shield: 95, energy: 20, recharge: 10 })
      ship.recharge()
      const { shield, energy, recharge } = ship.get()

      expect(shield).to.equal(100)
      expect(energy).to.equal(10)
      expect(recharge).to.equal(10)
    })
  })
})
