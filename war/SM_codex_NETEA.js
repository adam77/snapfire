// UPGRADES
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
var dreadnought = 		{label:'Dreadnought', 						pts:50, upto:2};
var hunter = 			{label:'Hunter', 							pts:75, upto:1};
var landRaiders = 		{label:'Land Raider', 						pts:100, upto:4};
var razorbacks =		{label:'Razorback',							pts:25};
var sniper =			{label:'Sniper',							pts:25, upto:1};
var speeders =			{label:'Speeders'};
	var tornado =			{label:'Tornado',							pts:10, group:speeders};
	var typhoon = 			{label:'Typhoon',							pts:25, group:speeders};
	speeders.options =		[tornado, typhoon];
var vindicator = 		{label:'Vindicator',						pts:75, upto:2};

// DETACHMENTS
var assaultD = 			{label:'Assault Detachment', 		pts:175, upgrades:[commander, vindicator]};
var bikeD = 			{label:'Bike Detachment', 			pts:200, upgrades:[attackBike, commander]};
var devastatorD = 		{label:'Devastator Detachment',	pts:250, upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders]};
var landRaiderD = 		{label:'Land Raiders',	pts:350, upgrades:[commander, hunter, vindicator]};
var landSpeederD =		{label:'Land Speeders',	pts:200, upgrades:[commander, speeders]};
var landingCraftD =		{label:'Landing Craft',	pts:350, upgrades:[]};
var predatorsD =		{label:'Predators',		pts:275, upgrades:[commander, hunter, vindicator]};
var scoutD =			{label:'Scout Detachment',			pts:150, upgrades:[commander, razorbacks, sniper]};
var strikeCruiserD =	{label:'Strike Cruiser',pts:200, upgrades:[battleBarge]}; 
var tacticalD =			{label:'Tactical Detachment',		pts:300, upgrades:[commander, razorbacks, dreadnought, hunter, vindicator]};
var terminatorD =		{label:'Terminator Detachment',	pts:350, upgrades:[commander, vindicator, dreadnought, landRaiders]};
var thunderhawkD =		{label:'Thunderhawk',	pts:200, upgrades:[]};
var vindicatorD =		{label:'Vindicators',	pts:275, upgrades:[commander, hunter]};
var whirlwindD =		{label:'Whirlwinds',		pts:300, upgrades:[commander, hunter]};
var detachmentList =	{label:'DETACHMENTS', options:[assaultD, bikeD, devastatorD, landRaiderD, landSpeederD, landingCraftD, predatorsD, scoutD, strikeCruiserD, tacticalD, terminatorD, thunderhawkD, vindicatorD, whirlwindD]};

// NAVY
var thunderbolt = 		{label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true};
var marauder =			{label:'Marauder Bombers',		pts:250, upgrades:[], limited:true};
var navyList =			{label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{label:'Warhound Titan',		pts:275, upgrades:[], limited:true};
var warhoundPack =		{label:'Warhound Pack',			pts:500, upgrades:[], limited:true};
var titanList = 		{label:'TITAN LEGIONS', options:[warlord, reaver, warhound, warhoundPack]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'NetEA FINAL',
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();
