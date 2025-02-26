//DEFINICION DE UNA PROMESA
const miPromesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve("¡Operación completada con éxito!");
    } else {
        reject("Hubo un error en la operación.");
    }
});

// Usando la promesa
miPromesa.then((valor) => {
    console.log(valor);
}).catch((error) => {
    console.error(error);
});

console.log("Hola Vank");

    