// OPTIONALS
var kult2 =			{id:10, label:'Bikes', minimum:8};
	var buggy2 =		{id:11, label:'Buggy',			pts:25, optional:true, group:kult2};
	var warbike2 =		{id:12, label:'Warbike',		pts:25, optional:true, group:kult2};
	var skorcha2 =		{id:13, label:'Skorcha',		pts:25, optional:true, group:kult2};
	kult2.options = 	[buggy2, warbike2, skorcha2];
var kult3 =			{id:14, label:'Bikes',	minimum:16};
	var buggy3 =		{id:15, label:'Buggy',			pts:25, optional:true, group:kult3};
	var warbike3 =		{id:16, label:'Warbike',		pts:25, optional:true, group:kult3};
	var skorcha3 =		{id:17, label:'Skorcha',		pts:25, optional:true, group:kult3};
	kult3.options = 	[buggy3, warbike3, skorcha3];
var kult4 =			{id:18, label:'Bikes',	minimum:24};
	var buggy4 =		{id:19, label:'Buggy',			pts:25, optional:true, group:kult4};
	var warbike4 =		{id:20, label:'Warbike',		pts:25, optional:true, group:kult4};
	var skorcha4 =		{id:21, label:'Skorcha',		pts:25, optional:true, group:kult4};
	kult4.options = 	[buggy4, warbike4, skorcha4];
var blitz2 =		{id:22, label:'Wagonz',	minimum:4};
	var gunwagon2 =		{id:23, label:'Gunwagon',			pts:35, optional:true, group:blitz2};
	var deth2 =			{id:24, label:'Deth Kopta',		pts:35, optional:true, group:blitz2};
	var flak2 =			{id:25, label:'Flakwagon',			pts:35, optional:true, group:blitz2};
	blitz2.options = 	[gunwagon2, deth2, flak2];
var blitz3 =		{id:26, label:'Wagonz',	minimum:8};
	var gunwagon3 =		{id:27, label:'Gunwagon',			pts:35, optional:true, group:blitz3};
	var deth3 =			{id:28, label:'Deth Kopta',		pts:35, optional:true, group:blitz3};
	var flak3 =			{id:29, label:'Flakwagon',			pts:35, optional:true, group:blitz3};
	blitz3.options = 	[gunwagon3, deth3, flak3];
var blitz4 =		{id:30, label:'Wagonz',	minimum:12};
	var gunwagon4 =		{id:31, label:'Gunwagon',			pts:35, optional:true, group:blitz4};
	var deth4 =			{id:32, label:'Deth Kopta',		pts:35, optional:true, group:blitz4};
	var flak4 =			{id:33, label:'Flakwagon',			pts:35, optional:true, group:blitz4};
	blitz4.options = 	[gunwagon4, deth4, flak4];
var stormerz =		{id:34, label:'Stormboyz',	minimum:6};
	var stormboyz2 =	{id:35, label:'Stormboyz',		pts:25, optional:true, group:stormerz};
	var commandoz2 =		{id:90, label:'Commandos',	pts:25, optional:true, group:stormerz};
	stormerz.options =	[stormboyz2, commandoz2];
var stompas1 =		{id:36, label:'Stompas', minimum:3};
	var stompa1 =			{id:37, label:'Stompa',		pts:75, optional:true, group:stompas1};
	stompas1.options =		[stompa1];
var stompas2 =		{id:38, label:'Stompas', minimum:6};
	var stompa2 =			{id:39, label:'Stompa',		pts:75, optional:true, group:stompas2};
	stompas2.options =		[stompa2];
var stompas3 =		{id:40, label:'Stompas', minimum:9};
	var stompa3 =			{id:41, label:'Stompa',		pts:75, optional:true, group:stompas3};
	stompas3.options =		[stompa3];
var gunz1 =			{id:42, label:'Gunz', minimum:5};
	var gun1 =				{id:43, label:'Big Gunz',		pts:25,	optional:true, group:gunz1};
	gunz1.options =			[gun1];
var gunz2 =			{id:44, label:'Gunz', minimum:10};
	var gun2 =				{id:45, label:'Big Gunz',		pts:25,	optional:true, group:gunz2};
	gunz2.options =			[gun2];
var gunz3 =			{id:46, label:'Gunz', minimum:15};
	var gun3 =				{id:47, label:'Big Gunz',		pts:25,	optional:true, group:gunz3};
	gunz3.options =			[gun3];
var bombas =		{id:48, label:'Bombas', minimum:3, upto:9};
	var fightaBomba =		{id:49, label:'Fighta Bomba',	pts:50, optional:true, group:bombas};
	bombas.options =		[fightaBomba];
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
var battleFortress =	{id:72, label:'Battlefortress',				pts:115};
var gunFortress =		{id:73, label:'Gunfortress',					pts:125};
var gunFortress1 =		{id:74, label:'Gunfortress',					pts:135, upto:1};
var gunFortress2 =		{id:75, label:'Gunfortress',					pts:135, upto:2};
var gunFortress3 =		{id:76, label:'Gunfortress',					pts:135, upto:3};
var supaStompa1 =		{id:77, label:'Supa Stompa',					pts:250, upto:1};
var supaStompa2 =		{id:78, label:'Supa Stompa',					pts:250, upto:2};
var supaStompa3 =		{id:79, label:'Supa Stompa',					pts:250, upto:3};
var battlekrooza =		{id:80, label:'Battlekrooza',					pts:100, upto:1};
var warlord =			{id:81, label:'Warlord',						pts:0, upto:1};
var grotz =				{id:82, label:'Grotz',							pts:0};

// WARBANDS
var warband =			{id:500, label:'Warband',				pts:200, units:'2 Nobz, 6 Boyz, 2 Grotz', upgrades:[warlord, boyz, grotz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz2, oddboy1, stompa, battleFortress, gunFortress]};
var bigWarband =		{id:501, label:'Warband (Big)',			pts:350, units:'4 Nobz, 12 Boyz, 4 Grotz', upgrades:[warlord, boyz, grotz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz4, oddboy2, stompa, battleFortress, gunFortress]};
var ugeWarband =		{id:502, label:'Warband (\'Uge)',		pts:500, units:'6 Nobz, 18 Boyz, 6 Grotz', upgrades:[warlord, boyz, grotz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz6, oddboy3, stompa, battleFortress, gunFortress]};
var stormboyzBand =		{id:503, label:'Stormboyz Warhorde',	pts:0,		displayPts:150, defaults:[{unit:stormboyz2,count:6}], upgrades:[stormboyz2, commandoz2, buggy, warbike, skorcha, dethKopta]};
var kult =				{id:504, label:'Kult of Speed',			pts:0,		displayPts:200, defaults:[{unit:buggy2, count:8}], upgrades:[buggy2, warbike2, skorcha2, dethKopta, flakwagon, gunwagon, oddboy1]};
var bigKult =			{id:505, label:'Kult of Speed (Big)',	pts:-50,	displayPts:350, defaults:[{unit:buggy3, count:16}], upgrades:[buggy3, warbike3, skorcha3, dethKopta, flakwagon, gunwagon, oddboy2]};
var ugeKult =			{id:506, label:'Kult of Speed (\'Uge)',	pts:-100, 	displayPts:500, defaults:[{unit:buggy4, count:24}], upgrades:[buggy4, warbike4, skorcha4, dethKopta, flakwagon, gunwagon, oddboy3]};
var blitz =				{id:507, label:'Blitz Brigade',			pts:10, 	displayPts:150, defaults:[{unit:gunwagon2, count:4}], upgrades:[buggy, warbike, skorcha, gunwagon2, deth2, flak2, oddboy1, gunFortress1]};
var bigBlitz =			{id:508, label:'Blitz Brigade (Big)',	pts:-30, 	displayPts:250, defaults:[{unit:gunwagon3, count:8}], upgrades:[buggy, warbike, skorcha, gunwagon3, deth3, flak3, oddboy2, gunFortress2]};
var ugeBlitz =			{id:509, label:'Blitz Brigade (\'Uge)',	pts:-70, 	displayPts:350, defaults:[{unit:gunwagon4, count:12}], upgrades:[buggy, warbike, skorcha, gunwagon4, deth4, flak4, oddboy3, gunFortress3]};
var stompaMob = 		{id:510, label:'Mekboy Stompamob',		pts:0, 		displayPts:225, defaults:[{unit:stompa1, count:3}], upgrades:[killaKan, dreadnought, flakwagon, stompa1, supaStompa1]};
//var bigStompaMob =		{id:511, label:'Mekboy Stompamob (Big)',pts:-50,	displayPts:400, defaults:[{unit:stompa2, count:6}], upgrades:[killaKan, dreadnought, flakwagon, stompa2, supaStompa2]};
//var ugeStompaMob = 		{id:512, label:'Mekboy Stompamob (\'Uge)',pts:-100,	displayPts:575, defaults:[{unit:stompa3, count:9}], upgrades:[killaKan, dreadnought, flakwagon, stompa3, supaStompa3]};
var gunmob =			{id:513, label:'Mekboy Gunmob',			pts:0, 		displayPts:125, defaults:[{unit:gun1, count:5}], 	upgrades:[warlord, gun1, battlewagon, flakwagon, nobz1, oddboy1]};
var bigGunmob =			{id:514, label:'Mekboy Gunmob (Big)',	pts:-25, 	displayPts:225, defaults:[{unit:gun2, count:10}], 	upgrades:[warlord, gun2, battlewagon, flakwagon, nobz2, oddboy2]};
var ugeGunmob =			{id:515, label:'Mekboy Gunmob (\'Uge)',	pts:-50, 	displayPts:325, defaults:[{unit:gun3, count:15}], 	upgrades:[warlord, gun3, battlewagon, flakwagon, nobz3, oddboy3]};
var warbandList =		{id:516, label:'WAR HORDES', options:[warband, bigWarband, ugeWarband, stormboyzBand, kult, bigKult, ugeKult, blitz, bigBlitz, ugeBlitz, stompaMob, /*bigStompaMob, ugeStompaMob,*/ gunmob, bigGunmob, ugeGunmob]};

// OTHER
var fightaSquadron = 	{id:517, label:'Fighta Squadron',	pts:0, displayPts:150, defaults:[{unit:fightaBomba,count:3}], upgrades:[fightaBomba], limited:true};
var landa =				{id:518, label:'Landa',				pts:200, upgrades:[], limited:true};
var spacecraft =		{id:519, label:'Spacecraft',	upto:1};
var killKroozer =		{id:520, label:'Kill Kroozer',		pts:150, upgrades:[], limited:true, group:spacecraft};
var battleKroozer =		{id:521, label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft};
var gargant =			{id:522, label:'Gargant',			pts:650, upgrades:[warlord], limited:true};
var greatGargant =		{id:523, label:'Great Gargant',		pts:850, upgrades:[warlord], limited:true};
var othersList = 		{id:524, label:'AIRCRAFT, SPACECRAFT &amp; GARGANTS', options:[fightaSquadron, landa, killKroozer, battleKroozer, gargant, greatGargant]};

// DETAILS
var listData = {
	id:'Ghazgkhull Thraka\'s War Horde', version:'Epic UK v100909',
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
