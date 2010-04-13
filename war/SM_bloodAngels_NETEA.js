// OPTIONALS
var transport =			{label:'Transport', upto:1};
	var rhinos =			{label:'Rhinos',		pts:0, optional:true, group:transport};
	var pods =				{label:'Drop Pods',		pts:0, optional:true, group:transport};
	transport.options =		[rhinos, pods];
// UPGRADES
var assault =			{label:'2 Assault Units',					pts:75};
var attackBike =		{label:'Attack Bike', 						pts:0};
var commander =			{label:'Cmdr', upto:1};
	var captain = 			{label:'Captain',			pts:50, group:commander};
	var chaplain = 			{label:'Chaplain', 			pts:50, group:commander};
	var librarian = 		{label:'Librarian', 		pts:50, group:commander};
	var captainSupreme = 	{label:'Captain (Supreme Commander)',	pts:100, group:commander};
	var chaplainSupreme =	{label:'Chaplain (Supreme Commander)',	pts:100, group:commander};
	var librarianSupreme =	{label:'Librarian (Supreme Commander)', pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, captainSupreme, chaplainSupreme, librarianSupreme];
var dreads = 			{label:'Dreadnoughts', upto:2};
	var dreadnought = 		{label:'Dreadnought (Vulcan)', 				pts:75, group:dreads};
	var furioso =	 		{label:'Dreadnought (Furioso)',				pts:75, group:dreads};
	dreads.options = 		[dreadnought, furioso];
var fastAttack = 		{label:'Fast Attack', upto:1};
	var landSpeeder =		{label:'Fast Attack (2 Land Speeders)',		pts:100, group:fastAttack};
	var bike =				{label:'Fast Attack (2 Bikes)',				pts:100, group:fastAttack};
	var bike =				{label:'Fast Attack (3 Attack Bikes)',		pts:100, group:fastAttack};
	fastAttack.options = 	[landSpeeder, bike];
var heavySupport = 		{label:'Heavy Support', upto:2};
	var vindicators = 		{label:'Heavy Support (2 Baal Vindicators)',	pts:100, group:heavySupport};
	var destructors =		{label:'Heavy Support (2 Baal Destructors)',	pts:125, group:heavySupport};
	var annihilators =		{label:'Heavy Support (2 Baal Annihilators)',	pts:150, group:heavySupport};
	var baals =				{label:'Heavy Support (2 Baal Predators)',		pts:150, group:heavySupport};
	var landRaiders =		{label:'Heavy Support (2 Land Raiders)',		pts:175, group:heavySupport};
	var redeemers =			{label:'Heavy Support (2 Land Raider Redeemers)',pts:175, group:heavySupport};
	heavySupport.options =	[vindicators, destructors, annihilators, baals, landRaiders, redeemers];
var hunter = 			{label:'Baal Hunter', 							pts:75, upto:1};
var termRaiders = 		{label:'Land Raiders', mini:2, upto:1};
	var landRaiders2 =		{label:'Land Raiders',						pts:300, group:termRaiders};
//	var redeemers =			{label:'Land Raider (Redeemers)',			pts:125, group:termRaiders};
	termRaiders.options = 	[landRaiders2];
var storm =				{label:'Land Speeder Storms',				pts:100, upto:1};
var razorbacks =		{label:'Baal Razorback',							pts:25};
var speeders = 			{label:'Speeders', upto:5, minimum:5};
	var speeder =			{label:'Land Speeder',						pts:0, group:speeders, optional:true};
	var tornado =			{label:'Tornado',							pts:0, group:speeders, optional:true};
	var typhoon = 			{label:'Typhoon',							pts:25, group:speeders, optional:true};
	speeders.options = 		[speeder, tornado, typhoon];

// DETACHMENTS
var assaultD = 			{label:'Assault Detachment', 		pts:250, units:'6 Assault Units', upgrades:[commander, fastAttack, heavySupport, hunter, assault, dreads]};
var deathCompanyD =		{label:'Death Company',				pts:300, units:'Chaplain, 4 Death Company', defaults:[{unit:rhinos,count:1}], upgrades:[dreads, rhinos], upto:1};
var devastatorD = 		{label:'Devastator Detachment',		pts:250, units:'4 Devastators', defaults:[{unit:rhinos,count:1}], upgrades:[commander, heavySupport, hunter, razorbacks, dreads, rhinos]};
var landSpeederD =		{label:'Land Speeders',				pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]};
var landingCraftD =		{label:'Landing Craft',				pts:350, upgrades:[]};
var scoutD =			{label:'Scout Detachment',			pts:150, units:'4 Scouts', defaults:[{unit:rhinos,count:1}], upgrades:[commander, rhinos]};
var spacecraft = 		{label:'Spacecraft', upto:1};
var strikeCruiserD =	{label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}; 
var battleBargeD =		{label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft}; 
var tacticalD =			{label:'Tactical Detachment',		pts:300, units:'6 Tactical Units', defaults:[{unit:rhinos,count:1}], upgrades:[commander, assault, dreads, razorbacks, hunter, fastAttack, heavySupport, rhinos]};
var terminatorD =		{label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, dreads, termRaiders]};
var thunderhawkD =		{label:'Thunderhawk',				pts:200, upgrades:[]};
var whirlwindD =		{label:'Whirlwinds',				pts:300, units:'4 Baal Whirlwinds', upgrades:[hunter]};
var detachments =		{label:'DETACHMENTS', options:[assaultD, battleBargeD, deathCompanyD, devastatorD, landSpeederD, landingCraftD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, whirlwindD]};

// ALLIES
var thunderbolt = 		{label:'Thunderbolt Squadron',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolt Fighters'};
var marauder =			{label:'Marauder Squadron',		pts:250, upgrades:[], limited:true, units:'2 Marauder Bombers'};
var alliesList = 		{label:'ALLIES', options:[thunderbolt, marauder]};

// DETAILS
var listData =	{
	id:'Blood Angels', version:'NetEA v2.08',
	sublists:[detachments, alliesList]
};

// CALLBACK
listLoaded();
