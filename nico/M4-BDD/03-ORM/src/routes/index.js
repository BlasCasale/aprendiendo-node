const { Router } = require('express');
const usersRouter = require('./users.routes');
const workshopsRouter = require('./workshop.routes');
const router = Router();

router.use('/users', usersRouter);
router.use('/workshops', workshopsRouter);

module.exports = router;