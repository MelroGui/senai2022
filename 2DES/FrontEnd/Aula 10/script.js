var logradouro = document.querySelector("#logradouro");
var bairro = document.querySelector("#bairro");
var cidade = document.querySelector("#cidade");
var estado = document.querySelector("#estado");

function validarCEP(e) {
    if (e != null) {
        validaCEP = /^[0-9]{8}$/
    } if (e == validaCEP) {
        fetch("https://viacep.com.br/ws/"${ e.value }"/json/")
            .then(response => return response.json());
            }.then((data) => {
                data.forEach(users => {
                })
            })
    }
}