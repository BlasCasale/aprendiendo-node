const { Router } = require('express');
const userRouter = Router();
const getUsers = require('../controller/getUsers');
const getUserById = require('../controller/getUserById');
const getUserWithPhone = require('../controller/getUserWithPhone');
const getUsersByName = require('../controller/getUsersByName');
const createUser = require('../controller/createUser');
const updatedUser = require('../controller/updatedUser');
const deleteUser = require('../controller/deleteUser');

userRouter.get('/', (req, res) => {
    try {
        const { name } = req.query;
        const users = name ? getUsersByName(name) : getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
});

userRouter.get('/phone', (req, res) => {
    try {
        const users = getUserWithPhone();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "No se pudo conectar" });
    };
});

userRouter.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const user = getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

// esto es una validacion anticipada con middleware para evitar que la funcion que crea el usuario en el post
// no haga todo junto y unicamente se dedique a crear el usuario y no tambien a validar lo que entra o no
const validate = (req, res, next) => {
    const { name, username, email, phone, website } = req.body;
    if (!name || !username || !email) {
        return res.status(400).json({ error: "Error en la validación" });
    } else {
        next();
    };
};

// userRouter.post('/', [valName, valUsername, valEmail.......] , (req, res) => {
// con este array podemos "concatenar" las validaciones de todo tipo con los middleware
userRouter.post('/', validate, (req, res) => {
    try {
        const { name, username, email, phone, website } = req.body;
        const newUser = createUser({ name, username, email, phone, website });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});


// recibe un id por params y por body recibe los datos nuevos del user
userRouter.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, username, email, phone, website } = req.body;
        const modifiedUser = updatedUser(id, { name, username, email, phone, website });
        res.status(200).json({
            updated: "Ok",
            user: modifiedUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

userRouter.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = deleteUser(id);
        res.status(200).json({
            deleted: "Ok",
            user: deletedUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
});

module.exports = userRouter;

// users

// - get /users devuelve todos los usuarios.. salvo que reciba una query "name"
// - get /users/:id un usuario
// - get /users/phone me trae los usuarios que si tienen celu
// - post /users cre un nuevo usuario
// - put /users/:id => recibir por body los datos nuevos del usuario
// - delete /users/:id eliminar el usuario