const { Router } = require('express');
const userRouter = Router();
const getUserHandler = require('../handler/getUserHandler');
const getAllUsersHandler = require('../handler/getAllUsersHandler');
const createUserHandler = require('../handler/createUserHandler');
const deleteUserHandler = require('../handler/deleteUserHandler');
const createUsersHandler = require('../handler/createUsersHandler');
const findOrCreateHandler = require('../handler/findOrCreateHandler');

userRouter.get('/', getAllUsersHandler); // traer todos los usuarios
userRouter.get('/findOrCreate', findOrCreateHandler) // crear usuario con findOrCreate
userRouter.get('/:mail', getUserHandler); // busco un user por mail
userRouter.post('/', createUserHandler); // crear un usuario en la db
userRouter.post('/bulk', createUsersHandler); // crear varios usuarios con el bulk
userRouter.delete('/', deleteUserHandler); // borrar usuario de la bdd con mail

module.exports = userRouter;