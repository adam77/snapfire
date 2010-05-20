// UNIT OPTIONS
var lemanRuss =			{id:10, label:'Leman Russ',	upto:10,	minimum:10};
	var russ =				{id:11, label:'Leman Russ',	pts:0,	group:lemanRuss,	optional:true};
	var vanquisher =		{id:12, label:'Vanquisher',	pts:0,	group:lemanRuss,	optional:true, upto:1};
	lemanRuss.options =		[russ, vanquisher];
var superh =			{id:13, label:'Super Heavys',	upto:3,		minimum:3};
	var bane =				{id:14, label:'Baneblade',		pts:0,	group:superh,	optional:true};
	var sword =				{id:15, label:'Shadowsword',	pts:0,	group:superh,	optional:true};
	superh.options =		[bane, sword];
var superP =			{id:16, label:'Super Heavy',	upto:1,		minimum:1};
	var bane2 =				{id:17, label:'Baneblade',		pts:0,	group:superP,	optional:true};
	var sword2 =			{id:18, label:'Shadowsword',	pts:0,	group:superP,	optional:true};
	superP.options =		[bane2, sword2];
var artilleryOpts =		{id:19, label:'Artillery',		upto:9,		minimum:9};
	var basil =				{id:20, label:'Basilisk',		pts:0,	group:artilleryOpts,optional:true};
	var manti =				{id:21, label:'Manticore',		pts:0,	group:artilleryOpts,optional:true};
	artilleryOpts.options =	[basil, manti];
var spacecraft = 		{id:22, label:'Spacecraft', 	upto:1,		minimum:1};
	var lunar =				{id:23, label:'Lunar Class',	pts:0,	group:spacecraft,	optional:true};
	var emperor	=			{id:24, label:'Emperor Class',	pts:150,group:spacecraft,	optional:true};
	spacecraft.options =	[lunar, emperor];

// UPGRADES (upto 3 per company)
var companyUpgrades = 	{id:25, label:'Upgrades', upto:3};
	var chimera =			{id:26, label:'Chimera',							pts:25}; // only applies to snipers & ogryns
	var fireSupport =		{id:27, label:'Fire Support Platoon (4 Fire Support)',	pts:100, upto:1, group:companyUpgrades};
	var infantry =			{id:28, label:'Infantry Platoon (6 Infantry)',		pts:100, upto:1, group:companyUpgrades};
	var tankSquadron =		{id:29, label:'Tank Squadron (3 Leman Russ)',		pts:200, upto:1, group:companyUpgrades};
	var demolisher =		{id:30, label:'Tank Squadron (3 Demolishers)',		pts:200, upto:1, group:companyUpgrades};
	var hellhounds =		{id:31, label:'Hellhound Squadron (3 Hellhounds)',	pts:150, upto:1, group:companyUpgrades};
	var griffons =			{id:32, label:'Griffon Battery (3 Griffons)',		pts:100, upto:1, group:companyUpgrades};
	var snipers =			{id:33, label:'2 Snipers',							pts:50, upto:1, group:companyUpgrades};
	var ogryns =			{id:34, label:'2 Ogryns',							pts:50, upto:1, group:companyUpgrades};
	var hydra =				{id:35, label:'Hydra',								pts:50, upto:1, group:companyUpgrades};
	companyUpgrades.options = [fireSupport, infantry, tankSquadron, demolisher, hellhounds, griffons, snipers, ogryns, hydra];
var valkyrie =			{id:36, label:'Valkyrie Transport',				pts:150, upto:1};
var emperor =			{id:37, label:'Emperor Class',					pts:150, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var roughRider =	{id:500, label:'Rough Rider Platoon', 			pts:150, upgrades:[], restricted:true, units:'6 Rough Riders'};
var stormTrooper =	{id:501, label:'Storm Trooper Platoon',			pts:200, upgrades:[valkyrie], restricted:true, units:'8 Storm Troopers'};
var basilisk =		{id:502, label:'Artillery Battery (Basilisk)',	pts:250, upgrades:[], restricted:true, units:'3 Basilisks'};
var bombard =		{id:503, label:'Artillery Battery (Bombard)',	pts:250, upgrades:[], restricted:true, units:'3 Bombards'};
var manticore =		{id:504, label:'Artillery Battery (Manticore)',	pts:250, upgrades:[], restricted:true, units:'3 Manticores'};
var sentinel =		{id:505, label:'Sentinel Squadron',				pts:100, upgrades:[], restricted:true, units:'4 Sentinels'};
var deathstrike =	{id:506, label:'Deathstrike Missile Battery',	pts:200, upgrades:[], restricted:true, upto:1, units:'2 Deathstrike Missile Launchers'};
var baneblade =		{id:507, label:'Super-heavy Tank Platoon', 		pts:200, upgrades:[], restricted:true, defaults:[{unit:bane2, count:1}]};
var orbital =		{id:508, label:'Orbital Support',				pts:150, upgrades:[], restricted:true, upto:1, defaults:[{unit:lunar,count:1}]};
var flak =			{id:509, label:'Flak Battery',					pts:150, upgrades:[], restricted:true, units:'3 Hydra'};
var vulture =		{id:510, label:'Vulture Squadron',				pts:300, upgrades:[], restricted:true, units:'4 Vultures'};
var supportList =	{id:511, label:'SUPPORT FORMATIONS', options:[basilisk, bombard, manticore, deathstrike, flak, orbital, roughRider, sentinel, stormTrooper, baneblade, vulture]};

// COMPANIES
var hq = 			{id:512, label:'Regimental HQ', 				pts:500, upgrades:[chimera, companyUpgrades], restricting:true, upto:1, units:'Supreme Commander, 12 Infantry, 7 Chimera'};
var infantryCoy = 	{id:513, label:'Infantry Company', 				pts:250, upgrades:[chimera, companyUpgrades], restricting:true, units:'Commander, 12 Infantry'};
var mechCoy = 		{id:514, label:'Mechanised Infantry Company', 	pts:400, upgrades:[chimera, companyUpgrades], restricting:true, units:'Commander, 12 Infantry, 7 Chimera'};
var tankCoy = 		{id:515, label:'Tank Company', 					pts:650, upgrades:[chimera, companyUpgrades], restricting:true, defaults:[{unit:russ, count:10}]};
var superCoy = 		{id:516, label:'Super-heavy Tank Company', 		pts:500, upgrades:[chimera, companyUpgrades], restricting:true, defaults:[{unit:bane, count:3}]};
var artilleryCoy = 	{id:517, label:'Artillery Company', 			pts:650, upgrades:[chimera, companyUpgrades], restricting:true, defaults:[{unit:basil, count:9}]};
var companyList =	{id:518, label:'COMPANIES', options:[hq, infantryCoy, mechCoy, tankCoy, superCoy, artilleryCoy]};

// NAVY
var thunderbolt = 		{id:519, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{id:520, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'};
var navyList =			{id:521, label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{id:522, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{id:523, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhounds =			{id:526, label:'Warhound Pack',			pts:500, upgrades:[], limited:true, units:'2 Warhounds'};
var warhound =			{id:524, label:'Warhound Titan',		pts:275, upgrades:[], limited:true};
var titanList = 		{id:525, label:'TITAN LEGIONS', options:[warlord, reaver, warhound, warhounds]};

// DETAILS
var listData = {
	id:'Steel Legion', version:'Epic UK v301209',
	sublists:[companyList, supportList, navyList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
