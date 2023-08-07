// argumentos de entrada
console.log(process.argv) // [0] <- Node, [1] <- fichero, [2]


// controlar el proceso y su salida

// process.exit(0) // todo bien
// process.exit(1) // error y quiero salir

// podemos controlar eventos del proceso

process.on('exit', () => {
    // limpiar los recursos
})

// current working directory => para saber desde donde se ejecuta
console.log(process.cwd())

// plataform

console.log(process.env.NODE_ENV)