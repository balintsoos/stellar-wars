//  Utility functions

const decreaseBy = (number, by, minimum = 0) => Math.max(minimum, number - by)

const increaseBy = (number, by, maximum = 100) => Math.min(maximum, number + by)

export default {
  decreaseBy,
  increaseBy
}
