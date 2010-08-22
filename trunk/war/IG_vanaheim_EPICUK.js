// UNIT OPTIONS
var valks =			{id:10, label:'Gunships',	upto:5,	minimum:5, options:[
	{id:11, label:'Valkyrie',	pts:0,	optional:true},
	{id:12, label:'Vendetta',	pts:0,	optional:true, upto:2}
]};
var spacecraft = 	{id:13, label:'Spacecraft', upto:1,	minimum:1, options:[
	{id:14, label:'Lunar Class Cruiser',		pts:0,	optional:true},
	{id:15, label:'Emperor Class Battleship',	pts:150,optional:true}
]};
var sentinels =		{id:16, label:'Sentinels', 	upto:1, minimum:1, options:[
	{id:17, label:'4 Light Sentinels', pts:0, optional:true},
	{id:18, label:'2 Light Sentinels, 2 Melta Sentinels', pts:25, optional:true},
	{id:19, label:'4 Melta Sentinels', pts:50, optional:true}
]};

// UPGRADES (upto 2 per company)
var companyUpgrades = 	{id:25, label:'Upgrades', upto:2, options:[
	{id:26, label:'Fire Support Platoon (2 Fire Support, 1 Valkyrie)',	pts:125, upto:1},
	{id:27, label:'Mortar Platoon (2 Mortars, 1 Valkyrie)',				pts:100, upto:1},
	{id:28, label:'Trooper Platoon (2 Troopers, 1 Valkyrie)',			pts:100, upto:1}
]};
var valkyries =			{id:29, label:'4 Valkyries',	pts:200, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:500, label:'SUPPORT FORMATIONS', options:[
	{id:501, label:'Vulture Squadron',		pts:300, upgrades:[], restricted:true, units:'4 Vultures'},
	{id:502, label:'Sentinel Squadron',		pts:100, upgrades:[sentinels,valkyries], restricted:true},
	{id:503, label:'Storm Troopers',		pts:350, upgrades:[], restricted:true, units:'8 Storm Troopers, 4 Valkyries'},
	{id:504, label:'Orbital Support',		pts:150, upgrades:[spacecraft], restricted:true, upto:1}
]};

// COMPANIES
var companyList =	{id:520, label:'COMPANIES', options:[
	{id:521, label:'Regimental HQ', 		pts:500, upgrades:[companyUpgrades, valks], restricting:true, upto:1, units:'Supreme Commander, 9 Vanaheim Troopers'},
	{id:522, label:'Air Cavalry Company', 	pts:400, upgrades:[companyUpgrades, valks], restricting:true, units:'Commander, 9 Vanaheim Troopers'}
]};

// NAVY
var navyList =		{id:530, label:'IMPERIAL NAVY', options:[
	{id:531, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'},
	{id:532, label:'Lightning Flight',		pts:150, upgrades:[], limited:true, units:'2 Lightning Fighters'},
	{id:533, label:'Marauder Destroyers',	pts:275, upgrades:[], limited:true, units:'2 Marauder Destroyers'},	
	{id:534, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauder Bombers'}		
]};

// DETAILS
var listData = {
	id:'Vanaheim 7th Air Cavalry', version:'Epic UK v301209',
	sublists:[companyList, supportList, navyList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
