function Garrisonable() {}

Garrisonable.prototype.Schema =
	"<a:help>Controls the garrisonability of an entity.</a:help>" +
	"<a:example>" +
		"<Size>10</Size>" +
	"</a:example>" +
	"<optional>" +
		"<element name='Size' a:help='Number of garrison slots the entity occupies.'>" +
			"<data type='nonNegativeInteger'/>" +
		"</element>" +
	"</optional>";

Garrisonable.prototype.Init = function()
{
};

Garrisonable.prototype.Serialize = null;

Garrisonable.prototype.GetSize = function()
{
	return ApplyValueModificationsToEntity("Garrisonable/Size", +this.template.Size, this.entity);
};

Engine.RegisterComponentType(IID_Garrisonable, "Garrisonable", Garrisonable);
