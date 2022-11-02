const express = require('express');
const { createMovie, getAllMovies } = require('../utils/handleJson');

const app = express();

app.use(express.json());

const OK = 200;
const CREATED = 201;

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  await createMovie({ movie, price });
  res.status(CREATED).json({ message: 'Movie Created' });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await getAllMovies();
  const foundMovie = movies.find((e) => Number(e.id) === Number(id));
  res.status(OK).json({ movie: foundMovie });
});

module.exports = app;
