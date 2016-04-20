import { expect } from 'chai'
import Starship from '.'
import config from './config'

const defaultShip = config

describe('Starship', () => {
  describe('#constructor', () => {
    describe('without config', () => {
      it('should create a default starship', () => {
        const ship = new Starship()
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with empty config', () => {
      it('should create a default starship', () => {
        const ship = new Starship({})
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with config', () => {
      it('should create a starship with the given parameters', () => {
        const ship = new Starship({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          firepower: 23,
          energy: 99
        })
        expect(ship.get()).to.deep.equal({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          firepower: 23,
          energy: 99,
          recharge: defaultShip.recharge
        })
      })
    })
  })

  describe('#set', () => {
    describe('without config', () => {
      it('should not make changes', () => {
        const ship = new Starship()
        ship.set()
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with empty config', () => {
      it('should not make changes', () => {
        const ship = new Starship({})
        ship.set({})
        expect(ship.get()).to.deep.equal(defaultShip)
      })
    })

    describe('with config', () => {
      it('should change given parameters', () => {
        const ship = new Starship()
        ship.set({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          firepower: 23,
          energy: 99
        })
        expect(ship.get()).to.deep.equal({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          firepower: 23,
          energy: 99,
          recharge: 20
        })
      })
    })
  })

  describe('#damage', () => {
    let ship

    beforeEach(() => {
      ship = new Starship({ hull: 10, shield: 10 })
    })

    it('should decrease the value of shield only', () => {
      ship.damage(5)

      const { hull, shield } = ship.get()

      expect(shield).to.equal(5)
      expect(hull).to.equal(10)
    })

    it('should decrease the value of shield to 0 and hull by 1', () => {
      ship.damage(11)

      const { hull, shield } = ship.get()

      expect(shield).to.equal(0)
      expect(hull).to.equal(9)
    })

    it('should decrease the value of shield and hull to 0', () => {
      ship.damage(25)

      const { hull, shield } = ship.get()

      expect(shield).to.equal(0)
      expect(hull).to.equal(0)
    })
  })
})
