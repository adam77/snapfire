// UPGRADES
var deathUnit =			{label:'Additional Unit',					pts:75};
var assault =			{label:'Assault',							pts:75};
var attackBike =		{label:'Attack Bike', 						pts:0};
var battleBarge =		{label:'Battle Barge',						pts:150, upto:1};
var commander =			{label:'Cmdr', upto:1};
	var captain = 			{label:'Captain',			pts:50, group:commander};
	var chaplain = 			{label:'Chaplain', 			pts:50, group:commander};
	var librarian = 		{label:'Librarian', 		pts:50, group:commander};
	var captainSupreme = 	{label:'Captain (Supreme Commander)',	pts:100, group:commander};
	var chaplainSupreme =	{label:'Chaplain (Supreme Commander)',	pts:100, group:commander};
	var librarianSupreme =	{label:'Librarian (Supreme Commander)', pts:100, group:commander};
	commander.options = 	[captain, chaplain, librarian, captainSupreme, chaplainSupreme, librarianSupreme];
var dreads = 			{label:'Dreadnoughts', upto:2};
	var dreadnought = 		{label:'Dreadnought', 						pts:50, group:dreads};
	var furioso =	 		{label:'Dreadnought (Furioso)',				pts:50, group:dreads};
	dreads.options = 		[dreadnought, furioso];
var fastAttack = 		{label:'Fast Attack', upto:2};
	var landSpeeder =		{label:'Fast Attack (Land Speeder)',		pts:50, group:fastAttack};
	var bike =				{label:'Fast Attack (Bike)',				pts:50, group:fastAttack};
	fastAttack.options = 	[landSpeeder, bike];
var heavySupport = 		{label:'Heavy Support', upto:2};
	var vindicators = 		{label:'Heavy Support (Vindicators)',		pts:100, group:heavySupport};
	var destructors =		{label:'Heavy Support (Predator Destructors)',	pts:125, group:heavySupport};
	var annihilators =		{label:'Heavy Support (Predator Annihilators)',	pts:150, group:heavySupport};
	var baals =				{label:'Heavy Support (Baal Predators)',	pts:175, group:heavySupport};
	var landRaiders =		{label:'Heavy Support (Land Raiders)',		pts:175, group:heavySupport};
	heavySupport.options =	[vindicators, destructors, annihilators, baals, landRaiders];
var hunter = 			{label:'Hunter', 							pts:75, upto:1};
var termRaiders = 		{label:'Land Raiders', mini:2, upto:2};
	var landRaiders2 =		{label:'Land Raiders',						pts:125, group:termRaiders};
	var redeemers =			{label:'Land Raider (Redeemers)',			pts:125, group:termRaiders};
	var crusader =			{label:'Land Raider (Crusader)',			pts:50, group:termRaiders};
	termRaiders.options = 	[landRaiders2, redeemers, crusader];
var storm =				{label:'Land Speeder Storms',				pts:100};
var razorbacks =		{label:'Razorback',							pts:25};
var sniper =			{label:'Snipers',							pts:75};
var speeders = 			{label:'Speeders'};
	var tornado =			{label:'Tornado',							pts:0, group:speeders};
	var typhoon = 			{label:'Typhoon',							pts:25, group:speeders};
	speeders.options = 		[tornado, typhoon];

// DETACHMENTS
var assaultD = 			{label:'Assault Detachment', 		pts:275, upgrades:[commander, fastAttack, heavySupport, hunter, assault, dreads]};
var bikeD = 			{label:'Bike Detachment', 			pts:200, upgrades:[commander, fastAttack, attackBike]};
var deathCompanyD =		{label:'Death Company',	pts:100, upgrades:[deathUnit]};
var devastatorD = 		{label:'Devastator Detachment',	pts:250, upgrades:[commander, heavySupport, hunter, razorbacks, dreads]};
var landSpeederD =		{label:'Land Speeders',	pts:200, upgrades:[commander, tornado, typhoon]};
var landingCraftD =		{label:'Landing Craft',	pts:375, upgrades:[]};
var scoutD =			{label:'Scout Detachment',			pts:150, upgrades:[storm, sniper]};
var strikeCruiserD =	{label:'Strike Cruiser',pts:200, upgrades:[battleBarge], upto:1}; 
var tacticalD =			{label:'Tactical Detachment',		pts:300, upgrades:[commander, assault, razorbacks, dreads, hunter, fastAttack, heavySupport]};
var terminatorD =		{label:'Terminator Detachment',	pts:325, upgrades:[commander, dreads, termRaiders]};
var thunderhawkD =		{label:'Thunderhawk',	pts:200, upgrades:[]};
var whirlwindD =		{label:'Whirlwinds',		pts:300, upgrades:[hunter]};
var detachments =		{label:'DETACHMENTS', options:[assaultD, bikeD, devastatorD, landSpeederD, landingCraftD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, whirlwindD]};

// ALLIES
var thunderbolt = 		{label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true};
var marauder =			{label:'Marauder Bombers',		pts:250, upgrades:[], limited:true};
var warlord =			{label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{label:'Warhound',				pts:275, upgrades:[], limited:true};
var warhounds =			{label:'Warhound Pack',			pts:500, upgrades:[], limited:true};
var alliesList = 		{label:'ALLIES', options:[thunderbolt, marauder, warlord, reaver, warhound, warhounds]};

// DETAILS
var listData =	{
	id:'Blood Angels', version:'NetEA v2.04',
	sublists:[detachments, alliesList],
	mandatoryFormations: [deathCompanyD]};

// CALLBACK
listLoaded();
