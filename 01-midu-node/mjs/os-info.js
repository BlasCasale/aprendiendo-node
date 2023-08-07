// const os = require("os") asi es viejo
const os = require("node:os")

console.log(os.platform()) // windows o lo que sea
console.log(os.arch()) // x32 o x64
console.log(os.cpus()) // cantidad de cpus
console.log(os.freemem() / 1024 / 1024) // memoria libre
console.log(os.totalmem() / 1024 / 1024) // memoria total
console.log(os.uptime() / 60 / 60) // tiempo de la pc prendida 