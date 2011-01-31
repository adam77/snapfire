// MANDATORY UNITS WITH OPTIONS
var transport = {
  label:'Transport', upto:1, options:[
    { id:11, label:'Rhinos', pts:0, optional:true },
    { id:12, label:'Drop Pods', pts:0, optional:true }
  ]
};

var abikes = {
  id:13, label:'Attack Bikes', upto:5, minimum:5, options:[
    { id:14, label:'Bike Unit', pts:0, optional:true },
    { id:15, label:'Attack Bike', pts:0, optional:true },
    { id:16, label:'Landspeeder', pts:0, optional:true }
  ]
};
var lrs = {
  id:20, label:'Land Raiders', upto:4, minimum:4, options:[
    { id:21, label:'Land Raider', pts:0, optional:true },
    { id:22, label:'Land Raider Helios', pts:25, optional:true }
  ]
};
var preds = {
  id:30, label:'Predators', upto:4, minimum:4, options:[
    { id:31, label:'Predator Annihilator', pts:0, optional:true },
    { id:32, label:'Predator Destructor', pts:0, optional:true }
  ]
};
var spacecraft = {
  id:40, label:'Spacecraft', upto:1, minimum:1, options:[
    { id:41, label:'Strike Cruiser', pts:0, optional:true },
    { id:42, label:'Battle Barge', pts:125, optional:true }
  ]
};

// FORMATION UPGRADES
var commander = {
  id:50, label:'Commander', upto:1, options:[
    { id:51, label:'Captain', pts:50 },
    { id:52, label:'Librarian', pts:50 },
    { id:53, label:'Chaplain', pts:50 },
    { id:54, label:'Supreme Commander', pts:100, general:true }
  ]
};
var closeSup = {
  id:70, label:'Close Support', upto:2, options:[
    { id:71, label:'Predator Incinerator', pts:50 },
    { id:72, label:'Hunter', pts:75 },
    { id:73, label:'Land Raider', pts:75 },
    { id:74, label:'Land Raider Redeemer', pts:75 },
    { id:75, label:'Land Raider Prometheus', pts:85 }
  ]
};
var closeSupHe = {
  id:90, label:'Close Support', upto:2, options:[
    { id:91, label:'Predator Incinerator', pts:50 },
    { id:92, label:'Hunter', pts:75 },
    { id:93, label:'Land Raider', pts:75 },
    { id:94, label:'Land Raider Redeemer', pts:75 },
    { id:95, label:'Land Raider Prometheus', pts:85 },
    { id:96, label:'Land Raider Helios', pts:100 }
  ]
};
// This should be any mix of four instead of one or the other type
// should one list all possible choices manually??
//var heavySup = {
//  id:60, label:'Heavy Support', upto:1, options:[
//    { id:61, label:'4 Land Raider', pts:325, optional:true },
//    { id:62, label:'3 Land Raider, 1 Redeemer', pts:325, optional:true },
//    { id:63, label:'2 Land Raider, 2 Redeemer', pts:325, optional:true },
//    { id:64, label:'1 Land Raider, 3 Redeemer', pts:325, optional:true },
//	{ id:65, label:'4 Redeemer', pts:325, optional:true}
//  ]
//};
var heavySup = {id:60, label:'4 Land Raiders or Redeemers', upto:1, pts:325 };
var razorbacks = {
  id:80, label:'Razorback', upto:8, options:[
    { id:81, label:'Razorback (twin lascannon)', pts:25 },
    { id:82, label:'Razorback (twin heavy bolter)', pts:25 }
  ]
};
var dread = {
  id:83, label:'Dreadnought', upto:2, options:[
  { id:84, label:'Hellfire Dreadnought', pts:50 },
  { id:85, label:'Vulcan Dreadnought', pts:50 }
  ]
};

var sniper = { id:101, label:'Sniper', pts:50, upto:1 };
var salDev = { id:102, label:'2 Salamander Devastator units', pts:100, upto:1 };
var salTac = { id:103, label:'2 Salamander Tactical units', pts:75, upto:1 };

// FORMATIONS (id must 500 or higher)
var formationList = {
  id:500, label:'DETACHMENTS', options: [
    { id:501, label:'Devastator Detachment', pts:250, units:'4 Devastator units', upgrades:[transport, commander, closeSup, dread, razorbacks, salDev] },
    { id:502, label:'Land Raider Detachment', pts:350, upgrades:[lrs, commander, closeSupHe] },
    { id:503, label:'Landing Craft', pts:425, upgrades:[] },
    { id:504, label:'Predator Detachment', pts:275, upgrades:[preds, commander, closeSup] },
    { id:505, label:'Spacecraft', pts:200, upgrades:[spacecraft], upto:1 },
    { id:506, label:'Tactical Detachment', pts:300, units:'6 Tactical units', upgrades:[transport, commander, dread, razorbacks, salTac, closeSup] },
    { id:507, label:'Terminator Detachment', pts:325, units:'4 Terminator units', upgrades:[commander, closeSup, dread, heavySup] },
    { id:508, label:'Thunderhawk', pts:250, upgrades:[] },
    { id:509, label:'Vindicator Detachment', pts:250, units:'4 Vindicators', upgrades:[commander, closeSup] },
    { id:510, label:'Whirlwind Detachment', pts:300, units:'4 Whirlwinds', upgrades:[commander, closeSupHe] }
  ]
};

var restrictedList = {
  id: 520, label:'RESTRICTED FORMATIONS', options: [
    { id:521, label:'Assault Detachment', pts:150, units:'4 Assault units', upto:1, upgrades:[commander,closeSup], limited:true },
    { id:522, label:'Fast Attack Detachment', pts:200, upto:1, upgrades:[abikes,commander], limited:true },
    { id:523, label:'Scout Detachment', pts:150, units:'4 Scout units plus transport', upgrades: [commander,razorbacks,sniper], limited:true }
  ]
}


// NAVY
var navyList = {
  id:530, label:'AIRCRAFT', options:[
    { id:531, label:'Fighter Squadron', pts:150, units:'2 Thunderbolt Fighters', upgrades:[], limited:true },
    { id:532, label:'Bomber Squadron', pts:250, units:'2 Marauder Bombers', upgrades:[], limited:true }
  ]
};

// WAR ENGINES
var titanList = {
  id:540, label:'TITANS', options:[
    { id:541, label:'Warlord Class Titan', pts:850, upgrades:[], limited:true },
    { id:542, label:'Reaver Class Titan', pts:650, upgrades:[], limited:true },
    { id:543, label:'Warhound Titan', pts:275, upgrades:[], limited:true },
    { id:544, label:'Warhound Pack', pts:500, units:'2 Warhounds', upgrades:[], limited:true }
  ]
};

// DETAILS
var listData = {
  id:'Salamanders', version:'NetEA v1.13',
  sublists:[formationList, restrictedList, navyList, titanList]
};

// CALLBACK
listLoaded();

