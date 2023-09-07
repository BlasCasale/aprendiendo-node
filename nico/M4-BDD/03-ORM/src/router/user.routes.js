const { Router } = require('express');
const createUser = require('../controller/createUser');
const userRouter = Router();

userRouter.post('/', async (req, res) => {
    // crear un usuario en la db
    try {
        const { name, last_name, mail, birth } = req.body;
        const newUser = await createUser({ name, last_name, mail, birth });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

module.exports = userRouter;