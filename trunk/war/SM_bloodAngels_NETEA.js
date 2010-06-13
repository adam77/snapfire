// OPTIONALS
var transport =			{id:10, label:'Transport', upto:1};
	var rhinos =			{id:11, label:'Rhinos',		pts:0, optional:true, group:transport};
	var pods =				{id:12, label:'Drop Pods',		pts:0, optional:true, group:transport};
	transport.options =		[rhinos, pods];
// UPGRADES
var assault =			{id:13, label:'2 Assault Units',					pts:75};
var attackBike =		{id:14, label:'Attack Bike', 						pts:0};
var commander =			{id:15, label:'Cmdr', upto:1};
	var captain = 			{id:16, label:'Captain',			pts:50, group:commander};
	var chaplain = 			{id:17, label:'Chaplain', 			pts:50, group:commander};
	var librarian = 		{id:18, label:'Librarian', 		pts:50, group:commander};
	var supreme = 			{id:19, label:'Supreme Commander',	pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, supreme];
var dreads = 			{id:22, label:'Dreadnoughts', upto:3};
	var dreadnought = 		{id:23, label:'Dreadnought (Vulcan)', 				pts:75, group:dreads};
	var furioso =	 		{id:24, label:'Dreadnought (Furioso)',				pts:75, group:dreads};
	dreads.options = 		[dreadnought, furioso];
var fastAttack = 		{id:25, label:'Fast Attack', upto:1};
	var landSpeeder =		{id:26, label:'Fast Attack (2 Land Speeders)',		pts:100, group:fastAttack};
	var bike =				{id:27, label:'Fast Attack (3 Bikes)',				pts:100, group:fastAttack};
	var bike =				{id:28, label:'Fast Attack (4 Attack Bikes)',		pts:100, group:fastAttack};
	fastAttack.options = 	[landSpeeder, bike];
var heavySupport = 		{id:29, label:'Heavy Support'};
	var vindicators = 		{id:30, label:'Heavy Support (Vindicator)',				pts:50, group:heavySupport, upto:3};
//	var destructors =		{id:31, label:'Heavy Support (2 Baal Destructors)',		pts:125, group:heavySupport};
//	var annihilators =		{id:32, label:'Heavy Support (2 Baal Annihilators)',	pts:150, group:heavySupport};
	var baals =				{id:33, label:'Heavy Support (Baal Predator)',			pts:75, group:heavySupport, upto:3};
	var landRaiders =		{id:34, label:'Heavy Support (Land Raider)',			pts:75, group:heavySupport};
//	var redeemers =			{id:35, label:'Heavy Support (2 Land Raider Redeemers)',pts:175, group:heavySupport};
	heavySupport.options =	[vindicators, destructors, annihilators, baals, landRaiders, redeemers];
var hunter = 			{id:36, label:'Baal Hunter', 							pts:75, upto:1};
var termRaiders = 		{id:37, label:'Land Raiders', mini:2, upto:1};
	var landRaiders2 =		{id:38, label:'Land Raiders',						pts:300, group:termRaiders};
//	var redeemers =			{id:, label:'Land Raider (Redeemers)',			pts:125, group:termRaiders};
	termRaiders.options = 	[landRaiders2];
var storm =				{id:39, label:'Stormraven',								pts:75, overhead:25};
var razorbacks =		{id:40, label:'Baal Razorback',							pts:25};
var speeders = 			{id:41, label:'Speeders', upto:5, minimum:5};
	var speeder =			{id:42, label:'Land Speeder',						pts:0, group:speeders, optional:true};
	var tornado =			{id:43, label:'Tornado',							pts:0, group:speeders, optional:true};
	var typhoon = 			{id:44, label:'Typhoon',							pts:25, group:speeders, optional:true};
	speeders.options = 		[speeder, tornado, typhoon];

// DETACHMENTS
var assaultD = 			{id:500, label:'Assault Detachment', 		pts:250, units:'6 Assault Units', upgrades:[commander, fastAttack, heavySupport, hunter, assault, dreads]};
var deathCompanyD =		{id:501, label:'Death Company',				pts:275, units:'Chaplain, 4 Death Company', defaults:[{unit:rhinos,count:1}], upgrades:[dreads, storms, rhinos], upto:1};
var deathAssaultD =		{id:520, label:'Death Company (Assault)',	pts:300, units:'Chaplain, 4 Assault Death Company', defaults:[], upgrades:[dreads, storms], upto:1};
var devastatorD = 		{id:502, label:'Devastator Detachment',		pts:250, units:'4 Devastators', defaults:[{unit:rhinos,count:1}], upgrades:[commander, heavySupport, hunter, razorbacks, dreads, rhinos]};
var landSpeederD =		{id:503, label:'Land Speeders',				pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{id:504, label:'Landing Craft',				pts:350, upgrades:[]};
var scoutD =			{id:505, label:'Scout Detachment',			pts:150, units:'4 Scouts', defaults:[{unit:rhinos,count:1}], upgrades:[commander, rhinos]};
var spacecraft = 		{id:506, label:'Spacecraft', upto:1};
var strikeCruiserD =	{id:507, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{id:508, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{id:509, label:'Tactical Detachment',		pts:300, units:'6 Tactical Units', defaults:[{unit:rhinos,count:1}], upgrades:[commander, assault, dreads, razorbacks, hunter, fastAttack, heavySupport, rhinos]};
var terminatorD =		{id:510, label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, dreads, termRaiders]};
var thunderhawkD =		{id:511, label:'Thunderhawk',				pts:200, upgrades:[]};
var whirlwindD =		{id:512, label:'Whirlwinds',				pts:300, units:'4 Baal Whirlwinds', upgrades:[hunter]};
var detachments =		{id:513, label:'DETACHMENTS', options:[assaultD, battleBargeD, deathCompanyD, devastatorD, landSpeederD, landingCraftD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, whirlwindD]};

// ALLIES
var thunderbolt = 		{id:514, label:'Thunderbolt Squadron',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolt Fighters'};
var marauder =			{id:515, label:'Marauder Squadron',		pts:250, upgrades:[], limited:true, units:'2 Marauder Bombers'};
var alliesList = 		{id:516, label:'ALLIES', options:[thunderbolt, marauder]};

// DETAILS
var listData =	{
	id:'Blood Angels', version:'NetEA v2.09',
	sublists:[detachments, alliesList]
};

// CALLBACK
listLoaded();
