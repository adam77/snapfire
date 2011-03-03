// MANDATORY UNITS
var lemanRuss =			{id:10, label:'Leman Russ',	upto:10,	minimum:10, options:[
	{id:11, label:'Leman Russ',			pts:0,	optional:true},
	{id:12, label:'Vanquisher',			pts:0,	optional:true, upto:1}
]};
var superh =			{id:13, label:'Super Heavies',	upto:3,		minimum:3, options:[
	{id:14, label:'Baneblade',			pts:0,	optional:true},
	{id:15, label:'Shadowsword',			pts:0,	optional:true}
]};
var superP =			{id:16, label:'Super Heavy',	upto:1,		minimum:1, options:[
	{id:17, label:'Baneblade',			pts:0,	optional:true},
	{id:18, label:'Shadowsword',			pts:0,	optional:true}
]};
var spacecraft = 		{id:19, label:'Spacecraft', 	upto:1,		minimum:1, options:[
	{id:20, label:'Lunar Class',			pts:0,	optional:true},
	{id:21, label:'Emperor Class',			pts:150,optional:true},
	{id:22, label:'Space Marine Strike Cruiser',	pts:50,optional:true}
]};
var arty = 				{id:23, label:'Artillery',		upto:1,		minimum:1, options:[
	{id:24,	label:'3 Basilisks',			pts:0,optional:true},
	{id:25,	label:'3 Bombards',			pts:0,optional:true},
	{id:26,	label:'3 Manticores',			pts:0,optional:true}
]};
var transport =			{id:60, label:'Transport', upto:1, options:[
	{id:61, label:'Rhinos',				pts:0, optional:true},
	{id:62, label:'Drop Pods',			pts:0, optional:true}
]};

// UPGRADES (up to 3 per company)
var companyUpgrades = 	{id:27, label:'Upgrades', 	upto:3, options:[
	{id:28, label:'Mechanized Fire Support Platoon (4 Fire Support plus 2 Chimera)',	pts:150},
	{id:29, label:'Mechanized Infantry Platoon (6 Infantry plus 3 Chimera)',		pts:175},
	{id:30, label:'Mechanized Snipers (2 Snipers plus 1 Chimera)',				pts:75},
	{id:31, label:'Hellhound Squadron (3 Hellhounds)',					pts:150},
	{id:32, label:'Griffon Battery (3 Griffons)',						pts:100},
	{id:33, label:'Tank Squadron (3 Leman Russ)',						pts:200},
	{id:34, label:'Tank Squadron (3 Demolishers)',						pts:200},
	{id:35, label:'Hydra (1 only)',								pts:50}
]};
var valkyrie =			{id:36, label:'Valkyrie Transport',				pts:150, upto:1};
var commander =			{id:37, label:'Cmdr', upto:1, options:[
	{id:38, label:'Captain',			pts:50},
	{id:39, label:'Chaplain', 			pts:50},
	{id:40, label:'Librarian', 			pts:50}
]};
var dreadnought = 	{id:41, label:'Dreadnought', 			pts:50, upto:2};
var hunter = 			{id:42, label:'Hunter', 				pts:75, upto:1};
var landRaiders = 	{id:43, label:'4 Land Raiders', 		pts:350, upto:1};
var razorbacks =		{id:44, label:'2 Razorbacks (replaces 1 Rhino)',	pts:50};
var armour =			{id:45, label:'Armour', upto:2, options:[
	{id:46, label:'Predator Annihilator',						pts:75},
	{id:47, label:'Predator Destructor',						pts:75},
	{id:48, label:'Vindicator', 							pts:75}
]};
var speeders =			{id:49, label:'LndSpdr', upto:1, options:[
	{id:50, label:'3 Land Speeders',						pts:150},
	{id:51, label:'3 Tornadoes', 							pts:150}
]};
var typhoon =			{id:52, label:'Typhoon',				pts:50, upto:1};


// SUPPORT (up to 2 per company)
var supportList =	{id:500, label:'SUPPORT FORMATIONS', options:[
	{id:501, label:'Storm Trooper Platoon',				pts:200, upgrades:[valkyrie], restricted:true, units:'8 Storm Troopers'},
	{id:502, label:'Imperial Crusade Artillery Battery',		pts:250, upgrades:[arty], restricted:true},
	{id:505, label:'Sentinel Squadron',				pts:100, upgrades:[], restricted:true, units:'4 Sentinels'},
	{id:507, label:'Super-Heavy Tank Platoon', 			pts:200, upgrades:[superP], restricted:true},
	{id:509, label:'Flak Battery',					pts:150, upgrades:[], restricted:true, units:'3 Hydra'},
	{id:510, label:'Vulture Squadron',				pts:300, upgrades:[], restricted:true, units:'4 Vultures'},
	{id:511, label:'Space Marine Terminator Detachment',		pts:300, upgrades:[commander, landRaiders, dreadnought], restricted:true, units:'4 Terminator', upto:1},
	{id:512, label:'Space Marine Tactical Detachment',		pts:275, upgrades:[commander, razorbacks, dreadnought, hunter, transport], restricted:true, units:'6 Tactical'},
	{id:513, label:'Space Marine Assault Detachment', 		pts:150, upgrades:[commander, speeders, typhoon], restricted:true, units:'4 Assault'},
	{id:514, label:'Space Marine Devastator Detachment',		pts:225, upgrades:[commander, razorbacks, dreadnought, hunter, transport], restricted:true, units:'4 Devastator'},
	{id:515, label:'Space Marine Armour Detachment', 		pts:250, upgrades:[commander, hunter, armour], restricted:true, units:'4 Predators (either type)'},
	{id:516, label:'Space Marine Landing Craft', 			pts:375, upgrades:[], restricted:true, upto:1}
]};

// COMPANIES
var companyList =	{id:518, label:'COMPANIES', options:[
	{id:519, label:'Lord General Militant Command HQ', 		pts:450, upgrades:[companyUpgrades], restricting:true, upto:1, units:'Supreme Commander, 6 Guard, 4 Stormtrooper, 6 Chimera'},
	{id:520, label:'Armoured Fist Company', 			pts:425, upgrades:[companyUpgrades], restricting:true, units:'Commander, 12 Infantry, 7 Chimera'},
	{id:521, label:'Imperial Crusade Tank Company', 		pts:650, upgrades:[companyUpgrades,lemanRuss], restricting:true},
	{id:522, label:'Imperial Crusade Super-Heavy Tank Company', 	pts:525, upgrades:[companyUpgrades,superh], restricting:true}
]};

// NAVY
var navyList =			{id:524, label:'IMPERIAL NAVY', options:[
	{id:525, label:'Orbital Support',				pts:150, upgrades:[spacecraft], restricted:true, upto:1},
	{id:526, label:'Thunderbolt Squadron',			pts:225, upgrades:[], limited:true, units:'3 Thunderbolt fighters'},
	{id:527, label:'Marauder Squadron',				pts:275, upgrades:[], limited:true, units:'2 Marauder bombers'}
]};

// TITANS
var titanList = 		{id:528, label:'TITAN LEGIONS', options:[
	{id:529, label:'Warlord Titan',					pts:850, upgrades:[], limited:true},
	{id:530, label:'Reaver Titan',					pts:650, upgrades:[], limited:true},
	{id:531, label:'Warhound Pack',					pts:500, upgrades:[], limited:true, units:'2 Warhounds'},
	{id:532, label:'Warhound  Titan',				pts:275, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Saranes Expanse Imperial Crusade', version:'NetEA Army Book *UNDER DEVELOPMENT*',
	sublists:[companyList, supportList, navyList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
