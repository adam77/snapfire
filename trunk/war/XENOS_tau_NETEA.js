// UNIT OPTIONS
var spacecraft = 		{id:10, label:'Spacecraft', 	upto:1,		minimum:1};
var hero =				{id:11, label:'Hero Class Cruiser',			pts:0,	group:spacecraft,	optional:true};
var custodian =			{id:12, label:'Custodian Class Battleship',	pts:50,	group:spacecraft,	optional:true};
spacecraft.options =	[hero, custodian];
var tigers = 			{id:13, label:'Tiger Sharks', 	upto:1,		minimum:1};
var tiger =				{id:14, label:'Tiger Shark Aircraft',		pts:0,	group:tigers,	optional:true};
var tiger2 =			{id:15, label:'Tiger Shark Missile Aircraft',pts:0,	group:tigers,	optional:true};
tigers.options =		[tiger, tiger2];
var suits = 			{id:16, label:'Crisis Suits', 	upto:8,		minimum:4};
var suit =				{id:17, label:'XV8 Crisis Battlesuit',		pts:50,	group:suits,	optional:true};
suits.options =			[suit];
var kroots =			{id:18,	label:'Kroot',			upto:1,		minimum:1};
var kroot =				{id:19,	label:'9 Kroot Warriors',			pts:0,	group:kroots,	optional:true};
var kroot2 =			{id:20,	label:'14 Kroot Warriors',			pts:75,	group:kroots,	optional:true};
kroots.options =		[kroot,kroot2];
var hammers =			{id:21,	label:'Hammerheads',	upto:1,		minimum:1};
var hammer2 =			{id:22,	label:'4 Hammerheads',				pts:0,	group:hammers,	optional:true};
var hammer3 =			{id:23,	label:'6 Hammerheads',				pts:125,group:hammers,	optional:true};
hammers.options =		[hammer2,hammer3];
var skimmers =			{id:24,	label:'Skimmers',		upto:6,		minimum:6};
var tetra =				{id:25,	label:'Tetra',						pts:0,	group:skimmers,	optional:true};
var piranha2 =			{id:26,	label:'Piranha',					pts:0,  group:skimmers,	optional:true};
skimmers.options =		[tetra,piranha2];
var drones =			{id:27,	label:'Drones',			upto:1,		minimum:1};
var drone6 =			{id:28,	label:'6 Gun Drones',				pts:0,	group:drones,	optional:true};
var drone10 =			{id:29,	label:'10 Gun Drones',				pts:100,group:drones,	optional:true};
drones.options =		[drone6,drone10];
var warriors =			{id:30,	label:'Warriors',		upto:1,		minimum:1};
var warrior8 =			{id:31,	label:'8 Fire Warriors',			pts:0,	group:warriors,	optional:true};
var warriorF =			{id:32,	label:'6 Fire Warriors, 3 Devilfish',pts:0,	group:warriors,	optional:true};
warriors.options =		[warrior8,warriorF];


// UPGRADES (upto 3 per company)
var commander =		{id:50, label:'Shas\'el',				pts:50, 	upto:1};
var supreme =		{id:51, label:'Shas\'o (Supreme Commander)',pts:100, upto:1};
var g1 =			{id:52, label:'Upgrades',				upto:3};
var drone =			{id:53, label:'4 Gun Drones',			pts:100, 	upto:1, group:g1};
var piranha =		{id:54, label:'3 Piranhas',				pts:75,		upto:1,	group:g1};
var skyray =		{id:55,	label:'Skyray',					pts:100,	upto:1,	group:g1};
var hammer =		{id:56,	label:'2 Hammerheads',			pts:125,	upto:1,	group:g1};
var hound =			{id:58,	label:'3 Kroot Hound Packs',	pts:50,		upto:1};
var krootox =		{id:59,	label:'3 Krootox Herds',		pts:75,		upto:1};	
var ethereal =		{id:60,	label:'Ethereal',				pts:75,		upto:1, group:g1};
var finders =		{id:61, label:'2 Pathfinders, 1 Devilfish',pts:125,	upto:1,	group:g1};
var team =			{id:62,	label:'Bonded Team',			pts:25,		upto:1,	group:g1};
var broad =			{id:63,	label:'3 XV88 Broadsides',		pts:125,	upto:1,	group:g1};
var warrior =		{id:64,	label:'4 Fire Warriors',		pts:100,	upto:1,	group:g1};
var fishes =		{id:65,	label:'4 Fire Warriors, 2 Devilfish',pts:150,upto:1,group:g1};

// SUPPORT (3 per core, no upgrades allowed)
var supportList =	{id:510, label:'SUPPORT GROUPS', options:[
	{id:511, label:'Gun Drone Group', 			pts:150, 	upgrades:[], restricted:true, defaults:[{unit:drone6,count:1}]},
	{id:512, label:'Pathfinder Group', 			pts:175,	upgrades:[drone,piranha], restricted:true, units:'4 Pathfinders, 2 Devilfish'},
	{id:513, label:'Stealth Group', 			pts:275, 	upgrades:[drone], restricted:true, units:'6 XV15 Stealth Units'},
	{id:514, label:'Broadside Group', 			pts:300, 	upgrades:[], restricted:true, units:'6 XV88 Broadsides'},
	{id:515, label:'Recon Skimmer Group', 		pts:150, 	upgrades:[drone,piranha], restricted:true, defaults:[{unit:tetra,count:6}]},
	{id:516, label:'Armour Support Group', 		pts:250, 	upgrades:[skyray], restricted:true, defaults:[{unit:hammer2,count:1}]},
	{id:517, label:'Skysweep Support Group', 	pts:275, 	upgrades:[], restricted:true, units:'3 Skyrays'},
	{id:518, label:'Kroot Kindred', 			pts:175, 	upgrades:[hound, krootox], restricted:true, units:'Kroot Master Shaper', defaults:[{unit:kroot,count:1}]}
]};

// CADRES
var companyList =	{id:530, label:'CADRES', options:[
	{id:531, label:'Fire Warrior Cadre',		pts:225, upgrades:[ethereal,warrior,fishes,skyray,finders,drone,piranha,hammer,team,broad], restricting:true, defaults:[{unit:warrior8,count:1}]},
	{id:532, label:'Crisis Battlesuit Cadre',	pts:50, displayPts:250, defaults:[{unit:suit,count:4}], upgrades:[suit,commander,supreme], restricting:true}
]};

// AIR CASTE
var titanList = 	{id:520, label:'AIR CASTE', options:[
	{id:521, label:'Barracuda Squadron',	pts:150, upgrades:[], limited:true, units:'2 Barracuda Fighters'},
	{id:522, label:'Tiger Shark Squadron',	pts:225, upgrades:[], limited:true, defaults:[{unit:tiger,count:1}]},
	{id:523, label:'AX-1-0 Squadron',		pts:350, upgrades:[], limited:true, units:'2 AX-1-0 Aircraft'},
	{id:524, label:'Manta Dropship',		pts:700, upgrades:[], limited:true},
	{id:525, label:'Spacecraft',			pts:200, upgrades:[], limited:true, defaults:[{unit:hero,count:1}], upto:1},
	{id:526, label:'Orca Dropship',			pts:150, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Tau Third Phase Expansion', version:'NetEA v6.2, under development',
	sublists:[companyList, supportList, titanList],
	restriction:{limit:3, restricting:'Cadre', restricted:'Support Groups'}};

// CALLBACK
listLoaded();
