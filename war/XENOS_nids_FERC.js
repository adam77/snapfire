// MANDATORY UNITS
var GTcentre =			{id:10, label:'Guerriers ou Zoanthropes',		upto:2,	minimum:2, options:[
	{id:11, label:'Guerriers Tyranides',	pts:0,	optional:true},
	{id:12, label:'Guerriers Tyranides Ail&eacute;es',	pts:0,	optional:true},
	{id:13, label:'Zoanthrope',	pts:0,	optional:true}
]};
var GTrelais =			{id:14, label:'Guerriers ou Zoanthropes',		upto:3,	minimum:3, options:[
	{id:15, label:'Guerriers Tyranides',	pts:0,	optional:true},
	{id:16, label:'Guerriers Tyranides Ail&eacute;es',	pts:0,	optional:true},
	{id:17, label:'Zoanthrope',	pts:0,	optional:true}
]};
var Harridan =			{id:18, label:'Harridan',	upto:2,		minimum:1, options:[
	{id:19, label:'Harridan',		pts:150,	optional:true}
]};
var BioTitan =		{id:21, label:'Bio-Titan',		upto:1,		minimum:1, options:[
	{id:22, label:'Hi&eacute;rophant',		pts:0,	optional:true},
	{id:23, label:'Hydraphant',		pts:200,	optional:true}
]};
var Harpies = 		{id:24, label:'Harpies', 	upto:4,		minimum:2, options:[
	{id:25, label:'Harpies',	pts:75,	optional:true}
]};
var BriSie = 				{id:27, label:'Briseur de Si&egrave;ge',		upto:3,		minimum:3, options:[
	{id:28,	label:'Hi&eacute;rodule Faucheur',	pts:0,optional:true},
	{id:29,	label:'Hi&eacute;rodule Cracheur',		pts:25,optional:true}
]};
var VaisseauRuche =		{id:31, label:'Bio-Vaisseau',		minimum:1, upto:1, options:[
	{id:32, label:'Croiseur Razorfiend', pts:0, optional:true},
	{id:33, label:'Vaisseau Ruche', pts:100, optional:true}
]};
var SporeMine =		{id:34, label:'Spore Mine A&eacute;rienne',		minimum:6, upto:9, options:[
	{id:35, label:'Grappe de Spores', pts:25, optional:true}
]};
var Genestealer =		{id:36, label:'Genestealer',		minimum:6, upto:9, options:[
	{id:37, label:'Genestealers', pts:25, optional:true}
]};
var Lictor =		{id:38, label:'Lictors',		minimum:4, upto:6, options:[
	{id:39, label:'Lictor', pts:50, optional:true}
]};

var Alpha =			{id:40, label:'Genestealer Alpha',				pts:50, upto:1};
var tyrant =		{id:50, label:'Prince Tyranid',				pts:0, upto:1, minimum:1, options:[
	{id:51, label:'Prince Tyranide', pts:0, optional:true},
	{id:52, label:'Prince Tyranide Ail&eacute;', pts:0, optional:true},
	{id:53, label:'Ma&icirc;tre des Essaims', pts:25, optional:true, general:true},
	{id:54, label:'Ma&icirc;tre des Essaims Ail&eacute;', pts:25, optional:true, general:true}
]};


// UPGRADES (upto 3 per company)
var Nexus = 	{id:100, label:'Essaims Synaptique', upto:6, minimum:2, options:[
		{id:101, label:'6 gaunts (Horma ou Terma)', pts:75, optional:true},
		{id:102, label:'3 Biovores', pts:75, optional:true},
		{id:103, label:'4 Gargouilles', pts:50, optional:true},
		{id:104, label:'3 Carnifex', pts:150, optional:true},
		{id:105, label:'3 Dactylis ou Exocrines', pts:150, optional:true},
		{id:106, label:'3 Haruspex ou Malefactors', pts:150, optional:true},
		{id:107, label:'1 Hi&eacute;rodule Cracheur', pts:175, optional:true},
		{id:108, label:'1 Hi&eacute;rodule Faucheur', pts:150, optional:true},
		{id:109, label:'1 Trygon ou 3 Rôdeurs', pts:100, optional:true}
	]};
var Centre = 	{id:110, label:'Essaims Synaptique', upto:5, minimum:2, options:[
		{id:111, label:'6 gaunts (Horma ou Terma)', pts:75, optional:true},
		{id:112, label:'3 Biovores', pts:75, optional:true},
		{id:113, label:'4 Gargouilles', pts:50, optional:true},
		{id:114, label:'3 Carnifex', pts:150, optional:true},
		{id:115, label:'3 Dactylis ou Exocrines', pts:150, optional:true},
		{id:116, label:'3 Haruspex ou Malefactors', pts:150, optional:true},
		{id:117, label:'1 Hi&eacute;rodule Cracheur', pts:175, optional:true},
		{id:118, label:'1 Hi&eacute;rodule Faucheur', pts:150, optional:true},
		{id:119, label:'1 Trygon ou 3 Rôdeurs', pts:100, optional:true},
		{id:120, label:'Spores Myc&eacute;tiques', pts:50, optional:true}
	]};
var Relais = 	{id:130, label:'Essaims Synaptique', upto:4, minimum:2, options:[
		{id:131, label:'6 gaunts (Horma ou Terma)', pts:75, optional:true},
		{id:132, label:'3 Biovores', pts:75, optional:true},
		{id:133, label:'4 Gargouilles', pts:50, optional:true},
		{id:134, label:'3 Carnifex', pts:150, optional:true},
		{id:135, label:'3 Dactylis ou Exocrines', pts:150, optional:true},
		{id:136, label:'3 Haruspex ou Malefactors', pts:150, optional:true},
		{id:137, label:'1 Hi&eacute;rodule Cracheur', pts:175, optional:true},
		{id:138, label:'1 Hi&eacute;rodule Faucheur', pts:150, optional:true},
		{id:139, label:'1 Trygon ou 3 Rôdeurs', pts:100, optional:true},
		{id:140, label:'Spores Myc&eacute;tiques', pts:50, optional:true}
	]};
	var Fouisseur = 	{id:150, label:'Essaims Synaptique', upto:2, minimum:1, options:[
		{id:151, label:'1 Trygon ou 3 Rôdeurs', pts:100, optional:true},
		{id:152, label:'6 gaunts (Horma ou Terma)', pts:75, optional:true}
	]};
	var Chasse = 	{id:155, label:'Essaims Synaptique', upto:2, minimum:1, options:[
		{id:133, label:'4 Gargouilles', pts:50, optional:true}
	]};
	
	
// Synapses
var GSList =	{id:500, label:'Groupes Synaptiques', options:[
	{id:501, label:'Groupe Nexus', 				pts:400, upgrades:[Nexus], restricting:true, upto:1, units:'Dominatrix'},
 	{id:502, label:'Centre Synaptique', 	pts:100, upgrades:[tyrant, GTcentre, Centre], restricting:true},
	{id:503, label:'Relais Synaptique', 				pts:75, upgrades:[GTrelais, Relais], restricting:true},
	{id:504, label:'Groupe d\'infestation', 					pts:125, upgrades:[Fouisseur], units:'Trygon Prime', restricting:true},
	{id:505, label:'Groupe de Chasse', 		pts:0, displayPts:150, upgrades:[Harridan, Chasse], restricting:true}
]};

// Essaims indpt communs
var EICList = 		{id:530, label:'Essaims Ind&eacute;pendants Communs', options:[
	{id:531, label:'Spores mines a&eacute;riennes',	pts:0, displayPts:150, upgrades:[SporeMine], restricted:true},
	{id:532, label:'Essaims de Genestealers',	pts:0, displayPts:150, upgrades:[Genestealer, Alpha], restricted:true},
	{id:533, label:'Essaims de Lictors',		pts:-50, displayPts:150, upgrades:[Lictor], restricted:true, upto:2},
]};

// Essaims indpt rares
var EIRList = 		{id:540, label:'Essaims Ind&eacute;pendants Rares', options:[
	{id:541, label:'Bio-aviation',	pts:25, displayPts:175, upgrades:[Harpies], limited:true, restricted:true},
	{id:542, label:'Briseur de Si&egrave;ge',	pts:400, upgrades:[BriSie], limited:true, restricted:true},
	{id:543, label:'Bio-Titan',		pts:350, upgrades:[BioTitan], limited:true, restricted:true},
	{id:544, label:'Bio-Vaisseau',		pts:150, upgrades:[VaisseauRuche], limited:true, restricted:true, upto:1}
]};

// DETAILS
var listData = {
	id:'Liste d\'Arm&eacute;e Tyranide', version:'NORD STRATEGIE',
	sublists:[GSList, EICList ,EIRList],
	restriction:{limit:1, restricting:'Synapse', restricted:'Independant'}
	};

// CALLBACK
listLoaded();
