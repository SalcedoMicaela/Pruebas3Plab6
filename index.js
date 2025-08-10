const express = require('express');
const app = express();
const port = 3000;  

//endpoint query responde un mensaje
app.get('/', (_req, res) => {
  
  res.send('Integracion continua funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor en puesrto:${PORT}`);
});
