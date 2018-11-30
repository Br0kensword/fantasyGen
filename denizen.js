const fantasyNames = require('./fantasyNames.js')  //using for all names atm

const baseStat = 10;
const fantasyDenizens = ['Humans', 'Elves', 'Orcs', 'Goblins', 'Ancient Ones', 'LizardFolk', 'RatFolk',  'Dwarves', 'Gnones',
						 'Titans', 'Clockwork', 'Halflings', 'BirdFolk', 'Giants', 'Trolls', 'Ogres', 'Firbolg', 'Kolbolds',
						 'Tritons', 'Centaurs', 'Minotaurs', 'Fey'];

const elements = ['Air', 'Astral', 'Blood', 'Death', 'Earth', 'Fire', 'Nature', 'Water'];

const sizes = ['Very Small', 'Small', 'Medium', 'Large', 'Very Large', 'Titanic'];

const technology = ['Wild Age', 'Bronze Age', 'Iron Age', 'Steel Age', 'SteamPunk'];

const magic = ['None', 'Wild', 'Low', 'High'];

const goverment = [["Anarchy", 'Nomadic Horde', 'Tribal Federation', 'Tribal Despotism', 'Native Council', 'Peasants Republic'],
				    ["Anarchy", 'Tribal Despotism', 'Tribal Monarchy', 'Plutocracy', 'Oligarchy', 'Noble Republic', 'Peasants Republic', 'Free City', 'Monastic Order', 'Merchant Republic'],
				    ['Feudal Monarchy', 'Autocracy', 'Shogunate', 'Elective Monarchy', 'Iqta', 'Feudal Theocracy', 'Feudal Confederacy', 'Plutocracy', 'Oligarchy', 'Noble Republic', 'Peasants Republic', 'Free City', 'Monastic Order', 'Merchant Republic'],
				    ['Empire', 'Feudal Monarchy', 'Autocracy', 'Shogunate', 'Elective Monarchy', 'Iqta', 'Feudal Theocracy', 'Feudal Confederacy', 'Plutocracy', 'Oligarchy', 'Noble Republic', 'Peasants Republic', 'Free City', 'Monastic Order', 'Merchant Republic'],
				    ['Presidential Dictator', 'Empire', 'Autocracy', 'Shogunate', 'Elective Monarchy', 'Plutocracy', 'Oligarchy', 'Noble Republic', 'Peasants Republic', 'Free City', 'Merchant Republic', 'Native Council']
				    ]




function generateDenizen(){
	let denizen = {}
	let gender = Math.round(Math.random())
	let place = fantasyNames.male[Math.floor( (Math.random() * fantasyNames.male.length) + 1) - 1]
	if (gender === 0){
		place = fantasyNames.female[Math.floor( (Math.random() * fantasyNames.female.length) + 1) - 1]
	}

	denizen.Type = fantasyDenizens[Math.floor( (Math.random() * fantasyDenizens.length) + 1) - 1] // select denizen type

	let magicNum = Math.floor( (Math.random() * magic.length) + 1) - 1 // select magic mastery level
	denizen.Magic = magic[magicNum]

	let elementsCount = 0
	let denizenElements = []

	// pick which if any magic paths denizen has affintiy for

	while (elementsCount < magicNum){
		element = elements[Math.floor( (Math.random() * elements.length) + 1) - 1]
		if ( denizenElements.indexOf(element) === -1 ){
			denizenElements.push(element)
			elementsCount++
		}
		
	}

	denizen.MagicAffinity = denizenElements

	let techLevel = Math.floor( (Math.random() * technology.length) + 1) - 1

	denizen.Technology = technology[techLevel] //select technology level

	let govOptions = goverment[techLevel]
	denizen.Goverment = govOptions[Math.floor( (Math.random() * govOptions.length) + 1) -1]

	denizen.Name = `The ${denizen.Type} of ${place}`

	return denizen
}

let denizenList = []

for(let x = 0; x < 4; x++){
	denizenList.push(generateDenizen())
}

console.log(denizenList)