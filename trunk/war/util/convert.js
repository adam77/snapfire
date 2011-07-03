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


function loadJson( file ) {
	var js = readFile( file + ".js" );
	var json = readFile( file + ".json" );
	x = js + "var jsonList = " + json + ";";
	eval(x);
	jsonList.hello = "hi there";
	writeFile( base + "util/test.json", JSON.stringify( jsonList ) );
}

loadJson( base + "SM_codex_FERC" );

// pretty print python -mjson.tool
