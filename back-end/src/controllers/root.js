const express = require('express');
const login = require('./login/router');
const register = require('./register/router');
const products = require('./products/router');
const sales = require('./sales/router');

const root = express({ mergeParams: true });

root.use('/login', login);
root.use('/register', register);
root.use('/products', products);
root.use('/sales', sales);

module.exports = root;