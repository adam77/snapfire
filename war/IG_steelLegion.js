// UPGRADES (upto 3 per company)
var companyUpgrades = 	{label:'Upgrades', upto:3};
	var chimera =			{label:'Chimera',							pts:25}; // only applies to snipers & ogryns
	var fireSupport =		{label:'Fire Support Platoon',				pts:100, upto:1, group:companyUpgrades};
	var infantry =			{label:'Infantry Platoon',					pts:100, upto:1, group:companyUpgrades};
	var tankSquadron =		{label:'Tank Squadron',						pts:200, upto:1, group:companyUpgrades};
	var demolisher =		{label:'Tank Squadron (Demolisher)',		pts:200, upto:1, group:companyUpgrades};
	var hellhounds =		{label:'Hellhound Squadron',				pts:150, upto:1, group:companyUpgrades};
	var griffons =			{label:'Griffon Battery',					pts:100, upto:1, group:companyUpgrades};
	var snipers =			{label:'Snipers',							pts:50, upto:1, group:companyUpgrades};
	var ogryns =			{label:'Ogryns',							pts:50, upto:1, group:companyUpgrades};
	var hydra =				{label:'Hydra',								pts:50, upto:1, group:companyUpgrades};
	companyUpgrades.options = [fireSupport, infantry, tankSquadron, demolisher, hellhounds, griffons, snipers, ogryns, hydra];
var valkyrie =			{label:'Valkyrie Transport',				pts:150, upto:1};

// SUPPORT (2 per company, no upgrades allowed)
var roughRider =	{label:'Rough Rider Platoon', 			pts:150, upgrades:[], restricted:true};
var stormTrooper =	{label:'Storm Trooper Platoon',			pts:200, upgrades:[valkyrie], restricted:true};
var basilisk =		{label:'Artillery Battery (Basilisk)',	pts:250, upgrades:[], restricted:true};
var bombard =		{label:'Artillery Battery (Bombard)',	pts:250, upgrades:[], restricted:true};
var manticore =		{label:'Artillery Battery (Manticore)',	pts:250, upgrades:[], restricted:true};
var sentinel =		{label:'Sentinel Squadron',				pts:100, upgrades:[], restricted:true};
var deathstrike =	{label:'Deathstrike Missile Battery',	pts:200, upgrades:[], upto:1, restricted:true};
var baneblade =		{label:'Super-heavy Tank Platoon (Baneblade)', pts:200, upgrades:[], restricted:true};
var shadowsword =	{label:'Super-heavy Tank Platoon (Shadowsword)', pts:200, upgrades:[], restricted:true};
var lunar =			{label:'Orbital Support (Lunar Class)',	pts:150, upgrades:[], restricted:true};
var emperor =		{label:'Orbital Support (Emperor Class)',pts:300, upgrades:[], restricted:true};
var flak =			{label:'Flak Battery',					pts:150, upgrades:[], restricted:true};
var vulture =		{label:'Vulture Squadron',				pts:300, upgrades:[], restricted:true};
var supportList =	{label:'SUPPORT FORMATIONS', options:[roughRider, stormTrooper, basilisk, bombard, manticore, sentinel, deathstrike, baneblade, shadowsword, lunar, emperor, flak, vulture]};

// COMPANIES
var hq = 			{label:'Regimental HQ', pts:500, upgrades:[chimera, companyUpgrades], upto:1, restricting:true};
var infantryCoy = 	{label:'Infantry Company', pts:250, upgrades:[chimera, companyUpgrades], restricting:true};
var mechCoy = 		{label:'Mechanised Infantry Company', pts:400, upgrades:[chimera, companyUpgrades], restricting:true};
var tankCoy = 		{label:'Tank Company', pts:650, upgrades:[chimera, companyUpgrades], restricting:true};
var superCoy = 		{label:'Super-heavy Tank Company', pts:500, upgrades:[chimera, companyUpgrades], restricting:true};
var artilleryCoy = 	{label:'Artillery Company', pts:650, upgrades:[chimera, companyUpgrades], restricting:true};
var companyList =	{label:'COMPANIES', options:[hq, infantryCoy, mechCoy, tankCoy, superCoy, artilleryCoy]};

// NAVY
var thunderbolt = 		{label:'Thunderbolt Fighters',	pts:150, upgrades:[], limited:true};
var marauder =			{label:'Marauder Bombers',		pts:300, upgrades:[], limited:true};
var navyList =			{label:'IMPERIAL NAVY', options:[thunderbolt, marauder]};

// TITANS
var warlord =			{label:'Warlord Class Titan',	pts:850, upgrades:[], limited:true};
var reaver =			{label:'Reaver Class Titan',	pts:650, upgrades:[], limited:true};
var warhound =			{label:'Warhound Titan',		pts:250, upgrades:[], limited:true};
var titanList = 		{label:'TITAN LEGIONS', options:[warlord, reaver, warhound]};

// DETAILS
var listData = {
	id:'Steel Legion', version:'EA Rulebook Oct09',
	sublists:[companyList, supportList, navyList, titanList],
	restriction:{limit:2, restricting:'Company', restricted:'Support Formations'}};

// CALLBACK
listLoaded();
