// leer archivos con promise

const { readFile } = require('node:fs/promises');

(async () => {
    console.log("Leyendo el primero")
    const text = await readFile('./archivo.txt', "utf-8")
    console.log("Primero: " + text)
    console.log("--> Hago cositas")
    console.log("Leyendo el segundo")
    const secondText = await readFile("./archivo2.txt", "utf-8")
    console.log("Segundo: " + secondText)
})()