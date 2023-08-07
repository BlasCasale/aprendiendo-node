// file system

const fileSystem = require("node:fs") // a partir de Node 16, se recomienda poner "node:"

const stats = fileSystem.statSync('./archivo.txt')

console.log(
    stats.isFile(), //es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size + " Kb", // tamaño en bytes
)