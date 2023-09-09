const { User } = require('../db');
const { Page } = require('../db');

const getAllUsers = async () => {
    const allUsers = await User.findAll({
        attributes: ['name', 'last_name', 'mail'], // con esto podemos buscar y elegir que nos devuelva
        include: [
            {
                model: Page,
                attributes: ['page_name']
            }
        ]
        // attributes: { exclude: ['id', 'birth'] } // asi excluimos los datos que no quiero traer
    });

    return allUsers;
};

module.exports = getAllUsers;