drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;

-- DDL Criação da estrutura do Banco de Dados

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table telefones(
    id_cliente integer not null,
    numero varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe telefones;
describe clientes;
show tables;

-- DML Importação dos dados das planilhas do Excel
-- Importação manual
insert into clientes values(1,"Ana de Souza de Oliveira","2000-05-22","M",65.5);
insert into clientes values(2,"Ana Oliveira Oliveira","1990-08-23","T",88);
insert into clientes values(3,"Lúcia da Silva de Souza","1988-06-14","F",45.5);
insert into clientes values(4,"Marcos de Souza Castro","2002-07-13","M",98);
insert into clientes values(5,"Maria Oliveira Castro","2005-08-14","T",101);
insert into clientes values(6,"Jurema de Souza Castro","2007-06-15","F",80);

select * from clientes;

-- Importação de arquivos CSV
LOAD DATA INFILE 'D:/Senai2022/2DES/BD/Aula04/ex1/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

-- DQL - Data Query Language - Linguagem de Consulta de dados (Comandos Básicos)
select * from clientes where id_cliente = 3;
select * from clientes where nome = "Ana Oliveira Oliveira";
select * from clientes where nome like "Ana%";
select * from clientes where nome like "%Castro";
select * from clientes where nome like "%Oliveira%";
select * from clientes where peso > 90 AND nome like "%Oliveira%";

-- DQL Junção de tabelas
select * from clientes join telefones on clientes.id_cliente = telefones.id_cliente;
select * from clientes c join telefones t on c.id_cliente = t.id_cliente;

select * from clientes c
join telefones t
on c.id_cliente = t.id_cliente;

-- JOIN = INNER, LEFT, RIGHT

insert into clientes values (null,"11122233311","Marcelo","13458777","1A","Fundos");
-- Exemplo de inner
select * from clientes c
inner join telefones t00000
on c.id_cliente = t.id_cliente;
-- Exemplo de Left
select * from clientes c
left join telefones t
on c.id_cliente = t.id_cliente;
-- Exemplo de Right
select * from telefones t
right join clientes c
on c.id_cliente = t.id_cliente;

-- Salvando a Consulta
create view vw_clientes as
select c.id_cliente, c.cpf, c.nome, c.cep, c.numero, c.complemento, t.numero as telefone from clientes c
inner join telefones t
on c.id_cliente = t.id_cliente;

select * from vw_clientes;