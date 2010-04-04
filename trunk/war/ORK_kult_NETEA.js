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
var warband =			{label:'Speed Freaks Warband',		pts:200, upgrades:[boyz, stormboyz, buggy, warbike, skorcha, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, nobz1, nobWarbike1, speedsta1]};
var bigWarband =		{label:'Speed Freaks Warband (Big)',	pts:375, upgrades:[boyz, stormboyz, buggy, warbike, skorcha, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, nobz2, nobWarbike2, speedsta2]};
var ugeWarband =		{label:'Speed Freaks Warband (\'Uge)',pts:550, upgrades:[boyz, stormboyz, buggy, warbike, skorcha, bigGun, battlewagon, dethKopta, flakwagon, gunwagon, nobz3, nobWarbike3, speedsta3]};
var kult =				{label:'Kult of Speed',		pts:200, upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, speedsta1]};
var bigKult =			{label:'Kult of Speed (Big)',	pts:350, upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, speedsta2]};
var ugeKult =			{label:'Kult of Speed (\'Uge)',pts:500, upgrades:[buggy, warbike, skorcha, dethKopta, flakwagon, gunwagon, speedsta3]};
var blitz =				{label:'Blitz Brigade',		pts:150, upgrades:[boyz, buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, speedsta1, gunFortress1, nobz1, nobWarbike1]};
var bigBlitz =			{label:'Blitz Brigade (Big)',	pts:250, upgrades:[boyz, buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, speedsta2, gunFortress2, nobz2, nobWarbike2]};
var ugeBlitz =			{label:'Blitz Brigade (\'Uge)',pts:350, upgrades:[boyz, buggy, warbike, skorcha, gunwagon, dethKopta, flakwagon, speedsta3, gunFortress3, nobz3, nobWarbike3]};
var outriders =				{label:'Warbike Outriders',		pts:150, upgrades:[]};
var bigOutriders =			{label:'Warbike Outriders (Big)',	pts:250, upgrades:[]};
var ugeOutriders =			{label:'Warbike Outriders (\'Uge)',pts:350, upgrades:[]};
var fortressMob =			{label:'Fortress Mob',		pts:275, upgrades:[boyz, flakwagon, nobz1, nobWarbike1, battleFortress1, gunFortress1]};
var bigFortressMob =		{label:'Fortress Mob (Big)',	pts:475, upgrades:[boyz, flakwagon, nobz2, nobWarbike2, battleFortress2, gunFortress2]};
var ugeFortressMob =		{label:'Fortress Mob (\'Uge)',	pts:675, upgrades:[boyz, flakwagon, nobz3, nobWarbike3, battleFortress3, gunFortress3]};
var warbandList =		{label:'FORMATIONS', options:[warband, bigWarband, ugeWarband, kult, bigKult, ugeKult, blitz, bigBlitz, ugeBlitz, outriders, bigOutriders, ugeOutriders, fortressMob, bigFortressMob, ugeFortressMob]};

// OTHER
var fightaSquadron = 	{label:'Fighta Squadron',	pts:150, upgrades:[fightaBomba], limited:true};
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
