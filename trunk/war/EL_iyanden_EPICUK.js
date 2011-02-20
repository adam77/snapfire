// MANDATORY UNITS
var ranger =		{id:11, label:'Ranger',		pts:25,	optional:true, minimum:4, upto:8};
var aspects =		{id:14, label:'Aspect Warrior', upto:6, minimum:6, options:[
	{id:15, label:'Dire Avenger',		pts:0,	optional:true},
	{id:16, label:'Striking Scorpion',	pts:0,	optional:true},
	{id:17, label:'Howling Banshee',	pts:0,	optional:true},
	{id:18, label:'Fire Dragon',		pts:0,	optional:true},
	{id:19, label:'Warp Spider',		pts:0,	optional:true},
	{id:20, label:'Dark Reaper',		pts:0,	optional:true},
	{id:21, label:'Swooping Hawk',		pts:0,	optional:true},
	{id:22, label:'Shining Spear',		pts:0,	optional:true}
]};
var guardians =		{id:23, label:'Guardians +  3x Heavy Weapon Platforms',	pts:0, optional:true};
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

// UPGRADES
var exarchs =		{id:38, label:'Exarch', upto:1, options:[
	{id:39, label:'Exarch', 	pts:25}
]};
var seers = 		{id:60, label:'Spiritseer + 6 Wraithguard', pts:100, upto:1, minimum:1, options:[
	{id:61, label:'Spiritseer', pts:0, optional:true},
	{id:62, label:'Wraithseer', pts:100, optional:true, general:true}
]};
var waveserpent =	{id:41, label:'Wave Serpent', upto:3,			pts:50};
var falcon =		{id:42, label:'Falcon',	upto:6,					pts:65};
var supportweapon =	{id:43, label:'3 Support Weapon Platforms',	pts:50,		upto:1};
var wraithguard =	{id:44, label:'3 Wraithguard',				pts:150, 	upto:1};
var wraithlords =	{id:45, label:'3 Wraithlords',				pts:175, 	upto:1};
var spiritstones = 	{id:46, label:'Spirit Stones',			pts:25,		upto:1};
var spiritwaveserpent =	{id:51, label:'6 Wave Serpents', 			pts:300,  upto:1};

var wraithUpgrades = {id:52, label:'Upgrade', upto:1, options:[
	{id:53, label:'3 Wraithlords',	pts:175, optional:true},
	{id:54, label:'6 Wave Serpents', pts:300, optional:true}
]};

// TROUPES (3 per warhost)
var troupeList = 	{id:506, label:'TROUPES', options:[
	{id:500, label:'Ranger Troupe',				pts:0, 		displayPts:100, upgrades:[ranger], restricted:true},
	{id:501, label:'War Walker Troupe',			pts:200,	units:'6 Warwalkers',	upgrades:[spiritstones], restricted:true},
	{id:502, label:'Windrider Troupe',			pts:200, 	upgrades:[jetbikers, spiritstones], restricted:true},
	{id:503, label:'Falcon Troupe',				pts:0, 	 	displayPts:250, upgrades:[falcons, spiritstones], restricted:true},
	{id:504, label:'Night Spinner Troupe',		pts:175, 	units:'3 Night Spinners', upgrades:[spiritstones], restricted:true},
	{id:505, label:'Engines of Vaul Troupe',	pts:0, 		displayPts:250, upgrades:[engines, spiritstones], restricted:true},
	{id:530, label:'Fire Prism Troupe',			pts:250, 	units:'3 Fire Prisms', upgrades:[spiritstones], restricted:true},
	{id:550, label:'Aspect Troop',				pts:250, upgrades:[aspects, exarchs, waveserpent, falcon], restricted:true},
	{id:551, label:'Spirit Troop', pts:350, units:'6 Wraithlords', upgrades:[]}
]};

// INDIVIDUALS
var individualList = {id:509, label:'INDIVIDUALS', options:[
	{id:507, label:'Wraithgate',	pts:50,		upgrades:[],	upto:1},
	{id:508, label:'Avatar',		pts:0,		upgrades:[],	upto:1}
]};

// WARHOSTS
var warhostList =	{id:513, label:'WARHOSTS', options:[
	{id:510, label:'Spirit Host', 				pts:350, restricting:true, units:'6 Wraithguard',	upgrades:[seers, wraithUpgrades]},
//	{id:513, label:'Mounted Spirit Host', 		pts:650, restricting:true, units:'6 Wraithguard, 6 Wave Serpents', upgrades:[seers]},
	{id:511, label:'Guardian Warhost',		 	pts:150, units:'Farseer, 4 Guardians, 3 Heavy Weapon Platforms',	upgrades:[supportweapon, wraithguard, wraithlords]},
	{id:512, label:'Guardian Warhost (Mounted)',	pts:350, units:'Farseer, 4 Guardians, 3 Heavy Weapon Platforms, 4 Wave Serpents', upgrades:[]}
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
	{id:522, label:'Vampire Raider',pts:200, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Iyanden Craftworld', version:'Epic-UK v20110110',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:2, restricting:'Spirit Host', restricted:'Troupes'},
	notes:[' Total number of Aspect Troupes AND Guardian Hosts may not exceed the number of Spirit Hosts selected.',
			' Total number of Ranger Troupes may not exceed the number of Spirit Hosts selected.',
			' Total number of Windrider Troupes may not exceed the number of Spirit Hosts selected.']
};

// CALLBACK
listLoaded();
