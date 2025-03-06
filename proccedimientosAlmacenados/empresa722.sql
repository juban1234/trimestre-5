create database empresa722;
use empresa722;


create table empleados(
documento char(8),
nombre varchar(20),
apellido varchar(20),
sueldo decimal(6,2),
cantidadhijos int,
seccion varchar(20),
primary key(documento)
);

drop procedure if exists pa_empleados_sueldo;

delimiter //
create procedure  pa_empleados_sueldo()
begin
	select nombre,apellido,sueldo from empleados;
end // 
delimiter ;

call pa_empleados_sueldo();

drop procedure if exists pa_empleados_hijos;

delimiter // 
create procedure pa_empleados_hijos()
begin
	select  nombre,apellido,cantidadhijos from empleados ;
end //
delimiter ; 

call pa_empleados_hijos;

delimiter //
create procedure pa_promedioSueldo()
begin
	select avg(sueldo) as promedio_sueldo from empleados;
end //
delimiter ;

call pa_promedioSueldo;








