var base = "/home/adam/personal/games/snapfire/war/";

importPackage( java.io );

function listLoaded() {
	print("listLoaded!");
}

function writeFile( file, stream ) {
	var buffer = new PrintWriter( new FileWriter( file ) );
	buffer.print( stream );
	buffer.close();
}

function readEval( file ) {
	var x = readFile( file );
	eval(x);
}


function loadList( file ) {
	var js = readFile( file + ".js" );
	var json = readFile( file + ".json" );
	x = js + "var jsonList = " + json + ";";
	eval(x);
}


function doBasicStructure( list, src ) {
	list.id = 
	list.version = 
	list.sections = [];
	list.upgrades = [];
	list.formationConstraints = [];
	list.upgradeConstraints = [];
}

function doTopLevelConstraints( list, src ) {

}

function doSection( list, src, section ) {
	list.sections.push();
}

function doFormation( list, src, formation ) {
}

function convert( src ) {
	var list = {};
	
	doBasicStructure( list, src );
	
	for (var i=0; i<src.sublists; i++) {
		doSection( list, src, src.sublists[i] );
	}
	
	doTopLevelConstraints( list, src );
	
	return list;
}

//loadList( base + "SM_codex_FERC" );
//writeFile( base + "util/test.json", JSON.stringify( jsonList ) );
// pretty print python -mjson.tool
