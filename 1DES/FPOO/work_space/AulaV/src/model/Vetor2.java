package model;

import java.util.Random;

public class Vetor2 {

	public static void main(String[] args) {
		imprimirVetor();
	}
	
	public static void imprimirVetor() {
		String[] nomes = new String[4];
		nomes[0] = "Bruno";
		nomes[1] = "Roberto";
		nomes[2] = "Felipe";
		nomes[3] = "Jorge";
		nomes[4] = "Guilherme";		
		
		String[] sobrenomes = new String[4];
		sobrenomes[0] = "Santos";
		sobrenomes[1] = "Silva";
		sobrenomes[2] = "Fernandez";
		sobrenomes[3] = "�lvaro";
		sobrenomes[4] = "Melro";
		
		Random rand = new Random();
		for(int i = 0; i <= nomes.length; i++) {
			
			System.out.println(rand.nextInt(nomes.length));
			System.out.println("  "+sobrenomes[rand.nextInt(sobrenomes.length)]);
		}
	}
}
