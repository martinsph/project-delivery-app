const express = require('express');
const products = require('./products');
// const { jwtDecode } = require('../../middlewares/auth');

const router = express({ mergeParams: true });

router.get('/', products);

module.exports = router;
