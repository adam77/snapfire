

var Force = {
	nextId:0,
	name:'Incompertus',
	formations:[], //{id:i, type:t, upgrades:[u1,u2,u2,u2,u3,u4,u4]}
	calcPoints:function() {
		var total = 0;
		this.formations.each( function(x) {
			total += x.calcPoints();
		});
		return total;
	},
	addFormation:function(formationType, noDefaults) {
		var formation = {
								id:Force.nextId++,
								type:formationType,
								upgrades:noDefaults ? [] : formationType.defaultUpgrades(),
								count:function(upgradeType) {
									return this.upgrades.count(upgradeType);
								},
								calcPoints:function() {
									var total = this.type.pts;
									this.upgrades.each(function(u) {
										total += u.pts;
									});
									return total;				
								},
								canRemove:function(upgradeType) {
									// check minimum constraint
									var constraint = this.type.mandatoryConstraint( upgradeType );
									if (constraint) {
										var total = this.upgrades.countAll( constraint.from );
										return total > constraint.min;
									}	
									return true;								
								},
								cannotAdd:function(upgradeType) {
									var why = [];
									var upgrades = this.upgrades;
									var allUpgrades = Force.allUpgrades();
									this.type.constraintsOn(upgradeType).each( function(c) {
										why.push( ArmyList.canAddUpgrade( c.perArmy ? allUpgrades : upgrades, c ) );
									});										
									return why.without('');
								}
							};
		this.formations.push( formation );			
		return formation;
	},
	getWarnings:function(){
		return ['oh oh','yup'];
	},
	cannotAdd:function(formationType){
//		alert(formationType.name + formationType.constraints.length);
		var why = [];
		formationType.constraints.each(function(c) {
			why.push( ArmyList.canAddFormation( Force.formations.pluck('type'), c ) );
		});
		return why.without('');
	},
	allUpgrades:function() {
		return Force.formations.pluck('upgrades').flatten();
	},
	pickle:function() {
		var out = Force.name;
		Force.formations.each( function(x) {
			out += '~' + x.type.id;
			x.upgrades.uniq().each( function(u) {
				out += '~' + u.id + 'x' + x.count(u);
			});
		});	
		return out;
	},
	unpickle:function(pickled) {
		try {
			Force.name = null;
			var currentFormation = null;
			decodeURIComponent(pickled).split('~').each(function(x) {
				if (!Force.name) {
					Force.name = x;
				}
				else {
					var id = parseInt(x.split('x')[0]);
					if (id >= 500) {
						currentFormation = Force.addFormation( ArmyList.formationForId(id), true );
					}
					else {
						var count = parseInt(x.split('x')[1]);			
						for (var i=0;i<count;i++) {
							currentFormation.upgrades.push( ArmyList.upgradeForId(id) );
						}
					}
				}			
			});
			return name;	
		} catch(err) {
				alert('Sorry, there was an error loading the army.');
		}
	},
	plainText:function() {
		var txt = Force.name + ', ' + Force.calcPoints() + 'POINTS \n';
		txt += ArmyList.data.id + ' (' + ArmyList.data.version + ') \n';
		txt += '================================================== \n';
		Force.formations.each( function(x) {
			txt += '\n' + x.type.name.toUpperCase() + '['+ x.calcPoints() +'] \n';
			var units =	x.upgrades.uniq().map( function(upgrade) {
				return (x.count(upgrade) > 1 ? x.count(upgrade) + 'x ' : '') + upgrade.name;
			});
			if (x.type.units) {
				units = [x.type.units].concat( units );
			}
			units.each( function(unit) {
				txt += unit + ', ';
			});
			txt += '\n\n';
		});
		txt += '\n\n';
		return txt;
	},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


