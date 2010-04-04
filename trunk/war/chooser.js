
document.observe('dom:loaded', initPage );
var formationIdCounter = 0;

function initPage() {
	var head = $$('head')[0];
	var listFile = new String(window.location).split('list=')[1] + '.js';
    script = new Element('script', { type: 'text/javascript', src: listFile });
    head.appendChild(script);
}

function renderListName() {
	return listData.id + ' (' + listData.version + ')';
}

function listLoaded() {
	$('orbatListName').update( renderListName() );
	$('viewText').observe('click', viewPlainText);
	$('viewTable').observe('click', viewTable);
	$('viewImport').observe('click', viewImport);
	$('doImport').observe('click', doImport);
	$('orbatTitle').observe('click', toggleNameEditor);
	listData.sublists.each( createList );
	if (listData.mandatoryFormations) {
		listData.mandatoryFormations.each(function(x) {
			var newRow = addFormation(null, x);
			newRow.stopObserving('click');
		});
	}
	viewTable();
}

function toggleNameEditor() {
	if ($('orbatName').visible()) {
		$('orbatName').hide();
		var input = new Element('input', {id:'orbatNameEditor', type:'text'});
		$('orbatTitle').insert({top:input});
		input.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		input.observe('keypress', function(event){
			if(event.keyCode == Event.KEY_RETURN) {
				toggleNameEditor();
				Event.stop(event);
			}
		});
		input.value = $('orbatName').innerHTML.unescapeHTML();
		input.activate();
	}
	else {
		$('orbatName').update($F('orbatNameEditor').escapeHTML());
		$('orbatNameEditor').remove();
		$('orbatName').show();
	}	
}

function padPoints(pts) {
	if (pts < 10) {
		return '&nbsp;&nbsp;' + pts;
	}	
	if (pts < 100) {
		return '&nbsp;' + pts;
	}
	else {
		return pts;
	}
}

function resetViews() {
	$$('.viewDiv').each(function(x) {
		x.hide();
	});
	$$('#controls a.selected').each(function(x) {
		x.removeClassName('selected');
	});
}

function viewTable() {
	resetViews();
	$('orbat').show();
	$('viewTable').addClassName('selected');
}

function viewImport() {
	resetViews();
	$('importDiv').show();
	$('viewImport').addClassName('selected');
	$('importText').activate();
}

function reset() {
	// todo what about (madatory formations?)
	$$('.orbatFormation').each( Element.remove );
	$$('.orbatUpgrade').each( Element.remove );
	$$('.formationOption').each( activate );
	addPoints(-totalPoints());
}

function allFormations() {
	return listData.sublists.collect(function(x) {return x.options;}).flatten().concat(
		listData.mandatoryFormations ? listData.mandatoryFormations : []);
}

function doImport() { // todo: mandatory formations break because they are not listed in the side panel
	try {	
		var listIsNext = false;
		var currentFormation = null;
		reset();
		
		$F('importText').scan( /^.+$/m, function(x) {
			var line = new String(x).strip();
			if (!line.blank() && !line.include('===') && !line.include('---')) {
				if (listIsNext) {
					listIsNext = false;
					if (line != renderListName()) {
						alert('List name does not match!\nExpected: ' + renderListName() + '\nFound: ' + line);
					}					
				}
				else if (line.include('POINTS')) {
					listIsNext = true;
					var orbatName = line.substring(0, line.lastIndexOf(',')).escapeHTML();
					$('orbatName').update(orbatName);
				}
				else if(line.include(' +')) {
					var label = line.sub( /[0-9 \+]+/, '');
					// alert(label + ':' + line);
					var upgradeData = $(currentFormation + 'upgradeOptions').childElements().slice(1).find(function(x) {
						return x.upgradeData.label == label;
					}).upgradeData;
					addUpgrade(null, currentFormation, upgradeData);
				}
				else {
					var label = line.sub( /[0-9 ]+/, '');
					//alert(label + ':' + line);
					var formationData = allFormations().find(function(x) {
						return label == x.label;
					});
					currentFormation = addFormation(null, formationData).id;
				}
			}
		});
		viewTable();
	}
	catch(err) {
			alert('Import failed.');
	}
}

function viewPlainText() {
	resetViews();
	var txt = $('plainTextDiv').update();//new Element('div', {id:'plainTextDiv'});
	txt.insert($('orbatName').innerHTML + ', ' + $('totalPts').innerHTML + ' POINTS').insert(new Element('br'));
	txt.insert($('orbatListName').innerHTML).insert(new Element('br'));
	txt.insert('==================================================');
	$('orbatBody').childElements().each(function (x) {
		if (x.hasClassName('orbatFormation')) {
			txt.insert(new Element('br'));
			txt.insert(padPoints(x.formationData.pts) + ' ' + x.formationData.label);
			txt.insert(new Element('br'));
		}
		else if (x.hasClassName('orbatUpgrade')) {
			txt.insert(padPoints(x.upgradeData.pts) + ' +' + x.upgradeData.label);
			txt.insert(new Element('br'));	
		}		
		else if (x == $('formationDivider')) {
			txt.insert(new Element('br')).insert('-----');
		}
	});
	txt.insert(new Element('br')).insert(new Element('br'));
	$('plainTextDiv').show();
	$('viewText').addClassName('selected');
}

function flattenUpgrades(formation) {
	var upgrades = [];
	formation.upgrades.each(function(x) {
		if (x.options) {
			upgrades = upgrades.concat(x.options);
		}
		else {
			upgrades.push(x);
		}
	});
	return upgrades;
}

function totalPoints() {
	return parseInt($('totalPts').innerHTML);
}

function addPoints(toAdd) {
	$('totalPts').update( totalPoints() + toAdd );
}

function removeUpgrade(upgradeRow, formationId) {
	addPoints(-upgradeRow.upgradeData.pts);
	upgradeRow.remove();
	checkUpgradeConstraints(formationId, upgradeRow.upgradeData);
	checkArmyConstraints();
}

function removeFormation(formationRow, pts) {
	formationRow.remove();
	$$('.' + formationRow.identify()).each(function(upgrade) {
		addPoints(-upgrade.upgradeData.pts);
		upgrade.remove();
	});
	addPoints(-pts);
	checkFormationConstraints();
	checkArmyConstraints();
}

function addUpgrade(event, formationId, upgradeData) {
	var newRow = new Element('tr', {'class':'interactive orbatUpgrade ' + formationId}).update(
					new Element('td').update(upgradeData.label))
				.insert(
					new Element('td', {'class':'points'}).update(upgradeData.pts));

	newRow.upgradeData = upgradeData;
	$(formationId).insert({after:newRow});
	addPoints(upgradeData.pts);
	newRow.observe('click', removeUpgrade.bind(this, newRow, formationId));	

	// constraints
	checkUpgradeConstraints(formationId);
	checkArmyConstraints();
}

// mozilla border bug when hiding/showing rows
function checkArmyConstraints() {
	var warnings = [];
	// 1/3 points constraint
	var count = 0;	// todo (include upgrade points too)
	$$('.limited').each(function(x) {count += x.formationData.pts});
	if (count > totalPoints() / 3.0) {
		warnings.push('Over 1/3 of points is spent on War Engines/Allies!');
	}
	// restricted formations
	if (listData.restriction) {
		var count = $$('.restricted').size();
		var allowed = listData.restriction.limit * $$('.restricting').size();
		if (count > allowed) {
			warnings.push('More than ' + listData.restriction.limit + ' ' + listData.restriction.restricted + ' per ' + listData.restriction.restricting + '!');
		}
	}

	$('warnings').update();
	if (warnings.size() > 0) {	
		warnings.each(function(x) {
			$('warnings').insert('WARNING: ' + x + '').insert(new Element('br'));	
		});
	}
}

function checkFormationConstraints() {
	var formationRows = $$('.orbatFormation');
	$$('.formationOption').each(function(option) {
		var constraints = '';
		// check 'upto' constraint
		var formationData = option.formationData;
		var groupData = option.formationData.group;
		if (formationData.upto) {
			var count = formationRows.findAll(function(x) {return x.formationData === formationData;}).size(); 
			if (count >= formationData.upto) {
				constraints += '[max ' + formationData.upto + ']';
			}
		}		
		// check 'upto' GROUP constraint
		if (groupData && groupData.upto) {
			var group = formationRows.findAll(function (x) {return x.formationData.group === groupData;});
			if (group.size() >= groupData.upto) {
				constraints += ' [max ' + groupData.upto + ' ' + groupData.label + ']';
			}
		}
		// update UI
		if (constraints == '') {
			activate(option);
		}
		else {
			deactivate(option, constraints);
		}
	});
}

function checkUpgradeConstraints(formationId) {
	var upgradeRows = $$('.' + formationId);
	var upgradeOptions = $(formationId + 'upgradeOptions').childElements().slice(1); // remove header row

	upgradeOptions.each(function(option) {
		var constraints = '';
		var upgradeData = option.upgradeData;
		var groupData = option.upgradeData.group;
		// check 'upto' constraint	
		if (upgradeData.upto) {		
			var numUpgrades = upgradeRows.findAll(function (x) {return x.upgradeData === upgradeData;}).size();
			if (numUpgrades >= upgradeData.upto) {
				constraints += '[max ' + upgradeData.upto + ']';
			}
		}		
		// check 'upto' GROUP constraint
		if (groupData && groupData.upto) {
			var group = upgradeRows.findAll(function (x) {return x.upgradeData.group === groupData;});
			if (group.size() >= groupData.upto) {
				constraints += ' [max ' + groupData.upto + ' ' + groupData.label + ']';
			}
		}
		// update UI
		if (constraints == '') {
			activate(option);
		}
		else {
			deactivate(option, constraints);
		}
	});
}

function wrapActivatableHandler(element, handler) {
	return handler.wrap(function(proceed, arg1, arg2, arg3) {
		if (!element.hasClassName('inactive')) {
			proceed(arg1, arg2, arg3);
		}
	});
}

function deactivate(row, msg) {
	var msgDiv = row.hasClassName('inactive') ? row.firstDescendant().firstDescendant() : 
												row.firstDescendant().insert({top:
													new Element('div', {'class':'constraint'}) }).firstDescendant();
	msgDiv.update(msg);
	row.removeClassName('interactive');
	row.addClassName('inactive');
}

function activate(row) {
	if (!row.hasClassName('interactive')) {
		row.firstDescendant().firstDescendant().remove();
		row.removeClassName('inactive');
		row.addClassName('interactive');
	}
}

function addFormation(event, formation) {
	var formationId = 'formation' + formationIdCounter++;
	var dropDown = createUpgrades(flattenUpgrades(formation), formationId);
	var newRow = new Element('tr', {'class':'orbatFormation interactive', id:formationId}).update(
					new Element('td').update(formation.label).insert( dropDown )
				).insert(
					new Element('td', {'class':'points'}).update(formation.pts) );

	if (formation.restricting) {	// todo: remove the class names and just use the row.formationData?
		newRow.addClassName('restricting');
	}
	else if (formation.restricted) {
		newRow.addClassName('restricted');
	}

	if (formation.limited) {
		newRow.addClassName('limited');
		$('orbatBody').insert( newRow );
	}
	else {
		newRow.addClassName('unlimited'); // is this class used?
		$('formationDivider').insert({before:newRow});
	}
	
	dropDown.hide();
	newRow.observe('mouseover', function() { dropDown.show(); });
	newRow.observe('mouseout', function() { dropDown.hide(); });
	newRow.observe('click', removeFormation.bind(this, newRow, formation.pts));		
	newRow.formationData = formation;
	addPoints(formation.pts);
	resetFormationDivider();
	checkFormationConstraints();
	checkArmyConstraints();
	return newRow;
}

function resetFormationDivider() {
	$$('.formationDivider').each(function(x) { x.removeClassName('formationDivider'); });
	if ($$('.limited').any()) {
		$$('.limited').first().addClassName('formationDivider');
	}
}

function createUpgrades(upgrades, formationId) {
	var newTable = new Element('table', {id:formationId + 'upgradeOptions'}).update(
						new Element('tr').update(
							new Element('th', {colspan:2}).update('UPGRADES') ));

	if (upgrades.length < 1) {	
		var listItem = new Element('tr', {'class':'listItem even'}).update(
							new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
		newTable.insert(listItem);		
	};

	upgrades.each(function(x) {
		var upgradeOption = new Element('tr', {'class':'interactive listItem even'}).update(
								new Element('td').update(x.label)
							).insert(
								new Element('td', {'class':'points'}).update(x.pts) );

		upgradeOption.upgradeData = x;
		newTable.insert(upgradeOption);		
		upgradeOption.observe('click',
				wrapActivatableHandler(upgradeOption, addUpgrade)
					.bindAsEventListener(this, formationId, x));
	});
	
	newTable.childElements().eachSlice(2, function(x) {
		x[0].removeClassName('even');
	});

	var dropDown = new Element('div', {'class':'dropDown'}).update(
						new Element('div', {'class':'listDiv'}).update(newTable));
	dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
	return dropDown;
}


function createList(list) {
	var newTable = new Element('table').update(
						new Element('tr').update(
							new Element('th', {colspan:2}).update(list.label) ));
	
	list.options.each(function(x) {
		var listItem = new Element('tr', {'class':'interactive listItem even formationOption'}).update(
							new Element('td').update(x.label)
						).insert(
							new Element('td', {'class':'points'}).update(x.pts) );

		listItem.formationData = x;
		newTable.insert(listItem);
		 // should this be done after the table is inserted in the DOM?
		listItem.observe('click', 
				wrapActivatableHandler(listItem, addFormation)
					.bindAsEventListener(this, x));
	});
	
	newTable.childElements().eachSlice(2, function(x) {
		x[0].removeClassName('even');
	});

	$('armyList').insert(
		 new Element('div', {'class':'listDiv'}).update(newTable) );
}

