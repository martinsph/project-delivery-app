const md5 = require('md5');
const { user } = require('../database/models');
const { jwtSign } = require('../middlewares/auth');

const register = async (newUserInfo) => {
  const { name, email, password, role } = newUserInfo;

  const passwordMd5 = md5(password);

  const newUser = await user.create({ name, email, password: passwordMd5, role });

  const token = jwtSign(newUser.dataValues);

  const userInfo = {
    name,
    email,
    role,
    token,
  };

  return userInfo;
};

module.exports = register;
