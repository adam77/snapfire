var kult4 =			{id:10, label:'Motos',	minimum:4, options:[
	{id:11, label:'Buggie',			pts:25, optional:true},
	{id:12, label:'Motoboyz',		pts:25, optional:true},
	{id:13, label:'Karbonisator',		pts:25, optional:true}
]};
var kult8 =			{id:14, label:'Motos', minimum:8, options:[
	{id:15, label:'Buggie',			pts:25, optional:true},
	{id:16, label:'Motoboyz',		pts:25, optional:true},
	{id:17, label:'Karbonisator',		pts:25, optional:true}
]};
var kult12 =			{id:18, label:'Motos',	minimum:12, options:[
	{id:19, label:'Buggie',			pts:25, optional:true},
	{id:20, label:'Motoboyz',		pts:25, optional:true},
	{id:21, label:'Karbonisator',		pts:25, optional:true}
]};
var kult16 =			{id:22, label:'Motos',	minimum:16, options:[
	{id:23, label:'Buggie',			pts:25, optional:true},
	{id:24, label:'Motoboyz',		pts:25, optional:true},
	{id:25, label:'Karbonisator',		pts:25, optional:true}
]};
var kult24 =			{id:26, label:'Motos',	minimum:24, options:[
	{id:27, label:'Buggie',			pts:25, optional:true},
	{id:28, label:'Motoboyz',		pts:25, optional:true},
	{id:29, label:'Karbonisator',		pts:25, optional:true}
]};
var blitz2 =		{id:30, label:'Chariots',	minimum:4, options:[
	{id:31, label:'Chariot Kanon',		pts:35, optional:true},
	{id:32, label:'Kopter',		pts:35, optional:true},
	{id:33, label:'Chariot Flak',		pts:35, optional:true}
]};
var blitz3 =		{id:34, label:'Chariots',	minimum:8, options:[
	{id:35, label:'Chariot Kanon',		pts:35, optional:true},
	{id:36, label:'Kopter',		pts:35, optional:true},
	{id:37, label:'Chariot Flak',		pts:35, optional:true}
]};
var blitz4 =		{id:38, label:'Chariots',	minimum:12, options:[
	{id:39, label:'Chariot Kanon',		pts:35, optional:true},
	{id:40, label:'Kopter',		pts:35, optional:true},
	{id:41, label:'Chariot Flak',		pts:35, optional:true}
]};
var forts1 =		{id:42, label:'Forteresses',	upto:2, minimum:2, options:[
	{id:43, label:'Forteresse de Bataille',		pts:0, optional:true},
	{id:44, label:'Forteresse &agrave; Kanons',		pts:0, optional:true}
]};
var forts2 =		{id:45, label:'Forteresses',	upto:4, minimum:4, options:[
	{id:46, label:'Forteresse de Bataille',		pts:0, optional:true},
	{id:47, label:'Forteresse &agrave; Kanons',		pts:0, optional:true}
]};
var forts3 =		{id:48, label:'Forteresses',	upto:6, minimum:6, options:[
	{id:49, label:'Forteresse de Bataille',		pts:0, optional:true},
	{id:50, label:'Forteresse &agrave; Kanons',		pts:0, optional:true}
]};

var boy1 =			{id:51, label:'Boyz (+ extra truk)',	pts:25,	optional:true, minimum:3};
var boy2 =			{id:52, label:'Boyz (+ extra truk)',	pts:25,	optional:true, minimum:6};
var boy3 =			{id:53, label:'Boyz (+ extra truk)',	pts:25,	optional:true, minimum:9};
var nobz1 =			{id:54, label:'Nobz',	upto:1, options:[
	{id:55, label:'Nobz',	pts:35,	optional:true},
	{id:56, label:'Motonobz',	pts:35, optional:true}
]};
var nobz2 =			{id:57, label:'Nobz',	upto:2, options:[
	{id:58, label:'Nobz',	pts:35,	optional:true},
	{id:59, label:'Motonobz',	pts:35, optional:true}
]};
var nobz3 =			{id:60, label:'Nobz',	upto:3, options:[
	{id:61, label:'Nobz',	pts:35,	optional:true},
	{id:62, label:'Motonobz',	pts:35, optional:true}
]};
var nob1 =			{id:63, label:'Nobz',	upto:2, minimum:1, options:[
	{id:64, label:'Nobz (+ extra truk)',	pts:35,	optional:true},
	{id:65, label:'Motonobz',	pts:35, optional:true}
]};
var nob2 =			{id:66, label:'Nobz',	upto:4, minimum:2, options:[
	{id:67, label:'Nobz (+ extra truk)',	pts:35,	optional:true},
	{id:68, label:'Motonobz',	pts:35, optional:true}
]};
var nob3 =			{id:69, label:'Nobz',	upto:6, minimum:3, options:[
	{id:70, label:'Nobz (+ extra truk)',	pts:35,	optional:true},
	{id:71, label:'Motonobz',	pts:35, optional:true}
]};

var stormboyz2 =	{id:72, label:'Chokboyz',		pts:25, optional:true, minimum:6};
var fightaBomba =	{id:73, label:'Chassa-Bomba',	pts:50, optional:true, minimum:4, upto:9};

// UPGRADES
var boy0 =				{id:74, label:'Boyz',		pts:25};
var Chokboyz =			{id:76, label:'Chokboyz',						pts:25};
var Buggie =			{id:77, label:'Buggie',							pts:25};
var Moto =				{id:78, label:'Moto',							pts:25};
var Karbonisator =		{id:79, label:'Karbonisator',						pts:25};
var bigGun =			{id:80, label:'Grokalibr\'',						pts:25};
var battlewagon =		{id:81, label:'Chariot de Guerre',					pts:25};
var dethKopta =			{id:82, label:'Kopter',							pts:35};
var ChariotFlak =		{id:83, label:'Chariot Flak',						pts:35};
var ChariotKanon =		{id:84, label:'Chariot Kanon',					pts:35};
var speedsta1 =			{id:85, label:'Mekboy Speedsta',						pts:50, upto:1};
var speedsta2 =			{id:86, label:'Mekboy Speedsta',						pts:50, upto:2};
var speedsta3 =			{id:87, label:'Mekboy Speedsta',						pts:50, upto:3};
var battleFortress =	{id:88, label:'Forteresse de Bataille',				pts:125};
var battleFortress1 =	{id:89, label:'Forteresse de Bataille',				pts:125, upto:1};
var battleFortress2 =	{id:90, label:'Forteresse de Bataille',				pts:125, upto:2};
var battleFortress3 =	{id:91, label:'Forteresse de Bataille',				pts:125, upto:3};
var gunFortress =		{id:92, label:'Forteresse &agrave; Kanons',				pts:135};
var gunFortress1 =		{id:93, label:'Forteresse &agrave; Kanons',				pts:135, upto:1};
var gunFortress2 =		{id:94, label:'Forteresse &agrave; Kanons',				pts:135, upto:2};
var gunFortress3 =		{id:95, label:'Forteresse &agrave; Kanons',				pts:135, upto:3};
var warlord =			{id:96, label:'M&eacute;kano Motoboyz Ork\'Zangelz',			pts:0, general:true};

// WARBANDS
var spacecraft =		{id:500, label:'Spacecraft',	upto:1};
var warbandList =		{id:501, label:'Fondus d\'la Vitesse', options:[
	{id:502, label:'Bande de Guerre',							pts:-10, 	displayPts:200, upgrades:[nob1, boy1, kult4, warlord, Chokboyz, Buggie, Moto, Karbonisator, battlewagon, dethKopta, ChariotFlak, ChariotKanon, speedsta1]},
	{id:503, label:'Bande de Guerre (Mastok\')',				pts:-70, 	displayPts:375, upgrades:[nob2, boy2, kult8, warlord, Chokboyz, Buggie, Moto, Karbonisator, battlewagon, dethKopta, ChariotFlak, ChariotKanon, speedsta2]},
	{id:504, label:'Bande de Guerre (Tr&egrave; Mastok\')',		pts:-130, 	displayPts:550, upgrades:[nob3, boy3, kult12, warlord, Chokboyz, Buggie, Moto, Karbonisator, battlewagon, dethKopta, ChariotFlak, ChariotKanon, speedsta3]},
	{id:505, label:'Kulte d\'la Vitesse',						pts:0,	displayPts:200, upgrades:[kult8, dethKopta, ChariotFlak, ChariotKanon, speedsta1]},
	{id:506, label:'Kulte d\'la Vitesse (Mastok\')',			pts:-50,	displayPts:350, upgrades:[kult16, dethKopta, ChariotFlak, ChariotKanon, speedsta2]},
	{id:507, label:'Kulte d\'la Vitesse (Tr&egrave; Mastok\')',	pts:-100, 	displayPts:500, upgrades:[kult24, dethKopta, ChariotFlak, ChariotKanon, speedsta3]},
	{id:508, label:'Eclaireurs Motoboyz',						pts:150, units:'5 Motoboyz', upgrades:[warlord]},
	{id:509, label:'Eclaireurs Motoboyz (Big)',					pts:250, units:'10 Motoboyz', upgrades:[warlord]},
	{id:510, label:'Eclaireurs Motoboyz (\'Uge)',				pts:350, units:'15 Motoboyz', upgrades:[warlord]},
	{id:511, label:'Brigade Blitz',								pts:10, 	displayPts:150, upgrades:[nobz1, Buggie, Moto, Karbonisator, blitz2, speedsta1, gunFortress1]},
	{id:512, label:'Brigade Blitz (Mastok\')',					pts:-30, 	displayPts:250, upgrades:[nobz2, Buggie, Moto, Karbonisator, blitz3, speedsta2, gunFortress2]},
	{id:513, label:'Brigade Blitz (Tr&egrave; Mastok\')',		pts:-70, 	displayPts:350, upgrades:[nobz3, Buggie, Moto, Karbonisator, blitz4, speedsta3, gunFortress3]},
 	{id:514, label:'Escadron de Chassa-Bombas',					pts:0, displayPts: 200, upgrades:[fightaBomba], limited:true},
	{id:515, label:'Vesso de Debark\'ment',						pts:250, upgrades:[], limited:true},
	{id:516, label:'Kroiseur Kitu',								pts:200, upgrades:[], limited:true, group:spacecraft},
	{id:517, label:'Kroiseur d\'la Mort',						pts:250, upgrades:[], limited:true, group:spacecraft},
	{id:518, label:'Bande de Forteresses',						pts:275, 	upgrades:[forts1, nobz1, ChariotFlak, gunFortress1, battleFortress1, boy0]},
	{id:519, label:'Bande de Forteresses (Mastok\')',			pts:475, 	upgrades:[forts2, nobz2, ChariotFlak, gunFortress2, battleFortress2, boy0]},
	{id:520, label:'Bande de Forteresses (Tr&egrave; Mastok\')',pts:675, 	upgrades:[forts3, nobz3, ChariotFlak, gunFortress3, battleFortress3, boy0]}
]};

// DETAILS
var listData = {
	id:'Fondus d\'la Vitesse', version:'F-ERC 2010',
	sublists:[warbandList]
	};

// CALLBACK
listLoaded();

//http://f-erc-codex-epic-armageddon.e-monsite.com/