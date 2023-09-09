const errorResponse = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');
const createUsers = require('../controller/createUsers');

const createUsersHandler = async (req, res) => {
    try {
        // cuando uso el bulkCreate no necesito desestructurar la data cuando llega al controller
        const data = req.body;
        const newUsers = await createUsers(data);
        jsonResponse(res, 201, newUsers);
    } catch (error) {
        errorResponse(res, 404, error);
    };
};

module.exports = createUsersHandler;