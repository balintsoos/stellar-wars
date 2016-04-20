import utils from '../utils'
import config from './config'

export default class Starship {

  constructor({
    name = config.name,
    hull = config.hull,
    shield = config.shield,
    firepower = config.firepower,
    energy = config.energy,
    recharge = config.recharge
  } = {}) {
    this.props = {
      name,
      hull,
      shield,
      firepower,
      energy,
      recharge
    }
  }

  get() {
    return this.props
  }

  set({
    name = this.props.name,
    hull = this.props.hull,
    shield = this.props.shield,
    firepower = this.props.firepower,
    energy = this.props.energy,
    recharge = this.props.recharge
  } = {}) {
    this.props = {
      name,
      hull,
      shield,
      firepower,
      energy,
      recharge
    }
  }

  report() {
    return this.get()
  }

  get isDestroyed() {
    const { hull } = this.get()
    return hull === 0
  }

  attack(enemy) {
    const { firepower } = this.get()
    enemy.damage(firepower)
  }

  damage(firepower) {
    const { hull, shield } = this.get()

    const damagedShield = utils.decreaseBy(shield, firepower)
    const damagedHull = (shield - firepower) >= 0
      ? hull
      : utils.decreaseBy(hull, Math.abs(shield - firepower))

    this.set({
      hull: damagedHull,
      shield: damagedShield
    })
  }

}
