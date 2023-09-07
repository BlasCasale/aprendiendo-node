const { DataTypes } = require('sequelize');

const Post = (db) => {
    db.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false
        });
};

module.exports = Post;