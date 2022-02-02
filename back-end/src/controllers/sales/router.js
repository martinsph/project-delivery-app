const express = require('express');
const { createSale, getSalebyId, getSalesbyUserId } = require('./sales');

const router = express({ mergeParams: true });

router.post('/', createSale);
router.get('/:id', getSalebyId);
router.get('/customer/:id', getSalesbyUserId);

module.exports = router;
