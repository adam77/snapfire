// UNIT OPTIONS
var cultists =		{id:10, label:'Cultists', upto:19, minimum:11};
	var cultist =	{id:11, label:'Cultists', pts:15, optional:true, group:cultists};
	var mutant =	{id:12,	label:'Mutants', pts:15, optional:true, group:cultists};
	var bigMutant =	{id:13, label:'Big Mutants', pts:35, upto:6, optional:true, group:cultists}; 
	cultists.options = 	[cultist, mutant, bigMutant];
var leaders = 		{id:14, label:'Champion', upto:1, minimum:1};
	var demagogue =	{id:15, label:'Demagogue', pts:0, optional:true, group:leaders};
	var champ =		{id:16, label:'Chaos Marine Aspiring Champion', pts:0, optional:true, group:leaders};
	var prince =	{id:17, label:'Daemon Prince', pts:50, optional:true, group:leaders};
	leaders.options = 	[demagogue, champ, prince];
var alignment =		{id:18, label:'Alignment', upto:1, minimum:1};
	var khorne =	{id:19, label:'Alignment: Khorne', pts:0, optional:true, group:alignment};
	var nurgle =	{id:20, label:'Alignment: Nurgle', pts:0, optional:true, group:alignment};
	var slaanesh =	{id:21, label:'Alignment: Slaanesh', pts:0, optional:true, group:alignment};
	var tzeentch =	{id:22, label:'Alignment: Tzeentch', pts:0, optional:true, group:alignment};
	var undivided =	{id:23, label:'Alignment: Undivided', pts:0, optional:true, group:alignment};
	alignment.options = [undivided, khorne, nurgle, slaanesh, tzeentch];

// UPGRADES (upto 3 per company)
var chimera =		{id:30, label:'Chimera',					pts:25}; // only applies to snipers & ogryns
var icon =			{id:31, label:'Icon Bearer',				pts:40, 	upto:1};	
var transports =	{id:32, label:'Land Transporter',			pts:10};
var spawn =			{id:33, label:'Chaos Spawn',				pts:25, 	upto:1};
var hound =			{id:34, label:'Chaos Hounds',				pts:10, 	upto:3};
var altar =			{id:35, label:'Chaos Altar',				pts:150, 	upto:1};
var fireSup =		{id:36, label:'Traitor Fire Support',		pts:25, 	upto:4};
var tanks =			{id:37, label:'Russ',	upto:3};
	russ =			{id:38, label:'Leman Russ', 				pts:70, optional:true, group:tanks};
	demolisher =	{id:39, label:'Leman Russ Demolisher', 		pts:70, optional:true, group:tanks};
	tanks.options =	[russ, demolisher];
var griffon =		{id:40, label:'Traitor Griffon',			pts:35,		upto:3};
var hellhound =		{id:41, label:'Traitor Hellhound',			pts:50,		upto:3};
var hydra =			{id:42, label:'Traitor Hydra',				pts:50,		upto:2};
var pact =			{id:43, label:'Daemonic Pact',				pts:25,		upto:1};
var greater =			{id:51, label:'Greater Daemon', pts:100};
var lesser =			{id:52, label:'Lesser Daemon', pts:20};

var lobs =			{id:53, minimum:1, upto:2};
	var lob =		{id:54, label:'Lord of Battles', pts:400, optional:true, group:lobs};
	lobs.options =	[lob];
var towers =		{id:55, minimum:1, upto:2};
	var tower =		{id:56, label:'Plague Tower', pts:325, optional:true, group:towers};
	towers.options =[tower];
var scouts =		{id:57, minimum:1, upto:2, label:'Scouts'};
	var quest =		{id:58, label:'Questor', pts:275, optional:true, group:scouts};
	var subjugate =	{id:59, label:'Subjugator', pts:225, optional:true, group:scouts};
	scouts.options =[quest, subjugate];
var fires =			{id:60, minimum:1, upto:3};
	var fire =		{id:61, label:'Firelord', pts:150, optional:true, group:fires};
	fires.options =[fire];

// COVENS
var companyList =	{id:530, label:'FORMATIONS', options:[
	{id:531, label:'Stigmatus Coven (Khorne)',			pts:35, displayPts:200, restricting:true, defaults:[{unit:demagogue,count:1},{unit:cultist,count:11}], upgrades:[cultist, mutant, bigMutant, pact, icon, spawn, hound, altar, tanks, fireSup, griffon, hellhound, hydra, chimera, transports]},
	{id:532, label:'Stigmatus Coven (Nurgle)',			pts:35, displayPts:200, restricting:true, defaults:[{unit:demagogue,count:1},{unit:cultist,count:11}], upgrades:[cultist, mutant, bigMutant, pact, icon, spawn, hound, altar, tanks, fireSup, griffon, hellhound, hydra, chimera, transports]},
	{id:533, label:'Stigmatus Coven (Slaanesh)',		pts:35, displayPts:200, restricting:true, defaults:[{unit:demagogue,count:1},{unit:cultist,count:11}], upgrades:[cultist, mutant, bigMutant, pact, icon, spawn, hound, altar, tanks, fireSup, griffon, hellhound, hydra, chimera, transports]},
	{id:534, label:'Stigmatus Coven (Tzeentch)',		pts:35, displayPts:200, restricting:true, defaults:[{unit:demagogue,count:1},{unit:cultist,count:11}], upgrades:[cultist, mutant, bigMutant, pact, icon, spawn, hound, altar, tanks, fireSup, griffon, hellhound, hydra, chimera, transports]},
	{id:535, label:'Stigmatus Coven (Undivided)',		pts:35, displayPts:200, restricting:true, defaults:[{unit:demagogue,count:1},{unit:cultist,count:11}], upgrades:[cultist, mutant, bigMutant, pact, icon, spawn, hound, altar, tanks, fireSup, griffon, hellhound, hydra, chimera, transports]},
	{id:536, label:'Plague Zombie Infestation',			pts:175, units:'3D6 Plague Zombie Units', upto:2, upgrades:[]},
	{id:537, label:'Daemon Pool',						pts:0, upto:1, upgrades:[greater, lesser]},
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
	{id:542, label:'Marauder Bombers',		pts:300, upgrades:[], limited:true, restricted:true, units:'2 Marauders'}
]};

// ENGINES
var engineList = 		{id:550, label:'DAEMON ENGINES', options:[
	{id:551, label:'Khorne Lord of Battles',			pts:0, displayPts:400, defaults:[{unit:lob,count:1}], upgrades:[lob], limited:true, restricted:true},
	{id:552, label:'Khorne Assault Engines',			pts:300, units:'4 Demonic Assault Engines', upgrades:[], limited:true, restricted:true},
	{id:553, label:'Nurgle Plague Tower',				pts:0, displayPts:325, defaults:[{unit:tower,count:1}], upgrades:[tower], limited:true, restricted:true},
	{id:554, label:'Nurgle Contagion Towers',			pts:300, units:'4 Contagion Towers', upgrades:[], limited:true, restricted:true},
	{id:555, label:'Slaanesh Scout Titans',				pts:0, displayPts:275, defaults:[{unit:quest,count:1}], upgrades:[quest,subjugate], limited:true, restricted:true},
	{id:556, label:'Slaanesh Daemon Knights',			pts:275, units:'4 Daemon Knights', upgrades:[], limited:true, restricted:true},
	{id:557, label:'Tzeentch Firelord',					pts:0, displayPts:150, defaults:[{unit:fire,count:1}], upgrades:[fire], limited:true, restricted:true},
	{id:558, label:'Tzeentch Doomwings',				pts:150, units:'3 Doomwings', upgrades:[], limited:true, restricted:true},
	{id:559, label:'Tzeentch Silver Towers',			pts:325, units:'4 Silver Towers', upgrades:[], limited:true, restricted:true},
	{id:560, label:'Hellfire Cannons',					pts:200, units:'4 Hellfire Cannons', upgrades:[], limited:true, restricted:true},
	{id:561, label:'Defilers',							pts:400, units:'4 Defilers', upgrades:[], limited:true, restricted:true}
]};

// DETAILS
var listData = {
	id:'Lost And The Damned', version:'Specialist Games Forum v3.5',
	sublists:[companyList, engineList, supportList, navyList],
	limitRatio:1,
	restriction:{limit:1, restricting:'Cultist Coven', restricted:'Support Coven'}};

// CALLBACK
listLoaded();
