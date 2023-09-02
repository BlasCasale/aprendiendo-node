const data = require('../utils/data');

const getUserById = (id) => {
    const user = data.find(user => user.id == id);

    if (user) return user
    else throw Error('Usuario inexistente');
};

module.exports = getUserById;