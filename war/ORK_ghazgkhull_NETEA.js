// OPTIONALS
var kult2 =			{label:'Bikes',	upto:8, minimum:8};
	var buggy2 =		{label:'Buggy',			pts:0, optional:true, group:kult2};
	var warbike2 =		{label:'Warbike',		pts:0, optional:true, group:kult2};
	var skorcha2 =		{label:'Skorcha',		pts:0, optional:true, group:kult2};
	kult2.options = 	[buggy2, warbike2, skorcha2];
var kult3 =			{label:'Bikes',	upto:16, minimum:16};
	var buggy3 =		{label:'Buggy',			pts:0, optional:true, group:kult3};
	var warbike3 =		{label:'Warbike',		pts:0, optional:true, group:kult3};
	var skorcha3 =		{label:'Skorcha',		pts:0, optional:true, group:kult3};
	kult3.options = 	[buggy3, warbike3, skorcha3];
var kult4 =			{label:'Bikes',	upto:24, minimum:24};
	var buggy4 =		{label:'Buggy',			pts:0, optional:true, group:kult4};
	var warbike4 =		{label:'Warbike',		pts:0, optional:true, group:kult4};
	var skorcha4 =		{label:'Skorcha',		pts:0, optional:true, group:kult4};
	kult4.options = 	[buggy4, warbike4, skorcha4];
var blitz2 =		{label:'Wagonz',	upto:4, minimum:4};
	var gunwagon2 =		{label:'Gunwagon',			pts:0, optional:true, group:blitz2};
	var deth2 =			{label:'Deth Kopta',		pts:0, optional:true, group:blitz2};
	var flak2 =			{label:'Flakwagon',		pts:0, optional:true, group:blitz2};
	blitz2.options = 	[gunwagon2, deth2, flak2];
var blitz3 =		{label:'Wagonz',	upto:8, minimum:8};
	var gunwagon3 =		{label:'Gunwagon',			pts:0, optional:true, group:blitz3};
	var deth3 =			{label:'Deth Kopta',		pts:0, optional:true, group:blitz3};
	var flak3 =			{label:'Flakwagon',			pts:0, optional:true, group:blitz3};
	blitz3.options = 	[gunwagon3, deth3, flak3];
var blitz4 =		{label:'Wagonz',	upto:12, minimum:12};
	var gunwagon4 =		{label:'Gunwagon',			pts:0, optional:true, group:blitz4};
	var deth4 =			{label:'Deth Kopta',		pts:0, optional:true, group:blitz4};
	var flak4 =			{label:'Flakwagon',			pts:0, optional:true, group:blitz4};
	blitz4.options = 	[gunwagon4, deth4, flak4];
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
var fightaBomba =		{label:'Fighta Bomba',					pts:50, upto:6};
var battlekrooza =		{label:'Battlekrooza',					pts:50, upto:1};
var warlord =			{label:'Warlord',						pts:0, upto:1};

// WARBANDS
var warband =			{label:'Warband',				pts:200, units:'2 Nobz, 6 Boyz, 2 Grotz', upgrades:[warlord, boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz2, oddboy1, stompa, battleFortress, gunFortress]};
var bigWarband =		{label:'Warband (Big)',			pts:350, units:'4 Nobz, 12 Boyz, 4 Grotz', upgrades:[warlord, boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz4, oddboy2, stompa, battleFortress, gunFortress]};
var ugeWarband =		{label:'Warband (\'Uge)',		pts:500, units:'6 Nobz, 18 Boyz, 6 Grotz', upgrades:[warlord, boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz6, oddboy3, stompa, battleFortress, gunFortress]};
var stormboyzBand =		{label:'Stormboyz Warhorde',	pts:150, units:'6 Stormboyz', upgrades:[stormboyz, commandos, buggy, warbike, skorcha, dethKopta]};
var kult =				{label:'Kult of Speed',			pts:200, defaults:[{unit:buggy2, count:8}], upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, oddboy1]};
var bigKult =			{label:'Kult of Speed (Big)',	pts:350, defaults:[{unit:buggy3, count:16}], upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, oddboy2]};
var ugeKult =			{label:'Kult of Speed (\'Uge)',	pts:500, defaults:[{unit:buggy4, count:24}], upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, oddboy3]};
var blitz =				{label:'Blitz Brigade',			pts:150, defaults:[{unit:gunwagon2, count:4}], upgrades:[buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, oddboy1, gunFortress1]};
var bigBlitz =			{label:'Blitz Brigade (Big)',	pts:250, defaults:[{unit:gunwagon3, count:8}], upgrades:[buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, oddboy2, gunFortress2]};
var ugeBlitz =			{label:'Blitz Brigade (\'Uge)',	pts:350, defaults:[{unit:gunwagon4, count:12}], upgrades:[buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, oddboy3, gunFortress3]};
var stompaMob = 		{label:'Mekboy Stompamob',		pts:225, units:'3 Stompas', upgrades:[killaKan, dreadnought, flakwagon, stompa, supaStompa1]};
var bigStompaMob =		{label:'Mekboy Stompamob (Big)',pts:400, units:'6 Stompas', upgrades:[killaKan, dreadnought, flakwagon, stompa, supaStompa2]};
var ugeStompaMob = 		{label:'Mekboy Stompamob (\'Uge)',pts:575, units:'9 Stompas', upgrades:[killaKan, dreadnought, flakwagon, stompa, supaStompa3]};
var gunmob =			{label:'Mekboy Gunmob',			pts:125, units:'5 Big Gunz', upgrades:[warlord, bigGun, battlewagon, flakwagon, nobz1, oddboy1]};
var bigGunmob =			{label:'Mekboy Gunmob (Big)',	pts:225, units:'10 Big Gunz', upgrades:[warlord, bigGun, battlewagon, flakwagon, nobz2, oddboy2]};
var ugeGunmob =			{label:'Mekboy Gunmob (\'Uge)',	pts:325, units:'15 Big Gunz', upgrades:[warlord, bigGun, battlewagon, flakwagon, nobz3, oddboy3]};
var warbandList =		{label:'WAR HORDES', options:[warband, bigWarband, ugeWarband, stormboyzBand, kult, bigKult, ugeKult, blitz, bigBlitz, ugeBlitz, stompaMob, bigStompaMob, ugeStompaMob, gunmob, bigGunmob, ugeGunmob]};

// OTHER
var fightaSquadron = 	{label:'Fighta Squadron',	pts:150, units:'3 Fighta-bommers', upgrades:[fightaBomba], limited:true};
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
