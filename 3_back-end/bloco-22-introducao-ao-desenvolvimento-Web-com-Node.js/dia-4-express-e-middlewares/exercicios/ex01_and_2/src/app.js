const express = require('express');
const validateAuthorization = require('./middlewares/activities/validateAuthorization');
const validateName = require('./middlewares/activities/validateName');
const validatePrice = require('./middlewares/activities/validatePrice');
const validateDescription = require('./middlewares/activities/validateDescription')
const validateCreatedAt = require('./middlewares/activities/validateCreatedAt');
const validateRating = require('./middlewares/activities/validateRating');
const validateDifficulty = require('./middlewares/activities/validateDifficulty');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.post('/activities',
    validateAuthorization,
    validateName,
    validatePrice,
    validateDescription,
    validateRating,
    validateCreatedAt,
    validateDifficulty,
    (_req, res) => {
    res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
});

app.post('/signup', (req, res) => {
    const {
        email,
        password,
        firstName,
        phone
    } = req.body;

    const signupArray = [email, password, firstName, phone];

    if (signupArray.includes(undefined)) {
        res.status(401).json({
            "message": "Campos ausentes!"
        });
    };

    const token = generateToken();
    return res.status(200).json({ token })
});

module.exports = app;