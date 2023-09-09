const jsonResponse = async (res, status, json) => {
    return res.status(status).json(json);
};

module.exports = jsonResponse;