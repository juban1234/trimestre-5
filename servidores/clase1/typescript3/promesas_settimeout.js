"use strict";
//promesa que se resuelve al cabo de 4 segundos al ejecutra la
//funcion imprimir
let promesa70 = new Promise((resolve, reject) => {
    function imprimir() {
        console.log("Somos ADSI");
        resolve("ok");
    }
    setTimeout(imprimir, 4000);
});
promesa70.then((res) => {
    console.log("Valor de resolucion: ", res);
}).catch((err) => {
    console.log(err);
});
//promesa que se cumple o se rechaza de acuerdo al tiempo de
//cada settimeout
let promesa80 = new Promise((resolve, reject) => {
    function habilitado() {
        resolve("Usuario habilitado");
    }
    setTimeout(habilitado, 2000);
    function inhabilitado() {
        reject(new Error("Usuario inhabilitado"));
    }
    setTimeout(inhabilitado, 1000);
});
promesa80.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
});
