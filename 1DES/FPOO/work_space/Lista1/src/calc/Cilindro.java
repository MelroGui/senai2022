package calc;

import java.util.Scanner;

public class Cilindro {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		double dim, r, h, area, base, volume;
		
		System.out.print("Insira o diametro do cilindro: ");
		dim = sc.nextDouble();
		System.out.print("Insira a altura do cilindro: ");
		h = sc.nextDouble();
		
		r = dim / 2;
		base = 3.14 * (r * r);
		volume = base * h;
		area = 2 * 3.14 * r * (r + h);
		
		System.out.printf("a area � de %.2fcm� e o volume � de %.2fcm�", area, volume);
				
	}
}
