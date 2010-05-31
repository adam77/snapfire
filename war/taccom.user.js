// ==UserScript==
// @name           taccom keyboard shortcuts
// @namespace      adam77
// @description    keyboard shortcuts for the taccom forum
// @include        http://www.tacticalwargames.net/*
// @include        http://tacticalwargames.net/*
// ==/UserScript==

function console(msg) {
	document.getElementById('console').innerHTML = msg;
}

function jump(url) {
	console('jumping...');
	window.location = url;
}

function updateUnreads() {
	var anchors = document.getElementsByTagName('a');
	var unreads = [];
	for (var i = 0; i < anchors.length; i++) {
		var href = anchors[i].getAttribute('href')
		if (href && href.indexOf('view=unread') > -1) {
			unreads.push(href);
		}
	}
	GM_setValue('unread', unreads.reverse().toString());
}

function popUnread() {
	var nextUnread = null;
	var unreads = GM_getValue('unread') ? GM_getValue('unread').split(',') : [];
	if (unreads.length > 0) {
		nextUnread = unreads.pop();
		GM_setValue('unread', unreads.toString());
	}
	return nextUnread;
}

// KEYPRESS EVENT
document.addEventListener('keypress', function(event) { 	
		if (!isEditing) {
			switch (event.charCode) {
				case 106:			
					if (isIndexPage) {
						updateUnreads();			
					}
					var next = popUnread();
					if (next)
						jump('http://tacticalwargames.net/taccmd/' + next);
					else
						jump(GM_getValue('indexPage'));
					break;
				case 109:
					if (isIndexPage) {
						updateUnreads();			
						var next = popUnread();
						if (next) {			
							console('marking...')
							// only works??? if the url is not prefixed with 'www.' (re: cookie permissions)
							GM_xmlhttpRequest({
								method: "GET",
							  	url: "http://tacticalwargames.net/taccmd/" + next,
								onload: function(response) {
									if (response.status = '200') {
										var anchors = document.getElementsByTagName('a');
										for (var i = 0; i < anchors.length; i++) {
											var href = anchors[i].getAttribute('href')
											if (href == next) {
												anchors[i].setAttribute('style', 'display:none');
												anchors[i].setAttribute('href', './');
												console('Shortcuts loaded... (press h for help)')
											}
										}								
									}
									else {
										console('Marking failed :-(');
									}
							  	}
							});
						}
					}
					break;
				case 110:
					jump(newPage);
					break;
				case 117:
					jump(unreadPage);
					break;
				case 104:
					alert('\nShortcuts:\n\n' +
						' j \t- Jump to first unread post \n' +
						'   \t  (or next unread post if viewing topic)\n' + 
						' m \t- Mark first unread post as read\n' +
						' n \t- Go to \'View new posts\'\n' +
						' u \t- Go to \'View unread posts\'\n\n');
//						' r \t- Reply to current topic\n\n');
		//				'* \'m\' only works when the hostname is tacticalwargames.net\n' +
			//			'  (not www.tacticalwargames.net)');
					break;
			}
		}
	}, true);

// EDITING TOGGLE
var isEditing = false;
function editing() {
	isEditing = true;
	console('disabled');
}
function notEditing() {
	isEditing = false;
	console('Shortcuts loaded... (press h for help)');
}
window.addEventListener('load', function(event) {
		var editors = document.getElementsByTagName('input');
		for (var i=0; i<editors.length; i++) {
			editors[i].addEventListener('focus', editing, true);
			editors[i].addEventListener('blur', notEditing, true);
		}
		editors = document.getElementsByTagName('textarea');
		for (var i=0; i<editors.length; i++) {
			editors[i].addEventListener('focus', editing, true);
			editors[i].addEventListener('blur', notEditing, true);
		}
	}, true);

// SET INDEX PAGE
var unreadPage = 'http://tacticalwargames.net/taccmd/search.php?search_id=unreadposts';
var newPage = 'http://tacticalwargames.net/taccmd/search.php?search_id=newposts';
var isUnreadPage = window.location.toString().indexOf('unreadposts') > -1;
var isNewPage = window.location.toString().indexOf('newposts') > -1;
var isIndexPage = isUnreadPage || isNewPage;
if (isIndexPage) {
	GM_setValue('indexPage', isNewPage ? newPage : unreadPage);
}

// CONSOLE
var newDiv = document.createElement('div');
newDiv.innerHTML = 'Shortcuts loaded... (press h for help)';
newDiv.setAttribute('id', 'console');
newDiv.setAttribute('style', 'position:fixed; right:0; bottom:0; color:#333; background-color:yellow;');
document.body.appendChild(newDiv);
