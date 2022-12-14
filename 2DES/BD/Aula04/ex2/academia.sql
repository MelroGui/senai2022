drop database if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;

create table telefones(
    id_aluno integer not null,
    numero varchar(15) not null
);

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table exercicios(
    id_exercicio integer not null primary key auto_increment,
    DEScricao varchar(50) not null,
    grupo_muscular varchar(20) not null,
    id_aparelho integer not null
);

create table aparelhos(
    id_aparelho	integer not null primary key auto_increment,
    nome varchar(50) not null
);

create table fichas(
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(20) not null,
    série varchar(40) not null
);

alter table telefones add foreign key (id_aluno) references alunos(id_aluno);
alter table exercicios add foreign key (id_aparelho) references aparelhos(id_aparelho);
alter table fichas add foreign key (id_aluno) references alunos(id_aluno);
alter table fichas add foreign key (id_exercicio) references exercicios(id_exercicio);

DEScribe alunos;
DEScribe telefones;
DEScribe aparelhos;
DEScribe exercicios;
DEScribe fichas;

show tables;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex2/alunos.CSV'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex2/telefones.CSV'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex2/aparelhos.CSV'
INTO TABLE aparelhos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from aparelhos;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex2/exercicios.CSV'
INTO TABLE exercicios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from exercicios;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex2/fichas.CSV'
INTO TABLE fichas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from fichas;

-- Salvando a Consulta
create view vw_alunos as
select c.id_alunos, c.nome, c.nascimento, c.sexo, c.peso as telefone from alunos c
inner join telefones t
on c.id_alunos = t.id_alunos;

select * from vw_alunos;