# 0 A.D. is Actually Before Christ
**0abc**, a modification of “0 A.D. Empires Ascendant”, version 0.0.23 “Alpha XXIII: Ken Wood”

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
    * [Resource](https://github.com/0abc/0abc-a23#military)
  * [Units](https://github.com/0abc/0abc-a23#units)
    * [Population costs](https://github.com/0abc/0abc-a23#population-costs)
    * [Damage types](https://github.com/0abc/0abc-a23#damage-types)
    * [Bonus attacks](https://github.com/0abc/0abc-a23#bonus-attacks)
    * [Recruitment costs](https://github.com/0abc/0abc-a23#recruitment-costs)
  * [Upkeep and income](https://github.com/0abc/0abc-a23#upkeep-and-income)
  * [Auras and technologies](https://github.com/0abc/0abc-a23#auras-and-technologies)
    * [Structure auras](https://github.com/0abc/0abc-a23#structure-auras)
    * [Unit auras](https://github.com/0abc/0abc-a23#unit-auras)
    * [Class bonuses](https://github.com/0abc/0abc-a23#class-bonuses)
    * [Civilization bonuses](https://github.com/0abc/0abc-a23#civilization-bonuses)
    * [Team bonuses](https://github.com/0abc/0abc-a23#team-bonuses)
* [Unit rosters](https://github.com/0abc/0abc-a23#unit-rosters)
  * [Carthage](https://github.com/0abc/0abc-a23#carthage)
  * [Gauls](https://github.com/0abc/0abc-a23#gauls)
  * [Kush](https://github.com/0abc/0abc-a23#kush)
  * [Macedon](https://github.com/0abc/0abc-a23#macedon)
  * [Mauryan India](https://github.com/0abc/0abc-a23#mauryas)
  * [Ptolemaic Egypt](https://github.com/0abc/0abc-a23#ptolemies)
  * [Rome](https://github.com/0abc/0abc-a23#rome)
  * [Seleucid Empire](https://github.com/0abc/0abc-a23#seleucids)
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
* fauna is no longer visible in fog
* female citizens renamed to women; they can no longer build or repair
* cavalry can no longer gather resources
* camelry, chariotry, and elephantry are no longer considered cavalry
* chariotry can no longer attack ships, siege, or structures
* siege weapons are no longer capturable
* battering rams can no longer attack organic units
* all factions can construct rams (town)

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Population costs
* 0: fauna, catafalques, heroes, ships
* 1: infantry, women, healers, traders
* 2: camelry, cavalry
* 3: worker elephants
* 4: bigae, battering rams, bolt shooters, stone throwers
* 5: –
* 6: quadrigae, war elephants, siege towers

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Damage types
There are four damage types (crush, hack, pierce, thrust)
* support:
  * woman (15 range): 100% crush
* infantry:
  * lead sling (80+1 range): 100% pierce
  * longbow (70+1 range): 100% pierce
  * composite bow (60+1 range): 100% pierce
  * crossbow (50+1 range): 67% pierce, 33% thrust
  * stone sling (40+1 range): 100% crush
  * javelin (30+1 range): 100% pierce
  * throwing axe (20+1 range): 33% crush, 67% hack
  * mace (melee): 100% crush
  * axe (melee): 33% crush, 67% hack
  * sabre (melee): 100% hack
  * longsword (melee): 75% hack, 25% thrust
  * sword (melee): 50% hack, 50% thrust
  * spear (melee): 100% thrust
  * pike (melee): 50% pierce, 50% thrust
* camelry:
  * composite bow (60+3 range): 100% pierce
  * javelin (30+3 range): 100% pierce
  * spear (melee): 100% thrust
* cavalry:
  * longbow (70+2 range): 100% pierce
  * composite bow (60+2 range): 100% pierce
  * crossbow (50+2 range): 67% pierce, 33% thrust
  * javelin (30+2 range): 100% pierce
  * mace (melee): 100% crush
  * axe (melee): 33% crush, 67% hack
  * sabre (melee): 100% hack
  * sword (melee): 50% hack, 50% thrust
  * spear (melee): 100% thrust
  * lance (melee): 20% crush, 80% thrust
* chariotry:
  * longbow (70+2 range): 100% pierce
  * composite bow (60+2 range): 100% pierce
  * javelin (30+2 range): 100% pierce
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

#### Recruitment costs
* Women: 30 food
* Slaves: 30 silver
* Infantry: 30 food, 30 silver
* Camelry: 70 food, 35 silver
* Cavalry: 80 food, 40 silver
* Bigae: 160 food, 90 silver
* Quadrigae: 240 food, 120 silver
* North African War Elephants: 270 food, 270 silver
* Indian War Elephants: 330 food, 330 silver

**NB**: champions cost +200% silver, mercenaries 0 other resources but +100% silver

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
* **Briton Architecture** (Britons): structures −20% build time, −10% health; centres 0 stone cost, +100% wood cost; small towers 0 stone cost; temples 0 stone cost, +200% wood cost.
* **Briton Chariots** (Britons): chariots −15% training time.
* **Druidism** (Britons, Gauls): healers +2 armour levels.
* **Gallic Cavalry** (Gauls): melee cavalry −15% training time.
* **Gauls Architecture** (Gauls): structures −20% build time, −10% health; centres 0 stone cost, +100% wood cost; fortresses −50% stone cost, +50% wood cost; temples 0 stone cost, +200% wood cost.
* **Greek Architecture** (Greeks): temples +25% health.
* **Greek Galleys** (Greeks): warships +5% movement speed.
* **Egyptian Architecture** (Ptolemies): economic structures −75% wood cost, +100% build time; fortresses +25% build time, +10% health.
* **Egyptian Medicine** (Ptolemies): healers −20% healing time.
* **Indian Architecture** (Mauryas): centres 0 stone cost, +100% wood cost; city walls and temples 0 stone cost, +200% wood cost, −30% build time, −20% health.
* **Indian Elephants** (Mauryas): elephants −15% training time.
* **Iberian Architecture** (Iberians): large towers +20% stone and wood costs, +10% build time, +100% garrison capacity, +30% health.
* **Kushite Architecture** (Kushites): economic structures −75% wood cost, +100% build time; fortresses +25% build time, +10% health.
* **Macedonian Architecture** (Macedonians): temples +25% health.
* **Macedonian Engineers** (Macedonians): siege engines −15% construction time.
* **Near Eastern Archers** (Persians, Seleucids): archers +20% ranged attack range.
* **Persian Architecture** (Persians): economic structures +20% health.
* **Persian Archers** (Persians): archers −15% training time.
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
* resource variance: resource suppliers now start with a random amount between `<ResourceSupply/Min>` and `<ResourceSupply/Max>`.
* elevation bonus is taken into account for attack range visualization
* elevation bonus applies to vision range as well
* different ranged attacks for different garrisoned units (e.g. archers, javelineers, and stone-throwers on quinqueremes)

