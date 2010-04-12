// OPTIONALS
var kult2 =			{label:'Bikes', minimum:8};
	var buggy2 =		{label:'Buggy',			pts:25, optional:true, group:kult2};
	var warbike2 =		{label:'Warbike',		pts:25, optional:true, group:kult2};
	var skorcha2 =		{label:'Skorcha',		pts:25, optional:true, group:kult2};
	kult2.options = 	[buggy2, warbike2, skorcha2];
var kult3 =			{label:'Bikes',	minimum:16};
	var buggy3 =		{label:'Buggy',			pts:25, optional:true, group:kult3};
	var warbike3 =		{label:'Warbike',		pts:25, optional:true, group:kult3};
	var skorcha3 =		{label:'Skorcha',		pts:25, optional:true, group:kult3};
	kult3.options = 	[buggy3, warbike3, skorcha3];
var kult4 =			{label:'Bikes',	minimum:24};
	var buggy4 =		{label:'Buggy',			pts:25, optional:true, group:kult4};
	var warbike4 =		{label:'Warbike',		pts:25, optional:true, group:kult4};
	var skorcha4 =		{label:'Skorcha',		pts:25, optional:true, group:kult4};
	kult4.options = 	[buggy4, warbike4, skorcha4];
var blitz2 =		{label:'Wagonz',	minimum:4};
	var gunwagon2 =		{label:'Gunwagon',			pts:35, optional:true, group:blitz2};
	var deth2 =			{label:'Deth Kopta',		pts:35, optional:true, group:blitz2};
	var flak2 =			{label:'Flakwagon',			pts:35, optional:true, group:blitz2};
	blitz2.options = 	[gunwagon2, deth2, flak2];
var blitz3 =		{label:'Wagonz',	minimum:8};
	var gunwagon3 =		{label:'Gunwagon',			pts:35, optional:true, group:blitz3};
	var deth3 =			{label:'Deth Kopta',		pts:35, optional:true, group:blitz3};
	var flak3 =			{label:'Flakwagon',			pts:35, optional:true, group:blitz3};
	blitz3.options = 	[gunwagon3, deth3, flak3];
var blitz4 =		{label:'Wagonz',	minimum:12};
	var gunwagon4 =		{label:'Gunwagon',			pts:35, optional:true, group:blitz4};
	var deth4 =			{label:'Deth Kopta',		pts:35, optional:true, group:blitz4};
	var flak4 =			{label:'Flakwagon',			pts:35, optional:true, group:blitz4};
	blitz4.options = 	[gunwagon4, deth4, flak4];
var stormerz =		{label:'Stormboyz',	minimum:6};
	var stormboyz2 =		{label:'Stormboyz',		pts:25, optional:true, group:stormerz};
	stormerz.options =		[stormboyz2];
var stompas1 =		{label:'Stompas', minimum:3};
	var stompa1 =			{label:'Stompa',		pts:75, optional:true, group:stompas1};
	stompas1.options =		[stompa1];
var stompas2 =		{label:'Stompas', minimum:6};
	var stompa2 =			{label:'Stompa',		pts:75, optional:true, group:stompas2};
	stompas2.options =		[stompa2];
var stompas3 =		{label:'Stompas', minimum:9};
	var stompa3 =			{label:'Stompa',		pts:75, optional:true, group:stompas3};
	stompas3.options =		[stompa3];
var gunz1 =			{label:'Gunz', minimum:5};
	var gun1 =				{label:'Big Gunz',		pts:25,	optional:true, group:gunz1};
	gunz1.options =			[gun1];
var gunz2 =			{label:'Gunz', minimum:10};
	var gun2 =				{label:'Big Gunz',		pts:25,	optional:true, group:gunz2};
	gunz2.options =			[gun2];
var gunz3 =			{label:'Gunz', minimum:15};
	var gun3 =				{label:'Big Gunz',		pts:25,	optional:true, group:gunz3};
	gunz3.options =			[gun3];
var bombas =		{label:'Bombas', minimum:3, upto:9};
	var fightaBomba =		{label:'Fighta Bomba',	pts:50, optional:true, group:bombas};
	bombas.options =		[fightaBomba];
// UPGRADES
var boyz =				{label:'Boyz', 							pts:25};
var commandos =			{label:'Commandos',						pts:25};
var stormboyz =			{label:'Stormboyz',						pts:25};
var buggy =				{label:'Buggy',							pts:25};
var warbike =			{label:'Warbike',						pts:25};
var skorcha =			{label:'Skorcha',						pts:25};
var bigGun =			{label:'Big Gun',						pts:25};
var killaKan =			{label:'Killa Kan',						pts:25};
var battlewagon =		{label:'Battlewagon',					pts:35};
var dethKopta =			{label:'Deth Kopta',					pts:35};
var dreadnought =		{label:'Dreadnought',					pts:35};
var flakwagon =			{label:'Flakwagon',						pts:35};
var gunwagon =			{label:'Gunwagon',						pts:35};
var nobz1 =				{label:'Nobz',							pts:35, upto:1};
var nobz2 =				{label:'Nobz',							pts:35, upto:2};
var nobz3 =				{label:'Nobz',							pts:35, upto:3};
var nobz4 =				{label:'Nobz',							pts:35, upto:4};
var nobz6 =				{label:'Nobz',							pts:35, upto:6};
var oddboy1 =			{label:'Oddboy',						pts:50, upto:1};
var oddboy2 =			{label:'Oddboy',						pts:50, upto:2};
var oddboy3 =			{label:'Oddboy',						pts:50, upto:3};
var stompa =			{label:'Stompa',						pts:75};
var battleFortress =	{label:'Battlefortress',				pts:125};
var gunFortress =		{label:'Gunfortress',					pts:135};
var gunFortress1 =		{label:'Gunfortress',					pts:135, upto:1};
var gunFortress2 =		{label:'Gunfortress',					pts:135, upto:2};
var gunFortress3 =		{label:'Gunfortress',					pts:135, upto:3};
var supaStompa1 =		{label:'Supa Stompa',					pts:275, upto:1};
var supaStompa2 =		{label:'Supa Stompa',					pts:275, upto:2};
var supaStompa3 =		{label:'Supa Stompa',					pts:275, upto:3};
var battlekrooza =		{label:'Battlekrooza',					pts:50, upto:1};
var warlord =			{label:'Warlord',						pts:0, upto:1};

// WARBANDS
var warband =			{label:'Warband',				pts:200, units:'2 Nobz, 6 Boyz, 2 Grotz', upgrades:[warlord, boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz2, oddboy1, stompa, battleFortress, gunFortress]};
var bigWarband =		{label:'Warband (Big)',			pts:350, units:'4 Nobz, 12 Boyz, 4 Grotz', upgrades:[warlord, boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz4, oddboy2, stompa, battleFortress, gunFortress]};
var ugeWarband =		{label:'Warband (\'Uge)',		pts:500, units:'6 Nobz, 18 Boyz, 6 Grotz', upgrades:[warlord, boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz6, oddboy3, stompa, battleFortress, gunFortress]};
var stormboyzBand =		{label:'Stormboyz Warhorde',	pts:0,		displayPts:150, defaults:[{unit:stormboyz2,count:6}], upgrades:[stormboyz2, commandos, buggy, warbike, skorcha, dethKopta]};
var kult =				{label:'Kult of Speed',			pts:0,		displayPts:200, defaults:[{unit:buggy2, count:8}], upgrades:[buggy2, warbike2, skorcha2, dethKopta, flakwagon, gunwagon, oddboy1]};
var bigKult =			{label:'Kult of Speed (Big)',	pts:-50,	displayPts:350, defaults:[{unit:buggy3, count:16}], upgrades:[buggy3, warbike3, skorcha3, dethKopta, flakwagon, gunwagon, oddboy2]};
var ugeKult =			{label:'Kult of Speed (\'Uge)',	pts:-100, 	displayPts:500, defaults:[{unit:buggy4, count:24}], upgrades:[buggy4, warbike4, skorcha4, dethKopta, flakwagon, gunwagon, oddboy3]};
var blitz =				{label:'Blitz Brigade',			pts:10, 	displayPts:150, defaults:[{unit:gunwagon2, count:4}], upgrades:[buggy, warbike, skorcha, gunwagon2, deth2, flak2, oddboy1, gunFortress1]};
var bigBlitz =			{label:'Blitz Brigade (Big)',	pts:-30, 	displayPts:250, defaults:[{unit:gunwagon3, count:8}], upgrades:[buggy, warbike, skorcha, gunwagon3, deth3, flak3, oddboy2, gunFortress2]};
var ugeBlitz =			{label:'Blitz Brigade (\'Uge)',	pts:-70, 	displayPts:350, defaults:[{unit:gunwagon4, count:12}], upgrades:[buggy, warbike, skorcha, gunwagon4, deth4, flak4, oddboy3, gunFortress3]};
var stompaMob = 		{label:'Mekboy Stompamob',		pts:0, 		displayPts:225, defaults:[{unit:stompa1, count:3}], upgrades:[killaKan, dreadnought, flakwagon, stompa1, supaStompa1]};
var bigStompaMob =		{label:'Mekboy Stompamob (Big)',pts:-50,	displayPts:400, defaults:[{unit:stompa2, count:6}], upgrades:[killaKan, dreadnought, flakwagon, stompa2, supaStompa2]};
var ugeStompaMob = 		{label:'Mekboy Stompamob (\'Uge)',pts:-100,	displayPts:575, defaults:[{unit:stompa3, count:9}], upgrades:[killaKan, dreadnought, flakwagon, stompa3, supaStompa3]};
var gunmob =			{label:'Mekboy Gunmob',			pts:0, 		displayPts:125, defaults:[{unit:gun1, count:5}], 	upgrades:[warlord, gun1, battlewagon, flakwagon, nobz1, oddboy1]};
var bigGunmob =			{label:'Mekboy Gunmob (Big)',	pts:-25, 	displayPts:225, defaults:[{unit:gun2, count:10}], 	upgrades:[warlord, gun2, battlewagon, flakwagon, nobz2, oddboy2]};
var ugeGunmob =			{label:'Mekboy Gunmob (\'Uge)',	pts:-50, 	displayPts:325, defaults:[{unit:gun3, count:15}], 	upgrades:[warlord, gun3, battlewagon, flakwagon, nobz3, oddboy3]};
var warbandList =		{label:'WAR HORDES', options:[warband, bigWarband, ugeWarband, stormboyzBand, kult, bigKult, ugeKult, blitz, bigBlitz, ugeBlitz, stompaMob, bigStompaMob, ugeStompaMob, gunmob, bigGunmob, ugeGunmob]};

// OTHER
var fightaSquadron = 	{label:'Fighta Squadron',	pts:0, displayPts:150, defaults:[{unit:fightaBomba,count:3}], upgrades:[fightaBomba], limited:true};
var landa =				{label:'Landa',				pts:200, upgrades:[], limited:true};
var spacecraft =		{label:'Spacecraft',	upto:1};
var killKroozer =		{label:'Kill Kroozer',		pts:200, upgrades:[], limited:true, group:spacecraft};
var battleKroozer =		{label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft};
var gargant =			{label:'Gargant',			pts:650, upgrades:[warlord], limited:true};
var greatGargant =		{label:'Great Gargant',		pts:850, upgrades:[warlord], limited:true};
var othersList = 		{label:'AIRCRAFT, SPACECRAFT &amp; GARGANTS', options:[fightaSquadron, landa, killKroozer, battleKroozer, gargant, greatGargant]};

// DETAILS
var listData = {
	id:'Ghazgkhull Thraka\'s War Horde', version:'NetEA FINAL',
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
