// UNIT OPTIONS
var transports =			{id:10, label:'Deployment',	upto:1,	minimum:1};
	var bruennhilde =		{id:11, label:'Bruennhilde Transporters',	pts:0,	group:transports, optional:true};
	var emplacement =		{id:12, label:'Gun Emplacements',			pts:0,	group:transports, optional:true};
	transports.options =	[bruennhilde, emplacement];
var superP =			{id:16, label:'Super Heavy',	upto:1,		minimum:1};
	var bane2 =				{id:17, label:'Baneblade',		pts:0,	group:superP,	optional:true};
	var sword2 =			{id:18, label:'Shadowsword',	pts:0,	group:superP,	optional:true};
	superP.options =		[bane2, sword2];

// UPGRADES (upto 3 per company)
var companyUpgrades = 	{id:25, label:'Upgrades', upto:3};
	var infantry =			{id:28, label:'Infantry Platoon (6 Siege Infantry)',pts:75, upto:1, group:companyUpgrades};
	var rapiers =			{id:29, label:'Rapier Platoon (3 Rapiers)',			pts:75, upto:1, group:companyUpgrades};
	var thudds =			{id:30, label:'Thudd Gun Platoon (3 Guns)',			pts:75, upto:1, group:companyUpgrades};
	var hellhounds =		{id:31, label:'Hellhound Squadron (3 Hellhounds)',	pts:150, upto:1, group:companyUpgrades};
	var griffons =			{id:32, label:'Griffon Battery (3 Griffons)',		pts:100, upto:1, group:companyUpgrades};
	var snipers =			{id:33, label:'2 Snipers',							pts:50, upto:1, group:companyUpgrades};
	companyUpgrades.options = [infantry, rapiers, thudds, hellhounds, griffons, snipers];
var fort =				{id:34, label:'Fortified Position (Trenches, Razor Wire, Bunkers)',	pts:100, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var artCoy =		{id:500, label:'Artillery Company', 			pts:450, defaults:[{unit:bruennhilde,count:1}], upgrades:[], restricted:true, units:'9 Gotterdammerung Howitzers'};
var artBattery =	{id:501, label:'Artillery Battery', 			pts:150, defaults:[{unit:bruennhilde,count:1}], upgrades:[], restricted:true, units:'3 Gotterdammerung Howitzers'};
var aaBattery =		{id:502, label:'Regiment AA Battery', 			pts:125, defaults:[{unit:bruennhilde,count:1}], upgrades:[], restricted:true, units:'3 Blitzen AA Guns'};
var bombard =		{id:503, label:'Bombard Battery',				pts:250, upgrades:[], restricted:true, units:'3 Bombards'};
var rriders =		{id:505, label:'Rough Rider Platoon',			pts:150, upgrades:[], restricted:true, units:'6 Rough Riders'};
var deathstrike =	{id:506, label:'Deathstrike Missile Battery',	pts:200, upgrades:[], restricted:true, upto:1, units:'2 Deathstrike Missile Launchers'};
var baneblade =		{id:507, label:'Super-heavy Tank Platoon', 		pts:200, upgrades:[], restricted:true, defaults:[{unit:bane2, count:1}]};
var lighttank =		{id:508, label:'Light Tank Platoon',			pts:150, upgrades:[], restricted:true, units:'6 Siegfried Light Tanks'};
var heavytank =		{id:509, label:'Heavy Tank Platoon',			pts:300, upgrades:[], restricted:true, units:'6 Ragnarok Heavy Tanks'};
var sappers =		{id:510, label:'Sapper Platoon',				pts:250, upgrades:[], restricted:true, upto:1, units:'8 Sapper Units'};
var supportList =	{id:511, label:'SUPPORT FORMATIONS', options:[artCoy, artBattery, aaBattery, bombard, rriders, deathstrike, baneblade, lighttank, heavytank, sappers]};

// COMPANIES
var hq = 			{id:512, label:'Regimental HQ', 				pts:150, upgrades:[companyUpgrades, fort], restricting:true, upto:1, units:'Supreme Commander, 9 Siege Infantry'};
var infantryCoy = 	{id:513, label:'Infantry Company', 				pts:125, upgrades:[companyUpgrades, fort], restricting:true, units:'Commander, 9 Siege Infantry'};
var companyList =	{id:518, label:'COMPANIES', options:[hq, infantryCoy]};

// NAVY
var thunderbolt = 		{id:519, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{id:520, label:'Marauder Bombers',		pts:300, upgrades:[], limited:true, units:'2 Marauders'};
var navyList =			{id:521, label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// DETAILS
var listData = {
	id:'Baran Siege Masters', version:'EA Swordwind',
	sublists:[companyList, supportList, navyList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'},
	limitRatio:4.0	
};

// CALLBACK
listLoaded();
