package calc;

import java.util.Scanner;

public class Pisos {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		double area, custo, quilos, peso, pre�o;
		
		System.out.print("Insira a area, em m�, a ser revestida: ");
		area = entrada.nextDouble();
		
		peso = 2.702;
		pre�o = 35.135;
		quilos = area * peso;
		custo = area * pre�o;
		
		
		System.out.printf("Para a area desejada ser�o comprados %.2fKg e custara R$%.2f",quilos, custo);
	
	}
}
