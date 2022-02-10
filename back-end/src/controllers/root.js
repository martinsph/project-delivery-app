const express = require('express');
const login = require('./login/router');
const register = require('./register/router');
const products = require('./products/router');
const sales = require('./sales/router');
const { user } = require('../database/models');
const { sale } = require('../database/models');

const root = express({ mergeParams: true });

root.use('/login', login);
root.use('/register', register);
root.use('/products', products);
root.use('/sales', sales);

root.use('/user', async (req, res) => {
  const data = await user.findAll();
    return res.status(200).json(data);
});

root.put('/sales/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updatedSale = sale.update({ status }, { where: { id } });

  return res.status(200).json(updatedSale);
});

module.exports = root;