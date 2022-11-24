drop database if exists Hospital;
create database Hospital charset=utf8 collate utf8_general_ci;
use Hospital;

create table Profissional(
    id_Prof integer not null auto_increment primary key,
    nome varchar(30) not null,
    especialidade varchar(30) not null
);

create table Consulta(
    id_Consu integer not null auto_increment primary key,
    paciente varchar(30) not null,
    data date not null,
    horario time not null,
    id_Prof integer not null,
    foreign key (id_Prof) references Profissional(id_Prof)
);

create table Tratamento(
    id_Trata integer not null auto_increment primary key,
    id_Consu integer not null,
    Tratamento varchar(30) not null,
    valor decimal(10,2) not null,
    foreign key (id_Consu) references Consulta(id_Consu)
);

describe Profissional;
describe Consulta;
describe Tratamento;
show tables;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/pwbe/aula15/docs/profissionais.csv'
INTO TABLE Profissional
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from Profissional;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/pwbe/aula15/docs/consultas.csv'
INTO TABLE Consulta
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from Consulta;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/pwbe/aula15/docs/tratamentos.csv'
INTO TABLE Tratamento
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from Tratamento;

create view vw_Consulta as
select p.id_Prof, p.nome, p.especialidade, c.paciente, c.data, c.horario, t.id_Trata, t.id_Consu, t.tratamento, t.valor
from Consulta c
inner join Profissional p on c.id_Prof = p.id_Prof
inner join Tratamento t on c.id_Consu = t.id_Consu;

select * from vw_Consulta;