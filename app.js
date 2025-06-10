const express = require('express');
const livrosRoutes = require('./routes/livrosRoutes');

const app = express();
const PORT = 3000;

app.use(express.json()); // habilita JSON no corpo das requisições
app.use('/api', livrosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
