const express = require('express');
const registerValidation = require('../../middlewares/registerValidation');
const register = require('./register');

const router = express({ mergeParams: true });

router.post('/', registerValidation, register);

module.exports = router;
