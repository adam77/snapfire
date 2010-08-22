// MANDATORY UNITS
var faction =		{id:10,	label:'Faction',	upto:1,	minimum:1, options:[
	{id:15,	label:'(Chaos Undivided)',	pts:0,	optional:true},
	{id:11,	label:'(Khorne)',			pts:0,	optional:true},
	{id:12,	label:'(Nurgle)',			pts:0,	optional:true},
	{id:13,	label:'(Slaanesh)',			pts:0,	optional:true},
	{id:14,	label:'(Tzeentch)',			pts:0,	optional:true}
]};
var lords = 		{id:16, label:'Lord', upto:1, minimum:1, options:[
	{id:17, label:'Chaos Lord', 		pts:0, optional:true},
	{id:18, label:'Sorcerer Lord', 		pts:0, optional:true},
	{id:19, label:'Daemon Prince', 		pts:50, optional:true},
	{id:20, label:'Chaos Warlord', 		pts:50, optional:true},
	{id:21, label:'Daemon Prince (Supreme Commander)', pts:100, optional:true}
]};
var armour =		{id:26, label:'Vehicles', upto:8, minimum:4, options:[
	{id:27, label:'Chaos Predator', 	pts:50, optional:true},
	{id:28, label:'Chaos Land Raider', 	pts:75, optional:true}
]};
var raptor = 		{id:30, label:'Raptor', pts:35, optional:true, upto:8, minimum:4};
var term = 			{id:32, label:'Chaos Terminator', pts:60, optional:true, upto:6, minimum:4};
var wheel = 		{id:23, label:'Death Wheel', pts:275, optional:true, upto:3, minimum:1};
var decimator =		{id:25, label:'Decimator', pts:225, optional:true, upto:3, minimum:1};

// UPGRADES
var greater =			{id:50, label:'Greater Daemon', pts:75};
var lesser =			{id:51, label:'Lesser Daemon', pts:20};
var champion =			{id:52, label:'Chaos Champion', upto:1, pts:50};
var raiders =			{id:53, label:'Chaos Land Raider', upto:4, pts:75};
var vindi =				{id:54,	label:'Chaos Vindicator', upto:3, pts:35};
var cultmarine =		{id:55, label:'4 Cult Marines', upto:1, pts:150};
var pact = 				{id:56, label:'Daemonic Pact', upto:1, pts:25};
var defiler = 			{id:57, label:'Defiler', upto:3, pts:75};
var claws =				{id:58, label:'Dreadclaw Drop Pod', pts:5};
var havoc =				{id:59, label:'4 Havocs', upto:1, pts:150};
var icon =				{id:60, label:'Icon Bearer', upto:1, pts:50};
var obliterator =		{id:61, label:'Obliterator', upto:3, pts:85};
var rhino =				{id:62, label:'Rhino', pts:10};
var dread = 			{id:63, label:'Dreadnought', upto:3, pts:50};

// DETACHMENTS
var core =	{id:500, label:'CORE', options:[
	{id:501, label:'Black Legion Retinue',	restricting:true, 	pts:275, units:'8 Chaos Space Marines', upgrades:[faction,lords,champion,raiders,vindi,cultmarine,pact,defiler,claws,havoc,icon,obliterator,rhino,dread]},
	{id:551, label:'Daemon Pool',								pts:0, upto:1, upgrades:[greater, lesser]}
]};

var elite =	{id:502, label:'ELITE', options:[
	{id:503, label:'Chaos Terminators',		restricted:true, pts:35, 	displayPts:275, upgrades:[faction,lords,term, dread, defiler, raiders, obliterator, pact, champion, icon]},
	{id:504, label:'Chosen',				restricted:true, pts:125, units:'4 Chaos Space Marine Scouts', upgrades:[faction,rhino, claws, dread, pact]},
	{id:505, label:'Decimators',			restricted:true, pts:0,	displayPts:225, upgrades:[faction,decimator,defiler]}
]};

var support =	{id:506, label:'SUPPORT', options:[
	{id:507, label:'Armoured Company',		restricted2:true,	pts:0, displayPts:200, upgrades:[faction,armour,defiler]},
	{id:508, label:'Bike Company',			restricted2:true,	pts:300, units:'8 Chaos Space Marines Bikes', upgrades:[faction,lords,icon, pact]},
	{id:509, label:'Defiler Assault Pack',	restricted2:true,	pts:275, units:'4 Defilers', upgrades:[faction]},
	{id:510, label:'Raptor Cult', 			restricted2:true,	pts:35, displayPts:175, upgrades:[faction,lords,raptor,pact]}
]};

// NAVY
var spacecraft = 		{id:532, label:'Spacecraft', upto:1};
var navyList =			{id:535, label:'CHAOS NAVY', options:[
	{id:530, label:'Hellblade Flight',	pts:200, units:'3 Fighters', upgrades:[], limited:true},
	{id:531, label:'Helltalon Flight',	pts:250, units:'2 Bombers', upgrades:[], limited:true},
	{id:533, label:'Devastation Class Cruiser',	pts:150, upgrades:[], group:spacecraft, limited:true}, 
	{id:534, label:'Despoiler Class Battleship',pts:250, upgrades:[], group:spacecraft, limited:true}
]};

// TITANS
var titanList = 		{id:523, label:'CHAOS TITANS', options:[
	{id:520, label:'Banelord Titan',		pts:800, upgrades:[], limited:true},
	{id:521, label:'Ravager Titan',			pts:650, upgrades:[], limited:true},
	{id:522, label:'Feral Titan',			pts:275, upgrades:[], limited:true},
	{id:523, label:'Death Wheel Squadron',	pts:0, displayPts:275, upgrades:[faction,wheel], limited:true}
]};

// DETAILS
var listData = {
	id:'Black Legion', version:'Epic UK v090710',
	sublists:[core, elite, support, titanList, navyList],
	restriction:{limit:1, restricting:'Retinue', restricted:'Elite Formation'},
	restriction2:{limit:2, restricting:'Retinue', restricted:'Support Formations'}
};

// CALLBACK
listLoaded();

