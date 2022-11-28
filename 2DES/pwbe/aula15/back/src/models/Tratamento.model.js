const create = (model) => {
    return `INSERT INTO Tratamento VALUES(default, '${model.id_Consu}','${model.Tratamento}',${model.valor})`;
}

const update = (model) => {
    return `UPDATE Tratamento set 
    (tratamento = '${model.Tratamento}'
    valor = ${model.valor})
    where id_Trata = '${model.id_Trata}'`;
    
}

const readAll = () => {
    return `SELECT * FROM Tratamento`;
}

const del = (model) => {
    return `delete FROM Tratamento where id_Trata = '${model.id_Trata}'`;
}

module.exports = {
    update,
    create,
    readAll,
    del
}