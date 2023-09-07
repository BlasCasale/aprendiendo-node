const { Sequelize } = require('sequelize');
const User = require('./models/User');
const Post = require('./models/Post');
// const { USER, PASS, DB_NAME } = process.env;
const USER = 'postgres';
const PASS = 'eminem97.';
const DB_NAME = 'lecture';

const db = new Sequelize(
    `postgres://${USER}:${PASS}@localhost:5432/${DB_NAME}`,
    { logging: false }
);

User(db);
Post(db);

module.exports = {
    db,
    ...db.models
};