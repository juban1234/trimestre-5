const fs = require('fs').promises; //se usa para poder manipular los archivos
const path = require('path'); // se usa para utilizar las rutas

// Función para generar un archivo de texto
async function generarArchivo(nombre, contenido) {
    const ruta = path.join(__dirname, 'archivos', nombre); 

    // Escribimos el archivo de forma asincrónica
    await fs.writeFile(ruta, contenido, 'utf8');
    console.log(`Archivo ${nombre} generado.`);
}

// Función para generar miles de archivos
async function generarArchivos(cantidad) {
    const tareas = [];

    // Aseguramos que el directorio de archivos existe
    await fs.mkdir(path.join(__dirname, 'archivos'), { recursive: true });

    // Generamos los archivos en paralelo
    for (let i = 0; i < cantidad; i++) {
        const nombreArchivo = `archivo_${i + 1}.txt`;
        const contenido = `hola archivo ${i + 1}`;
        
        // Creamos una promesa por cada archivo
        tareas.push(generarArchivo(nombreArchivo, contenido));
    }

    // Esperamos que todas las promesas se resuelvan
    await Promise.all(tareas);
    console.log(`Se han generado ${cantidad} archivos.`);
}

// Ejecutamos la generación de 1000 archivos (puedes cambiar el número)
generarArchivos(1000).catch(err => console.error('Error:', err));
