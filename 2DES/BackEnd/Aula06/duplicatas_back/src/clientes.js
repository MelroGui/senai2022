const clientes = (lista) => {
    //para cada elemento da lista removemos os campos tipo telefone e criamos uma subçista telefones
    lista.forEach(e=>{
        e.telefones  = [];
        let tel = {};
        tel.tipo = e.tipo;
        tel.numero = e.telefone;
        e.telefones.push(tel);
        delete e.tipo;
        delete e.telefone;
    });

    //criar uma nova lista sem os dados duplicados  
    let liAux  = [];//Lista Auxiliar
    let lasInd = 0//Ultimo indece da pilha
 liAux.push(lista[lasInd])//Acrecente o primeiro item da liAux
    for(i = 1; i < lista.length; i++) {
        if(lista[i].cod_cli == lista[i-1].cod_cli) {//Se o proxímo for igual ao primeiro
            let tel = {};//Novo objeto telefone
            tel.tipo = lista[i].telefones[0].tipo;
            tel.numero = lista[i].telefones[0].numero;
         liAux[lasInd].telefones.push(tel);//Arecento soemnte um novo objeto telefone
        }else {//Senão acrecenta o novo item na lista e incrementa o indece
         liAux.push(lista[i]);
            lasInd++;
        }
    }
    return liAux;//Retornamos a nova lista sem os duplicados e com os telefones
}

module.exports = {
    clientes
}