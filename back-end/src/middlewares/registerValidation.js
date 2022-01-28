const { user } = require('../database/models');

const errors = {
  emailFormat: { status: 400, message: '"email" must be a valid email' },
  emailEmpty: { status: 400, message: '"email" is required' },
  passwordLength: { status: 400, message: '"password" length must be 6 characters long' },
  passwordEmpty: { status: 400, message: '"password" is required' },
  nameLength: { status: 400, message: '"name" length must be 12 characters long' },
  nameEmpty: { status: 400, message: '"name" is required' },
  userExists: { status: 409, message: 'User already registered' },
};

const isNotValidName = (name) => {
  const nameLength = 12;
  if (name == null) return errors.passwordEmpty;
  if (name.length > nameLength) return errors.nameLength;

  return false;
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

const doesUserExist = async (email, name) => {
  const userEmail = await user.findOne({ where: { email } });
  const userName = await user.findOne({ where: { name } });

  if (userEmail || userName) return errors.userExists;

  return false;
};

const registerValidation = async (req, _res, next) => {
  const { name, email, password } = req.body;

  const invalidName = isNotValidName(name);
  const invalidEmail = isNotValidEmail(email);
  const invalidPassword = isNotValidPassword(password);
  const userAlreadyExists = await doesUserExist(email, name);

  if (invalidName) return next(invalidName);
  if (invalidEmail) return next(invalidEmail);
  if (invalidPassword) return next(invalidPassword);
  if (userAlreadyExists) return next(userAlreadyExists);

  next();
};

module.exports = registerValidation;
