// MANDATORY UNITS
var ctans = {id:10, label:'C`Tan', upto:1, minimum:1, options:[
	{id:11, label:'Nightbringer', pts:300, limited:true, optional:true},
	{id:12, label:'Deceiver', pts:300, limited:true, optional:true}
]};

// UPGRADES
var spyders = {id:100, label:'Tomb Spyders', minimum:0, upto:3, optional:true, pts:50};
var pariahs = {id:101, label:'Pariahs', minimum:0, upto:1, optional:true, pts:60};
var immortals = {id:102, label:'Immortals', minimum:0, upto:3, optional:true, pts:40};
var wraiths = {id:103, label:'Wraiths', minimum:0, upto:3, optional:true, pts:50};
var lords = {id:104, label:'Necron Lord', minimum:0, upto:1, optional:true, pts:25};
var obeliskmaniple = {id:105, label:'Obelisk', minimum:2, upto:3, optional:true, pts:50};
var monolithmaniple = {id:106, label:'Monolith', minimum:1, upto:2, optional:true, pts:75};
var commander = {id:107, label:'Supreme Commander', group:commanderlimit, optional:true, pts:50};
var destroyers = {id:108, label:'Destroyers', minimum:6, upto:6, options: [
	{id:109, label:'Destroyers', pts:0, optional:true},
	{id:110, label:'Heavy Destroyers', pts:0, optional:true}
]};
var obeliskphalanx = {id:111, label:'Obelisk', minimum:0, upto:3, optional:true, pts:50};
var monolithphalanx = {id:112, label:'Monolith', minimum:3, upto:3, optional:true, pts:75};
var commanderlimit = {id:113, label:'Supreme Commander', upto:1};

// SUPPORT (3 per phalanx)
var supportList = {id:500, label:'NECRON SUPPORT', options:[
	{id:501, label:'Venator Maniple', pts:200, upgrades:[lords, pariahs, spyders, wraiths], units:'6 Flayed Ones', restricted:true},
	{id:502, label:'Eques Maniple', pts:375, upgrades:[destroyers, lords, wraiths], restricted:true},
	{id:503, label:'Monolith Maniple', pts:25, displayPts:200, upgrades:[monolithmaniple, obeliskmaniple], restricted:true},
	{id:504, label:'Monolith Phalanx', pts:275, units:'3 Monoliths', upgrades:[obeliskphalanx], restricted:true},
	{id:505, label:'Armored Phalanx', pts:300, units:'6 Obelisks', upgrades:[], restricted:true},
	{id:506, label:'Pylon', pts:200, upgrades:[], restricted:true, limited:true}
]};

// INDIVIDUALS
var individualList = {id:600, label:'INDIVIDUALS', options:[
	{id:601, label:'Tomb Complex', pts:75, upgrades:[], upto:1},
	{id:602, label:'C`Tan',	displayPts:300, pts:0, limited:true, upgrades:[ctans], upto:1}
]};

// PHALANX
var phalanxList = {id:700, label:'NECRON PHALANXES', options:[
	{id:701, label:'Infantry Phalanx', restricting:true, units:'Necron Lord, 6 Warriors', upgrades:[spyders, pariahs, immortals, wraiths], pts:225}
]};

// HARVESTERS
var largeharvester = {id:800, label:'Lrg Harvester Eng', upto:1};
var harvesterList = {id:801, label:'HARVESTERS', options:[
	{id:802, label:'Scythe Class Harvester', pts:350, upgrades:[], upto:1, limited:true},
	{id:803, label:'Abattoir', group:largeharvester, pts:750, upgrades:[], limited:true},
	{id:804, label:'Aeonic Orb', group:largeharvester, pts:750, upgrades:[], limited:true},
	{id:805, label:'Warbarque', pts:300, upgrades:[commander], upto:2, limited:true}
]};

// DETAILS
var listData = {
	id:'Necrons', version:'NetEA Raiders v2.0',
	sublists:[individualList, phalanxList, supportList, harvesterList],
	restriction:{limit:3, restricting:'Necron Phalanx', restricted:'Necron Support'}
};

// CALLBACK
listLoaded();
