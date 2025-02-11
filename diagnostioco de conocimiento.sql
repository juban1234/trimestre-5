use base1;

-- 1 realizar 2 tablas con tres campos y realizar 5  inserciones ,numerico ,nombre ,documento y que esten unidas

create table empleados(
id_empleado int auto_increment primary key,
nombre varchar(20),
edad int,
cargo_emp int, 
salario float,
FOREIGN KEY (cargo_emp) REFERENCES Cargo(id_cargo)
);

create table cargo(
id_cargo int primary key,
nombre_cargo varchar(20));

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





