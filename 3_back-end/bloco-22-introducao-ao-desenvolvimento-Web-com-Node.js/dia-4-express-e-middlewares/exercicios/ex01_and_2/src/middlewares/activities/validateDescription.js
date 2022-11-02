const validateDescription = (req, res, next) => {
    const { description } = req.body;

    !description && res.status(400).json({
        "message": "O campo description é obrigatório"
    })

    if (!description.createdAt) {
        res.status(400).json({
            "message": "O campo createdAt é obrigatório"
        })
    }

    if (!description.rating) {
        res.status(400).json({
            "message": "O campo rating é obrigatório"
        })
    }

    if (!description.difficulty) {
        res.status(400).json({
            "message": "O campo difficulty é obrigatório"
        });
    };
    
    next();
};

module.exports = validateDescription;