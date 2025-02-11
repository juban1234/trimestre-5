const miPromesa = new Promise((resolve, reject) => {
    const exito = false;
    if (exito) {
    resolve("¡Operación completada con éxito!");
    } else {
    reject(new Error("hubo un error"));
    }
});
// Usando la promesa

miPromesa
    .then((mensaje) => {
    console.log(mensaje); //
    "¡Operación completada con éxito!"
    })
    .catch((error) => {
    console.error(error); // "Hubo un error en la operación."
});