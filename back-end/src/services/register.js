const { User } = require('../database/models');
const { isValidName ,isValidEmail, isValidPassword } = require('../middlewares/registerValidation');
const { jwtSign } = require('../middlewares/auth');

const errors = {
  emailExists: { status: 409, message: 'User already registered' },
};

const getUserByEmailService = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) throw errors.emailExists;
  return userEmail;
};

const register = async (newUserInfo) => {
  const { name, email, password, role } = newUserInfo;

  isValidName(name);
  isValidEmail(email);
  isValidPassword(password);
  await getUserByEmailService(email);

  const { dataValues: { id } } = await User.create({ name, email, password, role });

  const token = jwtSign({ id, email });

  return token;
};

module.exports = register;
