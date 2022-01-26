const { User } = require('../database/models');
const { isValidEmail, isValidPassword } = require('../middlewares/loginValidation');
const { jwtSign } = require('../middlewares/auth');

const errors = {
  userNotFound: { status: 404, message: 'Not found' },
};

const getUserByEmailService = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  if (!userEmail) return next(errors.userNotFound);
  return userEmail;
};

const login = async (loginInfo) => {
  const { email, password } = loginInfo;

  isValidEmail(email);
  isValidPassword(password);
  await getUserByEmailService(email);

  const token = jwtSign({ email, password });

  return { token };
};

module.exports = login; 
