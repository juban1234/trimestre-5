//el resolve se ejecuta cuando la promesa se cumple
//e reject se ejecuta cuando la promesa se rechaza
//esta promesa siempre se cumple ya que solo usa en el bloque de
//instrucciones el resolve
let promesa1 = new Promise((resolve, reject) => {
    //aca el valor de resolucion es la cadena Hola ADSI NOCHE 2021
    resolve("Hola ADSI NOCHE 2021");
})
//con el metodo then capturamos el valor de resolucion de la promesa
promesa1.then((res) => {
    console.log("El valor de resolucion de la promesa es:", res);
})


//promesa que siempre se rechaza
let promesa2 = new Promise((resolve, reject) => {
    reject("Ha ocurrido un error en la descarga")
})
//con el metodo catch capturamos la razon del rechazo de la promesa
promesa2.catch((err) => {
    console.log("la razon del rechazo:", err);
})

//control de la promesa
let edad = 40;
//promesa que puede ser cumplida o rechazada
let promesa3 = new Promise((resolve, reject) => {
    if (edad >= 18){
        resolve("La persona es mayor de edad y cumple los requisitos");
    }
    reject(new Error('La persona es menor de edad, no cumple los requisitos'));
})
//usamos then y catch para controlr el rechazo o resolucion de la promesa
promesa3.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
})

