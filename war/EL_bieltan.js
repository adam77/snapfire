// OPTIONALS
var rangerOpts = 	{id:10, label:'Rangers', minimum:4, upto:8};
	var ranger =		{id:11, label:'Ranger',		pts:25,	optional:true, group:rangerOpts};
	rangerOpts.options =[ranger];
var warwalkers = 	{id:12, label:'War Walkers', minimum:4, upto:6};
	var warwalker =		{id:13, label:'War Walker',	pts:35,	optional:true, group:warwalkers};
	warwalkers.options =[warwalker];	
var aspects =		{id:14, label:'Aspect Warrior', upto:8, minimum:8};
	var dire	 =		{id:15, label:'Dire Avenger',		pts:0,	group:aspects, optional:true};
	var sscorpion =		{id:16, label:'Striking Scorpion',	pts:0,	group:aspects, optional:true};
	var banshees =		{id:17, label:'Howling Banshee',	pts:0,	group:aspects, optional:true};
	var dragons =		{id:18, label:'Fire Dragon',		pts:0,	group:aspects, optional:true};
	var spiders =		{id:19, label:'Warp Spider',		pts:0,	group:aspects, optional:true};
	var reapers =		{id:20, label:'Dark Reaper',		pts:0,	group:aspects, optional:true};
	var hawks =			{id:21, label:'Swooping Hawk',	pts:0,	group:aspects, optional:true};
	var spears =		{id:22, label:'Shining Spear',	pts:0,	group:aspects, optional:true};
	aspects.options = 	[dire, sscorpion, banshees, dragons, spiders, reapers, hawks, spears];
var guardianOpts =	{id:23, label:'Guardians',	upto:7, minimum:7};
	var guards =		{id:24, label:'Guardians',				pts:0, group:guardianOpts, optional:true};
	var heavyweapon =	{id:25, label:'Heavy Weapon Platform',	pts:0, group:guardianOpts, optional:true, upto:3};
	guardianOpts.options = [guards, heavyweapon];
var jetbikers = 		{id:26, label:'Bikes',	upto:6, minimum:6};
	var jetbike =		{id:27, label:'Jetbike', 	pts:0, group:jetbikers, optional:true};
	var vyper =			{id:28, label:'Vyper', 	pts:0, group:jetbikers, optional:true};
	jetbikers.options = [jetbike, vyper];
var falcons =		{id:29, label:'Falcons', upto:5, minimum:5};
	var falcon2 =		{id:30, label:'Falcon',			pts:50, group:falcons, optional:true};
	var firestorm =		{id:31, label:'Fire Storm', 	pts:50, group:falcons, optional:true, upto:2};
	//var fireprism =		{id:32, label:'Fire Prism',	pts:65, group:falcons, optional:true};
	falcons.options =	[falcon2, firestorm];
var engines =		{id:33, label:'Engines of Vaul', upto:3, minimum:1};
	var cobra =			{id:34, label:'Cobra',			pts:250, group:engines, optional:true};
	var scorpion =		{id:35, label:'Scorpion',		pts:250, group:engines, optional:true};
	var storm =			{id:36, label:'Storm Serpent',	pts:250, group:engines, optional:true};
	var spinner =		{id:37, label:'Void Spinner',	pts:250, group:engines, optional:true};
	engines.options = [cobra, scorpion, storm, spinner];

// UPGRADES
var exarchs =		{id:38, label:'Exarch', upto:2};
	var exarch =		{id:39, label:'Exarch', 	pts:25, group:exarchs};
	var autarch =		{id:40, label:'Autarch', 	pts:75, group:exarchs, upto:1};
	exarchs.options = 	[exarch, autarch];
var waveserpent =	{id:41, label:'Wave Serpent',	pts:50};
var falcon =		{id:42, label:'Falcon',		pts:65};
var supportweapon =	{id:43, label:'3 Support Weapon Platforms',pts:50,	upto:1};
var wraithguard =	{id:44, label:'3 Wraithguard',	pts:150, upto:1};
var wraithlords =	{id:45, label:'Wraithlords',	pts:175, upto:1};

// TROUPES (3 per warhost)
var rangers =		{id:500, label:'Ranger Troupe',					pts:0, 		displayPts:100, defaults:[{unit:ranger,count:4}], upgrades:[ranger], restricted:true};
var warwalkers =	{id:501, label:'War Walker Troupe',				pts:200, 		units:'6 Warwalkers',	upgrades:[], restricted:true};
var windrider =		{id:502, label:'Windrider Troupe',				pts:200, 	defaults:[{unit:jetbike, count:6}], upgrades:[], restricted:true};
var swords =		{id:503, label:'Falcon Troupe',			pts:0, 	 	displayPts:250, defaults:[{unit:falcon2,count:5}], upgrades:[], restricted:true};
var nightspinner =	{id:504, label:'Night Spinner Troupe',			pts:175, 	units:'3 Night Spinners', upgrades:[], restricted:true};
var cobraT =		{id:505, label:'Engines of Vaul Troupe',			pts:0, 		displayPts:250, defaults:[{unit:cobra,count:1}], upgrades:[engines], restricted:true};
var prismtroupe =	{id:530, label:'Fire Prism Troupe',			pts:250, 	units:'3 Fire Prisms', upgrades:[], restricted:true};
var troupeList = 	{id:506, label:'TROUPES', options:[rangers, warwalkers, windrider, swords, prismtroupe, nightspinner, cobraT]};


// INDIVIDUALS
var wraithgate =	{id:507, label:'Wraithgate',	pts:50,		upgrades:[],	upto:1};
var avatar =		{id:508, label:'Avatar',		pts:0,		upgrades:[],	upto:1};
var individualList = {id:509, label:'INDIVIDUALS', options:[avatar, wraithgate]};

// WARHOSTS
var aspects =		{id:510, label:'Aspect Warrior Warhost', 			pts:300, restricting:true,	defaults:[{unit:dire, count:8}], upgrades:[exarchs, waveserpent, falcon]};
var guardians =		{id:511, label:'Guardian Warhost',		 			pts:150, restricting:true,	defaults:[{unit:guards, count:7}], units:'Farseer',	upgrades:[supportweapon, wraithguard, wraithlords]};
var guardians2 =	{id:512, label:'Guardian Warhost (Wave Serpents)',	pts:350, restricting:true,	defaults:[{unit:guards, count:7}], units:'Farseer, 4 Wave Serpents',	upgrades:[]};
var warhostList =	{id:513, label:'WARHOSTS', options:[aspects, guardians, guardians2]};

// ALLIES
var spacecraft = 	{id:514, label:'Spacecraft', upto:1};
var wraithship =	{id:515, label:'Wraithship',	pts:150, upgrades:[], limited:true, group:spacecraft};
var dragonship =	{id:516, label:'Dragonship',	pts:300, upgrades:[], limited:true, group:spacecraft};
var warlockTitan = 	{id:517, label:'Warlock Titan',	pts:850, upgrades:[], limited:true, upto:1};
var phantomTitan =	{id:518, label:'Phantom Titan',	pts:750, upgrades:[], limited:true};
var revenants =		{id:519, label:'Revenant Titans',pts:650, units:'2 Revenant Titans', upgrades:[], limited:true};
var nightwings =	{id:520, label:'Nightwings',	pts:300, units:'3 Nightwing Interceptors', upgrades:[], limited:true};	
var bombers =		{id:521, label:'Phoenix Bombers',pts:400, units:'3 Phoenix Bombers', upgrades:[], limited:true};	
var vampire =		{id:522, label:'Vampire Raider',pts:200, upgrades:[], limited:true};	
var allyList = 		{id:523, label:'SPACESHIPS, AIRCRAFT &amp; TITANS', options:[wraithship, dragonship, warlockTitan, phantomTitan, revenants, nightwings, bombers, vampire]};

// DETAILS
var listData = {
	id:'Biel-Tan Craftworld', version:'EA Swordwind',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:3, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
