use base1;

select * from empleados;
select nombre,edad from empleados where edad > 20;
select nombre,edad from empleados where edad > 20 order by edad desc;
select sum(salario) from empleados; 
select min(salario) from empleados; 
select max(salario) from empleados; 
select avg(salario) from empleados; 

select nombre ,nombre_cargo from empleados E inner join cargo C on E.cargo_emp = C.id_cargo;

select nombre,salario ,nombre_cargo from empleados E left join cargo C on E.cargo_emp = C.id_cargo;

select nombre,salario ,nombre_cargo from empleados E right join cargo C on E.cargo_emp = C.id_cargo;

select nombre,edad,salario from empleados where edad > 20 and  salario > 2000;

select * from empleados group by nombre having edad >20;

update empleados set salario= salario + 500 where id_empleado = 1;



drop procedure if exists  Pa_empleados_sueldo;

call Pa_empleados_sueldo();
call Pa_familia(2)



