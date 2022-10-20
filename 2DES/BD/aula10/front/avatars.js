const uri = 'http://localhost:4500/avatars';
const avatars = document.querySelector("#avatars");
var dados = [];

function carregar() {
    const options = { method: 'GET' };
    fetch(uri, options)
        .then(resp => resp.json())
        .then(resp => {
            dados = resp;
            montarCards();
        })
        .catch(err => alert("Erro ao carregar dados do BD:" + err));
}

function montarCards() {
    dados.forEach(e => {
        let card = document.createElement("div");
        let id = document.createElement("div");
        let nome = document.createElement("div");
        let endereco = document.createElement("div");
        let telefone = document.createElement("div");
        let foto = document.createElement("img");
        card.setAttribute('class', 'card');
        id.innerHTML = `<h4>Id: ${e.id}</h4> <button onclick='excluirAvatar(${e.id})'>-</button>`;
        endereco.innerHTML = `<b>endereco:</b> ${e.endereco}`;
        nome.innerHTML = `<b>Nome:</b> ${e.nome}`;
        telefone.innerHTML = `<b>telefone:</b> ${e.telefone}`;
        foto.setAttribute('src', montaImg(e.foto));
        card.appendChild(id);
        card.appendChild(nome);
        card.appendChild(endereco);
        card.appendChild(telefone);
        card.appendChild(foto);
        avatars.appendChild(card);
    });
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}

function excluirAvatar(id) {
    if (confirm("Confirma a exclusão da avatar id: " + id)) {
        const body = {
            "id": id
        }
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body);
        fetch(uri, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200) {
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados, Erro:" + err));
    }
}