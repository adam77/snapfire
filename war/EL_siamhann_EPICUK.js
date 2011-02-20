// MANDATORY UNITS
var ranger =		{id:11, label:'Ranger',		pts:25,	optional:true, minimum:4, upto:8};
var aspectsh =		{id:14, label:'Aspect Warrior', upto:8, minimum:8, options:[
	{id:21, label:'Swooping Hawk',		pts:0,	optional:true},
	{id:22, label:'Shining Spear',		pts:0,	optional:true}
]};
var aspects = 		{id:130, label:'Aspect Warrior', upto:6, minimum:6, options:[
	{id:131, label:'Dark Reapers', pts:0, optional:true},
	{id:132, label:'Dire Avengers', pts:0, optional:true},
	{id:133, label:'Fire Dragons', pts:0, optional:true},
	{id:134, label:'Howling Banshees', pts:0, optional:true},
	{id:135, label:'Striking Scropions', pts:0, optional:true}
]};

var jetbikers = 	{id:26, label:'Bikes',	upto:6, minimum:6, options:[
	{id:27, label:'Jetbike',			pts:0,	optional:true},
	{id:28, label:'Vyper', 				pts:0,	optional:true}
]};
var falcons =		{id:29, label:'Falcons', upto:5, minimum:5, options:[
	{id:30, label:'Falcon',				pts:50, optional:true},
	{id:31, label:'Fire Storm', 		pts:50, optional:true, upto:2}
]};
var engines =		{id:33, label:'Engines of Vaul', upto:3, minimum:1, options:[
	{id:34, label:'Cobra',				pts:250, optional:true},
	{id:35, label:'Scorpion',			pts:250, optional:true},
	{id:36, label:'Storm Serpent',		pts:250, optional:true}
]};
var wildhost =		{id:123, label:'Wild Rider',	upto:9, minimum:9, options:[
{id:124, label:'Wild Riders', pts:0, upto:9, minimum:3, optional:true},
{id:125, label:'Vypers', pts:0, upto:6, minimum:0, optional:true}
]};

// UPGRADES
var exarchs =		{id:38, label:'Exarch', upto:1, options:[
	{id:39, label:'Exarch', 	pts:25}
]};
var waveserpent =	{id:41, label:'Wave Serpent',				pts:50};
var falcon =		{id:42, label:'Falcon',						pts:65};
var supportweapon =	{id:43, label:'3 Support Weapon Platforms',	pts:50,		upto:1};
var wraithguard =	{id:44, label:'3 Wraithguard',				pts:150, 	upto:1};
var wraithlords =	{id:45, label:'Wraithlords',				pts:175, 	upto:1};
var spiritstones = 	{id:46, label:'Spirit Stones',			pts:25,		upto:1};
var wildupgrade = 	{id:47, label:'3 Wild Riders', 			pts:100, 	upto:1};
var mountedchar =	{id:48, label:'Mounted Farseer', upto:1, options:[
	{id:49, label:'Mounted Farseer', pts:75},
	{id:50, label:'Wild Rider Chieftain', pts:50, optional:true, general:true}
]};
// TROUPES (3 per warhost)
var troupeList = 	{id:506, label:'TROUPES', options:[
	{id:500, label:'Ranger Troupe',				pts:0, 		displayPts:100, upgrades:[ranger], restricted:true},
	{id:501, label:'War Walker Troupe',			pts:200,	units:'6 Warwalkers',	upgrades:[spiritstones], restricted:true},
	{id:503, label:'Falcon Troupe',				pts:0, 	 	displayPts:250, upgrades:[falcons, spiritstones], restricted:true},
	{id:504, label:'Night Spinner Troupe',		pts:175, 	units:'3 Night Spinners', upgrades:[spiritstones], restricted:true},
	{id:505, label:'Engines of Vaul Troupe',	pts:0, 		displayPts:250, upgrades:[engines, spiritstones], restricted:true},
	{id:530, label:'Fire Prism Troupe',			pts:250, 	units:'3 Fire Prisms', upgrades:[spiritstones], restricted:true},
	{id:531, label:'Mounted Aspect Troupe', 	pts:400, 	units:'3 Wave Serpents', upgrades:[aspects, exarchs]}
]};

// INDIVIDUALS
var individualList = {id:509, label:'INDIVIDUALS', options:[
	{id:507, label:'Wraithgate',	pts:50,		upgrades:[],	upto:1},
	{id:508, label:'Avatar',		pts:0,		upgrades:[],	upto:1}
]};

// WARHOSTS
var warhostList =	{id:513, label:'WARHOSTS', options:[
	{id:510, label:'Aspect Warrior Warhost', pts:300, restricting:true, upgrades:[aspectsh, exarchs]},
	{id:513, label:'Wild Rider Warhost', pts:325, restricting:true, upgrades:[wildhost, wildupgrade, mountedchar]}
]};

// ALLIES
var spacecraft = 	{id:514, label:'Spacecraft', upto:1};
var allyList = 		{id:523, label:'SPACESHIPS, AIRCRAFT &amp; TITANS', options:[
	{id:515, label:'Wraithship',	pts:150, upgrades:[], limited:true, group:spacecraft},
	{id:516, label:'Dragonship',	pts:300, upgrades:[], limited:true, group:spacecraft},
 	{id:517, label:'Warlock Titan',	pts:850, upgrades:[], limited:true, upto:1},
	{id:518, label:'Phantom Titan',	pts:750, upgrades:[], limited:true},
	{id:519, label:'Revenant Titans',pts:650, units:'2 Revenant Titans', upgrades:[], limited:true},
	{id:520, label:'Nightwings',	pts:300, units:'3 Nightwing Interceptors', upgrades:[], limited:true},
	{id:521, label:'Phoenix Bombers',pts:350, units:'3 Phoenix Bombers', upgrades:[], limited:true},
	{id:522, label:'Vampire Hunter',pts:225, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Siam-Hann Craftworld', version:'Epic-UK v20101230',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:2, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();