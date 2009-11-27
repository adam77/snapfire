package adam77.netea;

import adam77.netea.Dice;

import static adam77.netea.Weapon.Special.*;
import static adam77.netea.Dice.*;
import static adam77.netea.Dice.D6.*;

public enum Weapon {
	////////////////////////////////////////////////////////////////////////////////////
	// IMPERIAL ////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////
	// ASSAULT
	CHAINSWORD,
	OGRYN_COMBAT_WEAPONS(MACRO, EXTRA_ATTACK),
	POWER_LANCE(FIRST_STRIKE, EXTRA_ATTACK),
	POWER_WEAPONS(MACRO, EXTRA_ATTACK),
	// SMALL ARMS
	BOLT_PISTOL(1),
	BOLTER(1),
	HELLGUNS(1),
	LASGUN(1),
	LASPISTOL(1),
	RIPPER_GUNS(1),
	SHOTGUN(1),
	SMITE(1, MACRO, EXTRA_ATTACK),
	STORM_BOLTER(1),
	// RANGED
	ASSAULT_CANNON(			Range._30,	_5,		_5			),
	AUTOCANNON(				Range._45, 	_5,		_6			),
	BATTLE_CANNON(			Range._75, 	_4,		_4			),
	DEATHWIND(				Range._15, 	_5,		_5,		ONE_SHOT),
	DEMOLISHER(				Range._30, 	_3,		_4,		IGNORE_COVER),
	EARTHSHAKER(Type.RANGED,Range._120, _4,		_4,		null, Barrage._1, INDIRECT),
	GATLING_BLASTER(		Range._60,	_4,		_4,		X4_BARRELS),	
	HEAVY_BOLTER(			Range._30, 	_5,		null		),
	HELLSTRIKE(				Range._120,	null,	_2,		ONE_SHOT),
	HUNTER_KILLER(			Range._60, 	null,	_4,		_4	),
	HYDRA(					Range._45,	_4,		_5,		_5	),
	INFERNO_CANNON(			Range._30,	_3,		null,	IGNORE_COVER),
	LASCANNON(				Range._45,	null,	_5			),
	MISSILE_LAUNCHER(		Range._45,	_5,		_6			),
	MULTI_MELTA(			Range._15,	_5,		_5,		MACRO),
	MULTILASER(				Range._30,	_5,		_6			),
	PLASMA_CANNON(			Range._30,	_4,		_4,		SLOW_FIRING),
	PLASMA_GUNS(			Range._15,	_5,		_5			),
	SNIPER_RIFLES(			Range._45,	_5,		null		),
	TURBO_LASER_DESTRUCTOR(	Range._60,	_5,		_3,		X4_BARRELS),	
	TWIN_AUTOCANNON(		Range._45,	_4,		_5			),
	TWIN_HEAVY_BOLTER(		Range._30,	_4,		null		),
	TWIN_HEAVY_BOLTER_B(	Range._30,	_4,		null,	_5	),
	TWIN_HEAVY_BOLTER_C(	Range._15,	_4,		null,	_5	),
	TWIN_LASCANNON(			Range._45,	null,	_4			),
	TWIN_TYPHOON_MISSLE(	Range._45,	_3,		_5			),
	VANQUISHER(				Range._75,	_4,		_2			),
	VOLCANO_CANNON(			Range._90,	_2,		_2,		MACRO, TITAN_KILLER_D3),
	// BARRAGE
	HEAVY_MORTAR(			Range._30,	Barrage._1,		INDIRECT),
	ROCKET_LAUNCHER(		Range._150,	Barrage._2,		INDIRECT, SLOW_FIRING, DISRUPT),
	ROCKET_POD(				Range._30,	Barrage._1,		DISRUPT, ONE_SHOT),
	SIEGE_MORTAR(			Range._45,	Barrage._2,		INDIRECT, IGNORE_COVER, SLOW_FIRING),
	WHIRLWIND(				Range._45,	Barrage._1,		INDIRECT),
	//////////////////////////////////////////////////////////////////////////////////////////////////
	// ORCS //////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	// ASSAULT
	BIG_CHOPPAS(MACRO, EXTRA_ATTACK),
	CHOPPAS,
	// SMALL_ARMS
	SHOOTAS(1),
	// RANGED
	BIG_SHOOTAS(			Range._30,	_6,		_6		),
	// BARRAGE
	SCOOPAGUN(				Range._60,	Barrage._2,		MACRO),
	;

	final Type type;
	final Range range;
	final D6 ap;
	final D6 at;
	final D6 aa;
	final Barrage bp;
	final Special[] special;

	//small arms constructor
	Weapon(int ignore, Special... specials) {
		this(Type.SMALL_ARMS, Range._15, null, null, null, null, specials);
	}

	// assualt constructor
	Weapon(Special... specials) {
		this(Type.ASSAULT, Range._0, null, null, null, null, specials);
	}

	// ranged weapon constructor
	Weapon(Range range, D6 ap, D6 at, Special... specials) {
		this(Type.RANGED, range, ap, at, null, null, specials);
	}

	// ranged weapon constructor (with aa)
	Weapon(Range range, D6 ap, D6 at, D6 aa, Special... specials) {
		this(Type.RANGED, range, ap, at, aa, null, specials);
	}

	// barrage weapon constructor
	Weapon(Range range, Barrage bp, Special... specials) {
		this(Type.RANGED, range, null, null, null, bp, specials);
	}

	// general constructor
	Weapon(Type type, Range range, D6 ap, D6 at, D6 aa, Barrage bp, Special... specials) {
		this.type = type;
		this.range = range;
		this.ap = ap;
		this.at = at;
		this.aa = aa;
		this.bp = bp;
		this.special = specials;
	}

	public enum Type {
		SMALL_ARMS,
		ASSAULT,
		RANGED;
	}

	public enum Special {
		DISRUPT,
		EXTRA_ATTACK,
		FIRST_STRIKE,
		IGNORE_COVER,
		INDIRECT,
		MACRO,
		ONE_SHOT,
		SLOW_FIRING,
		TITAN_KILLER_D3,
		X2_BARRELS,
		X4_BARRELS,
		;
	}

	public enum Barrage {
		_1,
		_2,
		_3,
		_4,
		_5,
		_6,
		_7;
	}

	public enum Range {
		_0,
		_15,
		_30,
		_45,
		_60,
		_75,
		_90,
		_120,
		_150;		
	}		

	public static void main(String[] args) {
		System.out.println(Weapon.BOLTER.type);
	}

}
