// OPTIONALS
var boyzOp =			{id:10, label:'Boyz', 	minimum:6};
	var boy1 =			{id:11, label:'Boyz',	pts:25, optional:true, group:boyzOp};
	boyzOp.options = 	[boy1];
var nobzOp =			{id:12, label:'Nobz', 	minimum:2, upto:3};
	var nob1 =			{id:13, label:'Nobz',	pts:35, optional:true, group:nobzOp};
	nobzOp.options = 	[nob1];
var boyzOp2 =			{id:10, label:'Boyz', 	minimum:12};
	var boy2 =			{id:11, label:'Boyz',	pts:25, optional:true, group:boyzOp2};
	boyzOp2.options = 	[boy2];
var nobzOp2 =			{id:12, label:'Nobz', 	minimum:4, upto:6};
	var nob2 =			{id:13, label:'Nobz',	pts:35, optional:true, group:nobzOp2};
	nobzOp2.options = 	[nob2];
var boyzOp3 =			{id:10, label:'Boyz', 	minimum:18};
	var boy3 =			{id:11, label:'Boyz',	pts:25, optional:true, group:boyzOp3};
	boyzOp3.options = 	[boy3];
var nobzOp3 =			{id:12, label:'Nobz', 	minimum:6, upto:9};
	var nob3 =			{id:13, label:'Nobz',	pts:35, optional:true, group:nobzOp3};
	nobzOp3.options = 	[nob3];

// UPGRADES
var boyz =				{id:50, label:'Boyz', 							pts:25};
var commandos =			{id:51, label:'Two Wild Boyz',					pts:25};
var katapult =			{id:52, label:'Squig Katapult',					pts:25};
var boarboyz =			{id:53, label:'Boarboyz',						pts:25};
var nobz1 =				{id:54, label:'Nobz',							pts:35, upto:1};
var nobz2 =				{id:55, label:'Nobz',							pts:35, upto:2};
var nobz3 =				{id:56, label:'Nobz',							pts:35, upto:3};
var squiggoth =			{id:57, label:'Squiggoth',						pts:50};
var wyrdboy1 =			{id:58, label:'Wyrdboy',						pts:50, upto:1};
var wyrdboy2 =			{id:59, label:'Wyrdboy',						pts:50, upto:2};
var wyrdboy3 =			{id:60, label:'Wyrdboy',						pts:50, upto:3};
var orkeosaurus1 =		{id:61, label:'Orkeosaurus',					pts:150, upto:1};
var orkeosaurus2 =		{id:62, label:'Orkeosaurus',					pts:150, upto:2};
var orkeosaurus3 =		{id:63, label:'Orkeosaurus',					pts:150, upto:3};
var junkaNob1 =			{id:64, label:'Junkatrukk and Nob',				pts:35, upto:1};
var junkaNob2 =			{id:65, label:'Junkatrukk and Nob',				pts:35, upto:2};
var junkaNob3 =			{id:66, label:'Junkatrukk and Nob',				pts:35, upto:3};

//var battlewagon =		{id:58, label:'Battlewagon',					pts:35};
//var dethKopta =			{id:59, label:'Deth Kopta',						pts:35};
//var dreadnought =		{id:60, label:'Dreadnought',					pts:35};
//var flakwagon =			{id:61, label:'Flakwagon',						pts:35};
//var gunwagon =			{id:62, label:'Gunwagon',						pts:35};

//var nobz4 =				{id:66, label:'Nobz',							pts:35, upto:4};
//var nobz6 =				{id:67, label:'Nobz',							pts:35, upto:6};

//var stompa =			{id:71, label:'Stompa',							pts:75};
//var battleFortress =	{id:72, label:'Battlefortress',					pts:125};
//var gunFortress =		{id:73, label:'Gunfortress',					pts:135};
//var gunFortress1 =		{id:74, label:'Gunfortress',					pts:135, upto:1};
//var gunFortress2 =		{id:75, label:'Gunfortress',					pts:135, upto:2};
//var gunFortress3 =		{id:76, label:'Gunfortress',					pts:135, upto:3};
//var supaStompa1 =		{id:77, label:'Supa Stompa',					pts:250, upto:1};
//var supaStompa2 =		{id:78, label:'Supa Stompa',					pts:250, upto:2};
//var supaStompa3 =		{id:79, label:'Supa Stompa',					pts:250, upto:3};
//var battlekrooza =		{id:80, label:'Battlekrooza',					pts:50, upto:1};
//var warlord =			{id:81, label:'Warlord',						pts:0, upto:1};

// WARBANDS
var warband =			{id:500, label:'Warband',				pts:-20,	displayPts:200,		defaults:[{unit:nob1,count:2},{unit:boy1,count:6}], upgrades:[nobzOp, boyzOp]};
var bigWarband =		{id:501, label:'Warband (Big)',			pts:-90, 	displayPts:350,		defaults:[{unit:nob2,count:4},{unit:boy2,count:12}], upgrades:[nobzOp2, boyzOp2]};
var ugeWarband =		{id:502, label:'Warband (\'Uge)',		pts:-160, 	displayPts:500,		defaults:[{unit:nob3,count:6},{unit:boy3,count:18}], upgrades:[nobzOp3, boyzOp3]};
//var stormboyzBand =		{id:503, label:'Stormboyz Warhorde',	pts:0,		displayPts:150, defaults:[{unit:stormboyz2,count:6}], upgrades:[stormboyz2, commandos, buggy, warbike, skorcha, dethKopta]};
//var kult =				{id:504, label:'Kult of Speed',			pts:0,		displayPts:200, defaults:[{unit:buggy2, count:8}], upgrades:[buggy2, warbike2, skorcha2, dethKopta, flakwagon, gunwagon, oddboy1]};
//var bigKult =			{id:505, label:'Kult of Speed (Big)',	pts:-50,	displayPts:350, defaults:[{unit:buggy3, count:16}], upgrades:[buggy3, warbike3, skorcha3, dethKopta, flakwagon, gunwagon, oddboy2]};
//var ugeKult =			{id:506, label:'Kult of Speed (\'Uge)',	pts:-100, 	displayPts:500, defaults:[{unit:buggy4, count:24}], upgrades:[buggy4, warbike4, skorcha4, dethKopta, flakwagon, gunwagon, oddboy3]};
//var blitz =				{id:507, label:'Blitz Brigade',			pts:10, 	displayPts:150, defaults:[{unit:gunwagon2, count:4}], upgrades:[buggy, warbike, skorcha, gunwagon2, deth2, flak2, oddboy1, gunFortress1]};
//var bigBlitz =			{id:508, label:'Blitz Brigade (Big)',	pts:-30, 	displayPts:250, defaults:[{unit:gunwagon3, count:8}], upgrades:[buggy, warbike, skorcha, gunwagon3, deth3, flak3, oddboy2, gunFortress2]};
//var ugeBlitz =			{id:509, label:'Blitz Brigade (\'Uge)',	pts:-70, 	displayPts:350, defaults:[{unit:gunwagon4, count:12}], upgrades:[buggy, warbike, skorcha, gunwagon4, deth4, flak4, oddboy3, gunFortress3]};
//var stompaMob = 		{id:510, label:'Mekboy Stompamob',		pts:0, 		displayPts:225, defaults:[{unit:stompa1, count:3}], upgrades:[killaKan, dreadnought, flakwagon, stompa1, supaStompa1]};
//var gunmob =			{id:513, label:'Mekboy Gunmob',			pts:0, 		displayPts:125, defaults:[{unit:gun1, count:5}], 	upgrades:[warlord, gun1, battlewagon, flakwagon, nobz1, oddboy1]};
//var bigGunmob =			{id:514, label:'Mekboy Gunmob (Big)',	pts:-25, 	displayPts:225, defaults:[{unit:gun2, count:10}], 	upgrades:[warlord, gun2, battlewagon, flakwagon, nobz2, oddboy2]};
//var ugeGunmob =			{id:515, label:'Mekboy Gunmob (\'Uge)',	pts:-50, 	displayPts:325, defaults:[{unit:gun3, count:15}], 	upgrades:[warlord, gun3, battlewagon, flakwagon, nobz3, oddboy3]};
var warbandList =		{id:516, label:'WAR HORDES', options:[warband, bigWarband, ugeWarband]};

// OTHER
//var fightaSquadron = 	{id:517, label:'Fighta Squadron',	pts:0, displayPts:150, defaults:[{unit:fightaBomba,count:3}], upgrades:[fightaBomba], limited:true};
//var landa =				{id:518, label:'Landa',				pts:200, upgrades:[], limited:true};
//var spacecraft =		{id:519, label:'Spacecraft',	upto:1};
//var killKroozer =		{id:520, label:'Kill Kroozer',		pts:200, upgrades:[], limited:true, group:spacecraft};
//var battleKroozer =		{id:521, label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft};
//var gargant =			{id:522, label:'Gargant',			pts:650, upgrades:[warlord], limited:true};
//var greatGargant =		{id:523, label:'Great Gargant',		pts:850, upgrades:[warlord], limited:true};
//var othersList = 		{id:524, label:'AIRCRAFT, SPACECRAFT &amp; GARGANTS', options:[fightaSquadron, landa, killKroozer, battleKroozer, gargant, greatGargant]};

// DETAILS
var listData = {
	id:'Snagga-Snagga\'s Feral Orks', version:'EA Swordwind',
	sublists:[warbandList]};

// CALLBACK
listLoaded();
