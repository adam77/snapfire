// MANDATORY UNITS
var	greatCompany = 	{id:1,label:"***HOW/WHERE CAN I INSERT GREY HUNTERS AND HERO AND MINIMUM 1+ AND ONLY 1 HUNTING PACK TYPE PER GREAT COMPANY???***",
				options:[
						{id:2, label: 'Grey Hunters',  upto:2, minimum:2, pts:75, optional:true},
						{id:3, label: 'Long Fangs', upto:2, minimum:2,	pts:125, optional:true},
						{id:4, label: 'Blood Claws', upto:2, minimum:2,	pts:50, optional:true},
						{id:5, label: 'Wolf Guard Terminators', upto:2, 	pts:75, optional:true}
				]};

var transport =			{id:10, label:'Transport', upto:1, options:[
						{id:11, label:'Rhinos',			pts:0, optional:true},
						{id:12, label:'Drop Pods',		pts:0, optional:true}
]};
var bikes = 			{id:13, label:'Swiftclaw Bikes',	upto:6, minimum:6, options:[
						{id:14, label:'Swiftclaw Attack Bike', 	pts:0, optional:true}
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
var hero =				{id:23, label:'hero', upto:1, options:[
						{id:24, label:'Battle Leader',			pts:50},
						{id:25, label:'Wolf Lord',				pts:50, upto:1}, 
						{id:26, label:'Wolf Priest', 			pts:50},
						{id:27, label:'Rune Priest', 			pts:50}
	]};

var WolfLord = 		{id:30, label:'Wolf Lord', 								pts:50, upto:1};

var dreadnought = 		{id:30, label:'Dreadnought', 							pts:50, upto:2};
var VenerableDreadnought = {id:30, label:'Venerable Dreadnought', 				pts:75, upto:1};
var hunter = 			{id:31, label:'Hunter', 								pts:75, upto:1};
var LandRaiders = 		{id:32, label:'Space Wolves Land Raider',				pts:85};
var Crusaders = 		{id:33, label:'Space Wolves Land Raider Crusaders', 	pts:75};
var razorbacks =		{id:34, label:'Razorback',								pts:25};
var sniper =			{id:35, label:'Sniper',									pts:25, upto:2};
var vindicator = 		{id:36, label:'Vindicator',								pts:50, upto:2};
var Blood Claws = 		{id:40, label:'Blood Claws',							pts:50, upto:2, minimum:2};
var Skyclaws = 			{id:41, label:'Skyclaws',								pts:75, upto:2, minimum:2};
	
// PACKS
var spacecraft = 		{id:515, label:'Spacecraft', upto:1};
var packList =	{id:516, label:'PACKS', options:[
	{id:500, label:'Great Company',		pts:300, upgrades:[razorbacks, dreadnought, hunter, vindicator, Crusaders, Space Wolves Land Raiders, transport, options:[
	{id:501, label:'Blood Claws Pack', 				pts:225, units:'6 Blood Claws Units', upgrades:[hero, blood claws, vindicator, crusaders]},
	{id:502, label:'Skyclaws Pack', 				pts:225, units:'6 Skyclaws Units', upgrades:[hero, skyclaws]},
	{id:503, label:'Swiftclaws Bike Pack', 			pts:200, upgrades:[Swift Claws attack bikes, hero]},
	{id:504, label:'Long Fangs Pack',				pts:300, units:'4 Long Fangs', upgrades:[hero, razorbacks, hunter, Land Raiders, transport]},
	{id:505, label:'Wolf Guard Terminator pack',	pts:325, units:'4 Wolf Guard Terminators', upgrades:[hero, dreadnought, Land Raiders]},
	{id:506, label:'Wolf Scouts',					pts:225, units:'4 Wolf Scouts', upgrades:[hero, sniper]},
	{id:507, label:'Fenrisian Wolves pack',			pts:150, units:'6 Fenrisian Wolves', upgrades:[hero]},
	{id:508, label:'Space Wolves Land Raiders',		pts:350, units:'4 Space Wolves Land Raiders', upgrades:[hero, hunter, vindicator]},
	{id:509, label:'Land Speeders',					pts:200, upgrades:[speeders, hero]},
	{id:510  label:'Predators',						pts:275, upgrades:[predators, hero, hunter]},
	{id:511, label:'Vindicators',					pts:250, units:'4 Vindicators', upgrades:[hero, hunter]},
	{id:512, label:'Whirlwinds',					pts:300, units:'4 Whirlwinds', upgrades:[hero, hunter]}
	{id:507, label:'Scout Detachment',			pts:150, units:'4 Scouts', upgrades:[er, razorbacks, sniper, transport]},
	{id:513, label:'Space Wolves Thunderhawk',		pts:225, upgrades:[]},
	{id:514, label:'Space Wolves Landing Craft',	pts:375, upgrades:[]},
	{id:515, label:'Space Wolves Strike Cruiser',	pts:200, upgrades:[], group:spacecraft}, 
	{id:516, label:'Space Wovles Battle Barge',		pts:350, upgrades:[], group:spacecraft},
	
]};

// NAVY
var navyList =	{id:519, label:'IMPERIAL NAVY', options:[
	{id:517, label:'Thunderbolt Fighter-Bombers',	pts:150, units:'2 Fighter-Bombers', upgrades:[], limited:true},
	{id:518, label:'Marauder Bombers',				pts:250, units:'2 Bombers', upgrades:[], limited:true}
]};

// TITANS
var titanList = 		{id:523, label:'TITAN LEGIONS', options:[
	{id:520, label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true},
	{id:521, label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true},
	]};

// DETAILS
var listData = {
	id:'Space Wolves', version:'NetEA v2.3.1',
	sublists:[packsList, navyList, titanList]};

// CALLBACK
listLoaded();

