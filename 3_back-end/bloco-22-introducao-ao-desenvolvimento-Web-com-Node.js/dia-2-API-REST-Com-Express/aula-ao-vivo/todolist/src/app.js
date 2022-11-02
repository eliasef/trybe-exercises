const express = require('express');

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];
  

const app = express();

app.use(express.json());

//Rotas

app.get('/activities', (req, res) => {
    res.status(200).json(activities);
});

module.exports = app;