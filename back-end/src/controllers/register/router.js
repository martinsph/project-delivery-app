const express = require('express');
const register = require('./register');

const router = express({ mergeParams: true });

router.get('/', register);

module.exports = router;
