//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nível 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;

var func = [
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nivel":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nivel":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nivel":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nivel":3
		},
		"autorizado":true
	}
];

var itemFunc = document.querySelector(".itemFunc");

function acesso() {
    func.forEach(func => {
        let novoItem = itemFunc.cloneNode(true);

        novoItem.classList.remove("modelo");

        novoItem.querySelector("#nomeFunc").innerHTML = func.funcionario;
        novoItem.querySelector("#nomeCargo").innerHTML = func.cargo.nome;
		novoItem.querySelector("#nivelCargo").innerHTML = func.cargo.nivel;

        document.querySelector(".func").appendChild(novoItem);

		if(func.cargo.nivel < 3 ){
			novoItem.querySelector("#apagar").innerHTML = '<button><img src = "assets/lixeira.png" height = "15px"></button>'
		}
		
		if(func.cargo.nome === "Analista" || func.cargo.nome === "Desenvolvedor" && func.cargo.nivel === 3){
			novoItem.querySelector("#adminOrReader").innerHTML = '<font color = red>ADMIN</font>'
		
		} else {
			novoItem.querySelector("#adminOrReader").innerHTML = '<font color = blue>LEITOR</font>'
		}
		
		novoItem.querySelector("#autorizacao-lista").innerHTML = func.autorizado
    });
}

function removerItem(e) {
    e.parentNode.remove();
}