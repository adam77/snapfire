
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
								},
								cannotSwap:function(upgradeType,swapType) {
									var why = [];
									var upgrades = [].concat(this.upgrades).remove( upgradeType );
									var allUpgrades = Force.allUpgrades().remove( upgradeType );
									this.type.constraintsOn(swapType).each( function(c) {
										why.push( ArmyList.canAddUpgrade( c.perArmy ? allUpgrades : upgrades, c ) );
									});										
									return why.without('');
								}
							};
		this.formations.push( formation );			
		return formation;
	},
	getWarnings:function(){
		var msgs = [];
		ArmyList.data.formationConstraints.each(function(c) {
			if (c.maxPercent) {
				var points = 0;
				Force.formations.each( function(f){
					if (c.from.member(f.type)) {
						points += f.calcPoints();
					}
				});
				msgs.push( ArmyList.violatedPercent(Force.calcPoints(), c, points) );
			}
			else {
				msgs.push( ArmyList.violated(Force.calcPoints(), Force.formations.pluck('type'), c) );
			}
		});
		return msgs.without('');
	},
	cannotAdd:function(formationType){
//		alert(formationType.name + formationType.constraints.length);
		var why = [];
		formationType.independentConstraints.each(function(c) {
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
		}
		catch(err) {
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
	}
};


