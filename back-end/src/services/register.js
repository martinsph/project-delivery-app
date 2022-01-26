const { User } = require('../database/models');
const { jwtSign } = require('../middlewares/auth');
const md5 = require('md5');

const register = async (newUserInfo) => {
  const { name, email, password, role } = newUserInfo;

  const passwordMd5 = md5(password);

  const newUser = await User.create({ name, email, password: passwordMd5, role });

  const token = jwtSign(newUser.dataValues);

  return { token };
};

module.exports = register;
