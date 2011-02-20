// MANDATORY UNITS
var raptors = 		{id:11, label:'Raptor', pts:35, optional:true, upto:8, minimum:4};
var terms =			{id:13, label:'Elus', pts:65, optional:true, upto:6, minimum:4};
var lords = 		{id:14, label:'Personnage du Chaos', upto:1, minimum:1, options:[
	{id:15, label:'Seigneur du Chaos', 	pts:0, optional:true},
	{id:16, label:'Seigneur Sorcier du Chaos', 	pts:0, optional:true},
	{id:18, label:'Seigneur de Guerre du Chaos (Commandant Supr&egrave;me)', 	pts:0, optional:true, general:true},
]};
var demonlords = 		{id:14, label:'Prince D&eacute;mon', upto:1, minimum:1, options:[
	{id:88, label:'Seigneur du Chaos', 	pts:0, optional:true},
	{id:89, label:'Seigneur Sorcier du Chaos', 	pts:0, optional:true},
	{id:99, label:'Seigneur de Guerre du Chaos (Commandant Supr&egrave;me)', 	pts:0, optional:true, general:true},
	{id:17, label:'Prince D&eacute;mon', 	pts:50, optional:true},
	{id:38, label:'Prince D&eacute;mon (Commandant Supr&egrave;me)', 	pts:50, optional:true, general:true}	
]};
var armour0 =		{id:90, label:'Blind&eacute;s du Chaos',pts:175, upto:1, options:[
	{id:91, label:'4 Pr&eacute;dator du Chaos', 	pts:0, optional:true},
	{id:92, label:'4 Land Raider du Chaos', 	pts:100, optional:true}
]};
var armour =		{id:19, label:'Blind&eacute;s du Chaos', upto:4, minimum:0, options:[
	{id:20, label:'Pr&eacute;dator du Chaos', 	pts:50, optional:true},
	{id:93, label:'Vindicator du Chaos', 	pts:50, optional:true},
	{id:21, label:'Land Raider du Chaos', 	pts:75, optional:true}
]};
var supportlourd =		{id:19, label:'Support Lourds', upto:2, minimum:0, options:[
	{id:85, label:'Pr&eacute;dator du Chaos', 	pts:50, optional:true},
	{id:84, label:'Vindicator du Chaos', 	pts:50, optional:true}
]};
var decim =			{id:23, label:'D&eacute;cimator', 			pts:250, upto:3, minimum:1};
var deathwheel =	{id:24, label:'Deathwheel', 		pts:275, upto:3, minimum:1};
var faction =		{id:30,	label:'Faction',	upto:1,	minimum:1, options:[
	{id:35,	label:'(Chaos Indivisible)',	pts:0,	optional:true},
	{id:31,	label:'(Khorne)',			pts:0,	optional:true},
	{id:32,	label:'(Nurgle)',			pts:0,	optional:true},
	{id:33,	label:'(Slaanesh)',			pts:0,	optional:true},
	{id:34,	label:'(Tzeentch)',			pts:0,	optional:true}
]};
var cultmarine =		{id:94,	label:'Marines du Culte', pts:150,	upto:1, options:[
	{id:95,	label:'4 Berserkers (Khorne)',			pts:0,	optional:true},
	{id:96,	label:'4 Marines de la Peste (Nurgle)',			pts:0,	optional:true},
	{id:97,	label:'4 Noise Marines (Slaanesh)',			pts:0,	optional:true},
	{id:98,	label:'4 Thousans Sons (Tzeentch)',			pts:0,	optional:true}
]};
// UPGRADES
var pact = 			{id:40, label:'Pacte D&eacute;moniaque', upto:1, pts:25};
var dread = 		{id:41, label:'Dreadnought', upto:3, pts:50};
var defiler = 		{id:42, label:'Defiler', upto:3, pts:75};
var raiders =		{id:43, label:'Land Raider du Chaos', upto:4, pts:75};
var claws =			{id:44, label:'Module d\'atterissage Dreadclaw', pts:5};
var obliterator =	{id:45, label:'Obliterator', upto:3, pts:75};
var rhino =			{id:48, label:'Rhino', pts:10, upto:8};
var havoc =			{id:49, label:'4 Havocs', upto:1, pts:150};
var greater =		{id:51, label:'D&eacute;mon Majeur', upto:1, pts:175};
var stalker = 		{id:87, label:'Stalker', upto:1, pts:50};
var soutienorb = {id:86, label:'Soutien Orbital', pts:150, upto:1, options:[
	{id:85, label:'Croiseur de Classe Devastation',	pts:0, upgrades:[], optional:true}, 
	{id:84, label:'Cuirass&eacute; de Classe Despoiler',pts:100, upgrades:[], optional:true}
]};


// DETACHMENTS
var demonmajeur = {id:600, label:'D&eacute;mon Majeur', upto:1};
var detachmentList =	{id:500, label:'DETACHMENTS', options:[
	{id:504, label:'Suite de la Black Legion',		pts:275, units:'8 Space Marines du Chaos', upgrades:[demonlords, rhino, havoc, cultmarine, dread, defiler, raiders, claws, obliterator, pact, stalker, supportlourd], restricting:true},
	{id:505, label:'Suite d\'Elus de la Black Legion',			pts:0, upto:2, displayPts:260, upgrades:[demonlords,terms, dread, defiler, raiders, claws, obliterator, pact, stalker, supportlourd]},
	{id:508, label:'Culte Raptor', 				pts:0, upto:1, displayPts:140, upgrades:[lords,raptors,pact]},
	{id:507, label:'Forlorn Hope Retinue',		pts:125, units:'4 Space Marines du Chaos (Eclaireurs)', upgrades:[rhino,dread,pact], restricted:true},
	{id:503, label:'Compagnies de Motos de la Black Legion',				pts:300, units:'8 Motos de la Black Legion', upgrades:[lords,pact]},
	{id:501, label:'Compagnie Blind&eacute; de la Black Legion',			pts:0, displayPts:175, upgrades:[armour0,armour,defiler,stalker]},
	{id:502, label:'Compagnie d\'Assaut de la Black Legion',			pts:0, displayPts:250, upto:2, upgrades:[decim,defiler]},
	{id:506, label:'D&eacute;mon Mineur',				pts:175, units:'8 D&eacute;mons Mineurs', upto:2, upgrades:[greater]},	
	{id:506, label:'D&eacute;mon Majeur',				pts:175, units:'1 D&eacute;mon Majeur', upto:1, upgrades:[]},
	{id:510, label:'Soutien Orbital',	pts:0, displayPts:150, upgrades:[soutienorb], upto:1}
]};

// NAVY
var navyList =			{id:535, label:'Flotte de Guerre du Chaos', options:[
	{id:530, label:'Escadrille d\'intercepteurs Hellblade',	pts:200, units:'3 Intercepteurs Hellblade', upgrades:[], limited:true},
	{id:531, label:'Escadrille de chasseurs-bombardiers Helltalon',	pts:250, units:'2 chasseurs-bombardiers Helltalon', upgrades:[], limited:true},
]};

// TITANS
var titanList = 		{id:523, label:'L&eacute;gions Titanique du Chaos', options:[
	{id:524, label:'Deathwheel', pts:0, displayPts:275, upgrades:[deathwheel], limited:true},
	{id:520, label:'Banelord Titan',	pts:800, upgrades:[], limited:true},
	{id:521, label:'Ravager Titan',		pts:650, upgrades:[], limited:true},
	{id:522, label:'Feral Titan',		pts:300, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Black Legion', version:'FERC 2010',
	sublists:[detachmentList, navyList, titanList],
	restriction:{limit:1, restricting:'Suite de la Black Legion', restricted:'Forlorn Hope'}};

// CALLBACK
listLoaded();

