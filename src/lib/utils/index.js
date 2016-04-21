//  Utility functions

function decreaseBy(number, by, minimum = 0) {
  return Math.max(minimum, number - by)
}

function increaseBy(number, by, maximum = 100) {
  return Math.min(maximum, number + by)
}

export default {
  decreaseBy,
  increaseBy
}
