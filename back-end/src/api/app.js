const express = require('express');
const cors = require('cors');
const root = require('../controllers/root');
const errors = require('../middlewares/handleErrors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/', root);
app.use(errors);

module.exports = app;
