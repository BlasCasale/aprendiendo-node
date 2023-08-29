const {Router} = require('express');
const postsRouter = Router();

postsRouter.get('/', (req, res) => {
    res.status(200).send("Todo ok al get / ")
});

postsRouter.get('/phone', (req, res) => {
    res.status(200).send("Todo ok al get /phone")
});

postsRouter.get('/:id', (req, res) => {
    res.status(200).send("Todo ok al get /:id con un determinado id")
});

postsRouter.post('/', (req, res) => {
    res.status(200).send("Todo ok al post /")
});

postsRouter.put('/:id', (req, res) => {
    res.status(200).send("Todo ok al put /posts/:id")
});

postsRouter.delete('/:id', (req, res) => {
    res.status(200).send("Todo ok al delete /:id")
});

module.exports = postsRouter;