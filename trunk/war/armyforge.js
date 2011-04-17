////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ArmyforgeUI = {
	formationIdCounter:0,
	urlData:{},
	initPage:function() {
		// event listeners...
		$('viewText').on('click', ArmyforgeUI.viewPlainText);
		$('viewTable').on('click', ArmyforgeUI.viewTable);
		$('viewImport').on('click', ArmyforgeUI.viewLink);
		$('orbatTitle').on('click', ArmyforgeUI.toggleNameEditor);
		$('viewJSON').on('click', ArmyforgeUI.viewJSON);

		// parse url parameters...
		ArmyforgeUI.urlData.baseURL = new String(window.location).split('?')[0];
		var paramString = new String(window.location).split('?')[1];
		paramString.split('&').each(function(param) {
			ArmyforgeUI.urlData[param.split('=')[0]] = param.split('=')[1];
		});
		var listFile = ArmyforgeUI.urlData.list + '.json';	
	
		// load the army list...
		new Ajax.Request(listFile, {
			onSuccess: function(response) {
				try {

					var list = JSON.parse( response.responseText );
					ArmyList.init(list);
					ArmyforgeUI.initUI();
				}
				catch(exc) {
					alert(exc);
				}
			}
		});	
	},
	initUI:function() {		

		// render name and options
		$('orbatListName').update( ArmyforgeUI.renderListName());
		ArmyList.data.sublists.each( ArmyforgeUI.createList );

		// render force and mandatory units
		if (ArmyforgeUI.urlData.force) {
			Force.unpickle(ArmyforgeUI.urlData.force);
		}
		else if (ArmyList.data.mandatoryFormations) {
			list.data.mandatoryFormations.each(function(x) {
				var newRow = Force.addFormation(null, x);
				newRow.stopObserving('click');
			});
		}
		// render notes
		if (ArmyList.data.notes) {
			var idx = 1;
			ArmyList.data.notes.each(function(note) {			
				$('notes').insert(new Element('sup').update(idx++));
				$('notes').insert(note);
				$('notes').insert(new Element('br'));
			});
		}

		// show table
		ArmyforgeUI.viewTable();		
	},
	renderListName:function() {
		return ArmyList.data.id + ' (' + ArmyList.data.version + ')';
	},
	toggleNameEditor:function() {
		if ($('orbatName').visible()) {
			$('orbatName').hide();
			var input = new Element('input', {id:'orbatNameEditor', type:'text'});
			$('orbatTitle').insert({top:input});
			input.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
			input.observe('keypress', function(event){
				if(event.keyCode == Event.KEY_RETURN) {
					ArmyforgeUI.toggleNameEditor();
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
	},
	addPoints:function(toAdd) {
		$('totalPts').update( Force.totalPoints() + toAdd );
	},
	padPoints:function(pts) {
		if (pts < 10) {
			return '&nbsp;&nbsp;' + pts;
		}	
		if (pts < 100) {
			return '&nbsp;' + pts;
		}
		else {
			return pts;
		}
	},
	resetViews:function() {
		$$('.viewDiv').each(function(x) {
			x.hide();
		});
		$$('#controls a.selected').each(function(x) {
			x.removeClassName('selected');
		});
	},
	viewTable:function() {
		ArmyforgeUI.resetViews();
		$('orbatDiv').show();
		$('viewTable').addClassName('selected');
	},
	viewLink:function() {		
		ArmyforgeUI.resetViews();
		$('importDiv').show();
		$('viewImport').addClassName('selected');
		$('importText').update(Force.pickle(ArmyforgeUI.urlData.baseURL,ArmyforgeUI.urlData.list));
		$('importText').activate();
	},
	viewImport:function() {
		ArmyforgeUI.resetViews();
		$('importDiv').show();
		$('viewImport').addClassName('selected');
		$('importText').activate();
	},
	viewPlainText:function() {
		ArmyforgeUI.resetViews();
		var txt = $('plainTextDiv').update();//new Element('div', {id:'plainTextDiv'});
		txt.insert($('orbatName').innerHTML + ', ' + $('totalPts').innerHTML + ' POINTS').insert(new Element('br'));
		txt.insert($('orbatListName').innerHTML).insert(new Element('br'));
		txt.insert('==================================================');
		$('orbatBody').childElements().each(function (x) {
			if (x.hasClassName('orbatFormation')) {
				txt.insert(new Element('br'));
				txt.insert(new Element('br'));
	//			alert('&egrave;' + '&egrave;'.toUpperCase());
	//			txt.insert('&egrave;'.toUpperCase());
	//			txt.insert('&Egrave;&EGRAVE;&egrave;');
				txt.insert(x.formationData.name.toUpperCase() +' ['+x.childElements()[1].innerHTML +']');
				txt.insert(new Element('br'));
				if (x.formationData.units) {
					txt.insert(x.formationData.units);
	//				txt.insert(new Element('br'));
				}
			}
			else if (x.hasClassName('orbatUpgrade')) {
				var multiplier = Force.upgradeMultiplier(x);
				var multiplierJoin = ((multiplier < 2) || isNaN(parseInt(x.upgradeData.name[0]))) ? '&nbsp;' : 'x';
				var prefix = (multiplier > 1 ? multiplier + multiplierJoin : '');
				var joiner = txt.innerHTML.endsWith('>') ? '' : ',&nbsp;';
				txt.insert(joiner + prefix + x.upgradeData.name);
			}		
	//		else if (x == $('formationDivider')) {
	//			txt.insert(new Element('br')).insert('-----');
	//		}
		});
		txt.insert(new Element('br')).insert(new Element('br'));
		$('plainTextDiv').show();
		$('viewText').addClassName('selected');
	},
	reset:function() {
		// todo what about (madatory formations?)
		$$('.orbatFormation').each( Element.remove );
		$$('.orbatUpgrade').each( Element.remove );
		$$('.formationOption').each( ArmyforgeUI.activate );
		ArmyforgeUI.addPoints(-Force.totalPoints());
	},
	createList:function(list) {
		var newTable = new Element('table').update(
								new Element('tr').update(
									new Element('th', {colspan:2}).update(list.name) ));
	
		list.options.each(function(x) {
			var listItem = new Element('tr', {'class':'interactive listItem even formationOption'}).update(
								new Element('td').update(x.name)
							).insert(
								new Element('td', {'class':'points'}).update(x.displayPts ? x.displayPts : x.pts) );

			listItem.formationData = x;
			newTable.insert(listItem);
			 // should this be done after the table is inserted in the DOM?
			listItem.observe('click', 
					ArmyforgeUI.wrapActivatableHandler(listItem, Force.addFormation)
						.bindAsEventListener(this, x));
		});
	
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		$('armyList').insert(
			 new Element('div', {'class':'listDiv'}).update(newTable) );
	},
	wrapActivatableHandler:function(element, handler) {
		return handler.wrap(function(proceed, arg1, arg2, arg3, arg4) {
			if (!element.hasClassName('inactive')) {
				proceed(arg1, arg2, arg3, arg4);
			}
		});
	},
	deactivate:function(row, msg) {
		var msgDiv = row.hasClassName('inactive') ? row.firstDescendant().firstDescendant() : 
													row.firstDescendant().insert({top:
														new Element('div', {'class':'constraint'}) }).firstDescendant();
		msgDiv.update(msg);
		row.removeClassName('interactive');
		row.addClassName('inactive');
	},
	activate:function(row) {
		if (!row.hasClassName('interactive')) {
			row.firstDescendant().firstDescendant().remove();
			row.removeClassName('inactive');
			row.addClassName('interactive');
		}
	},
	resetFormationDivider:function() {
		$$('.formationDivider').each(function(x) { x.removeClassName('formationDivider'); });
		if ($$('.limited').any()) {
			$$('.limited').first().addClassName('formationDivider');
		}
	},
	createOptionals:function(upgrades, formationId, upgradeRow) {
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
			var upgradeOption = new Element('tr', {'class':'interactive listItem even option'}).update(
									new Element('td').update(x.name)
								).insert(
									new Element('td', {'class':'points'}).update(points) );

			upgradeOption.upgradeData = x;
			upgradeOption.formationId = formationId;
			newTable.insert(upgradeOption);		
			upgradeOption.observe('click',
					ArmyforgeUI.wrapActivatableHandler(upgradeOption, Force.addOptional)
						.bindAsEventListener(this, formationId, x, upgradeRow));
		});
	
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		var dropDown = new Element('div', {'class':'dropDown'}).update(
							new Element('div', {'class':'listDiv'}).update(newTable));
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},
	createUpgrades:function(upgrades, formationId) {
		var newTable = new Element('table', {id:formationId + 'upgradeOptions'}).update(
							new Element('tr').update(
								new Element('th', {colspan:2}).update('UPGRADES') ));

		if (upgrades.length < 1) {	
			var listItem = new Element('tr', {'class':'listItem even'}).update(
								new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
			newTable.insert(listItem);		
		};

		upgrades.each(function(x) {
			var upgradeOption = new Element('tr', {'class':'interactive listItem even upgrade'}).update(
									new Element('td').update(x.name)
								).insert(
									new Element('td', {'class':'points'}).update(x.pts) );

			upgradeOption.upgradeData = x;
			upgradeOption.formationId = formationId;
			newTable.insert(upgradeOption);		
			upgradeOption.observe('click',
					ArmyforgeUI.wrapActivatableHandler(upgradeOption, Force.addUpgrade)
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
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Force = {
	formations:{},
	totalPoints:function() {
		return parseInt($('totalPts').innerHTML);
	},
	addFormation:function(event, formation, noDefaults) {
		var formationId = 'formation' + ArmyforgeUI.formationIdCounter++;
		var dropDown = ArmyforgeUI.createUpgrades(ArmyList.flattenUpgrades(formation), formationId);
		var labelCell = new Element('td').update(formation.name).insert( dropDown );
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
			newRow.addClassName(formation.limited2 ? 'limited2' : 'unlimited'); // is this class used?
			$('formationDivider').insert({before:newRow});
		}
	
		dropDown.hide();
		newRow.observe('mouseover', function() { dropDown.show(); });
		newRow.observe('mouseout', function() { dropDown.hide(); });
		newRow.observe('click', Force.removeFormation.bind(this, newRow, formation.pts));		

		newRow.formationData = formation;
		ArmyforgeUI.addPoints(formation.pts);
		ArmyforgeUI.resetFormationDivider();
	
		if (!noDefaults) {
			// mandatory units in groups
			formation.upgrades.each(function(x) {
				if (x.options && x.minimum) {
					for (i=0;i<x.minimum;i++) {
						Force.addUpgrade(null, formationId, x.options[0], true); // ignore constraints
					}
				}
			});
			// mandatory units not in groups
			ArmyList.flattenUpgrades(formation).each(function(x) {
				for (i=0;i<x.minimum;i++) {
					addUpgrade(null, formationId, x, true); // ignore constraints
				}
			});
		}
		Force.checkFormationConstraints();
		Force.checkOptionalConstraints();
		Force.checkUpgradeConstraints();
		Force.checkArmyConstraints();
	
		return newRow;
	},
	addUpgrade:function(event, formationId, upgradeData, ignoreConstraints) {

		var upgrades = $$('.' + formationId);
		var existingUpgrade = upgrades.find( function(x) {return x.upgradeData === upgradeData;} );

		if (!existingUpgrade) {
			var newCell = new Element('td').update(upgradeData.name);
			var clazz = 'interactive orbatUpgrade ' + formationId + (ArmyList.mandatoryUpgrade(upgradeData) ? ' mandatory':'');
			var newRow = new Element('tr', {'class':clazz}).update(
							newCell 
						 ).insert(
							new Element('td', {'class':'points'}).update(' '));//upgradeData.pts));

			newRow.formationId = formationId;
			newRow.upgradeData = upgradeData;
		
			// insert new row after last upgrade
			if ($$('.' + formationId).size() > 0) {
				// place new replaceables after replaceables but before other upgrades
				if (ArmyList.replaceable(upgradeData)) {
					var firstUpgrade = $$('.' + formationId).find(function(x) {
						return !ArmyList.replaceable(x.upgradeData);				
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
			newRow.observe('click', Force.removeUpgrade.bind(this, newRow, formationId));	
			// dropdown
			if (ArmyList.replaceable(upgradeData) && upgradeData.group && upgradeData.group.options.size() > 1) {
				var dropDown = ArmyforgeUI.createOptionals(upgradeData.group.options.without(upgradeData), formationId, newRow);			
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
			var count = 1 + Force.upgradeMultiplier(existingUpgrade);
			$(existingUpgrade.multiplierSpan).update(count + 'x&nbsp;');
			//existingUpgrade.childElements()[1].update(count * upgradeData.pts);
		}

		// points
		Force.updateFormationPoints(formationId, upgradeData.pts);
		ArmyforgeUI.addPoints(upgradeData.pts);

		// constraints
		if (!ignoreConstraints) {
			Force.checkOptionalConstraints();
			Force.checkUpgradeConstraints();
			Force.checkArmyConstraints();
		}
	},
	addOptional:function(event, formationId, upgradeData, upgradeRow) {	
		Force.addUpgrade(event, formationId, upgradeData);
		Force.removeUpgrade(upgradeRow, formationId);
	},
	pickle:function(url,listId) {
		var out = $('orbatName').innerHTML
		$('orbatBody').childElements().each(function(x) {
			if (x.hasClassName('orbatFormation')) {
				out += '~' + x.formationData.id
			}
			else if (x.hasClassName('orbatUpgrade')) {
				out += '~' + x.upgradeData.id + 'x' + Force.upgradeMultiplier(x)
			}
		});	
		return url + '?list=' + listId + '&force=' + encodeURIComponent(out)
	},
	unpickle:function(pickled) {
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
						currentFormation = Force.addFormation(null, ArmyList.allFormations[id], true).identify()
					}
					else {
						var count = parseInt(x.split('x')[1])
						for (var i=0;i<count;i++) {
							Force.addUpgrade(null, currentFormation, ArmyList.allUpgrades[id])
						}
					}
				}			
			})	
		} catch(err) {
				alert('Sorry, there was an error loading the army.');
		}
	},
	removeUpgrade:function(upgradeRow, formationId) {
		var data = upgradeRow.upgradeData;	
		var allowRemoval = true;

		// check minimum constraint (individuals)
		if (data.minimum) {
			allowRemoval = data.minimum < Force.countUpgrades(data, formationId);
		}
		// check minimum constraint (individuals)
		else if (data.group && data.group.minimum) {
			var total = 0;
			data.group.options.each(function(x) {
				total += Force.countUpgrades(x, formationId);
			});
			allowRemoval = total > data.group.minimum;
		}	

		if (allowRemoval) {
			var multiplier = upgradeRow.multiplierSpan;
			// 2 or more?
			if (multiplier) {
				var count = Force.upgradeMultiplier(upgradeRow) - 1;
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

			ArmyforgeUI.addPoints(-data.pts);
			Force.updateFormationPoints(formationId, -data.pts);
			Force.checkUpgradeConstraints();
			Force.checkOptionalConstraints();
			Force.checkArmyConstraints();
		}
	},
	removeFormation:function(formationRow, pts) {
		formationRow.remove();
		$$('.' + formationRow.identify()).each(function(upgrade) {
			var upgradePts = Force.countUpgrades(upgrade.upgradeData,formationRow.identify()) * upgrade.upgradeData.pts;
			ArmyforgeUI.addPoints(-upgradePts);
			upgrade.remove();
		});
		ArmyforgeUI.addPoints(-pts);
		Force.checkFormationConstraints();
		Force.checkUpgradeConstraints();
		Force.checkOptionalConstraints();
		Force.checkArmyConstraints();
	},
	updateFormationPoints:function(formationId, pts) {
		var ptsCell = $(formationId).childElements()[1];
		ptsCell.update( parseInt(ptsCell.innerHTML) + pts );
	},
	// mozilla border bug when hiding/showing rows
	checkArmyConstraints:function() {
		var warnings = [];
		// 1/3 points constraint
		var count = 0;	// todo (include upgrade points too)
		$$('.limited').each(function(x) {
			count += x.formationData.pts
			$$('.' + x.identify()).each(function(x) {
				count += x.upgradeData.pts * Force.upgradeMultiplier(x);
			});
		});
		var ratio = ArmyList.data.limitRatio ? ArmyList.data.limitRatio : 3.0
		if (count > Force.totalPoints() / ratio) {
			var label = ArmyList.data.limitLabel ? ArmyList.data.limitLabel : 'War Engines/Allies';
			warnings.push('Over 1/'+ratio+' of points is spent on '+label+'!');
		}
		// 1/3 points constraint 2
		var count2 = 0;	// todo (include upgrade points too)
		$$('.limited2').each(function(x) {
			count2 += x.formationData.pts
			$$('.' + x.identify()).each(function(x) {
				count2 += x.upgradeData.pts * Force.upgradeMultiplier(x);
			});
		});
		if (count2 > Force.totalPoints() / 3.0) {
			warnings.push('Over 1/3 of points is spent on '+ArmyList.data.limitLabel2+'!');
		}
		// restricted formations
		if (ArmyList.data.restriction) {
			var count = $$('.restricted').size();
			var allowed = ArmyList.data.restriction.limit * $$('.restricting').size();
			if (count > allowed) {
				if (ArmyList.data.restriction.limit >= 1) {
					warnings.push('More than ' + ArmyList.data.restriction.limit + ' ' + ArmyList.data.restriction.restricted + ' per ' + ArmyList.data.restriction.restricting + '!');
				}
				else {
					warnings.push('More than 1 ' + ArmyList.data.restriction.restricted + ' per ' + 1/ArmyList.data.restriction.limit +' '+ ArmyList.data.restriction.restricting + '!');
				}
			}
		}
		if (ArmyList.data.restriction2) {
			var count = $$('.restricted2').size();
			var allowed = ArmyList.data.restriction2.limit * $$('.restricting').size();
			if (count > allowed) {
				warnings.push('More than ' + ArmyList.data.restriction2.limit + ' ' + ArmyList.data.restriction2.restricted + ' per ' + ArmyList.data.restriction2.restricting + '!');
			}
		}

		$('warnings').update();
		if (warnings.size() > 0) {	
			warnings.each(function(x) {
				$('warnings').insert('WARNING: ' + x + '').insert(new Element('br'));	
			});
		}
	},
	checkFormationConstraints:function() {
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
					constraints += ' [max ' + groupData.upto + ' ' + groupData.name + ']';
				}
			}
			// update UI
			if (constraints == '') {
				ArmyforgeUI.activate(option);
			}
			else {
				ArmyforgeUI.deactivate(option, constraints);
			}
		});
	},
	// upgrades of a given type for a given formation
	countUpgrades:function(upgradeData, formationId) {
		var upgradeRow = $$('.' + formationId).find(function(x) {return x.upgradeData === upgradeData;});
		return Force.upgradeMultiplier(upgradeRow);
	},
	// upgrades of a given type
	upgradeMultiplier:function(upgradeRow) {
		if (!upgradeRow) {
			return 0;
		}
		else if (upgradeRow.multiplierSpan) {
			return parseInt(upgradeRow.multiplierSpan.innerHTML.replace('x&nbsp;',''));
		}
		else {
			return 1;
		}
	},
	checkOptionalConstraints:function() {

		var generalChosen = 0 < $$('.orbatUpgrade').filter(function(x) {return x.upgradeData.general;}).size();

		$$('.orbatUpgrade').each(function(x) {
			if (ArmyList.replaceable(x.upgradeData) && x.upgradeData.group && x.upgradeData.group.options.size() > 1) {
				var optionalOptions = x.down().down().down().down().childElements().slice(1); // remove header row
			
				optionalOptions.each(function(option) {
					var constraints = '';
					var upgradeData = option.upgradeData;
					// check upto constraint
					if (upgradeData.upto) {
						var numUpgrades = Force.countUpgrades(upgradeData, x.formationId);
						if (numUpgrades >= upgradeData.upto) {
							constraints += '[max ' + upgradeData.upto + ']';
						}
					}
					// check perArmy constraint
					if (option.upgradeData.general && generalChosen) {
						constraints += ' [1 per army]';	
					}					
					// update UI
					if (constraints == '') {
						ArmyforgeUI.activate(option);
					}
					else {
						ArmyforgeUI.deactivate(option, constraints);
					}
				});
			}
		});

	},
	checkUpgradeConstraints:function() {

		var generalChosen = 0 < $$('.orbatUpgrade').filter(function(x) {return x.upgradeData.general;}).size();

		$$('.upgrade').each(function(option) {
			var formationId = option.formationId;
			var upgradeRows = $$('.' + formationId);
			var upgradeOptions = $(formationId + 'upgradeOptions').childElements().slice(1); // remove header row			
			var constraints = '';
			var upgradeData = option.upgradeData;
			var groupData = option.upgradeData.group;
			// check 'upto' constraint	
			if (upgradeData.upto) {		
				var numUpgrades = Force.countUpgrades(upgradeData, formationId);
				if (numUpgrades >= upgradeData.upto) {
					constraints += '[max ' + upgradeData.upto + ']';
				}
			}
			// check perArmy constraint
			if (option.upgradeData.general && generalChosen) {
				constraints += ' [1 per army]';	
			}		
			// check 'upto' GROUP constraint
			if (groupData && groupData.upto) {
				var group = upgradeRows.findAll(function (x) {return x.upgradeData.group === groupData;});
				var numUpgrades = 0;
				group.each(function(x) {
					numUpgrades += Force.countUpgrades(x.upgradeData, formationId);
				});
				if (numUpgrades >= groupData.upto) {
					constraints += ' [max ' + groupData.upto + ' ' + groupData.name + ']';
				}
			}
			// update UI
			if (constraints == '') {
				ArmyforgeUI.activate(option);
			}
			else {
				ArmyforgeUI.deactivate(option, constraints);
			}
		});
	}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ArmyList = {
	data:{},
	allUpgrades:[],
	allFormations:[],
	init:function(input) {		

		this.data = input;
	
		// create a map id->upgrade
		input.upgrades.each( function(upgrade) {
			ArmyList.allUpgrades[upgrade.id] = upgrade;
			if (upgrade.options) {
				upgrade.options.each( function(option){
					ArmyList.allUpgrades[option.id] = option;
				});
			}
		});
		

		ArmyList.flattenFormations().each( function(formation) {
			// create a map id->formation
			ArmyList.allFormations[formation.id] = formation;
	
			// replace upgrade ids with upgrade objects
			formation.upgrades = formation.upgrades.map(function(id) {
				return ArmyList.allUpgrades[id];
			 });

			// initalise group<->option circular reference
			formation.upgrades.each(function(grp) {
				if (grp.options) {
					grp.options.each(function(opt) {
						opt.group = grp;
					});
				}
			});

			// replace group ids with group objects
			if (formation.group) {
				formation.group = ArmyList.groupForId(formation.group);
			}
		});
	},
	groupForId:function(id) {
		ArmyList.data.groups.find( function(group) {
			return group.id == id; 
		});
	},
	flattenFormations:function() {
		var all = ArmyList.data.sublists.map( function(x){ return x.options; } );
		if (ArmyList.data.mandatoryFormations) {
	      all.concat(ArmyList.data.mandatoryFormations);
		}
		return all.flatten();
	},
	flattenUpgrades:function(formation, includeFixedNumberOptionals) {
		var upgrades = [];
		formation.upgrades.each(function(x) {
			if (x.options) {
				if (includeFixedNumberOptionals || x.minimum != x.upto) {
					upgrades = upgrades.concat(x.options);
				}
			}
			else {
				upgrades.push(x);
			}
		});
		return upgrades;
	},
	replaceable:function(upgrade) {
		return (upgrade.group && upgrade.group.minimum);
	},
	mandatoryUpgrade:function(upgrade) {
		return (upgrade.group && upgrade.group.minimum) || upgrade.minimum;
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.on('dom:loaded', ArmyforgeUI.initPage );

/*
function viewJSON() {
	var list = 
	{
		id:$('orbatName').innerHTML,
		formations:
			$$('.orbatFormation').map(function(x)
			{
				var units = x.formationData.units.split('<br>');
				var upgrades = $$('.'+x.id).map(function(upgrade){ return upgrade.upgradeData.name.split('<br>') }).flatten();
//				var extraUnits = upgrades.map(function(upgrade){
//					if (upgrade[0] == '(') {
//						return []
//					}
//					else if (upgrade[0] <= '9') {
//						var extras = [];
//						alert( parseInt(upgrade[0]) );
//						for (var i = 0; i < parseInt(upgrade[0]); i++) {
//							extras = extras.concat( upgrade.substr(2) );
//						}
//						return extras
//					} else {
//						return upgrade
//					}
//				}).flatten();		
				return {
					id:x.id,
					type:x.formationData.name,
					formations:units.concat( upgrades.filter(function(x){return x[0]!='('}) ),
					upgrades:upgrades.filter(function(x){return x[0]=='('})
				};
			})
	};
	alert(Object.toJSON(list));
}*/

/*
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
					if (line != ChooserUI.renderListName(ArmyList)) {
						alert('List name does not match!\nExpected: ' + ChooserUI.renderListName(ArmyList) + '\nFound: ' + line);
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
						return x.upgradeData.name == label;
					}).upgradeData;
					for (var i=0; i<count; i++) {
						addUpgrade(null, currentFormation, upgradeData);
					}
				}
				else {
					var label = line.sub( /[0-9 ]+/, '');
					//alert(label + ':' + line);
					var formationData = ArmyList.flattenFormations().find(function(x) {
						return label == x.name;
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

*/

/*
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
*/
