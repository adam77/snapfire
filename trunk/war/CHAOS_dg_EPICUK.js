// OPTIONALS
var lords = 		{id:16, label:'Lord', upto:1, minimum:1};
	var lord = 		{id:17, label:'Chaos Lord', 	pts:0, optional:true, group:lords};
	var sorcerer =	{id:18, label:'Sorcerer Lord', 	pts:0, optional:true, group:lords};
	var prince =	{id:19, label:'Daemon Prince', 	pts:50, optional:true, group:lords};
	var warlord =	{id:20, label:'Chaos Warlord', 	pts:50, optional:true, group:lords};
	var prince2 =	{id:21, label:'Daemon Prince (Supreme Commander)', pts:100, optional:true, group:lords};
	lords.options = [lord, sorcerer, warlord, prince, prince2];
var wheels = 		{id:22, label:'Death Wheels', upto:3, minimum:1};
	var wheel = 	{id:23, label:'Death Wheel', pts:275, optional:true, group:wheels};
	wheels.options = [wheel];
var decimators =	{id:24, label:'Decimators', upto:3, minimum:1};
	var decimator =	{id:25, label:'Decimator', pts:225, optional:true, group:decimators};
	decimators.options = [decimator];
var armour =		{id:26, label:'Vehicles', upto:7, minimum:4};
	var pred =		{id:27, label:'Chaos Predator', pts:50, optional:true, group:armour};
	var raider2 =	{id:28, label:'Chaos Land Raider', pts:75, optional:true, group:armour};
	armour.options = [pred, raider2];
var raptors = 		{id:29, label:'Raptors', upto:8, minimum:4};
	var raptor = 	{id:30, label:'Raptor', pts:35, optional:true, group:raptors};
	raptors.options = [raptor];
var terms = 		{id:31, label:'Terminators', upto:6, minimum:4};
	var term = 		{id:32, label:'Chaos Terminator', pts:60, optional:true, group:terms};
	terms.options = [term];
var dg = 			{id:33, label:'Marines', upto:1, minimum:1};
	var dg1 = 		{id:34, label:'7 Plague Marines', 			pts:0, optional:true, group:dg};
	var dg2 = 		{id:35, label:'5 Plague Marines, 2 Havocs', pts:40, optional:true, group:dg};
	dg.options = 	[dg1,dg2];
var reapers =		{id:36, label:'Reapers', upto:3, minimum:1};
	var reaper =	{id:37, label:'Plaguereaper', pts:200, optional:true, group:reapers};
	reapers.options = [reaper];
var contags =		{id:38, label:'Engines', upto:7, minimum:4};
	var contag1 =	{id:39, label:'Contagion Engine', pts:75, optional:true, group:contags};
	contags.options = [contag1];

// UPGRADES
var greater =			{id:50, label:'Greater Daemon', pts:75};
var lesser =			{id:51, label:'Lesser Daemon', pts:20};
var champion =			{id:52, label:'Chaos Champion', upto:1, pts:50};
var raiders =			{id:53, label:'Chaos Land Raider', upto:4, pts:75};
var vindi =				{id:54,	label:'Chaos Vindicator', upto:3, pts:35};
var cultmarine =		{id:55, label:'4 Cult Marines', upto:1, pts:150};
var pact = 				{id:56, label:'Daemonic Pact', upto:1, pts:25};
var defiler = 			{id:57, label:'Death Guard Defiler', upto:3, pts:75};
var claws =				{id:58, label:'Dreadclaw Drop Pod', pts:5};
var havoc =				{id:59, label:'4 Havocs', upto:1, pts:150};
var icon =				{id:60, label:'Icon Bearer', upto:1, pts:50};
var obliterator =		{id:61, label:'Obliterator', upto:3, pts:85};
var rhino =				{id:62, label:'Rhino', pts:10};
var dread = 			{id:63, label:'Dreadnought', upto:3, pts:50};
var tower =				{id:64, label:'Plague Tower', upto:1, pts:325};
var contagion =			{id:65, label:'Contagion Engine', upto:3, pts:75};

// DETACHMENTS
var core =	{id:500, label:'CORE', options:[
	{id:		501,
	label:		'Death Guard Retinue',
	restricting:true,
	pts:		325,
	defaults:	[{unit:lord,count:1},{unit:dg1,count:1}],
	upgrades:	[raiders,vindi,icon,pact,tower,contagion,dread,defiler]
	},
	{id:		551,
	label:		'Daemon Pool',
	pts:		0,
	upto:		1,
	upgrades:	[greater, lesser]
	}
]};

var support =	{id:502, label:'SUPPORT', options:[
	{id:		503,
	label:		'Death Guard Terminators',
	restricted:	true,
	pts:		400,
	units:		'4 Terminators',
	defaults:	[{unit:lord, count:1}],
	upgrades:	[dread,raiders,pact,icon]
	},
	{id:		504,
	label:		'Plague Zombie Infestation',
	pts:		200,
	restricted:	true,	
	units:		'3+2D6 Plague Zombies',
	upgrades:	[]
	},	
	{id:		505,
	label:		'Plague Engines',
	restricted:	true,
	pts:		25,
	displayPts:	325,
	defaults:	[{unit:contag1,count:4}],
	upgrades:	[contag1,tower,defiler]
	},	
	{id:		506,
	label:		'Death Guard Defiler Pack',
	restricted:	true,
	pts:		300,
	units:		'4 Defilers',
	upgrades:	[dread]
	},
	{id:		507,
	label:		'Super Heavy Company',
	restricted:	true,
	pts:		0,
	displayPts:	200,
	defaults:	[{unit:reaper,count:1}],
	upgrades:	[reaper,defiler,contagion]
	},	
	{id:		508,
	label:		'Chaos Space Marines',
	restricted:	true,
	pts:		250,
	units:		'6 Chaos Marines, 3 Rhinos',
	upgrades:	[pact]
	},	
	{id:		509,
	label:		'Armoured Company',
	restricted:	true,
	pts:		0,
	displayPts:	200,
 	defaults:	[{unit:pred, count:4}],
	upgrades:	[pred, raider2]
	}
]};

// NAVY
var navyList =	{id:535, label:'CHAOS NAVY', options:[
	{id:530, label:'Hellblade Flight',	pts:200, units:'3 Fighters', upgrades:[], limited:true},
	{id:531, label:'Helltalon Flight',	pts:250, units:'2 Bombers', upgrades:[], limited:true},
	{id:533, label:'Plague Ship',		pts:200, upto:1, upgrades:[], limited:true}
]};

// TITANS
var titanList = {id:523, label:'CHAOS TITANS', options:[
	{id:520, label:'Plaguelord Titan',		pts:800, upgrades:[], limited:true},
	{id:521, label:'Rupugnant Titan',			pts:650, upgrades:[], limited:true},
	{id:522, label:'Plaguehound Titan',			pts:275, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Death Guard', version:'Epic UK v090710',
	sublists:[core, support, titanList, navyList],
	restriction:{limit:2, restricting:'Retinue', restricted:'Support Formations'}
};

// CALLBACK
listLoaded();

