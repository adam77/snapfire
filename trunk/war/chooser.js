
document.observe('dom:loaded', initPage );
var formationIdCounter = 0;
var url = '';
var params = {};
var allFormations = {};
var allUpgrades = {};

function initPage() {
	var head = $$('head')[0];	
	url = new String(window.location).split('?')[0]	
	var paramString = new String(window.location).split('?')[1]
	paramString.split('&').each(function(param) {
		params[param.split('=')[0]] = param.split('=')[1];
	});
	var listFile = params.list + '.js';
    script = new Element('script', { type: 'text/javascript', src: listFile });
    head.appendChild(script);
}

function renderListName() {
	return listData.id + ' (' + listData.version + ')';
}

function initIds(formation) {
	allFormations[formation.id] = formation
	flattenUpgrades(formation).each(function(upgrade) {
		allUpgrades[upgrade.id] = upgrade
	});
	flattenDefaults(formation).each(function(upgrade) {
		allUpgrades[upgrade.id] = upgrade
	});
}

function listLoaded() {
	if (listData.mandatoryFormations) {
		listData.mandatoryFormations.each( initIds )
	}
	listData.sublists.each(function(x) {
		x.options.each( initIds )
	});	
	$('orbatListName').update( renderListName() );
	$('viewText').observe('click', viewPlainText);
	$('viewTable').observe('click', viewTable);
	$('viewImport').observe('click', viewLink);
	$('orbatTitle').observe('click', toggleNameEditor);
	listData.sublists.each( createList );
	if (params.force) {
		unpickle(params.force);
	}
	else if (listData.mandatoryFormations) {
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

function viewLink() {
	resetViews();
	$('importDiv').show();
	$('viewImport').addClassName('selected');
	$('importText').update(pickle());
	$('importText').activate();
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
					var label = line.sub( /[0-9]+ \+/, '');
					var count = 1;
					var multiplierIdx = label.indexOf('x ');
					if (multiplierIdx > 0) {
						count = parseInt(label.substr(0,multiplierIdx));
						label = label.substr(multiplierIdx+2);	
					}
					//alert(label + ':' + count + ':' + line);
					var upgradeData = $(currentFormation + 'upgradeOptions').childElements().slice(1).find(function(x) {
						return x.upgradeData.label == label;
					}).upgradeData;
					for (var i=0; i<count; i++) {
						addUpgrade(null, currentFormation, upgradeData);
					}
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

function unpickle(pickled) {
	try {
		var doneName = false
		var currentFormation = null
		decodeURIComponent(pickled).split('~').each(function(x) {
			if (!doneName) {
				$('orbatName').update(x)
				doneName = true
			}
			else {
				var id = parseInt(x.split('x')[0])
				if (id >= 500) {
					currentFormation = addFormation(null, allFormations[id], true).identify()
				}
				else {
					var count = parseInt(x.split('x')[1])
					for (var i=0;i<count;i++) {
						addUpgrade(null, currentFormation, allUpgrades[id])
					}
				}
			}			
		})	
	} catch(err) {
			alert('Sorry, there was an error loading the army.');
	}
}

function pickle() {
	var out = $('orbatName').innerHTML
	$('orbatBody').childElements().each(function(x) {
		if (x.hasClassName('orbatFormation')) {
			out += '~' + x.formationData.id
		}
		else if (x.hasClassName('orbatUpgrade')) {
			out += '~' + x.upgradeData.id + 'x' + upgradeMultiplier(x)
		}
	});	
	return url + '?list=' + params.list + '&force=' + encodeURIComponent(out)
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
			txt.insert(x.formationData.label.toUpperCase() +' - '+x.childElements()[1].innerHTML +'');
			txt.insert(new Element('br'));
			if (x.formationData.units) {
				txt.insert(x.formationData.units).insert(new Element('br'));
			}
		}
		else if (x.hasClassName('orbatUpgrade')) {
			var multiplier = upgradeMultiplier(x);
			var joiner = (x.upgradeData.optional ? '' : '+') + (multiplier > 1 ? multiplier + 'x&nbsp;' : '');
			txt.insert(joiner + x.upgradeData.label);
			txt.insert(new Element('br'));	
		}		
//		else if (x == $('formationDivider')) {
//			txt.insert(new Element('br')).insert('-----');
//		}
	});
	txt.insert(new Element('br')).insert(new Element('br'));
	$('plainTextDiv').show();
	$('viewText').addClassName('selected');
}

function flattenDefaults(formation) {
	var upgrades = []
	if (formation.defaults) {
		formation.defaults.each(function(x) {
			if (x.unit.group) {
				upgrades = upgrades.concat(x.unit.group.options)
			}
			else {
				upgrades.push(x.unit)
			}
		})
	}
	return upgrades
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
	var data = upgradeRow.upgradeData;	
	var allowRemoval = true;

	// check minimum constraint
	if (data.group && data.group.minimum) {
		var total = 0;
		data.group.options.each(function(x) {
			total += countUpgrades(x, formationId);
		});
		allowRemoval = total > data.group.minimum;
	}	

	if (allowRemoval) {
		var multiplier = upgradeRow.multiplierSpan;
		// 2 or more?
		if (multiplier) {
			var count = upgradeMultiplier(upgradeRow) - 1;
			if (count == 1) {
				multiplier.remove();
				upgradeRow.multiplierSpan = null;
			}
			else {
				multiplier.update(count + 'x&nbsp;');
			}
			//upgradeRow.childElements()[1].update(count * data.pts);
		}
		// only 1
		else {
			upgradeRow.remove();
		}

		addPoints(-data.pts);
		updateFormationPoints(formationId, -data.pts);
		checkUpgradeConstraints(formationId, data);
		checkOptionalConstraints(formationId);
		checkArmyConstraints();
	}
}

function removeFormation(formationRow, pts) {
	formationRow.remove();
	$$('.' + formationRow.identify()).each(function(upgrade) {
		var upgradePts = countUpgrades(upgrade.upgradeData,formationRow.identify()) * upgrade.upgradeData.pts;
		addPoints(-upgradePts);
		upgrade.remove();
	});
	addPoints(-pts);
	checkFormationConstraints();
	checkArmyConstraints();
}

function updateFormationPoints(formationId, pts) {
	var ptsCell = $(formationId).childElements()[1];
	ptsCell.update( parseInt(ptsCell.innerHTML) + pts );
}

function addUpgrade(event, formationId, upgradeData) {

	var upgrades = $$('.' + formationId);
	var existingUpgrade = upgrades.find( function(x) {return x.upgradeData === upgradeData;} );

	if (!existingUpgrade) {
		var newCell = new Element('td').update(upgradeData.label);
		var clazz = 'interactive orbatUpgrade ' + formationId + (upgradeData.optional ? ' optionalUnit' : '');
		var newRow = new Element('tr', {'class':clazz}).update(
						newCell 
					 ).insert(
						new Element('td', {'class':'points'}).update(' '));//upgradeData.pts));

		newRow.upgradeData = upgradeData;
		
		// insert new row after last upgrade
		if ($$('.' + formationId).size() > 0) {
			// place new optionals after optionals but before other upgrades
			if (upgradeData.optional) {
				var firstUpgrade = $$('.' + formationId).find(function(x) {
					return !x.upgradeData.optional;				
				});
				if (firstUpgrade) {
					firstUpgrade.insert({before:newRow});
				}
				else {
					$$('.' + formationId).last().insert({after:newRow});
				}
			}
			else {
				$$('.' + formationId).last().insert({after:newRow});
			}
		}
		else {
			$(formationId).insert({after:newRow});
		}
		

		// delete event
		newRow.observe('click', removeUpgrade.bind(this, newRow, formationId));	
		// dropdown
		if (upgradeData.optional && upgradeData.group.options.size() > 1) {
			var dropDown = createOptionals(upgradeData.group.options.without(upgradeData), formationId, newRow);			
			newCell.insert(dropDown);
			dropDown.hide();
			newRow.observe('mouseover', function() { dropDown.show(); });
			newRow.observe('mouseout', function() { dropDown.hide(); });
		}
	}
	else {
		// at least 1 existing upgrade of this type
		if (!existingUpgrade.multiplierSpan) {
			// exactly 1 existing upgrade of this type
			var newMultiplier = new Element('span', {'class':'upgradeMultiplier'}).update('1x&nbsp;');
			existingUpgrade.multiplierSpan = newMultiplier;
			existingUpgrade.down().insert(newMultiplier);
		}
		var count = 1 + upgradeMultiplier(existingUpgrade);
		$(existingUpgrade.multiplierSpan).update(count + 'x&nbsp;');
		//existingUpgrade.childElements()[1].update(count * upgradeData.pts);
	}

	// constraints
	updateFormationPoints(formationId, upgradeData.pts);
	addPoints(upgradeData.pts);
	checkOptionalConstraints(formationId);
	checkUpgradeConstraints(formationId);
	checkArmyConstraints();
}

// mozilla border bug when hiding/showing rows
function checkArmyConstraints() {
	var warnings = [];
	// 1/3 points constraint
	var count = 0;	// todo (include upgrade points too)
	$$('.limited').each(function(x) {
		count += x.formationData.pts
		$$('.' + x.identify()).each(function(x) {
			count += x.upgradeData.pts * upgradeMultiplier(x);
		});
	});
	var ratio = listData.limitRatio ? listData.limitRatio : 3.0
	if (count > totalPoints() / ratio) {
		warnings.push('Over 1/'+ratio+' of points is spent on War Engines/Allies!');
	}
	// restricted formations
	if (listData.restriction) {
		var count = $$('.restricted').size();
		var allowed = listData.restriction.limit * $$('.restricting').size();
		if (count > allowed) {
			warnings.push('More than ' + listData.restriction.limit + ' ' + listData.restriction.restricted + ' per ' + listData.restriction.restricting + '!');
		}
	}
	if (listData.restriction2) {
		var count = $$('.restricted2').size();
		var allowed = listData.restriction2.limit * $$('.restricting').size();
		if (count > allowed) {
			warnings.push('More than ' + listData.restriction2.limit + ' ' + listData.restriction2.restricted + ' per ' + listData.restriction2.restricting + '!');
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

// upgrades of a given type for a given formation
function countUpgrades(upgradeData, formationId) {
	var upgradeRow = $$('.' + formationId).find(function(x) {return x.upgradeData === upgradeData;});
	return upgradeMultiplier(upgradeRow);
}

// upgrades of a given type
function upgradeMultiplier(upgradeRow) {
	if (!upgradeRow) {
		return 0;
	}
	else if (upgradeRow.multiplierSpan) {
		return parseInt(upgradeRow.multiplierSpan.innerHTML.replace('x&nbsp;',''));
	}
	else {
		return 1;
	}
}

function checkOptionalConstraints(formationId) {
	var upgradeRows = $$('.' + formationId);
	upgradeRows.each(function(x) {
		if (x.upgradeData.optional && x.upgradeData.group.options.size() > 1) {
			var optionalOptions = x.down().down().down().down().childElements().slice(1); // remove header row
			
			optionalOptions.each(function(option) {
				var constraints = '';
				var upgradeData = option.upgradeData;
				// check upto constraint
				if (upgradeData.upto) {
					var numUpgrades = countUpgrades(upgradeData, formationId);
					if (numUpgrades >= upgradeData.upto) {
						constraints += '[max ' + upgradeData.upto + ']';
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
	});

}

function checkUpgradeConstraints(formationId) {
	if ($(formationId).formationData.upgrades.size() > 0) {
		var upgradeRows = $$('.' + formationId);
		var upgradeOptions = $(formationId + 'upgradeOptions').childElements().slice(1); // remove header row

		upgradeOptions.each(function(option) {
			var constraints = '';
			var upgradeData = option.upgradeData;
			var groupData = option.upgradeData.group;
			// check 'upto' constraint	
			if (upgradeData.upto) {		
				var numUpgrades = countUpgrades(upgradeData, formationId);
				if (numUpgrades >= upgradeData.upto) {
					constraints += '[max ' + upgradeData.upto + ']';
				}
			}		
			// check 'upto' GROUP constraint
			if (groupData && groupData.upto) {
				var group = upgradeRows.findAll(function (x) {return x.upgradeData.group === groupData;});
				var numUpgrades = 0;
				group.each(function(x) {
					numUpgrades += countUpgrades(x.upgradeData, formationId);
				});
				if (numUpgrades >= groupData.upto) {
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
}

function wrapActivatableHandler(element, handler) {
	return handler.wrap(function(proceed, arg1, arg2, arg3, arg4) {
		if (!element.hasClassName('inactive')) {
			proceed(arg1, arg2, arg3, arg4);
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

function addFormation(event, formation, noDefaults) {
	var formationId = 'formation' + formationIdCounter++;
	var dropDown = createUpgrades(flattenUpgrades(formation), formationId);
	var labelCell = new Element('td').update(formation.label).insert( dropDown );
	if (formation.units) {
		labelCell.insert(
			new Element('div', {'class':'units'}).update(formation.units));
	}
	var newRow = new Element('tr', {'class':'orbatFormation interactive', id:formationId}).update(
					labelCell
				 ).insert(
					new Element('td', {'class':'points'}).update(formation.pts) );

	if (formation.restricting) {	// todo: remove the class names and just use the row.formationData?
		newRow.addClassName('restricting');
	}
	else if (formation.restricted) {
		newRow.addClassName('restricted');
	}
	else if (formation.restricted2) {
		newRow.addClassName('restricted2');
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

	if (formation.defaults && !noDefaults) {
		formation.defaults.each(function(x) {
			for (i=0;i<x.count;i++) {
				addUpgrade(null, formationId, x.unit);
			}
		});
	}
	
	return newRow;
}

function resetFormationDivider() {
	$$('.formationDivider').each(function(x) { x.removeClassName('formationDivider'); });
	if ($$('.limited').any()) {
		$$('.limited').first().addClassName('formationDivider');
	}
}

function addOptional(event, formationId, upgradeData, upgradeRow) {	
	addUpgrade(event, formationId, upgradeData);
	removeUpgrade(upgradeRow, formationId);
}

function createOptionals(upgrades, formationId, upgradeRow) {
	var newTable = new Element('table', {id:formationId + 'unitOptions'}).update(
						new Element('tr').update(
							new Element('th', {colspan:2}).update('REPLACE WITH...') ));

	if (upgrades.length < 1) {	
		var listItem = new Element('tr', {'class':'listItem even'}).update(
							new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
		newTable.insert(listItem);		
	};

	upgrades.each(function(x) {
		var points = x.pts - upgradeRow.upgradeData.pts;
		if (points > 0) {
			points = '+' + points;
		}
		var upgradeOption = new Element('tr', {'class':'interactive listItem even'}).update(
								new Element('td').update(x.label)
							).insert(
								new Element('td', {'class':'points'}).update(points) );

		upgradeOption.upgradeData = x;
		newTable.insert(upgradeOption);		
		upgradeOption.observe('click',
				wrapActivatableHandler(upgradeOption, addOptional)
					.bindAsEventListener(this, formationId, x, upgradeRow));
	});
	
	newTable.childElements().eachSlice(2, function(x) {
		x[0].removeClassName('even');
	});

	var dropDown = new Element('div', {'class':'dropDown'}).update(
						new Element('div', {'class':'listDiv'}).update(newTable));
	dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
	return dropDown;
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
							new Element('td', {'class':'points'}).update(x.displayPts ? x.displayPts : x.pts) );

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

