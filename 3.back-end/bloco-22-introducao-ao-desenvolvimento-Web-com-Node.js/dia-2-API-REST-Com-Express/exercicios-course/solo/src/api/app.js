const express = require('express');
const getAllMovies = require('../utils/handleJson')

const app = express();

app.use(express.json());

const OK = 200;

app.get('movies/:id', async (req, res) => {
    const { id } = req.params; // essa linha pega o id da url ne ?
    const movies = await getAllMovies(); 
    const foundMovie = movies.find((e) => Number(e.id) === Number(id));
    res.status(OK).json({ movie: foundMovie });
})

module.exports = app;