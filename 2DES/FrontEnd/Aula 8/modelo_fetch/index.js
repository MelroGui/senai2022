fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach(clientes => {
    var itensTarefa = document.querySelector(".itemclientes");

    clientes acesso() {
        clientes.forEach(clientes => {
            let novoItem = itemclientes.cloneNode(true);

            novoItem.classList.remove("modelo");

            novoItem.querySelector("#userId").innerHTML = clientes.userId;
            novoItem.querySelector("#title").innerHTML = clientes.title;
            novoItem.querySelector("#completed").innerHTML = clientes.completed;

            document.querySelector(".clientes").appendChild(novoItem);
            
            if(clientes.completed === "true"){
                novoItem.querySelector("#completed").innerHTML = document.
            
            } else {
                novoItem.querySelector("#completed").innerHTML = 
            }
            
            novoItem.querySelector("#autorizacao-lista").innerHTML = clientes.autorizado
        });
    }
    })
})