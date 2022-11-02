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
    const { status } = req.query;
    let filteredActivities = activities;
  
    if (status) {
      filteredActivities = activities.filter((activity) => activity.status === status);
    }
  
    res.status(200).json({ activities: filteredActivities });
});

app.get('/activities', (req, res) => {
    res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
    const idParam = req.params.id;
    const activity = activities.find(({id}) => id === Number(idParam));
    res.status(200).json(activity);
});

app.post('/activities', (req, res) => {
    const activity = req.body;
    activities.push(activity);
    res.status(200).json(activities);
});

app.put('/activities/:id', (req, res) => {
    const idParam = req.params.id;
    const {description, status} = req.body;
    let alteredActivity;

    for(let i = 0; i < activities.length; i++) {
        const activity = activities[i];

        if(activity.id === Number(idParam)) {
            activity.description = description;
            activity.status = status;
            alteredActivity = activity;
        }
    }

    res.status(200).json(alteredActivity);
});

app.delete('/activities/:id', (req, res) => {
    const idParam = req.params.id;
    const arrayPosition = activities.findIndex(({id}) => id === Number(idParam));
    activities.splice(arrayPosition, 1);
    res.status(200).json({message: 'Registro excluído com sucesso!'});
});


module.exports = app;