delimiter //
create procedure Pa_busqueda_aut(in autor_p varchar(30))
begin
	select titulo,editorial,precio from libros
    where autor = autor_p;
end//
delimiter ;

delimiter //
create procedure Pa_busqueda(in autor_p varchar(30) , in editorial_p varchar(28))
begin
	select titulo,precio from libros
    where autor = autor_p or editorial = editorial_p;
end//
delimiter ;

