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
var speeders2 =			{id:16, label:'Speeders', upto:2, minimum:2, options:[
	{id:40, label:'Land Speeder',	pts:0, 	optional:true},
	{id:41, label:'Tornado',		pts:10, optional:true},
	{id:42, label:'Typhoon',		pts:25, optional:true}
]};
var predators =			{id:20, label:'Predators', upto:4, minimum:4, options:[
	{id:21, label:'Annihilator',	pts:0, optional:true},
	{id:22, label:'Destructor',		pts:0, optional:true}
]};

// UPGRADES
var commander =			{id:23, label:'Cmdr', upto:1, options:[
	{id:24, label:'Captain',			pts:50},
	{id:25, label:'Chaplain', 			pts:50},
	{id:26, label:'Librarian', 			pts:50},
	{id:27, label:'Supreme Commander',	pts:100, general:true}
]};
var dreadnought = 		{id:30, label:'Dreadnought', 			pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 				pts:75, upto:1};
var landRaiders = 		{id:32, label:'Land Raider', 			pts:75, upto:4};
var razorbacks =		{id:33, label:'Razorback',				pts:25};
var sniper =			{id:34, label:'Sniper',					pts:25, upto:1};
var vindicator = 		{id:35, label:'Vindicator',				pts:50, upto:2};

// DETACHMENTS
var spacecraft = 		{id:508, label:'Spacecraft', upto:1};
var detachmentList =	{id:516, label:'DETACHMENTS', options:[
	{id:500, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]},
	{id:501, label:'Deathwing',		 			pts:350, units:'4 Deathwing Terminators', upgrades:[commander, landRaiders, dreadnought, vindicator]},
	{id:502, label:'Devastator Detachment',		pts:300, units:'4 Devastators, Transport', upgrades:[commander, razorbacks, dreadnought, landRaiders, vindicator]},
	{id:503, label:'Land Raiders',				pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]},
	{id:504, label:'Land Speeders',				pts:200, upgrades:[speeders,commander]},
	{id:505, label:'Landing Craft',				pts:350, upgrades:[]},
	{id:506, label:'Predators',					pts:275, upgrades:[predators,commander, hunter, vindicator]},
	{id:507, label:'Scout Detachment',			pts:150, units:'4 Scouts, Transport', upgrades:[commander, razorbacks, sniper]},
	{id:509, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}, 
	{id:510, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft},
	{id:511, label:'Tactical Detachment',		pts:300, units:'6 Tacticals, Transport', upgrades:[commander, razorbacks, dreadnought, hunter, vindicator]},
	{id:512, label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders]},
	{id:513, label:'Thunderhawk',				pts:200, upgrades:[]},
	{id:514, label:'Vindicators',				pts:250, units:'4 Vindicators', upgrades:[commander, hunter]},
	{id:515, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]},
	{id:517, label:'Ravenwing',					pts:400, units:'4 Bikes, 2 Attack Bikes', upgrades:[speeders2,commander]}
]};


// DETAILS
var listData = {
	id:'Dark Angels', version:'Epic UK v010409',
	sublists:[detachmentList]};

// CALLBACK
listLoaded();

