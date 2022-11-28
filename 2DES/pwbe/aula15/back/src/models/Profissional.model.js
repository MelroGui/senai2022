const readAll = () => {
    return `SELECT * FROM Profissional`;
}

const readProf = (model) => {
    return `SELECT * FROM Profissional where id_Prof = '${model.id_Prof}'`;
}

module.exports = {
    readAll,
    readProf
}