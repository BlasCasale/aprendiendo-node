const data = require('../utils/data');

const getUsersByName = (name) => {
    const users = data.filter((user) => user.name === name);
    if (users.length) return users
    else throw Error('No hay usuario con ese nombre');
};

module.exports = getUsersByName;