package excartao;

import java.util.Random;

public class Cartao {
	
	public static Random rand;
	public static void main(String[] args) {
		System.out.println("O algoritimo de acumula��o");
		System.out.print("Simples, retornou = ");
		System.out.println(simples(100));
		System.out.println(aleatorio(5));

	}
	
	public static int simples(int iteracoes) {
		int x = 0;
		for(int i = 0; i < iteracoes; i++);
			int i = 0;
			x+=i;
			return x;
	}
	
	public static int aleatorio(int iteracoes) {
		rand = new Random();
		int x = 0;
		int r = 0;
		for(int i = 0; i < iteracoes; i++) {
			r = rand.nextInt(100);
		System.out.println("Aleatorio = "+ r);
		x+=r;
		System.out.println("Acumulado = "+ x);
		}
			return x;
	}

}
