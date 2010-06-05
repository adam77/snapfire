// UNIT OPTIONS
var valks =			{id:10, label:'Gunships',	upto:5,	minimum:5};
	var valk =		{id:11, label:'Valkyrie',	pts:0,	group:valks,	optional:true};
	var vend =		{id:12, label:'Vendetta',	pts:0,	group:valks,	optional:true, upto:2};
	valks.options =	[valk, vend];
var spacecraft = 	{id:13, label:'Spacecraft', 	upto:1,		minimum:1};
	var lunar =		{id:14, label:'Lunar Class Cruiser',		pts:0,	group:spacecraft,	optional:true};
	var emperor	=	{id:15, label:'Emperor Class Battleship',	pts:150,group:spacecraft,	optional:true};
	spacecraft.options = [lunar, emperor];
var sentinels =		{id:16, label:'Sentinels', upto:2, minimum:2};
	var sent =		{id:17, label:'2 Light Sentinels', pts:50, group:sentinels, optional:true};
	var melta =		{id:18, label:'2 Melta Sentinels', pts:75, group:sentinels, optional:true};
	sentinels.options = [sent, melta];

// UPGRADES (upto 2 per company)
var companyUpgrades = 	{id:25, label:'Upgrades', upto:2};
	var fireSupport =	{id:26, label:'Fire Support Platoon (2 Fire Support, 1 Valkyrie)',	pts:125, upto:1, group:companyUpgrades};
	var mortar =		{id:27, label:'Mortar Platoon (2 Mortars, 1 Valkyrie)',				pts:100, upto:1, group:companyUpgrades};
	var trooper =		{id:28, label:'Trooper Platoon (2 Troopers, 1 Valkyrie)',			pts:100, upto:1, group:companyUpgrades};
	companyUpgrades.options = [fireSupport, mortar, trooper];
var valkyries =			{id:29, label:'4 Valkyries',	pts:200, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:500, label:'SUPPORT FORMATIONS', options:[
	{id:501, label:'Vulture Squadron',		pts:300, upgrades:[], restricted:true, units:'4 Vultures'},
	{id:502, label:'Sentinel Squadron',		pts:0, displayPts:100, upgrades:[valkyries], restricted:true, defaults:[{unit:sent, count:2}]},
	{id:503, label:'Storm Troopers',		pts:350, upgrades:[], restricted:true, units:'8 Storm Troopers, 4 Valkyries'},
	{id:504, label:'Orbital Support',		pts:150, upgrades:[], restricted:true, upto:1, defaults:[{unit:lunar,count:1}]}
]};

// COMPANIES
var companyList =	{id:520, label:'COMPANIES', options:[
	{id:521, label:'Regimental HQ', 		pts:500, upgrades:[companyUpgrades], restricting:true, upto:1, units:'Supreme Commander, 9 Vanaheim Troopers', defaults:[{unit:valk,count:5}]},
	{id:522, label:'Air Cavalry Company', 	pts:400, upgrades:[companyUpgrades], restricting:true, units:'Commander, 9 Vanaheim Troopers', defaults:[{unit:valk,count:5}]}
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
