create database Pruevajoin;

use Pruevajoin;

create table clientes(
cliente_id int auto_increment primary key,
nombre varchar(20) not null
);

create table pedidos(
pedido_id int auto_increment primary key,
cliente_id int not null,
fecha date not null,
foreign key(cliente_id ) references clientes(cliente_id)
);

select c.nombre, p.pedido_id, p.cliente_id from clientes c left join pedidos p on c.cliente_id = p.cliente_id
union
select c.nombre, p.pedido_id, p.cliente_id from clientes c right join pedidos p on c.cliente_id = p.cliente_id;



create table empleado(
id_empleado int primary key,
nombre varchar(50),
apellido varchar(50),
id_puesto int
);

create table puesto_trabajo(
id_puesto int primary key,
nombre_puesto varchar(20),
salario decimal(5,2)
);

create table cargo(
id_cargo int primary key,
nombre_cargo varchar(50),
id_puesto int
);

drop table empleado;

-- esta consulta permite sacar el promedio de el salario de los empleados ,cuenta la cantidad de empleados  y los nombres de los puestos
select pt.nombre_puesto, avg(pt.salario) as salario_promedio, count(e.id_empleado) as cantidad_empleados
from empleado e inner join puesto_trabajo pt on e.id_puesto = pt.id_puesto group by pt.nombre_puesto;


-- esta selecciona , el nombre , el apellido, el salario, y el puesto de trabajo filtrando los resultados por el salario y por el cago de trabajo
select e.nombre, e.apellido , pt.nombre_puesto, pt.salario, c.nombre_cargo from empleado e 
inner join puesto_trabajo pt on e.id_puesto = pt.id_puesto
left join cargo c on pt.id_puesto = c.id_puesto
where pt.salario between 300 and 500 and  c.nombre_cargo in ('director general' ,'jefe de departamento');






  
  
  