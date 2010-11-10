// MANDATORY UNITS WITH OPTIONS
var abikes = {
  id:10, label:'Attack Bikes', upto:4, minimum:4, options:[
    { id:11, label:'Bike Unit', pts:0, optional:true },
    { id:12, label:'Attack Bike', pts:0, optional:true }
  ]
};
var lrs2 = {
  id:20, label:'Land Raiders', upto:2, minimum:2, options:[
    { id:21, label:'Land Raider', pts:0, optional:true },
    { id:22, label:'Land Raider Crusader', pts:0, optional:true }
  ]
};
var lrs4 = {
  id:23, label:'Land Raiders', upto:4, minimum:4, options:[
    { id:24, label:'Land Raider', pts:0, optional:true },
    { id:25, label:'Land Raider Crusader', pts:0, optional:true }
  ]
};
var preds = {
  id:30, label:'Predators', upto:4, minimum:4, options:[
    { id:31, label:'Predator Annihilator', pts:0, optional:true },
    { id:32, label:'Predator Destructor', pts:0, optional:true }
  ]
};
var arm2 = {
  id:33, label:'Predators', upto:2, minimum:2, options:[
    { id:34, label:'Predator Annihilator', pts:0, optional:true },
    { id:35, label:'Predator Destructor', pts:0, optional:true },
    { id:36, label:'Vindicator', pts:0, optional:true }
  ]
};
var spacecraft = {
	id:40, label:'Spacecraft',	upto:1, minimum:1, options:[
		{ id:41, label:'Strike Cruiser', pts:0, optional:true },
		{ id:42, label:'Battle Barge', pts:150, optional:true }
	]
};

// FORMATION UPGRADES
var commander = {
  id:50, label:'Commander', upto:1, options:[
    { id:51, label:'Captain', pts:50 },
    { id:52, label:'Librarian', pts:50 },
    { id:53, label:'Chaplain', pts:50 }
  ]
};	
var sCommander = {
  id:54, label:'Commander', upto:1, options:[
    { id:55, label:'Captain', pts:50 },
    { id:56, label:'Librarian', pts:50 },
    { id:57, label:'Chaplain', pts:50 },
	{ id:58, label:'Supreme Commander', pts:100 },
	{ id:59, label:'Supreme Commander (Prometheus)', pts:125}
  ]
};
var sCommander2 = {
  id:90, label:'Commander', upto:1, options:[
    { id:91, label:'Captain', pts:50 },
    { id:92, label:'Librarian', pts:50 },
    { id:93, label:'Chaplain', pts:50 },
	{ id:94, label:'Supreme Commander', pts:100 },
	{ id:95, label:'Supreme Commander (Prometheus)', pts:100}
  ]
};

var landspeeder = {
  id:60, label:'Land Speeders', upto:3, options:[
    { id:61, label:'Land Speeder', pts:35 },
    { id:62, label:'Land Speeder Tornado', pts:50 },
    { id:63, label:'Land Speeder Typhoon', pts:60 }
  ]
};
var lrs_up = {
  id:70, label:'Land Raiders', upto:4, options:[
    { id:71, label:'Land Raider', pts:75 },
    { id:72, label:'Land Raider Crusader', pts:75 },
    { id:73, label:'Land Raider Helios', pts:100 }
  ]
};
var armour = {
  id:75, label:'Armour', upto:4, options:[
    { id:76, label:'Two Vindicators', pts:100 },
    { id:77, label:'Two Predator Destructors', pts:100 },
    { id:78, label:'Two Predator Annihilators', pts:125 }
  ]
};
var razorbacks = {
  id:80, label:'Razorback', upto:4, options:[
    { id:81, label:'Razorback (twin lascannon)', pts:25 },
    { id:82, label:'Razorback (twin heavy bolter)', pts:25 }
  ]
};

var hunter = { id:100, label:'Hunter', pts:75, upto:1 };
var thawk_trans = { id:102, label:'Thunderhawk Transporters', pts:100, upto:2 };
var sniper = { id:103, label:'Sniper', pts:50, upto:1 };

// FORMATIONS (id must 500 or higher)
var formationList = {
  id:501, label:'DETACHMENTS', options: [
    { id:502, label:'Bike Detachment', pts:175, upgrades:[abikes,commander,landspeeder] },
    { id:503, label:'Heavy Tactical Detachment', pts:350, units:'4 Tactical units', upgrades:[sCommander2,lrs2,lrs_up] },
    { id:504, label:'Helios Detachment', pts:450, units:'4 Land Raider Helios', upgrades:[commander,hunter] },
    { id:505, label:'Land Raider Detachment', pts:350, upgrades:[lrs4,sCommander2,lrs_up,hunter] },
    { id:506, label:'Landing Craft', pts:350, units:'Landing Craft', upgrades:[] },
    { id:507, label:'Predator Detachment', pts:275, upgrades:[preds,armour,sCommander,hunter] },
    { id:508, label:'Scout Detachment', pts:150, units:'4 Scout units plus transport', upgrades:[commander,landspeeder,razorbacks,sniper] },
    { id:509, label:'Spacecraft', pts:200, upgrades:[spacecraft], upto:1 },
    { id:511, label:'Tactical Detachment', pts:300, units:'4 Tactical units plus transport', upgrades:[arm2,armour,sCommander,hunter,razorbacks] },
    { id:512, label:'Terminator Detachment', pts:350, units:'4 Terminator units', upgrades:[sCommander2,lrs_up] },
    { id:513, label:'Thunderhawk Transporters', pts:250, units:'2 Thunderhawk Transporters', upgrades:[thawk_trans] },
    { id:514, label:'Vindicator Detachment', pts:275, units:'4 Vindicators', upgrades:[armour,sCommander,hunter] },
    { id:515, label:'Whirlwind Detachment', pts:300, units:'4 Whirlwinds', upgrades:[commander,hunter] }
  ]
};

// NAVY
var birds = {
	id:525, label:'Navy', upto:2
};
var navyList = {
  id:520, label:'AIRCRAFT', options:[
    { id:521, label:'Fighter Squadron', pts:150, units:'2 Thunderbolt Fighters', upgrades:[], limited:true, group:birds },
    { id:522, label:'Bomber Squadron', pts:150, units:'2 Marauder Bombers', upgrades:[], limited:true, group:birds },
    { id:523, label:'Thunderhawk SB', pts:250, units:'Thunderhawk (Saturation Bombing configuration)', upgrades:[], limited:true },
    { id:524, label:'Thunderhawk CAS', pts:250, units:'Thunderhawk (Close Air Support configuration)', upgrades:[], limited:true },
  ]
};

// WAR ENGINES
var titans = {
	id:545, label:'Titans', upto:2
};
var titanList = {
  id:540, label:'TITANS', options:[
    { id:541, label:'Warlord Class Titan', pts:850, upgrades:[], limited:true, group:titans },
    { id:542, label:'Reaver Class Titan', pts:650, upgrades:[], limited:true, group:titans },
    { id:543, label:'Warhound Titan', pts:275, upgrades:[], limited:true, group:titans },
    { id:544, label:'Warhound Pack', pts:500, units:'2 Warhounds', upgrades:[], limited:true, group:titans }
  ]
};

// DETAILS
var listData = {
  id:'Scions of Iron', version:'NetEA v1.5',
  sublists:[formationList, navyList, titanList]
};

// CALLBACK
listLoaded();

