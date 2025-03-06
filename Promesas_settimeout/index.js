const esperar = (milisegundos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperado ${milisegundos} ms`);
    }, milisegundos);
  });
};

esperar(2000).then((mensaje) => {
  console.log(mensaje); // "Esperado 2000 ms"
}).catch((error) => {
  console.error(error);
});