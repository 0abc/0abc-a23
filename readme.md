# 0 A.D. is Actually Before Christ
**0abc**, a modification of “0 A.D. Empires Ascendant”, version 0.0.23 “Alpha XXIII: Ken Wood”

## Table of Contents
* https://github.com/0abc/0abc-a23#instructions
* https://github.com/0abc/0abc-a23#overview
* https://github.com/0abc/0abc-a23#ai
* https://github.com/0abc/0abc-a23#structures
* https://github.com/0abc/0abc-a23#units
* https://github.com/0abc/0abc-a23#population-costs
* https://github.com/0abc/0abc-a23#damage-types
* https://github.com/0abc/0abc-a23#bonus-attacks
* https://github.com/0abc/0abc-a23#recruitment-costs
* https://github.com/0abc/0abc-a23#upkeep-and-income
* https://github.com/0abc/0abc-a23#auras-and-technologies
* https://github.com/0abc/0abc-a23#unit-auras
* https://github.com/0abc/0abc-a23#class-bonuses
* https://github.com/0abc/0abc-a23#civilization-bonuses
* https://github.com/0abc/0abc-a23#team-bonuses
* https://github.com/0abc/0abc-a23#civilization-rosters
* https://github.com/0abc/0abc-a23#britons
* https://github.com/0abc/0abc-a23#carthaginians
* https://github.com/0abc/0abc-a23#gauls
* https://github.com/0abc/0abc-a23#greeks
* https://github.com/0abc/0abc-a23#iberians
* https://github.com/0abc/0abc-a23#kushites
* https://github.com/0abc/0abc-a23#macedonians
* https://github.com/0abc/0abc-a23#mauryas
* https://github.com/0abc/0abc-a23#persians
* https://github.com/0abc/0abc-a23#ptolemies
* https://github.com/0abc/0abc-a23#romans
* https://github.com/0abc/0abc-a23#seleucids



## Instructions
* Download the zip or `git clone` this repository (`https://github.com/0abc/0abc-a23.git`).
* Place it in your `/0ad/mods/` folder:
  * GNU/Linux (e.g. Fedora) typically: `~/.local/share/0ad/mods/`
  * Macintosh/Apple OS X typically: `~/Library/Application\Support/0ad/mods/`
  * Microsoft Windows typically: `~\Documents\My Games\0ad\mods\`
* Launch 0 A.D., click “Settings” and “Mod Selection”
* Select `0abc`, click “Enable” and “Save Configuration”
* Add, remove, or move up or down any other mods, click “Save Configuration” and “Start Mods”
* Click “Learn To Play” and “Structure Tree” to see the mod(s) implemented.
* For more detailed information, please have a look at **0abc-readme.pdf**

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)



## Overview
*Parts of this readme might be outdated. For more accurate information, please have a look at* **0abc-readme.pdf**

Changes include, but are not limited to:
* introduced a new resource: silver
* pierce damage is split into pierce (arrows) and thrust (spears)
* units and some structures steadily consume small amounts of resources (upkeep)
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
* town phase requires a market, city phase a temple
* centres can be part of trade routes
* walls are stronger but also more expensive and slower to construct; all factions have palisades (village), siege walls (town), and city walls (city)
* fortresses have a territory root, are purely defensive structures, have somewhat more health, but no longer train any units
* all factions have cavalry stables (village) and siege workshops (town); most have separate economic docks (village) and military shipyards (town); many have elephant stables (city)

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
  * stone sling (45 range): 100% crush
  * lead sling (75 range): 100% pierce
  * longbow (66 range): 100% pierce
  * composite bow (60 range): 100% pierce
  * crossbow (45 range): 67% pierce, 33% thrust
  * javelin (30 range): 100% pierce
  * throwing axe (15 range): 33% crush, 67% hack
  * mace (melee): 100% crush
  * axe (melee): 33% crush, 67% hack
  * sabre (melee): 100% hack
  * longsword (melee): 75% hack, 25% thrust
  * sword (melee): 50% hack, 50% thrust
  * spear (melee): 100% thrust
  * pike (melee): 50% pierce, 50% thrust
* camelry:
  * composite bow (68 range): 100% pierce
  * javelin (34 range): 100% pierce
  * spear (melee): 100% thrust
* cavalry:
  * composite bow (64 range): 100% pierce
  * crossbow (48 range): 67% pierce, 33% thrust
  * javelin (32 range): 100% pierce
  * mace (melee): 100% crush
  * axe (melee): 33% crush, 67% hack
  * sabre (melee): 100% hack
  * sword (melee): 50% hack, 50% thrust
  * spear (melee): 100% thrust
  * lance (melee): 20% crush, 80% thrust
* chariotry:
  * composite bow (72 range): 100% pierce
  * javelin (36 range): 100% pierce
  * scythed (melee): 20% crush, 40% hack, 40% thrust
* elephantry (melee): 100% crush
* siege:
  * ram (melee): 100% crush
  * bolt shooter (15–90 range): 67% pierce, 33% thrust
  * stone thrower (30–90 range): 100% crush
  * tower (10–60+10 range): 75% pierce, 25% crush
* fireship: 25% each
* wargalleys: melee 100% crush, ranged 100% pierce
* structures (ranged): 100% pierce

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Bonus attacks
* infantry archers: 0.5× vs Elephantry
* infantry crossbowman: –
* infantry javelinists: –
* melee infantry: –
* camel archers: 0.5× vs Elephantry
* camel javelinists: –
* camel spearmen: 0.5× vs Elephantry
* cavalry archers: 0.5× vs Elephantry
* cavalry crossbowmen: –
* cavalry javelinists: –
* melee cavalry: 0.75× vs Chariotry, 0.5× vs Elephantry
* war elephants: –
* bolt shooters: –
* stone throwers: 2.0× vs Ships
* battering rams: 2.0× vs Defensive
* siege towers: –

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Recruitment costs
* Infantry: 30 food, 30 silver
* Camelry: 75 food, 50 silver
* Cavalry: 90 food, 60 silver
* Bigae: 180 food, 120 silver
* Quadrigae: 300 food, 180 silver
* Elephantry: 300 food, 300 silver

**NB**: champions cost +200% silver, mercenaries 0 other resources but +100% silver

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Upkeep and income
Food:
* Healers, Slaves, Women: −0.02 food per second
* Infantry: −0.02 food per second
* Traders: −0.03 food per second
* Camelry: −0.04 food per second
* Cavalry: −0.05 food per second
* Bigae: −0.10 food per second
* Worker Elephants: −0.12 food per second
* Quadrigae: −0.16 food per second
* Elephantry: −0.20 food per second
* Military structures: −4.0 food per 30 seconds
* Fortress: −6.0 food per 30 seconds

Silver:
* Village centre: +1.0 silver per 7 seconds
* Town centre: +2.0 silver per 7 seconds
* City centre: +3.0 silver per 7 seconds
* Metropolis centre: +4.0 silver per 7 seconds
* Palace: +1.0 silver per second
* Wonder: +1.0 silver per second
* Library: −2.0 silver per 7 seconds
* Fortress: −2.0 silver per 30 seconds
* Triaconters: −3.0 silver per 30 seconds
* Penteconters: −6.0 silver per 30 seconds
* Triremes: −18.0 silver per 30 seconds
* Quadriremes: −24.0 silver per 30 seconds
* Quinqueremes: −30.0 silver per 30 seconds

Wood:
* Military structures: −1.0 wood per 30 seconds
* Fortress: −2.0 wood per 30 seconds
* Lighthouse: −2.0 wood per 7 seconds

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Auras and technologies
#### Unit auras
* **Camel Stench** (15 m): enemy cavalry −20% attack damage and capture strength.
* **Chariot Noise** (12 m): enemy infantry −15% attack damage and capture strength.
* **Elephant Intimidation** (10 m): enemy soldiers −10% attack damage and capture strength.
* **Merchant Convoy** (20 m): own naval traders +2.0 pierce armour.
* **Trader Caravan** (10 m): own land traders +2.0 pierce armour.

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Class bonuses
* **Champion**: +200% silver cost, +100% training time, +50% health, +2.0 armour levels, +100% capture attack strength, and +100% melee and ranged attack damage.
* **Veteran**: +50% silver cost, +50% training time, +20% health, +1.0 armour levels, +50% capture attack strength, and +50% melee and ranged attack damage.
* **Mercenary**: +100% silver cost, 0 other resource costs, −50% training time, +10% health, +15% capture attack strength, and +15% melee and ranged attack damage.
* **Cataphract**: +20% silver cost, +2 armour levels, and −5% movement speed.
* **Fanatic**: −4 armour levels, +15% melee attack damage, and +30% movement speed.
* **Balearic**: −10% health, +5% ranged attack damage, −10% reload time, −10% spread, and +5% movement speed.
* **Cretan**: −20% ranged attack spread.
* **Libyan**: −5% health, +5% ranged attack damage, −5% reload time, and +5% movement speed.
* **Numidian**: −10% health, +5% ranged attack damage, −10% reload time, −10% spread, and +5% movement speed.
* **Rhodian**: −20% ranged attack spread.

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Civilization bonuses
*All bonuses and penalties from the default distribution have been removed.*
* **Celtic Architecture** (Britons, Gauls): all structures −20% build time, −10% health; temples −50% stone cost, +100% wood cost.
* **Greek Architecture** (Greeks, Macedonians, Seleucids): civic structures +20% health.
* **Egyptian Architecture** (Kushites, Ptolemies): economic structures −75% wood cost, +100% build time; military structures −50% wood cost, +50% build time; fortresses +25% build time, +10% health.
* **Indian Architecture** (Mauryas): city walls and temples 0 stone cost, +200% wood cost, −30% build time, −20% health.
* **Indian Training** (Mauryas): elephants −20% training time.
* **Iberian Architecture** (Iberians): centres −10% build time, −5% health; large towers +20% stone and wood costs, +10% build time, +100% garrison capacity, +30% health.
* **Near Eastern Archers** (Persians, Seleucids): archers +20% ranged attack range.
* **Persian Architecture** (Persians): economic structures +20% health.
* **Persian Training** (Persians): archers −20% training time.
* **Punic Architecture** (Carthaginians): city walls +20% stone cost, +20% build time, +30% health; fortresses +10% stone cost, +10% build time, +20% health; markets −50% wood cost.
* **Punic Training** (Carthaginians): traders −20% training time.
* **Roman Architecture** (Romans): city walls +10% health; military structures −10% build time.
* **Roman Training** (Romans): siege weapons −20% construction time.

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Team bonuses
—

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)


### Civilization rosters
#### Britons
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Swordsman
  * Infantry Stone-slinger
  * Cavalry Javelinist
  * War Dog
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Spearman
  * Infantry Javelinist
  * Cavalry Swordsman
  * War Barge
* City phase:
  * Biga Javelinist Champion

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Carthaginians
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Archer
  * Cavalry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Spearman Mercenary
  * Infantry Swordsman Mercenary
  * Infantry Javelinist Mercenary
  * Infantry Lead-slinger Mercenary
  * Cavalry Javelinist Mercenary
  * Cavalry Sabreman Mercenary
  * Cavalry Swordsman Mercenary
  * Cavalry Spearman Mercenary
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

#### Gauls
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Javelinist
  * Cavalry Swordsman
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Swordsman
  * Infantry Slinger
  * Cavalry Javelinist
  * War Barge
* City phase:
  * Cavalry Spearman Champion

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Greeks
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Spearman Mercenary
  * Infantry Javelinist Mercenary
  * Infantry Archer Mercenary
  * Infantry Lead-slinger Mercenary
  * Cavalry Javelinist
  * Cavalry Sabreman
  * Penteconter
  * Trireme
* City phase:
  * Infantry Spearman Champion
  * Oxybeles
  * Quadrireme

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Iberians
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Sabreman
  * Infantry Javelinist
  * Cavalry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Spearman
  * Infantry Slinger
  * Cavalry Spearman
  * War Barge
  * Fire Ship
* City phase:
  * Cavalry Javelinist Champion

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Kushites
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Longbowman
  * Cavalry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Pikeman
  * Infantry Swordsman
  * Infantry Maceman Mercenary
  * Infantry Javelinist Mercenary
  * Cavalry Spearman
  * Camel Javelinist Mercenary
  * Trireme
* City phase:
  * Infantry Axeman Champion
  * Infantry Sabreman Champion
  * Infantry Archer Champion
  * Cavalry Spearman Champion
  * War Elephant

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Macedonians
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Pikeman
  * Infantry Javelinist
  * Cavalry Lancer
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Spearman Mercenary
  * Infantry Archer Mercenary
  * Infantry Lead-slinger Mercenary
  * Cavalry Javelinist
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

#### Mauryas
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Longbowman
  * Support Elephant
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Sabreman
  * Cavalry Swordsman
  * Cavalry Javelinist
  * War Elephant
  * War Barge
* City phase:
  * Infantry Maceman Champion
  * Biga Longbowman Champion
  * War Elephant Champion
  * Lithobolos
  * Huge Barge

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Persians
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Archer
  * Cavalry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Javelinist
  * Cavalry Axeman
  * Cavalry Spearman
  * Cavalry Archer
  * Camel Archer Mercenary
  * Penteconter
  * Trireme
* City phase:
  * Infantry Spearman Mercenary
  * Infantry Spearman Champion
  * Cavalry Lancer Champion
  * Cavalry Archer Champion
  * Quadriga Scythed Champion
  * War Elephant Mercenary

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Ptolemies
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Pikeman
  * Infantry Stone-slinger
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Spearman Mercenary
  * Infantry Swordsman Mercenary
  * Infantry Javelinist Mercenary
  * Infantry Archer Mercenary
  * Infantry Lead-slinger Mercenary
  * Cavalry Spearman
  * Cavalry Javelinist Mercenary
  * Camel Archer Mercenary
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

#### Romans
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Sabreman
  * Infantry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Swordsman
  * Infantry Spearman
  * Cavalry Spearman
  * Cavalry Javelinist
  * Penteconter
  * Trireme
* City phase:
  * Infantry Swordsman Champion
  * Scorpio
  * Ballista
  * Quadrireme
  * Quinquereme

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

#### Seleucids
* Village phase:
  * Woman
  * Trader
  * Fishing Boat
  * Infantry Spearman
  * Infantry Javelinist
  * Cavalry Javelinist
* Town phase:
  * Healer
  * Battering Ram
  * Merchant Ship
  * Infantry Pikeman
  * Infantry Archer
  * Cavalry Lancer
  * Cavalry Archer Mercenary
  * Camel Archer Mercenary
  * Penteconter
  * Trireme
* City phase:
  * Infantry Pikeman Champion
  * Infantry Swordsman Champion
  * Cavalry Lancer Champion
  * Quadriga Scythed Champion
  * War Elephant Champion
  * Lithobolos
  * Siege Tower

[(return to table of contents)](https://github.com/0abc/0abc-a23#table-of-contents)

