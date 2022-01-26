const express = require('express');
const login = require('./login/router');
const register = require('./register/router');

const root = express({ mergeParams: true });

root.use('/login', login);
root.use('/register', register);

module.exports = root;