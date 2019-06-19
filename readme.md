# 0 A.D. is Actually Before Christ
**0abc**, a modification of “0 A.D. Empires Ascendant”, version 0.0.23 “Alpha XXIII: Ken Wood”

<!-- 
TODO: get the AI to:
* build a forge next to metal mines
* take into account Barracks is a city structure
-->

## Table of Contents
* [Instructions](https://github.com/0abc/0abc-a23#instructions)
* [Overview](https://github.com/0abc/0abc-a23#overview)
  * [AI](https://github.com/0abc/0abc-a23#ai)
  * [Structures](https://github.com/0abc/0abc-a23#structures)
    * [Base](https://github.com/0abc/0abc-a23#base)
    * [Civic](https://github.com/0abc/0abc-a23#civic)
    * [Defensive](https://github.com/0abc/0abc-a23#defensive)
    * [Economic](https://github.com/0abc/0abc-a23#economic)
    * [Military](https://github.com/0abc/0abc-a23#military)
    * [Resource](https://github.com/0abc/0abc-a23#resource)
  * [Units](https://github.com/0abc/0abc-a23#units)
    * [Walk speed](https://github.com/0abc/0abc-a23#population-costs)
    * [Population costs](https://github.com/0abc/0abc-a23#population-costs)
    * [Recruitment costs](https://github.com/0abc/0abc-a23#recruitment-costs)
    * [Damage types](https://github.com/0abc/0abc-a23#damage-types)
    * [Bonus attacks](https://github.com/0abc/0abc-a23#bonus-attacks)
  * [Upkeep and income](https://github.com/0abc/0abc-a23#upkeep-and-income)
  * [Auras and technologies](https://github.com/0abc/0abc-a23#auras-and-technologies)
    * [Structure auras](https://github.com/0abc/0abc-a23#structure-auras)
    * [Unit auras](https://github.com/0abc/0abc-a23#unit-auras)
    * [Class bonuses](https://github.com/0abc/0abc-a23#class-bonuses)
    * [Civilization bonuses](https://github.com/0abc/0abc-a23#civilization-bonuses)
    * [Team bonuses](https://github.com/0abc/0abc-a23#team-bonuses)
<!--
* [Unit rosters](https://github.com/0abc/0abc-a23#unit-rosters)
  * [Carthage](https://github.com/0abc/0abc-a23#carthage)
  * [Gauls](https://github.com/0abc/0abc-a23#gauls)
  * [Kush](https://github.com/0abc/0abc-a23#kush)
  * [Macedon](https://github.com/0abc/0abc-a23#macedon)
  * [Mauryan India](https://github.com/0abc/0abc-a23#mauryas)
  * [Ptolemaic Egypt](https://github.com/0abc/0abc-a23#ptolemies)
  * [Rome](https://github.com/0abc/0abc-a23#rome)
  * [Seleucid Empire](https://github.com/0abc/0abc-a23#seleucids)
-->
* [Requests](https://github.com/0abc/0abc-a23#requests)
  * [Art](https://github.com/0abc/0abc-a23#art)
  * [Features](https://github.com/0abc/0abc-a23#features)



## Instructions
* Download the zip or `git clone` this repository (`https://github.com/0abc/0abc-a23.git`).
* Place it in your `/0ad/mods/` folder:
  * GNU/Linux (e.g. Fedora) typically: `~/.local/share/0ad/mods/`
  * Apple OS X typically: `~/Library/Application\Support/0ad/mods/`
  * Microsoft Windows typically: `~\Documents\My Games\0ad\mods\`
* Launch 0 A.D., click “Settings” and “Mod Selection”
* Select `0abc`, click “Enable” and “Save Configuration”
* Add, remove, or move up or down any other mods, click “Save Configuration” and “Start Mods”
* Click “Learn To Play” and “Structure Tree” to see the mod(s) implemented.
* For more detailed information, please have a look at **0abc-readme.pdf**

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)



## Overview
*Parts of this readme might be outdated. For more accurate information, please have a look at* **0abc-readme.pdf**
* three phases: village, town, city
* four damage types: crush, hack, pierce, thrust
* five resources: silver, food, wood, stone, iron
* six structure categories: base, civic, defensive, economic, military, resource
* eight civilizations: Carthage, Gauls, Kush, Macedon, Mauryan India, Ptolemaic Egypt, Rome, Seleucid Empire

Changes include, but are not limited to:
* introduced a new resource: silver
* pierce damage is split into pierce (arrows) and thrust (spears)
* most units and many structures steadily consume small amounts of resources (upkeep)
* removed loot and looter, because they favour the victors, who are already at an advantage
* increased unit training and technology research times
* a greater variety of aura range visualization markers
* merged Athenians and Spartans into a single faction, the Greeks
* disabled unit promotion, champions, heroes, team bonuses; they might be reintroduced at a later stage
* all civilization bonuses and penalties are replaced with new ones
* numerous minor tweaks and balances, most of which will probably go unnoticed

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

### AI
The AI no longer gets a resource stockpiling bonus or penalty, but the difficulty level determines how much time it takes to train units, build structures, or research technologies:
* Very Hard: 50%
* Hardest: 71%
* Medium: 100%
* Easy: 141%
* Very Easy: 200%

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Structures
* economic structures can be constructed in neutral territory
* dropsites are just that: dropsites; all economic technologies are moved to the market, which is now available in the village phase
* town phase requires a market and five houses, city phase a temple and ten houses
* centres can be part of trade routes
* walls are stronger but also more expensive and slower to construct; all factions have palisades (village), siege walls (town), and city walls (city)
* fortresses have a territory root, are purely defensive structures, have somewhat more health, but no longer train any units
* all factions have cavalry stables (village) and siege workshops (town); most have separate economic docks (village) and military shipyards (town); many have elephant stables (city)

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Base
*(can be both captured and destroyed)*
* centre *(village; neutral and own territory; conquest critical)*: territory root; increase population limit; food, wood, stone dropsite; train worker-infantry 
* house *(village; own territory; conquest critical)*: increase population limit; train women
* palace *(city; own territory)*: territory root
* fortress *(city; own territory)*: territory root; shoots arrows
* naval base *(city; allied, neutral, own territory)*: quickly construct and repair galleys

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Civic
*(can only be captured)*
* temple *(town; own territory)*: heal nearby units; heal garrisoned units; train healers; research healing technologies
* pillar *(town; own territory)*: improve nearby units; not garrisonable
* theatre *(city; own territory)*: reduce unit training times
* library *(city; own territory)*: reduce technology research costs
* lighthouse *(city; own territory)*: very high vision, improve movement speed of nearby ships
* wonder *(city; own territory; conquest critical)*: many bonuses

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Defensive
*(can only be destroyed)*
* outpost *(village; neutral and own territory)*
* small tower *(village; own territory)*: shoots arrows
* large tower *(town; own territory)*: shoots arrows
* palisade *(village; allied, enemy, neutral, own territory)*: not garrisonable
* siege walls *(town; enemy, neutral, own territory)*
* city walls *(city; neutral, own territory)*

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Economic
*(can only be captured)*
* farm *(village; neutral and own territory)*: harvest grain
* farmstead *(village; neutral and own territory)*: food dropsite
* storehouse *(village; neutral and own territory)*: wood and stone dropsite
* forge *(village; neutral and own territory)*: iron dropsite; research economic technologies
* market *(village; neutral and own territory)*: barter resources; train slaves and traders; establish trade routes
* dock *(village; neutral and own territory)*: food, wood, stone dropsite; construct fishing boats, merchant ships, barges; establish trade routes
* rotary mill *(village; neutral and own territory)*: nearby workers improved grain gather rate

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Military
*(can be both captured and destroyed)*
* stable *(village; own territory; conquest critical)*: cavalry
* hall *(town; own territory; conquest critical)*: infantry mercenaries
* arsenal *(town; own territory; conquest critical)*: chariotry, crossbowmen, siege engines
* mercenary camp *(town; neutral and own territory; conquest critical)*: civ-independent mercenaries
* shipyard *(town; neutral and own territory; conquest critical)*: galleys
* barracks *(town; own territory; conquest critical)*: infantry champions
* elephant stable *(town; own territory; conquest critical)*: elephantry

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Resource
*(can only be captured)*
* farm *(village; neutral and own territory)*: harvest grain

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Units
* all units are bribable (vision sharing), except for fauna
* animals are no longer visible in fog
* female citizens renamed to women; they can no longer build or repair
* cavalry can no longer gather resources
* camelry, chariotry, and elephantry are no longer considered cavalry
* chariotry can no longer attack ships, siege, or structures
* siege weapons are no longer capturable
* battering rams can no longer attack organic units
* all factions can construct rams (town)
* all factions can train slaves (city)

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Population costs
* 0: animals, catafalques, heroes, ships
* 1: infantry, women, healers, traders
* 2: camelry, cavalry, scorpio
* 3: worker elephants
* 4: bigae, battering rams, polybolos, oxybeles, stone throwers
* 5: –
* 6: quadrigae, war elephants, siege towers

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Recruitment costs
*Default values (can be changed by auras, technologies, etc.)*:
* Support:
  * healer (town; temple): 30 food, 60 silver; 60 seconds
  * woman (village; house): 30 food; 60 seconds
  * slave (city; market): 30 silver; 30 seconds
  * trader (village; market): 50 food, 50 wood, 50 iron; 30 seconds
  * worker elephant (village; elephant stable): 150 food; 60 seconds
* Soldier:
  * infantry: 30 food, 30 silver; 30 seconds
  * camelry: 70 food, 35 silver; 45 seconds
  * cavalry: 80 food, 40 silver; 60 seconds
  * bigae: 160 food, 90 silver; 75 seconds
  * quadrigae: 240 food, 120 silver; 75 seconds
  * North African war elephants: 270 food, 270 silver; 81 seconds
  * Indian war elephants: 330 food, 330 silver; 99 seconds
**NB**: champions cost +200% silver, mercenaries 0 other resources but +100% silver
* Siege:
  * ram: 100 food, 250 wood, 50 iron; 40 seconds
  * large ram: 100 food, 350 wood, 50 iron; 50 seconds
  * scorpio: 50 food, 50 wood, 100 iron; 60 seconds
  * oxybeles: 100 food, 150 wood, 150 iron; 80 seconds
  * polybolos: 100 food, 150 wood, 150 iron; 90 seconds
  * stone-thrower: 100 food, 200 wood, 100 iron; 100 seconds
  * siege tower: 200 food, 500 wood, 300 iron; 150 seconds
* Ship:
  * fishing boat: 15 food, 60 wood; 20 seconds
  * merchant ship: 30 food, 120 wood, 60 iron; 40 seconds
  * fireship: 150 wood; 15 seconds
  * barge: 50 food, 250 wood, 100 iron; 50 seconds
  * large barge: 100 food, 400 wood, 150 iron; 80 seconds
  * triaconter: 60 food, 60 wood, 30 iron; 30 seconds
  * penteconter: 100 food, 100 wood, 50 iron; 45 seconds
  * trireme: 300 food, 300 wood, 150 iron; 60 seconds
  * quadrireme: 400 food, 400 wood, 200 iron; 75 seconds
  * quinquereme: 500 food, 500 wood, 250 iron; 90 seconds

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Walk speed
*Default values (can be changed by auras, technologies, etc.)*:
* 4: siege towers
* 6: battering rams
* 7: packed stone-throwers
* 8: packed bolt-shooters
* 9: support
* 10: infantry
* 12: elephantry
* 15: cavalry
* 16: bigae
* 17: quadrigae
* 18: camelry

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Damage types
There are four damage types (crush, hack, pierce, thrust)
* support:
  * woman (15 range): 100% crush
* infantry:
  * lead slinger (80+1 range): 100% pierce
  * archer (60+1 range): 100% pierce
  * crossbowman (50+1 range): 67% pierce, 33% thrust
  * stone slinger (40+1 range): 100% crush
  * javelineer (30+1 range): 100% pierce
  * throwing axeman (20+1 range): 33% crush, 67% hack
  * maceman (melee): 100% crush
  * axeman (melee): 33% crush, 67% hack
  * sabreman (melee): 100% hack
  * longswordsman (melee): 75% hack, 25% thrust
  * swordsman (melee): 50% hack, 50% thrust
  * spearman (melee): 100% thrust
  * pikeman (melee): 50% pierce, 50% thrust
* camelry:
  * archer (60+3 range): 100% pierce
  * javelineer (30+3 range): 100% pierce
  * spearman (melee): 100% thrust
* cavalry:
  * archer (60+2 range): 100% pierce
  * crossbowman (50+2 range): 67% pierce, 33% thrust
  * javelineer (30+2 range): 100% pierce
  * maceman (melee): 100% crush
  * axeman (melee): 33% crush, 67% hack
  * sabreman (melee): 100% hack
  * swordsman (melee): 50% hack, 50% thrust
  * spearman (melee): 100% thrust
  * lancer (melee): 20% crush, 80% thrust
* chariotry:
  * archer (60+2 range): 100% pierce
  * javelineer (30+2 range): 100% pierce
  * scythed (melee): 20% crush, 40% hack, 40% thrust
* elephantry (melee): 100% crush
* siege:
  * ram (melee): 100% crush
  * bolt shooter (15–90 range): 67% pierce, 33% thrust
  * stone thrower (30–90 range): 100% crush
  * tower (10–60+15 range): 75% pierce, 25% crush
* fireship: 25% each
* wargalleys: melee 100% crush, ranged 100% pierce
* structures (ranged): 100% pierce

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Bonus attacks
* melee infantry: –
* ranged infantry: –
* melee cavalry: 0.75× vs Chariotry, 0.5× vs Elephantry
* ranged cavalry: –
* melee camelry: 0.5× vs Elephantry
* ranged camelry: –
* chariotry: –
* war elephants: –
* bolt shooters: 1.5× vs Elephantry
* stone throwers: 2.0× vs Ships
* battering rams: 2.0× vs Defensive
* siege towers: 1.5× vs Towers

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Auras and technologies
#### Structure auras
* {Centre} **Settlement Core** (75 m): workers +20% build rate, −20% resource gather base speed; structures +100% ungarrisoned base capture points regeneration.
* {Library} **Power of Knowledge** (global): technologies −10% resource costs and research time per library owned.
* {Iberian Pillar} **Religious Fervour** (50 m): soldiers +20% melee and ranged attack damage.
* {Mauryan Pillar} **Edicts of Ashoka** (75 m): traders +20% movement speed.
* {Rotary Mill} **Farming Bonus** (60 m): workers +20% farming gather rate.
* {Temple} **Medical Treatment** (40 m): humans +1.0 health regeneration rate.
* {Theatre} **Hellenization** (global): units −5% training time per theatre owned.
* {Wonder} **Blessing of the Gods** (50 m): humans +2.0 health regeneration rate.
* {Wonder} **Monumental Awe** (100 m): enemy units −5% movement speed.
* {Wonder} **Symbol of Greatness** (global): structures +10% territory influence radius per wonder owned.
* {Wonder} **Glorious Expansion** (global): +10% maximum population limit per wonder owned (requires “Glorious Expansion” technology).

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Unit auras
* {Camel} **Stench** (15 m): enemy cavalry −20% attack damage and capture strength.
* {Chariot} **Noise** (12 m): enemy infantry −15% attack damage and capture strength.
* {Elephant} **Intimidation** (10 m): enemy soldiers −10% attack damage and capture strength.
* {Merchant} **Convoy** (20 m): own naval traders +2.0 pierce armour.
* {Trader} **Caravan** (10 m): own land traders +2.0 pierce armour.

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Class bonuses
* **Champion**: +200% silver cost, +100% training time, +50% health, +2.0 armour levels, +100% capture attack strength, +50% melee and ranged attack damage.
* **Veteran**: +50% silver cost, +50% training time, +20% health, +1.0 armour levels, +50% capture attack strength, +30% melee and ranged attack damage.
* **Mercenary**: +100% silver cost, 0 other resource costs, −50% training time, +10% health, +25% capture attack strength, +15% melee and ranged attack damage.
* **Cataphract**: +20% silver cost, +2 armour levels, −5% movement speed.
* **Fanatic**: −3 armour levels, +15% melee attack damage, +30% movement speed.
* **Balearic**: −10% health, +5% ranged attack damage, −10% reload time, −10% spread, +5% movement speed.
* **Libyan**: −5% health, +5% ranged attack damage, −5% reload time, +5% movement speed.
* **Numidian**: −10% health, +5% ranged attack damage, −10% reload time, −10% spread, +5% movement speed.

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Civilization bonuses
*All bonuses and penalties from the default distribution have been removed.*
* **Druidism** (Gauls): healers +2 armour levels.
* **Gallic Cavalry** (Gauls): melee cavalry −15% training time.
* **Gauls Architecture** (Gauls): structures −20% build time, −10% health; centres 0 stone cost, +100% wood cost; fortresses −50% stone cost, +50% wood cost; temples 0 stone cost, +200% wood cost.
* **Egyptian Architecture** (Ptolemies): economic structures −75% wood cost, +100% build time; fortresses +25% build time, +10% health.
* **Egyptian Medicine** (Ptolemies): healers −20% healing time.
* **Indian Architecture** (Mauryas): centres 0 stone cost, +100% wood cost; city walls and temples 0 stone cost, +200% wood cost, −30% build time, −20% health.
* **Indian Elephants** (Mauryas): elephants −15% training time.
* **Kushite Architecture** (Kushites): economic structures −75% wood cost, +100% build time; fortresses +25% build time, +10% health.
* **Macedonian Architecture** (Macedonians): temples +25% health.
* **Macedonian Engineers** (Macedonians): siege engines −15% construction time.
* **Priesthood of Amun** (Kuhites): healers +3 healing range.
* **Punic Architecture** (Carthaginians): city walls +20% stone cost, +20% build time, +30% health; fortresses +10% stone cost, +10% build time, +20% health; markets −50% wood cost.
* **Punic Merchants** (Carthaginians): traders −15% training time.
* **Roman Architecture** (Romans): military structures −10% build time; city walls +10% health.
* **Roman Engineers** (Romans): stone throwers +25% wood cost, +20% health, +25% ranged attack crush damage.
* **Syrian Architecture** (Seleucids): temples +25% health.

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Team bonuses
—

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)



<!--
## Unit rosters
### Carthage
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Archer
  * Cavalry Javelineer
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Spearman Mercenary
  * Infantry Swordsman Mercenary
  * Infantry Javelineer Mercenary
  * Infantry Lead-slinger Mercenary
  * Cavalry Javelineer Mercenary
  * Cavalry Sabreman Mercenary
  * Cavalry Swordsman Mercenary
  * Cavalry Spearman Mercenary
  * Small Battering Ram
  * Trireme
* City phase:
  * Infantry Spearman Champion
  * Cavalry Lancer Champion
  * War Elephant Champion
  * Oxybeles
  * Ballista
  * Quadrireme
  * Quinquereme

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Gauls
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Javelineer
  * Cavalry Swordsman
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Swordsman
  * Infantry Slinger
  * Cavalry Javelineer
  * Small Battering Ram
  * War Barge
* City phase:
  * Infantry Spearman Champion
  * Infantry Swordsman Champion
  * Cavalry Spearman Champion

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Kush
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Archer
  * Cavalry Javelineer
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Pikeman
  * Infantry Swordsman
  * *Nuba Infantry Maceman*
  * *Nuba Infantry Javelineer*
  * Cavalry Spearman
  * *Blemmye Camel Javelineer*
  * Large Battering Ram
  * Trireme
* City phase:
  * Infantry Axeman Champion
  * Infantry Sabreman Champion
  * Infantry Archer Champion
  * Cavalry Spearman Champion
  * War Elephant

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Macedon
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Pikeman
  * Infantry Javelineer
  * Cavalry Lancer
* Town phase:
  * Healer
  * Merchant Ship
  * *Greek Infantry Spearman*
  * *Cretan Infantry Archer*
  * *Rhodian Infantry Slinger*
  * Cavalry Javelineer
  * Large Battering Ram
  * Penteconter
  * Trireme
* City phase:
  * Infantry Spearman Champion
  * Infantry Crossbowman Champion
  * Cavalry Lancer Champion
  * War Elephant Champion
  * Oxybeles
  * Lithobolos
  * Siege Tower
  * Quinquereme

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Mauryan India
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Archer
  * Support Elephant
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Sabreman
  * Cavalry Swordsman
  * Cavalry Javelineer
  * Small Battering Ram
  * War Elephant
  * War Barge
* City phase:
  * Infantry Maceman Champion
  * Biga Archer Champion
  * War Elephant Champion
  * Lithobolos
  * Huge Barge

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Ptolemaic Egypt
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Pikeman
  * Infantry Stone-slinger
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Spearman Mercenary
  * Infantry Swordsman Mercenary
  * Infantry Javelineer Mercenary
  * *Greek Infantry Spearman*
  * *Cretan Infantry Archer*
  * *Rhodian Infantry Slinger*
  * Cavalry Spearman
  * Cavalry Javelineer
  * Large Battering Ram
  * Trireme
* City phase:
  * Infantry Pikeman Champion
  * Cavalry Spearman Champion
  * War Elephant Champion
  * Polybolos
  * Lithobolos
  * Siege Tower
  * Quadrireme
  * Quinquereme

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Rome
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Sabreman
  * Infantry Javelineer
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Swordsman
  * Infantry Spearman
  * Cavalry Spearman
  * Cavalry Javelineer
  * Large Battering Ram
  * Penteconter
  * Trireme
* City phase:
  * Infantry Swordsman Champion
  * Scorpio
  * Ballista
  * Quadrireme
  * Quinquereme

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Seleucid Empire
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Javelineer
  * Cavalry Javelineer
* Town phase:
  * Healer
  * Merchant Ship
  * Infantry Pikeman
  * Infantry Archer
  * Cavalry Lancer
  * *Dahae Horse Archer*
  * *Arab Camel Archer*
  * Large Battering Ram
  * Penteconter
  * Trireme
* City phase:
  * Infantry Pikeman Champion
  * Cavalry Lancer Champion
  * Quadriga Scythed Champion
  * War Elephant Champion
  * Lithobolos

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)
-->

## Requests
### Art
* melee attack for scythed chariots (pers b/a/e, sele c)
* ranged attack for slaves and women (crouch down to pick up stones, then throw them)
* swimming animations for crocodile
* kid (young goat), lamb (young sheep), piglet (young pig), calf (young cow), foal (young horse)

### Features
* AI: replace all hard-coded template file name paths with classes
* attach points for units (e.g. chariots, elephants), to allow soldiers to fight and be killed independently from the unit that's carrying them
* `<BuildRestrictions/Distance>` applies to other players as well, e.g. you can't build a fortress right next to one of a different player
* capturable foundations
* damage variance: instead of a fixed amount of damage, attack damage now varies from 50% to 150% of the defined value
* units should be able to have a garrison size greater than 1 (similar to population); e.g. cavalry occupies two garrison slots, elephants six
* resource variance: resource suppliers now start with a random amount between `<ResourceSupply/Min>` and `<ResourceSupply/Max>`.
* resource consumption for attacks; e.g. everytime a stone-thrower shoots, you pay 1 stone
* elevation bonus is taken into account for attack range visualization
* elevation bonus applies to vision range as well
* different ranged attacks for different garrisoned units (e.g. archers, javelineers, and stone-throwers on quinqueremes)

