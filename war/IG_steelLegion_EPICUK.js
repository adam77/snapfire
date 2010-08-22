// MANDATORY UNITS
var lemanRuss =			{id:10, label:'Leman Russ',	upto:10,	minimum:10, options:[
	{id:11, label:'Leman Russ',	pts:0,	optional:true},
	{id:12, label:'Vanquisher',	pts:0,	optional:true, upto:1}
]};
var superh =			{id:13, label:'Super Heavys',	upto:3,		minimum:3, options:[
	{id:14, label:'Baneblade',		pts:0,	optional:true},
	{id:15, label:'Shadowsword',	pts:0,	optional:true}
]};
var superP =			{id:16, label:'Super Heavy',	upto:1,		minimum:1, options:[
	{id:17, label:'Baneblade',		pts:0,	optional:true},
	{id:18, label:'Shadowsword',	pts:0,	optional:true}
]};
var artilleryOpts =		{id:19, label:'Artillery',		upto:9,		minimum:9, options:[
	{id:20, label:'Basilisk',		pts:0,	optional:true},
	{id:21, label:'Manticore',		pts:0,	optional:true}
]};
var spacecraft = 		{id:22, label:'Spacecraft', 	upto:1,		minimum:1, options:[
	{id:23, label:'Lunar Class',	pts:0,	optional:true},
	{id:24, label:'Emperor Class',	pts:150,optional:true}
]};

// UPGRADES (upto 3 per company)
var chimera =			{id:26, label:'Chimera',	pts:25}; // only applies to snipers & ogryns
var companyUpgrades = 	{id:25, label:'Upgrades', 	upto:3, options:[
	{id:27, label:'Fire Support Platoon (4 Fire Support)',	pts:100, upto:1},
	{id:28, label:'Infantry Platoon (6 Infantry)',		pts:100, upto:1},
	{id:29, label:'Tank Squadron (3 Leman Russ)',		pts:200, upto:1},
	{id:30, label:'Tank Squadron (3 Demolishers)',		pts:200, upto:1},
	{id:31, label:'Hellhound Squadron (3 Hellhounds)',	pts:150, upto:1},
	{id:32, label:'Griffon Battery (3 Griffons)',		pts:100, upto:1},
	{id:33, label:'2 Snipers',							pts:50, upto:1},
	{id:34, label:'2 Ogryns',							pts:50, upto:1},
	{id:35, label:'Hydra',								pts:50, upto:1}
]};
var valkyrie =			{id:36, label:'Valkyrie Transport',	pts:150, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:511, label:'SUPPORT FORMATIONS', options:[
	{id:500, label:'Rough Rider Platoon', 			pts:150, upgrades:[], restricted:true, units:'6 Rough Riders'},
	{id:501, label:'Storm Trooper Platoon',			pts:200, upgrades:[valkyrie], restricted:true, units:'8 Storm Troopers'},
	{id:502, label:'Artillery Battery (Basilisk)',	pts:250, upgrades:[], restricted:true, units:'3 Basilisks'},
	{id:503, label:'Artillery Battery (Bombard)',	pts:250, upgrades:[], restricted:true, units:'3 Bombards'},
	{id:504, label:'Artillery Battery (Manticore)',	pts:250, upgrades:[], restricted:true, units:'3 Manticores'},
	{id:505, label:'Sentinel Squadron',				pts:100, upgrades:[], restricted:true, units:'4 Sentinels'},
	{id:506, label:'Deathstrike Missile Battery',	pts:200, upgrades:[], restricted:true, upto:1, units:'2 Deathstrike Missile Launchers'},
	{id:507, label:'Super-heavy Tank Platoon', 		pts:200, upgrades:[superP], restricted:true},
	{id:508, label:'Orbital Support',				pts:150, upgrades:[spacecraft], restricted:true, upto:1},
	{id:509, label:'Flak Battery',					pts:150, upgrades:[], restricted:true, units:'3 Hydra'},
	{id:510, label:'Vulture Squadron',				pts:300, upgrades:[], restricted:true, units:'4 Vultures'}
]};

// COMPANIES
var companyList =	{id:518, label:'COMPANIES', options:[
	{id:512, label:'Regimental HQ', 				pts:500, upgrades:[chimera, companyUpgrades], restricting:true, upto:1, units:'Supreme Commander, 12 Infantry, 7 Chimera'},
 	{id:513, label:'Infantry Company', 				pts:250, upgrades:[chimera, companyUpgrades], restricting:true, units:'Commander, 12 Infantry'},
	{id:514, label:'Mechanised Infantry Company', 	pts:400, upgrades:[chimera, companyUpgrades], restricting:true, units:'Commander, 12 Infantry, 7 Chimera'},
	{id:515, label:'Tank Company', 					pts:650, upgrades:[chimera, companyUpgrades,lemanRuss], restricting:true},
	{id:516, label:'Super-heavy Tank Company', 		pts:500, upgrades:[chimera, companyUpgrades,superh], restricting:true},
 	{id:517, label:'Artillery Company', 			pts:650, upgrades:[chimera, companyUpgrades,artilleryOpts], restricting:true}
]};

// NAVY
var navyList =			{id:521, label:'IMPERIAL NAVY', options:[
	{id:519, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'},
	{id:520, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'}
]};

// TITANS
var titanList = 		{id:525, label:'TITAN LEGIONS', options:[
	{id:522, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true},
	{id:523, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true},
	{id:526, label:'Warhound Pack',			pts:500, upgrades:[], limited:true, units:'2 Warhounds'},
	{id:524, label:'Warhound Titan',		pts:275, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Steel Legion', version:'Epic UK v301209',
	sublists:[companyList, supportList, navyList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
