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
          weapon: 23,
          energy: 99
        })
        expect(ship.get()).to.deep.equal({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          weapon: 23,
          energy: 99,
          recharge: 20
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
          weapon: 23,
          energy: 99
        })
        expect(ship.get()).to.deep.equal({
          name: 'Enterprise',
          hull: 54,
          shield: 88,
          weapon: 23,
          energy: 99,
          recharge: 20
        })
      })
    })
  })
})
