const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const root = require('../controllers/root');
const errors = require('../middlewares/handleErrors');
const io = require('socket.io')(http, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

io.on('connection', (socket) => {
  console.log('Alguém se conectou!')
});

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/', root);
app.use(errors);

module.exports = http;
