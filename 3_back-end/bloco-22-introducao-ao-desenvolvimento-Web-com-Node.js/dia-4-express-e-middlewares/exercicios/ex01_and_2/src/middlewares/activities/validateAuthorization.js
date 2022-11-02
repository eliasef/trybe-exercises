const validateAuthorization = (req, res, _next) => {
    const { authorization } = req.headers;

    if (!authorization || authorization.length !== 16) {
        res.status(401).json({
            "message": "Token inválido!"
        })
    }
}

module.exports = validateAuthorization;