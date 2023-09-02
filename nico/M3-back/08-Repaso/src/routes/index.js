const { Router } = require('express');
const userRouter = require('./users.routes');
const postsRouter = require('./posts.routes');
const router = Router();

router.use('/users', userRouter);
router.use('/posts', postsRouter);

module.exports = router;