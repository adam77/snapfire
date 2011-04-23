
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
				var list = JSON.parse( response.responseText );
				ArmyList.init(list);
				ArmyforgeUI.initUI();
			},
			onException: function(req, exc) {				
				alert(exc.fileName +"...\n\n"+ exc.lineNumber +": "+ exc); // FF only
			}
		});	
	},
	initUI:function() {		

		// render name and options
		$('orbatListName').update( ArmyforgeUI.renderListName());
		ArmyList.data.sections.each( ArmyforgeUI.createSection );

		// render force and mandatory units
		if (ArmyforgeUI.urlData.force) {
			Force.unpickle(ArmyforgeUI.urlData.force);
		}
		else if (ArmyList.data.fixedFormations) {
			ArmyList.data.fixedFormations.each(function(x) {
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
	updatePoints:function() {
		$('totalPts').update( Force.calcPoints() );
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
				var multiplierJoin = ((multiplier < 2) || isNaN(parseInt(x.upgradeType.name[0]))) ? '&nbsp;' : 'x';
				var prefix = (multiplier > 1 ? multiplier + multiplierJoin : '');
				var joiner = txt.innerHTML.endsWith('>') ? '' : ',&nbsp;';
				txt.insert(joiner + prefix + x.upgradeType.name);
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
		ArmyforgeUI.updatePoints();
	},
	createSection:function(list) {
		var newTable = new Element('table').update(
								new Element('tr').update(
									new Element('th', {colspan:2}).update(list.name) ));
	
		list.formations.each(function(x) {
			var listItem = new Element('tr', {'class':'interactive listItem even formationOption'}).update(
								new Element('td').update(x.name)
							).insert(
								new Element('td', {'class':'points'}).update( ArmyList.cost(x) ));

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
	createOptionals:function(formationType, upgrades, formationId, upgradeRow) {
		var newTable = new Element('table', {id:formationId + 'unitOptions'}).update(
							new Element('tr').update(
								new Element('th', {colspan:2}).update('REPLACE WITH...') ));

		if (upgrades.length < 1) {	
			var listItem = new Element('tr', {'class':'listItem even'}).update(
								new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
			newTable.insert(listItem);		
		};

		upgrades.each(function(x) {
			var points = x.pts - upgradeRow.upgradeType.pts;
			if (points > 0) {
				points = '+' + points;
			}
			var upgradeOption = new Element('tr', {'class':'interactive listItem even option'}).update(
									new Element('td').update(x.name)
								).insert(
									new Element('td', {'class':'points'}).update(points) );

			upgradeOption.upgradeType = x;
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
	createUpgrades:function(upgrades, formationId, formationType) {
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

			upgradeOption.upgradeType = x;
			upgradeOption.formationId = formationId;
			newTable.insert(upgradeOption);		
			upgradeOption.observe('click',
					ArmyforgeUI.wrapActivatableHandler(upgradeOption, Force.addUpgrade)
						.bindAsEventListener(this, formationId, x, formationType));
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var Force = {
	formations:[], //{id:i, type:t, upgrades:[u1,u2]}
	formationForId:function(id) {
		return Force.formations.find( function(x){return x.id == id;} );
	},
	calcPoints:function() {
		var total = 0;
		this.formations.each( function(x) {
			total += Forec.calcPointsFor(x);
		});
		return total;
	},
	calcPointsFor:function(formation) {
		var total = formation.type.pts;
		formation.upgrades.each(function(u) {
			total += u.pts;
		});
		return total;		
	},
	addFormation:function(event, formationType, noDefaults) {

		var formationId = 'formation' + ArmyforgeUI.formationIdCounter++;

		Force.formations.push( {id:formationId, type:formationType, upgrades:[]} );


		var dropDown = ArmyforgeUI.createUpgrades( formationType.upgrades, formationId, formationType);		
		var labelCell = new Element('td').update(formationType.name).insert( dropDown );
		if (formationType.units) {
			labelCell.insert(
				new Element('div', {'class':'units'}).update(formationType.units));
		}
		var newRow = new Element('tr', {'class':'orbatFormation interactive', id:formationId}).update(
						labelCell
					 ).insert(
						new Element('td', {'class':'points'}).update(formationType.pts) );

		if (formationType.restricting) {	// todo: remove the class names and just use the row.formationData?
			newRow.addClassName('restricting');
		}
		else if (formationType.restricted) {
			newRow.addClassName('restricted');
		}
		else if (formationType.restricted2) {
			newRow.addClassName('restricted2');
		}

		if (formationType.limited) {
			newRow.addClassName('limited');
			$('orbatBody').insert( newRow );
		}
		else {
			newRow.addClassName(formationType.limited2 ? 'limited2' : 'unlimited'); // is this class used?
			$('formationDivider').insert({before:newRow});
		}
	
		dropDown.hide();
		newRow.observe('mouseover', function() { dropDown.show(); });
		newRow.observe('mouseout', function() { dropDown.hide(); });
		newRow.observe('click', Force.removeFormation.bind(this, newRow, formationType.pts));		

		newRow.formationData = formationType;
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.resetFormationDivider();
	
		if (!noDefaults) {
			// mandatory units in groups
			ArmyList.mandatoryUpgradesFor(formationType).each( function(x) {
				for (var i=0;i<x.min;i++){
					Force.addUpgrade(null, formationId, x.from[0], true, formationType);
				}
			});
		}
		Force.checkFormationConstraints();
		Force.checkOptionalConstraints();
		Force.checkUpgradeConstraints();
		Force.checkArmyConstraints();
	
		return newRow;
	},
	addUpgrade:function(event, formationId, upgradeType, ignoreConstraints, formationType) {

		Force.formationForId(formationId).upgrades.push(upgradeType);

		var upgrades = $$('.' + formationId);
		var existingUpgrade = upgrades.find( function(x) {return x.upgradeType === upgradeType;} );

		if (!existingUpgrade) {
			var newCell = new Element('td').update(upgradeType.name);
			var clazz = 'interactive orbatUpgrade ' + formationId + (ArmyList.mandatoryUpgrade(formationType,upgradeType) ? ' mandatory':'');
			var newRow = new Element('tr', {'class':clazz}).update(
							newCell 
						 ).insert(
							new Element('td', {'class':'points'}).update(' '));//upgradeType.pts));

			newRow.formationId = formationId;
			newRow.upgradeType = upgradeType;
		
			// insert new row after last upgrade
			if ($$('.' + formationId).size() > 0) {
				// place new replaceables after replaceables but before other upgrades
				if (ArmyList.replaceable(upgradeType,formationType)) {
					var firstUpgrade = $$('.' + formationId).find(function(x) {
						return !ArmyList.replaceable(x.upgradeType,formationType);				
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
			if (ArmyList.replaceable(upgradeType,formationType)) {
				var dropDown = ArmyforgeUI.createOptionals(formationType, ArmyList.upgradeOptions(upgradeType,formationType), formationId, newRow);
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
			//existingUpgrade.childElements()[1].update(count * upgradeType.pts);
		}

		// points
		Force.updateFormationPoints(formationId, upgradeType.pts);
		ArmyforgeUI.updatePoints();

		// constraints
		if (!ignoreConstraints) {
			Force.checkOptionalConstraints();
			Force.checkUpgradeConstraints();
			Force.checkArmyConstraints();
		}
	},
	addOptional:function(event, formationId, upgradeType, upgradeRow, formationType) {	
		Force.addUpgrade(event, formationId, upgradeType, formationType);
		Force.removeUpgrade(upgradeRow, formationId);
	},
	pickle:function(url,listId) {
		var out = $('orbatName').innerHTML
		$('orbatBody').childElements().each(function(x) {
			if (x.hasClassName('orbatFormation')) {
				out += '~' + x.formationData.id
			}
			else if (x.hasClassName('orbatUpgrade')) {
				out += '~' + x.upgradeType.id + 'x' + Force.upgradeMultiplier(x)
			}
		});	
		return url + '?list=' + listId + '&force=' + encodeURIComponent(out)
	},
	unpickle:function(pickled) {
		try {
			var doneName = false;
			var currentFormation = null;
			decodeURIComponent(pickled).split('~').each(function(x) {
				if (!doneName) {
					$('orbatName').update(x);
					doneName = true;
				}
				else {
					var id = parseInt(x.split('x')[0]);
					if (id >= 500) {
						currentFormation = Force.addFormation(null, ArmyList.formationForId(id), true).identify();
					}
					else {
						var count = parseInt(x.split('x')[1]);
						for (var i=0;i<count;i++) {
							Force.addUpgrade(null, currentFormation, ArmyList.upgradeForId(id), currentFormation.formationData);
						}
					}
				}			
			})	
		} catch(err) {
				alert('Sorry, there was an error loading the army.');
		}
	},
	removeUpgrade:function(upgradeRow, formationId) {
		var allowRemoval = true;
		var formationType = Force.formationForId(formationId).type;
		var upgradeType = upgradeRow.upgradeType;

		// check minimum constraint
		var constraint = formationType.mandatoryConstraint( upgradeType );
		if (constraint) {
			var total = 0;
			constraint.from.each(function(x) {
				total += Force.countUpgrades(x, formationId);
			});
			allowRemoval = constraint.min < total;
		}

		if (allowRemoval) {
			var f = Force.formationForId(formationId);			
			f.upgrades.splice( f.upgrades.indexOf(upgradeRow.upgradeType), 1);

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

			ArmyforgeUI.updatePoints();
			Force.updateFormationPoints(formationId, -upgradeType.pts);
			Force.checkUpgradeConstraints();
			Force.checkOptionalConstraints();
			Force.checkArmyConstraints();
		}
	},
	removeFormation:function(formationRow, pts) {
		Force.formations = Force.formations.reject(function(x) {						
			return x.id == formationRow.identify();
		});

		formationRow.remove();
		$$('.' + formationRow.identify()).each(function(upgrade) {
			var upgradePts = Force.countUpgrades(upgrade.upgradeType,formationRow.identify()) * upgrade.upgradeType.pts;
			ArmyforgeUI.updatePoints();
			upgrade.remove();
		});
		ArmyforgeUI.updatePoints();
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
				count += x.upgradeType.pts * Force.upgradeMultiplier(x);
			});
		});
		var ratio = ArmyList.data.limitRatio ? ArmyList.data.limitRatio : 3.0
		if (count > Force.calcPoints() / ratio) {
			var label = ArmyList.data.limitLabel ? ArmyList.data.limitLabel : 'War Engines/Allies';
			warnings.push('Over 1/'+ratio+' of points is spent on '+label+'!');
		}
		// 1/3 points constraint 2
		var count2 = 0;	// todo (include upgrade points too)
		$$('.limited2').each(function(x) {
			count2 += x.formationData.pts
			$$('.' + x.identify()).each(function(x) {
				count2 += x.upgradeType.pts * Force.upgradeMultiplier(x);
			});
		});
		if (count2 > Force.calcPoints() / 3.0) {
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
	countUpgrades:function(upgradeType, formationId) {
		if (Force.formationForId(formationId)) {
			return Force.formationForId(formationId).upgrades.filter( function(x){ return x == upgradeType; } ).length;
		}
		else {
			return 0;
		}

//		var upgradeRow = $$('.' + formationId).find(function(x) {return x.upgradeType === upgradeType;});
//		return Force.upgradeMultiplier(upgradeRow);
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

		var generalChosen = 0 < $$('.orbatUpgrade').filter(function(x) {return x.upgradeType.general;}).size();

		$$('.orbatUpgrade').each(function(x) {
			if (ArmyList.replaceable(x.upgradeType) && x.upgradeType.group && x.upgradeType.group.options.size() > 1) {
				var optionalOptions = x.down().down().down().down().childElements().slice(1); // remove header row
			
				optionalOptions.each(function(option) {
					var constraints = '';
					var upgradeType = option.upgradeType;
					// check upto constraint
					if (upgradeType.upto) {
						var numUpgrades = Force.countUpgrades(upgradeType, x.formationId);
						if (numUpgrades >= upgradeType.upto) {
							constraints += '[max ' + upgradeType.upto + ']';
						}
					}
					// check perArmy constraint
					if (option.upgradeType.general && generalChosen) {
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

		var generalChosen = 0 < $$('.orbatUpgrade').filter(function(x) {return x.upgradeType.general;}).size();

		$$('.upgrade').each(function(option) {
			var formationId = option.formationId;
			var upgradeRows = $$('.' + formationId);
			var upgradeOptions = $(formationId + 'upgradeOptions').childElements().slice(1); // remove header row			
			var constraints = '';
			var upgradeType = option.upgradeType;
			var groupData = option.upgradeType.group;
			// check 'upto' constraint	
			if (upgradeType.upto) {		
				var numUpgrades = Force.countUpgrades(upgradeType, formationId);
				if (numUpgrades >= upgradeType.upto) {
					constraints += '[max ' + upgradeType.upto + ']';
				}
			}
			// check perArmy constraint
			if (option.upgradeType.general && generalChosen) {
				constraints += ' [1 per army]';	
			}		
			// check 'upto' GROUP constraint
			if (groupData && groupData.upto) {
				var group = upgradeRows.findAll(function (x) {return x.upgradeType.group === groupData;});
				var numUpgrades = 0;
				group.each(function(x) {
					numUpgrades += Force.countUpgrades(x.upgradeType, formationId);
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.on('dom:loaded', ArmyforgeUI.initPage );

