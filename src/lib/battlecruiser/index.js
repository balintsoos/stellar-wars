import utils from '../utils'
import Starship from '../starship'
import config from './config'

export default class Battlecruiser extends Starship {
  constructor({
    name = config.name,
    hull = config.hull,
    shield = config.shield,
    firepower = config.firepower,
    energy = config.energy,
    recharge = config.recharge
  } = {}) {
    super({
      name,
      hull,
      shield,
      firepower,
      energy
    })

    this.props.recharge = recharge
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

  recharge() {
    const { shield, energy, recharge } = this.get()

    const drainedEnergy = utils.decreaseBy(energy, recharge)
    const chargedShield = (energy - recharge) >= 0
      ? utils.increaseBy(shield, recharge)
      : utils.increaseBy(shield, energy)

    this.set({
      shield: chargedShield,
      energy: drainedEnergy
    })
  }
}
