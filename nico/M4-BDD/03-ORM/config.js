const dotenv = require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3001,
    USER: process.env.USER || 'postgres',
    PASS: process.env.PASS || 'eminem97.',
    DB_NAME: process.env.DB_NAME || 'lecture'
};