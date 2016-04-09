export default class Starship {

  constructor({
    name = 'Starship',
    hull = 100,
    shield = 100,
    weapon = 20,
    energy = 100
  }) {
    this.props = {
      name,
      hull,
      shield,
      weapon,
      energy
    }
  }

  report() {
    return this.props
  }

  refresh({
    name = this.props.name,
    hull = this.props.hull,
    shield = this.props.shield,
    weapon = this.props.weapon,
    energy = this.props.energy
  }) {
    this.props = {
      name,
      hull,
      shield,
      weapon,
      energy
    }
  }

}
