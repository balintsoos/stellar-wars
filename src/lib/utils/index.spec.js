import { expect } from 'chai'
import utils from '../utils'

describe('Utils', () => {
  describe('#decreaseBy', () => {
    it('should decrease the first parameter by the second one as a whole number', () => {
      expect(utils.decreaseBy(10, 3)).to.equal(7)
      expect(utils.decreaseBy(7, -2)).to.equal(9)
      expect(utils.decreaseBy(-1, -2)).to.equal(1)
      expect(utils.decreaseBy(5, 4)).to.equal(1)
      expect(utils.decreaseBy(3, 3)).to.equal(0)
      expect(utils.decreaseBy(2, 4)).to.equal(0)
      expect(utils.decreaseBy(0, 2)).to.equal(0)
      expect(utils.decreaseBy(-3, 2)).to.equal(0)
    })
  })
})
