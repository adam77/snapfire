// OPTIONALS
var nob1 =			{label:'Nobz',	upto:1, minimum:1};
	var nobbike	=		{label:'Nobz Warbikes',		pts:0,	group:nob1, optional:true};
	var nobtrukk =		{label:'Nobz with Trukk',	pts:0,	group:nob1, optional:true};
	nob1.options = 		[nobbike, nobtrukk];
var nob2 =			{label:'Nobz',	upto:2, minimum:2};
	var nobbike2	=	{label:'Nobz Warbikes',		pts:0,	group:nob2, optional:true};
	var nobtrukk2 =		{label:'Nobz with Trukk',	pts:0,	group:nob2, optional:true};
	nob2.options = 		[nobbike2, nobtrukk2];
var nob3 =			{label:'Nobz',	upto:3, minimum:3};
	var nobbike3	=	{label:'Nobz Warbikes',		pts:0,	group:nob3, optional:true};
	var nobtrukk3 =		{label:'Nobz with Trukk',	pts:0,	group:nob3, optional:true};
	nob3.options = 		[nobbike3, nobtrukk3];
var kult2 =			{label:'Bikes',	upto:4, minimum:4};
	var buggy2 =		{label:'Buggy',			pts:0, optional:true, group:kult2};
	var warbike2 =		{label:'Warbike',		pts:0, optional:true, group:kult2};
	var skorcha2 =		{label:'Skorcha',		pts:0, optional:true, group:kult2};
	kult2.options = 	[buggy2, warbike2, skorcha2];
var kult3 =			{label:'Bikes',	upto:8, minimum:8};
	var buggy3 =		{label:'Buggy',			pts:0, optional:true, group:kult3};
	var warbike3 =		{label:'Warbike',		pts:0, optional:true, group:kult3};
	var skorcha3 =		{label:'Skorcha',		pts:0, optional:true, group:kult3};
	kult3.options = 	[buggy3, warbike3, skorcha3];
var kult4 =			{label:'Bikes',	upto:12, minimum:12};
	var buggy4 =		{label:'Buggy',			pts:0, optional:true, group:kult4};
	var warbike4 =		{label:'Warbike',		pts:0, optional:true, group:kult4};
	var skorcha4 =		{label:'Skorcha',		pts:0, optional:true, group:kult4};
	kult4.options = 	[buggy4, warbike4, skorcha4];
var Bkult2 =			{label:'Bikes',	upto:8, minimum:8};
	var Bbuggy2 =		{label:'Buggy',			pts:0, optional:true, group:Bkult2};
	var Bwarbike2 =		{label:'Warbike',		pts:0, optional:true, group:Bkult2};
	var Bskorcha2 =		{label:'Skorcha',		pts:0, optional:true, group:Bkult2};
	Bkult2.options = 	[Bbuggy2, Bwarbike2, Bskorcha2];
var Bkult3 =			{label:'Bikes',	upto:16, minimum:16};
	var Bbuggy3 =		{label:'Buggy',			pts:0, optional:true, group:Bkult3};
	var Bwarbike3 =		{label:'Warbike',		pts:0, optional:true, group:Bkult3};
	var Bskorcha3 =		{label:'Skorcha',		pts:0, optional:true, group:Bkult3};
	Bkult3.options = 	[Bbuggy3, Bwarbike3, Bskorcha3];
var Bkult4 =			{label:'Bikes',	upto:24, minimum:24};
	var Bbuggy4 =		{label:'Buggy',			pts:0, optional:true, group:Bkult4};
	var Bwarbike4 =		{label:'Warbike',		pts:0, optional:true, group:Bkult4};
	var Bskorcha4 =		{label:'Skorcha',		pts:0, optional:true, group:Bkult4};
	Bkult4.options = 	[Bbuggy4, Bwarbike4, Bskorcha4];
var blitz2 =		{label:'Wagonz',	upto:4, minimum:4};
	var gunwagon2 =		{label:'Gunwagon',			pts:0, optional:true, group:blitz2};
	var deth2 =			{label:'Deth Kopta',		pts:0, optional:true, group:blitz2};
	var flak2 =			{label:'Flakwagon',			pts:0, optional:true, group:blitz2};
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
var forts =		{label:'Fortresses',	upto:2, minimum:2};
	var battlefort =	{label:'Battlefortress',	pts:0, optional:true, group:forts};
	var gunfort =		{label:'Gunfortress',		pts:0, optional:true, group:forts};
	forts.options = 	[battlefort, gunfort];
var forts2 =		{label:'Fortresses',	upto:4, minimum:4};
	var battlefort2 =	{label:'Battlefortress',	pts:0, optional:true, group:forts2};
	var gunfort2 =		{label:'Gunfortress',		pts:0, optional:true, group:forts2};
	forts2.options = 	[battlefort2, gunfort2];
var forts3 =		{label:'Fortresses',	upto:6, minimum:6};
	var battlefort3 =	{label:'Battlefortress',	pts:0, optional:true, group:forts3};
	var gunfort3 =		{label:'Gunfortress',		pts:0, optional:true, group:forts3};
	forts3.options = 	[battlefort3, gunfort3];
// UPGRADES
var boyz =				{label:'Boyz', 							pts:25};
var commandos =			{label:'Commandos',						pts:25};
var stormboyz =			{label:'Stormboyz',						pts:25};
var buggy =				{label:'Buggy',							pts:25};
var warbike =			{label:'Warbike',						pts:25};
var skorcha =			{label:'Skorcha',						pts:25};
var bigGun =			{label:'Big Gun',						pts:25};
var battlewagon =		{label:'Battlewagon',					pts:35};
var dethKopta =			{label:'Deth Kopta',					pts:35};
var dreadnought =		{label:'Dreadnought',					pts:35};
var flakwagon =			{label:'Flakwagon',						pts:35};
var gunwagon =			{label:'Gunwagon',						pts:35};
var nobWarbike1 =		{label:'Nob Warbikes',					pts:35, upto:1};
var nobWarbike2 =		{label:'Nob Warbikes',					pts:35, upto:2};
var nobWarbike3 =		{label:'Nob Warbikes',					pts:35, upto:3};
var nobz1 =				{label:'Nobz',							pts:35, upto:1};
var nobz2 =				{label:'Nobz',							pts:35, upto:2};
var nobz3 =				{label:'Nobz',							pts:35, upto:3};
var nobz4 =				{label:'Nobz',							pts:35, upto:4};
var nobz6 =				{label:'Nobz',							pts:35, upto:6};
var speedsta1 =			{label:'Mekboy Speedsta',				pts:50, upto:1};
var speedsta2 =			{label:'Mekboy Speedsta',				pts:50, upto:2};
var speedsta3 =			{label:'Mekboy Speedsta',				pts:50, upto:3};
var battleFortress =	{label:'Battlefortress',				pts:125};
var battleFortress1 =	{label:'Battlefortress',				pts:125, upto:1};
var battleFortress2 =	{label:'Battlefortress',				pts:125, upto:2};
var battleFortress3 =	{label:'Battlefortress',				pts:125, upto:3};
var gunFortress =		{label:'Gunfortress',					pts:135};
var gunFortress1 =		{label:'Gunfortress',					pts:135, upto:1};
var gunFortress2 =		{label:'Gunfortress',					pts:135, upto:2};
var gunFortress3 =		{label:'Gunfortress',					pts:135, upto:3};
var fightaBomba =		{label:'Fighta Bomba',					pts:50, upto:6};
var battlekrooza =		{label:'Battlekrooza',					pts:50, upto:1};


// WARBANDS
var warband =			{label:'Speed Freaks Warband',			pts:200, units:'3 Boyz, 3 Trukks', defaults:[{unit:buggy2,count:4},{unit:nobtrukk,count:1}], upgrades:[boyz, stormboyz, buggy, warbike, skorcha, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, nobz1, nobWarbike1, speedsta1]};
var bigWarband =		{label:'Speed Freaks Warband (Big)',	pts:375, units:'6 Boyz, 6 Trukks', defaults:[{unit:buggy3,count:8},{unit:nobtrukk2,count:2}], upgrades:[boyz, stormboyz, buggy, warbike, skorcha, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, nobz2, nobWarbike2, speedsta2]};
var ugeWarband =		{label:'Speed Freaks Warband (\'Uge)',	pts:550, units:'9 Boyz, 9 Trukks', defaults:[{unit:buggy4,count:12},{unit:nobtrukk3,count:3}], upgrades:[boyz, stormboyz, buggy, warbike, skorcha, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, nobz3, nobWarbike3, speedsta3]};
var kult =				{label:'Kult of Speed',					pts:200, defaults:[{unit:Bbuggy2,count:8}], upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, speedsta1]};
var bigKult =			{label:'Kult of Speed (Big)',			pts:350, defaults:[{unit:Bbuggy3,count:16}], upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, speedsta2]};
var ugeKult =			{label:'Kult of Speed (\'Uge)',			pts:500, defaults:[{unit:Bbuggy4,count:24}], upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, speedsta3]};
var blitz =				{label:'Blitz Brigade',					pts:150, defaults:[{unit:gunwagon2,count:4}], upgrades:[boyz, buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, speedsta1, gunFortress1, nobz1, nobWarbike1]};
var bigBlitz =			{label:'Blitz Brigade (Big)',			pts:250, defaults:[{unit:gunwagon3,count:8}], upgrades:[boyz, buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, speedsta2, gunFortress2, nobz2, nobWarbike2]};
var ugeBlitz =			{label:'Blitz Brigade (\'Uge)',			pts:350, defaults:[{unit:gunwagon4,count:12}], upgrades:[boyz, buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, speedsta3, gunFortress3, nobz3, nobWarbike3]};
var outriders =			{label:'Warbike Outriders',				pts:150, units:'5 Warbikes', upgrades:[]};
var bigOutriders =		{label:'Warbike Outriders (Big)',		pts:250, units:'10 Warbikes', upgrades:[]};
var ugeOutriders =		{label:'Warbike Outriders (\'Uge)',		pts:350, units:'15 Warbikes', upgrades:[]};
var fortressMob =		{label:'Fortress Mob',					pts:275, defaults:[{unit:battlefort,count:2}], upgrades:[boyz, flakwagon, nobz1, nobWarbike1, battleFortress1, gunFortress1]};
var bigFortressMob =	{label:'Fortress Mob (Big)',			pts:475, defaults:[{unit:battlefort2,count:4}], upgrades:[boyz, flakwagon, nobz2, nobWarbike2, battleFortress2, gunFortress2]};
var ugeFortressMob =	{label:'Fortress Mob (\'Uge)',			pts:675, defaults:[{unit:battlefort3,count:6}], upgrades:[boyz, flakwagon, nobz3, nobWarbike3, battleFortress3, gunFortress3]};
var warbandList =		{label:'FORMATIONS', options:[warband, bigWarband, ugeWarband, kult, bigKult, ugeKult, blitz, bigBlitz, ugeBlitz, outriders, bigOutriders, ugeOutriders, fortressMob, bigFortressMob, ugeFortressMob]};

// OTHER
var fightaSquadron = 	{label:'Fighta Squadron',	pts:150, units:'3 Fighta Bombas', upgrades:[fightaBomba], limited:true};
var landa =				{label:'Landa',				pts:200, upgrades:[], limited:true};
var spacecraft =		{label:'Spacecraft',	upto:1};
var killKroozer =		{label:'Kill Kroozer',		pts:200, upgrades:[], limited:true, group:spacecraft};
var battleKroozer =		{label:'Battle Kroozer',	pts:250, upgrades:[], limited:true, group:spacecraft};
var othersList = 		{label:'AIRCRAFT and SPACECRAFT', options:[fightaSquadron, landa, killKroozer, battleKroozer], limited:true};

// DETAILS
var listData = {
	id:'Burning Death Speed Freeks', version:'NetEA FINAL',
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
