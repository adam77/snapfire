// MANDATORY UNITS
var lemanRuss =			{id:10, label:'Leman Russ',		upto:1,	minimum:1, options:[
	{id:11, label:'10 Leman Russ',	pts:0,	optional:true},
	{id:12, label:'9 Leman Russ et 1 Vanquisher',	pts:0,	optional:true},
	{id:13, label:'7 Leman Russ et 3 Leman Russ D&eacute;molisseurs', pts:50, optional:true},
	{id:14, label:'6 Leman Russ, 3 Leman Russ D&eacute;molisseurs et 1 Vanquisher', pts:50, optional:true}
]};
var superh =			{id:15, label:'Super Lourd',	upto:3,		minimum:3, options:[
	{id:16, label:'Baneblade',		pts:0,	optional:true},
	{id:17, label:'Shadowsword',	pts:0,	optional:true}
]};
var superP =			{id:18, label:'Super Lourd',	upto:1,		minimum:1, options:[
	{id:19, label:'Baneblade',		pts:0,	optional:true},
	{id:20, label:'Shadowsword',	pts:0,	optional:true}
]};
var artilleryOpts =		{id:21, label:'Artillerie',		upto:9,		minimum:9, options:[
	{id:22, label:'Basilisk',		pts:0,	optional:true},
	{id:23, label:'Manticore',		pts:0,	optional:true}
]};
var spacecraft = 		{id:24, label:'Spacecraft', 	upto:1,		minimum:1, options:[
	{id:25, label:'Un Croiseur de Classe Lunar',	pts:0,	optional:true},
	{id:26, label:'Un Croiseur de Classe Emperor',	pts:150,optional:true}
]};
var arty = 				{id:27, label:'Artillerie',		upto:1,		minimum:1, options:[
	{id:28,	label:'3 Basilisks',	pts:0,optional:true},
	{id:29,	label:'3 Bombardes',		pts:25,optional:true},
	{id:30,	label:'3 Manticores',	pts:25,optional:true}
]};
var thunderbolt =		{id:31, label:'Chasseurs Thunderbolt',		minimum:1, upto:1, options:[
	{id:32, label:'2 Chasseurs Thunderbolt', pts:0, optional:true},
	{id:33, label:'4 Chasseurs Thunderbolt', pts:150, optional:true}
]};

var valkyrie =			{id:48, label:'4 Valkyrie',				pts:150, upto:1};
var commissaire0 =			{id:49, label:'Commissaire',					pts:0, upto:1, minimum:1};
var commissaire1 =			{id:47, label:'Commissaire',					pts:50, upto:1};

// UPGRADES (upto 3 per company)
var appuifeu = 	{id:35, label:'Peloton d\'Appui feu', upto:1, options:[
		{id:50, label:'4 unit&eacute;s d\'Appui Feu', pts:100, optional:true},
		{id:51, label:'4 unit&eacute;s d\'Appui Feu et 2 chim&egrave;re', pts:150, optional:true}
	]};
var infanterie = {id:36, label:'Peloton d\'infanterie', upto:1, options:[
		{id:60, label:'6 unit&eacute;s d\'Infanterie', pts:100, optional:true},
		{id:61, label:'6 unit&eacute;s d\'Infanterie et 3 chim&egrave;re', pts:175, optional:true}
	]};
var escchar =	{id:38, label:'Escadron de char', upto:1, options:[
		{id:52, label:'3 Leman Russ', pts:200, optional:true},
		{id:53, label:'3 Leman Russ Demolisseur', pts:250, optional:true}
	]};
var hellhound =	{id:40, label:'Escadron de Hellhound (3 Hellhound)',	pts:150, upto:1};
var griffon = 	{id:41, label:'Batterie de Griffon (3 Griffon)',		pts:100, upto:1};
var snipers = {id:42, label:'Snipers',	upto:1, options:[
		{id:54, label:'2 unit&eacute;s de Snipers', pts:50, optional:true},
		{id:55, label:'2 unit&eacute;s de Snipers et 1 chim&egrave;re', pts:75, optional:true}
	]};
var ogryns =	{id:43, label:'Ogryns',		upto:1, options:[
		{id:56, label:'2 unit&eacute;s d\'Ogryns', pts:50, optional:true},
		{id:57, label:'2 unit&eacute;s d\'Ogryns et 2 chim&egrave;res', pts:100, optional:true}
	]};
var flak =	{id:44, label:'Flak (1 Hydre)',	pts:50, upto:1};

// COMPANIES
var companyList =	{id:500, label:'Compagnies de la Garde Imp&eacute;riale', options:[
	{id:501, label:'QG R&eacute;gimentaire', 				pts:500, upgrades:[appuifeu, infanterie, escchar, hellhound, griffon, snipers, ogryns, flak, commissaire0], restricting:true, upto:1, units:'Commandant Supr&egrave;me, 12 Infanterie, 7 Chim&egrave;re'},
 	{id:502, label:'Compagnie d\'Infanterie M&eacute;canis&eacute;e', 	pts:400, upgrades:[appuifeu, infanterie, escchar, hellhound, griffon, snipers, ogryns, flak, commissaire0], restricting:true, units:'Commandant, 12 Infanterie, 7 Chim&egrave;re'},
	{id:503, label:'Compagnie d\'Infanterie', 				pts:250, upgrades:[appuifeu, infanterie, escchar, hellhound, griffon, snipers, ogryns, flak, commissaire0], restricting:true, units:'Commandant, 12 Infanterie'},
	{id:504, label:'Compagnie Blind&eacute;e', 					pts:650, upgrades:[appuifeu, infanterie, escchar, hellhound, griffon, snipers, ogryns, flak, lemanRuss, commissaire0], restricting:true},
	{id:505, label:'Compagnie de Blind&eacute;e Super Lourds', 		pts:500, upgrades:[appuifeu, infanterie, escchar, hellhound, griffon, snipers, ogryns, flak, superh, commissaire0], restricting:true},
 	{id:506, label:'Compagnie d\'Artillerie', 			pts:650, upgrades:[appuifeu, infanterie, escchar, hellhound, griffon, snipers, ogryns, flak, artilleryOpts, commissaire0], restricting:true}
]};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:510, label:'Formation d\'Appui de la Garde Imp&eacute;riale', options:[
	{id:511, label:'Peloton de Char Super Lourd', 		pts:200, upgrades:[superP], restricted:true},
	{id:512, label:'Batterie d\'Artillerie',				pts:225, upgrades:[arty], restricted:true},
	{id:513, label:'Batterie de Missile Deathstrike',	pts:250, upgrades:[], restricted:true, upto:1, units:'2 Lances-Missile Deathstrike'},
	{id:514, label:'Batterie Antia&eacute;rienne',					pts:150, upgrades:[], restricted:true, units:'3 Hydre'},
	{id:515, label:'Escadron de Sentinelle',				pts:100, upgrades:[], restricted:true, units:'4 Sentinelle'},
	{id:516, label:'Peloton de Cavalier ou Motos', 			pts:150, upgrades:[commissaire1], restricted:true, units:'6 Cavalier ou Motos Imp&eacute;riales'},
	{id:517, label:'Peloton de Troupes de Choc',			pts:200, upgrades:[valkyrie, commissaire1], restricted:true, units:'8 Troupes de Choc'},
	{id:518, label:'Escadron de Vulture',				pts:300, upgrades:[], restricted:true, units:'4 Vulture'},
	{id:519, label:'Soutien Orbital',				pts:150, upgrades:[spacecraft], restricted:true, upto:1}
]};

// NAVY
var navyList =			{id:520, label:'Appareils de la Flotte', options:[
	{id:521, label:'Escadrille de Thunderbolt',	pts:150, upgrades:[thunderbolt], limited:true},
	{id:522, label:'Escadrille de Bombardiers',		pts:300, units:'2 Bombardiers Marauder', upgrades:[], limited:true}
]};

// TITANS
var titanList = 		{id:530, label:'Soutien Titanique', options:[
	{id:531, label:'Un Titan Warlord',	pts:850, upgrades:[], limited:true},
	{id:532, label:'Un Titan Reaver',	pts:650, upgrades:[], limited:true},
	{id:533, label:'Un Titan Warhound',		pts:275, upgrades:[], limited:true},
	{id:534, label:'Meute de Warhound',		pts:500, upgrades:[], units:'2 Titans Warhound', limited:true}
]};

// DETAILS
var listData = {
	id:'Liste d\'Arm&eacute;e de la Garde Imp&eacute;riale', version:'FERC 2010',
	sublists:[companyList, supportList, navyList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'},
	notes:[
	'Attention, la restriction de 3 am&eacute;lioration par compagnie n\'est pas impl&eacute;mant&eacute; pour plus de fl&eacute;xibilit&eacute;']
	};

// CALLBACK
listLoaded();
