const express = require('express');
const login = require('./login');
const loginValidation = require('../../middlewares/loginValidation');

const router = express({ mergeParams: true });

router.post('/', loginValidation, login);

module.exports = router;
