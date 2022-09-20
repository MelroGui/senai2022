drop database if exists Pizzaria;
create database Pizzaria charset=UTF8 collate utf8_general_ci;
use Pizzaria;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    telefone varchar(15) not null,
    nome varchar(30) not null,
    logradouro varchar(30) not null,
    numero decimal(5,0) not null,
    complemento varchar(30) not null,
    bairro varchar(30) not null,
    referencia varchar(30) not null
);

create table pedidos(
    id_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data datetime not null,
    valor decimal(5,2) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table pizza(
    id_pizza integer not null primary key auto_increment,
    nome varchar(30) not null,
    descricao varchar(30) not null,
    valor decimal(4,2) not null
);

create table item_pedidos(
    id_pizza integer not null,
    id_pedido integer not null,
    qntd decimal(2,0),
    valor decimal(5,2) not null,
    foreign key (id_pizza) references pizza(id_pizza),
    foreign key (id_pedido) references pedidos(id_pedido)
);

describe clientes;
describe pedidos;
describe pizza;
describe item_pedidos;

show tables;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/BD/aula06/pizza/Pasta1.CSV'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/BD/aula06/pizza/'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;