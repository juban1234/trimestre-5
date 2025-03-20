let promesa_120 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 120");
    }
    setTimeout(resolver, 2000);
})

let promesa_150 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 150");
    }
    setTimeout(resolver, 4000);
})

let promesa_200 = new Promise((resolve, reject) => {
    function resolver() {
        resolve("soy la promesa 200");
    }
    setTimeout(resolver, 5000);
})

//.all ejecuta las promesas que se pasen dentro del arreglo argumento,
//.then se ejecutara unicamente cuando las tres promesas hayan sido 
//resueltas. Si ocurre un error lo capturamos con .catch
Promise.all([promesa_120, promesa_150, promesa_200])
//cuando las promesas se resuelven todas, .all nos devuelve un arreglo
//de resultados de resolucion(un arreglo de resolve)
.then((array) => {
   array.forEach((elemento) => {
       console.log("Valor de resolucion: ", elemento);
   })
}).catch((err) => {
    console.log(err);
})

//.race ejecuta las promesas paralelamente pero solo .then se
//ejecutara cuando la promesa mas rapida termine, pasando su
//valor de resolucion como argumento del .then
Promise.race([promesa_120, promesa_150, promesa_200])
.then((resultado) => {
    console.log("La ganadora es: ", resultado);
})
