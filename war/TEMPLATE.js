// UNIT OPTIONS
var bikes = 			{id:10, label:'Bikes',		upto:5, minimum:5};
	var bike1 =			{id:11, label:'Bike A',	 	pts:0, 		optional:true, group:bikes};
	var bike2 =			{id:12, label:'Bike B',		pts:0, 		optional:true, group:bikes};
	bikes.options = 	[bike1, bike2];

// FORMATION UPGRADES
var tank = 				{id:40, label:'Tank',		pts:50, upto:2};
var commander =			{id:41, label:'Cmdr', 		upto:1};
	var commander1 = 	{id:42, label:'Cmmdr 1',	pts:50, 	group:commander};
	var commander2 = 	{id:43, label:'Cmmdr 2',	pts:50, 	group:commander};
	var commander3 = 	{id:44, label:'Cmmdr 3',	pts:100, 	group:commander};
	commander.options = [commander1, commander2, commander3];

// FORMATIONS
var formation1 =		{id:501, label:'Basic Formation',		pts:300, units:'Some Units', upgrades:[commander, tank]};
var formation2 = 		{id:502, label:'Formation with Options',pts:200, defaults:[{unit:bike1,count:5}], upgrades:[commander]};
var spacecraft = 		{id:503, label:'Spacecraft', 			upto:1};
var spacecraft1 =		{id:504, label:'Spacecraft 1',			pts:200, upgrades:[], group:spacecraft}; 
var spacecraft2 =		{id:505, label:'Spacecraft 2',			pts:350, upgrades:[], group:spacecraft}; 
var formationList =		{id:500, label:'FORMATIONS', 			options:[formation1, formation2, spacecraft1, spacecraft2]};

// NAVY
var fighter = 			{id:521, label:'Some Fighters',			pts:150, units:'2 Fighters', upgrades:[], limited:true};
var navyList =			{id:520, label:'NAVY', 					options:[fighter]};

// WAR ENGINES
var titan =				{id:541, label:'A Titan',				pts:850, upgrades:[], limited:true};
var titanList = 		{id:540, label:'WAR ENGINES', 			options:[titan]};

// DETAILS
var listData = {
	id:'Example List', version:'EA Rulebook Oct09',
	sublists:[formationList, navyList, titanList]};

// CALLBACK
listLoaded();

