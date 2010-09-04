// MANDATORY UNITS
var emperor =		{label:'Emperor', upto:1, minimum:1, options:[
	{id:11, label:'Imperator Configuration',	pts:0, optional:true},
	{id:12, label:'Warmonger Configuration',	pts:0, optional:true}
]};
var scoutWep = 		{label:'Weapons',	upto:2, minimum:2, options:[
	{id:13, label:'Inferno Gun', 			pts:0, optional:true},
	{id:14, label:'Vulcan Megabolter',		pts:0, optional:true},
	{id:15, label:'Plasma Blastgun',		pts:0, optional:true},
	{id:16, label:'Turbolaser Destructor',	pts:35, optional:true}	
]};
var scoutWep2 =		{label:'Weapons',	upto:4, minimum:4, options:[
	{id:17, label:'Inferno Gun', 			pts:0, optional:true},
	{id:18, label:'Vulcan Megabolter',		pts:0, optional:true},
	{id:19, label:'Plasma Blastgun',		pts:0, optional:true},
	{id:20, label:'Turbolaser Destructor',	pts:35, optional:true}	
]};
var reaverWep =		{label:'Weapons',	upto:3, minimum:3, options:[
	{id:30, label:'Apocalypse Rocket Launcher',	pts:25, optional:true},
	{id:21, label:'Inferno Gun', 			pts:0, optional:true},
	{id:22, label:'Vulcan Megabolter',		pts:0, optional:true},
	{id:23, label:'Plasma Blastgun',		pts:0, optional:true},
	{id:24, label:'Turbolaser Destructor',	pts:35, optional:true},
	{id:25, label:'Laser Burner',			pts:0, optional:true},
	{id:26, label:'Corvus Assault Pod',		pts:0, optional:true},
	{id:27, label:'Carapace Landing Pad',	pts:0, optional:true},
	{id:28, label:'Plasma Cannon',			pts:25, optional:true},
	{id:29, label:'Gatling Blaster',		pts:25, optional:true},
	{id:31, label:'Close Combat Weapon',	pts:25, optional:true},
	{id:32, label:'Melta Cannon',			pts:50, optional:true},
	{id:33, label:'Laser Blaster',			pts:50, optional:true},
	{id:34, label:'Valcano Cannon',			pts:50, optional:true},
	{id:35, label:'Plasma Destructor',		pts:75, optional:true},
	{id:36, label:'Support Missile',		pts:75, optional:true},
	{id:37, label:'Quake Cannon',			pts:75, optional:true}
]};
var warlordWep =	{label:'Weapons',	upto:4, minimum:4, options:[
	{id:41, label:'Turbolaser Destructor',	pts:35, optional:true},
	{id:38, label:'Inferno Gun', 			pts:0, optional:true},
	{id:39, label:'Vulcan Megabolter',		pts:0, optional:true},
	{id:40, label:'Plasma Blastgun',		pts:0, optional:true},
	{id:42, label:'Laser Burner',			pts:0, optional:true},
	{id:43, label:'Corvus Assault Pod',		pts:0, optional:true},
	{id:44, label:'Carapace Landing Pad',	pts:0, optional:true},
	{id:45, label:'Plasma Cannon',			pts:25, optional:true},
	{id:46, label:'Gatling Blaster',		pts:25, optional:true},
	{id:47, label:'Apocalypse Rocket Launcher',	pts:25, optional:true},
	{id:48, label:'Close Combat Weapon',	pts:25, optional:true},
	{id:49, label:'Melta Cannon',			pts:50, optional:true},
	{id:50, label:'Laser Blaster',			pts:50, optional:true},
	{id:51, label:'Valcano Cannon',			pts:50, optional:true},
	{id:52, label:'Plasma Destructor',		pts:75, optional:true},
	{id:53, label:'Support Missile',		pts:75, optional:true},
	{id:54, label:'Quake Cannon',			pts:75, optional:true}
]};
var spacecraft = 	{id:55, label:'Spacecraft', 	upto:1,		minimum:1, options:[
	{id:56, label:'Gothic Class Cruiser',	pts:0,	optional:true},
	{id:57, label:'Arc Mechanicus',			pts:125,optional:true}
]};

// UPGRADES
var surcharge = 	{id:80, label:'Single Weapon System Surcharge', 	pts:25, upto:1};
var legate =		{id:81,	label:'Legate',								pts:50, upto:1};
var princeps =		{id:82,	label:'Veteran Princeps',					pts:25,	upto:1};
var lasers =		{id:83,	label:'Carapace Multi-Lasers',				pts:50,	upto:1};
var icon =			{id:84,	label:'Sacred Icon',						pts:50,	upto:1};


// TITANS
var titans =		{id:501, label:'BATTLE TITANS', options:[
	{id:502, label:'Emperor Titan', 		pts:1250, upgrades:[emperor,legate,princeps,lasers,icon]},
	{id:503, label:'Warlord Titan', 		pts:725, upgrades:[warlordWep,surcharge,legate,princeps,lasers,icon]},
	{id:504, label:'Reaver Titan',			pts:575, upgrades:[reaverWep,surcharge,legate,princeps,lasers,icon]}
]};

// SCOUTS
var scouts =		{id:550, label:'SCOUT TITANS', options:[
	{id:551, label:'Warhound Titan',		pts:275, upgrades:[scoutWep,surcharge,princeps]},
	{id:552, label:'Warhound Titan Pack',	pts:500, upgrades:[scoutWep2,surcharge,princeps]}
]};

// SUPPORT
var support = 	{id:560, label:'SUPPORT FORMATIONS', options:[
	{id:561, label:'Forge Knights',			pts:400, units:'6 Forge Knights', upgrades:[], limited:true},
	{id:562, label:'Recon Platoon',			pts:100, units:'4 Sentinels', upgrades:[], limited:true},
	{id:563, label:'Thunderbolt Fighters',	pts:150, units:'2 Thunderbolts', upgrades:[], limited:true},
	{id:564, label:'Marauder Bombers',		pts:250, units:'2 Mauraders', upgrades:[], limited:true},
	{id:565, label:'Orbital Support',		pts:175, upgrades:[spacecraft], upto:1, limited:true},
	{id:566, label:'Skitarii Demi-Century',	pts:300, units:'Tech Priest, 9 Hypaspists', upgrades:[], limited:true},
	{id:567, label:'Lysander Fighter',		pts:75,	 upgrades:[], limited:true}	
]};

// DETAILS
var listData = {
	id:'Legio Gryphonicus', version:'NetEA v3.17 *UNDER DEVELOPMENT*',
	limitRatio:1,
	sublists:[titans, scouts, support]};

// CALLBACK
listLoaded();
