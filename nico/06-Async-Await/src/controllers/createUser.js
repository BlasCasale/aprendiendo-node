let data = require('../utils/data');

// este controller recibe un user y lo crea en la BDD (base de datos)
const createUser = async ({ name, email, username }) => {
    if (!name || !email || !username) throw new Error("Faltan enviar datos");

    const newUser = { name, email, username };
    data.push(newUser);
    return newUser;
};

module.exports = createUser;