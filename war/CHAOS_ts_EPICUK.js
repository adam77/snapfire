// MANDATORY UNITS
var lord = 			{id:16, label:'Lord', upto:1, minimum:1, options:[
	{id:18, label:'Sorcerer Lord', 		pts:0, optional:true},
	{id:19, label:'Daemon Prince', 		pts:50, optional:true},
	{id:20, label:'Chaos Warlord', 		pts:50, optional:true},
	{id:21, label:'Daemon Prince (Supreme Commander)', pts:100, optional:true}
]};
var wheel = 		{id:23, label:'Death Wheel', 	pts:275, optional:true, upto:3, minimum:1};
var decimator =		{id:25, label:'Decimator', 		pts:225, optional:true, upto:3, minimum:1};
var armour =		{id:26, label:'Vehicles',		upto:8, minimum:4, options:[
	{id:27, label:'Chaos Predator', 	pts:50, optional:true},
	{id:28, label:'Chaos Land Raider', 	pts:75, optional:true}
]};
var raptor =	 	{id:30, label:'Raptor', 		pts:35, optional:true, upto:8, minimum:4};
var term = 			{id:32, label:'Chaos Terminator',pts:60, optional:true, upto:6, minimum:4};
var ts = 			{id:33, label:'Marines', upto:1, minimum:1, options:[
	{id:34, label:'5 Thousand Sons', 	pts:0, optional:true},
	{id:35, label:'8 Thousand Sons', 	pts:200, optional:true}
]};
var firelord =		{id:39, label:'Firelord', 		pts:150, optional:true, upto:3, minimum:1};

// UPGRADES
var greater =			{id:50, label:'Greater Daemon', pts:75};
var lesser =			{id:51, label:'Lesser Daemon', pts:20};
var champion =			{id:52, label:'Aspiring Sorcerer', upto:1, pts:50};
var raiders =			{id:53, label:'Chaos Land Raider', upto:4, pts:75};
var vindi =				{id:54,	label:'Chaos Vindicator', upto:3, pts:35};
var cultmarine =		{id:55, label:'4 Cult Marines', upto:1, pts:150};
var pact = 				{id:56, label:'Daemonic Pact', upto:1, pts:25};
var defiler = 			{id:57, label:'Thousand Sons Defiler', upto:3, pts:75};
var claws =				{id:58, label:'Dreadclaw Drop Pod', pts:5};
var havoc =				{id:59, label:'4 Havocs', upto:1, pts:150};
var icon =				{id:60, label:'Icon Bearer', upto:1, pts:50};
var obliterator =		{id:61, label:'Obliterator', upto:3, pts:85};
var rhino =				{id:62, label:'Rhino', pts:10};
var dread = 			{id:63, label:'Dreadnought', upto:3, pts:50};

// DETACHMENTS
var core =		{id:500, label:'CORE', options:[
	{id:501, label:'Thousand Sons Retinue',	restricting:true,pts:300,units:'Cabal of Sorcerers',upgrades:[ts,raiders,icon,champion,defiler,rhino]},
	{id:552, label:'Daemon Pool',			pts:0,upto:1,upgrades:[greater,lesser]}
]};

// SUPPORT
var support =	{id:502, label:'SUPPORT', options:[
	{id:503, label:'Terminators',			restricted:true,pts:400,units:'4 Terminators',upgrades:[lord,dread,raiders,pact,icon,defiler]},
	{id:506, label:'Defiler Pack',			restricted:true,pts:300,units:'4 Defilers',upgrades:[dread]},
	{id:508, label:'Disc Riders',			restricted:true,pts:300,units:'8 Disc Riders',upgrades:[lord,pact,icon]},	
	{id:509, label:'Armoured Company',		restricted:true,pts:0,displayPts:200,upgrades:[armour]},
	{id:510, label:'Silver Towers',			restricted:true,pts:325,units:'4 Silver Towers',upgrades:[]}
]};

// NAVY
var spacecraft ={id:532, label:'Spacecraft', upto:1};
var navyList =	{id:535, label:'CHAOS NAVY & DAEMONIC ENGINES', options:[
	{id:530, label:'Doomwings',					pts:150, units:'3 Doomwings', upgrades:[], limited:true},
	{id:531, label:'Firelords',					pts:0, displayPts:150, upgrades:[firelord], limited:true},
	{id:533, label:'Devastation Class Cruiser',	pts:150, upgrades:[], group:spacecraft, limited:true}, 
	{id:534, label:'Despoiler Class Battleship',pts:250, upgrades:[], group:spacecraft, limited:true}
]};

// TITANS
var titanList = {id:524, label:'CHAOS TITANS', options:[
	{id:520, label:'Warplord Titan',		pts:800, upgrades:[], limited:true},
	{id:521, label:'Mutator Titan',			pts:650, upgrades:[], limited:true},
	{id:522, label:'Warphound Tian',		pts:275, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Thousand Sons', version:'Epic UK v090710',
	sublists:[core, support, titanList, navyList],
	restriction:{limit:2, restricting:'Retinue', restricted:'Support Formations'}
};

// CALLBACK
listLoaded();

