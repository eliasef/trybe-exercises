const validateCreatedAt = (req, res, next) => {
    const { createdAt } = req.body.description;
    
    const isDateFormate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!isDateFormate.test(createdAt)) {
        res.status(400).json({
            "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"
        });
    };

    next();
};

module.exports = validateCreatedAt;