// MANDATORY UNITS
var ranger =		{id:11, label:'Ranger',		pts:25,	optional:true, minimum:4, upto:8};
var warwalker =		{id:13, label:'War Walker',	pts:35,	optional:true, minimum:4, upto:6};
var aspects =		{id:14, label:'Aspect Warrior', upto:8, minimum:8, options:[
	{id:15, label:'Dire Avenger',		pts:0,	optional:true},
	{id:16, label:'Striking Scorpion',	pts:0,	optional:true},
	{id:17, label:'Howling Banshee',	pts:0,	optional:true},
	{id:18, label:'Fire Dragon',		pts:0,	optional:true},
	{id:19, label:'Warp Spider',		pts:0,	optional:true},
	{id:20, label:'Dark Reaper',		pts:0,	optional:true},
	{id:21, label:'Swooping Hawk',		pts:0,	optional:true},
	{id:22, label:'Shining Spear',		pts:0,	optional:true}
]};
var guardians =		{id:23, label:'Guardians',	upto:7, minimum:7, options:[
	{id:24, label:'Guardians',				pts:0, optional:true},
	{id:25, label:'Heavy Weapon Platform',	pts:0, optional:true, upto:3}
]};
var bikes = 		{id:26, label:'Bikes',	upto:6, minimum:6, options:[
	{id:27, label:'Jetbike', 	pts:0, optional:true},
	{id:28, label:'Vyper', 		pts:0, optional:true}
]};
var falcons =		{id:29, label:'Falcons', upto:6, minimum:5, options:[
	{id:30, label:'Falcon',		pts:50, optional:true},
	{id:31, label:'Fire Storm',	pts:50, optional:true, upto:2},
	{id:32, label:'Fire Prism',	pts:65, optional:true}
]};
var engines =		{id:33, label:'Engines of Vaul', upto:3, minimum:1, options:[
	{id:34, label:'Cobra',			pts:250, optional:true},
	{id:35, label:'Scorpion',		pts:250, optional:true},
	{id:36, label:'Storm Serpent',	pts:250, optional:true},
	{id:37, label:'Void Spinner',	pts:250, optional:true}
]};

// UPGRADES
var exarchs =		{id:38, label:'Exarch', upto:2, options:[
	{id:39, label:'Exarch', 	pts:25},
	{id:40, label:'Autarch', 	pts:75, general:true}
]};
var waveserpent =	{id:41, label:'Wave Serpent',	pts:50};
var falcon =		{id:42, label:'Falcon',			pts:65};
var supportweapon =	{id:43, label:'3 Support Weapon Platforms',pts:50,	upto:1};
var wraithguard =	{id:44, label:'Wraithguard', upto:1, minimum:0, options:[
	{id:45, label:'2x Wraithguard', pts: 100, optional:true},
	{id:46, label:'3x Wraithguard', pts: 150, optional:true}	
]};
var wraithlords =	{id:47, label:'Wraithlords',	pts:175, upto:1};

// TROUPES (3 per warhost)
var troupeList = 	{id:506, label:'TROUPES', options:[
	{id:500, label:'Ranger Troupe',					pts:0, 		displayPts:100, upgrades:[ranger], restricted:true},
	{id:501, label:'War Walker Troupe',				pts:0, 		displayPts:140, upgrades:[warwalker], restricted:true},
	{id:502, label:'Windrider Troupe',				pts:200, 	upgrades:[bikes], restricted:true},
	{id:503, label:'Swords of Vaul Troupe',			pts:0, 	 	displayPts:250, upgrades:[falcons], restricted:true},
	{id:504, label:'Night Spinner Troupe',			pts:175, 	units:'3 Night Spinners', upgrades:[], restricted:true},
	{id:505, label:'Engine of Vaul Troupe',			pts:0, 		displayPts:250, upgrades:[engines], restricted:true}
]};

// INDIVIDUALS
var individualList = {id:509, label:'INDIVIDUALS', options:[
	{id:507, label:'Wraithgate',	pts:50,		upgrades:[],	upto:1},
	{id:508, label:'Avatar',		pts:0,		upgrades:[],	upto:1}
]};

// WARHOSTS
var warhostList =	{id:513, label:'WARHOSTS', options:[
	{id:510, label:'Aspect Warrior Warhost', 			pts:300, restricting:true,	upgrades:[aspects, exarchs, waveserpent, falcon]},
	{id:511, label:'Guardian Warhost',		 			pts:150, restricting:true,	units:'Farseer',	upgrades:[guardians,supportweapon, wraithguard, wraithlords]},
	{id:512, label:'Guardian Warhost (Mounted)',		pts:350, restricting:true,	units:'Farseer, 4 Wave Serpents',	upgrades:[guardians]}
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
	{id:521, label:'Phoenix Bombers',pts:400, units:'3 Phoenix Bombers', upgrades:[], limited:true},
	{id:522, label:'Vampire Raider',pts:200, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Biel-Tan Craftworld', version:'NetEA Compendium 1.0',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:3, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
