const { User } = require('../db');

const createUser = async (data) => {
    const { name, last_name, mail, birth } = data;
    if (![name, last_name, mail, birth].every(Boolean)) throw Error('Faltan enviar datos');

    const newUser = await User.create({ name, last_name, mail, birth });

    return newUser;
};

module.exports = createUser;