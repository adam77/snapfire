// MANDATORY UNITS
var fightaBomba =	{id:65, label:'Fighta Bomba',	pts:50, optional:true, minimum:3, upto:9};
var boy1 =			{id:101, label:'Boyz (trukk)',	pts:25,	optional:true, minimum:3};
var boy2 =			{id:103, label:'Boyz (trukk)',	pts:25,	optional:true, minimum:6};
var boy3 =			{id:105, label:'Boyz (trukk)',	pts:25,	optional:true, minimum:9};
var nob1 =			{id:10, label:'Nobz',	upto:2, minimum:1, options:[
	{id:12, label:'Nobz (trukk)',	pts:35,	optional:true},
	{id:120, label:'Nobz (bikes)',	pts:35, optional:true}
]};
var nob2 =			{id:13, label:'Nobz',	upto:4, minimum:2, options:[
	{id:15, label:'Nobz (trukk)',	pts:35,	optional:true},
	{id:121, label:'Nobz (bikes)',	pts:35, optional:true}
]};
var nob3 =			{id:16, label:'Nobz',	upto:6, minimum:3, options:[
	{id:18, label:'Nobz (trukk)',	pts:35,	optional:true},
	{id:122, label:'Nobz (bikes)',	pts:35, optional:true}
]};
var kult1 =			{id:19, label:'Bikes',	minimum:4, options:[
	{id:20, label:'Buggy',			pts:25, optional:true},
	{id:21, label:'Warbike',		pts:25, optional:true},
	{id:22, label:'Skorcha',		pts:25, optional:true}
]};
var kult2 =			{id:23, label:'Bikes',	minimum:8, options:[
	{id:24, label:'Buggy',			pts:25, optional:true},
	{id:25, label:'Warbike',		pts:25, optional:true},
	{id:26, label:'Skorcha',		pts:25, optional:true}
]};
var kult3 =			{id:27, label:'Bikes',	minimum:12, options:[
	{id:28, label:'Buggy',			pts:25, optional:true},
	{id:29, label:'Warbike',		pts:25, optional:true},
	{id:30, label:'Skorcha',		pts:25, optional:true}
]};
var kult1b =		{id:31, label:'Bikes',	minimum:8, options:[
	{id:32, label:'Buggy',			pts:25, optional:true},
	{id:33, label:'Warbike',		pts:25, optional:true},
	{id:34, label:'Skorcha',		pts:25, optional:true}
]};
var kult2b =		{id:35, label:'Bikes',	minimum:16, options:[
	{id:36, label:'Buggy',			pts:25, optional:true},
	{id:37, label:'Warbike',		pts:25, optional:true},
	{id:38, label:'Skorcha',		pts:25, optional:true}
]};
var kult3b =		{id:39, label:'Bikes',	minimum:24, options:[
	{id:40, label:'Buggy',			pts:25, optional:true},
	{id:41, label:'Warbike',		pts:25, optional:true},
	{id:42, label:'Skorcha',		pts:25, optional:true}
]};
var blitz1 =		{id:43, label:'Wagonz',	minimum:4, options:[
	{id:44, label:'Gunwagon',		pts:35, optional:true},
	{id:45, label:'Deth Kopta',		pts:35, optional:true},
	{id:46, label:'Flakwagon',		pts:35, optional:true}
]};
var blitz2 =		{id:47, label:'Wagonz',	minimum:8, options:[
	{id:48, label:'Gunwagon',		pts:35, optional:true},
	{id:49, label:'Deth Kopta',		pts:35, optional:true},
	{id:50, label:'Flakwagon',		pts:35, optional:true}
]};
var blitz3 =		{id:51, label:'Wagonz',	minimum:12, optoins:[
	{id:52, label:'Gunwagon',		pts:35, optional:true},
	{id:53, label:'Deth Kopta',		pts:35, optional:true},
	{id:54, label:'Flakwagon',		pts:35, optional:true}
]};
var forts1 =		{id:55, label:'Fortresses',	upto:2, minimum:2, options:[
	{id:56, label:'Battlefortress',		pts:0, optional:true},
	{id:57, label:'Gunfortress',		pts:0, optional:true}
]};
var forts2 =		{id:58, label:'Fortresses',	upto:4, minimum:4, options:[
	{id:59, label:'Battlefortress',		pts:0, optional:true},
	{id:60, label:'Gunfortress',		pts:0, optional:true}
]};
var forts3 =		{id:61, label:'Fortresses',	upto:6, minimum:6, options:[
	{id:62, label:'Battlefortress',		pts:0, optional:true},
	{id:63, label:'Gunfortress',		pts:0, optional:true}
]};

// UPGRADES
var boyz =				{id:66, label:'Boyz', 							pts:25};
var commandos =			{id:67, label:'Commandos',						pts:25};
var stormboyz =			{id:68, label:'Stormboyz',						pts:25};
var buggy =				{id:69, label:'Buggy',							pts:25};
var warbike =			{id:70, label:'Warbike',						pts:25};
var skorcha =			{id:71, label:'Skorcha',						pts:25};
var bigGun =			{id:72, label:'Big Gun',						pts:25};
var battlewagon =		{id:73, label:'Battlewagon',					pts:35};
var dethKopta =			{id:74, label:'Deth Kopta',						pts:35};
var dreadnought =		{id:75, label:'Dreadnought',					pts:35};
var flakwagon =			{id:76, label:'Flakwagon',						pts:35};
var gunwagon =			{id:77, label:'Gunwagon',						pts:35};
var nobgroup1 =			{id:78, label:'Nobz',	upto:1, options:[
	{id:79, label:'Nobz',						pts:35},
	{id:80, label:'Nobz (bikes)',				pts:35}
]};
var nobgroup2 =			{id:81, label:'Nobz',	upto:2, options:[
	{id:82, label:'Nobz',						pts:35},
	{id:83, label:'Nobz (bikes)',				pts:35}
]};
var nobgroup3 =			{id:84, label:'Nobz',	upto:3, options:[
	{id:85, label:'Nobz',						pts:35},
	{id:86, label:'Nobz (bikes)',				pts:35}
]};
var speedsta1 =			{id:87, label:'Mekboy Speedsta',				pts:50, upto:1};
var speedsta2 =			{id:88, label:'Mekboy Speedsta',				pts:50, upto:2};
var speedsta3 =			{id:89, label:'Mekboy Speedsta',				pts:50, upto:3};
var battleFortress =	{id:90, label:'Battlefortress',					pts:125};
var battleFortress1 =	{id:91, label:'Extra Battlefortress',			pts:125, upto:1};
var battleFortress2 =	{id:92, label:'Extra Battlefortress',			pts:125, upto:2};
var battleFortress3 =	{id:93, label:'Extra Battlefortress',			pts:125, upto:3};
var gunFortress =		{id:94, label:'Gunfortress',					pts:135};
var gunFortress1 =		{id:95, label:'Extra Gunfortress',				pts:135, upto:1};
var gunFortress2 =		{id:96, label:'Extra Gunfortress',				pts:135, upto:2};
var gunFortress3 =		{id:97, label:'Extra Gunfortress',				pts:135, upto:3};
var battlekrooza =		{id:98, label:'Battlekrooza',					pts:50, upto:1};
var badork =			{id:110, label:'Mekboy Bad Ork Bikeboy',		pts:0, upto:1};

// WARBANDS
var warbandList =		{id:515, label:'FORMATIONS', options:[
	{id:500, label:'Speed Freaks Warband',			pts:-10, displayPts:200, upgrades:[nob1, boy1, stormboyz, kult1, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, speedsta1, badork]},
	{id:501, label:'Speed Freaks Warband (Big)',	pts:-70, displayPts:350, upgrades:[nob2, boy2, stormboyz, kult2, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, speedsta2, badork]},
	{id:502, label:'Speed Freaks Warband (\'Uge)',	pts:-130,displayPts:500, upgrades:[nob3, boy3, stormboyz, kult3, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, speedsta3, badork]},
	{id:503, label:'Kult of Speed',					pts:0, 	 displayPts:200, upgrades:[kult1b, dethKopta, flakwagon, gunwagon, speedsta1, badork]},
	{id:504, label:'Kult of Speed (Big)',			pts:-50, displayPts:350, upgrades:[kult2b, dethKopta, flakwagon, gunwagon, speedsta2, badork]},
	{id:505, label:'Kult of Speed (\'Uge)',			pts:-100,displayPts:500, upgrades:[kult3b, dethKopta, flakwagon, gunwagon, speedsta3, badork]},
	{id:506, label:'Blitz Brigade',					pts:10,  displayPts:150, upgrades:[boyz, buggy, warbike, skorcha, blitz1, speedsta1, gunFortress1, nobgroup1, badork]},
	{id:507, label:'Blitz Brigade (Big)',			pts:-30, displayPts:250, upgrades:[boyz, buggy, warbike, skorcha, blitz2, speedsta2, gunFortress2, nobgroup2, badork]},
	{id:508, label:'Blitz Brigade (\'Uge)',			pts:-70, displayPts:350, upgrades:[boyz, buggy, warbike, skorcha, blitz3, speedsta3, gunFortress3, nobgroup3, badork]},
	{id:509, label:'Warbike Outriders',				pts:150, units:'5 Warbikes', upgrades:[badork]},
	{id:510, label:'Warbike Outriders (Big)',		pts:225, units:'10 Warbikes', upgrades:[badork]},
	{id:511, label:'Warbike Outriders (\'Uge)',		pts:300, units:'15 Warbikes', upgrades:[badork]},
	{id:512, label:'Fortress Mob',					pts:275, limited:true, upgrades:[forts1, boyz, flakwagon, nobgroup1, battleFortress1, gunFortress1, badork]},
	{id:513, label:'Fortress Mob (Big)',			pts:500, limited:true, upgrades:[forts2, boyz, flakwagon, nobgroup2, battleFortress2, gunFortress2, badork]},
	{id:514, label:'Fortress Mob (\'Uge)',			pts:700, limited:true, upgrades:[forts3, boyz, flakwagon, nobgroup3, battleFortress3, gunFortress3, badork]}
]};

// OTHER
var spacecraft =		{id:518, label:'Spacecraft',	upto:1};
var othersList = 		{id:521, label:'AIRCRAFT and SPACECRAFT', options:[
 	{id:516, label:'Fighta Squadron',	pts:0, displayPts:150, upgrades:[fightaBomba], limited:true},
	{id:517, label:'Landa',				pts:200, upgrades:[], limited:true},
	{id:519, label:'Kill Kroozer',		pts:200, upgrades:[], limited:true, group:spacecraft},
	{id:520, label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft}
], limited:true};

// DETAILS
var listData = {
	id:'Burning Death Speed Freeks', version:'White Dwarf 291',
	notes:[
		'Exactly one Mekboy Bad Ork Bikeboy must be selected.',
		'Enough transport must be purchased to ensure all units with a speed of less than 30cm have transport.'
	],
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
