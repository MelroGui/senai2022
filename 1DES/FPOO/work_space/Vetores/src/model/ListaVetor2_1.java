package model;

import java.util.Scanner;

public class ListaVetor2_1 {

	public static void main(String[] args) {
		
	}
	public static void mostra( ) {
		int[] vet = new int [5];
		vet[0] = 2;
		vet[1] = 4;
		vet[2] = 5;
		vet[3] = 6;
		vet[4] = 8;
		
		int[] ind = new int [5];
		ind[0] = 2;
		ind[1] = 4;
		ind[2] = 5;
		ind[3] = 6;
		ind[4] = 8;
		
		System.out.println("Indice\t\tvalor");
		for(int i = 0; i < vet.length; i++ ) {
			
			System.out.println("\t\t| "+ind[i]+"\t\t");
			System.out.println("  "+vet[i]+"  |");
		}
		
	}
	public static int[] leVetor() {
		int []leVetor = new int[5];
		
		Scanner input = new Scanner(System.in);
		
		for(int i = 0; i < leVetor.length; i++ ) {
			leVetor[i] = input.nextInt();
			
			System.out.println("");
			System.out.println("");
		
		}
		return leVetor;
	}
}
