const { Router } = require('express');
const workshopsRouter = Router();
const { Workshop } = require('../../db');
const { Op } = require('sequelize');

workshopsRouter.post('/create', async (req, res) => {
    try {
        const { name, description } = req.body;
        const workshop = await Workshop.create({ name, description });
        res.status(200).json(workshop);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

workshopsRouter.post('/bulk', async (req, res) => {
    try {
        const { name, description, id } = req.body;
        // el created se puede usar para corrobar si se puede crear o no y asi dar una respuesta
        const [work, created] = await Workshop.bulkCreate({
            where: { id },
            defaults: {
                name, description
            }
        });
        if (created) res.status(200).json({ message: "Work creado", work });
        else res.status(200).json({ message: "Ya existe este work", work });
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

workshopsRouter.get('/', async (req, res) => {
    const works = await Workshop.findAll();
    res.status(200).json(works);
});

workshopsRouter.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;

        const works = await Workshop.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        res.status(200).json(works);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});

workshopsRouter.put('/update', async (req, res) => {
    try {
        const { name, description, id } = req.body;
        const work = await Workshop.update({ // nos devuelve un [id]
            name,
            description
        }, {
            where: {
                id
            }
        });
        res.status(200).json(work);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

workshopsRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const work = await Workshop.destroy({ where: id }); // nos devuelve un [id]
        res.status(200).json(work);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
    // const workAll = await Workshop.truncate(); elimina todos los registos de una tabla
});

module.exports = workshopsRouter;