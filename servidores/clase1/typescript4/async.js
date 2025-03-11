"use strict";
//si antecedemos la palabra async a una funcion
//la funcion envuelve una promesa
/*
async function envuelvePromesa() {
    return "ok";
}
console.log(envuelvePromesa());
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function retornoPromesa() {
    return new Promise((resolve, reject) => {
        function pendiente() {
            resolve(500);
        }
        setTimeout(pendiente, 4000);
    });
}
//console.log(retornoPromesa());
//PARA USAR AWAIT LA FUNCION DEBE SER ASYNC
//await nos permite esperar el resultado de una promesa 
//detiene el hilo principal hasta que la promesa se resuelve
let asincronoEnSincrono = () => __awaiter(void 0, void 0, void 0, function* () {
    let valorPromesa = yield retornoPromesa();
    console.log(valorPromesa);
});
asincronoEnSincrono();
