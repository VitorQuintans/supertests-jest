const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.use('/users', userRoutes);

module.exports = app;
