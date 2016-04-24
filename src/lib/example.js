import Starship from './starship'
import Battlecruiser from './battlecruiser'
import Battle from './battle'

// create and setup a Starship
const enterprise = new Starship({
  name: 'Enterprise',
  firepower: 5
})

// create a Battlecruiser w/o initial setup
const borg = new Battlecruiser()

// set properties to a ship
borg.set({
  name: 'Borg Cube',
  firepower: 15,
  shield: 0,
  hull: 1000,
  recharge: 10,
  energy: 70
})

// attack a ship
borg.attack(enterprise)

// get properties of a ship
console.log(enterprise.report())

// create a Battle
const battle = new Battle(enterprise, borg, 20)

// start a Battle and get the final result in a callback
battle.start((err, result) => {
  if (err) {
    return console.error(err)
  }

  console.log(result)
})
