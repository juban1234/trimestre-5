const cronometro = (milisegundos) => {
    return new Promise((resolve)=> {
        setTimeout(() =>{
            if (milisegundos === 60000) {
                resolve(`an pasado ${milisegundos/1000} segundos`)
            } 
        } ,milisegundos);
    })
}

cronometro(60000).then((mensaje) => {
    console.log(mensaje); 
    }).catch((error) => {
    console.error(error);
});