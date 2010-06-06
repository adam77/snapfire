// UNIT OPTIONS
var lemanRuss =			{id:10, label:'Leman Russ',	upto:10, minimum:6};
	var russ =			{id:11, label:'Leman Russ',			pts:65,	group:lemanRuss,	optional:true};
	var executioner =	{id:12, label:'Leman Russ Executioner',		pts:65,	group:lemanRuss,	optional:true};
	var demolisher =	{id:13, label:'Leman Russ Demolisher',			pts:75,	group:lemanRuss,	optional:true};	
	var command =		{id:14, label:'Command Tank',		pts:90,	group:lemanRuss,	optional:true, upto:1};
	lemanRuss.options =		[russ, executioner, demolisher, command];
var lemans =			{id:15, label:'Leman Russ', upto:9, minimum:9};
	var russ2 =			{id:16, label:'Leman Russ',			pts:0,	group:lemans,	optional:true};
	var executioner2 =	{id:17, label:'Leman Russ Executioner',		pts:0,	group:lemans,	optional:true};
	lemans.options =		[russ2, executioner2];
var superP =			{id:18, label:'Super Heavy',	upto:1,		minimum:1};
	var bane2 =				{id:19, label:'Baneblade',		pts:0,	group:superP,	optional:true};
	var sword2 =			{id:20, label:'Shadowsword',	pts:0,	group:superP,	optional:true};
	var storm2 =			{id:21, label:'Stormblade',		pts:0,	group:superP,	optional:true};
	superP.options =		[bane2, sword2, storm2];
var spacecraft = 		{id:22, label:'Spacecraft', 	upto:1,		minimum:1};
	var lunar =				{id:23, label:'Lunar Class',	pts:0,	group:spacecraft,	optional:true};
	var emperor	=			{id:24, label:'Emperor Class',	pts:150,group:spacecraft,	optional:true};
	spacecraft.options =	[lunar, emperor];

// UPGRADES (upto 3 per company)
var companyUpgrades = 	{id:25, label:'Upgrades', upto:3};
var tankSquadron =		{id:26, label:'Tank Squadron (3 Leman Russ)',		pts:200, upto:1, group:companyUpgrades};
var hydra =				{id:27, label:'Hydra',								pts:50, upto:1, group:companyUpgrades};
var hellhounds =		{id:28, label:'Hellhound Squadron (3 Hellhounds)',	pts:150, upto:1, group:companyUpgrades};
var griffons =			{id:29, label:'Griffon Battery (3 Griffons)',		pts:100, upto:1, group:companyUpgrades};
var infantry =			{id:30, label:'Tank Riders (6 Tank Riders)',		pts:150, upto:1, group:companyUpgrades};
companyUpgrades.options = [hydra, tankSquadron, hellhounds, griffons, infantry];

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:500, label:'SUPPORT FORMATIONS', options:[
	{id:501, label:'Light Artillery Platoon',	pts:100, upgrades:[], restricted:true, units:'3 Griffons'},
	{id:502, label:'Medium Artillery Platoon',	pts:250, upgrades:[], restricted:true, units:'3 Basilisks'},
	{id:503, label:'Scout Platoon',			pts:200, upgrades:[], restricted:true, units:'6 Salamander Scout Tanks'},
	{id:504, label:'Orbital Support',		pts:150, upgrades:[], restricted:true, defaults:[{unit:lunar,count:1}]},
	{id:505, label:'Super-heavy Tank Platoon',pts:200, upgrades:[], restricted:true, defaults:[{unit:bane2, count:1}]},
	{id:506, label:'Anti-tank Platoon',		pts:175, upgrades:[], restricted:true, units:'3 Leman Russ Tank Hunters'},
	{id:507, label:'Flak Platoon',			pts:150, upgrades:[], restricted:true, units:'3 Hydra'}
]};

// COMPANIES
var companyList =	{id:520, label:'COMPANIES', options:[
	{id:521, label:'Regimental HQ',		pts:750, 				upgrades:[companyUpgrades], restricting:true, upto:1, units:'Ulani HQ Command Tank', defaults:[{unit:russ2, count:9}]},
	{id:522, label:'Tank Company', 		displayPts:390, pts:0, 	upgrades:[russ,companyUpgrades], restricting:true, defaults:[{unit:russ, count:6}]}
]};

// NAVY
var navyList =	{id:530, label:'IMPERIAL NAVY', options:[
				{id:531, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'},
				{id:532, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'}
]};

// DETAILS
var listData = {
	id:'Ulani Tank Regiment', version:'Epic UK v301209',
	sublists:[companyList, supportList, navyList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
