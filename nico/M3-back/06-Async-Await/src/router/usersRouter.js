const { Router } = require('express');
const usersRouter = Router();
const getUsers = require('../controllers/getUsers');
const createUser = require('../controllers/createUser');

// se puede omitir la barra y tambien para probar primero tengo que hacer esto y despues empezar a crear, es una manera piola de corroborar que todo funcione
// usersRouter.get('/', (req, res) => {
//     res.send(`
//     Estoy en la ruta GET /users. Esta ruta devolvera la informacion de todos los usuarios.
//     `);
// });

// usersRouter.get('/:id', (req, res) => {
//     res.send(`
//     Estoy en la ruta GET /users/id. Esta ruta dara la informacion de un usuario por ID.
//     `);
// });

// usersRouter.post('/', (req, res) => {
//     res.send(`
//     Estoy en la ruta POST /users. Esta ruta creare un nuevo usuario.
//     `);
// });


// ahora si el codigo posta

usersRouter.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        // jamas va un console.log porque tenes que dar una respuesta para que el servidor corte con el error
        // asi se envian los errores, como un json que tengan un objeto con la key error y el value error.message
        res.status(500).json({ error: error.message });
    };
});

usersRouter.get('/:id', (req, res) => {
    res.send(`
    Estoy en la ruta GET /users/id. Esta ruta dara la informacion de un usuario por ID.
    `);
});

usersRouter.post('/', async (req, res) => {

    try {
        const { name, email, username } = req.body;

        const newUser = await createUser({ name, email, username });

        res.status(200).json({
            created: "ok",
            newUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});


module.exports = usersRouter;