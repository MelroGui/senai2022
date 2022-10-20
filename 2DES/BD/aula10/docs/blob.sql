drop database if exists armazena_avatars;
create database armazena_avatars charset = UTF8 collate = utf8_general_ci;
use armazena_avatars;
create table avatars(
	 id integer primary key not null auto_increment,
	 nome varchar(50) not null,
	 endereco varchar(100) not null,
	 telefone varchar(15) not null,
	 avatar mediumblob
);

insert into avatars values (null,"Miguel Fala Feia", "Rua Angelo Costa Lima", "(19) 97109-1267" ,load_file("D:/guim/Senai2022/2DES/BD/aula10/blobPeople/pepo.jpg"));
insert into avatars values (null,"Bolsoniro", "Rua Antonio Fante", "(19) 97109-1267" ,load_file("D:/guim/Senai2022/2DES/BD/aula10/blobPeople/pepo.png"));
insert into avatars values (null,"Ambrozio", "Rua Felix Moreira", "(19) 97109-1267" ,load_file("D:/guim/Senai2022/2DES/BD/aula10/blobPeople/pepo1.png"));
insert into avatars values (null,"Roberto Injusto", "ジャパニーズストリート", "(19) 97109-1267" ,load_file("D:/guim/Senai2022/2DES/BD/aula10/blobPeople/pepo2.png"));

select id, tipo from avatars;

select avatar into dumpfile "D:/guim/Senai2022/2DES/BD/aula10/blobresult/file1.jpg" from avatars where id = 1;
select avatar into dumpfile "D:/guim/Senai2022/2DES/BD/aula10/blobresult/file2.png" from avatars where id = 2;
select avatar into dumpfile "D:/guim/Senai2022/2DES/BD/aula10/blobresult/file3.txt" from avatars where id = 3;
select avatar into dumpfile "D:/guim/Senai2022/2DES/BD/aula10/blobresult/file4.docx" from avatars where id = 4;

select * from avatars;