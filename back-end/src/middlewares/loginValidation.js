const md5 = require('md5');
const { user } = require('../database/models');

const errors = {
  emailFormat: { status: 400, message: '"email" must be a valid email' },
  emailEmpty: { status: 400, message: '"email" is required' },
  passwordLength: { status: 400, message: '"password" length must be 6 characters long' },
  passwordEmpty: { status: 400, message: '"password" is required' },
  userNotFound: { status: 404, message: 'Not found' },
  userNotAllowed: { status: 400, message: '"email" and "password" don\'t match' },
};

const isNotValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (email == null) return errors.emailEmpty;
  if (!regex.test(email)) return errors.emailFormat;
  return false;
};

const isNotValidPassword = (password) => {
  const passwordLength = 6;
  if (password == null) return errors.passwordEmpty;
  if (password.length < passwordLength) return errors.passwordLength;
  return false;
};

const doesUserExist = async (email) => {
  const userEmail = await user.findOne({ where: { email } });
  if (!userEmail) return false;
  return userEmail;
};

const doesEmailAndPasswordMatch = async (email, password) => {
  const foundUser = await user.findOne({ where: { email, password: md5(password) } });
  if (!foundUser) return errors.userNotAllowed;
  return false;
};

const loginValidation = async (req, _res, next) => {
  const { email, password } = req.body;

  const invalidEmail = isNotValidEmail(email);
  const invalidPassword = isNotValidPassword(password);
  const userExists = await doesUserExist(email);
  const unauthorizedUser = await doesEmailAndPasswordMatch(email, password);

  if (invalidEmail) return next(invalidEmail);
  if (invalidPassword) return next(invalidPassword);
  if (!userExists) return next(errors.userNotFound);
  if (unauthorizedUser) return next(unauthorizedUser);

  req.user = userExists;

  next();
};

module.exports = loginValidation;
