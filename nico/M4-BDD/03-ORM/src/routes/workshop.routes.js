const { Router } = require('express');
const workshopsRouter = Router();
const { Workshop } = require('../../db');

workshopsRouter.post('/create', async (req, res) => {
    try {
        const { name, description } = req.body;
        const workshop = await Workshop.create({ name, description });
        res.status(200).json(workshop);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
})

module.exports = workshopsRouter;