"use strict";
class Persona {
    constructor(peso, nombre, identificacion) {
        this.peso = peso;
        this.nombre = nombre;
        this.identificacion = identificacion;
    }
    saludar() {
        if (Persona.region == "pacifico") {
            console.log("Saludando a ADSO 682");
        }
    }
    static despedirse() {
        console.log("Hasta el miercolesADSO 682");
    }
}
//propiedad de la clase(estatica)
Persona.region = "pacifico";
let instanciaPersona = new Persona(65, "Pepe", "723754236");
let instanciaPersona2 = new Persona(80, "Maria", "567876");
console.log("Peso ", instanciaPersona.peso);
console.log("Identificacion ", instanciaPersona2.identificacion);
console.log("Saludo ", instanciaPersona.saludar());
//ESTATICOS
console.log("Region ", Persona.region);
console.log("Despedirse ", Persona.despedirse());
