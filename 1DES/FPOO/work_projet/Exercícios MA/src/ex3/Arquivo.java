package ex3;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Arquivo {

	public void escrever(String info, String fileName, boolean append) {
		try {
			FileWriter fw = new FileWriter(fileName + ".txt", append);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(info + "\r\n");
			
			bw.close();
			fw.close();
		} catch (Exception e) {
			System.out.println("Erro Geral");
		}
	}
	public ArrayList<String> ler (String fileName){
		ArrayList<String> aluno = new ArrayList<>();
		try {
			FileReader fr = new FileReader(fileName + ".txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			
			while((linha = br.readLine()) != null) {
				aluno.add(linha);
			}
			
			br.close();
			fr.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo n�o encontrado.");
		} catch (IOException e) {
			System.out.println("Arquivo est� aberto");
		} catch (Exception e) {
			System.out.println("Erro geral");
		}
		return aluno;
	}
}