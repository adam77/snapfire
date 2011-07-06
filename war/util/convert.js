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


function getFormationConstraint(list, c) {
	for (var i=0; i<list.formationConstraints.length; i++) {
		if (list.formationConstraints[i].max==c.max &&
			list.formationConstraints[i].perArmy==c.perArmy &&
			list.formationConstraints[i].min == c.min &&
			list.formationConstraints[i].name == c.name	)
			{
				return list.formationConstraints[i];
			}
	}	
	list.formationConstraints.push( c );
	return c;
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

/*
function hasUpgrade(list, id) {
	for (var i=0;i<list.upgrades.length;i++) {
		if (list.upgrades[i].id == id) return true;
	}
	return false;
}*/

function getUpgrade(list, up) {
	for (var i=0;i<list.upgrades.length;i++) {
		if (list.upgrades[i].name == up.name &&
			list.upgrades[i].pts == up.pts) {
			return list.upgrades[i];
		}
	}
	list.upgrades.push(up);
	return up;	
}

function addUpgrade(list, upgrade) {
	return getUpgrade(list, {id:upgrade.id, name:upgrade.label, pts:upgrade.pts});
}

function doTopLevelConstraints( list, src ) {
	var all = [];
	for (var i=0;i<src.sublists.length;i++) {
		for (var j=0;j<src.sublists[i].options.length;j++) {		
			all.push( src.sublists[i].options[j] );
		}
	}
	

	var limited = [];
	var limited2 = [];
	var restricted = [];
	var restricting = [];
	var restricted2 = [];
	var restricting2 = [];
	for (var i=0; i<all.length; i++) {
		var f = all[i];
		if (f.limited) limited.push( f.id );
		if (f.limited2) limited2.push( f.id );
		if (f.restricted) restricted.push( f.id );
		if (f.restricting) restricting.push( f.id );
		if (f.restricted2) restricted2.push( f.id );
		if (f.restricting2) restricting2.push( f.id );
	}

	if (limited.length>0) {
		var percent = (src.limitRatio ? 100/src.limitRatio : 33);		
		var nm = src.limitLabel ? src.limitLabel : "War Engines & Allies";
		list.formationConstraints.push( {maxPercent:percent, name:nm, from:limited} );
	}
	if (limited2.length>0) {
		var percent = (src.limitRatio2 ? 100/src.limitRatio2 : 33);		
		var nm = src.limitLabel2 ? src.limitLabel2 : "War Engines & Allies";
		list.formationConstraints.push( {maxPercent:percent, name:nm, from:limited2} );		
	}
	if (restricted.length>0) {
		list.formationConstraints.push( {max:src.restriction.limit, name:src.restriction.restricted, from:restricted, forEach:restricting, name2:src.restriction.restricting} );
	}
	if (restricted2.length>0) {
		list.formationConstraints.push( {max:src.restriction2.limit, name:src.restriction2.restricted, from:restricted2, forEach:restricting2, name2:src.restriction2.restricting} );
	}	
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
			var upId = addUpgrade(list, upgrade.options[i]).id;
			optionIds.push(upId);
			if (upgrade.options[i].general) {
				var c = getUpgradeConstraint(list, {max:upgrade.upto, perArmy:true, from:[upId]});
			}
			if (upgrade.options[i].upto) {
				var c = getUpgradeConstraint(list, {max:upgrade.upto, from:[upId], appliesTo:[]});
				c.appliesTo.push( formation.id );				
			}
			if (upgrade.options[i].minimum) {
				var c = getUpgradeConstraint(list, {min:upgrade.minimum, from:[upId], appliesTo:[]});
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
	// not optional
	else {
		var upId = addUpgrade(list, upgrade).id;

		if (upgrade.general) {
			formation.upgrades.push(upId);
			var c = getUpgradeConstraint(list, {max:upgrade.upto, from:[upId], perArmy:true});
		}
		else if (upgrade.minimum && upgrade.upto) {
			if (upgrade.minimum != upgrade.upto) { 
				formation.upgrades.push(upId);
			}
			var c = getUpgradeConstraint(list, {max:upgrade.upto, min:upgrade.minimum, from:[upId], appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.minimum && !upgrade.upto) {
			formation.upgrades.push(upId);
			var c = getUpgradeConstraint(list, {min:upgrade.minimum, from:[upId], appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else if (upgrade.upto && !upgrade.minimum) {
			formation.upgrades.push(upId);
			var c = getUpgradeConstraint(list, {max:upgrade.upto, from:[upId], appliesTo:[]});
			c.appliesTo.push( formation.id );
		}
		else {
			formation.upgrades.push(upId);
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
	if (option.upto) {
		list.formationConstraints.push({max:option.upto, from:[option.id]});
	}
	if (option.minimum) {
		list.formationConstraints.push({min:option.minimum, from:[option.id]});
	}	
	if (option.group) {
		var c = getFormationConstraint(list, {max:option.group.upto, name:option.group.label, from:[]});
		c.from.push( option.id );
	}
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


function pp(key, value) {
	return value;
}


var file = [
"ORK_feral_NETEA.js", "ORK_kult_NETEA.js", "XENOS_nids_NETEA.js",
"ORK_ghazgkhull_NETEA.js", "XENOS_necron_NETEA.js", "XENOS_tau_NETEA.js",
"CHAOS_legion_FERC.js", "IG_steelLegion_FERC.js", "ORK_kult_FERC.js", "SQ_Squat_FERC.js",
"EL_bieltan_FERC.js", "ORK_ghazgkhull_FERC.js", "SM_codex_FERC.js", "XENOS_nids_FERC.js",
"CHAOS_dg_EPICUK.js",     "EL_bieltan_EPICUK.js",   "IG_steelLegion_EPICUK.js",  "ORK_kult_EPICUK.js", "SM_templars_EPICUK.js",
"CHAOS_ec_EPICUK.js",      "EL_iyanden_EPICUK.js",   "IG_ulani_EPICUK.js",        "SM_bloodAngels_EPICUK.js",
"CHAOS_legion_EPICUK.js",  "EL_siamhann_EPICUK.js",  "IG_vanaheim_EPICUK.js",     "SM_codex_EPICUK.js",
"CHAOS_ts_EPICUK.js",      "EL_ulthwe_EPICUK.js",    "ORK_feral_EPICUK.js",       "SM_dark_EPICUK.js",
"CHAOS_we_EPICUK.js",      "IG_siege_EPICUK.js",     "ORK_ghazgkhull_EPICUK.js",  "SM_scars_EPICUK.js"]




for (var i=0; i<file.length; i++) {
	print( file[i] );
	var src = readFile( base + file[i] );
	eval(src);
	var list = convert( listData );
	writeFile( base + file[i] + "on", JSON.stringify( list, pp, 3 ) );
}

// pretty print python -mjson.tool
// java -jar /home/adam/progs/rhino1_7R3/js.jar util/convert.js

