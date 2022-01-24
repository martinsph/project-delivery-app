const express = require('express');
const root = require('../controllers/root');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/', root);

module.exports = app;
