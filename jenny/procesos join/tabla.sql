create database taller1;
use taller1;

create table Inmueble(
id_mueble int primary key,
tipo varchar(50),
superficie decimal(10 ,2),
numHabitaciones int
);

create table vendedor(
id_vendedor int primary key,
nombre varchar(50),
apellido varchar(50),
email varchar(100)
);

create table direccion(
id_direccion int primary key,
calle varchar(100),
ciudad varchar (50),
codigo_postal varchar(50),
id_mueble int,
foreign key (id_mueble) references Inmueble(id_mueble)
);


create table datosVenta(
id_venta int primary key,
fechaVenta date,
precioVenta decimal(15, 2),
id_mueble int,
id_vendedor int,
foreign key (id_mueble) references Inmueble(id_mueble),
foreign key (id_vendedor) references vendedor(id_vendedor)
);




