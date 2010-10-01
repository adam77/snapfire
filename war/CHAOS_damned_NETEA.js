// MANDATORY UNITS
var lob =			{id:54, label:'Lord of Battles', pts:400, optional:true, minimum:1, upto:2};
var tower =			{id:56, label:'Plague Tower', pts:325, optional:true, minimum:1, upto:3};
var fire =			{id:61, label:'Firelord', pts:150, optional:true, minimum:1, upto:3};
var scouts =		{id:57, minimum:1, upto:2, label:'Scouts', options:[
	{id:58, label:'Questor', pts:275, optional:true},
	{id:59, label:'Subjugator', pts:225, optional:true}
]};
var cultists =		{id:10, label:'Cultists', upto:19, minimum:11, options:[
	{id:11, label:'Cultists', 		pts:15, optional:true},
	{id:12,	label:'Mutants', 		pts:15, optional:true},
	{id:13, label:'Big Mutants', 	pts:35, upto:6, optional:true}
]};
var leaders = 		{id:14, label:'Champion', upto:1, minimum:1, options:[
	{id:15, label:'Demagogue', 		pts:0, optional:true},
	{id:16, label:'Chaos Marine Aspiring Champion', pts:0, optional:true},
	{id:17, label:'Daemon Prince', 	pts:50, optional:true},
	{id:18, label:'Demagogue (Arch Heretic)', 		pts:0, optional:true},
	{id:19, label:'Aspiring Champion (Arch Heretic)', pts:0, optional:true},
	{id:20, label:'Daemon Prince (Arch Heretic)', 	pts:50, optional:true}
]};
var faction =		{id:80,	label:'Faction',	upto:1,	minimum:1, options:[
	{id:85,	label:'(Chaos Undivided)',	pts:0,	optional:true},
	{id:81,	label:'(Khorne)',			pts:0,	optional:true},
	{id:82,	label:'(Nurgle)',			pts:0,	optional:true},
	{id:83,	label:'(Slaanesh)',			pts:0,	optional:true},
	{id:84,	label:'(Tzeentch)',			pts:0,	optional:true}
]};

// UPGRADES (upto 3 per company)
var chimera =		{id:30, label:'Chimera',					pts:25}; // only applies to snipers & ogryns
var icon =			{id:31, label:'Icon Bearer',				pts:50, 	upto:1};	
var transports =	{id:32, label:'Land Transporter',			pts:10};
var spawn =			{id:33, label:'Chaos Spawn',				pts:25, 	upto:1};
var hound =			{id:34, label:'Chaos Hounds',				pts:10, 	upto:3};
var altar =			{id:35, label:'Chaos Altar',				pts:150, 	upto:1};
var fireSup =		{id:36, label:'Traitor Fire Support',		pts:25, 	upto:4};
var griffon =		{id:40, label:'Traitor Griffon',			pts:35,		upto:3};
var hellhound =		{id:41, label:'Traitor Hellhound',			pts:50,		upto:3};
var hydra =			{id:42, label:'Traitor Hydra',				pts:50,		upto:2};
var pact =			{id:43, label:'Daemonic Pact',				pts:25,		upto:1};
var greater =		{id:51, label:'Greater Daemon', 			pts:75};
var lesser =		{id:52, label:'Lesser Daemon', 				pts:20};
var tanks =			{id:37, label:'Russ',	upto:3, options:[
	{id:38, label:'Leman Russ', 				pts:70},
	{id:39, label:'Leman Russ Demolisher', 		pts:70}
]};

// COVENS
var companyList =	{id:530, label:'FORMATIONS', options:[
	{id:531, label:'Stigmatus Coven',					pts:35, displayPts:200, restricting:true, upgrades:[leaders,cultists,faction,pact,icon, spawn, hound, altar, tanks, fireSup, griffon, hellhound, hydra, chimera, transports]},
	{id:536, label:'Plague Zombie Infestation',			pts:175, units:'3 + 2D6 Plague Zombie Units', upto:2, upgrades:[]},
	{id:537, label:'Daemon Pool',						pts:0, upto:1, upgrades:[greater, lesser]}
]};

// SUPPORT (1 per coven, no upgrades allowed)
var supportList =	{id:500, label:'TRAITOR SUPPORT', options:[
	{id:501, label:'Artillery Battery',	pts:325, upgrades:[], limited:true, restricted:true, units:'4 Basilisks'},
	{id:502, label:'Armoured Company',	pts:400, upgrades:[], limited:true, restricted:true, units:'6 Leman Russ'},
	{id:503, label:'Rough Rider Platoon',pts:150, upgrades:[], limited:true, restricted:true, units:'6 Rough Riders'},
	{id:504, label:'Sentinel Squadron',	pts:100, upgrades:[], limited:true, restricted:true, units:'4 Sentinels'}
]};

// NAVY
var navyList =		{id:540, label:'TRAITOR NAVY', options:[
	{id:541, label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true, restricted:true, units:'2 Thunderbolts'},
	{id:542, label:'Marauder Bombers',		pts:250, upgrades:[], limited:true, restricted:true, units:'2 Marauders'}
]};

// ENGINES
var engineList = 		{id:550, label:'DAEMON ENGINES', options:[
	{id:551, label:'Khorne Lord of Battles',			pts:0, displayPts:400, 						upgrades:[lob], limited:true, restricted:true},
	{id:552, label:'Khorne Assault Engines',			pts:300, units:'4 Demonic Assault Engines', upgrades:[], limited:true, restricted:true},
	{id:553, label:'Nurgle Plague Tower',				pts:0, displayPts:325, 						upgrades:[tower], limited:true, restricted:true},
	{id:554, label:'Nurgle Contagion Towers',			pts:300, units:'4 Contagion Towers', 		upgrades:[], limited:true, restricted:true},
	{id:555, label:'Slaanesh Scout Titans',				pts:0, displayPts:275, 						upgrades:[scouts], limited:true, restricted:true},
	{id:556, label:'Slaanesh Daemon Knights',			pts:275, units:'4 Daemon Knights', 			upgrades:[], limited:true, restricted:true},
	{id:557, label:'Tzeentch Firelord',					pts:0, displayPts:150, 						upgrades:[fire], limited:true, restricted:true},
	{id:558, label:'Tzeentch Doomwings',				pts:150, units:'3 Doomwings', 				upgrades:[], limited:true, restricted:true},
	{id:559, label:'Tzeentch Silver Towers',			pts:325, units:'4 Silver Towers', 			upgrades:[], limited:true, restricted:true},
	{id:560, label:'Hellfire Cannons',					pts:200, units:'4 Hellfire Cannons', 		upgrades:[], limited:true, restricted:true},
	{id:561, label:'Defilers',							pts:250, units:'4 Defilers', 				upgrades:[], limited:true, restricted:true}
]};

// DETAILS
var listData = {
	id:'Lost And The Damned', version:'NetEA v3.1',
	sublists:[companyList, engineList, supportList, navyList],
	limitRatio:1,
	restriction:{limit:1, restricting:'Cultist Coven', restricted:'Support Coven'}};

// CALLBACK
listLoaded();
