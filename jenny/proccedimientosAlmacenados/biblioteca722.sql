create database biblioteca722;
use biblioteca722;
drop table if exists libros;

 create table libros(
  codigo int auto_increment,
  titulo varchar(40),
  autor varchar(30),
  editorial varchar(20),
  precio decimal(5,2),
  primary key(codigo) 
 );
  
  -- Realizar un procedimiento almacenado donde consulte titulo, editorial y precio del libro según sea su autor.
delimiter //
create procedure pa_libros_autor(in id varchar(30))
begin
  select titulo,editorial,precio from libros where id = autor;
end // 
delimiter ;

 drop procedure if exists pa_libros_autor;
 
 -- Llama al procedimiento almacenado
call pa_libros_autor("Richard Bach");

 
 /*crear un procedimiento almacenado que busque 
 el titulo del libro y su precio según sea su autor y editorial*/
 
delimiter //
create procedure pa_libros_autorEditorial(in id varchar(30) ,in id_editor varchar(20))
begin
  select titulo,precio from libros where id = autor && id_editor = editorial;
end // 
delimiter ;
 
 drop procedure pa_libros_autorEditorial;
 
-- Llamar al procedimiento almacenado creado
call  pa_libros_autorEditorial("Richard Bach","Planeta");

/*con esta misma tabla  crear un procedimiento almacenado con un parámetro
de entrada mostrando al autor y precio del libro 
y otro con tres parámetros de entrada mostrando el precio del libro*/ 

DELIMITER //

CREATE PROCEDURE obtenerPrecioLibro(IN p_codigo INT, IN p_titulo VARCHAR(40), IN p_editorial VARCHAR(20))
BEGIN
    SELECT precio
    FROM libros
    WHERE codigo = p_codigo && titulo = p_titulo && editorial = p_editorial;
END //
DELIMITER ;


CALL obtenerPrecioLibro(1, "Uno", "Planeta");



