const { Router } = require('express');
const { Page } = require('../db');
const pageRouter = Router();
const errorResponse = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');

pageRouter.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPage = await Page.bulkCreate(data);
        jsonResponse(res, 201, newPage);
    } catch (error) {
        errorResponse(res, 404, error);
    };
});

module.exports = pageRouter;