package exercicios;

import java.io.IOException;
import java.util.Scanner;

public class ExLa�o1 {

	public static void main(String[] args) throws IOException {
		try (Scanner sc = new Scanner(System.in)) {
			int a, b, cont = 0 ;
			int  opcao = 0;
			while(opcao != 11) {
				System.out.println("Digite uma opc�o:");
				System.out.println("1-Programa1\t5-Progama5\t9-Programa9");
				System.out.println("2-Programa2\t6-Progama6\t10-Programa10");
				System.out.println("3-Programa3\t7-Progama7\t11-Programa11");
				System.out.println("4-Programa4\t8-Progama8");
				opcao = sc.nextInt();
				switch(opcao) {
				case 1: 
				    for (int i = 10; i <= 200; i++) {
					System.out.println(i);
				    }
					break;
				case 2: 
					for (int i = 200; i > 0; i--) {
					System.out.println(i);
				    }
					break;
				case 3:
					System.out.println("Digite um valor inteiro:");
					int valor = sc.nextInt();
					for (int i = 0; i < valor; i++) {
					System.out.println(i);
					}
					break;
				case 4: 
					System.out.println("Digite um numero de preferencia inteiro:");
					a = sc.nextInt();
					System.out.println("Digite outro numero de preferencia inteiro:");
					b = sc.nextInt();
					for (int i = a; i <= b; i++) {
					System.out.println(i);
					}
					break;
				case 5: 
					System.out.println("Digite um numero de preferencia inteiro:");
					a = sc.nextInt();
					System.out.println("Digite outro numero de preferencia inteiro:");
					b = sc.nextInt();
					for (int i = a; i < b; i++) {
						if(i % 2 == 0) {
					System.out.println(i);
						}
					}
					break;
				case 6: 
					for (int i = 1; i<=100; i++) {
						cont += i;
					}
					System.out.println(cont);
					break;
				case 7: 
					System.out.println("Digite um numero de preferencia inteiro:");
					a = sc.nextInt();
					System.out.println("Digite outro numero de preferencia inteiro:");
					b = sc.nextInt();
					for (int i = a; i <= b; i++) {
						cont += i;
					}
					System.out.println(cont);
					break;
				case 8: 
					System.out.println("Digite um numero de preferencia inteiro:");
					a = sc.nextInt();
					System.out.println("Digite outro numero de preferencia inteiro:");
					b = sc.nextInt();
					for (int i = a; i <= b; i++) {
						cont += i;
						if(i % 2 == 0) {
						}
					}
					System.out.println(cont);
					break;
				case 9:
					for(int i = 1; i <= 15; i++) {
						System.out.println("Digite um valor inteiro ");
						i = sc.nextInt();
						cont += i;
					}
					
					break;
					
				case 10: 
					System.out.println("Digite um numero de preferencia inteiro:");
					a = sc.nextInt();
					for (int i = -a; i < -100; i -= 5) {
					System.out.println(i);
					}
					break;
				case 11: 
					System.out.println("Vai embora noia");
					break;
				default :
					System.out.println("CE TEM 11 OP��ES NA SUA M�O E VC APERTA A QUE N�O TEM SEU ANIMAL!!! -_-");
					break;
					}
				}
			}
		}
	}

			
				
