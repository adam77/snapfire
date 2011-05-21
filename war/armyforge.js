// count instances of element...
Array.prototype.count = function(element) {
	return this.findAll( function(x){ return x == element; } ).length;
}

// count instances of elements...
Array.prototype.countAll = function(elements) {
	return this.findAll( function(x){ return elements.member(x); } ).length;
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
	activate:function(row) {
		if (!row.hasClassName('interactive')) {
			row.firstDescendant().firstDescendant().remove();
			row.removeClassName('inactive');
			row.addClassName('interactive');
		}
	},

	addFormation:function(formationType, noDefaults) {
		//alert('add formation');
		var formation = Force.addFormation(formationType);
		ArmyforgeUI.renderFormation( formation );
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.resetFormationDivider();
	},

	addUpgrade:function(formation, upgradeType) {
		formation.upgrades.push( upgradeType );
		ArmyforgeUI.updateUpgrade(formation, upgradeType);
	},

	createSwapPopup:function(formation, upgrades, upgradeType) {
		var newTable = new Element('table').update(
								new Element('tr').update(
									new Element('th', {colspan:2}).update('REPLACE WITH...') ));

		if (upgrades.length < 1) {	
			var listItem = new Element('tr', {'class':'listItem even'}).update(
								new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
			newTable.insert(listItem);		
		};
		upgrades.each(function(x) {
			var points = x.pts - upgradeType.pts;
			if (points > 0) {
				points = '+' + points;
			}
			var upgradeOption = new Element('tr', {'class':'interactive listItem even option'}).update(
									new Element('td').update(x.name)
								).insert(
									new Element('td', {'class':'points'}).update(points) );

			newTable.insert(upgradeOption);		
			upgradeOption.observe('click',
					ArmyforgeUI.wrapActivatableHandler(upgradeOption, ArmyforgeUI.swapUpgrade)
						.bindAsEventListener(this, formation, x, upgradeType));
		});
	
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		var dropDown = new Element('div', {'class':'dropDown'}).update(
							new Element('div', {'class':'listDiv'}).update(newTable));
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
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

	createUpgradesPopup:function(formation) {
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

	deactivate:function(row, msg) {
		var msgDiv = row.hasClassName('inactive') ? row.firstDescendant().firstDescendant() : 
													row.firstDescendant().insert({top:
														new Element('div', {'class':'constraint'}) }).firstDescendant();
		msgDiv.update(msg);
		row.removeClassName('interactive');
		row.addClassName('inactive');
	},

	formationRowFor:function(formation) {
		return $('formation_'+formation.id);
	},

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
		$('orbatListName').update( ArmyList.data.id + ' (' + ArmyList.data.version + ')' );
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

	removeFormation:function(formation) {
		Force.formations.remove( formation );
		ArmyforgeUI.upgradeRowsFor(formation).each( Element.remove );
		ArmyforgeUI.formationRowFor(formation).remove();
		ArmyforgeUI.updatePoints();
	},

	removeUpgrade:function(upgradeType, formation) {
		if (formation.canRemove(upgradeType)) {
			formation.upgrades.remove( upgradeType );
			ArmyforgeUI.updateUpgrade(formation, upgradeType);
		}
	},

	renderForce:function() {		
		$('orbatName').update( Force.name );
		Force.formations.each( ArmyforgeUI.renderFormation );
		ArmyforgeUI.updatePoints();
	},

	renderFormation:function(formation) {

		//alert('renderFormation');

		var dropDown = ArmyforgeUI.createUpgradesPopup( formation );
		var labelCell = new Element('td').update(formation.type.name).insert( dropDown );
		if (formation.type.units) {
			labelCell.insert(
				new Element('div', {'class':'units'}).update(formation.type.units));
		}
		var newRow = new Element('tr', {'id':'formation_'+formation.id, 'class':'orbatFormation interactive'}).update(
						labelCell
					 ).insert(
						new Element('td', {'id':'formationPoints_'+formation.id, 'class':'points'}).update(formation.calcPoints()) );

		if (formation.type.limited) {
			newRow.addClassName('limited');
			$('orbatBody').insert( newRow );
		}
		else {
			newRow.addClassName(formation.type.limited2 ? 'limited2' : 'unlimited'); // is this class used?
			$('formationDivider').insert({before:newRow});
		}
	
		dropDown.hide();
		newRow.observe('mouseover', function() { dropDown.show(); });
		newRow.observe('mouseout', function() { dropDown.hide(); });
		newRow.observe('click', ArmyforgeUI.removeFormation.bind(this, formation));		

		formation.upgrades.uniq().each( function(x) {
			ArmyforgeUI.renderUpgrade( formation,x );
		});

	},

	renderUpgrade:function(formation, upgradeType) {

		var id = '_' + formation.id + '_' + upgradeType.id;
		var count = formation.count( upgradeType );
		var newCell = new Element('td').update(upgradeType.name);
		var clazz = 'upgrade_' + formation.id + ' interactive orbatUpgrade ' + (formation.type.mandatoryConstraint(upgradeType) ? ' mandatory':'');
		var newRow = new Element('tr', {'id':'upgrade'+id, 'class':clazz}).update(
						newCell 
					 ).insert(
						new Element('td', {'class':'points'}).update(' '));//upgradeType.pts));

		var upgradeRows = ArmyforgeUI.upgradeRowsFor(formation);

		// insert new row after last upgrade
		if (upgradeRows.length > 0) {

			// place new mandatories after mandatories but before other upgrades
			var firstNonMandatoryRow = upgradeRows.find(function(x) {
						return !x.hasClassName('mandatory');
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
		newRow.observe('click', ArmyforgeUI.removeUpgrade.bind(this, upgradeType, formation));	
		// dropdown
		if (formation.type.replaceable(upgradeType)) {
			var dropDown = ArmyforgeUI.createSwapPopup(formation, formation.type.optionsFor(upgradeType), upgradeType);
			newCell.insert(dropDown);
			dropDown.hide();
			newRow.observe('mouseover', function() { dropDown.show(); });
			newRow.observe('mouseout', function() { dropDown.hide(); });
		}

		// multiplier
		var multiplier = new Element('span', {'id':'upgradeMultiplier' + id, 'class':'upgradeMultiplier'}).update(count + 'x&nbsp;');
		newRow.down().insert(multiplier);
		
		if (count < 2) {
			multiplier.hide();
		}
	},

	reset:function() {
		// todo what about (madatory formations?)
		$$('.orbatFormation').each( Element.remove );
		$$('.orbatUpgrade').each( Element.remove );
		$$('.formationOption').each( ArmyforgeUI.activate );
		ArmyforgeUI.updatePoints();
	},

	resetFormationDivider:function() {
		$$('.formationDivider').each(function(x) { x.removeClassName('formationDivider'); });
		if ($$('.limited').any()) {
			$$('.limited').first().addClassName('formationDivider');
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

	swapUpgrade:function(formation, upgradeType, upgradeType2) {	
		ArmyforgeUI.addUpgrade(formation, upgradeType);
		ArmyforgeUI.removeUpgrade(upgradeType2, formation);
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

	updateFormationPoints:function(formation) {
		$('formationPoints_'+formation.id).update( formation.calcPoints() );
	},

	updatePoints:function() {
		$('totalPts').update( Force.calcPoints() );
	},

	updateUpgrade:function(formation,upgradeType) {
		//alert('updateUpgrade');

		var id = '_'+formation.id+ '_' +upgradeType.id;
		var count = formation.count(upgradeType);
		var upgradeRow = $('upgrade' + id);
		var multiplier = $('upgradeMultiplier' + id);

		if (upgradeRow && count==0) {
			upgradeRow.remove();
		}
		else if (upgradeRow && count == 1) {
			multiplier.hide();
		}
		else if (upgradeRow && count > 1) {	
			multiplier.update( count + 'x&nbsp;');
			multiplier.show();
		}
		else if (!upgradeRow && count > 0) {
			ArmyforgeUI.renderUpgrade(formation,upgradeType);
		}

		ArmyforgeUI.updateFormationPoints(formation);
		ArmyforgeUI.updatePoints();
	},

	upgradeRowsFor:function(formation) {
		return $$('.upgrade_' + formation.id);
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
		$('importText').update(
				ArmyforgeUI.urlData.baseURL + '?list=' + ArmyforgeUI.urlData.list + '&force=' + encodeURIComponent(Force.pickle())
			);
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
		$('plainTextDiv').update( Force.plainText().replace(/\n/g,'<br/>') );
		$('plainTextDiv').show();
		$('viewText').addClassName('selected');
	},

	wrapActivatableHandler:function(element, handler) {
		return handler.wrap(function(proceed, event, arg1, arg2, arg3, arg4) {
			if (!element.hasClassName('inactive')) {
				proceed(arg1, arg2, arg3, arg4);
			}
		});
	}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.on('dom:loaded', ArmyforgeUI.initPage );

