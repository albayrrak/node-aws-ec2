const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('hello2n');
});

app.listen('5000', () => {
  console.log('server is running');
});
