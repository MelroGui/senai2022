-- = Comentário
-- Exclui se existir
drop database if exists pedidos;
-- Cria novo com padrao utf8 de caracteres
create database pedidos charset=UTF8 collate utf8_general_ci;
-- acessa a tabela
use pedidos;
-- DDL Criação da estrutura do Banco de Dados
Create table clientes(
    id_clientes integer not null primary key auto_increment,
    priNome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco  varchar(100) not null
);
create table telefones(
    id_clientes integer not null,
    telefone varchar(15) not null,
    foreign key (id_clientes) references clientes(id_clientes)
);
create table pedidos(
    num_pedidos integer not null primary key auto_increment,
    id_clientes integer not null,
    data timestamp not null,
    valor decimal(8,2) not null,
    descricao varchar(50) not null,
    quantidade integer(4) not null,
    foreign key (id_clientes) references clientes(id_clientes)
);

describe clientes;
describe telefones;
describe pedidos;
show tables;

-- DML Alimentar o banco de dados de teste
insert into clientes VALUES
(null,"jorge","silva","Rua Bueno Bueno - Jaguariúna - SP"),
(null,"Miguel","Bueno","Rua Coisa Bueno - Jaguariúna - SP"),
(null,"Gabriel","Alves","Rua Coisa Bueno - Jaguariúna - SP"),
(null,"Guilherme","Melro","Rua Adalberto Bueno - Jaguariúna - SP");


insert into telefones values
(1"19 116268-6770"),
(1"19 172698-5312"),
(2"19 180739-9554"),
(2"19 123129-2564"),
(3"19 607564-4354");

insert into pedidos VALUES
(null, 1,2,10, "Pastel do China",2);
(null, 1,2,10, "Big Big",2);
(null, 1,2,10, "Torre de Chopp",2);
(null, 1,2,10, "Bolinho de Arroz",2);
(null, 1,2,10, "Chimexi",2);
(null, 1,2,10, "Self-Serve",2);

select * from clientes;
select * from telefones;