const { sequelize } = require('../../db');

const Disciplines = sequelize.define("Discipline", {
    name: {
        type: DataTypes.STRING
    },
    desciption: {
        type: DataTypes.STRING
    }
});

// module.exports = { ...sequelize.models };