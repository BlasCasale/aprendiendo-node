const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const app = express();

const myMiddleware = (req, res, next) => {
    console.log(`Este es mi middleware`);
    next();
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(router);
app.use('*', (req, res) => {
    res.status(404).json({ error: "Not found" });
});
// app.use(myMiddleware);

module.exports = app;