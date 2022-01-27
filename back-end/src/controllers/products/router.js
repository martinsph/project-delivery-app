const express = require('express');
const products = require('./products');
const { jwtDecode } = require('../../middlewares/auth');

const router = express({ mergeParams: true });

router.get('/', jwtDecode, products);

module.exports = router;
