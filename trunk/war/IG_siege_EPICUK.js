// MANDATORY UNITS
var transports =		{id:10, label:'Deployment',	upto:1,	minimum:1, options:[
	{id:12, label:'Gun Emplacements',			pts:0,	optional:true},
	{id:11, label:'Bruennhilde Transporters',	pts:0,	optional:true}
]};
var superP =			{id:16, label:'Super Heavy',	upto:1,	minimum:1, options:[
	{id:17, label:'Baneblade',					pts:0,	optional:true},
	{id:18, label:'Shadowsword',				pts:0,	optional:true}
]};

// UPGRADES (upto 3 per company)
var companyUpgrades = 	{id:25, label:'Upgrades', upto:3, options:[
	{id:28, label:'Infantry Platoon (6 Siege Infantry)',pts:75, upto:1},
	{id:29, label:'Rapier Platoon (3 Rapiers)',			pts:75, upto:1},
	{id:30, label:'Thudd Gun Platoon (3 Guns)',			pts:75, upto:1},
	{id:31, label:'Hellhound Squadron (3 Hellhounds)',	pts:150,upto:1},
	{id:32, label:'Griffon Battery (3 Griffons)',		pts:100,upto:1},
	{id:33, label:'2 Snipers',							pts:50, upto:1}
]};
var fort =			{id:34, label:'Fortified Position (Trenches, Razor Wire, Bunkers)',	pts:100, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:511, label:'SUPPORT FORMATIONS', options:[
	{id:500, label:'Artillery Company', 			pts:450, upgrades:[transports], restricted:true, units:'9 Gotterdammerung Howitzers'},
	{id:501, label:'Artillery Battery', 			pts:175, upgrades:[transports], restricted:true, units:'3 Gotterdammerung Howitzers'},
	{id:502, label:'Regiment AA Battery', 			pts:150, upgrades:[transports], restricted:true, units:'3 Blitzen AA Guns'},
	{id:503, label:'Bombard Battery',				pts:250, upgrades:[], restricted:true, units:'3 Bombards'},
	{id:505, label:'Rough Rider Platoon',			pts:150, upgrades:[], restricted:true, units:'6 Rough Riders'},
	{id:506, label:'Deathstrike Missile Battery',	pts:200, upgrades:[], restricted:true, upto:1, units:'2 Deathstrike Missile Launchers'},
	{id:507, label:'Super-heavy Tank Platoon', 		pts:200, upgrades:[superP], restricted:true},
	{id:508, label:'Light Tank Platoon',			pts:175, upgrades:[], restricted:true, units:'6 Siegfried Light Tanks'},
	{id:509, label:'Heavy Tank Platoon',			pts:300, upgrades:[], restricted:true, units:'6 Ragnarok Heavy Tanks'},
	{id:510, label:'Sapper Platoon',				pts:250, upgrades:[], restricted:true, upto:1, units:'8 Sapper Units'}
]};

// COMPANIES
var companyList =	{id:518, label:'COMPANIES', options:[
	{id:512, label:'Regimental HQ', 				pts:225, upgrades:[companyUpgrades, fort], restricting:true, upto:1, units:'Supreme Commander, 9 Siege Infantry'},
	{id:513, label:'Infantry Company', 				pts:175, upgrades:[companyUpgrades, fort], restricting:true, units:'Commander, 9 Siege Infantry'}
]};

// NAVY
var navyList =			{id:521, label:'IMPERIAL NAVY', options:[
	{id:519, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'},
	{id:520, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'}
]};

// DETAILS
var listData = {
	id:'Baran Siege Masters', version:'Epic UK v301209',
	sublists:[companyList, supportList, navyList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'},
	limitRatio:4.0	
};

// CALLBACK
listLoaded();
