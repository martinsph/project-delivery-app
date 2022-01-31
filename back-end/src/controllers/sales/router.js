const express = require('express');
const { createSale } = require('./sales');

const router = express({ mergeParams: true });

router.post('/', createSale);

module.exports = router;
