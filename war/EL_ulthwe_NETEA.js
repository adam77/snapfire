// MANDATORY UNITS
var farseer =	{id:11, label:'Farseer', upto:1, minimum:1, options:[
	{id:12, label:'Farseer',	pts:0, optional:true},
	{id:13, label:'Seer Council',	pts:100, optional:true, general:true}
]};
var blackfarseer =	{id:14, label:'Farseer', upto:2, minimum:2, options:[
	{id:12, label:'Farseer',	pts:0, optional:true},
	{id:13, label:'Seer Council',	pts:100, optional:true, general:true}
]};
var ranger =		{id:15, label:'Ranger',		pts:25,	optional:true, minimum:4, upto:8};
var warwalker =		{id:16, label:'War Walker',	pts:25,	optional:true, minimum:4, upto:6};
var aspects =		{id:17, label:'Aspect Warrior', upto:4, minimum:4, options:[
	{id:18, label:'Dire Avenger',		pts:0,	optional:true},
	{id:19, label:'Striking Scorpion',	pts:0,	optional:true},
	{id:20, label:'Howling Banshee',	pts:0,	optional:true},
	{id:21, label:'Fire Dragon',		pts:0,	optional:true},
	{id:22, label:'Warp Spider',		pts:0,	optional:true},
	{id:23, label:'Dark Reaper',		pts:0,	optional:true},
	{id:24, label:'Swooping Hawk',		pts:0,	optional:true},
	{id:25, label:'Shining Spear',		pts:0,	optional:true}
]};
var guardians =		{id:26, label:'Guardians',	upto:7, minimum:7, options:[
	{id:27, label:'Guardians',				pts:0, optional:true},
	{id:28, label:'Heavy Weapon Platform',	pts:0, optional:true, upto:3}
]};
var blackguardians =		{id:29, label:'Guardians',	upto:6, minimum:6, options:[
	{id:30, label:'Guardians',				pts:0, optional:true},
	{id:31, label:'Heavy Weapon Platform',	pts:0, optional:true, upto:3}
]};
var bikes = 		{id:32, label:'Bikes',	upto:6, minimum:6, options:[
	{id:33, label:'Jetbike', 	pts:0, optional:true},
	{id:34, label:'Vyper', 		pts:0, optional:true}
]};
var falcons =		{id:35, label:'Falcons', upto:6, minimum:5, options:[
	{id:36, label:'Falcon',		pts:50, optional:true},
	{id:37, label:'Fire Storm',	pts:50, optional:true, upto:2},
	{id:38, label:'Fire Prism',	pts:65, optional:true}
]};
var waveserpents =		{id:39, label:'Wave Serpents', upto:1, minimum:1, options:[
	{id:40, label:'4 Wave Serpents', pts:0, optional:true},
	{id:41, label:'3 Wave Serpents, 2 Falcons', pts:50, optional:true},
	{id:42, label:'2 Wave Serpents, 4 Falcons', pts:100, optional:true}
]};
var blackjetbikes = 		{id:43, label:'Jetbikes', upto:1, minimum:0, options:[
	{id:44, label:'3 Jetbikes',			pts:100, optional:true},
	{id:45, label:'2 Jetbikes, 1 Vyper',	pts:100, optional:true},
	{id:46, label:'1 Jetbikes, 2 Vypers',	pts:100, optional:true},
	{id:47, label:'3 Vypers', 			pts:100, optional:true}
]};
var engines =		{id:48, label:'Engines of Vaul', upto:3, minimum:1, options:[
	{id:49, label:'Scorpion',		pts:250, optional:true},
	{id:50, label:'Cobra',			pts:250, optional:true},
	{id:51, label:'Storm Serpent',	pts:250, optional:true}
]};

// UPGRADES
var exarchs =		{id:52, label:'Exarch', upto:1, pts:25};
var waveserpent =		{id:53, label:'Wave Serpent',	pts:50};
var falcon =		{id:54, label:'Falcon',	pts:65};
var supportweapon =	{id:55, label:'3 Support Weapon Platforms', pts:50, upto:1};
var wraithguard =	{id:56, label:'Wraithguard', upto:1, minimum:0, options:[
	{id:57, label:'2 Wraithguard', pts: 100, optional:true},
	{id:58, label:'3 Wraithguard', pts: 150, optional:true}	
]};
var wraithlords =	{id:59, label:'3 Wraithlords', pts:175, upto:1};
var warwalkers = {id:60, label:'3 War Walkers', pts:100, upto:1};
var spearofkhaine= {id:61, label:'Spear of Khaine', pts:25, upto:1};



// TROUPES (2 per warhost)
var troupeList = 	{id:506, label:'TROUPES', options:[
	{id:500, label:'Aspect Warrior Troupe', 			pts:175, restricted:true,	upgrades:[aspects, exarchs, waveserpent, falcon]},	{id:501, label:'Ranger Troupe',				pts:0, 		displayPts:100, upgrades:[ranger], restricted:true},
	{id:502, label:'War Walker Troupe',				pts:50, 		displayPts:150, upgrades:[warwalker], restricted:true},
	{id:503, label:'Windrider Troupe',				pts:200, 	upgrades:[bikes], restricted:true},
	{id:504, label:'Swords of Vaul Troupe',			pts:0, 	 	displayPts:250, upgrades:[falcons], restricted:true},
	{id:505, label:'Night Spinner Troupe',			pts:175, 	units:'3 Night Spinners', upgrades:[], restricted:true},
	{id:506, label:'Engine of Vaul Troupe',			pts:0, 		displayPts:250, upgrades:[engines], restricted:true}
]};

// INDIVIDUALS
var individualList = {id:509, label:'INDIVIDUALS', options:[
	{id:507, label:'Wraithgate', pts:50,	upgrades:[], upto:1},
	{id:508, label:'Avatar', pts:0, upgrades:[spearofkhaine], upto:1}
]};

// WARHOSTS
var warhostList =	{id:514, label:'WARHOSTS', options:[
	{id:510, label:'Guardian Warhost',		 			pts:150, restricting:true,	upgrades:[farseer,guardians,supportweapon, wraithguard, wraithlords]},
	{id:511, label:'Guardian Warhost (Mounted)',	pts:350, restricting:true,	units:'4 Wave Serpents',	upgrades:[farseer,guardians]},
	{id:512, label:'Black Guardian Warhost',		 			pts:200, restricting:true,	upgrades:[blackfarseer,blackguardians,supportweapon, warwalkers]},
	{id:513, label:'Black Guardian Warhost (Mounted)',	pts:400, restricting:true,	upgrades:[blackfarseer,blackguardians,waveserpents,blackjetbikes]}
]};

// ALLIES
var spacecraft = 	{id:515, label:'Spacecraft', upto:1};
var allyList = 		{id:524, label:'SPACESHIPS, AIRCRAFT &amp; TITANS', options:[
	{id:516, label:'Wraithship',	pts:150, upgrades:[], limited:true, group:spacecraft},
	{id:517, label:'Dragonship',	pts:300, upgrades:[], limited:true, group:spacecraft},
 	{id:518, label:'Warlock Titan',	pts:850, upgrades:[], limited:true, upto:1},
	{id:519, label:'Phantom Titan',	pts:750, upgrades:[], limited:true},
	{id:520, label:'Revenant Titans',pts:650, units:'2 Revenant Titans', upgrades:[], limited:true},
	{id:521, label:'Nightwings',	pts:300, units:'3 Nightwing Interceptors', upgrades:[], limited:true},
	{id:522, label:'Phoenix Bombers',pts:400, units:'3 Phoenix Bombers', upgrades:[], limited:true},
	{id:523, label:'Vampire Raider',pts:200, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Ulthw&eacute;  Craftworld', version:'NetEA Army Book 2010 *DRAFT*',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:2, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
