create database base1;

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

create table familias(
id_familia int auto_increment primary key,
numero_hijo int,
foreign key(id_familia) references empleados(id_empleado));

drop table familias;

