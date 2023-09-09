const {Router} = require('express');
const postRouter = Router();
const createPostHandler = require('../handler/createPostHandler');

postRouter.post('/',createPostHandler);

module.exports = postRouter;