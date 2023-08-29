const data = require('../utils/data');

const updatedUser = (id, userData) => {
    const user = data.find((user) => user.id == id);
    if (!user) throw Error('Usuario inexistente');

    const { name, username, email, phone, website } = userData;
    if (![name, username, email, phone, website].every(Boolean)) throw Error('Faltan datos');

    user.name = name;
    user.username = username;
    user.email = email;
    user.phone = phone;
    user.website = website;

    return user;
};

module.exports = updatedUser;