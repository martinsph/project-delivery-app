const { jwtSign } = require('../middlewares/auth');

const login = async (user) => {
  const token = jwtSign(user);

  const userInfo = {
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };

  return userInfo;
};

module.exports = login; 
