const express = require('express');
const router = express.Router();
const users = require('../users');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.get('/', (req, res) => {
  const name = req.query.name;
  if (name) {
    const filtered = users.filter(u =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(user);
});

router.post('/', (req, res) => {
  const { id, name, email } = req.body;

  if (id === undefined || typeof id !== 'number') {
    return res.status(400).json({ error: "ID é obrigatório e numérico" });
  }
  if (!name || name.length < 3) {
    return res.status(400).json({ error: "Nome é obrigatório com no mínimo 3 letras" });
  }
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
