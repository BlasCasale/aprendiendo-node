const { User } = require('../db');

const getUsersByName = async (data) => {
    const { name, last_name } = data;
    const users = await User.findAll({ where: { name, last_name } });
    return users;
};

module.exports = getUsersByName;