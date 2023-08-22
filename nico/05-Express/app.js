const express = require("express");
const morgan = require('morgan'); // middleware
const cors = require('cors');
const app = express();
const router = require('./route');
const userRouter = require('./user');
const PORT = 3001;

// const userPass = "1234";

// desde aca pongo los middleware
app.use(cors());
app.use(morgan("dev")); // es para saber de donde vienen las peticiones
app.use(express.json()); // aca todo lo que lleva va a ser transformado a formato json para que desde JS pueda corroborar lo que esta llegando
app.use("/", (req, res, next) => { // es para hacer nuestro propio middleware
    const { url } = req;
    console.log(url);
    next();
});

// aca las rutas
app.use("/character", router);
app.use('/user', userRouter);
// con esta de abajo lo que hago es dar un msj si la ruta ingresada es incorrecta
app.use('*', (req, res) => {
    res.status(404).send("Algo salio mal");
});


// aca el listener y aca es el index del server
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});



/*
app.use("/apiquery", (req, res, next) => { // no es una ruta, es para que haga algo pero no es una ruta en especifico, asi en la ruta tenemos que especificarlo para saber a donde lo estamos aplicando
    // tambien se pueden poner todos los middleware que quiera
    "1234" === userPass ? next() : res.status(200).send("No autorizado")
});

app.get("/", ((req, res, next) => {
    console.log(req);
    // res.status(200).send("Server online");
    res.status(200).send("Server online...");
}));

app.get("/ab?cd", ((req, res, next) => { // con ? la letra anterior puede estar o no
    console.log(req);
    // res.status(200).send("Server online");
    res.status(200).send("Ruta: ab?cd");
}));

app.get("/ab*cd", ((req, res, next) => { // con * la letra anterior puede estar una vez o todas las que quiera
    const { url } = req;
    // res.status(200).send("Server online");
    res.status(200).send(`Ruta: ${url}`);
}));

app.get("/api/:name/:lastname", ((req, res, next) => { // con * la letra anterior puede estar una vez o todas las que quiera
    const { name, lastname } = req.params;
    // res.status(200).send("Server online");
    res.status(200).json({ name, lastname });
}));

// http://localhost:3001/apiquery?name=Blas&lastname=Casale
app.get("/apiquery", ((req, res, next) => { // por query pasan los que quieran
    // req.query = { name: "Blas", lastname: "Casale"};
    // res.status(200).send("Server online");
    const { name, lastname } = req.query;

    if (!name && !lastname) res.status(404).send("No enviaste nada")

    if (name && lastname) res.status(200).json({ name, lastname });
    else res.status(404).send("Me faltaron datos papurri")

}));
*/