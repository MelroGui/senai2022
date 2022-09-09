package ex4;

import java.util.ArrayList;
import java.util.Scanner;

public class Ex4 {

	private static Arquivo arq = new Arquivo();
	private static Scanner sc = new Scanner(System.in);
	private static ArrayList<String> usuarios = new ArrayList<>();
	
	public static void main(String[] args) {
	
		arq.escrever("admin;adm123");
		logar();
		
		int opcao = 0;
		while(opcao != 3) {
			System.out.println("\n1. Cadastrar Usu�rio\n2. Fazer login\n3. Sair");
			opcao = sc.nextInt();
			sc.nextLine();
			switch(opcao) {
			case 1:
				cadastrarUsuario();
				break;
			case 2:
				logar();
				break;
			case 3:
				System.out.println("Vaza");
				break;
			default:
				System.out.println("Op��o Inv�lida");
			}
		}
	}
	private static void logar() {
		System.out.println("Digite o Nome do Usuario: ");
		String usuario = sc.next();
		System.out.println("Digite sua Senha: ");
		String senha = sc.next();
		
		usuarios = arq.ler();
		boolean busca = false;
		for (String login : usuarios) {
			String[] quebra = login.split(";");
			if(quebra[0].equals(usuario) && quebra[1].equals(senha)) {
				System.out.println("parabens vc entrou");
				busca = true;
				break;
			}
		}
		if(busca == false) {
			System.out.println("Usu�rio ou Senha Incorreta");
		}
	}
	private static void cadastrarUsuario() {
		System.out.println("Digite o usu�rio: ");
		String usuario = sc.next();
		System.out.println("Digite a senha: ");
		String senha = sc.next();
		
		String info = usuario +";"+ senha;
		arq.escrever(info);
		
		System.out.println("Usu�rio cadastrado com sucesso!");
	}
}
