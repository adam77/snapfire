// MANDATORY UNITS
var escort =	{id:11, label:'Corsair Class Escort',	pts:150,	optional:true,	minimum:1, upto:3};
var raven =		{id:13, label:'Raven Fighter',			pts:100,	optional:true,	minimum:2, upto:3};
var razor =		{id:15, label:'Razorwing Bomber',		pts:125,	optional:true,	minimum:2, upto:3};
var barge =		{id:23,	label:'Vessel of Pain',			pts:250,	optional:true, 	minimum:1, upto:2};
var dracons2 =	{id:16, label:'Dracon', minimum:1, upto:1, options:[
	{id:17, label:'Dracon', 				pts:50, 	optional:true},
	{id:18, label:'Archon', 				pts:100,	optional:true, general:true}
]};
var ravagers =	{id:19,	label:'Ravagers', minimum:1, upto:1, options:[
	{id:20,	label:'4 Ravagers',				pts:0,		optional:true},
	{id:21,	label:'6 Ravagers',				pts:100,	optional:true}
]};

// UPGRADES
var dracons =		{id:50, label:'Dracon', upto:1, options:[
	{id:51, label:'Dracon', 			pts:50},
	{id:52, label:'Archon', 			pts:100, general:true}
]};
var sybarite =		{id:53, label:'Sybarite', 			pts:25,		upto:1};
var upgrades2 =		{id:54, label:'Infantry Upgrades',	upto:2, options:[
	{id:55, label:'2 Incubi',			pts:125},
	{id:56, label:'2 Wyches',			pts:100},
	{id:57, label:'2 Warriors',			pts:100},
	{id:58, label:'2 Mandrakes',		pts:125},
	{id:59, label:'2 Scourges',			pts:125},
	{id:60, label:'Haemonculus, Grotesque',	pts:150}
]};
var ravager =		{id:61, label:'Ravager',			pts:50,		upto:1};
var upgrades =		{id:62, label:'Infantry Upgrade',	upto:1, options:[
	{id:63, label:'2 Incubi',			pts:125},
	{id:64, label:'2 Wyches',			pts:100},
	{id:65, label:'2 Warriors',			pts:100},
	{id:66, label:'2 Mandrakes',		pts:125},
	{id:67, label:'2 Scourges',			pts:125},
	{id:68, label:'Haemonculus, Grotesque',	pts:150},
	{id:75,	label:'2 Warp Beasts',		pts:100},
	{id:76,	label:'2 Hellions',			pts:100},
	{id:77,	label:'2 Reavers',			pts:100}
]};
var pain =			{id:69, label:'Vessel of Pain',		pts:250,	upto:1};
var raider =		{id:70, label:'Raider',				pts:0,		upto:4};
var pleasure =		{id:71, label:'Barge of Pleasure',	pts:125,	upto:2};
var slave =			{id:72,	label:'Slavebringer',		pts:200,	upto:1};
var talos =			{id:73,	label:'Talos',				pts:50,		upto:2};
var perditor =		{id:74,	label:'Perditor',			pts:150,	upto:2};

// PARTISANS (2 per KABAL) - todo:fix infantry upgrades
var troupeList = {id:500, label:'PARTISANS', options:[
	{id:501, label:'Haemonculi Coven',			pts:250, 		units:'2 Haemonculi, 4 Grotesques', upgrades:[talos,perditor,sybarite,pain,raider,slave], restricted:true},
	{id:502, label:'Talos Swarm',				pts:200, 		units:'4 Talos', upgrades:[talos,perditor,slave], restricted:true},
	{id:503, label:'Wych Cult',					pts:200, 		units:'6 Wyches', upgrades:[upgrades,sybarite,raider,pleasure,slave], restricted:true},
	{id:504, label:'Hellion Murder',			pts:200, 		units:'6 Hellions', upgrades:[upgrades,sybarite], restricted:true},
	{id:505, label:'Reaver Gang',				pts:200, 		units:'6 Reavers', 	upgrades:[upgrades,sybarite], restricted:true},
	{id:506, label:'Mandrake Throng',			pts:225, 		units:'6 Mandrakes', upgrades:[upgrades], restricted:true},
	{id:507, label:'Scourge Flight',			pts:225, 		units:'6 Scourges', upgrades:[upgrades,sybarite], restricted:true},
	{id:508, label:'Heavy Barges',				pts:0, displayPts:250,	upgrades:[barge], restricted:true}
]};

// INDIVIDUALS
var individualList = {id:532, label:'INDIVIDUALS', options:[
	{id:530, label:'Webway Portal',	pts:50,		upgrades:[],	upto:1},
	{id:531, label:'Kashnarak',		pts:50,		upgrades:[],	upto:1}
]};

// KABALS
var warhostList =	{id:510, label:'KABALS', options:[
	{id:511, label:'Kabal Coterie', 	pts:200, displayPts:250, units:'4 Incubi', restricting:true,	upgrades:[dracons2,sybarite,upgrades2,ravager,raider,pleasure,slave], upto:1},
	{id:512, label:'Kabal Syndicate',	pts:200, restricting:true,	upgrades:[dracons,sybarite,upgrades2,ravager,raider,pleasure,slave], units:'6 Warriors'},
	{id:513, label:'Kabal Flotilla',	pts:250, restricting:true,	upgrades:[dracons,sybarite,ravagers,pain]}
]};

// ALLIES
var spacecraft = 	{id:520, label:'Spacecraft', upto:1};
var allyList = 		{id:521, label:'SPACESHIPS, AIRCRAFT &amp; HORRORS', options:[
	{id:522, label:'Torture Class Cruiser',		pts:300, upgrades:[], limited:true, group:spacecraft},
	{id:523, label:'Corsair Escorts',			pts:0, displayPts:150, upgrades:[escort], limited:true, group:spacecraft},
	{id:524, label:'Tormentor Titan',			pts:500, upgrades:[], limited:true},
	{id:525, label:'Executioner Landing Module',pts:750, upgrades:[], limited:true},
	{id:526, label:'Fighter Formation',			pts:0, displayPts:200, upgrades:[raven], limited:true},
	{id:527, label:'Bomber Formation',			pts:0, displayPts:250, upgrades:[razor], limited:true}
]};

// DETAILS
var listData = {
	id:'Kabal of Pain\'s Way', version:'NetEA Raiders v2.0',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:2, restricting:'Kabal', restricted:'Partisans'}};

// CALLBACK
listLoaded();
