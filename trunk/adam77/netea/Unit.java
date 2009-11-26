package adam77.netea;

public enum Unit {
	
	Test,
	;

	final Type type;
	final Speed speed;
	final D6 armour;
	final D6 cc;
	final D6 ff;
	final Weapon[] weapons;
	final Special[] special;

	public Unit(Type type, int speed, int armour, int cc, int ff, Special... specials) {
		this(type, speed, armour, cc, ff, new Weapon[] {}, specials);
	}

	public Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Special... specials) {
		this(type, speed, armour, cc, ff, new Weapon[] {weapon}, specials);
	}

	public Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Weapon weapon2, Special... specials) {
		this(type, speed, armour, cc, ff, new Weapon[] {weapon, weapon2}, specials);
	}

	public Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Weapon weapon2, Weapon weapon3, Special... specials) {
		this(type, speed, armour, cc, ff, new Weapon[] {weapon, weapon2, weapon3}, specials);
	}

	public Unit(Type type, int speed, int armour, int cc, int ff, Weapon weapon, Weapon weapon2, Weapon weapon3, Weapon weapon4, Special... specials) {
		this(type, speed, armour, cc, ff, new Weapon[] {weapon, weapon2, weapon3, weapon4}, specials);
	}

	public Unit(Type type, int speed, int armour, int cc, int ff, Weapon[] weapons, Special... specials) {
		this.type = type;
		this.speed = Speed.forInt(speed);
		this.armour = D6.forInt(armour);
		this.cc = D6.forInt(cc);
		this.ff = D6.forInt(ff);
		this.weapons = weapons;
		this.special = specials;
	}

	public enum Type {
		INFANTRY,
		ARMOURED_VEHICLE,
		CHARACTER,
		LIGHT_VEHICLE,
		WAR_ENGINE;
	}

	public enum Special {
		INSPIRING,
		;
	}

	public enum Speed {
		_15,
		_20,
		;
	}

}
