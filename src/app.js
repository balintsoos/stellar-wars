import Starship from './lib/starship'
import Battle from './lib/battle'

const enterprise = new Starship({
  name: 'Enterprise',
  firepower: 1
})

const borg = new Starship({
  name: 'Borg Cube'
})

borg.set({
  shield: 0,
  hull: 1000,
  recharge: 23
})

enterprise.attack(borg)

const battle = new Battle(enterprise, borg, 15)

battle.start((err, result) => {
  if (err) {
    return console.error(err)
  }

  console.log(result)
})
