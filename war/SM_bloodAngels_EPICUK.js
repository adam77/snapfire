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
	var supreme = 			{id:27, label:'Supreme Commander',	pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, supreme];
var dreadnoughts =		{id:30, label:'Dreadnoughts', upto:2};
	var dreadnought = 		{id:31, label:'Dreadnought', 					pts:50, group:dreadnoughts};
	var furioso =			{id:32, label:'Dreadnought (Furioso)',			pts:50, group:dreadnoughts};
	dreadnoughts.options =	[dreadnought, furioso];
var hunter = 			{id:33, label:'Hunter', 							pts:75, upto:1};
var jumppacks =			{id:34, label:'Jump Packs',						pts:50, upto:1};
var landRaiders = 		{id:35, label:'Land Raider', 						pts:75, upto:4};
var razorbacks =		{id:36, label:'Razorback',							pts:25};
var sniper =			{id:37, label:'Sniper',							pts:25, upto:1};
var vindicator = 		{id:38, label:'Vindicator',						pts:50, upto:2};

// DETACHMENTS
var assaultD = 			{id:500, label:'Assault Detachment', 	pts:250, units:'6 Assault Units', upgrades:[commander, vindicator]};
var baalPredsD =		{id:501, label:'Baal Predators',		pts:300, units:'4 Baal Predators', upgrades:[commander]};
var bikeD = 			{id:502, label:'Bike Detachment', 		pts:200, defaults:[{unit:bike,count:5}], upgrades:[attackBike, commander]};
var deathCompanyD =		{id:503, label:'Death Company',			pts:300, units:'4 Death Company, Transport', upgrades:[chaplain, jumppacks]};
var landRaiderD = 		{id:504, label:'Land Raiders',			pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]};
var landSpeederD =		{id:505, label:'Land Speeders',			pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{id:506, label:'Landing Craft',			pts:350, upgrades:[]};
var predatorsD =		{id:507, label:'Predators',				pts:275, defaults:[{unit:predatorA,count:4}], upgrades:[commander, hunter, vindicator]};
var scoutD =			{id:508, label:'Scout Detachment',		pts:150, units:'4 Scouts, Transport', upgrades:[commander, razorbacks, sniper]};
var spacecraft = 		{id:509, label:'Spacecraft', upto:1};
var strikeCruiserD =	{id:510, label:'Strike Cruiser',		pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{id:511, label:'Battle Barge',			pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{id:512, label:'Tactical Detachment',	pts:300, units:'6 Tacticals, Transport', upgrades:[commander, razorbacks, dreadnoughts, hunter, vindicator]};
var terminatorD =		{id:513, label:'Terminator Detachment',	pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnoughts, landRaiders]};
var thunderhawkD =		{id:514, label:'Thunderhawk',			pts:200, upgrades:[]};
var vindicatorD =		{id:515, label:'Vindicators',			pts:250, units:'4 Vindicators', upgrades:[commander, hunter]};
var whirlwindD =		{id:516, label:'Whirlwinds',			pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]};
var detachmentList =	{id:517, label:'DETACHMENTS', options:[assaultD, battleBargeD, baalPredsD, bikeD, landRaiderD, landSpeederD, landingCraftD, predatorsD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, vindicatorD, whirlwindD]};

// NAVY
var thunderbolt = 		{id:518, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{id:519, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'};
var navyList =			{id:520, label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{id:521, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{id:522, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{id:523, label:'Warhound Titan',		pts:275, upgrades:[], limited:true};
var warhoundPack =		{id:524, label:'Warhound Titan Pack',	pts:500, upgrades:[], limited:true, units:'2 Warhounds'};
var titanList = 		{id:525, label:'TITAN LEGIONS', options:[warlord, reaver, warhound, warhoundPack]};

// DETAILS
var listData = {
	id:'Blood Angels', version:'Epic UK v010409',
	sublists:[detachmentList, navyList, titanList],
	mandatoryFormations: [deathCompanyD]};
// CALLBACK
listLoaded();

