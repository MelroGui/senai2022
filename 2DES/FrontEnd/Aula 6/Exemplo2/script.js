var carrinho = [
    {
        "img":"./assets/sapatos-feios.jpeg",
        "nome":"Tênis Naik Jair Jordão",
        "qntd":2
    },
    {
        "img":"./assets/crocks.jpg",
        "nome":"Chinelo Ardidas",
        "qntd":1
    },
    {
        "img":"./assets/shorts.jpg",
        "nome":"Berma Puma",
        "qntd":3
    },
    {
        "img":"./assets/peita-lala.jpg",
        "nome":"Peita Jaré",
        "qntd":5
    }
];

var itemCarrinho = document.querySelector(".item-carrinho");

function carregar() {
    carrinho.forEach(item => {
        let novoItem = itemCarrinho.cloneNode(true);

        novoItem.classList.remove("modelo");

        novoItem.querySelector("#img-item").src = item.img;
        novoItem.querySelector("#nome-item").innerHTML = item.nome;
        novoItem.querySelector("#qntd-item").value = item.qntd;

        document.querySelector(".carrinho").appendChild(novoItem);
    });
}

function removerItem(e) {
    e.parentNode.remove();
}