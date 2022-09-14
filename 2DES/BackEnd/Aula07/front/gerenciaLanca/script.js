var uriLan = `http://localhost:5000/lancamentos`;
var tbody1 = document.querySelector(".tbody1");
var tbody2 = document.querySelector(".tbody2");
var info = document.querySelector(".info");

const modalModal = document.querySelector(".modal");
const inputData = document.querySelector("#Data");
const inputDescricao = document.querySelector("#descricaoCadastro");
const inputValor = document.querySelector("#valorCadastro");
const inputTipo = document.querySelector("#tipoSelect");

function lancamentos() { 
    fetch(uriLan).then((response) => {
    return response.json();
    }).then((data) => {
    data.forEach(lancamento => {
        if(lancamento.tipo == "D") {
        let novoLan = info.cloneNode(true);
        novoLan.classList.remove("model");
    
        novoLan.querySelector("#N_Lançamento").append(lancamento.n_lanca);
        novoLan.querySelector("#Data").append(lancamento.data.slice(0, 10));
        novoLan.querySelector("#Descrição").append(lancamento.descricao);
        novoLan.querySelector("#Valor").append(lancamento.valor);
        novoLan.querySelector("#Tipo").append("Saída");    

        tbody1.appendChild(novoLan);
    } else {
        let novoLan = info.cloneNode(true);
        novoLan.classList.remove("model");
    
        novoLan.querySelector("#N_Lançamento").append(lancamento.n_lanca);
        novoLan.querySelector("#Data").append(lancamento.data.slice(0, 10));
        novoLan.querySelector("#Descrição").append(lancamento.descricao);
        novoLan.querySelector("#Valor").append(lancamento.valor);
        novoLan.querySelector("#Tipo").append("Entrada");   

        tbody2.appendChild(novoLan);
    }
        })
    });
}

function fecharModalCadastro(){
    modalModal.classList.add("model");
}

function abrirModalCadastro() {
    modalModal.classList.remove("model");
}

function cadastrarLancamento() {
    let produto = {
        "data": inputData.value,
        "descricao": inputDescricao.value,
        "valor": inputValor.value,
        "tipo": inputTipo.value,
    };
    console.log(inputTipo.value);

    fetch('http://localhost:5000/lancamento', {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(produto)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp !== undefined){
            alert("Venda Cadastrada Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar venda");
        }
     });
}