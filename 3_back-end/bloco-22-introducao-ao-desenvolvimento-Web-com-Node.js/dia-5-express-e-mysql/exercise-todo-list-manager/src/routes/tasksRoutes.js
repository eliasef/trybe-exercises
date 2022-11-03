const express = require('express');
const { insertTask } = require('../src/db/tasksDB');
const tasksDB = require('../src/db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, descricao } = req.body;
  const result = await insertTask({ name, descricao });
  try {
    result = await tasksDB.insert(tasksDB);
    res.status(201).json({
      message: `Tarefa cadastrada com sucesso com o id ${result.insertId}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma tarefa' });
  }
});

// toda linha de cima alterada

router.put('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint PUT /tasks/:id ainda não foi implementado' });
});

router.delete('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint DELETE /tasks/:id ainda não foi implementado' });
});

router.get('/', (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks ainda não foi implementado' });
});

router.get('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks/:id ainda não foi implementado' });
});

module.exports = router;
