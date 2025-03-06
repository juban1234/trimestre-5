console.log("-----------PROMISE.ALL");

const promesa1 = Promise.resolve(5);
const promesa2 = new Promise((resolve) => setTimeout(resolve, 2000, 10));
const promesa3 = Promise.resolve(15);

//el argumento de Promise.all es un arreglo de promesas
Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // [5, 10, 15]
  }).catch((error) => {
    console.log(error);
  })

console.log("-----------PROMISE.RACE");

const promesaRapida = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa rápida resuelta en 1 segundo"), 1000);
});
const promesaLenta = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa lenta resuelta en 3 segundos"), 3000);
});
const promesaMuyLenta = new Promise((resolve) => {
    setTimeout(() => resolve("Promesa muy lenta resuelta en 5 segundos"), 5000);
});


Promise.race([promesaRapida, promesaLenta, promesaMuyLenta])
  .then((resultado) => {
    console.log(resultado); // "Promesarápida resuelta en 1 segundo"
  })
  .catch((error) => {
    console.error(error);
  });