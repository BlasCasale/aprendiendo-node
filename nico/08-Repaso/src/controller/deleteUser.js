let data = require('../utils/data');

const deleteUser = (id) => {
    const user = data.find((user) => user.id == id);
    if(!user) throw Error('Usuario inexistente');

    data = data.filter((user) => user.id != id);

    return user;
};

module.exports = deleteUser;