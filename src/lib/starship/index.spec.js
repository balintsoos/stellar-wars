import Starship from '.'
import { expect } from 'chai'

describe('Starship', () => {

  describe('#constructor', () => {
    describe('with empty config', () => {
      it('should create a default starship', () => {
        const ship = new Starship({})

        expect(ship).be.a('object')
        expect(ship.report()).to.be.a('object')
      })
    })
  })

})
