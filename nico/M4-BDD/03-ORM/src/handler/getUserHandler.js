const errorResponse = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');
const getUser = require('../controller/getUser');

const getUserHandler = async (req, res) => {
    try {
        // cuando es params necesito desestructurar lo que le llega al controller
        const { mail } = req.params;
        const user = await getUser({ mail });
        jsonResponse(res, 200, user);
    } catch (error) {
        errorResponse(res, 404, error);
    };
};

module.exports = getUserHandler;