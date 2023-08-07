// leer archivos con callback

const fs = require('node:fs')

console.log(" --> Leyendo el primer archivo")
fs.readFile('./archivo.txt', "utf-8", (error, text) => {
    text && console.log(`Primero: ${text}`)
    error && console.log(error)
})

console.log(" ---> Hacer cosas mientras lee el archivo");

console.log(" --> Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
    text && console.log(`Segundo: ${text}`)
    error && console.log(error)
})
