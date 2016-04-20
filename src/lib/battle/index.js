
export default class Battle {

  constructor(shipA, shipB, turn = 10) {
    if (!shipA || !shipB) {
      throw new Error('Missing parameter(s)')
    }

    this.shipA = shipA
    this.shipB = shipB
    this.turn = turn
  }

  start(callback) {
    for (let i = 1; i <= this.turn; i++) {
      this.shipA.attack(this.shipB)

      if (this.shipB.isDestroyed) {
        return callback(null, {
          winner: this.shipA,
          turn: i
        })
      }

      this.shipB.attack(this.shipA)

      if (this.shipA.isDestroyed) {
        return callback(null, {
          winner: this.shipB,
          turn: i
        })
      }
    }

    return callback(null, {
      draw: true
    })
  }

}
