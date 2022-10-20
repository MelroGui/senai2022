const toCreate = (dados,file) =>{
    if (file != null){
        dados.foto = file.buffer.toString('base64');
        return `insert into avatars values (default,'${dados.nome}','${dados.endereco}','${dados.telefones}','${dados.foto}')`;
    }else
        return `insert into avatars values (default,'${dados.nome}','${dados.endereco}','${dados.telefones}',null)`;
}

const toReadAll = ()=>{
    return "select * from avatars order by id desc";
}

const toDel = (dados)=>{
    return `delete from avatars where id = ${dados.id}`
}

const toAscii = (dados)=>{
    dados.forEach(d => {
        if(d.foto != null) d.foto = d.foto.toString('ascii');
    });
    return dados;
}

module.exports = {
    toCreate,
    toReadAll,
    toDel,
    toAscii
}