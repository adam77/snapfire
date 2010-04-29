// OPTIONALS
var transport =			{id:10, label:'Transport', upto:1};
	var rhinos =			{id:11, label:'Rhinos',		pts:0, optional:true, group:transport};
	var pods =				{id:12, label:'Drop Pods',		pts:0, optional:true, group:transport};
	transport.options =		[rhinos, pods];
var bikes = 			{id:13, label:'Bikes',	upto:5, minimum:5};
	var attackBike =		{id:14, label:'Attack Bike', 	pts:0, optional:true, group:bikes};
	var bike =				{id:15, label:'Bike Unit',		pts:0, optional:true, group:bikes};
	bikes.options = [attackBike, bike];
var speeders =			{id:16, label:'Speeders', upto:5, minimum:5};
	var speeder =			{id:17, label:'Land Speeder',					pts:0, group:speeders, optional:true};
	var tornado =			{id:18, label:'Tornado',						pts:10, group:speeders, optional:true};
	var typhoon = 			{id:19, label:'Typhoon',						pts:25, group:speeders, optional:true};
	speeders.options =		[speeder, tornado, typhoon];
var predators =			{id:20, label:'Predators', upto:4, minimum:4};
	var predatorA =			{id:21, label:'Annihilator',		pts:0, group:predators, optional:true};
	var predatorD =			{id:22, label:'Destructor',		pts:0, group:predators, optional:true};
	predators.options = 	[predatorA, predatorD];
// UPGRADES
var commander =			{id:23, label:'Cmdr', upto:1};
	var captain = 			{id:24, label:'Captain',			pts:50, group:commander};
	var chaplain = 			{id:25, label:'Chaplain', 			pts:50, group:commander};
	var librarian = 		{id:26, label:'Librarian', 		pts:50, group:commander};
	var captainSupreme = 	{id:27, label:'Captain (Supreme Commander)',	pts:100, group:commander};
	var chaplainSupreme =	{id:28, label:'Chaplain (Supreme Commander)',	pts:100, group:commander};
	var librarianSupreme =	{id:29, label:'Librarian (Supreme Commander)', pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, captainSupreme, chaplainSupreme, librarianSupreme];
var dreadnought = 		{id:30, label:'Dreadnought', 						pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 							pts:75, upto:1};
var landRaiders = 		{id:32, label:'Land Raider', 						pts:100, upto:4};
var razorbacks =		{id:33, label:'Razorback',							pts:25};
var sniper =			{id:34, label:'Sniper',							pts:25, upto:1};
var vindicator = 		{id:35, label:'Vindicator',						pts:75, upto:2};

// DETACHMENTS
var assaultD = 			{id:500, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]};
var bikeD = 			{id:501, label:'Bike Detachment', 			pts:200, defaults:[{unit:bike,count:5}], upgrades:[commander]};
var devastatorD = 		{id:502, label:'Devastator Detachment',		pts:250, units:'4 Devastators', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders, rhinos]};
var landRaiderD = 		{id:503, label:'Land Raiders',				pts:400, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]};
var landSpeederD =		{id:504, label:'Land Speeders',				pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{id:505, label:'Landing Craft',				pts:350, upgrades:[]};
var predatorsD =		{id:506, label:'Predators',					pts:300, defaults:[{unit:predatorA,count:4}], upgrades:[commander, hunter, vindicator]};
var scoutD =			{id:507, label:'Scout Detachment',			pts:150, units:'4 Scouts', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, sniper, rhinos]};
var spacecraft = 		{id:508, label:'Spacecraft', upto:1};
var strikeCruiserD =	{id:509, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{id:510, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{id:511, label:'Tactical Detachment',		pts:300, units:'6 Tacticals', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, dreadnought, hunter, vindicator, rhinos]};
var terminatorD =		{id:512, label:'Terminator Detachment',		pts:325, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders]};
var thunderhawkD =		{id:513, label:'Thunderhawk',				pts:200, upgrades:[]};
var vindicatorD =		{id:514, label:'Vindicators',				pts:300, units:'4 Vindicators', upgrades:[commander, hunter]};
var whirlwindD =		{id:515, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]};
var detachmentList =	{id:516, label:'DETACHMENTS', options:[assaultD, battleBargeD, bikeD, devastatorD, landRaiderD, landSpeederD, landingCraftD, predatorsD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, vindicatorD, whirlwindD]};

// NAVY
var thunderbolt = 		{id:517, label:'Thunderbolt Fighters',	pts:150, units:'2 Fighters', upgrades:[], limited:true};
var marauder =			{id:518, label:'Marauder Bombers',		pts:300, units:'2 Bombers', upgrades:[], limited:true};
var navyList =			{id:519, label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{id:520, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{id:521, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{id:522, label:'Warhound Titan',		pts:250, upgrades:[], limited:true};
var titanList = 		{id:523, label:'TITAN LEGIONS', options:[warlord, reaver, warhound]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'EA Rulebook Oct09',
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();

