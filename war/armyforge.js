// count instances of element...
Array.prototype.count = function(element) {
	return this.findAll( function(x){ return x == element; } ).length;
}

// removes the first instance of element...
Array.prototype.remove = function(element) {
	this.splice(this.indexOf(element), 1);
}

// is the array empty
Array.prototype.empty = function() {
	return this.length == 0;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ArmyforgeUI = {
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
			ArmyforgeUI.renderForce();
		}
		else if (ArmyList.data.fixedFormations) {
			ArmyList.data.fixedFormations.each(function(x) {
				var newRow = ArmyforgeUI.addFormation(null, x);
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
	renderForce:function() {
		Force.formations.each( ArmyforgeUI.renderFormation );
	},
	renderFormation:function(formation) {

	},
	renderUpgrade:function() {
		
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
		$('importText').update(Force.pickle(ArmyforgeUI.urlData.baseURL, ArmyforgeUI.urlData.list, $('orbatName').innerHTML));
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
		var txt = $('plainTextDiv').update();
		txt.insert($('orbatName').innerHTML + ', ' + $('totalPts').innerHTML + ' POINTS').insert(new Element('br'));
		txt.insert($('orbatListName').innerHTML).insert(new Element('br'));
		txt.insert('==================================================');
		$('orbatBody').childElements().each(function (x) {
			if (x.hasClassName('orbatFormation')) {
				txt.insert(new Element('br'));
				txt.insert(new Element('br'));
				txt.insert(x.formation.type.name.toUpperCase() +' ['+ x.formation.calcPoints() +']');
				if (x.formation.type.units) {
					txt.insert(new Element('br'));
					txt.insert(x.formation.type.units);
				}
				else if (!x.formation.upgrades.empty()) {
					txt.insert(new Element('br'));
				}
			}
			else if (x.hasClassName('orbatUpgrade')) {
				var multiplier = x.formation.count(x.upgradeType);
				var multiplierJoin = ((multiplier < 2) || isNaN(parseInt(x.upgradeType.name[0]))) ? '&nbsp;' : 'x';
				var prefix = (multiplier > 1 ? multiplier + multiplierJoin : '');
				var joiner = txt.innerHTML.endsWith('>') ? '' : ',&nbsp;';
				txt.insert(joiner + prefix + x.upgradeType.name);
			}		
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
								new Element('td', {'class':'points'}).update( x.cost ));

			listItem.formationType = x;
			newTable.insert(listItem);
			 // should this be done after the table is inserted in the DOM?
			listItem.observe('click', 
					ArmyforgeUI.wrapActivatableHandler(listItem, ArmyforgeUI.addFormation)
						.bindAsEventListener(this, x));
		});
	
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		$('armyList').insert(
			 new Element('div', {'class':'listDiv'}).update(newTable) );
	},
	wrapActivatableHandler:function(element, handler) {
		return handler.wrap(function(proceed, arg1, arg2, arg3, arg4, arg5) {
			if (!element.hasClassName('inactive')) {
				proceed(arg1, arg2, arg3, arg4, arg5);
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
	createOptionals:function(formation, upgrades, upgradeRow) {
		var newTable = new Element('table').update(
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
			newTable.insert(upgradeOption);		
			upgradeOption.observe('click',
					ArmyforgeUI.wrapActivatableHandler(upgradeOption, ArmyforgeUI.addOptional)
						.bindAsEventListener(this, formation, x, upgradeRow));
		});
	
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		var dropDown = new Element('div', {'class':'dropDown'}).update(
							new Element('div', {'class':'listDiv'}).update(newTable));
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},
	createUpgrades:function(formation) {
		var newTable = new Element('table').update(
							new Element('tr').update(
								new Element('th', {colspan:2}).update('UPGRADES') ));

		if (formation.type.upgrades.length < 1) {	
			var listItem = new Element('tr', {'class':'listItem even'}).update(
								new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
			newTable.insert(listItem);		
		};

		formation.type.upgrades.each(function(x) {
			var upgradeOption = new Element('tr', {'class':'interactive listItem even upgrade'}).update(
									new Element('td').update(x.name)
								).insert(
									new Element('td', {'class':'points'}).update(x.pts) );

			upgradeOption.upgradeType = x;
			newTable.insert(upgradeOption);		
			upgradeOption.observe('click',
					ArmyforgeUI.wrapActivatableHandler(upgradeOption, ArmyforgeUI.addUpgrade)
						.bindAsEventListener(this, formation, x));
		});
	
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		var dropDown = new Element('div', {'class':'dropDown'}).update(
							new Element('div', {'class':'listDiv'}).update(newTable));
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},
	addFormation:function(event, formationType, noDefaults) {

		var formation = Force.addFormation(formationType);


		var dropDown = ArmyforgeUI.createUpgrades( formation );
		var labelCell = new Element('td').update(formationType.name).insert( dropDown );
		if (formationType.units) {
			labelCell.insert(
				new Element('div', {'class':'units'}).update(formationType.units));
		}
		var newRow = new Element('tr', {'class':'orbatFormation interactive'}).update(
						labelCell
					 ).insert(
						new Element('td', {'class':'points'}).update(formationType.pts) );

		if (formationType.restricting) {	// todo: remove the class names and just use the row.formationType?
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
		newRow.observe('click', ArmyforgeUI.removeFormation.bind(this, formation));		

		newRow.formation = formation;
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.resetFormationDivider();
	
		if (!noDefaults) {
			// mandatory units in groups
			formationType.mandatoryUpgradeConstraints.each( function(x) {
				for (var i=0;i<x.min;i++){
					ArmyforgeUI.addUpgrade(null, formation, x.from[0], true);
				}
			});
		}
//		Force.checkFormationConstraints();
//		Force.checkOptionalConstraints();
//		Force.checkUpgradeConstraints();
//		Force.checkArmyConstraints();
	
		return newRow;
	},
	formationRowFor:function(formation) {
		return $$('.orbatFormation').find( function(x){
			return x.formation==formation;
		});		
	},
	upgradeRowsFor:function(formation) {
		return $$('.orbatUpgrade').findAll( function(x){
			return x.formation==formation;
		});
	},
	upgradeRowFor:function(formation,upgradeType) {
		return $$('.orbatUpgrade').find( function(x){
			return x.formation==formation && x.upgradeType==upgradeType;
		});
	},
	addUpgrade:function(event, formation, upgradeType, ignoreConstraints) {

		formation.upgrades.push( upgradeType );

		var count = formation.count( upgradeType );


		if (count == 1) {
			var newCell = new Element('td').update(upgradeType.name);
			var clazz = 'interactive orbatUpgrade ' + (formation.type.mandatoryConstraint(upgradeType) ? ' mandatory':'');
			var newRow = new Element('tr', {'class':clazz}).update(
							newCell 
						 ).insert(
							new Element('td', {'class':'points'}).update(' '));//upgradeType.pts));

			newRow.upgradeType = upgradeType;
			newRow.formation = formation;
					

			var upgradeRows = ArmyforgeUI.upgradeRowsFor(formation);


			// insert new row after last upgrade
			if (upgradeRows.length > 0) {

				// place new mandatories after mandatories but before other upgrades
				var firstNonMandatoryRow = upgradeRows.find(function(x) {
							return !formation.type.mandatoryConstraint(x.upgradeType);
						});
				if (firstNonMandatoryRow && formation.type.mandatoryConstraint(upgradeType)) {
					firstNonMandatoryRow.insert({before:newRow});
				}
				else {
					upgradeRows.last().insert({after:newRow});
				}
			}
			else {
				ArmyforgeUI.formationRowFor(formation).insert({after:newRow});
			}
		

			// delete event
			newRow.observe('click', ArmyforgeUI.removeUpgrade.bind(this, newRow, formation));	
			// dropdown
			if (formation.type.replaceable(upgradeType)) {
				var dropDown = ArmyforgeUI.createOptionals(formation, formation.type.optionsFor(upgradeType), newRow);
				newCell.insert(dropDown);
				dropDown.hide();
				newRow.observe('mouseover', function() { dropDown.show(); });
				newRow.observe('mouseout', function() { dropDown.hide(); });
			}
		}
		else if (count == 2) {
			var existingUpgrade = ArmyforgeUI.upgradeRowFor(formation,upgradeType);
			var newMultiplier = new Element('span', {'class':'upgradeMultiplier'}).update('2x&nbsp;');
			existingUpgrade.multiplierSpan = newMultiplier;
			existingUpgrade.down().insert(newMultiplier);
		}
		else {
			var existingUpgrade = ArmyforgeUI.upgradeRowFor(formation,upgradeType);
			$(existingUpgrade.multiplierSpan).update(count + 'x&nbsp;');
		}

		// points
		ArmyforgeUI.updateFormationPoints(formation);
		ArmyforgeUI.updatePoints();

		// constraints
		if (!ignoreConstraints) {
//			Force.checkOptionalConstraints();
//			Force.checkUpgradeConstraints();
//			Force.checkArmyConstraints();
		}
	},
	updateFormationPoints:function(formation) {
		var ptsCell = ArmyforgeUI.formationRowFor(formation).childElements()[1];
		ptsCell.update( formation.calcPoints() );
	},
	removeFormation:function(formation) {

		Force.formations.remove( formation );

		ArmyforgeUI.upgradeRowsFor(formation).each( Element.remove );
		ArmyforgeUI.formationRowFor(formation).remove();
		ArmyforgeUI.updatePoints();
//		Force.checkFormationConstraints();
//		Force.checkUpgradeConstraints();
//		Force.checkOptionalConstraints();
//		Force.checkArmyConstraints();
	},
	removeUpgrade:function(upgradeRow, formation) {

		var allowRemoval = true;
		var upgradeType = upgradeRow.upgradeType;

		// check minimum constraint
		var constraint = formation.type.mandatoryConstraint( upgradeType );
		if (constraint) {
			var total = 0;
			constraint.from.each(function(x) {
				total += formation.count(x);
			});
			allowRemoval = constraint.min < total;
		}

		if (allowRemoval) {

			formation.upgrades.remove( upgradeRow.upgradeType );

			var count = formation.count( upgradeRow.upgradeType );
			if (count == 0) {
				upgradeRow.remove();	
			}
			else if (count == 1) {
				upgradeRow.multiplierSpan.remove();
			}
			else {
				upgradeRow.multiplierSpan.update(count + 'x&nbsp;');
			}

			ArmyforgeUI.updatePoints();
			ArmyforgeUI.updateFormationPoints(formation);
//			Force.checkUpgradeConstraints();
//			Force.checkOptionalConstraints();
//			Force.checkArmyConstraints();
		}
	},
	addOptional:function(event, formation, upgradeType, upgradeRow) {	
		ArmyforgeUI.addUpgrade(event, formation, upgradeType, false);
		ArmyforgeUI.removeUpgrade(upgradeRow, formation);
	}
};




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var Force = {
	formations:[], //{id:i, type:t, upgrades:[u1,u2,u2,u2,u3,u4,u4]}
	calcPoints:function() {
		var total = 0;
		this.formations.each( function(x) {
			total += x.calcPoints();
		});
		return total;
	},
	addFormation:function(formationType) {
		var formation = {
								type:formationType,
								upgrades:[],
								count:function(upgradeType) {
									return this.upgrades.count(upgradeType);
								},
								calcPoints:function() {
									var total = this.type.pts;
									this.upgrades.each(function(u) {
										total += u.pts;
									});
									return total;				
								}
							};
		this.formations.push( formation );			
		return formation;
	},
	pickle:function(url,listId,forceName) {
		var out = forceName;
		Force.formations.each( function(x) {
			out += '~' + x.type.id;
			x.upgrades.uniq().each( function(u) {
				out += '~' + u.id + 'x' + x.count(u);
			});
		});	
		return url + '?list=' + listId + '&force=' + encodeURIComponent(out);
	},
	unpickle:function(pickled) {
		try {
			var name = null;
			var currentFormation = null;
			decodeURIComponent(pickled).split('~').each(function(x) {
				if (!name) {
//					$('orbatName').update(x);
					name = x;
				}
				else {
					var id = parseInt(x.split('x')[0]);
					if (id >= 500) {
						currentFormation = Force.addFormation( ArmyList.formationForId(id) );
//						currentFormation = ArmyforgeUI.addFormation(null, null, true).identify();
					}
					else {
						var count = parseInt(x.split('x')[1]);			
						for (var i=0;i<count;i++) {
							currentFormation.upgrades.push( ArmyList.upgradeForId(id) );
//							ArmyforgeUI.addUpgrade(null, currentFormation, ArmyList.upgradeForId(id), currentFormation.formation.type);
						}
					}
				}			
			});
			return name;	
		} catch(err) {
				alert('Sorry, there was an error loading the army.');
		}
	},
	// mozilla border bug when hiding/showing rows
	checkArmyConstraints:function() {
		var warnings = [];
		// 1/3 points constraint
		var count = 0;	// todo (include upgrade points too)
		$$('.limited').each(function(x) {
			count += x.formation.type.pts
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
			count2 += x.formation.type.pts
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
			var formationType = option.formation.type;
			var groupData = option.formationType.group;
			if (formationType.upto) {
				var count = formationRows.findAll(function(x) {return x.formationType === formationType;}).size(); 
				if (count >= formationType.upto) {
					constraints += '[max ' + formationType.upto + ']';
				}
			}		
			// check 'upto' GROUP constraint
			if (groupData && groupData.upto) {
				var group = formationRows.findAll(function (x) {return x.formation.type.group === groupData;});
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
	checkOptionalConstraints:function() {

		var generalChosen = 0 < $$('.orbatUpgrade').filter(function(x) {return x.upgradeType.general;}).size();

		$$('.orbatUpgrade').each(function(x) {
			if (false /*ArmyList.replaceable(x.upgradeType) && x.upgradeType.group && x.upgradeType.group.options.size() > 1*/) {
				var optionalOptions = x.down().down().down().down().childElements().slice(1); // remove header row
			
				optionalOptions.each(function(option) {
					var constraints = '';
					var upgradeType = option.upgradeType;
					// check upto constraint
					if (upgradeType.upto) {
						var numUpgrades = Force.countUpgrades(upgradeType, formation);
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
			var formation = option.formation;
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

