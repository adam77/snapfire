// MANDATORY UNITS
var kult2 =			{id:10, label:'Bikes', minimum:8, options:[
	{id:11, label:'Buggy',			pts:25, optional:true},
	{id:12, label:'Warbike',		pts:25, optional:true},
	{id:13, label:'Skorcha',		pts:25, optional:true}
]};
var kult3 =			{id:14, label:'Bikes',	minimum:16, options:[
	{id:15, label:'Buggy',			pts:25, optional:true},
	{id:16, label:'Warbike',		pts:25, optional:true},
	{id:17, label:'Skorcha',		pts:25, optional:true}
]};
var kult4 =			{id:18, label:'Bikes',	minimum:24, options:[
	{id:19, label:'Buggy',			pts:25, optional:true},
	{id:20, label:'Warbike',		pts:25, optional:true},
	{id:21, label:'Skorcha',		pts:25, optional:true}
]};
var blitz2 =		{id:22, label:'Wagonz',	minimum:4, options:[
	{id:23, label:'Gunwagon',		pts:35, optional:true},
	{id:24, label:'Deth Kopta',		pts:35, optional:true},
	{id:25, label:'Flakwagon',		pts:35, optional:true}
]};
var blitz3 =		{id:26, label:'Wagonz',	minimum:8, options:[
	{id:27, label:'Gunwagon',		pts:35, optional:true},
	{id:28, label:'Deth Kopta',		pts:35, optional:true},
	{id:29, label:'Flakwagon',		pts:35, optional:true}
]};
var blitz4 =		{id:30, label:'Wagonz',	minimum:12, options:[
	{id:31, label:'Gunwagon',		pts:35, optional:true},
	{id:32, label:'Deth Kopta',		pts:35, optional:true},
	{id:33, label:'Flakwagon',		pts:35, optional:true}
]};
var stormboyz2 =	{id:35, label:'Stormboyz',		pts:25, optional:true, minimum:6};
var stompa1 =		{id:37, label:'Stompa',			pts:75, optional:true, minimum:3};
var stompa2 =		{id:39, label:'Stompa',			pts:75, optional:true, minimum:6};
var stompa3 =		{id:41, label:'Stompa',			pts:75, optional:true, minimum:9};
var gun1 =			{id:43, label:'Big Gunz',		pts:25,	optional:true, minimum:5};
var gun2 =			{id:45, label:'Big Gunz',		pts:25,	optional:true, minimum:10};
var gun3 =			{id:47, label:'Big Gunz',		pts:25,	optional:true, minimum:15};
var fightaBomba =	{id:49, label:'Fighta Bomba',	pts:50, optional:true, minimum:3, upto:9};

// UPGRADES
var boyz =				{id:50, label:'Boyz', 							pts:25};
var commandos =			{id:51, label:'Commandos',						pts:25};
var stormboyz =			{id:52, label:'Stormboyz',						pts:25};
var buggy =				{id:53, label:'Buggy',							pts:25};
var warbike =			{id:54, label:'Warbike',						pts:25};
var skorcha =			{id:55, label:'Skorcha',						pts:25};
var bigGun =			{id:56, label:'Big Gun',						pts:25};
var killaKan =			{id:57, label:'Killa Kan',						pts:25};
var battlewagon =		{id:58, label:'Battlewagon',					pts:35};
var dethKopta =			{id:59, label:'Deth Kopta',					pts:35};
var dreadnought =		{id:60, label:'Dreadnought',					pts:35};
var flakwagon =			{id:61, label:'Flakwagon',						pts:35};
var gunwagon =			{id:62, label:'Gunwagon',						pts:35};
var nobz1 =				{id:63, label:'Nobz',							pts:35, upto:1};
var nobz2 =				{id:64, label:'Nobz',							pts:35, upto:2};
var nobz3 =				{id:65, label:'Nobz',							pts:35, upto:3};
var nobz4 =				{id:66, label:'Nobz',							pts:35, upto:4};
var nobz6 =				{id:67, label:'Nobz',							pts:35, upto:6};
var oddboy1 =			{id:68, label:'Oddboy',						pts:50, upto:1};
var oddboy2 =			{id:69, label:'Oddboy',						pts:50, upto:2};
var oddboy3 =			{id:70, label:'Oddboy',						pts:50, upto:3};
var stompa =			{id:71, label:'Stompa',						pts:75};
var battleFortress =	{id:72, label:'Battlefortress',				pts:125};
var gunFortress =		{id:73, label:'Gunfortress',					pts:135};
var gunFortress1 =		{id:74, label:'Gunfortress',					pts:135, upto:1};
var gunFortress2 =		{id:75, label:'Gunfortress',					pts:135, upto:2};
var gunFortress3 =		{id:76, label:'Gunfortress',					pts:135, upto:3};
var supaStompa1 =		{id:77, label:'Supa Stompa',					pts:275, upto:1};
var supaStompa2 =		{id:78, label:'Supa Stompa',					pts:275, upto:2};
var supaStompa3 =		{id:79, label:'Supa Stompa',					pts:275, upto:3};
var battlekrooza =		{id:80, label:'Battlekrooza',					pts:50, upto:1};
var warlord =			{id:81, label:'Warlord',						pts:0, general:true};
var grotz =				{id:82, label:'Grotz',							pts:0};

// WARBANDS
var warbandList =		{id:516, label:'WAR HORDES', options:[
	{id:500, label:'Warband',				pts:200, units:'2 Nobz, 6 Boyz, 2 Grotz', upgrades:[warlord, boyz, grotz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz2, oddboy1, stompa, battleFortress, gunFortress]},
	{id:501, label:'Warband (Big)',			pts:350, units:'4 Nobz, 12 Boyz, 4 Grotz', upgrades:[warlord, boyz, grotz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz4, oddboy2, stompa, battleFortress, gunFortress]},
	{id:502, label:'Warband (\'Uge)',		pts:500, units:'6 Nobz, 18 Boyz, 6 Grotz', upgrades:[warlord, boyz, grotz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz6, oddboy3, stompa, battleFortress, gunFortress]},
	{id:503, label:'Stormboyz Warhorde',	pts:0,		displayPts:150, upgrades:[stormboyz2, commandos, buggy, warbike, skorcha, dethKopta]},
	{id:504, label:'Kult of Speed',			pts:0,		displayPts:200, upgrades:[kult2, dethKopta, flakwagon, gunwagon, oddboy1]},
	{id:505, label:'Kult of Speed (Big)',	pts:-50,	displayPts:350, upgrades:[kult3, dethKopta, flakwagon, gunwagon, oddboy2]},
	{id:506, label:'Kult of Speed (\'Uge)',	pts:-100, 	displayPts:500, upgrades:[kult4, dethKopta, flakwagon, gunwagon, oddboy3]},
	{id:507, label:'Blitz Brigade',			pts:10, 	displayPts:150, upgrades:[buggy, warbike, skorcha, blitz2, oddboy1, gunFortress1]},
	{id:508, label:'Blitz Brigade (Big)',	pts:-30, 	displayPts:250, upgrades:[buggy, warbike, skorcha, blitz3, oddboy2, gunFortress2]},
	{id:509, label:'Blitz Brigade (\'Uge)',	pts:-70, 	displayPts:350, upgrades:[buggy, warbike, skorcha, blitz4, oddboy3, gunFortress3]},
	{id:510, label:'Mekboy Stompamob',		pts:0, 		displayPts:225, upgrades:[killaKan, dreadnought, flakwagon, stompa1, supaStompa1]},
	{id:511, label:'Mekboy Stompamob (Big)',pts:-50,	displayPts:400, upgrades:[killaKan, dreadnought, flakwagon, stompa2, supaStompa2]},
	{id:512, label:'Mekboy Stompamob (\'Uge)',pts:-100,	displayPts:575, upgrades:[killaKan, dreadnought, flakwagon, stompa3, supaStompa3]},
	{id:513, label:'Mekboy Gunmob',			pts:0, 		displayPts:125, upgrades:[warlord, gun1, battlewagon, flakwagon, nobz1, oddboy1]},
	{id:514, label:'Mekboy Gunmob (Big)',	pts:-25, 	displayPts:225, upgrades:[warlord, gun2, battlewagon, flakwagon, nobz2, oddboy2]},
	{id:515, label:'Mekboy Gunmob (\'Uge)',	pts:-50, 	displayPts:325, upgrades:[warlord, gun3, battlewagon, flakwagon, nobz3, oddboy3]}
]};

// OTHER
var spacecraft =		{id:519, label:'Spacecraft',	upto:1};
var othersList = 		{id:524, label:'AIRCRAFT, SPACECRAFT &amp; GARGANTS', options:[
 	{id:517, label:'Fighta Squadron',	pts:0, displayPts:150, upgrades:[fightaBomba], limited:true},
	{id:518, label:'Landa',				pts:200, upgrades:[], limited:true},
	{id:520, label:'Kill Kroozer',		pts:200, upgrades:[], limited:true, group:spacecraft},
	{id:521, label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft},
	{id:522, label:'Gargant',			pts:650, upgrades:[warlord], limited:true},
	{id:523, label:'Great Gargant',		pts:850, upgrades:[warlord], limited:true}
]};

// DETAILS
var listData = {
	id:'Ghazgkhull Thraka\'s War Horde', version:'NetEA Compendium 1.0',
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
