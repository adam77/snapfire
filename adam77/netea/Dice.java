package adam77.netea;

public class Dice {

	public enum D6 {
		_1,
		_2,
		_3,
		_4,
		_5,
		_6;

		public static D6 forInt(int i) {
			return (i>=1 && i<=6) ? D6.values()[i - 1] : null;		
		}
	}
}
