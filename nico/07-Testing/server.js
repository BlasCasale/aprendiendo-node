const express = require('express');
const server = express();

const array = [
    {
        id: 1,
        name: "Blas"
    },
    {
        id: 2,
        name: "Agostina"
    },
    {
        id: 3,
        name: "Nico"
    }
];

server.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

server.get('/students', (req, res) => {
    res.status(200).json(array);
});

module.exports = server;