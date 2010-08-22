// MANDATORY UNITS
var transport =			{id:10, label:'Transport', upto:1, options:[
	{id:11, label:'Rhinos',			pts:0, optional:true},
	{id:12, label:'Drop Pods',		pts:0, optional:true}
]};
var bikes = 			{id:13, label:'Bikes',	upto:8, minimum:8, options:[
	{id:15, label:'Bike Unit',		pts:0, optional:true},
	{id:14, label:'Attack Bike', 	pts:0, optional:true}
]};
var speeders =			{id:16, label:'Speeders', upto:5, minimum:5, options:[
	{id:17, label:'Land Speeder',	pts:0, optional:true},
	{id:18, label:'Tornado',		pts:10, optional:true},
	{id:19, label:'Typhoon',		pts:25, optional:true}
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
	{id:27, label:'Supreme Commander',	pts:100}
]};
var dreadnought = 		{id:30, label:'Dreadnought', 				pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 					pts:75, upto:1};
var landRaiders = 		{id:32, label:'Land Raider', 				pts:100, upto:4};
var razorbacks =		{id:33, label:'Razorback',					pts:25};
var sniper =			{id:34, label:'Sniper',						pts:25, upto:1};
var vindicator = 		{id:35, label:'Vindicator',					pts:75, upto:2};

// DETACHMENTS
var spacecraft = 		{id:508, label:'Spacecraft', upto:1};
var detachmentList =	{id:516, label:'DETACHMENTS', options:[
	{id:500, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander]},
	{id:501, label:'Bike Detachment', 			pts:400, upgrades:[commander, bikes]},
	{id:504, label:'Land Speeders',				pts:200, upgrades:[commander, speeders]},
	{id:505, label:'Landing Craft',				pts:350, upgrades:[]},
	{id:506, label:'Predators',					pts:300, upgrades:[commander, hunter, vindicator,predators]},
	{id:507, label:'Scout Detachment',			pts:150, units:'4 Scouts', upgrades:[commander, razorbacks, sniper, transport]},
	{id:509, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft},
	{id:510, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft}, 
	{id:511, label:'Tactical Detachment',		pts:300, units:'6 Tacticals', upgrades:[commander, razorbacks, transport]},
	{id:512, label:'Terminator Detachment',		pts:675, units:'4 Terminators', upgrades:[commander]},
	{id:513, label:'Thunderhawk',				pts:200, upgrades:[]},
	{id:515, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter, vindicator]}
]};

// NAVY
var navyList =			{id:519, label:'IMPERIAL NAVY', options:[
	{id:517, label:'Thunderbolt Fighters',	pts:150, units:'2 Fighters', upgrades:[], limited:true},
	{id:518, label:'Marauder Bombers',		pts:300, units:'2 Bombers', upgrades:[], limited:true}
]};

// TITANS
var titanList = 		{id:523, label:'TITAN LEGIONS', options:[
	{id:522, label:'Warhound Titan',		pts:250, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'White Scars', version:'Fanatic Magazine 3 + 2008 Errata',
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();

