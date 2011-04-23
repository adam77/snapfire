
var ArmyList = {
	data:{},
	init:function(input) {		

		this.data = input;
			
		ArmyList.allFormations().each( function(formation) {	
			// fill in empty upgrade lists
			if (!formation.upgrades) formation.upgrades = [];

			// replace upgrade ids with upgrade objects
			formation.upgrades = formation.upgrades.map(function(id) {
				return ArmyList.upgradeForId(id);
			 });
		});

		input.upgradeConstraints.each( function(constraint) {
			// replace upgrade ids with upgrade objects
			constraint.from = constraint.from.map( ArmyList.upgradeForId );
			// replace formation ids with formation objects
			if (constraint.appliesTo) {
				constraint.appliesTo = constraint.appliesTo.map( ArmyList.formationForId );
			}
			else {
				constraint.appliesTo = ArmyList.allFormations();
			}
			// set some useful properties and defaults
			if (!constraint.min && constraint.max) constraint.min = 0;
			if (constraint.min && !constraint.max) constraint.max = 1000000;
			constraint.mandatory = constraint.min && !constraint.perArmy;
			constraint.mandatoryWithOptions = constraint.mandatory && constraint.from.length > 1;
		});

		input.formationConstraints.each( function(constraint) {
			// replace formation ids with formation objects
			constraint.from = constraint.from.map( ArmyList.formationForId );
			// replace formation ids with formation objects
			if (constraint.forEach) {
				constraint.forEach = constraint.forEach.map( ArmyList.formationForId );
			}
		});

		// add some useful properties/functions...
		ArmyList.allFormations().each( function(formation){
			formation.upgradeConstraints = 
				ArmyList.data.upgradeConstraints.filter( function(x){
					return x.appliesTo.member(formation);
				});
			formation.mandatoryUpgradeConstraints =
				formation.upgradeConstraints.filter( function(x){
					return x.mandatory;
				});
//			formation.mandatoryUpgrades = 
//				formation.mandatoryUpgradeConstraints.map( function(x){
//					return x.from;
//				}).flatten();
//			formation.mandatory = function(upgrade){
//				return formation.mandatoryUpgradeConstraints.any( function(constraint){
//						constraint.from.member(upgrade);
//					});
//			};
			formation.mandatoryConstraint = function(upgrade){		
				return formation.mandatoryUpgradeConstraints.find( function(constraint){
						return constraint.from.member(upgrade);
					});
			};
		});

	},
	upgradeForId:function(id) {
		return ArmyList.data.upgrades.find( function(x) {
			return x.id == id; 
		});
	},
	formationForId:function(id) {
		return ArmyList.allFormations().find( function(x){ return x.id == id; });
	},
	allFormations:function() {
		var all = ArmyList.data.sections.map( function(x){ return x.formations; } );
		if (ArmyList.data.fixedFormations) {
	      all = all.concat(ArmyList.data.fixedFormations);
		}
		return all.flatten();
	},
	replaceable:function(upgrade,formation) {
		// constraint exists such that: (is mandatoryWithOptions) && (upgrade in from) && (formation in appliesTo)
		return this.data.upgradeConstraints.any( function(x) {
			return x.mandatoryWithOptions
						&& x.from.member(upgrade)
						&& x.appliesTo.member(formation);
		});
	},
	upgradeOptions:function(upgrade,formation) {
		var constraint = this.data.upgradeConstraints.find( function(x) {
			return x.mandatory 
				&& x.from.member(upgrade) 
				&& x.appliesTo.member(formation);
		});
		return constraint.from.without(upgrade);
 	},
	mandatoryUpgrade:function(upgrade,formation) {
		// constraint exists such that: (is mandatory) and (upgrade in from) and (formation in appliesTo)
		return this.data.upgradeConstraints.any( function(x) {
			return x.mandatory 
				&& x.from.member(upgrade) 
				&& x.appliesTo.member(formation);
		});
	},
	cost:function(formation) {
		var mandatory = 0;
		// if any mandatory upgrades... add them in too!
		this.mandatoryUpgradesFor(formation).each( function(x) {
			mandatory += x.min * x.from[0].pts;
		});		
		return formation.pts + mandatory;
	},
	mandatoryUpgradesFor:function(formation) {
		return this.data.upgradeConstraints.filter( function(x) {
			return x.mandatory && x.appliesTo.member(formation);
		});
	},
	mandatoryConstraintFor:function(x,upgrade,formation) {
		return x.mandatory
					&& x.from.member(upgrade)
					&& x.appliesTo.member(formation);		
	}
};


