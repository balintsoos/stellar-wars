import Starship from './lib/starship'

const enterprise = new Starship({
  name: 'Enterprise'
})

const borg = new Starship({
  name: 'Borg Cube'
})

enterprise.set({
  firepower: 1
})

borg.set({
  shield: 0,
  hull: 1000,
  recharge: 23
})

console.log(enterprise.report())
console.log(borg.report())

enterprise.attack(borg)

console.log(enterprise.report())
console.log(borg.report())
