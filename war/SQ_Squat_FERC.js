// MANDATORY UNITS
var guilde =			{id:10, label:'Escadron de la Guilde',		upto:6,	minimum:6, options:[
	{id:11, label:'Motos', pts:0, optional:true},
	{id:12, label:'Trikes', pts:10, optional:true}
]};
var conf =			{id:13, label:'Confr&eacute;rie de Guerriers', options:[
	{id:14, label:'1 Seigneur',		pts:0},
	{id:15, label:'Guerriers',	pts:0,	minimum:7, upto:7},
	{id:16, label:'1 Seigneur de Guerre',	pts:100,	upto:1, optional:true},
	{id:17, label:'1 Ancêtre Vivant',	pts:75,	upto:1, optional:true},
	{id:18, label:'2 Gardes du Foyer',	pts:100,	upto:1, optional:true},
	{id:19, label:'2 Tonnerres',	pts:75,	upto:1, optional:true},
	{id:20, label:'4 Guerriers suppl&eacute;mentaire',	pts:100,	upto:1, optional:true}
]};
var berserker =			{id:21, label:'Unit&eacute; Berserker', options:[
	{id:22, label:'1 Seigneur',		pts:0},
	{id:23, label:'Berserkers',	pts:0,	minimum:7, upto:7},
	{id:24, label:'4 Berserkers suppl&eacute;mentaires',	pts:75,	upto:1, optional:true}
]};
var tonnerre =			{id:25, label:'Unit&eacute; Tonnerre', options:[
	{id:26, label:'6 Tonnerres',		pts:0},
	{id:27, label:'2 Tonnerres suppl&eacute;mentaires',	pts:75,	upto:1, optional:true}
]};
var batterie =			{id:28, label:'Grande Batterie', upto:1, options:[
	{id:29, label:'6 Mortier-Taupes',	pts:0, optional:true},
	{id:30, label:'6 Thudd-Guns',	pts:0, optional:true},
	{id:31, label:'6 Tarentules',	pts:0, optional:true}
]};
var tunnel = {id:32, label:'Tunneliers',	pts:0, options:[
	{id:33, label:'Termites',	pts:20, optional:true},
	{id:34, label:'Taupes',	pts:60, optional:true},
	{id:35, label:'Fouisseuses',	pts:120, optional:true}
]};
var tunnelber = {id:36, label:'Tunneliers',	pts:0, options:[
	{id:37, label:'Termites',	pts:10, optional:true},
	{id:38, label:'Taupes',	pts:30, optional:true},
	{id:39, label:'Fouisseuses',	pts:60, optional:true}
]};
var trainB = {id:40 , label:'Train', pts:0, upto:1, options:[
	{id:41, label:'Wagon Berserker',	pts:0, optional:true},
	{id:42, label:'Wagon Bombardier',	pts:0, optional:true},
	{id:43, label:'Wagon Dragon',	pts:0, optional:true},
	{id:44, label:'Wagon Mortier',	pts:0, optional:true}
]};
var motosguilde = {id:45, label:'motos',	pts:0,	upto:1, options:[
	{id:46, label:'2 Motos suppl&eacute;mentaires',	pts:50, optional:true},
	{id:47, label:'1 Motos et 1 Trike suppl&eacute;mentaires',	pts:60, optional:true},
	{id:48, label:'2 Trikes suppl&eacute;mentaires',	pts:70, optional:true}
]};
var maitreguilde = {id:49, label:'Ma&icirc;tre de Guilde',	pts:50, upto:1};
var rhinos = {id:50, label:'Rhinos',	pts:10};
var leviathan = {id:51, label:'L&eacute;viathan', pts:300};
var canonF = {id:52, label:'Canon Foudre',	pts:50,	upto:2};

// COMPANIES
var companyList =	{id:500, label:'Formation Principales', options:[
	{id:501, label:'Confr&eacute;rie de Guerrier', 				pts:225, upgrades:[conf, tunnel, rhinos, leviathan], restricting:true},
 	{id:502, label:'Unit&eacute; Berserker', 	pts:200, upgrades:[berserker, tunnelber, rhinos], restricting:true}
]};

// SUPPORT (2 per company, no upgrades allowed)
var supportList =	{id:510, label:'Formations de Soutiens', options:[
	{id:511, label:'Unit&eacute; Tonnerre', 		pts:225, upgrades:[tonnerre, tunnel, rhinos], restricted:true},
	{id:512, label:'Aile de Gyrocopt&egrave;res d\'Assaut',				pts:250, upgrades:[], units:'5 Aigles de Fer', restricted:true},
	{id:513, label:'Escadron de la Guilde',	pts:175, upgrades:[guilde, motosguilde, maitreguilde], restricted:true},
	{id:514, label:'Unit&eacute; de Robots de la Guilde',					pts:200, upgrades:[], restricted:true, units:'5 Robots'},
	{id:515, label:'Grande Batterie',				pts:150, upgrades:[batterie, canonF], restricted:true},
	{id:516, label:'Batterie Foudre', 			pts:150, upgrades:[], restricted:true, units:'3 Canon Foudre'},
	{id:517, label:'L&eacute;viathan',			pts:350, upgrades:[], units:'1 L&eacute;viathan', restricted:true}
]};

// NAVY
var warengineList =			{id:520, label:'Engins de Guerre', options:[
	{id:521, label:'Train Blind&eacute;',	pts:850, upgrades:[trainB],units:'1 Locomotive, 3 Wagons Berserker', limited:true},
	{id:522, label:'Colossus',		pts:500, units:'1 Colossus, 1 Faucon de Fer', upgrades:[], limited:true},
	{id:523, label:'Cyclope',		pts:500, units:'1 Cyclope', upgrades:[], limited:true},
	{id:524, label:'Batterie d\'Artillerie Super-Lourde Goliath',		pts:400, units:'2 Goliaths', upgrades:[canonF], limited:true},
	{id:525, label:'Corps d\'Attaque A&eacute;rien',		pts:350, units:'2 Suzerains', upgrades:[], limited:true},
	{id:526, label:'Dirigeable Blind&eacute; Suzerain',		pts:200, units:'1 Suzerain', upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Liste d\'Arm&eacute;e Squat', version:'FERC 2010',
	sublists:[companyList, supportList, warengineList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}
	};

// CALLBACK
listLoaded();
