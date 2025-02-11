//COMO sumar retorna una promesa, entonces sumar es asincrona
const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
};

//encadenar promesas
sumar(3, 5)
  .then((resultado) => {
    console.log(`El resultado es:${resultado}`); 
    return sumar(resultado, 10);
    })
  .then((nuevoResultado) => {
    console.log(`El nuevo resultado es: ${nuevoResultado}`);
  })
  .catch((error) => {
    console.error(error);
  });