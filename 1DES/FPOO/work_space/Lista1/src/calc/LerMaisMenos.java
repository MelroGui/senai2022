package calc;

import java.util.Scanner;

public class LerMaisMenos {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n;
	
		System.out.print("Insira um valor inteiro, positivo e diferente de zero para N: ");
		n = sc.nextInt();
		
		if (n > 0) {
			System.out.println("N-1 = " + (n-1) + " e N+1 = " + (n+1));
		} else {
			System.out.println("N n�o � inteiro, positivo e diferente de zero");
		}
	}
}
