function DamageTypes()
{
  // TODO: load these from files

  this.names = {
    "Crush": markForTranslationWithContext("damage type", "Crush"),
    "Hack": markForTranslationWithContext("damage type", "Hack"),
    "Pierce": markForTranslationWithContext("damage type", "Pierce"),
  };

  deepfreeze(this.names);
}

DamageTypes.prototype.GetNames = function()
{
  return this.names;
};

DamageTypes.prototype.GetTypes = function()
{
  return Object.keys(this.names);
};
