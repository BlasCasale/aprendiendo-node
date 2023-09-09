const getAllUsers = require('../controller/getAllUsers');
const getUsersByName = require('../controller/getUsersByName');
const errorResponse = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');

const getAllUsersHandler = async (req, res) => {
    // cuando es query no necesito desestructurar del lado del controler, lo paso derecho al metodo
    try {
        const { name, last_name } = req.query;
        if (!name && !last_name) {
            const users = await getAllUsers();
            return jsonResponse(res, 201, users);
        } else {
            const users = await getUsersByName({ name, last_name });
            return jsonResponse(res, 201, users);
        }
    } catch (error) {
        errorResponse(res, 500, error);
    };
};

module.exports = getAllUsersHandler;