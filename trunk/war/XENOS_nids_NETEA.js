// MANDATORY UNITS
var spore = {id:11, label:'Meiotic Spore Sacks', pts:25, optional:true, minimum:6, upto:9};
var stealer = {id:12, label:'Genestealers', pts:25, optional:true, minimum:6, upto:9};
var harridan = {id:13, label:'Harridan', pts:175, optional:true, minimum:1, upto:1};
var lictor = {id:14, label:'Lictors', pts:50, optional:true, minimum:3, upto:6};
var raveners = {id:15, label:'Raveners', pts:35, optional:true, minimum:6, upto:9};
var warriors = {id:16, label:'Tyranid Warriors', optional:true, minimum:3, upto:6, options:[
	{id:17, label:'Tyranid Warriors', pts:50, optional:true},	
	{id:18, label:'Hive Tyrant', upto:1, pts:100, optional:true},
	
]};
var tyrant = {id:19, label:'Hive Tyrant', minimum:1, upto:2, pts:100};
var gaunts = {id:20, label:'Gaunts', upto:4, minimum:4, options:[
	{id:21, label:'Hormagaunts', pts:0, optional:true},
	{id:22, label:'Termagaunts', pts:0, optional:true},
]};
var assaultspawn = {id:23, label:'Assault Spawn Cluster', upto:3, minimum:3, options:[
	{id:24, label:'Haruspex', pts:0, optional:true},
	{id:25, label:'Malefactor', pts:0, optional:true},
]};
var artillery = {id:26, label:'Bio Artillery Cluster', minimum:1, upto:1, options:[
	{id:27, label:'4 Biovores', pts:0, optional:true},
	{id:28, label:'2 Dactylis', pts:0, optional:true},
	{id:29, label:'2 Exocrine', pts:0, optional:true}
]};
var biotitan = {id:30, label:'Bio-Titan Swarm', upto:1, minimum:1, options:[
	{id:31, label:'Hierophant', pts:275, optional:true},
	{id:32, label:'Hydraphant', pts:400, optional:true},
]};

// UPGRADES
var broodlord =	{id:50, label:'Broodlord', upto:1, pts:50};
var gargoyles = {id:51, label:'Gargoyles', upto:9, pts:25};
var trygon = {id:52, label:'Trygon', upto:2, pts:100};
var zoanthropes = {id:53, label:'Zoanthropes', upto:3, pts:35};

// DETACHMENTS
var lictors = {id:498, label:'Lictors', upto:2};
var hivegroup = {id:499, label:'Hive Group', upto:1};
var independent = {id:500, label:'INDEPENDENT SWARMS', options:[
	{id:501, label:'Aerial Spore Mine Swarm', pts:0, displayPts:150, upgrades:[spore], limited:true},
	{id:502, label:'Bio-Titan Swarm', pts:0, displayPts:'275 or 400', upgrades:[biotitan], limited:true},
	{id:504, label:'Genestealer Swarm', pts:0, displayPts:150, upgrades:[stealer, broodlord], limited:true},
	{id:505, label:'Harassment Swarm', pts:0, displayPts:175, upgrades:[harridan, gargoyles], limited:true},
	{id:506, label:'Lictor Swarm', pts:0, displayPts:150, upgrades:[lictor], group:lictors, limited:true},
	{id:507, label:'Subterranean Swarm', pts:-10, displayPts:200, upgrades:[raveners, trygon], limited:true}
]};
var synapse = {id:530, label:'SYNAPSE GROUPS', options:[
	{id:531, label:'Assault Group', pts:-25, displayPts:125, upgrades:[warriors, zoanthropes], limited:true},
	{id:532, label:'Attack Group', pts:0, displayPts:100, upgrades:[tyrant, zoanthropes], limited:true},
	{id:533, label:'Hive Group', pts:475, units:'Dominatrix Bio-Titan', upgrades:[zoanthropes], group:hivegroup, limited:true},
	{id:534, label:'Infestation Group', pts:125, units:'Synapse Node', upgrades:[zoanthropes], limited:true},
	{id:535, label:'Strike Group', pts:300, units:'Vituperator Bio-Titan', upgrades:[zoanthropes], limited:true}
]};

var common = {id:540, label:'COMMON BROOD GROUPS', options:[
	{id:541, label:'Gargoyle Flock', pts:100, units:'4 Gargoyles', upgrades:[], restricting:true},
	{id:542, label:'Gaunt Cluster', pts:75, upgrades:[gaunts], restricting:true},
	{id:543, label:'Ravener Cluster', pts:125, units:'4 Raveners', upgrades:[], restricting:true}
]};

var uncommon = {id:550, label:'UNCOMMON BROOD GROUPS', options:[
	{id:551, label:'Assault Spawn Cluster', pts:175, upgrades:[assaultspawn], restricted:true},
	{id:552, label:'Bio Artillery Cluster', pts:150, upgrades:[artillery], restricted:true},
	{id:553, label:'Carnifex Cluster', pts:125, units:'3 Carnifex', upgrades:[], restricted:true},
	{id:554, label:'Hierodule Cluster', pts:125, units:'Hierodule', upgrades:[], restricted:true},
	{id:555, label:'Trygon Cluster', pts:100, units:'Trygon', upgrades:[], restricted:true}
]};

// DETAILS
var listData = {
	id:'Tyranids', version:'Epic UK v9.2.1',
	sublists:[independent, synapse, common, uncommon],
	restriction:{limit:0.5, restricting:'Common Brood Groups', restricted:'Uncommon Brood Groups'}
};

// CALLBACK
listLoaded();

