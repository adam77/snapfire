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
	return this;
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
	activate:function(id) {
		var msgDiv = $('menuItemMsg' + id);
		msgDiv.hide();	
		var row = $('menuItem' + id);
		row.removeClassName('inactive');
		row.addClassName('interactive');
	},

	addFormation:function(formationType, noDefaults) {
		//alert('add formation');
		var formation = Force.addFormation(formationType);
		// todo remove delete listener...
		ArmyforgeUI.renderFormation( formation );
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.checkUpgradeMenuItems();
		ArmyforgeUI.checkFormationMenuItems();
		ArmyforgeUI.checkWarnings();		
	},

	addUpgrade:function(formation, upgradeType) {
		formation.upgrades.push( upgradeType );
		ArmyforgeUI.updateUpgrade(formation, upgradeType);
		ArmyforgeUI.checkUpgradeMenuItems();		
		ArmyforgeUI.checkWarnings();		
	},

	checkWarnings:function() {
		$('warnings').update();
		Force.getWarnings().each(function(x) {
			$('warnings').insert('WARNING: ' + x + '').insert(new Element('br'));
		});
	},

	checkFormationMenuItems:function() {
		ArmyList.allNonFixedFormations.each(function(f) {
			var msgs = Force.cannotAdd(f);
			var id = '_' + f.id;
			if (msgs.empty()) {
				ArmyforgeUI.activate(id);
			}
			else {
				ArmyforgeUI.deactivate(id,msgs);
			}
		});
	},

	checkUpgradeMenuItems:function() {
		Force.formations.each(function(f) {
			// formation upgrades
			f.type.upgrades.each(function(u) {
				var id = '_' + f.id + '_' + u.id;
				var msgs = f.cannotAdd(u);
				if (msgs.empty()) {
					ArmyforgeUI.activate(id);
				}
				else {
					ArmyforgeUI.deactivate(id,msgs);
				}
			});
			
			// upgrade swaps			
			f.upgrades.uniq().each(function(u) {
				f.type.optionsFor(u).each( function(o) {
					var id = '_' + f.id + '_' + u.id + '_' + o.id; 
					var msgs = f.cannotSwap(u,o);
					if (msgs.empty()) {
						ArmyforgeUI.activate(id);
					}
					else {
						ArmyforgeUI.deactivate(id,msgs);
					}					
				});
			});
		});				
	},

	createMenuItem:function(id,name,pts) {
		var item = new Element('tr', {'id':'menuItem_'+id, 'class':'interactive listItem even'});
		item.update( new Element('td').update(name) ).insert( new Element('td', {'class':'points'}).update(pts) );

		var msgBox = new Element('div', {'id':'menuItemMsg_'+id, 'class':'constraint'});
		item.firstDescendant().insert({top:msgBox});
		msgBox.hide();

		return item;
	},

	createMenu:function(name,items) {
		var newTable = new Element('table').update(
								new Element('tr').update(
									new Element('th', {colspan:2}).update(name) ));		
		if (items.length < 1) {	
			var listItem = new Element('tr', {'class':'listItem even'}).update(
									new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
			newTable.insert(listItem);		
		};		
		items.each(function(i) {
			newTable.insert(i);
		});
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		return new Element('div', {'class':'listDiv'}).update(newTable);
	},

	createSwapPopup:function(formation, upgrades, upgradeType) {
		var menuItems = [];
		upgrades.each(function(x) {
			var id = formation.id + '_' + upgradeType.id + '_' + x.id;
			var points = x.pts - upgradeType.pts;
			if (points > 0) {
				points = '+' + points;
			}
			var menuItem = ArmyforgeUI.createMenuItem(id, x.name, points);
			menuItems.push(menuItem);		
			menuItem.observe('click',
					ArmyforgeUI.wrapActivatableHandler(menuItem, ArmyforgeUI.swapUpgrade)
						.bindAsEventListener(this, formation, x, upgradeType));
		});
		var menu = ArmyforgeUI.createMenu('REPLACE WITH...',menuItems);

		var dropDown = new Element('div', {'class':'dropDown'}).update(menu);
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},

	createSectionMenu:function(section) {
		var menuItems = [];
		section.formations.each(function(f) {
			var menuItem = ArmyforgeUI.createMenuItem(f.id, f.name, f.cost);
			menuItems.push(menuItem);		
			 // should this be done after the table is inserted in the DOM?
			menuItem.observe('click', 
					ArmyforgeUI.wrapActivatableHandler(menuItem, ArmyforgeUI.addFormation)
						.bindAsEventListener(this, f));
		});
		var menu = ArmyforgeUI.createMenu(section.name,menuItems);

		$('armyList').insert(menu);
	},

	createUpgradesPopup:function(formation) {
		var menuItems = [];
		formation.type.upgrades.each( function(u){
			var menuItem = ArmyforgeUI.createMenuItem(formation.id+'_'+u.id, u.name, u.pts);
			menuItems.push(menuItem);
			menuItem.observe('click',
					ArmyforgeUI.wrapActivatableHandler(menuItem, ArmyforgeUI.addUpgrade)
						.bindAsEventListener(this, formation, u));
		});
		var menu = ArmyforgeUI.createMenu('UPGRADES',menuItems);
		var dropDown = new Element('div', {'class':'dropDown'}).update(menu);
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},

	deactivate:function(id, msgs) {
		var msgDiv = $('menuItemMsg' + id);
		msgDiv.show();
		msgDiv.update('['+msgs.join(', ')+']');
		
		var row = $('menuItem' + id);
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
		var listFile = './lists/' + ArmyforgeUI.urlData.list + '.json';	
	
		// load the army list...
		new Ajax.Request(listFile, {
			method:'get',
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
		ArmyList.data.sections.each( ArmyforgeUI.createSectionMenu );

		// render force and mandatory units
		if (ArmyforgeUI.urlData.force) {
			Force.unpickle(ArmyforgeUI.urlData.force);
			ArmyforgeUI.renderForce();
			ArmyforgeUI.checkUpgradeMenuItems();
			ArmyforgeUI.checkFormationMenuItems();
                        ArmyforgeUI.checkWarnings();
		}
                else {
                    ArmyList.mandatoryFormations().each(function(x) {
                        ArmyforgeUI.addFormation(x);
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
            if (Force.canRemove(formation)) {
		Force.formations.remove( formation );
		ArmyforgeUI.upgradeRowsFor(formation).each( Element.remove );
		ArmyforgeUI.formationRowFor(formation).remove();
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.checkUpgradeMenuItems();
		ArmyforgeUI.checkFormationMenuItems();
		ArmyforgeUI.checkWarnings();
            }
	},

	removeUpgrade:function(upgradeType, formation) {
		if (formation.canRemove(upgradeType)) {
			formation.upgrades.remove( upgradeType );
			ArmyforgeUI.updateUpgrade(formation, upgradeType);
			ArmyforgeUI.checkUpgradeMenuItems();		
			ArmyforgeUI.checkWarnings();
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

		if (formation.type.hasPercentConstraint) {
			$('orbatBody').insert( newRow );
		}
		else {
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
			Force.name = $F('orbatNameEditor').escapeHTML();
			$('orbatName').update(Force.name);
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

