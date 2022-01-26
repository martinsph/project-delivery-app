const { jwtSign } = require('../middlewares/auth');

const login = async (user) => {
  const token = jwtSign(user);

  return { token };
};

module.exports = login; 
