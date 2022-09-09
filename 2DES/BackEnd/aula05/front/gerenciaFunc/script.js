const listaFuncionarios = document.querySelector("#lista-Funcionarios")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputMatricula= document.querySelector("#matricula");
const inputNome = document.querySelector("#nome");
const inputCargo = document.querySelector("#cargo");
const inputSal = document.querySelector("#salario");
const inputCPF = document.querySelector("#cpf");

const btCadedit = document.querySelector("#cadedit");

fetch("http://localhost:3000/funcionarios")
.then(res => { return res.json() })
.then(Funcionarios => {
    Funcionarios.forEach(Funcionario => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = Funcionario.matricula;
        colunas[1].innerHTML = Funcionario.nome;
        colunas[2].innerHTML = Funcionario.cargo;
        colunas[3].innerHTML = "R$ " + Funcionario.salario;
        colunas[4].innerHTML = Funcionario.cpf;

        linha.querySelector("#exclui").addEventListener("click", () => {
            modalExcluir.classList.remove("model");
            modalExcluir.querySelector("#matricula").innerHTML = Funcionario.matricula;
        })

        linha.querySelector("#edita").addEventListener("click", () => {
            modalEditar.classList.remove("model"); 
            btCadedit.innerHTML = "Editar";
            btCadedit.onclick = () => { editarFuncionario() }
            inputMatricula= document.querySelector("#matricula");
            inputNome = document.querySelector("#nome");
            inputCargo = document.querySelector("#cargo");
            inputSal = document.querySelector("#salario");
            inputCPF = document.querySelector("#cpf");
        })

        listaFuncionarios.appendChild(linha);
    });
});

function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    btCadedit.innerHTML = "Cadastrar";
    btCadedit.onclick = () => { cadastrarFuncionario(); }
    inputMatricula= document.querySelector("#matricula");
    inputNome = document.querySelector("#nome");
    inputCargo = document.querySelector("#cargo");
    inputSal = document.querySelector("#salario");
    inputCPF = document.querySelector("#cpf");
    modalEditar.classList.remove("model");
}

function editarFuncionario() {
    let Funcionario = {
        "matricula":inputMatricula.value,
        "nome":inputNome.value,
        "cargo":inputCargo.value,
        "salario":inputSal.value,
        "cpf":inputCPF.value
    }

    fetch("http://localhost:3000/funcionario", {
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(Funcionario)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("Funcionario Alterado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}

function excluirFuncionario() {
    let data = {
        "cod":document.querySelector("#cod").innerHTML
    }

    fetch("http://localhost:3000/funcionario", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("Funcionario Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir Funcionario !");
        }
    });
}

function cadastrarFuncionario() {
    let Funcionario = {
        "matricula":inputMatricula.value,
        "nome":inputNome.value,
        "cargo":inputCargo.value,
        "salario":inputSal.value,
        "cpf":inputCPF.value
    };

    fetch("http://localhost:3000/funcionarios", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(Funcionario)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.cod !== undefined){
            alert("Funcionario Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar Funcionario");
        }
     })
}