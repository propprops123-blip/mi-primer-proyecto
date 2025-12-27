const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Esto sirve para que se vea tu HTML
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor prendido en puerto ${port}`);
});
