const express = require('express');
const { createSale, 
  getSalebyId, 
  getSalesbyUserId, 
  getSalesbySellerId } = require('./sales');

const router = express({ mergeParams: true });

router.post('/', createSale);
router.get('/:id', getSalebyId);
router.get('/customer/:id', getSalesbyUserId);
router.get('/seller/:id', getSalesbySellerId);

module.exports = router;
