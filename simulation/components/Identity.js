function Identity() {}

Identity.prototype.Schema =
  "<a:help>Specifies various names and values associated with the unit type, typically for GUI display to users.</a:help>" +
  "<a:example>" +
    "<Civ>athen</Civ>" +
    "<GenericName>Athenian Hoplite</GenericName>" +
    "<SpecificName>Ὁπλίτης Ἀθηναῖος</SpecificName>" +
    "<Icon>units/athen_infantry_spearman_b.png</Icon>" +
  "</a:example>" +
  "<element name='Civ' a:help='Civilization that this unit is primarily associated with, typically a 4-letter code. Choices include: gaia (world objects), athen (Athenians), brit (Britons), cart (Carthaginians), gree (Greeks), gaul (Gauls), iber (Iberians), kush (Kushites), mace (Macedonians), maur (Mauryas), pers (Persians), ptol (Ptolemies), rome (Romans), sele (Seleucids), skirm (skirmish default placeholders), spart (Spartans).'>" +
    "<text/>" +
  "</element>" +
  "<optional>" +
    "<element name='Lang' a:help='Unit language for voices. Choices include: greek, latin.'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='Gender' a:help='Unit gender for voices. Default is male, alternative choice is female.'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<element name='GenericName' a:help='Generic English-language name for this entity.'>" +
    "<text/>" +
  "</element>" +
  "<optional>" +
    "<element name='SpecificName' a:help='Specific native-language name for this entity.'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='SelectionGroupName' a:help='Name used to group multiple (e.g. ranked) entities.'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='Tooltip'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='History'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='Rank'>" +
      "<choice>" +
        "<value>Basic</value>" +
        "<value>Advanced</value>" +
        "<value>Elite</value>" +
        "<value>Champion</value>" +
        "<value>0</value>" +
        "<value>support</value>" +
        "<value>infantry</value>" +
        "<value>cavalry</value>" +
        "<value>elephant</value>" +
        "<value>siege</value>" +
        "<value>ship</value>" +
        "<value>hero</value>" +
        "<value>catafalque</value>" +
      "</choice>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='Classes' a:help='Optional list of space-separated classes applying to this entity. Choices include: Apadana, ArmyCamp, Ashoka, Barracks, BarterMarket, CitizenSoldier, Colony, Corral, ConquestCritical,  Dock, Domestic, DropsiteFood, DropsiteMetal, DropsiteStone, DropsiteWood, ElephantStable, Embassy, Farmstead, Field, FemaleCitizen, FishingBoat, ForestPlant, Forge, Fortress, GarrisonFortress, GarrisonTower, Gates, Human, Immortal, Juggernaut, Kennel, LandTrader, LargeTower, Lighthouse, LongWall, Market, MercenaryCamp, Monument, Mounted, NavalMarket, NavalTrader, Outpost, Palace, Palisade, Player, Range, SeaCreature, Shipyard, SmallTower, SpecialBuilding, StoneWall, Stable, Storehouse, Structure, Syssiton, Temple, Theatre, Tower, Unit, WoodenWall.'>" +
      "<attribute name='datatype'>" +
        "<value>tokens</value>" +
      "</attribute>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='VisibleClasses' a:help='Optional list of space-separated classes applying to this entity. These classes will also be visible in various GUI elements. If the classes need spaces, underscores will be replaced with spaces. Choices include: Animal, Archer, Axeman, Barge, Biga, Bireme, BoltShooter, Builder, Camel, Cavalry, Centre, Champion, Chariot, City, Civic, Crossbowman, Defensive, Dog, Economic, Elephant, Fireship, Galley, Gatherer, Healer, Hero, House, Infantry, Javelineer, Lancer, Maceman, Melee, Mercenary, Metropolis, Military, Naval, Organic, Penteconter, Pikeman, Quadriga, Quadrireme, Quinquereme, Ram, Ranged, Relic, Resource, Sabreman, Ship, Siege, SiegeTower, Slave, Slinger, Soldier, Spearman, StoneThrower, Support, Swordsman, Town, Trader, Triaconter, Trireme, Village, Warship, Wonder, Worker.'>" +
      "<attribute name='datatype'>" +
        "<value>tokens</value>" +
      "</attribute>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='Formations' a:help='Optional list of space-separated formations this unit is allowed to use.'>" +
      "<attribute name='datatype'>" +
        "<value>tokens</value>" +
      "</attribute>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='Icon'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<optional>" +
    "<element name='RequiredTechnology' a:help='Optional name of a technology which must be researched before the entity can be produced.'>" +
      "<text/>" +
    "</element>" +
  "</optional>" +
  "<element name='Undeletable' a:help='Prevent players from deleting this entity.'>" +
    "<data type='boolean'/>" +
  "</element>";

Identity.prototype.Init = function()
{
  this.classesList = GetIdentityClasses(this.template);
  this.visibleClassesList = GetVisibleIdentityClasses(this.template);
};

Identity.prototype.Deserialize = function ()
{
  this.Init();
};

Identity.prototype.Serialize = null; // we have no dynamic state to save

Identity.prototype.GetCiv = function()
{
  return this.template.Civ;
};

Identity.prototype.GetLang = function()
{
  return this.template.Lang || "greek"; // ugly default
};

Identity.prototype.GetGender = function()
{
  return this.template.Gender || "male"; // ugly default
};

Identity.prototype.GetRank = function()
{
  return this.template.Rank || "";
};

Identity.prototype.GetClassesList = function()
{
  return this.classesList;
};

Identity.prototype.GetVisibleClassesList = function()
{
  return this.visibleClassesList;
};

Identity.prototype.HasClass = function(name)
{
  return this.GetClassesList().indexOf(name) != -1;
};

Identity.prototype.GetFormationsList = function()
{
  if (this.template.Formations && this.template.Formations._string)
    return this.template.Formations._string.split(/\s+/);
  return [];
};

Identity.prototype.CanUseFormation = function(template)
{
  return this.GetFormationsList().indexOf(template) != -1;
};

Identity.prototype.GetSelectionGroupName = function()
{
  return this.template.SelectionGroupName || "";
};

Identity.prototype.GetGenericName = function()
{
  return this.template.GenericName;
};

Identity.prototype.IsUndeletable = function()
{
  return this.template.Undeletable == "true";
};

Engine.RegisterComponentType(IID_Identity, "Identity", Identity);
