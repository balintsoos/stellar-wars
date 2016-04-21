import { expect } from 'chai'
import utils from '../utils'

describe('Utils', () => {
  describe('#decreaseBy', () => {
    it('should decrease the first parameter by the second one', () => {
      expect(utils.decreaseBy(10, 3)).to.equal(7)
      expect(utils.decreaseBy(7, -2)).to.equal(9)
      expect(utils.decreaseBy(-1, -2)).to.equal(1)
      expect(utils.decreaseBy(5, 4)).to.equal(1)
      expect(utils.decreaseBy(3, 3)).to.equal(0)
      expect(utils.decreaseBy(2, 4)).to.equal(0)
      expect(utils.decreaseBy(0, 2)).to.equal(0)
      expect(utils.decreaseBy(-3, 2)).to.equal(0)
      // set minimum barrier to -2
      expect(utils.decreaseBy(1, 4, -2)).to.equal(-2)
    })
  })

  describe('#increaseBy', () => {
    it('should increase the first parameter by the second one', () => {
      expect(utils.increaseBy(10, 3)).to.equal(13)
      expect(utils.increaseBy(-1, -2)).to.equal(-3)
      expect(utils.increaseBy(-3, 2)).to.equal(-1)
      expect(utils.increaseBy(99, 4)).to.equal(100)
      expect(utils.increaseBy(100, 3)).to.equal(100)
      expect(utils.increaseBy(105, 2)).to.equal(100)
      // set maximum barrier to 10
      expect(utils.increaseBy(9, 3, 10)).to.equal(10)
    })
  })
})
