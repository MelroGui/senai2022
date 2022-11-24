const create = (model) => {
    return `INSERT INTO Tratamento VALUES(${model.Cod_Produto},'${model.Nome_produto}')`;
}

const update = (model) => {
    return `UPDATE * FROM Tratamento VALUES(${model.cod_produto},'${model.nome_produto}')`;
}

const readAll = () => {
    return `SELECT * FROM Tratamento`;
}

const del = () => {
    return `delete * FROM Tratamento where id_Trata`;
}

module.exports = {
    update,
    create,
    readAll,
    del
}