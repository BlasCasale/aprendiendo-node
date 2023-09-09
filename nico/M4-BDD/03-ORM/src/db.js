const { Sequelize } = require('sequelize');
const UserFunc = require('./models/User');
const PostFunc = require('./models/Post');
const PageFunc = require('./models/Page');
// const { USER, PASS, DB_NAME } = process.env;
const USER = 'postgres';
const PASS = 'eminem97.';
const DB_NAME = 'lecture';

const db = new Sequelize(
    `postgres://${USER}:${PASS}@localhost:5432/${DB_NAME}`,
    { logging: false }
);

UserFunc(db);
PostFunc(db);
PageFunc(db);

const { User, Post, Page } = db.models;

User.hasMany(Post);
Post.belongsTo(User); // post va a tener la FK(id) del User al cual le pertenece el Post

User.belongsToMany(Page, { through: 'UserPage' });
Page.belongsToMany(User, { through: 'UserPage' });

module.exports = {
    db,
    ...db.models
};