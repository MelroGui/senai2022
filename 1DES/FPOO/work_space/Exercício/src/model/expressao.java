package model;

import java.util.Scanner;
	public class expressao {
	
	public static Scanner sc;
	public static void main(String[] args) {
		
		sc = new Scanner(System.in);
		int a, b, c, delta, r1, r2;
		
		System.out.println("Coloque valor de A");
		a = sc.nextInt();
		System.out.println("Coloque valor de B");
		b = sc.nextInt();
		System.out.println("Coloque valor de C");
		c = sc.nextInt();
		System.out.println(a+"x� "+"+ "+b+"x "+ "+ "+c+ "0");
		
		delta = (b * b) - (4 * a * c);
		System.out.println("Delta � "+ delta);
		
		if (delta<0) {
		System.out.println("N�o possui ra�zes reais");
		
		
		}
		else {
			
		r1 = (int)(-b + Math.sqrt(delta)) / (2 * a);
		r2 = (int)(-b - Math.sqrt(delta)) / (2 * a);
		System.out.println("ra�z 1 ="+ r1);
		System.out.println("ra�z 2 ="+ r2);
		
		}
	}

}
