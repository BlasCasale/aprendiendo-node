const { User } = require('../db');

const deleteUser = async (data) => {
    const { mail } = data;
    const user = await User.findOne({ where: { mail } });
    await user.destroy();
    return user;
};

module.exports = deleteUser;