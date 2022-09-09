var cont = document.querySelector(".container");
var card = document.querySelector(".card-post");

function aluno() {

    fetch("http://localhost:5000/academia/alunos").then((response) => {
    return response.json();
    }).then((data) => {
    data.forEach(aluno => {
        let novoCard = card.cloneNode(true);
        novoCard.classList.remove("model");
    
        novoCard.querySelector("#id").append(aluno.id_aluno);
        novoCard.querySelector("#nome").append(aluno.nome);
        novoCard.querySelector("#nascimento").append(aluno.nascimento);
        novoCard.querySelector("#sexo").append(aluno.sexo);
        novoCard.querySelector("#peso").append(aluno.peso);
        novoCard.querySelector("#telefone").append(aluno.numero);

        cont.appendChild(novoCard);
        })
    });
}

function aparelho() {

    fetch("http://localhost:5000/academia/aparelhos").then((response) => {
    return response.json();
    }).then((data) => {
    data.forEach(aparel => {
        let novoApar = card.cloneNode(true);
        novoApar.classList.remove("model");
    
        novoApar.querySelector("#id_aparelho").append(aparel.id_aparelho);
        novoApar.querySelector("#aparelho").append(aparel.aparelho);

        cont.appendChild(novoApar);
        })
    });
}

function exercicio() {

    fetch("http://localhost:5000/academia/exercicios").then((response) => {
    return response.json();
    }).then((data) => {
    data.forEach(exe => {
        let novoExe = card.cloneNode(true);
        novoExe.classList.remove("model");
    
        novoExe.querySelector("#id").append(exe.Id_exercicio);
        novoExe.querySelector("#descricao").append(exe.descricao_exercicio);
        novoExe.querySelector("#grupo_muscular").append(exe.grupo_muscular);
        novoExe.querySelector("#id_aparelho").append(exe.id_aparelho);

        cont.appendChild(novoExe);
        })
    });
}

function ficha() {

    fetch("http://localhost:5000/academia/fichas").then((response) => {
    return response.json();
    }).then((data) => {
    data.forEach(fich => {
        let novoFicha = card.cloneNode(true);
        novoFicha.classList.remove("model");
    
        novoFicha.querySelector("#id_cliente").append(fich.id_cliente);
        novoFicha.querySelector("#id_exercicio").append(fich.id_exercicio);
        novoFicha.querySelector("#dia_semana").append(fich.dia_semana);
        novoFicha.querySelector("#serie").append(fich.serie);

        cont.appendChild(novoFicha);
        })
    });
}