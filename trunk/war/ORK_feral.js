// MANDATORY UNITS
var boy1 =			{id:11, label:'Boyz',				pts:25, optional:true, minimum:6};
var nob1 =			{id:13, label:'Nobz',				pts:35, optional:true, minimum:2};
var grotz1 =		{id:39, label:'Grotz',				pts:0,	optional:true, minimum:2};
var boy2 =			{id:15, label:'Boyz',				pts:25, optional:true, minimum:12};
var nob2 =			{id:17, label:'Nobz',				pts:35, optional:true, minimum:4, upto:6};
var grotz2 =		{id:41, label:'Grotz',				pts:0, 	optional:true, minimum:4};
var boy3 =			{id:19, label:'Boyz',				pts:25, optional:true, minimum:18};
var nob3 =			{id:21, label:'Nobz',				pts:35, optional:true, minimum:6, upto:9};
var grotz3 =		{id:43, label:'Grotz',				pts:0,	optional:true, minimum:6};
var wildboy1 =		{id:23, label:'Two Wildboyz Units',	pts:25, optional:true, minimum:3};
var wildboy2 =		{id:25, label:'Two Wildboyz Units',	pts:25, optional:true, minimum:6};
var wildboy3 =		{id:27, label:'Two Wildboyz Units',	pts:25, optional:true, minimum:9};
var boar1 =			{id:29, label:'Boarboyz',			pts:25,	optional:true, minimum:5};
var boar2 =			{id:31, label:'Boarboyz',			pts:25,	optional:true, minimum:10};
var boar3 =			{id:33, label:'Boarboyz',			pts:25,	optional:true, minimum:15};
var mad1 =			{id:35, label:'Madboyz',			pts:15, optional:true, minimum:6, upto:12};
var steam1 =		{id:37, label:'Steam Gargant',		pts:150,optional:true, minimum:1, upto:3};

// UPGRADES
var boyz =			{id:50, label:'Boyz', 				pts:25};
var wildboyz =		{id:51, label:'Two Wildboyz Units',	pts:25};
var katapult =		{id:52, label:'Squig Katapult',		pts:25};
var boarboyz =		{id:53, label:'Boarboyz',			pts:25};
var nobz1 =			{id:54, label:'Nobz',				pts:35, upto:1};
var nobz2 =			{id:55, label:'Nobz',				pts:35, upto:2};
var nobz3 =			{id:56, label:'Nobz',				pts:35, upto:3};
var squiggoth =		{id:57, label:'Squiggoth',			pts:50};
var wyrdboy1 =		{id:58, label:'Wyrdboy',			pts:50, upto:1};
var wyrdboy2 =		{id:59, label:'Wyrdboy',			pts:50, upto:2};
var wyrdboy3 =		{id:60, label:'Wyrdboy',			pts:50, upto:3};
var orkeosaurus1 =	{id:61, label:'Orkeosaurus',		pts:150,upto:1};
var orkeosaurus2 =	{id:62, label:'Orkeosaurus',		pts:150,upto:2};
var orkeosaurus3 =	{id:63, label:'Orkeosaurus',		pts:150,upto:3};
var junkaNob1 =		{id:64, label:'Junkatrukk and Nob',	pts:35, upto:1};
var junkaNob2 =		{id:65, label:'Junkatrukk and Nob',	pts:35, upto:2};
var junkaNob3 =		{id:66, label:'Junkatrukk and Nob',	pts:35, upto:3};
var warlord =		{id:67, label:'Warlord',			pts:0, 	general:true};

// WARBANDS
var warbandList =		{id:516, label:'WAR HORDES', options:[
	{id:500, label:'Warband',				pts:-20,	displayPts:200,	upgrades:[boy1, nob1, grotz1, wildboyz, katapult, boarboyz, squiggoth, wyrdboy1, orkeosaurus1, warlord]},
	{id:501, label:'Warband (Big)',			pts:-90, 	displayPts:350, upgrades:[boy2, nob2, grotz2, wildboyz, katapult, boarboyz, squiggoth, wyrdboy2, orkeosaurus2, warlord]},
	{id:502, label:'Warband (\'Uge)',		pts:-160, 	displayPts:500, upgrades:[boy3, nob3, grotz3, wildboyz, katapult, boarboyz, squiggoth, wyrdboy3, orkeosaurus3, warlord]},
	{id:503, label:'Wildboyz',				pts:5,		displayPts:150, upgrades:[wildboy1, nob1, katapult, boarboyz, squiggoth, wyrdboy1, orkeosaurus1, warlord]},
	{id:504, label:'Wildboyz (Big)',		pts:-40, 	displayPts:250,	upgrades:[wildboy2, nob2, katapult, boarboyz, squiggoth, wyrdboy2, orkeosaurus2, warlord]},
	{id:505, label:'Wildboyz (\'Uge)',		pts:-85, 	displayPts:350,	upgrades:[wildboy3, nob3, katapult, boarboyz, squiggoth, wyrdboy3, orkeosaurus3, warlord]},
	{id:506, label:'Boarboyz Horde',		pts:-25,	displayPts:100,	upgrades:[boar1, wyrdboy1, warlord]},
	{id:507, label:'Boarboyz Horde (Big)',	pts:-75,	displayPts:175,	upgrades:[boar2, wyrdboy2, warlord]},
	{id:508, label:'Boarboyz Horde (\'Uge)',pts:-125,	displayPts:250,	upgrades:[boar3, wyrdboy3, warlord]},
	{id:509, label:'Trappas',				pts:150,	units:'6 Wildboyz', upgrades:[nobz1]},
	{id:510, label:'Madboyz Horde',			pts:10,		displayPts:100, 	upto:1, upgrades:[mad1, wyrdboy3]},
	{id:511, label:'Junka Brigade',			pts:0,		displayPts:150,		units:'Junka Trukks', upgrades:[boy1, nobz1, wyrdboy1, warlord]},
	{id:512, label:'Junka Brigade (Big)',	pts:-50,	displayPts:250,		units:'Junka Trukks', upgrades:[boy2, nobz2, wyrdboy2, warlord]},
	{id:513, label:'Junka Brigade (\'Uge)',	pts:-100,	displayPts:350,		units:'Junka Trukks', upgrades:[boy3, nobz3, wyrdboy3, warlord]},
	{id:514, label:'Steam Gargant',			pts:50,		displayPts:200,		upto:1, defaults:[{unit:steam1,count:1}], upgrades:[steam1]}
]};

// DETAILS
var listData = {
	id:'Snagga-Snagga\'s Feral Orks', version:'EA Swordwind',
	sublists:[warbandList]};

// CALLBACK
listLoaded();