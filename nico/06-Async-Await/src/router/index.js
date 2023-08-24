// aca seguimos modularizando para no cargar de todo el trabajo y codigo a un solo archivo, se puede hacer todo en uno pero es mejor separar

const { Router } = require('express');
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsUsers');

const router = Router();

router.use('/users', usersRouter);
router.use('/posts', postsRouter);

module.exports = router;