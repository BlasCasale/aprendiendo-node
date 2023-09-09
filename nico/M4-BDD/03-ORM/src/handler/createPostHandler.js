const errorResponse = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');
const createPost = require('../controller/createPost');

const createPostHandler = async (req, res) => {
    /*
    Esto seria al revez, anexar a un User una publicacion
    const user = await User.findByPk(userId);
    user.addPosts([idPost,idPost,idPost])
    */
    try {
        const { title, content, userId } = req.body;
        const newPost = await createPost({ title, content, userId });
        jsonResponse(res, 201, newPost);
    } catch (error) {
        errorResponse(res, 404, error);
    };
};

module.exports = createPostHandler;