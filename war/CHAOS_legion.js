// OPTIONALS
var raptors = 		{id:10, label:'Raptors', upto:8, minimum:4};
	var raptor = 	{id:11, label:'Raptor', pts:35, optional:true, group:raptors};
	raptors.options = [raptor];
var terms = 		{id:12, label:'Terminators', upto:6, minimum:4};
	var term = 		{id:13, label:'Chaos Terminator', pts:65, optional:true, group:terms};
	terms.options = [term];
var lords = 		{id:14, label:'Lord', upto:1, minimum:1};
	var lord = 		{id:15, label:'Chaos Lord', pts:0, optional:true, group:lords};
	var sorcerer =	{id:16, label:'Sorcerer Lord', pts:0, optional:true, group:lords};
	var prince =	{id:17, label:'Daemon Prince', pts:50, optional:true, group:lords};
	var warlord =	{id:18, label:'Chaos Warlord', pts:0, optional:true, group:lords};
	lords.options = [warlord, lord, sorcerer, prince];
var armour =		{id:19, label:'Vehicles', upto:8, minimum:4};
	var pred =		{id:20, label:'Chaos Predator', pts:50, optional:true, group:armour};
	var raider2 =	{id:21, label:'Chaos Land Raider', pts:75, optional:true, group:armour};
	armour.options = [pred, raider2];
var assault =		{id:22, label:'Vehicles', upto:3, minimum:1};
	var decimator2 ={id:23, label:'Decimator', pts:225, optional:true, group:assault};
	var wheel =		{id:24, label:'Death Wheel', pts:275, optional:true, group:assault};
	assault.options = [decimator2, wheel];

// UPGRADES
var pact = 				{id:40, label:'Daemonic Pact', upto:1, pts:25};
var dread = 			{id:41, label:'Dreadnoughts', upto:3, pts:50};
var defiler = 			{id:42, label:'Defiler', upto:3, pts:75};
var raiders =			{id:43, label:'Chaos Land Raider', upto:4, pts:75};
var claws =				{id:44, label:'Dreadclaw Drop Pod', pts:5};
var obliterator =		{id:45, label:'Obliterator', upto:3, pts:75};
var champion =			{id:46, label:'Chaos Champion', upto:1, pts:50};
var icon =				{id:47, label:'Icon Bearer', upto:1, pts:50};
var rhino =				{id:48, label:'Rhino', pts:10};
var havoc =				{id:49, label:'4 Havocs', upto:1, pts:150};
var cultmarine =		{id:50, label:'4 Cult Marines', upto:1, pts:150};
var greater =			{id:51, label:'Greater Daemon', pts:100};
var lesser =			{id:52, label:'Lesser Daemon', pts:20};

// DETACHMENTS
var detachmentList =	{id:500, label:'DETACHMENTS', options:[
	{id:506, label:'Armoured Company',			pts:0, displayPts:200, defaults:[{unit:pred, count:4}], upgrades:[pred, raider2, defiler]},
	{id:507, label:'Assault Company',			pts:0, displayPts:225, upto:2, defaults:[{unit:decimator2, count:1}], upgrades:[decimator2, wheel, defiler]},
	{id:505, label:'Bike Company',				pts:300, units:'8 Chaos Space Marines Bikes', defaults:[{unit:lord, count:1}], upgrades:[icon, pact]},
	{id:503, label:'Black Legion Retinue',		pts:275, units:'8 Chaos Space Marines', defaults:[{unit:lord, count:1}], upgrades:[rhino, havoc, cultmarine, dread, defiler, raiders, claws, obliterator, pact, champion, icon]},
	{id:502, label:'Chaos Terminators',			pts:0, upto:2, displayPts:260, defaults:[{unit:lord, count:1}, {unit:term,count:4}], upgrades:[term, dread, defiler, raiders, claws, obliterator, pact, champion, icon]},
	{id:508, label:'Daemon Pool',				pts:0, upto:1, upgrades:[greater, lesser]},
	{id:504, label:'Forlorn Hope Retinue',		pts:125, units:'4 Chaos Space Marines', upto:1, upgrades:[rhino, dread, pact]},
	{id:501, label:'Raptor Cult', 				pts:0, upto:1, displayPts:140, defaults:[{unit:lord, count:1}, {unit:raptor,count:4}], upgrades:[raptor, pact]},
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

