const http = require('node:http') // este es para el protocolo http
const { findAvailablePort } = require('./freePort.js')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log("Request recieved")
    res.end("Hola mundo")
})

findAvailablePort(desirePort)
    .then(port => {
        server.listen(port, () => {
            console.log(`Server listening on port http://localhost:${port}`)
        })
    })