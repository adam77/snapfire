// MANDATORY UNITS
var transportTac =		{id:40, label:'Transport', upto:1, options:[
	{id:41, label:'3 Rhinos',					pts:0, optional:true},
	{id:42, label:'Razorback, 3 Rhinos',	pts:25, optional:true},
	{id:43, label:'2 Razorbacks, 2 Rhinos',pts:50, optional:true},
	{id:44, label:'3 Razorbacks, 2 Rhinos',pts:75, optional:true},
	{id:45, label:'4 Razorbacks, Rhino',	pts:100, optional:true},
	{id:46, label:'5 Razorbacks, Rhino',	pts:125, optional:true},
	{id:47, label:'6 Razorbacks',				pts:150, optional:true},
	{id:48, label:'Drop Pods',					pts:0, optional:true}
]};
var transportScout =		{id:50, label:'Transport', upto:1, options:[
	{id:51, label:'2 Rhinos',					pts:0, optional:true},
	{id:52, label:'Razorback, 2 Rhinos',	pts:25, optional:true},
	{id:53, label:'2 Razorbacks, Rhino',	pts:50, optional:true},
	{id:54, label:'3 Razorbacks, Rhino',	pts:75, optional:true},
	{id:55, label:'4 Razorbacks',				pts:100, optional:true},
	{id:56, label:'Drop Pods',					pts:0, optional:true}
]};
var transportDev =		{id:60, label:'Transport', upto:1, options:[
	{id:61, label:'2 Rhinos',					pts:0, optional:true},
	{id:62, label:'Razorback, 2 Rhinos',	pts:25, optional:true},
	{id:63, label:'2 Razorbacks, Rhino',	pts:50, optional:true},
	{id:64, label:'3 Razorbacks, Rhino',	pts:75, optional:true},
	{id:65, label:'4 Razorbacks',				pts:100, optional:true},
	{id:66, label:'Land Raider, Rhino',		pts:100, optional:true},
	{id:67, label:'Land Raider, Razorback, Rhino',	pts:125, optional:true},		
	{id:68, label:'Land Raider, 2 Razorbacks',		pts:150, optional:true},		
	{id:69, label:'2 Land Raiders',			pts:200, optional:true},
	{id:70, label:'3 Land Raiders',			pts:300, optional:true},
	{id:71, label:'4 Land Raiders',			pts:400, optional:true},
	{id:72, label:'Drop Pods',					pts:0, optional:true}
]};
var bikes = 			{id:13, label:'Bikes',	upto:5, minimum:5, options:[
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
	{id:27, label:'Supreme Commander',	pts:100,	general:true}
]};
var dreadnought = 		{id:30, label:'Dreadnought', 				pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 					pts:75, upto:1};
var landRaiders = 		{id:32, label:'Land Raider', 				pts:100, upto:4};
//var razorbacks =		{id:33, label:'Razorback',					pts:25, upto:6};
var sniper =			{id:34, label:'Sniper',						pts:25, upto:1};
var vindicator = 		{id:35, label:'Vindicator',					pts:75, upto:2};
//var devTransport =	{id:36,	label:'Transport',	upto:4, options:[
//	{id:37, label:'Razorback',					pts:25},	
//	{id:38, label:'Land Raider', 				pts:100}
//]};


// DETACHMENTS
var spacecraft = 		{id:508, label:'Spacecraft', upto:1};
var detachmentList =	{id:516, label:'DETACHMENTS', options:[
	{id:500, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]},
	{id:501, label:'Bike Detachment', 			pts:200, upgrades:[bikes, commander]},
	{id:502, label:'Devastator Detachment',		pts:250, units:'4 Devastators', upgrades:[commander, dreadnought, hunter, transportDev]},
	{id:503, label:'Land Raiders',				pts:400, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]},
	{id:504, label:'Land Speeders',				pts:200, upgrades:[speeders, commander]},
	{id:505, label:'Landing Craft',				pts:350, upgrades:[]},
	{id:506, label:'Predators',					pts:300, upgrades:[predators, commander, hunter, vindicator]},
	{id:507, label:'Scout Detachment',			pts:150, units:'4 Scouts', upgrades:[commander, sniper, transportScout]},
	{id:509, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}, 
	{id:510, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft},
	{id:511, label:'Tactical Detachment',		pts:300, units:'6 Tacticals', upgrades:[commander, dreadnought, hunter, vindicator, transportTac]},
	{id:512, label:'Terminator Detachment',		pts:325, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders]},
	{id:513, label:'Thunderhawk',				pts:200, upgrades:[]},
	{id:514, label:'Vindicators',				pts:300, units:'4 Vindicators', upgrades:[commander, hunter]},
	{id:515, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]}
]};

// NAVY
var navyList =			{id:519, label:'IMPERIAL NAVY', options:[
	{id:517, label:'Thunderbolt Fighters',	pts:150, units:'2 Fighters', upgrades:[], limited:true},
	{id:518, label:'Marauder Bombers',		pts:300, units:'2 Bombers', upgrades:[], limited:true}
]};

// TITANS
var titanList = 		{id:523, label:'TITAN LEGIONS', options:[
	{id:520, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true},
	{id:521, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true},
	{id:522, label:'Warhound Titan',		pts:250, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'EA Rulebook Oct09',
	notes:[],//'If Rhinos are chosen, then add the minimum number required to transport any units that cannot be assigned to Razorbacks or Land Raiders.'],
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();

