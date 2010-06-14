// OPTIONALS
var escorts = 	{id:10, label:'Escorts', minimum:1, upto:3};
var escort =	{id:11, label:'Corsair Class Escort',	pts:150,	optional:true,	group:escorts};
escorts.options =[escort];
var ravens = 	{id:12, label:'Fighters', minimum:2, upto:3};
var raven =		{id:13, label:'Raven Fighter',			pts:100,	optional:true,	group:ravens};
ravens.options =[raven];
var razors = 	{id:14, label:'Bombers', minimum:2, upto:3};
var razor =		{id:15, label:'Razorwing Bomber',		pts:125,	optional:true,	group:razors};
razors.options =[razor];
var dracons2 =	{id:16, label:'Dracon', minimum:1, upto:1};
var dracon2	 =	{id:17, label:'Dracon', 				pts:50, 	optional:true, group:dracons2};
var archon2 =	{id:18, label:'Archon', 				pts:100,	optional:true, group:dracons2};
dracons2.options=[dracon2,archon2];
var ravagers =	{id:19,	label:'Ravagers', minimum:1, upto:1};
var ravager4 =	{id:20,	label:'4 Ravagers',				pts:0,		optional:true, group:ravagers};
var ravager6 =	{id:21,	label:'6 Ravagers',				pts:100,	optional:true, group:ravagers};
ravagers.options=[ravager4,ravager6];
var barges =	{id:22,	label:'Barges',	minimum:1,	upto:2};
var barge =		{id:23,	label:'Vessel of Pain',			pts:250,	optional:true, group:barges};
barges.options=[barge];

// UPGRADES
var dracons =		{id:50, label:'Dracon', upto:1};
var dracon	 =		{id:51, label:'Dracon', 			pts:50, 	group:dracons};
var archon =		{id:52, label:'Archon', 			pts:100,	group:dracons};
dracons.options = 	[dracon, archon];
var sybarite =		{id:53, label:'Sybarite', 			pts:25,		upto:1};
var upgrades2 =		{id:54, label:'Infantry Upgrades',	upto:2};
var incubi2 =		{id:55, label:'2 Incubi',			pts:125,	group:upgrades2};
var wych2 =			{id:56, label:'2 Wyches',			pts:100,	group:upgrades2};
var warrior2 =		{id:57, label:'2 Warriors',			pts:100,	group:upgrades2};
var mandrake2 =		{id:58, label:'2 Mandrakes',		pts:125,	group:upgrades2};
var scourge2 =		{id:59, label:'2 Scourges',			pts:125,	group:upgrades2};
var haemonculi2 =	{id:60, label:'Haemonculus, Grotesque',	pts:150,	group:upgrades2};
upgrades2.options = [incubi2,wych2,warrior2,mandrake2,scourge2,haemonculi2];
var ravager =		{id:61, label:'Ravager',			pts:50,		upto:1};
var upgrades =		{id:62, label:'Infantry Upgrade',	upto:1};
var incubi =		{id:63, label:'2 Incubi',			pts:125,	group:upgrades};
var wych =			{id:64, label:'2 Wyches',			pts:100,	group:upgrades};
var warrior =		{id:65, label:'2 Warriors',			pts:100,	group:upgrades};
var mandrake =		{id:66, label:'2 Mandrakes',		pts:125,	group:upgrades};
var scourge =		{id:67, label:'2 Scourges',			pts:125,	group:upgrades};
var haemonculi =	{id:68, label:'Haemonculus, Grotesque',	pts:150,group:upgrades};
var beasts =		{id:75,	label:'2 Warp Beasts',		pts:100,	group:upgrades};
var hellion =		{id:76,	label:'2 Hellions',			pts:100,	group:upgrades};
var reaver =		{id:77,	label:'2 Reavers',			pts:100,	group:upgrades};
upgrades.options = [incubi,wych,warrior,mandrake,scourge,haemonculi,beasts];
var pain =			{id:69, label:'Vessel of Pain',		pts:250,	upto:1};
var raider =		{id:70, label:'Raider',				pts:0,		upto:4};
var pleasure =		{id:71, label:'Barge of Pleasure',	pts:125,	upto:2};
var slave =			{id:72,	label:'Slavebringer',		pts:200,	upto:1};
var talos =			{id:73,	label:'Talos',				pts:50,		upto:2};
var perditor =		{id:74,	label:'Perditor',			pts:150,	upto:2};

// PARTISANS (2 per KABAL) - todo:replace with defaults and optionals where appropriate
var troupeList = {id:500, label:'PARTISANS', options:[
	{id:501, label:'Haemonculi Coven',			pts:250, 		units:'2 Haemonculi, 4 Grotesques', upgrades:[haemonculi,talos,perditor,sybarite,pain,raider,slave], restricted:true},
	{id:502, label:'Talos Swarm',				pts:200, 		units:'4 Talos', upgrades:[talos,perditor,slave], restricted:true},
	{id:503, label:'Wych Cult',					pts:200, 		units:'6 Wyches', upgrades:[wych,beasts,hellion,reaver,sybarite,raider,pleasure,slave], restricted:true},
	{id:504, label:'Hellion Murder',			pts:200, 		units:'6 Hellions', upgrades:[hellion,sybarite], restricted:true},
	{id:505, label:'Reaver Gang',				pts:200, 		units:'6 Reavers', 	upgrades:[reaver,sybarite], restricted:true},
	{id:506, label:'Mandrake Throng',			pts:225, 		units:'6 Mandrakes', upgrades:[mandrake], restricted:true},
	{id:507, label:'Scourge Flight',			pts:225, 		units:'6 Scourges', upgrades:[scourge,sybarite], restricted:true},
	{id:508, label:'Heavy Barges',				pts:0, displayPts:250,	defaults:[{unit:barge,count:1}], upgrades:[barge], restricted:true}
]}

// INDIVIDUALS
var individualList = {id:532, label:'INDIVIDUALS', options:[
	{id:530, label:'Webway Portal',	pts:50,		upgrades:[],	upto:1},
	{id:531, label:'Kashnarak',		pts:50,		upgrades:[],	upto:1}
]};

// KABALS
var warhostList =	{id:510, label:'KABALS', options:[
	{id:511, label:'Kabal Coterie', 	pts:200, displayPts:250, units:'4 Incubi',	defaults:[{unit:dracon2, count:1}], restricting:true,	upgrades:[sybarite,upgrades2,ravager,raider,pleasure,slave], upto:1},
	{id:512, label:'Kabal Syndicate',	pts:200, restricting:true,	upgrades:[dracons,sybarite,incubi,wych,warrior,mandrake,scourge,haemonculi,ravager,raider,pleasure,slave], units:'6 Warriors'},
	{id:513, label:'Kabal Flotilla',	pts:250, restricting:true,	defaults:[{unit:ravager4,count:1}], upgrades:[dracons,sybarite,pain]}
]};

// ALLIES
var spacecraft = 	{id:520, label:'Spacecraft', upto:1};
var allyList = 		{id:521, label:'SPACESHIPS, AIRCRAFT &amp; HORRORS', options:[
	{id:522, label:'Torture Class Cruiser',		pts:300, upgrades:[], limited:true, group:spacecraft},
	{id:523, label:'Corsair Escorts',			pts:0, displayPts:150, defaults:[{unit:escort,count:1}], upgrades:[escort], limited:true, group:spacecraft},
	{id:524, label:'Tormentor Titan',			pts:500, upgrades:[], limited:true},
	{id:525, label:'Executioner Landing Module',pts:750, upgrades:[], limited:true},
	{id:526, label:'Fighter Formation',			pts:0, displayPts:200, defaults:[{unit:raven,count:2}], upgrades:[raven], limited:true},
	{id:527, label:'Bomber Formation',			pts:0, displayPts:250, defaults:[{unit:razor,count:2}], upgrades:[razor], limited:true}
]};

// DETAILS
var listData = {
	id:'Kabal of Pain\'s Way', version:'NetEA Epic Raiders 2.0',
	sublists:[individualList, warhostList, troupeList, allyList],
	restriction:{limit:2, restricting:'Kabal', restricted:'Partisans'}};

// CALLBACK
listLoaded();
