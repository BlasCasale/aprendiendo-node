const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const router = require('./router/index');

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);
server.use('*', (req, res) => {
    res.status(404).json({ error: "End point not found, please be sure the end point its placed correctly" });
});

module.exports = server;