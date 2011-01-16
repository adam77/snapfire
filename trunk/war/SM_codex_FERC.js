// MANDATORY UNITS
var transport =			{id:10, label:'Transport', upto:1, options:[
	{id:11, label:'Rhinos',			pts:0, optional:true},
	{id:12, label:'Dreadnought',			pts:0, optional:true},
	{id:13, label:'Module d\'Atterrissage',		pts:0, optional:true},
	{id:14, label:'A&eacute;roport&eacute;',		pts:0, optional:true}
]};
var bikes = 			{id:15, label:'Bikes',	upto:5, minimum:5, options:[
	{id:16, label:'Motos',		pts:0, optional:true},
	{id:17, label:'Motos d\'Assaut', 	pts:0, optional:true}
]};
var speeders =			{id:18, label:'Speeders', upto:5, minimum:5, options:[
	{id:19, label:'Land Speeder',	pts:0, optional:true},
	{id:20, label:'Tornado',		pts:10, optional:true},
	{id:21, label:'Typhoon',		pts:25, optional:true}
]};
var predators =			{id:22, label:'Predators', upto:4, minimum:4, options:[
	{id:23, label:'Annihilator',	pts:0, optional:true},
	{id:24, label:'Destructor',		pts:0, optional:true}
]};

// UPGRADES
var commander =			{id:25, label:'Cmdt', upto:1, options:[
	{id:26, label:'Capitaine',			pts:50},
	{id:27, label:'Chapelain', 			pts:50},
	{id:28, label:'Archiviste', 			pts:50},
	{id:29, label:'Cmdt Supr&egrave;me',	pts:50,	upto:1, general:true}
]};
var dreadnought = 		{id:30, label:'Dreadnought', 				pts:50, upto:2};
var hunter = 			{id:31, label:'Hunter', 					pts:50, upto:1};
var landRaiders = 		{id:32, label:'Land Raider', 				pts:75, upto:4};
var razorbacks6 =		{id:33, label:'Razorback',					pts:25, upto:6};
var sniper =			{id:34, label:'Sniper',						pts:50, upto:1};
var vindicator = 		{id:35, label:'Vindicator',					pts:65, upto:2};
var thunderbolt =		{id:36, label:'Chasseurs Thunderbolt',		minimum:1, upto:1, options:[
	{id:37, label:'2 Chasseurs Thunderbolt', pts:0, optional:true},
	{id:38, label:'4 Chasseurs Thunderbolt', pts:150, optional:true}
]};
var supportLourd = 		{id:39, label:'Support Lourd',				minimum:0, upto:2, options:[
	{id:40, label:'Pr&eacute;dator Annihilator',	pts:65, optional:true},
	{id:41, label:'Pr&eacute;dator Destructor',		pts:65, optional:true},
	{id:42, label:'Land Raider', 				pts:75, optional:true},
	{id:43, label:'Vindicator',					pts:65, optional:true}
]};
var teleportation = {id:44, label:'T&eacute;l&eacute;portation', pts:50, upto:1};
var razorbacks4 =		{id:45, label:'Razorback',					pts:25, upto:4};

// DETACHMENTS
var spacecraft = 		{id:500, label:'Spacecraft', upto:1};
var detachmentList =	{id:501, label:'D&eacute;tachement Space Marines', options:[
	{id:502, label:'Tactiques',		pts:275, units:'6 Tactiques', upgrades:[commander, razorbacks6, dreadnought, hunter, supportLourd, transport]},
	{id:503, label:'D&eacute;vastators',		pts:250, units:'4 D&eacute;vastators', upgrades:[commander, razorbacks4, dreadnought, hunter, supportLourd, transport]},
	{id:504, label:'Assauts', 		pts:175, units:'4 Assauts', upgrades:[commander, vindicator]},
	{id:505, label:'Terminators',		pts:300, units:'4 Terminators', upgrades:[commander, vindicator, dreadnought, landRaiders, teleportation]},
	{id:506, label:'Scouts',			pts:150, units:'4 Scouts', upgrades:[commander, razorbacks4, sniper, transport]},
	{id:507, label:'Motos', 			pts:200, upgrades:[bikes, commander]},
	{id:508, label:'Land Speeders',				pts:200, upgrades:[speeders, commander]},
	{id:509, label:'Land Raiders',				pts:350, units:'4 Land Raiders', upgrades:[commander, hunter, vindicator]},
	{id:510, label:'Pr&eacute;dators',					pts:250, upgrades:[predators, commander, hunter, vindicator]},
	{id:511, label:'Vindicators',				pts:250, units:'4 Vindicators', upgrades:[commander, hunter]},
	{id:512, label:'Whirlwinds',				pts:300, units:'4 Whirlwinds', upgrades:[commander, hunter]},
	{id:513, label:'Thunderhawk',				pts:225, upgrades:[]},
	{id:514, label:'Barge de D&eacute;barquement',				pts:400, upgrades:[]},
	{id:515, label:'Croiseur d\'Attaque',			pts:200, upgrades:[], group:spacecraft}, 
	{id:516, label:'Barge de Bataille',				pts:350, upgrades:[], group:spacecraft}
]};

// NAVY
var navyList =			{id:517, label:'Appareils de la Flotte', options:[
	{id:518, label:'Escadrille de Thunderbolt',	pts:150, upgrades:[thunderbolt], limited:true},
	{id:519, label:'Escadrille de Bombardiers',		pts:300, units:'2 Bombardiers Marauder', upgrades:[], limited:true}
]};

// TITANS
var titanList = 		{id:520, label:'Soutien Titanique', options:[
	{id:521, label:'Un Titan Warlord',	pts:850, upgrades:[], limited:true},
	{id:522, label:'Un Titan Reaver',	pts:650, upgrades:[], limited:true},
	{id:523, label:'Un Titan Warhound',		pts:275, upgrades:[], limited:true},
	{id:524, label:'Deux Titans Warhound',		pts:500, upgrades:[], limited:true}
]};

// DETAILS
var listData = {
	id:'Codex Astartes', version:'FERC 17/05/2010',
	sublists:[detachmentList, navyList, titanList]
};

// CALLBACK
listLoaded();

