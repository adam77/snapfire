// MANDATORY UNITS
var lord = {
  id:16, label:'Lord', upto:1, minimum:1, options:[
    { id:17, label:'Death Guard Lord', pts:0, optional:true },
    { id:18, label:'Death Guard Sorcerer Lord', pts:0, optional:true },
    { id:19, label:'Death Guard Warlord', pts:25, optional:true },
    { id:20, label:'Daemon Prince', pts:50, optional:true },
    { id:21, label:'Daemon Prince (Supreme Commander)', pts:75, optional:true }
  ]
};
var armour = {
  id:26, label:'Vehicles', upto:6, minimum:4, options:[
    { id:27, label:'Chaos Predator', pts:50, optional:true },
    { id:28, label:'Chaos Land Raider', pts:75, optional:true }
  ]
};
var spacecraft = {
  id:10, label:'Spacecraft', upto:1, minimum:1, options:[
    { id:11, label:'Devastation class Cruiser', pts:150, optional:true },
    { id:12, label:'Despoiler class Battleship', pts:250, optional:true }
  ]
};
var term = { id:30, label:'Death Guard Terminator', pts:100, optional:true, upto:6, minimum:4 };
var reaper = { id:31, label:'Plague Reaper', pts:275, optional:true, upto:3, minimum:1 };
var tower = { id:32, label:'Plague Tower', pts:325, optional:true, upto:2, minimum:1 };

// UPGRADES
var walker = {
  id:50, label:'Walkers', upto:3, options:[
    {id:51, label:'Chaos Dreadnought', pts:50, optional:true },
    {id:52, label:'Defiler', pts:75, optional:true },
    {id:53, label:'Desecrator', pts:75, optional:true }
  ]
};
var support = {
  id:54, label:'Support Vehicles', upto:3, options:[
    {id:55, label:'Predator', pts:50, optional:true },
    {id:56, label:'Land Raider', pts:75, optional:true }
  ]
};
var trans = {
  id:57, label:'Transport', upto:7, options:[
    {id:58, label:'Rhino', pts:10, optional:true },
    {id:59, label:'Land Raider', pts:75, optional:true }
  ]
};
var dg = {
  id:60, label:'Death Guard Auxilia', upto:1, options:[
    { id:61, label:'2 Death Guard Marines', pts:75, optional:true },
    { id:62, label:'2 Plague Marines', pts:75, optional:true },
    { id:63, label:'2 Death Guard Marines and 2 Plague Marines', pts:150, optional:true },
    { id:64, label:'4 Death Guard Marines', pts:150, optional:true },
    { id:65, label:'4 Plague Marines', pts:150, optional:true}
  ]
};
var havoc = {
  id:66, label:'Havoc', upto:1, options:[
    { id:67, label:'2 Death Guard Havocs', pts:100, optional:true },
    { id:68, label:'4 Death Guard Havocs', pts:200, optional:true }
  ]
};
var greater = { id:101, label:'Greater Daemon', pts:75 };
var lesser = { id:102, label:'Lesser Daemon', pts:15 };
var champion = { id:103, label:'Chaos Champion', upto:1, pts:50 };
var spawn = { id:104, label:'Chaos Spawn', upto:3, pts:25 };
var claws = { id:105, label:'4 Dreadclaw Drop Pod', pts:25 };
var pact = { id:106, label:'Daemonic Pact', upto:1, pts:25 };
var icon = { id:107, label:'Icon Bearer', upto:1, pts:50 };

// DETACHMENTS
var retinue =	{
  id:500, label:'CORE', options:[
    {id:501, label:'Death Guard Retinue', units:'3 Death Guard Marine and 3 Plague Marine units', restricting:true, pts:250, upgrades:[ lord, dg, icon, champion, havoc, pact, spawn, support, trans, walker] },
    {id:502, label:'Death Guard Heavy Retinue', units:'6 Death Guard Havoc units', restricting:true, pts:325, upgrades:[ lord, dg, icon, champion, havoc, pact, spawn, support, trans, walker ] }
  ]
};
var pool = {
  id:505, label:'DAEMON POOL', options:[
    { id:506, label:'Daemon Pool', pts:0, upto:1, upgrades:[ greater, lesser ] }
  ]
};

var infSupport = {
  id:510, label:'INFANTRY SUPPORT', options:[
    { id:511, label:'Death Guard Drop Retinue', units:'3 Death Guard Marine and 3 Plague Marine units', restricted:true, pts:250, upgrades:[ lord, dg, icon, champion, pact, walker, claws ] },
    { id:512, label:'Death Guard Terminators', restricted:true, pts:50, displayPts:450, upgrades:[ lord, term, champion, pact, icon, trans, walker ] },
    { id:513, label:'Plague Zombie Infestation', restricted:true, pts:175, units:'3+2D6 Plague Zombies', upgrades:[] }
  ]
};
var vehSupport = {
  id:520, label:'VEHICLE SUPPORT', options:[
    { id:521, label:'Armoured Company', restricted2:true, pts:0, displayPts:200, upgrades:[ armour ] },
    { id:522, label:'Assault Retinue', restricted2:true, pts:0, displayPts:275, upgrades:[ reaper, walker ] },
    { id:523, label:'Defiler Assault Pack', restricted2:true, units:'4 Defilers', pts:275, upgrades:[ walker ] },
    { id:524, label:'Demon Engines: Blight Drone Swarm', restricted2:true, units:'5 Blight Drones', pts:250, upgrades:[] },
    { id:525, label:'Demon Engines: Contagion Towers', restricted2:true, units:'4 Contagion Towers', pts:325, upgrades:[ walker ] },
    { id:526, label:'Demon Engines: Plague Towers', restricted2:true, pts:0, displayPts:325, upgrades:[ tower, walker ] }
  ]
};

// NAVY
var navyList = {
  id:530, label:'DEATH GUARD TITANS AND CHAOS NAVY', options:[
    { id:531, label:'Hellblade Flight', pts:175, units:'3 Hellblade Fighters', upgrades:[], limited:true},
    { id:532, label:'Helltalon Flight', pts:225, units:'2 Helltalon Bombers', upgrades:[], limited:true},
    { id:533, label:'Spacecraft', upto:1, pts:0, displayPts:150, upgrades:[spacecraft], limited:true },
    { id:541, label:'Plaguelord Titan', pts:850, upgrades:[], limited:true },
    { id:542, label:'Repugnant Titan', pts:650, upgrades:[], limited:true },
    { id:543, label:'Fester Titan', pts:275, upgrades:[], limited:true }
  ]
};

// DETAILS
var listData = {
  id:'Death Guard', version:'v2.3',
  sublists:[retinue, infSupport, vehSupport, navyList],
  restriction:{limit:1, restricting:'Retinue', restricted:'Infantry Support'},
  restriction2:{limit:1, restricting:'Retinue', restricted:'Vehicle Support'}
};

// CALLBACK
listLoaded();

