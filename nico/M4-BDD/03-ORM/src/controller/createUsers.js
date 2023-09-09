const { User } = require('../db');

const createUsers = async (data) => {
    const newUsers = await User.bulkCreate(data);
    return newUsers;
};

module.exports = createUsers;