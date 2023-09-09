const { User } = require('../db');

const getUser = async (data) => {
    const { mail } = data;
    const user = await User.findOne({ where: { mail } });
    return user;
};

module.exports = getUser;