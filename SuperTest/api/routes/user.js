const express = require('express');
const router = express.Router();
const db = require('../data/users');

// GET / → Listar usuários
router.get('/', (req, res) => {
  res.status(200).json(db.getAllUsers());
});

// GET /:id → Buscar usuário por ID
router.get('/:id', (req, res) => {
  const user = db.getUserById(Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

// POST / → Criar usuário
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  const user = db.createUser(name);
  res.status(201).json(user);
});

// PUT /:id → Atualizar usuário
router.put('/:id', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  const user = db.updateUser(Number(req.params.id), name);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

// DELETE /:id → Deletar usuário
router.delete('/:id', (req, res) => {
  const user = db.deleteUser(Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

module.exports = router;
