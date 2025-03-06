const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(4); // Resuelve con el valor 4 después de 1 segundo
    }, 1000);
});

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5); // Resuelve con el valor 5 después de 2 segundos
    }, 2000);
});

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6); // Resuelve con el valor 6 después de 3 segundos
    }, 3000);
});

// Esta función calcula la multiplicación de los resultados de promesa1 y promesa2
function promesas() {
    return Promise.all([promesa1, promesa2])
        .then((resultados) => {
            return resultados[0] * resultados[1]; // Multiplica los resultados de promesa1 y promesa2
        });
}

// Usamos Promise.all para esperar a que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3, promesas()])
    .then((resultado) => {
        console.log(resultado); // Imprime el array con los resultados de todas las promesas
    })
    .catch((error) => {
        console.error(error); // Captura cualquier error
    });
