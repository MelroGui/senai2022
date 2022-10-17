const uri = 'http://localhost:3000/solicitacoes/dept';


function carregar() {
    const options = { method: 'GET' };

    fetch(uri, options)
        .then(resp => resp.json())
        .then(resp => {
            data = resp;
            preecherTabela();
        })
        .catch(err => console.error(err));
}

function cadastrar() {

    let body = {
        "codigo": document.getElementById("Cod_dep").value,
        "nome": document.getElementById("Nome_dep").value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body);
    if (body.codigo.length > 0 && body.nome.length > 0) {
        fetch(uri, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert("Departamento cadastrado com sucesso");
                    window.location.reload();
                } else {
                    alert("Erro ao enviar dados.");
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados. Erro:" + err));
    }else{
        alert("Preencha todos os campos obrigatórios");
    }
}