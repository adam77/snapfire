// UPGRADES
var bikes = 			{label:'Bikes',	upto:5, minimum:5};
	var attackBike =		{label:'Attack Bike', 	pts:0, optional:true, group:bikes};
	var bike =				{label:'Bike Unit',		pts:0, optional:true, group:bikes};
	bikes.options = [attackBike, bike];
var commander =			{label:'Cmdr', upto:1};
	var captain = 			{label:'Captain',			pts:50, group:commander};
	var chaplain = 			{label:'Chaplain', 			pts:50, group:commander};
	var librarian = 		{label:'Librarian', 		pts:50, group:commander};
	var captainSupreme = 	{label:'Captain (Supreme Commander)',	pts:100, group:commander};
	var chaplainSupreme =	{label:'Chaplain (Supreme Commander)',	pts:100, group:commander};
	var librarianSupreme =	{label:'Librarian (Supreme Commander)', pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, captainSupreme, chaplainSupreme, librarianSupreme];
var dreadnought = 		{label:'Dreadnought', 						pts:50, upto:2};
var hunter = 			{label:'Hunter', 							pts:75, upto:1};
var landRaiders = 		{label:'Land Raider', 						pts:100, upto:4};
var predators =			{label:'Predators', upto:4, minimum:4};
	var predatorA =			{label:'Annihilator',		pts:0, group:predators, optional:true};
	var predatorD =			{label:'Destructor',		pts:0, group:predators, optional:true};
	predators.options = 	[predatorA, predatorD];
var razorbacks =		{label:'Razorback',							pts:25};
var sniper =			{label:'Sniper',							pts:25, upto:1};
var speeders =			{label:'Speeders', upto:5, minimum:5};
	var speeder =			{label:'Landspeeder',		pts:0,	group:speeders, optional:true};
	var tornado =			{label:'Tornado',			pts:10, group:speeders, optional:true};
	var typhoon = 			{label:'Typhoon',			pts:25, group:speeders, optional:true};
	speeders.options =		[speeder, tornado, typhoon];
var vindicator = 		{label:'Vindicator',						pts:75, upto:2};

// DETACHMENTS
var assaultD = 			{label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]};
var bikeD = 			{label:'Bike Detachment', 			pts:200, defaults:[{unit:bike,count:5}], upgrades:[commander]};
var devastatorD = 		{label:'Devastator Detachment',		pts:250, units:'4 Devastators', upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders]};
var landRaiderD = 		{label:'Land Raiders',				pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]};
var landSpeederD =		{label:'Land Speeders',				pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{label:'Landing Craft',				pts:350, upgrades:[]};
var predatorsD =		{label:'Predators',					pts:275, defaults:[{unit:predatorA,count:4}], upgrades:[commander, hunter, vindicator]};
var scoutD =			{label:'Scout Detachment',			pts:150, units:'4 Scouts', upgrades:[commander, razorbacks, sniper]};
var spacecraft = 		{label:'Spacecraft', upto:1};
var strikeCruiserD =	{label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{label:'Tactical Detachment',		pts:300, units:'6 Tacticals', upgrades:[commander, razorbacks, dreadnought, hunter, vindicator]};
var terminatorD =		{label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders]};
var thunderhawkD =		{label:'Thunderhawk',				pts:200, upgrades:[]};
var vindicatorD =		{label:'Vindicators',				pts:275, units:'4 Vindicators', upgrades:[commander, hunter]};
var whirlwindD =		{label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]};
var detachmentList =	{label:'DETACHMENTS', options:[assaultD, battleBargeD, bikeD, devastatorD, landRaiderD, landSpeederD, landingCraftD, predatorsD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, vindicatorD, whirlwindD]};

// NAVY
var thunderbolt = 		{label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Mauraders'};
var navyList =			{label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{label:'Warhound Titan',		pts:275, upgrades:[], limited:true};
var warhoundPack =		{label:'Warhound Pack',			pts:500, upgrades:[], limited:true, units:'2 Warhounds'};
var titanList = 		{label:'TITAN LEGIONS', options:[warlord, reaver, warhound, warhoundPack]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'NetEA FINAL',
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();
