// MANDATORY UNITS
var raptors = 		{id:11, label:'Raptor', pts:35, optional:true, upto:8, minimum:4};
var terms =			{id:13, label:'Chaos Terminator', pts:65, optional:true, upto:6, minimum:4};
var lords = 		{id:14, label:'Lord', upto:1, minimum:1, options:[
	{id:15, label:'Chaos Lord', pts:0, optional:true},
	{id:16, label:'Sorcerer Lord', pts:0, optional:true},
	{id:17, label:'Daemon Prince', pts:50, optional:true},
	{id:18, label:'Chaos Warlord', pts:0, optional:true}
]};
var armour =		{id:19, label:'Vehicles', upto:8, minimum:4, options:[
	{id:20, label:'Chaos Predator', pts:50, optional:true},
	{id:21, label:'Chaos Land Raider', pts:75, optional:true}
]};
var assault =		{id:22, label:'Vehicles', upto:3, minimum:1, options:[
	{id:23, label:'Decimator', pts:225, optional:true},
	{id:24, label:'Death Wheel', pts:275, optional:true}
]};

// UPGRADES
var pact = 			{id:40, label:'Daemonic Pact', upto:1, pts:25};
var dread = 		{id:41, label:'Dreadnoughts', upto:3, pts:50};
var defiler = 		{id:42, label:'Defiler', upto:3, pts:75};
var raiders =		{id:43, label:'Chaos Land Raider', upto:4, pts:75};
var claws =			{id:44, label:'Dreadclaw Drop Pod', pts:5};
var obliterator =	{id:45, label:'Obliterator', upto:3, pts:75};
var champion =		{id:46, label:'Chaos Champion', upto:1, pts:50};
var icon =			{id:47, label:'Icon Bearer', upto:1, pts:50};
var rhino =			{id:48, label:'Rhino', pts:10};
var havoc =			{id:49, label:'4 Havocs', upto:1, pts:150};
var cultmarine =	{id:50, label:'4 Cult Marines', upto:1, pts:150};
var greater =		{id:51, label:'Greater Daemon', pts:100};
var lesser =		{id:52, label:'Lesser Daemon', pts:20};

// DETACHMENTS
var detachmentList =	{id:500, label:'DETACHMENTS', options:[
	{id:501, label:'Armoured Company',			pts:0, displayPts:200, upgrades:[armour,defiler]},
	{id:502, label:'Assault Company',			pts:0, displayPts:225, upto:2, upgrades:[assault,defiler]},
	{id:503, label:'Bike Company',				pts:300, units:'8 Chaos Space Marines Bikes', upgrades:[lords,icon,pact]},
	{id:504, label:'Black Legion Retinue',		pts:275, units:'8 Chaos Space Marines', upgrades:[lords,rhino,havoc, cultmarine, dread, defiler, raiders, claws, obliterator, pact, champion, icon]},
	{id:505, label:'Chaos Terminators',			pts:0, upto:2, displayPts:260, upgrades:[lords,terms,dread, defiler, raiders, claws, obliterator, pact, champion, icon]},
	{id:506, label:'Daemon Pool',				pts:0, upto:1, upgrades:[greater, lesser]},
	{id:507, label:'Forlorn Hope Retinue',		pts:125, units:'4 Chaos Space Marines', upto:1, upgrades:[rhino,dread,pact]},
	{id:508, label:'Raptor Cult', 				pts:0, upto:1, displayPts:140, upgrades:[lords,raptors,pact]}
]};

// NAVY
var spacecraft = 		{id:532, label:'Spacecraft', upto:1};
var navyList =			{id:535, label:'CHAOS NAVY', options:[
	{id:530, label:'Swiftdeath Interceptor',	pts:200, units:'3 Interceptors', upgrades:[], limited:true},
	{id:531, label:'Helltalon Fighter-bomber',	pts:300, units:'2 Bombers', upgrades:[], limited:true},
	{id:533, label:'Devastation Class Cruiser',	pts:150, upgrades:[], group:spacecraft, limited:true}, 
	{id:534, label:'Despoiler Class Battleship',pts:250, upgrades:[], group:spacecraft, limited:true}
]};

// TITANS
var titanList = 		{id:523, label:'WAR ENGINES', options:[
	{id:520, label:'Banelord Titan',	pts:800, upgrades:[], limited:true},
	{id:521, label:'Ravager Titan',		pts:650, upgrades:[], limited:true},
	{id:522, label:'Feral Titan',		pts:300, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Black Legion', version:'Specialist Games Forum v1.0',
	sublists:[detachmentList, titanList, navyList]};

// CALLBACK
listLoaded();

