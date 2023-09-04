const { Router } = require('express');
const usersRouter = require('./users.routes');
const workshopsRouter = require('./workshop.routes');
const disciplinesRouter = require('./disciplines.routes');
const router = Router();

router.use('/users', usersRouter);
router.use('/workshops', workshopsRouter);
router.use('/disciplines', disciplinesRouter);

module.exports = router;