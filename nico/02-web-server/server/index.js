const http = require('http');
const fs = require('fs')

const students = [
    { id: 1, name: "Blas" },
    { id: 2, name: "Agostina" },
    { id: 3, name: "Nico" },
    { id: 4, name: "Gero" },
    { id: 5, name: "Valen" },
    { id: 6, name: "Jorge" }
];

http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    console.log("Recibiendo una peticion de", url)

    switch (url) {
        case '/':
            // cuando hago la req a/ => Responda "hola papurri"
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hola papurri");
            break;

        case '/students':
            // cuando hago la req a/students => Responda con el json y los students
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(students));
            break;

        case '/html':
            // cuando hago la req a/html => Responda con la lectura del archivo html
            const readeadFile = fs.readFileSync(__dirname + "/src/index.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(readeadFile);
            break;

        case '/template/':
            const readeadFileTemplate = fs.readFileSync(__dirname + "/src/template.html", "utf-8");
            const name = "Blas";
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(readeadFileTemplate.replace('{name}', name));
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end('Pone bien la dirección salamin');
            break;
    };
})
    .listen(3001, "localhost");

// 200 todo ok
// 300
// 400 errores del cliente
// 500 errores del servidor