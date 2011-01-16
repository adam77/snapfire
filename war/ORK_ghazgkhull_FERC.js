// MANDATORY UNITS
var kult2 =			{id:10, label:'Motos', minimum:8, options:[
	{id:11, label:'Buggie',			pts:25, optional:true},
	{id:12, label:'Motos',		pts:25, optional:true},
	{id:13, label:'Karbonisator',		pts:25, optional:true}
]};
var kult3 =			{id:14, label:'Motos',	minimum:16, options:[
	{id:15, label:'Buggie',			pts:25, optional:true},
	{id:16, label:'Motos',		pts:25, optional:true},
	{id:17, label:'Karbonisator',		pts:25, optional:true}
]};
var kult4 =			{id:18, label:'Motos',	minimum:24, options:[
	{id:19, label:'Buggie',			pts:25, optional:true},
	{id:20, label:'Motos',		pts:25, optional:true},
	{id:21, label:'Karbonisator',		pts:25, optional:true}
]};
var blitz2 =		{id:22, label:'Chariots',	minimum:4, options:[
	{id:23, label:'Chariot Kanon',		pts:35, optional:true},
	{id:24, label:'Kopter',		pts:35, optional:true},
	{id:25, label:'Chariot Flak',		pts:35, optional:true}
]};
var blitz3 =		{id:26, label:'Chariots',	minimum:8, options:[
	{id:27, label:'Chariot Kanon',		pts:35, optional:true},
	{id:28, label:'Kopter',		pts:35, optional:true},
	{id:29, label:'Chariot Flak',		pts:35, optional:true}
]};
var blitz4 =		{id:30, label:'Chariots',	minimum:12, options:[
	{id:31, label:'Chariot Kanon',		pts:35, optional:true},
	{id:32, label:'Kopter',		pts:35, optional:true},
	{id:33, label:'Chariot Flak',		pts:35, optional:true}
]};
var stormboyz2 =	{id:35, label:'Chokboyz',		pts:25, optional:true, minimum:6};
var Kommandos2 =	{id:36, label:'Kommandos',						pts:25, optional:true, minimum:6};
var stompa1 =		{id:37, label:'Krabouillator',			pts:65, optional:true, minimum:3};
var stompa2 =		{id:39, label:'Krabouillator',			pts:65, optional:true, minimum:6};
var stompa3 =		{id:41, label:'Krabouillator',			pts:65, optional:true, minimum:9};
var gun1 =			{id:43, label:'Grokalibr\'',				pts:25,	optional:true, minimum:5};
var gun2 =			{id:45, label:'Grokalibr\'',				pts:25,	optional:true, minimum:10};
var gun3 =			{id:47, label:'Grokalibr\'',				pts:25,	optional:true, minimum:15};
var fightaBomba =	{id:49, label:'Chassa-Bomba',	pts:50, optional:true, minimum:4, upto:9};

// UPGRADES
var boyz0 =				{id:50, label:'Boyz', 							pts:25};
var boyz2 =				{id:82, label:'Boyz',		pts:25, optional:true, minimum:0, upto:2};
var boyz4 =				{id:83, label:'Boyz',		pts:25, optional:true, minimum:0, upto:4};
var boyz6 =				{id:84, label:'Boyz',		pts:25, optional:true, minimum:0, upto:6};
var grot2 =				{id:85, label:'Grots',		pts:0, optional:true, minimum:0, upto:2};
var grot4 =				{id:86, label:'Grots',		pts:0, optional:true, minimum:0, upto:4};
var grot6 =				{id:87, label:'Grots',		pts:0, optional:true, minimum:0, upto:6};
var Kommandos =			{id:51, label:'Kommandos',						pts:25};
var Chokboyz =			{id:52, label:'Chokboyz',						pts:25};
var Buggie =			{id:53, label:'Buggie',							pts:25};
var Moto =				{id:54, label:'Moto',							pts:25};
var Karbonisator =		{id:55, label:'Karbonisator',						pts:25};
var bigGun =			{id:56, label:'Grokalibr\'',						pts:25};
var killaKan =			{id:57, label:'Bo&icirc;t\'Kitu',						pts:25};
var battlewagon =		{id:58, label:'Chariot de Guerre',					pts:25};
var dethKopta =			{id:59, label:'Kopter',							pts:35};
var dreadnought =		{id:60, label:'Dreadnought',						pts:35};
var ChariotFlak =		{id:61, label:'Chariot Flak',						pts:35};
var ChariotKanon =		{id:62, label:'Chariot Kanon',					pts:35};
var nobz1 =				{id:63, label:'Nobz',							pts:35, upto:1};
var nobz2 =				{id:64, label:'Nobz',							pts:35, upto:2};
var nobz3 =				{id:65, label:'Nobz',							pts:35, upto:3};
var nobz4 =				{id:66, label:'Nobz',							pts:35, upto:4};
var nobz6 =				{id:67, label:'Nobz',							pts:35, upto:6};
var oddboy1 =			{id:68, label:'Brikolo',						pts:50, upto:1};
var oddboy2 =			{id:69, label:'Brikolo',						pts:50, upto:2};
var oddboy3 =			{id:70, label:'Brikolo',						pts:50, upto:3};
var Krabouillator =		{id:71, label:'Krabouillator',					pts:65};
var battleFortress =	{id:72, label:'Forteresse de Bataille',				pts:125};
var gunFortress =		{id:73, label:'Forteresse &agrave; Kanons',				pts:135};
var gunFortress1 =		{id:74, label:'Forteresse &agrave; Kanons',				pts:135, upto:1};
var gunFortress2 =		{id:75, label:'Forteresse &agrave; Kanons',				pts:135, upto:2};
var gunFortress3 =		{id:76, label:'Forteresse &agrave; Kanons',				pts:135, upto:3};
var supaStompa1 =		{id:77, label:'Super Krabouillator',					pts:275, optional:true, minimum:1, upto:1};
var warlord =			{id:81, label:'Seigneur de Guerre',						pts:0, general:true};

// WARBANDS
var warbandList =		{id:516, label:'Waaagh Ork', options:[
	{id:500, label:'Bande de Guerre',							pts:200, units:'2 Nobz, 6 Boyz, 2 Grots',  upgrades:[warlord, boyz2, grot2, Kommandos, Chokboyz, Buggie, Moto, Karbonisator, bigGun, killaKan, battlewagon, dethKopta, dreadnought, ChariotFlak, ChariotKanon, nobz2, oddboy1, Krabouillator, battleFortress, gunFortress]},
	{id:501, label:'Bande de Guerre (Mastok\')',				pts:350, units:'4 Nobz, 12 Boyz, 4 Grots', upgrades:[warlord, boyz4, grot4, Kommandos, Chokboyz, Buggie, Moto, Karbonisator, bigGun, killaKan, battlewagon, dethKopta, dreadnought, ChariotFlak, ChariotKanon, nobz4, oddboy2, Krabouillator, battleFortress, gunFortress]},
	{id:502, label:'Bande de Guerre (Tr&egrave; Mastok\')',		pts:500, units:'6 Nobz, 18 Boyz, 6 Grots', upgrades:[warlord, boyz6, grot6, Kommandos, Chokboyz, Buggie, Moto, Karbonisator, bigGun, killaKan, battlewagon, dethKopta, dreadnought, ChariotFlak, ChariotKanon, nobz6, oddboy3, Krabouillator, battleFortress, gunFortress]},
	{id:503, label:'Bande de Chokboyz',							pts:0,	displayPts:150, upgrades:[stormboyz2, Kommandos, Buggie, Moto, Karbonisator, dethKopta]},
	{id:531, label:'Bande de Kommandos',						pts:0,	displayPts:150, upgrades:[Kommandos2]},
	{id:504, label:'Kulte d\'la Vitesse',						pts:0,	displayPts:200, upgrades:[kult2, dethKopta, ChariotFlak, ChariotKanon, oddboy1]},
	{id:505, label:'Kulte d\'la Vitesse (Mastok\')',			pts:-50,	displayPts:350, upgrades:[kult3, dethKopta, ChariotFlak, ChariotKanon, oddboy2]},
	{id:506, label:'Kulte d\'la Vitesse (Tr&egrave; Mastok\')',	pts:-100, 	displayPts:500, upgrades:[kult4, dethKopta, ChariotFlak, ChariotKanon, oddboy3]},
	{id:507, label:'Brigade Blitz',								pts:10, 	displayPts:150, upgrades:[Buggie, Moto, Karbonisator, blitz2, oddboy1, gunFortress1]},
	{id:508, label:'Brigade Blitz (Mastok\')',					pts:-30, 	displayPts:250, upgrades:[Buggie, Moto, Karbonisator, blitz3, oddboy2, gunFortress2]},
	{id:509, label:'Brigade Blitz (Tr&egrave; Mastok\')',		pts:-70, 	displayPts:350, upgrades:[Buggie, Moto, Karbonisator, blitz4, oddboy3, gunFortress3]},
	{id:510, label:'Bande de Krabouillators',					pts:30,	displayPts:225, upgrades:[killaKan, dreadnought, ChariotFlak, stompa1]},
	{id:511, label:'Bande de Krabouillators (Mastok\')',		pts:10,	displayPts:400, upgrades:[killaKan, dreadnought, ChariotFlak, stompa2]},
	{id:512, label:'Bande de Krabouillators (Tr&egrave; Mastok\')',	pts:-10, displayPts:575, upgrades:[killaKan, dreadnought, ChariotFlak, stompa3]},
	{id:530, label:'Bande du Super Krabouillator',				pts:30,	displayPts:500, upgrades:[killaKan, dreadnought, ChariotFlak, supaStompa1, stompa1]},
	{id:513, label:'Batterie de Grokalibr\'',					pts:0,	displayPts:125, upgrades:[warlord, gun1, battlewagon, ChariotFlak, nobz1, oddboy1]},
	{id:514, label:'Batterie de Grokalibr\' (Mastok\')',		pts:-25, 	displayPts:225, upgrades:[warlord, gun2, battlewagon, ChariotFlak, nobz2, oddboy2]},
	{id:515, label:'Batterie de Grokalibr\' (Tr&egrave; Mastok\')',	pts:-50, 	displayPts:325, upgrades:[warlord, gun3, battlewagon, ChariotFlak, nobz3, oddboy3]}
]};

// OTHER
var spacecraft =		{id:519, label:'Spacecraft',	upto:1};
var othersList = 		{id:524, label:'AIRCRAFT, SPACECRAFT &amp; GARGANTS', options:[
 	{id:517, label:'Escadron de Chassa-Bombas',	pts:0, displayPts:200, upgrades:[fightaBomba], limited:true},
	{id:518, label:'Vesso de Debark\'ment',				pts:250, upgrades:[], limited:true},
	{id:520, label:'Kroiseur Kitu',		pts:200, upgrades:[], limited:true, group:spacecraft},
	{id:521, label:'Kroiseur d\'la Mort',	pts:250, upgrades:[], limited:true, group:spacecraft},
	{id:522, label:'Gargant',			pts:650, upgrades:[warlord], limited:true},
	{id:523, label:'Grand Gargant',		pts:850, upgrades:[warlord], limited:true}
]};

// DETAILS
var listData = {
	id:'Waaagh Ork de Ghazgkhull Thraka\'s', version:'F-ERC du 30/08/2010',
	sublists:[warbandList, othersList]};

// CALLBACK
listLoaded();
