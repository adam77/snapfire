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


// WARBANDS
var warband =			{label:'Warband',		pts:200, upgrades:[boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz2, oddboy1, stompa, battleFortress, gunFortress]};
var bigWarband =		{label:'Warband (Big)',		pts:350, upgrades:[boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz4, oddboy2, stompa, battleFortress, gunFortress]};
var ugeWarband =		{label:'Warband (\'Uge)',		pts:500, upgrades:[boyz, commandos, stormboyz, buggy, warbike, skorcha, bigGun, killaKan, battlewagon, dethKopta, dreadnought, flakwagon, gunwagon, nobz6, oddboy3, stompa, battleFortress, gunFortress]};
var stormboyzBand =		{label:'Stormboyz Warhorde',pts:150, upgrades:[stormboyz, commandos, buggy, warbike, skorcha, dethKopta]};
var kult =				{label:'Kult of Speed',		pts:200, upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, oddboy1]};
var bigKult =			{label:'Kult of Speed (Big)',	pts:350, upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, oddboy2]};
var ugeKult =			{label:'Kult of Speed (\'Uge)',pts:500, upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, oddboy3]};
var blitz =				{label:'Blitz Brigade',		pts:150, upgrades:[buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, oddboy1, gunFortress1]};
var bigBlitz =			{label:'Blitz Brigade (Big)',	pts:250, upgrades:[buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, oddboy2, gunFortress2]};
var ugeBlitz =			{label:'Blitz Brigade (\'Uge)',pts:350, upgrades:[buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, oddboy3, gunFortress3]};
var stompaMob = 		{label:'Mekboy Stompamob',	pts:225, upgrades:[killaKan, dreadnought, flakwagon, stompa, supaStompa1]};
var bigStompaMob =		{label:'Mekboy Stompamob (Big)',	pts:400, upgrades:[killaKan, dreadnought, flakwagon, stompa, supaStompa2]};
var ugeStompaMob = 		{label:'Mekboy Stompamob (\'Uge)',	pts:575, upgrades:[killaKan, dreadnought, flakwagon, stompa, supaStompa3]};
var gunmob =			{label:'Mekboy Gunmob',		pts:125, upgrades:[bigGun, battlewagon, flakwagon, nobz1, oddboy1]};
var bigGunmob =			{label:'Mekboy Gunmob (Big)',	pts:225, upgrades:[bigGun, battlewagon, flakwagon, nobz2, oddboy2]};
var ugeGunmob =			{label:'Mekboy Gunmob (\'Uge)',pts:325, upgrades:[bigGun, battlewagon, flakwagon, nobz3, oddboy3]};
var warbandList =		{label:'WAR HORDES', options:[warband, bigWarband, ugeWarband, stormboyzBand, kult, bigKult, ugeKult, blitz, bigBlitz, ugeBlitz, stompaMob, bigStompaMob, ugeStompaMob, gunmob, bigGunmob, ugeGunmob]};

// OTHER
var fightaSquadron = 	{label:'Fighta Squadron',	pts:150, upgrades:[fightaBomba], limited:true};
var landa =				{label:'Landa',				pts:200, upgrades:[], limited:true};
var spacecraft =		{label:'Spacecraft',	upto:1};
var killKroozer =		{label:'Kill Kroozer',		pts:200, upgrades:[], limited:true, group:spacecraft};
var battleKroozer =		{label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft};
var gargant =			{label:'Gargant',			pts:650, upgrades:[], limited:true};
var greatGargant =		{label:'Great Gargant',		pts:850, upgrades:[], limited:true};
var othersList = 		{label:'AIRCRAFT, SPACECRAFT &amp; GARGANTS', options:[fightaSquadron, landa, killKroozer, battleKroozer, gargant, greatGargant]};

// DETAILS
var listData = {
	id:'Ghazgkhull Thraka\'s War Horde', version:'NetEA FINAL',
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
