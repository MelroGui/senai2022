drop database if exists onibus;
create database onibus charset=UTF8 collate utf8_general_ci;
use onibus;

create table motoristas(
    cpf varchar(11) not null primary key,
    nome varchar(50) not null
);
create table telefones(
    cpf varchar(11) not null,
    numero varchar(15) not null,
    foreign key (cpf) references motoristas(cpf)
);
create table linhas(
    id_linha varchar(10) not null primary key,
    descricao varchar(50) not null
);
create table horarios(
    id_linha varchar(10) not null,
    horario time not null,
    foreign key (id_linha) references linhas(id_linha)
);
create table mot_linhas(
    cpf varchar(11) not null,
    id_linha varchar(10) not null,
    data date not null,
    foreign key (cpf) references motoristas(cpf),
    foreign key (id_linha) references linhas(id_linha)
);

describe motoristas;
describe telefones;
describe linhas;
describe horarios;
describe mot_linhas;

show tables;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex3/motorista.CSV'
INTO TABLE motoristas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from motoristas;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex3/telefones.CSV'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex3/linhas.CSV'
INTO TABLE linhas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from linhas;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex3/horarios.CSV'
INTO TABLE horarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from horarios;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex3/mot_linha.CSV'
INTO TABLE mot_linhas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from mot_linhas;

-- Salvando a Consulta
create view vw_motorista as
select m.cpf, m.nome, t.numero from motoristas m
inner join telefones t
on m.cpf = t.cpf;

select * from vw_motorista;