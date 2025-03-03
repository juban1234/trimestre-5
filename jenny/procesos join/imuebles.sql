use taller1;

-- 1. Obtener todos los inmuebles con su dirección y vendedor
select  
   i.id_mueble, i.tipo, i.superficie, i.numHabitaciones, d.calle, d.ciudad, d.codigo_postal, v.nombre AS vendedor_nombre, v.apellido AS vendedor_apellido, v.email AS vendedor_email
from Inmueble i 
right join direccion d on i.id_mueble = d.id_mueble
right join vendedor v on i.id_mueble = d.id_mueble
right join datosVenta dv on i.id_mueble = dv.id_mueble;

-- 2 Obtener los inmuebles vendidos en un rango de fechas
SELECT 
    I.id_mueble, 
    I.tipo, 
    I.superficie, 
    I.numHabitaciones, 
    DV.fechaVenta, 
    DV.precioVenta
FROM 
    datosVenta DV
JOIN 
    Inmueble I ON DV.id_mueble = I.id_mueble
WHERE 
    DV.fechaVenta BETWEEN '2025-01-01' AND '2025-03-01';

-- 3 Obtener los inmuebles de un vendedor específico
select * from inmueble i right join datosventa dv on i.id_mueble = dv.id_mueble where id_venta = 1 ;

-- 4 Obtener la dirección de un inmueble específico
select i.id_mueble ,i.tipo as tipoImueble , d.calle, d.ciudad ,d.codigo_postal  
from inmueble i inner join direccion d on i.id_mueble = d.id_mueble where i.id_mueble = 1 ; 

-- 5 Obtener el precio más alto y bajo de venta






