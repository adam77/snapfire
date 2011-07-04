var base = "/home/adam/personal/games/snapfire/war/";

importPackage( java.io );

function sortNumber(a, b)
{
	return a - b;
}

function listLoaded() {
	print("listLoaded!");
}

function writeFile( file, stream ) {
	var buffer = new PrintWriter( new FileWriter( file ) );
	buffer.print( stream );
	buffer.close();
}

function readEval( file ) {
	var x = readFile( file );
	eval(x);
	return listData;
}

function doBasicStructure( list, src ) {
	list.id = src.id;
	list.version = src.version;
	list.by = "Iron Bloke";
	list.sections = [];
	list.upgrades = [];
	list.formationConstraints = [];
	list.upgradeConstraints = [];
}

function compareArray(a,b) {
	a.sort(sortNumber);
	b.sort(sortNumber);
	for (var i=0;i<a.length;i++) {
		if (i >= b.length ) return false;
		if (a[i] != b[i]) return false;
	}
	return true;
}

function getUpgradeConstraint(list, c) {
	for (var i=0; i<list.upgradeConstraints.length; i++) {
		if (compareArray(list.upgradeConstraints[i].from,c.from) &&
			list.upgradeConstraints[i].max==c.max &&
			list.upgradeConstraints[i].perArmy==c.perArmy &&
			list.upgradeConstraints[i].min == c.min)
			{
				return list.upgradeConstraints[i];
			}
	}
	list.upgradeConstraints.push( c );
	return c;
}

function hasUpgrade(list, id) {
	for (var i=0;i<list.upgrades.length;i++) {
		if (list.upgrades[i].id == id) return true;
	}
	return false;
}

function addUpgrade(list, upgrade) {
	if (!hasUpgrade(list, upgrade.id)) {
		list.upgrades.push({id:upgrade.id, name:upgrade.label, pts:upgrade.pts});
	}
}

function doTopLevelConstraints( list, src ) {

}

function doSection( list, src, sublist ) {
	var section = {name:sublist.label, formations:[]};
	for (var i=0; i<sublist.options.length; i++) {
		section.formations.push( doFormation( list, src, sublist.options[i] ) );
	}
	list.sections.push(section);
}

function doUpgrade( list, src, formation, upgrade ) {
	// is optional?
	if (upgrade.options) {
		var optionIds = [];
		for (var i=0; i<upgrade.options.length; i++) {
			addUpgrade(list, upgrade.options[i]);
			optionIds.push(upgrade.options[i].id);
			if (upgrade.options[i].general) {
				var c = getUpgradeConstraint(list, {max:upgrade.upto, perArmy:true, from:[upgrade.id], appliesTo:[]});
				c.appliesTo.push( formation.id );				
			}
			if (upgrade.options[i].upto) {
				var c = getUpgradeConstraint(list, {max:upgrade.upto, from:[upgrade.id], appliesTo:[]});
				c.appliesTo.push( formation.id );				
			}
			if (upgrade.options[i].minimum) {
				var c = getUpgradeConstraint(list, {min:upgrade.minimum, from:[upgrade.id], appliesTo:[]});
				c.appliesTo.push( formation.id );				
			}
		}

		if (upgrade.minimum && upgrade.upto) {
			if (upgrade.minimum != upgrade.upto) {
				formation.upgrades = formation.upgrades.concat(optionIds);
			}
			var c = getUpgradeConstraint(list, {max:upgrade.upto, min:upgrade.minimum, from:optionIds, appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.minimum && !upgrade.upto) {
			formation.upgrades = formation.upgrades.concat(optionIds);
			var c = getUpgradeConstraint(list, {min:upgrade.minimum, from:optionIds, appliesTo:[], name:upgrade.label});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.upto && !upgrade.minimum) {
			formation.upgrades = formation.upgrades.concat(optionIds);
			var c = getUpgradeConstraint(list, {max:upgrade.upto, from:optionIds, appliesTo:[], name:upgrade.label});
			c.appliesTo.push( formation.id );
		}
		else {
			formation.upgrades = formation.upgrades.concat(optionIds);
		}
	}
	else {
		addUpgrade(list, upgrade);

		if (upgrade.general) {
			formation.upgrades.push(upgrade.id);
			var c = getUpgradeConstraint(list, {max:upgrade.upto, from:[upgrade.id], appliesTo:[], perArmy:true});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.minimum && upgrade.upto) {
			if (upgrade.minimum != upgrade.upto) { 
				formation.upgrades.push(upgrade.id);
			}
			var c = getUpgradeConstraint(list, {max:upgrade.upto, min:upgrade.minimum, from:[upgrade.id], appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.minimum && !upgrade.upto) {
			formation.upgrades.push(upgrade.id);
			var c = getUpgradeConstraint(list, {min:upgrade.minimum, from:[upgrade.id], appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.upto && !upgrade.minimum) {
			formation.upgrades.push(upgrade.id);
			var c = getUpgradeConstraint(list, {max:upgrade.upto, from:[upgrade.id], appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else {
			formation.upgrades.push(upgrade.id);
		}
	}
}

function doFormation( list, src, option ) {
	var formation = {id:option.id, name:option.label, pts:option.pts, units:option.units, upgrades:[]};
	// upgrades
	for (var i=0; i<option.upgrades.length; i++) {
		doUpgrade(list, src, formation, option.upgrades[i]);
	}
	// formation constraints
	return formation;
}

function convert( src ) {

	var list = {};	
	doBasicStructure( list, src );	
	for (var i=0; i<src.sublists.length; i++) {
		doSection( list, src, src.sublists[i] );
	}
	doTopLevelConstraints( list, src );
	
	return list;
}

var src = readFile( base + "SM_codex_FERC.js" );
eval(src);
var list = convert( listData );
writeFile( base + "util/test.json", JSON.stringify( list ) );
// pretty print python -mjson.tool
