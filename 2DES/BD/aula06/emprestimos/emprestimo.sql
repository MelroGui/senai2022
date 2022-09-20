drop database if exists Emprestimos;
create database Emprestimos charset=UTF8 collate utf8_general_ci;
use Emprestimos;

create table Clientes(
	cpf varchar(14) primary key not null,
	pri_nome varchar(30) not null,
	sobrenome varchar(30) not null,
	cep varchar(9) not null,
	complemento varchar(30)
);

create table Telefones(
	cpf varchar(14) not null,
	telefone varchar(15) not null,
	foreign key (cpf) references Clientes(cpf) on delete cascade
);

create table Emprestimos(
	id_emprestimos integer primary key auto_increment,
	data datetime not null,
	capital decimal(10,2) not null,
	impostos decimal(8,2) not null,
    n_parcelas decimal(8,2) not null,
	taxa_juros decimal(8,2) not null,
    montante decimal(8,2) not null
);

create table Parcelas(
	id_parcelas integer primary key auto_increment,
	valor decimal(8,2) not null,
	val_recebido decimal(8,2),
	pagamento decimal(8,2),
	vencimento decimal(8,2) not null,
	diferenca decimal(8,2)
);

select * from Clientes;
select * from Emprestimos;
select * from Parcelas;
select * from Telefones;

show tables;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES\BD/aula06/emprestimos/clientes.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/guim/Senai2022/2DES/BD/aula06/emprestimos/clientes.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

CREATE  TRIGGER calculos --é o nome definido pelo usuário para o novo trigger
ON  Parcelas -- é a tabela à qual o trigger se aplica.
AFTER {INSERT} --{[INSERT],[UPDATE],[DELETE]} todas as opções
 -- [NOT  FOR  REPLICATION] A opção instrui o SQL Server a não acionar o gatilho quando a modificação de dados for feita como parte de um processo de replicação.
AS
{
    BEGIN
    DECLARE
    @Valor  DECIMAL(10,2),
    @Valor_Recebido  DECIMAL(10,2),
    @Pagamento  DECIMAL(10,2),
    @Vencimento  DECIMAL(10,2),
    @Diferenca  DECIMAL(10,2),
    @Data   DATETIME

    SELECT @Data = data, @Valor = valor, @Valor_Recebido = val_recebido, @Pagamento = pagamento, @Vencimento = vencimento, @Diferenca = diferenca  FROM INSERTED

    UPDATE Parcelas SET SALDO_FINAL = SALDO_FINAL + @VALOR
    WHERE DATA = @DATA
END
}