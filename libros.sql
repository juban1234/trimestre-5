create database biblioteca;
use biblioteca;

create table libros(
codigo int auto_increment,
titulo varchar(40),
autor varchar(30),
editorial varchar(28),
precio decimal(5,2),
primary key (codigo));


call Pa_busqueda_aut("miguel");
call Pa_busqueda("miguel","hoyover");


delimiter // 
create procedure Pa_numeros(in codigo_n int)
begin
	select 
end//
delimiter ;
