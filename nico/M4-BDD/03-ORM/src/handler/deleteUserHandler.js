const errorResponse = require('../controller/errorResponse');
const deleteUser = require('../controller/deleteUser');
const jsonResponse = require('../controller/jsonResponse');

const deleteUserHandler = async (req, res) => {
    try {
        const { mail } = req.body;
        const user = await deleteUser({ mail });
        jsonResponse(res, 200, user);
    } catch (error) {
        errorResponse(res, 404, error);
    };
};

module.exports = deleteUserHandler;