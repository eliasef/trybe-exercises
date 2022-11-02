const validateDifficulty = (req, res, _next) => {
    const { difficulty } = req.body.description;

    const options = ['Fácil', 'Médio', 'Difícil'];

    if (!difficulty.includes(options)) {
        res.status(400).json({
            "message": "O campo difficulty deve ser \'Fácil\', \'Médio\', \'Difícil\'"
        });
    };
};

module.exports = validateDifficulty;