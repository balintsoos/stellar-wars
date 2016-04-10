import config from './config'

export default class Starship {

  constructor({
    name = config.name,
    hull = config.hull,
    shield = config.shield,
    weapon = config.weapon,
    energy = config.energy,
    recharge = config.recharge
  } = {}) {
    this.props = {
      name,
      hull,
      shield,
      weapon,
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
    weapon = this.props.weapon,
    energy = this.props.energy,
    recharge = this.props.recharge
  } = {}) {
    this.props = {
      name,
      hull,
      shield,
      weapon,
      energy,
      recharge
    }
  }

  report() {
    return this.get()
  }

  refresh(config) {
    this.set(config)
  }

}
