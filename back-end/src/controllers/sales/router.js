const express = require('express');
const { createSale, getSalebyId } = require('./sales');

const router = express({ mergeParams: true });

router.post('/', createSale);
router.get('/:id', getSalebyId);

module.exports = router;
