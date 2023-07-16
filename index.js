const express = require('express');

const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('hello2n');
});

app.listen(process.env.PORT, () => {
  console.log('server is running');
});
