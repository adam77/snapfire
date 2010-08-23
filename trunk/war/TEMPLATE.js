// MANDATORY UNITS WITH OPTIONS
var bikes = 		{id:10, label:'Bikes',		upto:5, minimum:5, options:[
	{id:11, label:'Bike A',	 	pts:0, 		optional:true},
	{id:12, label:'Bike B',		pts:0, 		optional:true}
]};

// FORMATION UPGRADES
var tank = 			{id:40, label:'Tank',		pts:50, upto:2};
var commander =		{id:41, label:'Cmdr', 		upto:1, options:[
 	{id:42, label:'Cmmdr 1',	pts:50},
 	{id:43, label:'Cmmdr 2',	pts:50},
 	{id:44, label:'Cmmdr 3',	pts:100}
]};

// FORMATIONS (id must 500 or higher)
var spacecraft = 	{id:500, label:'Spacecraft', 	upto:1};
var formationList =	{id:501, label:'FORMATIONS', 	options:[
	{id:502, label:'Basic Formation',			pts:300, units:'Some Units', upgrades:[commander,tank]},
	{id:503, label:'Formation with Options',	pts:200, upgrades:[bikes,commander]},
	{id:504, label:'Spacecraft 1',				pts:200, upgrades:[], group:spacecraft},
	{id:505, label:'Spacecraft 2',				pts:350, upgrades:[], group:spacecraft} 
]};

// NAVY
var navyList =		{id:520, label:'NAVY', 			options:[
	{id:521, label:'Some Fighters',				pts:150, units:'2 Fighters', upgrades:[], limited:true}
]};

// WAR ENGINES
var titanList = 	{id:540, label:'WAR ENGINES',	options:[
	{id:541, label:'A Titan',					pts:850, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Example List', version:'EA Rulebook Oct09',
	sublists:[formationList, navyList, titanList]};

// CALLBACK
listLoaded();

