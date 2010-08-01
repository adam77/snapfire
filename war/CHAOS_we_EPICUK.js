// OPTIONALS
var lords = 		{id:16, label:'Lord', upto:1, minimum:1};
	var lord = 		{id:17, label:'Chaos Lord', 	pts:0, optional:true, group:lords};
	var prince =	{id:19, label:'Daemon Prince', 	pts:50, optional:true, group:lords};
	var warlord =	{id:20, label:'Chaos Warlord', 	pts:50, optional:true, group:lords};
	var prince2 =	{id:21, label:'Daemon Prince (Supreme Commander)', pts:100, optional:true, group:lords};
	lords.options = [lord, warlord, prince, prince2];
var armour =		{id:26, label:'Vehicles', upto:8, minimum:4};
	var pred =		{id:27, label:'Chaos Predator', pts:50, optional:true, group:armour};
	var raider2 =	{id:28, label:'Chaos Land Raider', pts:75, optional:true, group:armour};
	var vindi2 =	{id:29, label:'Chaos Vindicator', pts:50, optional:true, group:armour};
	armour.options = [pred, raider2, vindi2];
var asses =		{id:36, label:'Assault Engines', upto:6, minimum:4};
	var ass1 =	{id:37, label:'Daemonic Assault Engine', pts:75, optional:true, group:asses};
	asses.options = [ass1];
var lobs =		{id:38, label:'Lords', upto:2, minimum:1};
	var lob =	{id:39, label:'Lord of Battles', pts:400, optional:true, group:lobs};
	lobs.options = [lob];
var defs =		{id:40, label:'Defilers', upto:7, minimum:4};
	var def1 =	{id:41, label:'Defiler', pts:65, optional:true, group:defs};
	defs.options = [def1];

// UPGRADES
var greater =			{id:50, label:'Greater Daemon', pts:75};
var lesser =			{id:51, label:'Lesser Daemon', pts:20};
var champion =			{id:52, label:'Chaos Champion', upto:1, pts:50};
var raiders =			{id:53, label:'Chaos Land Raider', upto:4, pts:75};
var vindi =				{id:54,	label:'Chaos Vindicator', upto:3, pts:35};
var pact = 				{id:56, label:'Daemonic Pact', upto:1, pts:25};
var defiler = 			{id:57, label:'World Eater Defiler', upto:3, pts:65};
var claws =				{id:58, label:'Dreadclaw Drop Pod', pts:5};
var icon =				{id:60, label:'Icon Bearer', upto:1, pts:50};
var rhino =				{id:62, label:'Rhino', pts:10};
var dread = 			{id:63, label:'Dreadnought', upto:3, pts:50};
var assengine =			{id:64, label:'Daemon Assault Engine', upto:2, pts:75};

// DETACHMENTS
var core =	{id:500, label:'CORE', options:[
{	id:			501,
	label:		'World Eater Retinue',
	restricting:true,
	pts:		325,
	units:		'8 Berserkers',
	defaults:	[{unit:lord,count:1}],
	upgrades:	[raiders,vindi,icon,champion,pact,dread,defiler,rhino,claws]
},
{	id:			551,
	label:		'Daemon Pool',
	pts:		0,
	upto:		1,
	upgrades:	[greater, lesser]
}
]};

var support =	{id:502, label:'SUPPORT', options:[
{	id:			503,
	label:		'World Eater Terminators',
	restricted:	true,
	pts:		400,
	units:		'4 Terminators',
	defaults:	[{unit:lord, count:1}],
	upgrades:	[champion,dread,raiders,pact,icon]
},
{	id:			504,
	label:		'Chaos Space Marines',
	restricted:	true,
	pts:		250,
	units:		'6 Chaos Marines, 3 Rhinos',
	upgrades:	[pact]
},		
{	id:			505,
	label:		'Daemonic Artillery',
	restricted:	true,
	pts:		200,
	units:		'4 Cannons of Khorne',
	upgrades:	[]
},
{	id:			506,
	label:		'Daemonic Assault Engine Pack',
	restricted:	true,
	pts:		-25,
	displayPts:	275,
	defaults:	[{unit:ass1,count:4}],
	upgrades:	[ass1,dread,defiler]
},
{	id:			507,
	label:		'Armoured Company',
	restricted:	true,
	pts:		0,
	displayPts:	200,
 	defaults:	[{unit:pred, count:4}],
	upgrades:	[pred, raider2, vindi2]
},
{	id:			508,
	label:		'World Eater Juggernaughts',
	restricted:	true,
	pts:		425,
	units:		'1 Chaos Lord, 8 Juggernaughts',
	upgrades:	[pact,icon]
},
{	id:			509,
	label:		'Bike Company',
	restricted:	true,
	pts:		425,
	units:		'8 Bikes',
	defaults:	[{unit:lord, count:1}],	
	upgrades:	[pact,icon]
},
{	id:			510,
	label:		'Defiler Assault Pack',
	restricted:	true,
	pts:		-10,
	displayPts:	250,
	defaults:	[{unit:def1,count:4}],
	upgrades:	[assengine,dread,def1]
}
]};

// NAVY
var navyList =	{id:535, label:'CHAOS NAVY', options:[
	{id:530, label:'Hellblade Flight',	pts:200, units:'3 Fighters', upgrades:[], limited:true},
	{id:531, label:'Helltalon Flight',	pts:250, units:'2 Bombers', upgrades:[], limited:true},
	{id:533, label:'Styx Class Cruiser',	pts:150, upto:1, upgrades:[], limited:true}
]};

// TITANS
var titanList = {id:523, label:'CHAOS TITANS', options:[
	{id:520, label:'Banelord Titan',		pts:800, upgrades:[], limited:true},
	{id:521, label:'Ravager Titan',			pts:650, upgrades:[], limited:true},
	{id:522, label:'Lord of Battles',		pts:0, displayPts:400, defaults:[{unit:lob,count:1}], upgrades:[lob], limited:true}
]};

// DETAILS
var listData = {
	id:'World Eaters', version:'Epic UK v090710',
	sublists:[core, support, titanList, navyList],
	restriction:{limit:2, restricting:'Retinue', restricted:'Support Formations'}
};

// CALLBACK
listLoaded();

