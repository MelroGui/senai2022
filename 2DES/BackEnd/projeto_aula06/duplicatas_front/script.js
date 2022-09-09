var uriCli = `http://localhost:3000/duplicatas/clientes`;
var clientes = [];
var item = document.querySelector(".item");
var tele = document.querySelector(".tele");
var cli = document.querySelector(".cli");
var tel = document.querySelector(".tel");
var modelo = document.querySelector(".modelo");
const modais = document.querySelector("#modais");
const modalTels = document.querySelector("#modalTels");
const telefones = document.querySelector("#telefones"); 
// const modal = document.querySelector(".modal");

function clientes() { 
    fetch(uriCli).then((response) => {
    return response.json();
    }).then((data) => {
        let indice = 0;
    data.forEach(clientes => {
        let novoCli = cli.cloneNode(true);
        novoCli.classList.remove("modelo");
    
        novoCli.querySelector("#cod_cli").append(clientes.cod_cli);
        novoCli.querySelector("#nome").append(clientes.nome);
        novoCli.querySelector("#endereco").append(clientes.endereco);
        novoCli.querySelector("#bairro").append(clientes.bairro);
        novoCli.querySelector("#cidade").append(clientes.cidade);
        novoCli.querySelector("#uf").append(clientes.uf);    

        item.appendChild(novoCli);
        indice++;
        })
    });
}

function buscar(indice) {
    modais.setAttribute("style","display:flex;");
    modalTels.setAttribute("style","display:flex;");
    fetch(uriCli).then((response) => {
    return response.json();
    }).then((data) => {
        data.forEach(telefone => {

        let novoTel = tel.cloneNode(true);
        novoTel.classList.remove("modelo");

        novoTel.querySelector("#cod_cliente").append(telefone.cod_cli);
        novoTel.querySelector('#tipo').append(telefone.telefones.tipo);
        novoTel.querySelector('#numero').append(telefone.telefones.numero);
        tel.innerHTML = `onclick='mostraTels(${indice})'/>`

        tele.appendChild(novoTel);
        console.log(indice);

        })
    });
}