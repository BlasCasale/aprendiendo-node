const server = require('./src/server');
const config = require('./config');
const { db } = require('./src/db');
const { PORT } = process.env;

server.listen(PORT, async () => {
    await db.sync({ alter: true });
    console.log(`Listening on http://localhost:${PORT}`);
});