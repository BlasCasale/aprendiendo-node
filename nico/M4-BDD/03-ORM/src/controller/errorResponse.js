const errorResponse = (res, errorCode, error) => {
    return res.status(errorCode).json({ error: error.message });
};

module.exports = errorResponse;