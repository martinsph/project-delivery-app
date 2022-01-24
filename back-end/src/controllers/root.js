const express = require('express');
const login = require('./login/router');

const root = express({ mergeParams: true });

root.use('/', login);
root.use('/login', login);

module.exports = root;