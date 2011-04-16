// MANDATORY UNITS
var arty = 		{id:10, label:'Artillery',		upto:1,		minimum:1, options:[
	{id:11,	label:'9 Basilisks',	pts:0,optional:true},
	{id:12,	label:'9 Bombards',		pts:0,optional:true},
	{id:13,	label:'9 Manticores',	pts:0,optional:true}
]};
var supers =	{id:14, label:'Super Heavys',	upto:3,		minimum:3, options:[
	{id:15, label:'Baneblade',		pts:0,	optional:true},
	{id:16, label:'Shadowsword',	pts:0,	optional:true},
	{id:17, label:'Stormhammer',	pts:0,	optional:true},
	{id:18, label:'Stormblade',		pts:0,	optional:true},
	{id:19, label:'Stormsword',		pts:0,	optional:true}
]};
var russ =		{id:20, label:'Leman Russ',	upto:10,	minimum:10, options:[
	{id:21, label:'Thunderer',	pts:0,	optional:true},	
	{id:22, label:'Conqueror',	pts:10,	optional:true},	
	{id:23, label:'Exterminator',pts:10,optional:true},	
	{id:24, label:'Demolisher',	pts:20,	optional:true},	
	{id:25, label:'Leman Russ',	pts:20,	optional:true},
	{id:26, label:'Executioner*',pts:20,optional:true, upto:2},
	{id:27, label:'Vanquisher*',pts:45,	optional:true, upto:2},
	{id:28, label:'Destroyer*',	pts:70,	optional:true, upto:2}
]};
var spacecraft = 		{id:29, label:'Spacecraft', 	upto:1,		minimum:1, options:[
	{id:30, label:'Lunar Class',	pts:0,	optional:true},
	{id:31, label:'Emperor Class',	pts:150,optional:true}
]};
var superP =			{id:32, label:'Super Heavy',	upto:1,		minimum:1, options:[
	{id:33, label:'Baneblade',		pts:0,	optional:true},
	{id:34, label:'Shadowsword',	pts:0,	optional:true},
	{id:35, label:'Stormhammer',	pts:0,	optional:true},
	{id:36, label:'Stormblade',		pts:0,	optional:true},
	{id:37, label:'Stormsword',		pts:0,	optional:true}
]};
var arty2 =				{id:40, label:'Artillery',		upto:1,		minimum:1, options:[
	{id:41,	label:'3 Basilisks',	pts:0,optional:true},
	{id:42,	label:'3 Bombards',		pts:0,optional:true},
	{id:43,	label:'3 Manticores',	pts:0,optional:true}
]};
var russ2 =		{id:80, label:'Leman Russ',	upto:6,	minimum:6, options:[
	{id:81, label:'Thunderer',	pts:0,	optional:true},	
	{id:82, label:'Conqueror',	pts:10,	optional:true},	
	{id:83, label:'Exterminator',pts:10,optional:true},	
	{id:84, label:'Demolisher',	pts:20,	optional:true},	
	{id:85, label:'Leman Russ',	pts:20,	optional:true},
	{id:86, label:'Executioner*',pts:20,optional:true, upto:1},
	{id:87, label:'Vanquisher*', pts:45,optional:true, upto:1},
	{id:88, label:'Destroyer*',	pts:70,	optional:true, upto:1}
]};


// UPGRADES (upto 3 per company)
var coy = 		{id:50, label:'Upgrades', 	upto:3, options:[
	{id:51, label:'Supreme Commander', 					pts:100, upto:1, general:true},
	{id:52, label:'Flak Support (Hydra)',				pts:50, upto:1},
	{id:53, label:'Flak Support (2 Hydra)',				pts:100, upto:1},
	{id:54, label:'Hellhound Squadron (3 Hellhounds)',	pts:150, upto:1},
	{id:55, label:'Griffon Battery (3 Griffons)',		pts:100, upto:1},
	{id:56, label:'Salamander Command Vehicle',			pts:25, upto:1},
	{id:57, label:'Tank Squadron (3 Russ Variants)',	pts:140, upto:1}
]};
var extras =	{id:60, label:'Surcharges', upto:3, options:[
	{id:61,	label:'(Leman Russ Surcharge for Tank Squadron)',	pts:20},
	{id:62,	label:'(Demolisher Surcharge for Tank Squadron)',	pts:20},
	{id:63,	label:'(Conqueror Surcharge for Tank Squadron)',	pts:10},
	{id:64,	label:'(Exterminator Surcharge for Tank Squadron)',pts:10}
]};
var valkyrie =	{id:70, label:'Valkyrie Transport',				pts:150, upto:1};
var salamander ={id:71, label:'Salamander Command Vehicle',		pts:25, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:500, label:'SUPPORT FORMATIONS', options:[
	{id:501, label:'Tank Platoon',					pts:280, upgrades:[russ2], restricted:true},
	{id:502, label:'Artillery Platoon',				pts:250, upgrades:[arty2], restricted:true},
	{id:503, label:'Super-Heavy Tank Platoon', 		pts:200, upgrades:[superP], restricted:true},
	{id:504, label:'Salamander Scout Platoon',		pts:100, upgrades:[salamander], restricted:true, units:'3 Salamanders'},
	{id:505, label:'Mechanized Platoon',			pts:300, upgrades:[salamander], restricted:true, units:'10 Infantry, 5 Chimera'},
	{id:506, label:'Flak Battery',					pts:150, upgrades:[], restricted:true, units:'3 Hydra'},
	{id:507, label:'Vulture Squadron',				pts:300, upgrades:[], restricted:true, units:'4 Vultures'},
	{id:508, label:'Storm Trooper Platoon',			pts:200, upgrades:[valkyrie], restricted:true, units:'8 Storm Troopers'},
	{id:511, label:'Assault Gun Platoon',			pts:150, upgrades:[], units:'3 Medusas', restricted:true},
	{id:509, label:'Deathstrike Missile Battery',	pts:200, upgrades:[], restricted:true, upto:1, units:'2 Deathstrike Missile Launchers'},
	{id:510, label:'Orbital Support',				pts:150, upgrades:[spacecraft], restricted:true, upto:1}
]};

// COMPANIES
var companyList =	{id:514, label:'COMPANIES', options:[
	{id:515, label:'Tank Company', 						pts:425, upgrades:[russ, coy, extras], restricting:true},
	{id:516, label:'Super-Heavy Tank Company', 			pts:500, upgrades:[supers, coy, extras], restricting:true},
 	{id:517, label:'Self-Propelled Artillery Company',	pts:650, upgrades:[arty, coy, extras], restricting:true}
]};

// TITANS
var titanList = 		{id:525, label:'TITAN LEGIONS & NAVY', options:[
	{id:522, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true},
	{id:523, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true},
	{id:526, label:'Warhound Pack',			pts:500, upgrades:[], limited:true, units:'2 Warhounds'},
	{id:524, label:'Warhound Titan',		pts:275, upgrades:[], limited:true},
	{id:519, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'},
	{id:520, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'}
]};

// DETAILS
var listData = {
	id:'Minervan Tank Legion', version:'NetEA Raiders v2.0',
	sublists:[companyList, supportList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'},
	notes:['Tank Company may include a maximum of 2 rare russ variants (marked \'*\').']};

// CALLBACK
listLoaded();
