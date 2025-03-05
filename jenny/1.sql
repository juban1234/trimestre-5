use base1;

delimiter //
create procedure PA_consulEmple()
Begin
	select * from empleados;
End //
delimiter ; 

call PA_consulEmple();


delimiter $$
create procedure  PA_getEmpleados(in id_empleado int)
begin
	select * from empleados where id = id_empleado;
end $$
delimiter ;

drop procedure PA_getEmpleado;

call PA_getEmpleados(1);


delimiter //
create procedure Pa_empleados_sueldo()
begin
	select nombre,salario from empleados;
end//
delimiter ; 


delimiter //
create procedure Pa_familia(in id_empleado int)
begin
	select nombre,numero_hijo from empleados E inner join familias F on E.id_empleado = F.id_familia;
end//
delimiter ;