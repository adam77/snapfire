// MANDATORY UNITS
var ranger =		{id:11, label:'Ranger',		pts:25,	optional:true, minimum:4, upto:8};
var aspects =		{id:14, label:'Guerrier Aspect', upto:8, minimum:8, options:[
	{id:15, label:'Vengeurs',		pts:0,	optional:true},
	{id:16, label:'Scorpions',	pts:0,	optional:true},
	{id:17, label:'Banshees',	pts:0,	optional:true},
	{id:18, label:'Dragon de Feu',		pts:0,	optional:true},
	{id:19, label:'Araign&eacute;es Spectrales',		pts:0,	optional:true},
	{id:20, label:'Faucheurs Noirs',		pts:0,	optional:true},
	{id:21, label:'Aigles Chasseurs',		pts:0,	optional:true},
	{id:22, label:'Lances de Lumi&egrave;res',		pts:0,	optional:true}
]};
var pelaspects =		{id:70, label:'Guerrier Aspect', upto:4, minimum:4, options:[
	{id:71, label:'Vengeurs',		pts:0,	optional:true},
	{id:71, label:'Scorpions',	pts:0,	optional:true},
	{id:72, label:'Banshees',	pts:0,	optional:true},
	{id:73, label:'Dragon de Feu',		pts:0,	optional:true},
	{id:74, label:'Araign&eacute;es Spectrales',		pts:0,	optional:true},
	{id:75, label:'Faucheurs Noirs',		pts:0,	optional:true},
	{id:76, label:'Aigles Chasseurs',		pts:0,	optional:true},
	{id:77, label:'Lances de Lumi&egrave;res',		pts:0,	optional:true}
]};
var guardians =		{id:23, label:'Gardiens',	upto:7, minimum:7, options:[
	{id:24, label:'Gardiens',			pts:0, optional:true},
	{id:25, label:'Plateforme d\'Arme Lourde',pts:0, optional:true, upto:3}
]};
var jetbikers = 	{id:26, label:'Windriders',	upto:6, minimum:6, options:[
	{id:27, label:'Moto-Jet',			pts:0,	optional:true},
	{id:28, label:'Vyper', 				pts:0,	optional:true}
]};
var falcons =		{id:29, label:'Lame de Vaul', upto:6, minimum:5, options:[
	{id:30, label:'Falcon',				pts:50, optional:true},
	{id:31, label:'Prisme de Feu', 		pts:65, optional:true, upto:2},
	{id:60, label:'Firestorm', 			pts:50, optional:true, upto:1}
]};
var engines =		{id:33, label:'Machines of Vaul', upto:3, minimum:1, options:[
	{id:34, label:'Cobra',				pts:250, optional:true},
	{id:35, label:'Scorpion',			pts:250, optional:true},
	{id:36, label:'Storm Serpent',		pts:250, optional:true},
	{id:37, label:'Vengeur',		pts:250, optional:true}
]};

// UPGRADES
var exarchs =		{id:38, label:'Exarque', upto:2, options:[
	{id:39, label:'Exarque', 	pts:25, upto:1},
	{id:40, label:'Autarque', 	pts:75, general:true, upto:1}
]};

var waveserpent =	{id:41, label:'Wave Serpent',				pts:50};
var falcon =		{id:42, label:'Falcon',						pts:50};
var supportweapon =	{id:43, label:'3 Plateformes d\'Armes de Support',	pts:50,		upto:1};
var wraithguard =	{id:44, label:'Gardes Fant&ocirc;mes', upto:1, options:[
	{id:83, label:'2 Gardes Fant&ocirc;mes',				pts:100, optional:true},
	{id:84, label:'3 Gardes Fant&ocirc;mes',				pts:150, optional:true}
]};
var wraithlords =	{id:45, label:'3 Seigneurs Fant&ocirc;mes',				pts:175, 	upto:1};
var dragonship = 		{id:80, label:'Vaisseau Dragon', 	upto:1,		minimum:1, options:[
	{id:81, label:'Vaisseau Fant&ocirc;me',	pts:0,	optional:true},
	{id:82, label:'Vaisseau Dragon',	pts:150,optional:true}
]};


// TROUPES (3 per warhost)
var troupeList = 	{id:506, label:'Formation de Support', options:[
	{id:540, label:'Peloton de Guerriers Aspects', pts:175, upgrades:[pelaspects, exarchs, waveserpent, falcon], restricted:true, upto:1},
	{id:500, label:'Peloton de Rangers',				pts:0, 		displayPts:100, upgrades:[ranger], restricted:true},
	{id:502, label:'Peloton de Windriders',			pts:200, 	upgrades:[jetbikers], restricted:true},
	{id:501, label:'Escadron de Marcheurs de Combat',			pts:200,	units:'6 Marcheurs de Combat',	upgrades:[], restricted:true},
	{id:503, label:'Escadron de la Lame de Vaul',				pts:0, 	 	displayPts:250, upgrades:[falcons], restricted:true},
	{id:505, label:'Escadron de Machines de Vaul',	pts:0, 		displayPts:250, upgrades:[engines], restricted:true},
	{id:504, label:'Escadron de Tisseurs de Nuit',		pts:175, 	units:'3 Tisseurs de Nuit', upgrades:[], restricted:true}
]};


// WARHOSTS
var warhostList =	{id:513, label:'Formations Principales', options:[
	{id:507, label:'Wraithgate',	pts:50,		upgrades:[],	upto:1},
	{id:508, label:'Avatar',		pts:100,		upgrades:[],	upto:1},
	{id:510, label:'Ost de Guerriers Aspects', 			pts:300, restricting:true,	upgrades:[aspects, exarchs, waveserpent, falcon]},
	{id:511, label:'Ost de Gardiens',		 			pts:150, restricting:true,	units:'Grand Proph&egrave;te',	upgrades:[guardians, supportweapon, wraithguard, wraithlords]},
	{id:512, label:'Ost de Gardiens (Wave Serpents)',	pts:350, restricting:true,	units:'Grand Proph&egrave;te, 8 Gardiens, 4 Wave Serpents',	upgrades:[]}
]};

// ALLIES
var allyList = 		{id:523, label:'Formations de Support Lourd', options:[
	{id:515, label:'Vaisseau Fant&ocirc;me',	pts:150, upgrades:[dragonship], limited:true},
 	{id:517, label:'Titan Archonte',	pts:850, upgrades:[], limited:true, upto:1},
	{id:518, label:'Titan Fant&ocirc;me',	pts:750, upgrades:[], limited:true},
	{id:519, label:'Escadron de Revenant',pts:650, units:'Deux Titans Revenant', upgrades:[], limited:true},
	{id:520, label:'Escadrille de chasseurs Nightwings',	pts:300, units:'3 chasseurs Nightwing', upgrades:[], limited:true},
	{id:521, label:'Escadrille de bombardiers Phoenix', pts:400, units:'3 bombardiers Phoenix', upgrades:[], limited:true},
	{id:522, label:'Vampire', pts:200, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Liste du Vaisseau Monde Biel-Tan', version:'FERC 2010',
	sublists:[warhostList, troupeList, allyList],
	restriction:{limit:3, restricting:'Warhost', restricted:'Troupes'}};

// CALLBACK
listLoaded();
