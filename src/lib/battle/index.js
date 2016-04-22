
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
    for (let turnCounter = 1; turnCounter <= this.turn; turnCounter++) {
      if (this.shipA.recharge) {
        this.shipA.recharge()
      }

      this.shipA.attack(this.shipB)

      if (this.shipB.isDestroyed) {
        return callback(null, {
          winner: this.shipA,
          turn: turnCounter
        })
      }

      if (this.shipB.recharge) {
        this.shipB.recharge()
      }

      this.shipB.attack(this.shipA)

      if (this.shipA.isDestroyed) {
        return callback(null, {
          winner: this.shipB,
          turn: turnCounter
        })
      }
    }

    return callback(null, {
      draw: true
    })
  }

}
