// MANDATORY UNITS
var bikes = 			{id:13, label:'Bikes',	upto:5, minimum:5, options:[
	{id:15, label:'Bike Unit',		pts:0, optional:true},
	{id:14, label:'Attack Bike', 	pts:0, optional:true}
]};
var speeders =			{id:16, label:'Speeders', upto:5, minimum:5, options:[
	{id:17, label:'Land Speeder',	pts:0, 	optional:true},
	{id:18, label:'Tornado',		pts:10, optional:true},
	{id:19, label:'Typhoon',		pts:25, optional:true}
]};
var predators =			{id:20, label:'Predators', upto:4, minimum:4, options:[
	{id:21, label:'Annihilator',	pts:0, optional:true},
	{id:22, label:'Destructor',		pts:0, optional:true}
]};
var spacecraft = 		{id:60, label:'Spacecraft', upto:1,	minimum:1, options:[
	{id:61, label:'Strike Cruiser',	pts:0,	optional:true},
	{id:62, label:'Battle Barge',	pts:150,optional:true}
]};
var raiders = 		{id:50, label:'Land Raiders', minimum:4, upto:4, options:[
	{id:51, label:'Land Raider',				pts:0,	optional:true},
	{id:52, label:'Land Raider Crusader',		pts:0,	optional:true}
]};
var transporter = 		{id:37, label:'Thunderhawk Transporter', 	pts:100, optional:true, minimum:1, upto:2};

// UPGRADES
var commander =			{id:23, label:'Cmdr', upto:1, options:[
	{id:24, label:'Castellan',				pts:50},
	{id:25, label:'Chaplain', 				pts:50},
	{id:27, label:'Master',					pts:100}
]};
var dreadnought = 		{id:30, label:'Dreadnought',				pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 					pts:75, upto:1};
var landRaiders = 		{id:32, label:'Land Raiders', upto:4, options:[
	{id:34, label:'Land Raider',			pts:75},
	{id:35, label:'Land Raider Crusader',	pts:75}
]};
var razorbacks =		{id:36, label:'Razorback',					pts:25};
var vindicator = 		{id:38, label:'Vindicator',					pts:50, upto:2};
var neophyte =			{id:39, label:'Neophyte',					pts:25, upto:2};
var champ =				{id:40, label:'Emperor\'s Champion',		pts:75, upto:1};

// DETACHMENTS
var detachmentList =	{id:516, label:'DETACHMENTS', options:[
	{id:500, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]},
	{id:501, label:'Bike Detachment', 			pts:200, upgrades:[bikes,commander]},
	{id:502, label:'Devastator Detachment',		pts:250, units:'4 Devastators, Transport', upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders, vindicator]},
	{id:503, label:'Land Raiders',				pts:350, upgrades:[commander, hunter, vindicator,raiders]},
	{id:504, label:'Land Speeders',				pts:200, upgrades:[commander,speeders]},
	{id:505, label:'Landing Craft',				pts:350, upgrades:[]},
	{id:506, label:'Predators',					pts:275, upgrades:[commander, hunter, vindicator,predators]},
	{id:511, label:'Tactical Detachment',		pts:300, units:'6 Tacticals, Transport', upgrades:[commander, razorbacks, dreadnought, hunter, vindicator, landRaiders, neophyte, champ]},
	{id:512, label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders, champ]},
	{id:513, label:'Thunderhawk',				pts:200, upgrades:[]},
	{id:514, label:'Thunderhawk Transporter',	pts:100, displayPts:200, upgrades:[transporter]},
	{id:515, label:'Vindicator Detachment',		pts:250, units:'4 Vindicators', upgrades:[commander, hunter, vindicator]}
]};
var spaceship = {id:508, label:'Spacecraft', upto:1, pts:200, upgrades:[spacecraft] };

// DETAILS
var listData = {
	id:'Black Templars', version:'Epic UK v010409',
	sublists:[detachmentList],
	mandatoryFormations: [spaceship]};

// CALLBACK
listLoaded();

