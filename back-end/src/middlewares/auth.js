const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();

const SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf8', flag:'r' });

const JWT_OPTIONS = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const jwtSign = (payload) => {
  const token = jwt.sign(payload, SECRET, JWT_OPTIONS);
  return token;
};

const jwtDecode = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decode = jwt.verify(token, SECRET)
    req.user = decode;
    next();
  }
  catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = {
  jwtSign,
  jwtDecode,
}