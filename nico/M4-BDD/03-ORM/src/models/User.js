const { DataTypes } = require('sequelize');

const User = (db) => {
    db.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        mail: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        birth: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
        {
            timestamps: false
        });
};

module.exports = User;