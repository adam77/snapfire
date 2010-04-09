// OPTIONALS
var aspects =	{label:'Aspect Warrior', upto:8, minimum:8};
	var dire	 =	{label:'Dire Avenger',		pts:0,	group:aspects, optional:true};
	var sscorpion =	{label:'Striking Scorpion',	pts:0,	group:aspects, optional:true};
	var banshees =	{label:'Howling Banshee',	pts:0,	group:aspects, optional:true};
	var dragons =	{label:'Fire Dragon',		pts:0,	group:aspects, optional:true};
	var spiders =	{label:'Warp Spider',		pts:0,	group:aspects, optional:true};
	var reapers =	{label:'Dark Reaper',		pts:0,	group:aspects, optional:true};
	var hawks =		{label:'Swooping Hawk',	pts:0,	group:aspects, optional:true};
	var spears =	{label:'Shining Spear',	pts:0,	group:aspects, optional:true};
	aspects.options = [dire, sscorpion, banshees, dragons, spiders, reapers, hawks, spears];
var guardianOpts =	{label:'Guardians',	upto:7, minimum:7};
	var guards =		{label:'Guardians',				pts:0, group:guardianOpts, optional:true};
	var heavyweapon =	{label:'Heavy Weapon Platform',	pts:0, group:guardianOpts, optional:true, upto:3};
	guardianOpts.options = [guards, heavyweapon];
var jetbikers = 		{label:'Bikes',	upto:6, minimum:6};
	var jetbike =		{label:'Jetbike', 	pts:0, group:jetbikers, optional:true};
	var vyper =			{label:'Vyper', 	pts:0, group:jetbikers, optional:true};
	jetbikers.options = [jetbike, vyper];
var falcons =	{label:'Falcons', upto:6, minimum:5};
	var falcon2 =		{label:'Falcon',		pts:50, group:falcons, optional:true};
	var firestorm =		{label:'Fire Storm', 	pts:50, group:falcons, optional:true, upto:2};
	var fireprism =		{label:'Fire Prism',	pts:65, group:falcons, optional:true};
	falcons.options =	[falcon2, firestorm, fireprism];
var engines =		{label:'Engines of Vaul', upto:3, minimum:1};
	var cobra =			{label:'Cobra',			pts:250, group:engines, optional:true};
	var scorpion =		{label:'Scorpion',		pts:250, group:engines, optional:true};
	var storm =			{label:'Storm Serpent',	pts:250, group:engines, optional:true};
	var spinner =		{label:'Void Spinner',	pts:250, group:engines, optional:true};
	engines.options = [cobra, scorpion, storm, spinner];

// UPGRADES
var exarchs =	{label:'Exarch', upto:2};
	var exarch =	{label:'Exarch', 	pts:25, group:exarchs};
	var autarch =	{label:'Autarch', 	pts:75, group:exarchs, upto:1};
	exarchs.options = [exarch, autarch];
var waveserpent =	{label:'Wave Serpent',	pts:50};
var falcon =		{label:'Falcon',		pts:65};
var supportweapon =	{label:'Support Weapon Platforms',	pts:50,	upto:1};
var wraithguard =	{label:'Wraithguard',	pts:50,	upto:3};
var wraithlords =	{label:'Wraithlords',	pts:175, upto:1};
var ranger =		{label:'Extra Ranger',		pts:25,	upto:4};
var warwalker =		{label:'Extra War Walker',	pts:35,	upto:2};

// TROUPES (3 per warhost)
var rangers =		{label:'Ranger Troupe',					pts:100, units:'4 Rangers', upgrades:[ranger], restricted:true};
var warwalkers =	{label:'War Walker Troupe',				pts:140, units:'4 Warwalkers', upgrades:[warwalker], restricted:true};
var windrider =		{label:'Windrider Troupe',				pts:200, defaults:[{unit:jetbike, count:6}], upgrades:[], restricted:true};
var swords =		{label:'Swords of Vaul Troupe',			pts:0, 	 displayPts:250, defaults:[{unit:falcon2,count:5}], upgrades:[falcon2], restricted:true};
var nightspinner =	{label:'Night Spinner Troupe',			pts:175, units:'3 Night Spinners', upgrades:[], restricted:true};
var cobraT =		{label:'Engine of Vaul Troupe',			pts:0, 	displayPts:250, defaults:[{unit:cobra,count:1}], upgrades:[engines], restricted:true};
var troupeList = 	{label:'TROUPES', options:[rangers, warwalkers, windrider, swords, nightspinner, cobraT]};

// INDIVIDUALS
var wraithgate =	{label:'Wraithgate',	pts:50,		upgrades:[],	upto:1};
var avatar =		{label:'Avatar',		pts:0,		upgrades:[],	upto:1};
var individualList = {label:'INDIVIDUALS', options:[avatar, wraithgate]};

// WARHOSTS
var aspects =		{label:'Aspect Warrior Warhost', 			pts:300, restricting:true,	defaults:[{unit:dire, count:8}], upgrades:[exarchs, waveserpent, falcon]};
var guardians =		{label:'Guardian Warhost',		 			pts:150, restricting:true,	defaults:[{unit:guards, count:7}], units:'Farseer',	upgrades:[supportweapon, wraithguard, wraithlords]};
var guardians2 =	{label:'Guardian Warhost (Wave Serpents)',	pts:350, restricting:true,	defaults:[{unit:guards, count:7}], units:'Farseer, 4 Wave Serpents',	upgrades:[]};
var warhostList =	{label:'WARHOSTS', options:[aspects, guardians, guardians2]};

// ALLIES
var spacecraft = 	{label:'Spacecraft', upto:1};
var wraithship =	{label:'Wraithship',	pts:150, upgrades:[], limited:true, group:spacecraft};
var dragonship =	{label:'Dragonship',	pts:300, upgrades:[], limited:true, group:spacecraft};
var warlockTitan = 	{label:'Warlock Titan',	pts:850, upgrades:[], limited:true, upto:1};
var phantomTitan =	{label:'Phantom Titan',	pts:750, upgrades:[], limited:true};
var revenants =		{label:'Revenant Titans',pts:650, units:'2 Revenant Titans', upgrades:[], limited:true};
var nightwings =	{label:'Nightwings',	pts:300, units:'3 Nightwing Interceptors', upgrades:[], limited:true};	
var bombers =		{label:'Phoenix Bombers',pts:400, units:'3 Phoenix Bombers', upgrades:[], limited:true};	
var vampire =		{label:'Vampire Raider',pts:200, upgrades:[], limited:true};	
var allyList = 		{label:'SPACESHIPS, AIRCRAFT &amp; TITANS', options:[wraithship, dragonship, warlockTitan, phantomTitan, revenants, nightwings, bombers, vampire]};

// DETAILS
var listData = {
	id:'Biel-Tan Craftworld', version:'NetEA FINAL',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:3, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
