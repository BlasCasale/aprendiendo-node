const server = require('./src/server');
require('dotenv').config();
const { db } = require('./src/db');
const { PORT } = process.env;
// const PORT = 3001

server.listen(PORT, async () => {
    await db.sync({ alter: true });
    console.log(`Listening on http://localhost:${PORT}`);
});