// UPGRADES
var transport =			{label:'Transport', upto:1};
	var rhinos =			{id:11, label:'Rhinos',			pts:0, optional:true, group:transport};
	var pods =				{id:12, label:'Drop Pods',		pts:0, optional:true, group:transport};
	transport.options =		[rhinos, pods];
var bikes = 			{label:'Bikes',	upto:5, minimum:5};
	var attackBike =		{id:13, label:'Attack Bike', 	pts:0, optional:true, group:bikes};
	var bike =				{id:14, label:'Bike Unit',		pts:0, optional:true, group:bikes};
	bikes.options = 		[attackBike, bike];
var commander =			{label:'Cmdr', upto:1};
	var captain = 			{id:15, label:'Captain',		pts:50, group:commander};
	var chaplain = 			{id:16, label:'Chaplain', 		pts:50, group:commander};
	var librarian = 		{id:17, label:'Librarian', 		pts:50, group:commander};
	var supreme = 			{id:18, label:'Supreme Commander',	pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, supreme];
var dreadnought = 		{id:21, label:'Dreadnought', 						pts:50, upto:2};
var hunter = 			{id:22, label:'Hunter', 							pts:75, upto:1};
var landRaiders = 		{id:23, label:'Land Raider', 						pts:85, upto:4};
var predators =			{label:'Predators', upto:4, minimum:4};
	var predatorA =			{id:24, label:'Annihilator',	pts:0, group:predators, optional:true};
	var predatorD =			{id:25, label:'Destructor',		pts:0, group:predators, optional:true};
	predators.options = 	[predatorA, predatorD];
var razorbacks =		{id:26, label:'Razorback',						pts:25};
var sniper =			{id:27, label:'Sniper',							pts:25, upto:1};
var speeders =			{label:'Speeders', upto:5, minimum:5};
	var speeder =			{id:28, label:'Landspeeder',		pts:0,	group:speeders, optional:true};
	var tornado =			{id:29, label:'Tornado',			pts:0, 	group:speeders, optional:true};
	var typhoon = 			{id:30, label:'Typhoon',			pts:25, group:speeders, optional:true};
	speeders.options =		[speeder, tornado, typhoon];
var vindicator = 		{id:31, label:'Vindicator',						pts:75, upto:2};

// DETACHMENTS
var assaultD = 			{id:532, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]};
var bikeD = 			{id:533, label:'Bike Detachment', 			pts:200, defaults:[{unit:bike,count:5}], upgrades:[commander]};
var devastatorD = 		{id:534, label:'Devastator Detachment',		pts:250, units:'4 Devastators', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders, rhinos]};
var landRaiderD = 		{id:535, label:'Land Raiders',				pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]};
var landSpeederD =		{id:536, label:'Land Speeders',				pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{id:537, label:'Landing Craft',				pts:350, upgrades:[]};
var predatorsD =		{id:538, label:'Predators',					pts:275, defaults:[{unit:predatorA,count:4}], upgrades:[commander, hunter, vindicator]};
var scoutD =			{id:539, label:'Scout Detachment',			pts:150, units:'4 Scouts', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, sniper, rhinos]};
var spacecraft = 		{id:540, label:'Spacecraft', upto:1};
var strikeCruiserD =	{id:541, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{id:542, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{id:543, label:'Tactical Detachment',		pts:300, units:'6 Tacticals', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, dreadnought, hunter, vindicator, rhinos]};
var terminatorD =		{id:544, label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders]};
var thunderhawkD =		{id:545, label:'Thunderhawk',				pts:200, upgrades:[]};
var vindicatorD =		{id:546, label:'Vindicators',				pts:275, units:'4 Vindicators', upgrades:[commander, hunter]};
var whirlwindD =		{id:547, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]};
var detachmentList =	{id:548, label:'DETACHMENTS', options:[assaultD, battleBargeD, bikeD, devastatorD, landRaiderD, landSpeederD, landingCraftD, predatorsD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, vindicatorD, whirlwindD]};

// NAVY
var thunderbolt = 		{id:549, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{id:550, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Mauraders'};
var navyList =			{id:551, label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{id:552, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{id:553, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{id:554, label:'Warhound Titan',		pts:275, upgrades:[], limited:true};
var warhoundPack =		{id:555, label:'Warhound Pack',			pts:500, upgrades:[], limited:true, units:'2 Warhounds'};
var titanList = 		{id:556, label:'TITAN LEGIONS', options:[warlord, reaver, warhound, warhoundPack]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'NetEA Compendium 1.1',
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();
