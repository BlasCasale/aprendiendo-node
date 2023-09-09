const { DataTypes } = require('sequelize');

const Page = (db) => {
    db.define('Page', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        page_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false
        });
};

module.exports = Page;