// este modulo solo se encarga de levantar el servidor, se modulariza para evitar juntar todo

const express = require('express');
const router = require('./router');
const morgan = require('morgan');
const server = express();

// use es cuando la req lleva al servidor y que la req pase a router
server.use(morgan("dev"));
server.use(express.json());
server.use(router);

module.exports = server;