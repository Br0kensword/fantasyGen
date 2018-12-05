const FN = require('./fantasyNames.js') 

const elements = ['Air', 'Astral', 'Blood', 'Death', 'Earth', 'Fire', 'Nature', 'Water'];

const airTitles = ["Keeper of the Breath of Life", "They who Mounts the Clouds", "Great Hurricane of the Heavens", "Sky of all the People", "Maker of the Storms", "Warrior in the Gale", "the Pillar that is Purity", "Tamer of the Black Wind", "Commander of Thunder and Lightning", "Bane of the Four Winds", "Blower of the Freezing Winds", "Lord of the Scorching Winds"]
const astralTitles = ["the Face Painted with Bells", "who Gave Birth to Fate",  "the Persuasive One", " Diviner of Doors and Beginnings and Endings",  "who Makes Clear the Way", "who Confuses the Way", "the Far Traveler", "Creator of the Calendar", "Keeper of the Sacred Eye", "Watcher of the New Sun", "who Gave Birth to Time", "the Undeceivable God", "the Baleful Eye", "Pivot of the Universe", "Gurdian of the Pole Star"]
const bloodTitles = ["Tamer of Demons", "the Infernal Sovereign", "the Leeching Darkness", "Bane of the Living", "Well of Suffering", "Source of Taint", "the Power Perverse", ]
const deathTitles = ["the Collector of Souls", "Flyer of the Night Sky", "Scrivner of Dark Magics", "the Dead and Undying God", "Star of the Dead", "Demon God of Terror" , "the Watcher of the Gallows", "the Eternal Judge", "Master of Death and Rebirth", "Guardian of the Dead", "who Gave Birth to Death", "Source of Disease", "God of Shadows" , "Who Loves not the Light", "the Shadow Over All", "Soul of Darkness"]
const earthTitles = ["Weeper of the Soil", "Giver of Bricks", "Wellspring of Earthquakes", "the Fortifier", "Protector of the Holy Mountain", "Who Seals the Gates of Death", "Giver of Strength", "the Maker of Mountains", "the Mountain Lord", "the Personification of Strength", "the Unshakable", "the Armorer" , "the Unmoving Master", "the Earth Monster", "the Inventor of Science", "Smelter of Metals", "Dancer in the Foothills", "the Divine Smith", "Patron of Smiths"]
const fireTitles = ["Soul of Volcanic Fire", "Eruptor of Spring and Sunlight", "Devourer of Sins", "Enemy of Darkness", "Genesis of the Dawn", "the Burning Soul" , "Feeder on Impurity" , "the Everburning One", "the Brilliant God", "Spark of Heavenly Fires", "Holder of the Desert Sun" , "Flower of Brilliance" , "Spawn of Volcanoes", "Lord of Ashes", "Lighter of Every Flame"]
const natureTitles = ["Harbinger of the Dying Forests", "Fecund Breed","the Wild Bull who has Lain Down", "Caller of the Wild Cows", "Patron of Animals" ,"Warden of the Forest", "Bestower of Fertility", "Source of Growth", "Protector of All Children", "the Womb of Time", "Bestower of the Healing Arts", ]
const waterTitles = ["Bestower of Navigation", "Divine Inspector of Canals", "Turner of the Flood", "Ruler of the Ocean", "Protector of the Fishes", "Opener of the Wells", "Keeper of the Water Dead", "Drinker of Primordial Waters", "Song of the Eternal Sea", "Tamer of the Raging Seas", "the Boiling Spirit", "Caller of Rain", "Womb of Rivers", "Harvester of Sailors", "Lover of Water"]

const godType = ['pancreator','duality', 'triad', 'pantheon']

function generateTitle(element){
	let titleElement = ''

	switch (element){
		case 'Air':
			titleElement = airTitles[Math.floor( (Math.random() * airTitles.length) + 1) - 1]
			break
		case 'Astral':
			titleElement = astralTitles[Math.floor( (Math.random() * astralTitles.length) + 1) - 1]
			break
		case 'Blood':
			titleElement = bloodTitles[Math.floor( (Math.random() * bloodTitles.length) + 1) - 1]
			break
		case 'Death':
			titleElement = deathTitles[Math.floor( (Math.random() * deathTitles.length) + 1) - 1]
			break
		case 'Earth':
			titleElement = earthTitles[Math.floor( (Math.random() * earthTitles.length) + 1) - 1]
			break
		case 'Fire':
			titleElement = fireTitles[Math.floor( (Math.random() * fireTitles.length) + 1) - 1]
			break
		case 'Nature':
			titleElement = natureTitles[Math.floor( (Math.random() * natureTitles.length) + 1) - 1]
			break
		default:
			titleElement = waterTitles[Math.floor( (Math.random() * waterTitles.length) + 1) - 1]
	}
	return titleElement
}


function generateDeity(){
	let deity = {}
	let deityTitleNum = Math.floor((Math.random() * 5) + 1)
	let magicNum = Math.floor( (Math.random() * elements.length) + 1) - 1
	let elementsCount = 0
	let titleCount = 0
	let deityElements = []
	let deityTitles = ""

	// pick which if any magic paths the deity is a vessel of

	while (elementsCount < magicNum){
		element = elements[Math.floor( (Math.random() * elements.length) + 1) - 1]
		if ( deityElements.indexOf(element) === -1 ){
			deityElements.push(element)
			elementsCount++
		}
		
	}
	deity.MagicAffinity = deityElements

	while (titleCount < deityTitleNum){
		element = deityElements[Math.floor( (Math.random() * deityElements.length) + 1) - 1]
		deityTitles = deityTitles + " " +  generateTitle(element) + ","
		titleCount++
	}

	deity.Name = FN.generateName() + "," + deityTitles
	return deity
}



console.log(generateDeity())

