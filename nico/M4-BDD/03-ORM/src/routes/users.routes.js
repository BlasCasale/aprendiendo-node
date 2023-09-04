const { Router } = require('express');
const usersRouter = Router();
const { User } = require('../../db');
const { Workshop } = require('../../db');

usersRouter.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const user = await User.findOne({
            where: {
                name
            },
            include: Workshop // esto es como un join para crear las tablas relacionales desde este lado
            // include: {
            //     Model: Workshop
            // }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
});

usersRouter.post('/create', async (req, res) => {
    try {
        const { name, email, workId } = req.body;
        const user = await User.create({ name, email });
        res.status(200).json(user);
        if (workId) {
            const work = await Workshop.findByPk(workId);
            // creando la relacion
            await user.setWorkshop(work); // esto es set + el nombre del modelo que quiero unir
        };
        // const user = await User.build({ name, email });
        // el build hace lo mismo pero en vez de crear, construye un bloque de ese usuario
        // despues se usa save para guardar eso que se construyo
        // await user.save();
        // console.log(user.dataValues);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

module.exports = usersRouter;