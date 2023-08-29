const data = require('../utils/data');

const getUserWithPhone = () => data.filter(user => user.phone);

module.exports = getUserWithPhone;