const data = require('../utils/data');

const createUser = (userData) => {
    const { name, username, email, phone, website } = userData;

    // normalizar la creacion de objetos para de ultima despues actualizarlos
    const newUser = {
        id: Math.floor(Math.random() * 1000),
        name,
        username,
        email,
        phone: phone ? phone : null,
        website: website ? website : null
    };

    data.push(newUser);

    return newUser;
};

module.exports = createUser;