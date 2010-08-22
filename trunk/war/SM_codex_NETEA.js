// MANDATORY UNITS
var transport =			{label:'Transport', upto:1, options:[
	{id:11, label:'Rhinos',			pts:0, optional:true},
	{id:12, label:'Drop Pods',		pts:0, optional:true}
]};
var bikes = 			{label:'Bikes',	upto:5, minimum:5, options:[
	{id:13, label:'Attack Bike', 	pts:0, optional:true},
	{id:14, label:'Bike Unit',		pts:0, optional:true}
]};
var predators =			{label:'Predators', upto:4, minimum:4, options:[
	{id:24, label:'Annihilator',	pts:0, optional:true},
	{id:25, label:'Destructor',		pts:0, optional:true}
]};
var speeders =			{label:'Speeders', upto:5, minimum:5, options:[
	{id:28, label:'Landspeeder',	pts:0,	optional:true},
	{id:29, label:'Tornado',		pts:0, 	optional:true},
	{id:30, label:'Typhoon',		pts:25, optional:true}
]};

// UPGRADES
var commander =			{label:'Cmdr', upto:1, options:[
	{id:15, label:'Captain',		pts:50},
	{id:16, label:'Chaplain', 		pts:50},
	{id:17, label:'Librarian', 		pts:50},
	{id:18, label:'Supreme Commander',	pts:100}
]};
var dreadnought = 		{id:21, label:'Dreadnought', 					pts:50, upto:2};
var hunter = 			{id:22, label:'Hunter', 						pts:75, upto:1};
var landRaiders = 		{id:23, label:'Land Raider', 					pts:85, upto:4};
var razorbacks =		{id:26, label:'Razorback',						pts:25};
var sniper =			{id:27, label:'Sniper',							pts:25, upto:1};
var vindicator = 		{id:31, label:'Vindicator',						pts:75, upto:2};

// DETACHMENTS
var spacecraft =	{id:540, label:'Spacecraft', upto:1};
var detachmentList =	{id:548, label:'DETACHMENTS', options:[
	{id:532, label:'Assault Detachment', 		pts:175, units:'4 Assault Units', upgrades:[commander, vindicator]},
	{id:533, label:'Bike Detachment', 			pts:200, upgrades:[commander,bikes]},
	{id:534, label:'Devastator Detachment',		pts:250, units:'4 Devastators', upgrades:[commander, razorbacks, dreadnought, hunter, landRaiders, transport]},
	{id:535, label:'Land Raiders',				pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]},
	{id:536, label:'Land Speeders',				pts:200, upgrades:[commander, speeders]},
	{id:537, label:'Landing Craft',				pts:350, upgrades:[]},
	{id:538, label:'Predators',					pts:275, upgrades:[commander, hunter, vindicator, predators]},
	{id:539, label:'Scout Detachment',			pts:150, units:'4 Scouts', upgrades:[commander, razorbacks, sniper, transport]},
	{id:541, label:'Strike Cruiser',			pts:200, upgrades:[], group:spacecraft}, 
	{id:542, label:'Battle Barge',				pts:350, upgrades:[], group:spacecraft},
	{id:543, label:'Tactical Detachment',		pts:300, units:'6 Tacticals', upgrades:[commander, razorbacks, dreadnought, hunter, vindicator, transport]},
	{id:544, label:'Terminator Detachment',		pts:350, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders]},
	{id:545, label:'Thunderhawk',				pts:200, upgrades:[]},
	{id:546, label:'Vindicators',				pts:275, units:'4 Vindicators', upgrades:[commander, hunter]},
	{id:547, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]}
]};

// NAVY
var navyList =			{id:551, label:'IMPERIAL NAVY', options:[
	{id:549, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, units:'2 Thunderbolts'},
	{id:550, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, units:'2 Mauraders'}
]};

// TITANS
var titanList = 		{id:556, label:'TITAN LEGIONS', options:[
	{id:552, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true},
	{id:553, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true},
	{id:554, label:'Warhound Titan',		pts:275, upgrades:[], limited:true},
	{id:555, label:'Warhound Pack',			pts:500, upgrades:[], limited:true, units:'2 Warhounds'}
]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'NetEA Compendium 1.1',
	sublists:[detachmentList, navyList, titanList]};

// CALLBACK
listLoaded();
