const express = require('express');
const login = require('./login');

const router = express({ mergeParams: true });

router.get('/', login);

module.exports = router;
