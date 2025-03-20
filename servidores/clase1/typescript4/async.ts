//si antecedemos la palabra async a una funcion
//la funcion envuelve una promesa
/*
async function envuelvePromesa() {
    return "ok";
}
console.log(envuelvePromesa());
*/

function retornoPromesa(){
    return new Promise((resolve, reject) => {
        function pendiente() {
            resolve(500);
        }
        setTimeout(pendiente, 4000)
    })
}

//console.log(retornoPromesa());


//PARA USAR AWAIT LA FUNCION DEBE SER ASYNC
//await nos permite esperar el resultado de una promesa 
//detiene el hilo principal hasta que la promesa se resuelve
let asincronoEnSincrono = async () => {
    let valorPromesa = await retornoPromesa()
    console.log(valorPromesa);
}

asincronoEnSincrono();


