const createUser = require('../controller/createUser');
const errorResponse = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');

const createUserHandler = async (req, res) => {
    try {
        const { name, last_name, mail, birth, pages } = req.body;
        const newUser = await createUser({ name, last_name, mail, birth, pages });
        jsonResponse(res, 201, newUser);
    } catch (error) {
        errorResponse(res, 404, error);
    };
};

module.exports = createUserHandler;