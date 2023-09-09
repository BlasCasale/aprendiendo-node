const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');
const postsRouter = require('./post.routes');
const pageRouter = require('./page.routes');

router.use('/users', userRouter);
router.use('/posts', postsRouter);
router.use('/pages', pageRouter);

module.exports = router;