
var ArmyList = {
	data:{},
	allFormations:[],
	allNonFixedFormations:[],
	init:function(input) {		

		this.data = input;
		this.allNonFixedFormations = input.sections.pluck('formations').flatten();
		this.allFormations = input.fixedFormations ? input.fixedFormations.concat( this.allNonFixedFormations )
														  		 : this.allNonFixedFormations;
			
		// FORMATION UPGRADES...
		this.allFormations.each( function(formation) {	
			// fill in empty upgrade lists
			if (!formation.upgrades) formation.upgrades = [];

			// replace upgrade ids with upgrade objects
			formation.upgrades = formation.upgrades.map(function(id) {
				return ArmyList.upgradeForId(id);
			 });
		});

		// UPGRADE CONSTRAINTS...
		input.upgradeConstraints.each( function(constraint) {
			// replace upgrade ids with upgrade objects
			constraint.from = constraint.from.map( ArmyList.upgradeForId );
			// replace formation ids with formation objects
			if (constraint.appliesTo) {
				constraint.appliesTo = constraint.appliesTo.map( ArmyList.formationForId );
			}
			else {
				constraint.appliesTo = ArmyList.allFormations;
			}
			// set some useful properties and defaults
			if (!constraint.min && constraint.max) constraint.min = 0;
			if (constraint.min && !constraint.max) constraint.max = 1000000;
			constraint.mandatory = constraint.min && !constraint.perArmy;
			constraint.mandatoryWithOptions = constraint.mandatory && constraint.from.length > 1;
		});

		// FORMATION CONSTRAINTS...
		input.formationConstraints.each( function(constraint) {
			// replace formation ids with formation objects
			constraint.from = constraint.from.map( ArmyList.formationForId );
			// replace formation ids with formation objects
			if (constraint.forEach) {
				constraint.forEach = constraint.forEach.map( ArmyList.formationForId );
			}
		});

		// FORMATIONS... add some useful properties/functions...
		this.allFormations.each( function(formation){
			formation.upgradeConstraints = 
				ArmyList.data.upgradeConstraints.filter( function(x){
					return x.appliesTo.member(formation);
				});
			formation.mandatoryUpgradeConstraints =
				formation.upgradeConstraints.filter( function(x){
					return x.mandatory;
				});
			formation.mandatoryConstraint = function(upgrade){		
				return formation.mandatoryUpgradeConstraints.find( function(constraint){
						return constraint.from.member(upgrade);
					});
			};
			formation.replaceable = function(upgrade){
				return formation.mandatoryConstraint(upgrade)
							&& formation.mandatoryConstraint(upgrade).mandatoryWithOptions;
			};
			formation.constraintsOn = function(upgrade){
				return formation.upgradeConstraints.findAll( function(c){return c.from.member(upgrade);} );
			};
			formation.optionsFor = function(upgrade){
				return formation.mandatoryConstraint(upgrade).from.without(upgrade);
			};
			formation.defaultUpgrades = function(){
				var defaults = [];
				formation.mandatoryUpgradeConstraints.each( function(x) {
					for (var i=0;i<x.min;i++){
						defaults.push( x.from[0] );
					}
				});
				return defaults;
			};
			formation.constraints = input.formationConstraints.findAll( function(c) {
				return c.from.member(formation);
			});
			// cost including any mandatory upgrades... add them in too!
			var total = 0;
			formation.mandatoryUpgradeConstraints.each( function(x) {
				total += x.min * x.from[0].pts;
			});		
			formation.cost = formation.pts + total;
		});
	},
	upgradeForId:function(id) {
		return ArmyList.data.upgrades.find( function(x) {
			return x.id == id; 
		});
	},
	formationForId:function(id) {
		return ArmyList.allFormations.find( function(x){ return x.id == id; });
	},

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
	canAddFormation:function(formations,constraint) {
//		alert(formations.length + '_' + constraint.max);
		if (constraint.max <= formations.countAll(constraint.from)) {
			return ArmyList.maxString( constraint, true );
		}
		return '';
	},
	canAddUpgrade:function(upgrades,constraint) {
		if (constraint.max <= upgrades.countAll(constraint.from)) {
			return ArmyList.maxString( constraint );
		}
		return '';
	},
	maxString:function(constraint, ignorePerArmy) {
		return 'max ' + constraint.max
				+ (constraint.name ? ' ' + constraint.name : '')
				+ (constraint.perArmy && !ignorePerArmy ? ' per Army' : '');
	}
};


