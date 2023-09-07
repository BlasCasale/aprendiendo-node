const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');

router.use('/users', userRouter);

module.exports = router;