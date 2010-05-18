// OPTIONALS
var boyzOp =			{id:10, label:'Boyz', 	minimum:6};
	var boy1 =			{id:11, label:'Boyz',	pts:25, optional:true, group:boyzOp};
	boyzOp.options = 	[boy1];
var nobzOp =			{id:12, label:'Nobz', 	minimum:2, upto:3};
	var nob1 =			{id:13, label:'Nobz',	pts:35, optional:true, group:nobzOp};
	nobzOp.options = 	[nob1];
var boyzOp2 =			{id:14, label:'Boyz', 	minimum:12};
	var boy2 =			{id:15, label:'Boyz',	pts:25, optional:true, group:boyzOp2};
	boyzOp2.options = 	[boy2];
var nobzOp2 =			{id:16, label:'Nobz', 	minimum:4, upto:6};
	var nob2 =			{id:17, label:'Nobz',	pts:35, optional:true, group:nobzOp2};
	nobzOp2.options = 	[nob2];
var boyzOp3 =			{id:18, label:'Boyz', 	minimum:18};
	var boy3 =			{id:19, label:'Boyz',	pts:25, optional:true, group:boyzOp3};
	boyzOp3.options = 	[boy3];
var nobzOp3 =			{id:20, label:'Nobz', 	minimum:6, upto:9};
	var nob3 =			{id:21, label:'Nobz',	pts:35, optional:true, group:nobzOp3};
	nobzOp3.options = 	[nob3];
var wildOp =			{id:22, label:'Two Wildboyz Units', 	minimum:3};
	var wildboy1 =		{id:23, label:'Two Wildboyz Units',	pts:25, optional:true, group:wildOp};
	wildOp.options = 	[wildboy1];
var wildOp2 =			{id:24, label:'Two Wildboyz Units', 	minimum:6};
	var wildboy2 =		{id:25, label:'Two Wildboyz Units',	pts:25, optional:true, group:wildOp2};
	wildOp2.options = 	[wildboy2];
var wildOp3 =			{id:26, label:'Two Wildboyz Units', 	minimum:9};
	var wildboy3 =		{id:27, label:'Two Wildboyz Units',	pts:25, optional:true, group:wildOp3};
	wildOp3.options = 	[wildboy3];
var boarOp = 			{id:28, label:'Boarboyz',	minimum:5};
	var boar1 =			{id:29, label:'Boarboyz',	pts:25,	optional:true, group:boarOp};
	boarOp.options =	[boar1];
var boarOp2 = 			{id:30, label:'Boarboyz',	minimum:10};
	var boar2 =			{id:31, label:'Boarboyz',	pts:25,	optional:true, group:boarOp2};
	boarOp2.options =	[boar2];
var boarOp3 = 			{id:32, label:'Boarboyz',	minimum:15};
	var boar3 =			{id:33, label:'Boarboyz',	pts:25,	optional:true, group:boarOp3};
	boarOp3.options =	[boar3];
var madOp =				{id:34, label:'Madboyz', 	minimum:6, upto:12};
	var mad1 =			{id:35, label:'Madboyz',	pts:15, optional:true, group:madOp};
	madOp.options = 	[mad1];
var steamOp =			{id:36, label:'Gargants', 	minimum:1, upto:3};
	var steam1 =		{id:37, label:'Steam Gargant',	pts:150, optional:true, group:steamOp};
	steamOp.options = 	[steam1];

// UPGRADES
var boyz =				{id:50, label:'Boyz', 							pts:25};
var wildboyz =			{id:51, label:'Two Wildboyz Units',				pts:25};
var boarboyz =			{id:53, label:'Boarboyz',						pts:25};
var nobz1 =				{id:54, label:'Nobz',							pts:50, upto:1};
var nobz2 =				{id:55, label:'Nobz',							pts:50, upto:2};
var squiggoth =			{id:57, label:'Squiggoth',						pts:50};
var wyrdboy1 =			{id:58, label:'Wyrdboy',						pts:50, upto:1};
var wyrdboy2 =			{id:59, label:'Wyrdboy',						pts:50, upto:2};
var wyrdboy3 =			{id:60, label:'Wyrdboy',						pts:50, upto:3};
var orkeosaurus1 =		{id:61, label:'Orkeosaurus',					pts:175, upto:1};
var orkeosaurus2 =		{id:62, label:'Orkeosaurus',					pts:175, upto:2};
var orkeosaurus3 =		{id:63, label:'Orkeosaurus',					pts:175, upto:3};
var warlord =			{id:67, label:'Warlord',						pts:0, 	upto:1, perArmy:1};
var wildnobz =			{id:68, label:'Nobz',							pts:35, upto:1};
var katapult3 =			{id:69, label:'Squig Katapult',					pts:25, upto:3};
var katapult6 =			{id:70, label:'Squig Katapult',					pts:25, upto:6};
var katapult9 =			{id:71, label:'Squig Katapult',					pts:25, upto:9};

// WARBANDS
var warband =			{id:500, label:'Warband',				pts:-20,	displayPts:200,		defaults:[{unit:nob1,count:2},{unit:boy1,count:6}], upgrades:[nobzOp, boyzOp, wildboyz, katapult3, boarboyz, squiggoth, wyrdboy1, orkeosaurus1, warlord]};
var bigWarband =		{id:501, label:'Warband (Big)',			pts:-90, 	displayPts:350,		defaults:[{unit:nob2,count:4},{unit:boy2,count:12}], upgrades:[nobzOp2, boyzOp2, wildboyz, katapult6, boarboyz, squiggoth, wyrdboy2, orkeosaurus2, warlord]};
var ugeWarband =		{id:502, label:'Warband (\'Uge)',		pts:-160, 	displayPts:500,		defaults:[{unit:nob3,count:6},{unit:boy3,count:18}], upgrades:[nobzOp3, boyzOp3, wildboyz, katapult9, boarboyz, squiggoth, wyrdboy3, orkeosaurus3, warlord]};
var wildboyzmob =		{id:503, label:'Wildboyz',				pts:5,		displayPts:150,		defaults:[{unit:nob1,count:2},{unit:wildboy1,count:3}], upgrades:[nobzOp, wildOp, katapult3, boarboyz, squiggoth, wyrdboy1, orkeosaurus1, warlord]};
var bigwildboyz =		{id:504, label:'Wildboyz (Big)',		pts:-40, 	displayPts:250,		defaults:[{unit:nob2,count:4},{unit:wildboy2,count:6}], upgrades:[nobzOp2, wildOp2, katapult6, boarboyz, squiggoth, wyrdboy2, orkeosaurus2, warlord]};
var ugewildboyz =		{id:505, label:'Wildboyz (\'Uge)',		pts:-85, 	displayPts:350,		defaults:[{unit:nob3,count:6},{unit:wildboy3,count:9}], upgrades:[nobzOp3, wildOp3, katapult9, boarboyz, squiggoth, wyrdboy3, orkeosaurus3, warlord]};
var boarhorde =			{id:506, label:'Boarboyz Horde',		pts:-25,	displayPts:100,		defaults:[{unit:boar1,count:5}], upgrades:[boar1, wyrdboy1, warlord]};
var boarhordebig =		{id:507, label:'Boarboyz Horde (Big)',	pts:-75,	displayPts:175,		defaults:[{unit:boar2,count:10}], upgrades:[boar2, wyrdboy2, warlord]};
var boarhordeuge =		{id:508, label:'Boarboyz Horde (\'Uge)',pts:-125,	displayPts:250,		defaults:[{unit:boar3,count:15}], upgrades:[boar3, wyrdboy3, warlord]};
var trappas =			{id:509, label:'Trappas',				pts:150,	units:'6 Wildboyz', upgrades:[wildnobz]};
var madhorde =			{id:510, label:'Madboyz Horde',			pts:10,		displayPts:100, 	upto:1, defaults:[{unit:mad1,count:6}], upgrades:[mad1, wyrdboy3]};
var junkbrigade =		{id:511, label:'Junka Brigade',			pts:25,		displayPts:175,		units:'Junka Trukks', defaults:[{unit:boy1,count:6}], upgrades:[boy1, nobz1, wyrdboy1, warlord]};
var junkbrigadebig =	{id:512, label:'Junka Brigade (Big)',	pts:0,		displayPts:300,		units:'Junka Trukks', defaults:[{unit:boy2,count:12}], upgrades:[boy2, nobz2, wyrdboy2, warlord]};
var steamGargant =		{id:514, label:'Steam Gargant',			pts:50,		displayPts:200,		upto:1, defaults:[{unit:steam1,count:1}], upgrades:[steam1]};
var warbandList =		{id:516, label:'WAR HORDES', options:[warband, bigWarband, ugeWarband, wildboyzmob, bigwildboyz, ugewildboyz, boarhorde, boarhordebig, boarhordeuge, trappas, madhorde, junkbrigade, junkbrigadebig, steamGargant]};


// DETAILS
var listData = {
	id:'Snagga-Snagga\'s Feral Orks', version:'NetEA Compendium 1.0',
	sublists:[warbandList]};

// CALLBACK
listLoaded();
