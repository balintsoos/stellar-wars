import Starship from './lib/starship'
import Battlecruiser from './lib/battlecruiser'
import Battle from './lib/battle'

const enterprise = new Starship({
  name: 'Enterprise',
  firepower: 5
})

const borg = new Battlecruiser()

borg.set({
  name: 'Borg Cube',
  shield: 0,
  hull: 1000,
  recharge: 10,
  energy: 70
})

borg.attack(enterprise)

const battle = new Battle(enterprise, borg, 20)

battle.start((err, result) => {
  if (err) {
    return console.error(err)
  }

  console.log(result)
})
