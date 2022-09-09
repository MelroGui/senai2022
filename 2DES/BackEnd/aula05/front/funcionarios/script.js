const funcionarios = document.querySelector(".funcionarios");
const funcionario = document.querySelector(".funcionario");
const modal = document.querySelector(".modal");

fetch("http://localhost:3000/funcionarios")
.then(resp => {return resp.json()})
.then(funcionarios => {
    funcionarios.forEach(funcionario => {
        duplicarfuncionario(funcionario);
    })
});

function cadastrar() {
    let matricula = document.querySelector("#matricula").value;
    let nome = document.querySelector("#nnome").value;
    let cargo = document.querySelector("#cargo").value;
    let salario = document.querySelector("#ssalario").value;
    let cpf = document.querySelector("#cpf").value;
    
    let data = JSON.stringify({
        "matricula": matricula,
        "nome": nome,
        "cargo": cargo,
        "salario": salario,
        "cpf": cpf
    });

    fetch("http://localhost:3000/funcionarios", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp=> {return resp.json()})
    .then(data => { 
        duplicarfuncionario(data); 
        showModal();
    })
}

function showModal() {
    modal.classList.toggle("model");
}

function duplicarfuncionario(info) {
    let nFunc = funcionaio.cloneNode(true);

    nFunc.classList.remove("model");

    nFunc.querySelector("#nome").innerHTML = info.nome;
    nFunc.querySelector("#salario").innerHTML = "R$ " + info.salario;

    func.appendChild(nFunc);
}