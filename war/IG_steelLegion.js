// UNIT OPTIONS
var lemanRuss =			{label:'Leman Russ',	upto:10,	minimum:10};
	var russ =				{label:'Leman Russ',	pts:0,	group:lemanRuss,	optional:true};
	var vanquisher =		{label:'Vanquisher',	pts:0,	group:lemanRuss,	optional:true, upto:1};
	lemanRuss.options =		[russ, vanquisher];
var superh =			{label:'Super Heavys',	upto:3,		minimum:3};
	var bane =				{label:'Baneblade',		pts:0,	group:superh,	optional:true};
	var sword =				{label:'Shadowsword',	pts:0,	group:superh,	optional:true};
	superh.options =		[bane, sword];
var superP =			{label:'Super Heavy',	upto:1,		minimum:1};
	var bane2 =				{label:'Baneblade',		pts:0,	group:superP,	optional:true};
	var sword2 =			{label:'Shadowsword',	pts:0,	group:superP,	optional:true};
	superP.options =		[bane2, sword2];
var artilleryOpts =		{label:'Artillery',		upto:9,		minimum:9};
	var basil =				{label:'Basilisk',		pts:0,	group:artilleryOpts,optional:true};
	var manti =				{label:'Manticore',		pts:0,	group:artilleryOpts,optional:true};
	artilleryOpts.options =	[basil, manti];
var spacecraft = 		{label:'Spacecraft', 	upto:1,		minimum:1};
	var lunar =				{label:'Lunar Class',	pts:0,	group:spacecraft,	optional:true};
	var emperor	=			{label:'Emperor Class',	pts:150,group:spacecraft,	optional:true};
	spacecraft.options =	[lunar, emperor];

// UPGRADES (upto 3 per company)
var companyUpgrades = 	{label:'Upgrades', upto:3};
	var chimera =			{label:'Chimera',							pts:25}; // only applies to snipers & ogryns
	var fireSupport =		{label:'Fire Support Platoon',				pts:100, upto:1, group:companyUpgrades};
	var infantry =			{label:'Infantry Platoon',					pts:100, upto:1, group:companyUpgrades};
	var tankSquadron =		{label:'Tank Squadron',						pts:200, upto:1, group:companyUpgrades};
	var demolisher =		{label:'Tank Squadron (Demolisher)',		pts:200, upto:1, group:companyUpgrades};
	var hellhounds =		{label:'Hellhound Squadron',				pts:150, upto:1, group:companyUpgrades};
	var griffons =			{label:'Griffon Battery',					pts:100, upto:1, group:companyUpgrades};
	var snipers =			{label:'Snipers',							pts:50, upto:1, group:companyUpgrades};
	var ogryns =			{label:'Ogryns',							pts:50, upto:1, group:companyUpgrades};
	var hydra =				{label:'Hydra',								pts:50, upto:1, group:companyUpgrades};
	companyUpgrades.options = [fireSupport, infantry, tankSquadron, demolisher, hellhounds, griffons, snipers, ogryns, hydra];
var valkyrie =			{label:'Valkyrie Transport',				pts:150, upto:1};
var emperor =			{label:'Emperor Class',						pts:150, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var roughRider =	{label:'Rough Rider Platoon', 			pts:150, upgrades:[], restricted:true, units:'6 Rough Riders'};
var stormTrooper =	{label:'Storm Trooper Platoon',			pts:200, upgrades:[valkyrie], restricted:true, units:'8 Storm Troopers'};
var basilisk =		{label:'Artillery Battery (Basilisk)',	pts:250, upgrades:[], restricted:true, units:'3 Basilisks'};
var bombard =		{label:'Artillery Battery (Bombard)',	pts:250, upgrades:[], restricted:true, units:'3 Bombards'};
var manticore =		{label:'Artillery Battery (Manticore)',	pts:250, upgrades:[], restricted:true, units:'3 Manticores'};
var sentinel =		{label:'Sentinel Squadron',				pts:100, upgrades:[], restricted:true, units:'4 Sentinels'};
var deathstrike =	{label:'Deathstrike Missile Battery',	pts:200, upgrades:[], restricted:true, upto:1, units:'2 Deathstrike Missile Launchers'};
var baneblade =		{label:'Super-heavy Tank Platoon', 		pts:200, upgrades:[], restricted:true, defaults:[{unit:bane2, count:1}]};
var orbital =		{label:'Orbital Support',				pts:150, upgrades:[], restricted:true, upto:1, defaults:[{unit:lunar,count:1}]};
var flak =			{label:'Flak Battery',					pts:150, upgrades:[], restricted:true, units:'3 Hydra'};
var vulture =		{label:'Vulture Squadron',				pts:300, upgrades:[], restricted:true, units:'4 Vultures'};
var supportList =	{label:'SUPPORT FORMATIONS', options:[basilisk, bombard, manticore, deathstrike, flak, orbital, roughRider, sentinel, stormTrooper, baneblade, vulture]};

// COMPANIES
var hq = 			{label:'Regimental HQ', 				pts:500, upgrades:[chimera, companyUpgrades], restricting:true, upto:1, units:'Supreme Commander, 12 Imperial Guard Infantry, 7 Chimera'};
var infantryCoy = 	{label:'Infantry Company', 				pts:250, upgrades:[chimera, companyUpgrades], restricting:true, units:'Commander, 12 Imperial Guard Infantry'};
var mechCoy = 		{label:'Mechanised Infantry Company', 	pts:400, upgrades:[chimera, companyUpgrades], restricting:true, units:'Commander, 12 Imperial Guard Infantry, 7 Chimera'};
var tankCoy = 		{label:'Tank Company', 					pts:650, upgrades:[chimera, companyUpgrades], restricting:true, defaults:[{unit:russ, count:10}]};
var superCoy = 		{label:'Super-heavy Tank Company', 		pts:500, upgrades:[chimera, companyUpgrades], restricting:true, defaults:[{unit:bane, count:3}]};
var artilleryCoy = 	{label:'Artillery Company', 			pts:650, upgrades:[chimera, companyUpgrades], restricting:true, defaults:[{unit:basil, count:9}]};
var companyList =	{label:'COMPANIES', options:[hq, infantryCoy, mechCoy, tankCoy, superCoy, artilleryCoy]};

// NAVY
var thunderbolt = 		{label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{label:'Marauder Bombers',		pts:300, upgrades:[], limited:true, units:'2 Marauders'};
var navyList =			{label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{label:'Warhound Titan',		pts:250, upgrades:[], limited:true};
var titanList = 		{label:'TITAN LEGIONS', options:[warlord, reaver, warhound]};

// DETAILS
var listData = {
	id:'Steel Legion', version:'EA Rulebook Oct09',
	sublists:[companyList, supportList, navyList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
