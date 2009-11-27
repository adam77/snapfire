package adam77.netea;

import java.util.Arrays;
import java.util.Map;
import java.util.Map.Entry;
import com.google.common.collect.*;
import adam77.netea.Dice;
import adam77.netea.Weapon;

import static adam77.netea.Dice.*;
import static adam77.netea.Weapon.*;
import static adam77.netea.Unit.Special.*;
import static adam77.netea.Unit.Type.*;
import static adam77.netea.Unit.FireArc.*;

public enum Unit {	
	///////////////////////////////////////////////////////////////////////////////////////////
	// MARINES
	///////////////////////////////////////////////////////////////////////////////////////////
	CAPTAIN(		CHARACTER,			0,	0,	0,	0,	POWER_WEAPONS, INVULNERABLE_SAVE, LEADER, COMMANDER),
	CHAPLAIN(		CHARACTER,			0,	0,	0,	0,	POWER_WEAPONS, INVULNERABLE_SAVE, LEADER, INSPIRING),
	SUPREME_COMMANDER(
					CHARACTER,			0,	0,	0,	0,	POWER_WEAPONS, INVULNERABLE_SAVE, LEADER, Special.SUPREME_COMMANDER),
	LIBRARIAN(		CHARACTER,			0,	0,	0,	0,	POWER_WEAPONS, SMITE, INVULNERABLE_SAVE, LEADER),
	ASSAULT(		INFANTRY,			30,	4,	3,	5,	BOLT_PISTOL, CHAINSWORD, JUMP_PACKS),
	BIKE(			INFANTRY,			35,	4,	3,	4,	BOLT_PISTOL, CHAINSWORD),
	DEVASTATOR(		INFANTRY,			15,	4,	5,	3,	MISSILE_LAUNCHER, MISSILE_LAUNCHER),
	SCOUTS(			INFANTRY,			15,	5,	4,	5,	SHOTGUN, HEAVY_BOLTER, SCOUT, INFILTRATORS),
	TACTICAL(		INFANTRY,			15,	4,	4,	4,	BOLTER, MISSILE_LAUNCHER),
	TERMINATORS(	INFANTRY,			15,	4,	3,	3,	STORM_BOLTER, ASSAULT_CANNON, ASSAULT_CANNON, POWER_WEAPONS, REINFORCED_ARMOUR, THICK_REAR_ARMOUR, TELEPORT),
	ATTACK_BIKE(	LIGHT_VEHICLE,		30,	4,	5,	4,	HEAVY_BOLTER),
	LAND_SPEEDER(	LIGHT_VEHICLE,		35,	4,	6,	5,	MULTI_MELTA, SKIMMER, SCOUT),
	DREADNOUGHT(	ARMOURED_VEHICLE,	15,	4,	4,	4,	MISSILE_LAUNCHER, TWIN_LASCANNON, WALKER),
	HUNTER(			ARMOURED_VEHICLE,	30,	5,	6,	6,	HUNTER_KILLER),
	LAND_RAIDER(	ARMOURED_VEHICLE,	25,	4,	6,	5,	TWIN_LASCANNON, TWIN_LASCANNON, HEAVY_BOLTER, REINFORCED_ARMOUR, THICK_REAR_ARMOUR, TRANSPORT_2),
	PREDATOR_ANNIHILATOR(
					ARMOURED_VEHICLE,	30,	4,	6,	5,	TWIN_LASCANNON, LASCANNON, LASCANNON),
	PREDATOR_DESTRUCTOR(
					ARMOURED_VEHICLE,	30,	4,	6,	5,	AUTOCANNON, HEAVY_BOLTER, HEAVY_BOLTER),
	RAZORBACK(		ARMOURED_VEHICLE,	30,	5,	6,	5,	TWIN_HEAVY_BOLTER, TRANSPORT_1),
	RHINO(			ARMOURED_VEHICLE,	30,	5,	6,	6,	STORM_BOLTER, TRANSPORT_2),
	VINDICATOR(		ARMOURED_VEHICLE,	20,	4,	6,	4,	DEMOLISHER),
	WHIRLWIND(		ARMOURED_VEHICLE,	30,	5,	6,	5,	Weapon.WHIRLWIND),
	LANDING_CRAFT(	WAR_ENGINE,			Speed.BOMBER,	4,	5,	3,
				new ImmutableMultimap.Builder<Weapon, FireArc>().putAll(TWIN_LASCANNON, _360, _360).putAll(TWIN_HEAVY_BOLTER_C, _360, _360, _360).put(STORM_BOLTER, _360).build(),
				PLANETFALL, TRANSPORT_6, REINFORCED_ARMOUR, FEARLESS),				
	THUNDERHAWK(	WAR_ENGINE,			Speed.BOMBER,	4,	6,	4,
				ImmutableMultimap.of(BATTLE_CANNON, FxF, TWIN_HEAVY_BOLTER_B, FxF, TWIN_HEAVY_BOLTER_B, FxF, TWIN_HEAVY_BOLTER_C, RIGHT, TWIN_HEAVY_BOLTER_C, LEFT),
				PLANETFALL, TRANSPORT_6, REINFORCED_ARMOUR),
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	// GUARD
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	;

	final Type type;
	final Speed speed;
	final D6 armour;
	final D6 cc;
	final D6 ff;
	final ImmutableMultimap<Weapon, FireArc> weapons;
	final Special[] special;
//	final int damageCapacity;
//	final int transportCapacity;

	Unit(Type type, int speed, int armour, int cc, int ff, Special... specials) {
		this(type, speed, armour, cc, ff, ImmutableMultimap.<Weapon, FireArc>of(), specials);
	}

	Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Special... specials) {
		this(type, speed, armour, cc, ff, ImmutableMultimap.of(weapon, _360), specials);
	}

	Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Weapon weapon2, Special... specials) {
		this(type, speed, armour, cc, ff, ImmutableMultimap.of(weapon, _360, weapon2, _360), specials);
	}

	Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Weapon weapon2, Weapon weapon3, Special... specials) {
		this(type, speed, armour, cc, ff, ImmutableMultimap.of(weapon, _360, weapon2, _360, weapon3, _360), specials);
	}

	Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Weapon weapon2, Weapon weapon3, Weapon weapon4, Special... specials) {
		this(type, speed, armour, cc, ff, ImmutableMultimap.of(weapon, _360, weapon2, _360, weapon3, _360, weapon4, _360), specials);
	}

	Unit(Type type, int speed, int armour, int cc, int ff, ImmutableMultimap<Weapon, FireArc> weapons, Special... specials) {
		this(type, Speed.forInt(speed), armour, cc, ff, weapons, specials);
	}

	Unit(Type type, Speed speed, int armour, int cc, int ff, ImmutableMultimap<Weapon, FireArc> weapons, Special... specials) {
		this.type = type;
		this.speed = speed;
		this.armour = D6.forInt(armour);
		this.cc = D6.forInt(cc);
		this.ff = D6.forInt(ff);
		this.special = specials;
		this.weapons = weapons;
	}

	public enum Type {
		INFANTRY,
		ARMOURED_VEHICLE,
		CHARACTER,
		LIGHT_VEHICLE,
		WAR_ENGINE;
	}

	public enum Special {
		COMMANDER,
		FEARLESS,
		INFILTRATORS,
		INSPIRING,
		INVULNERABLE_SAVE,
		JUMP_PACKS,
		LEADER,
		MOUNTED,
		PLANETFALL,
		REINFORCED_ARMOUR,
		SCOUT,
		SKIMMER,
		SUPREME_COMMANDER,
		TELEPORT,
		THICK_REAR_ARMOUR,
		TRANSPORT_1,
		TRANSPORT_2,
		TRANSPORT_6,
		WALKER,
		;
	}

	public enum Speed {
		_15,
		_20,
		_25,
		_30,
		_35,
		_40,
		_50,
		BOMBER;

		public static Speed forInt(int i) {
			return i == 0 ? null : Speed.valueOf("_" + i);
		}
	}

	public enum FireArc {
		_360,
		FxF,
		FwA,
		LEFT,
		RIGHT,
		;
	}

	public static void main(String[] args) {
		for (Map.Entry<Weapon, FireArc> weapon : Unit.LANDING_CRAFT.weapons.entries()) {
			System.out.println(weapon.getKey() + " " + weapon.getValue());
		}
		for (Map.Entry<Weapon, FireArc> weapon : Unit.THUNDERHAWK.weapons.entries()) {
			System.out.println(weapon.getKey() + " " + weapon.getValue());
		}
	}
}
