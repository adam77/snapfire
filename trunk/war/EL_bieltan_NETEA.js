// UPGRADES
var exarchs =	{label:'Exarch', upto:2};
	var exarch =	{label:'Exarch', 	pts:25, group:exarchs};
	var autarch =	{label:'Autarch', 	pts:75, group:exarchs, upto:1};
	exarchs.options = [exarch, autarch];
var waveserpent =	{label:'Wave Serpent',	pts:50};
var falcon =		{label:'Falcon',		pts:65};
var heavyweapon =	{label:'Heavy Weapons Platform',	pts:0,	upto:3};
var supportweapon =	{label:'Support Weapons Platforms',	pts:50,	upto:1};
var wraithguard =	{label:'Wraithguard',	pts:50,	upto:3};
var wraithlords =	{label:'Wraithlords',	pts:175, upto:1};
var ranger =		{label:'Extra Ranger',		pts:25,	upto:4};
var warwalker =		{label:'Extra War Walker',	pts:35,	upto:2};
var vyper =			{label:'Vyper',			pts:0};
var falcon2 =		{label:'Extra Falcon',	pts:50, upto:1};
var firestorm =		{label:'Fire Storm',	pts:0, upto:2};
var fireprism =		{label:'Fire Prism',	pts:15};
var engines =		{label:'Engines of Vaul', upto:2};
	var cobra =			{label:'Cobra',			pts:250, group:engines};
	var scorpion =		{label:'Scorpion',		pts:250, group:engines};
	var storm =			{label:'Storm Serpent',	pts:250, group:engines};
	var spinner =		{label:'Void Spinner',	pts:250, group:engines};
	engines.options = [cobra, scorpion, storm, spinner];

// TROUPES (3 per warhost)
var rangers =		{label:'Ranger Troupe',					pts:100, upgrades:[ranger], restricted:true};
var warwalkers =	{label:'War Walker Troupe',				pts:140, upgrades:[warwalker], restricted:true};
var windrider =		{label:'Windrider Troupe',				pts:200, upgrades:[vyper], restricted:true};
var swords =		{label:'Swords of Vaul Troupe',			pts:250, upgrades:[falcon2, firestorm, fireprism], restricted:true};
var nightspinner =	{label:'Night Spinner Troupe',			pts:175, upgrades:[], restricted:true};
var cobraT =		{label:'Engine of Vaul (Cobra)',		pts:250, upgrades:[engines], restricted:true};
var scorpionT =		{label:'Engine of Vaul (Scorpion)',		pts:250, upgrades:[engines], restricted:true};
var stormT =		{label:'Engine of Vaul (Storm Serpent)',pts:250, upgrades:[engines], restricted:true};
var voidT =			{label:'Engine of Vaul (Void Spinner)',	pts:250, upgrades:[engines], restricted:true};
var troupeList = 	{label:'TROUPES', options:[rangers, warwalkers, windrider, swords, nightspinner, cobraT, scorpionT, stormT, voidT]};

// INDIVIDUALS
var wraithgate =	{label:'Wraithgate',	pts:50,		upgrades:[],	upto:1};
var avatar =		{label:'Avatar',		pts:0,		upgrades:[],	upto:1};
var individualList = {label:'INDIVIDUALS', options:[avatar, wraithgate]};

// WARHOSTS
var aspects =		{label:'Aspect Warrior Warhost', 			pts:300,	upgrades:[exarchs, waveserpent, falcon], restricting:true};
var guardians =		{label:'Guardian Warhost',		 			pts:150,	upgrades:[heavyweapon, supportweapon, wraithguard, wraithlords], restricting:true};
var guardians2 =	{label:'Guardian Warhost (Wave Serpents)',	pts:350,	upgrades:[heavyweapon], restricting:true};
var warhostList =	{label:'WARHOSTS', options:[aspects, guardians, guardians2]};

// ALLIES
var spacecraft = 	{label:'Spacecraft', upto:1};
var wraithship =	{label:'Wraithship',	pts:150, upgrades:[], limited:true, group:spacecraft};
var dragonship =	{label:'Dragonship',	pts:300, upgrades:[], limited:true, group:spacecraft};
var warlockTitan = 	{label:'Warlock Titan',	pts:850, upgrades:[], limited:true, upto:1};
var phantomTitan =	{label:'Phantom Titan',	pts:750, upgrades:[], limited:true};
var revenants =		{label:'Revenant Titans',pts:650, upgrades:[], limited:true};
var nightwings =	{label:'Nightwings',	pts:300, upgrades:[], limited:true};	
var bombers =		{label:'Phoenix Bombers',pts:400, upgrades:[], limited:true};	
var vampire =		{label:'Vampire Raider',pts:200, upgrades:[], limited:true};	
var allyList = 		{label:'SPACESHIPS, AIRCRAFT &amp; TITANS', options:[wraithship, dragonship, warlockTitan, phantomTitan, revenants, nightwings, bombers, vampire]};

// DETAILS
var listData = {
	id:'Biel-Tan Craftworld', version:'NetEA FINAL',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:3, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
