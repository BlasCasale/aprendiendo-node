const errorRespose = require('../controller/errorResponse');
const jsonResponse = require('../controller/jsonResponse');
const findOrCreate = require('../controller/findOrCreate');

const findOrCreateHandler = async (req, res) => {
    try {
        const { name, last_name, mail, birth } = req.body;
        const user = await findOrCreate({ name, last_name, mail, birth });
        jsonResponse(res, 201, user);
    } catch (error) {
        errorRespose(res, 404, error);
    };
};

module.exports = findOrCreateHandler;