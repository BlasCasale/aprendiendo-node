// leer archivos con promise

const fs = require('node:fs/promises')
const { promisify } = require("util")

const readFilePromise = promisify(fs.readFile)

console.log(" --> Leyendo el primer archivo")
fs.readFile('./archivo.txt', "utf-8")
    .then(text => console.log(`Primero: ${text}`))

console.log(" ---> Hacer cosas mientras lee el archivo");

console.log(" --> Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8")
    .then(text => console.log(`Segundo: ${text}`))


readFilePromise("./archivo.txt", "utf-8")
    .then(text => console.log(`Tercero: ${text}`))