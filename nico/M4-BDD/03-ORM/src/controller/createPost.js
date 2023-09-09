const { Post } = require('../db');

const createPost = async (data) => {
    const { title, content, userId } = data;
    const newPost = await Post.create({title, content});
    await newPost.setUser(userId);
    return newPost;
};

module.exports = createPost;