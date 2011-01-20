// MANDATORY UNITS
var lemanRuss = {
  id:10, label:'Leman Russ', upto:6, minimum:6, options:[
    { id:11, label:'Leman Russ Thunderer', pts:0, optional:true },
    { id:12, label:'Leman Russ', pts:20, optional:true },
    { id:13, label:'Leman Russ Demolisher', pts:20, optional:true },
    { id:14, label:'Leman Russ Vanquisher', pts:50, optional:true, upto:1 }
  ]
};
var superC = {
  id:20, label:'Super Heavys', upto:3, minimum:3, options:[
    { id:21, label:'Baneblade', pts:0, optional:true },
    { id:22, label:'Shadowsword', pts:0, optional:true },
    { id:23, label:'Stormblade', pts:0, optional:true },
    { id:24, label:'Stormsword', pts:0, optional:true }
  ]
};
var superP = {
  id:25, label:'Super Heavy', upto:1, minimum:1, options:[
    { id:26, label:'Baneblade', pts:0, optional:true },
    { id:27, label:'Shadowsword', pts:0, optional:true },
    { id:28, label:'Stormblade', pts:0, optional:true },
    { id:29, label:'Stormsword', pts:0, optional:true }
  ]
};
var lightSupport = {
  id:30, label:'Artillery', upto:1, minimum:1, options:[
    { id:31, label:'4 Quad Launchers', pts:0, optional:true },
    { id:32, label:'4 Heavy Mortars', pts:0, optional:true }
  ]
};
var lightSupUpgrade = {
  id:33, label:'Artillery support', upto:1, options:[
    { id:34, label:'4 Centaurs', pts:0, optional:true },
    { id:35, label:'20cm of Trenches', pts:0, optional:true }
  ]
};
var artilleryUpgrade = {
  id:36, label:'Artillery support', upto:1, options:[
  { id:37, label:'9 Trojans', pts:0, optional:true },
  { id:38, label:'9 Gun Emplacements', pts:0, optional:true }
  ]
};
var heavySupport = {
  id:40, label:'Artillery', upto:1, minimum:1, options:[
    // NOTE: would need options within options to allow mix of 3 hydra or heavy AA
    { id:41, label:'3 Hydra or Heavy Anti-Aircraft Platform', pts:125, optional:true },
//    { id:42, label:'3 x Heavy Anti-Aircraft platform', pts:125, optional:true },
    { id:43, label:'3 Earthshaker Platform', pts:200, optional:true },
    { id:44, label:'3 Medusa Platform', pts:275, optional:true }
  ]
};
var heavySupUpgrade = {
  id:45, label:'Artillery support', upto:1, options:[
    { id:46, label:'3 Trojans', pts:0, optional:true },
    { id:47, label:'3 Gun Emplacements', pts:0, optional:true }
  ]
};
var grenUpgrade = {
  id:50, label:'Grenadier support', upto:1, options:[
    { id:51, label:'8 Centaurs', pts:75, optional:true },
    { id:52, label:'Gorgon (with mortars)', pts:75, optional:true },
    { id:53, label:'Gorgon (with heavy bolters)', pts:75, optional:true }
  ]
};

// UPGRADES (upto 3 per company)
var up1 =  { id:100, label:'Upgrades', upto:3, options:[
	{ id:114, label:'Fire Support Battery (4 Fire Support)', pts:75, upto:1 },
    { id:111, label:'Infantry Platoon (10 Death Korps Infantry)', pts:175, upto:1 },
	{ id:109, label:'Heavy Tank (Macharius)', pts:125, upto:1 },
	{ id:105, label:'Hellhound Squadron (3 Hellhounds)', pts:150, upto:1},
    { id:107, label:'Siege Transports (2 Gorgons)', pts:125, upto:1 },
    { id:102, label:'Tank Squadron (3 Leman Russ Variants)', pts:140, upto:1}
]};
var up2 =  { id:130, label:'Upgrades', upto:3, options:[
    { id:131, label:'Tank Squadron (3 Leman Russ Variants)', pts:140, upto:1},
	{ id:132, label:'Hellhound Squadron (3 Hellhounds)', pts:150, upto:1},
    { id:133, label:'Siege Transports (2 Gorgons)', pts:125, upto:1 },
    { id:134, label:'Infantry Platoon (10 Death Korps Infantry)', pts:175, upto:1 },
	{ id:135, label:'Heavy Tank (Macharius)', pts:125, upto:1 },
	{ id:136, label:'Fire Support Battery (4 Fire Support)', pts:75, upto:1 }
]};
var russ = { id:121, label:'Leman Russ Surcharge for Tank Squadron', pts:20, upto:3};
var demo = { id:122, label:'Demolisher Surcharge for Tank Squadron', pts:20, upto:3};
var gorgon = { id:120, label:'Additional Gorgon for Infantry Platoon', pts:50, upto:1};

// COMPANIES
var companyList = {
  id:500, label:'DEATH KORPS CORE COMPANIES', options:[
    { id:501, label:'Regimental HQ', pts:400, units:'Death Korps Supreme Commander, 19 Death Korps Infantry' , upgrades:[ up1, gorgon, russ, demo ], restricting:true, upto:1 },
    { id:502, label:'Infantry Company', pts:300, units:'Death Korps Commander, 19 Death Korps Infantry', upgrades:[ up1, gorgon, russ, demo ], restricting:true },
    // NOTE: 1 per 1500 pts
    { id:503, label:'Death Rider Company', pts:250, units:'12 Death Korps Rough Riders', upgrades:[ up2, gorgon, russ, demo ] }
  ]
};


// SUPPORT (2 per company, no upgrades allowed)
var supportList = {
  id:510, label:'DEATH KORPS SUPPORT FORMATIONS', options:[
    { id:511, label:'Grenadiers Platoon', pts:225, units:'8 Death Korps Grenadiers', upgrades:[ grenUpgrade ], restricted:true },
    { id:512, label:'Engineers Platoon', pts:300, units:'8  Death Korps Engineers, Hades Breaching Drill', upgrades:[], restricted:true },
    { id:513, label:'Tank Platoon', pts:280, upgrades:[ lemanRuss ], restricted:true },
    { id:514, label:'Heavy Tank Platoon', pts:350, units:'2 Macharius Tanks, Macharius Command Tank', upgrades:[], restricted:true },
    { id:515, label:'Light Support Battery', pts:200, upgrades:[ lightSupport, lightSupUpgrade ], restricted:true },
    { id:516, label:'Heavy Support Battery', pts:0, displayPts:125, upgrades:[ heavySupport, heavySupUpgrade ], restricted:true },
    { id:517, label:'Self-Propelled Heavy Support', pts:250, units:'3 Bombards', upgrades:[], restricted:true },
    { id:518, label:'Super-heavy Tank Platoon', pts:200, upgrades:[ superP ], restricted:true },
    { id:519, label:'Death Rider Scout Platoon', pts:150, units:'6 Death Korps Rough Riders (with "scout" ability)', upgrades:[], restricted:true },
    { id:520, label:'Deathstrike Silo', pts:250, units:'Death Korps Deathstrike Missile Silo', upgrades:[], restricted:true, upto:1 },
    { id:521, label:'Artillery Support Company', pts:600, units:'9 Earthshaker Platforms', upgrades:[ artilleryUpgrade ], restricted:true },
    { id:522, label:'Super-heavy Tank Support Company', pts:500, upgrades:[ superC ], restricted:true }
  ]
};

var trenchworks = {
  id:525, label:'TRENCHWORKS', options:[
    { id:526, label:'Trenchworks', pts:150, units:'80cm of Trenches, 4 bunkers', upgrades:[], restricted2:true }
  ]
};

// NAVY
var navyList = {
  id:530, label:'IMPERIAL NAVY', options:[
    { id:531, label:'Thunderbolt Fighters', pts:150, units:'2 Thunderbolts', upgrades:[], limited:true },
    { id:532, label:'Marauder Bombers', pts:250, units:'2 Marauders', upgrades:[], limited:true }
  ]
};

// TITANS
var titanList = {
  id:535, label:'TITAN LEGIONS', options:[
    { id:536, label:'Warlord Titan', pts:850, upgrades:[], limited:true },
    { id:537, label:'Reaver Titan', pts:650, upgrades:[], limited:true },
    { id:538, label:'Warhound Pack', pts:500, units:'2 Warhounds', upgrades:[], limited:true },
    { id:539, label:'Warhound Titan', pts:275, upgrades:[], limited:true }
  ]
};

// DETAILS
var listData = {
  id:'Death Korps of Krieg', version:'NetEA Epic Siege v1.0',
  notes:['Maximum 1 Death Rider Company per 1500pts.'],
  sublists: [ companyList, supportList, trenchworks, navyList, titanList ],
  restriction: { limit:2, restricting:'Company', restricted:'Support Formations' },
  restriction2: { limit:1, restricting:'Company', restricted:'Trenchworks' }
};

// CALLBACK
listLoaded();
