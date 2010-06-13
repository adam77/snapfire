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
var falcons =		{id:29, label:'Falcons', upto:6, minimum:5};
	var falcon2 =		{id:30, label:'Falcon',		pts:50, group:falcons, optional:true};
	var firestorm =		{id:31, label:'Fire Storm', 	pts:50, group:falcons, optional:true, upto:2};
	var fireprism =		{id:32, label:'Fire Prism',	pts:65, group:falcons, optional:true};
	falcons.options =	[falcon2, firestorm, fireprism];
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
var wraithguard =	{id:44, label:'Wraithguard',	pts:50,	upto:3};
var wraithlords =	{id:45, label:'Wraithlords',	pts:175, upto:1};

// PARTISANS (2 per KABAL)
var troupeList = {id:506, label:'PARTISANS', options:[
	{id:500, label:'a',					pts:0, 		displayPts:100, defaults:[{unit:ranger,count:4}], upgrades:[], restricted:true},
	{id:501, label:'a',				pts:0, 		displayPts:140, defaults:[{unit:warwalker,count:4}], upgrades:[], restricted:true},
	{id:502, label:'a',				pts:200, 	defaults:[{unit:jetbike, count:6}], upgrades:[], restricted:true},
	{id:503, label:'a',			pts:0, 	 	displayPts:250, defaults:[{unit:falcon2,count:5}], upgrades:[], restricted:true},
	{id:504, label:'a',			pts:175, 	units:'3 Night Spinners', upgrades:[], restricted:true},
	{id:505, label:'a',			pts:0, 		displayPts:250, defaults:[{unit:cobra,count:1}], upgrades:[], restricted:true}
]}

// INDIVIDUALS
var individualList = {id:532, label:'INDIVIDUALS', options:[
	{id:530, label:'Webway Portal',	pts:50,		upgrades:[],	upto:1},
	{id:531, label:'Kashnarak',		pts:50,		upgrades:[],	upto:1}
]};

// KABALS
var warhostList =	{id:510, label:'KABALS', options:[
	{id:511, label:'Kabal Coterie', 	pts:0, restricting:true,	defaults:[{unit:dire, count:8}], upgrades:[], upto:1},
	{id:512, label:'Kabal Syndicate',	pts:0, restricting:true,	defaults:[{unit:guards, count:7}], upgrades:[]},
	{id:513, label:'Kabal Flotilla',	pts:0, restricting:true,	defaults:[{unit:guards, count:7}], upgrades:[], units:'4 Ravagers'}
]};

// ALLIES
var spacecraft = 	{id:514, label:'Spacecraft', upto:1};
var allyList = 		{id:523, label:'SPACESHIPS, AIRCRAFT &amp; HORRORS', options:[
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
	id:'Kabal of Pain\'s Way', version:'NetEA Epic Raiders 2.0',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:3, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
