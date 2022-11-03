const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.status(400).json({ message: 'O endpoint POST /tasks ainda não foi implementado' });
});

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
