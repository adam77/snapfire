// OPTIONALS
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
	var predatorA =			{id:21, label:'Annihilator',	pts:0, group:predators, optional:true};
	var predatorD =			{id:22, label:'Destructor',		pts:0, group:predators, optional:true};
	predators.options = 	[predatorA, predatorD];
var spacecraft = 		{id:60, label:'Spacecraft', 	upto:1,		minimum:1};
	var lunar =				{id:61, label:'Strike Cruiser',	pts:0,	group:spacecraft,	optional:true};
	var emperor	=			{id:62, label:'Battle Barge',	pts:150,group:spacecraft,	optional:true};
	spacecraft.options =	[lunar, emperor];
var raiders = 		{id:50, label:'Land Raiders', minimum:4, upto:4};
	var raider =	{id:51, label:'Land Raider',						pts:0, group:raiders, optional:true};
	var raiderC =	{id:52, label:'Land Raider Crusader',				pts:0, group:raiders, optional:true};
	raiders.options = [raider, raiderC];
var tt = {id:53, label:'Transporters', minimum:1, upto:2};
	var transporter = 		{id:37, label:'Thunderhawk Transporter', 	pts:100, group:tt, optional:true};
	tt.options = [transporter];
// UPGRADES
var commander =			{id:23, label:'Cmdr', upto:1};
	var captain = 			{id:24, label:'Castellan',			pts:50, group:commander};
	var chaplain = 			{id:25, label:'Chaplain', 			pts:50, group:commander};
	var captainSupreme = 	{id:27, label:'Master',				pts:100, group:commander};
	commander.options = 	[captain, chaplain, captainSupreme];
var dreadnought = 		{id:30, label:'Dreadnought', 						pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 							pts:75, upto:1};
var landRaiders = 		{id:32, label:'Land Raiders', upto:4};
var raiderA =	{id:34, label:'Land Raider',						pts:75, group:landRaiders};
var raiderB =	{id:35, label:'Land Raider Crusader',				pts:75, group:landRaiders};
landRaiders.options = [raiderA, raiderB];
var razorbacks =		{id:36, label:'Razorback',					pts:25};
var vindicator = 		{id:38, label:'Vindicator',					pts:50, upto:2};
var neophyte =			{id:39, label:'Neophyte',					pts:25, upto:2};
var champ =				{id:40, label:'Emperor\'s Champion',		pts:75, upto:1};

// DETACHMENTS
var detachmentList =	{id:516, label:'DETACHMENTS', options:[
	{id:500, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]},
	{id:501, label:'Bike Detachment', 			pts:200, defaults:[{unit:bike,count:5}], upgrades:[commander]},
	{id:502, label:'Devastator Detachment',		pts:250, units:'4 Devastators, Transport', upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders, vindicator]},
	{id:503, label:'Land Raiders',				pts:350, defaults:[{unit:raider,count:4}], upgrades:[commander, hunter, vindicator]},
	{id:504, label:'Land Speeders',				pts:200, defaults:[{unit:speeder,count:5}], upgrades:[commander]},
	{id:505, label:'Landing Craft',				pts:350, upgrades:[]},
	{id:506, label:'Predators',					pts:275, defaults:[{unit:predatorA,count:4}], upgrades:[commander, hunter, vindicator]},
	{id:511, label:'Tactical Detachment',		pts:300, units:'6 Tacticals, Transport', upgrades:[commander, razorbacks, dreadnought, hunter, vindicator, raiderA, raiderB, neophyte, champ]},
	{id:512, label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, raiderA, raiderB, champ]},
	{id:513, label:'Thunderhawk',				pts:200, upgrades:[]},
	{id:514, label:'Thunderhawk Transporter',	pts:100, displayPts:200, defaults:[{unit:transporter,count:1}], upgrades:[transporter]},
	{id:515, label:'Vindicator Detachment',		pts:250, units:'4 Vindicators', upgrades:[commander, hunter, vindicator]}
]};
var spaceship = {id:508, label:'Spacecraft', upto:1, pts:200, defaults:[{unit:lunar, count:1}], upgrades:[] };

// DETAILS
var listData = {
	id:'Black Templars', version:'Epic UK v010409',
	sublists:[detachmentList],
	mandatoryFormations: [spaceship]};

// CALLBACK
listLoaded();

