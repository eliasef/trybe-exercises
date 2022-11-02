const validateDescription = (req, res, next) => {
    const { description } = req.body;

    if (!description) {
        res.status(400).json(
            { message: 'O campo description é obrigatório!' }
        )
    }

    if (!description.createdArt) {
        return res.status(400).json(
            { message: 'O campo createdAt é obrigatório' }
        )
    }
}