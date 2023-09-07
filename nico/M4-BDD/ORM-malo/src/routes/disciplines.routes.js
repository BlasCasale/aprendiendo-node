const { Router } = require('express');
const disciplinesRouter = Router();
const { Discipline } = require('../../db');

disciplinesRouter.post('/bulk', async (req, res) => {
    try {
        const { disciplines } = req.body;
        const corroborate = disciplines.every(disc => disc.name && disc.description);
        if (corroborate) {
            const disc = await Discipline.bulkCreate(disciplines);
            res.status(200).json(disc);
        };
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

disciplinesRouter.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const dis = await Discipline.findOne({ where: { name } });
        res.status(200).json(dis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

module.exports = disciplinesRouter;