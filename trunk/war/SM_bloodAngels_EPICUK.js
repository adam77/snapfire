// OPTIONALS
var transport =			{label:'Transport', upto:1};
	var rhinos =			{label:'Rhinos',		pts:0, optional:true, group:transport};
	var pods =				{label:'Drop Pods',		pts:0, optional:true, group:transport};
	transport.options =		[rhinos, pods];
var bikes = 			{label:'Bikes',	upto:5, minimum:5};
	var attackBike =		{label:'Attack Bike', 	pts:0, optional:true, group:bikes};
	var bike =				{label:'Bike Unit',		pts:0, optional:true, group:bikes};
	bikes.options = [attackBike, bike];
var speeders =			{label:'Speeders', upto:5, minimum:5};
	var speeder =			{label:'Land Speeder',					pts:0, group:speeders, optional:true};
	var tornado =			{label:'Tornado',						pts:10, group:speeders, optional:true};
	var typhoon = 			{label:'Typhoon',						pts:25, group:speeders, optional:true};
	speeders.options =		[speeder, tornado, typhoon];
var predators =			{label:'Predators', upto:4, minimum:4};
	var predatorA =			{label:'Annihilator',		pts:0, group:predators, optional:true};
	var predatorD =			{label:'Destructor',		pts:0, group:predators, optional:true};
	predators.options = 	[predatorA, predatorD];
// UPGRADES
var commander =			{label:'Cmdr', upto:1};
	var captain = 			{label:'Captain',			pts:50, group:commander};
	var chaplain = 			{label:'Chaplain', 			pts:50, group:commander};
	var librarian = 		{label:'Librarian', 		pts:50, group:commander};
	var captainSupreme = 	{label:'Captain (Supreme Commander)',	pts:100, group:commander};
	var chaplainSupreme =	{label:'Chaplain (Supreme Commander)',	pts:100, group:commander};
	var librarianSupreme =	{label:'Librarian (Supreme Commander)', pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, captainSupreme, chaplainSupreme, librarianSupreme];
var dreadnoughts =		{label:'Dreadnoughts', upto:2};
	var dreadnought = 		{label:'Dreadnought', 					pts:50, group:dreadnoughts};
	var furioso =			{label:'Dreadnought (Furioso)',			pts:50, group:dreadnoughts};
	dreadnoughts.options =	[dreadnought, furioso];
var hunter = 			{label:'Hunter', 							pts:75, upto:1};
var jumppacks =			{label:'Jump Packs',						pts:50, upto:1};
var landRaiders = 		{label:'Land Raider', 						pts:75, upto:4};
var razorbacks =		{label:'Razorback',							pts:25};
var sniper =			{label:'Sniper',							pts:25, upto:1};
var vindicator = 		{label:'Vindicator',						pts:50, upto:2};

// DETACHMENTS
var assaultD = 			{label:'Assault Detachment', 	pts:250, units:'6 Assault Units', upgrades:[commander, vindicator]};
var baalPredsD =		{label:'Baal Predators',		pts:300, units:'4 Baal Predators', upgrades:[commander]};
var bikeD = 			{label:'Bike Detachment', 		pts:200, defaults:[{unit:bike,count:5}], upgrades:[attackBike, commander]};
var deathCompanyD =		{label:'Death Company',			pts:300, units:'4 Death Company', defaults:[{unit:rhinos,count:1}], upgrades:[chaplain, jumppacks, rhinos]};
var landRaiderD = 		{label:'Land Raiders',			pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]};
var landSpeederD =		{label:'Land Speeders',			pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{label:'Landing Craft',			pts:350, upgrades:[]};
var predatorsD =		{label:'Predators',				pts:275, defaults:[{unit:predatorA,count:4}], upgrades:[commander, hunter, vindicator]};
var scoutD =			{label:'Scout Detachment',		pts:150, units:'4 Scouts', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, sniper, rhinos]};
var spacecraft = 		{label:'Spacecraft', upto:1};
var strikeCruiserD =	{label:'Strike Cruiser',		pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{label:'Battle Barge',			pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{label:'Tactical Detachment',	pts:300, units:'6 Tacticals', defaults:[{unit:rhinos,count:1}], upgrades:[commander, razorbacks, dreadnoughts, hunter, vindicator, rhinos]};
var terminatorD =		{label:'Terminator Detachment',	pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnoughts, landRaiders]};
var thunderhawkD =		{label:'Thunderhawk',			pts:200, upgrades:[]};
var vindicatorD =		{label:'Vindicators',			pts:250, units:'4 Vindicators', upgrades:[commander, hunter]};
var whirlwindD =		{label:'Whirlwinds',			pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]};
var detachmentList =	{label:'DETACHMENTS', options:[assaultD, battleBargeD, baalPredsD, bikeD, landRaiderD, landSpeederD, landingCraftD, predatorsD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, vindicatorD, whirlwindD]};

// NAVY
var thunderbolt = 		{label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'};
var marauder =			{label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Marauders'};
var navyList =			{label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{label:'Warhound Titan',		pts:275, upgrades:[], limited:true};
var warhoundPack =		{label:'Warhound Titan Pack',	pts:500, upgrades:[], limited:true, units:'2 Warhounds'};
var titanList = 		{label:'TITAN LEGIONS', options:[warlord, reaver, warhound, warhoundPack]};

// DETAILS
var listData = {
	id:'Blood Angels', version:'Epic UK v010409',
	sublists:[detachmentList, navyList, titanList],
	mandatoryFormations: [deathCompanyD]};
// CALLBACK
listLoaded();

