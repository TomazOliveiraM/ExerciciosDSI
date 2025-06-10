const express = require('express');
const app = express();
const userRoutes = require('./controllers/userController');

app.use(express.json()); // middleware para receber JSON
app.use('/users', userRoutes); // rotas de usuários

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
