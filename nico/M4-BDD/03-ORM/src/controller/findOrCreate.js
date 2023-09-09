const { User } = require('../db');

const findOrCreate = async (data) => {
    const { name, last_name, mail, birth } = data;
    const [user, boolean] = await User.findOrCreate({
        where: { mail },
        defaults: {
            name,
            last_name,
            birth
        }
    });

    if (!boolean) throw Error('Ya existe un usuario con este mail');

    return user;
};

module.exports = findOrCreate;