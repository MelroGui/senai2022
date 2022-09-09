var usuarios = [
	{
		"usuarios":"Edu",
		"senha":"12345"
	},		
	{
		"usuarios":"Bebel",
		"senha":"54321"
	},
	{
		"usuarios":"Gui",
		"senha":"senha"
	},
	{
		"usuarios":"Juh",
		"senha":"mcquequel"
	},
	{
		"usuarios":"Santigas",
		"senha":"maurogod"
	},	
	{
		"usuarios":"Vic",
		"senha":"rogeriosene"
    }
];

function btLogin() {
	window.location = "../telaC/compras.html"
}

function carregar() {

    if (window.location.search.length > 0) {
        produtos.forEach(prod => {
            let novoProd = document.querySelector(".modelo").cloneNode(true)
            novoProd.querySelector(".prod-card-image").style.backgroundImage = "url(" + prod.imagem + ")"
            novoProd.querySelector("#prodName").innerHTML = prod.nome
            novoProd.querySelector("#prodPreco").innerHTML = prod.preco
            novoProd.classList.remove("modelo")
    
            document.querySelector(".prod-container").appendChild(novoProd)
        });

        const urlParams = new URLSearchParams(window.location.search)

        usuarios.forEach(u => {
            if (u.usuarios == urlParams.get('usuarios')) {
                document.querySelector(".nome-usuario").innerHTML = u.nome
                document.querySelector(".foto-usuario").style.backgroundImage = "url(" + u.imagem + ")"
            }
        });

        

    } else {
        window.location.href = "./login.html"
    }
}

function btLogin() {
    let usuar = document.querySelector("#usuar")
    ls = document.querySelector("#senha")
    if (usuar.value.length > 0 && senha.value.length > 0) {
        let achou = false
        usuarios.forEach(u => {
            if (u.usuarios == usuar.value && u.senha == senha.value) {
                window.location.href = "../telaC/compras.html?usuarios=" + u.usuarios
                achou = true
            }
        });
        if (!achou) {
            document.querySelector(".error").classList.remove("escondes")   
        }
    }
}