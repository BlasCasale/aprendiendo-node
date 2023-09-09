const { User } = require('../db');

const createUser = async (data) => {
    const { name, last_name, mail, birth, pages } = data;
    // con el .every(Boolean) compruebo que todo lo que este dentro de este array, sea true o false
    if (![name, last_name, mail, birth].every(Boolean)) throw Error('Faltan enviar datos');

    const newUser = await User.create({ name, last_name, mail, birth });
    await newUser.addPages(pages);
    return newUser;
};

module.exports = createUser;