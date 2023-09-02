const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./routes/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(router);
app.use('*', (req, res) => {
    res.status(404).json({ error: "Not found" });
});

module.exports = app;