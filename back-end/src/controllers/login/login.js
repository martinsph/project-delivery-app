const services = require('../../services/login');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await services({ email, password });
    // console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = login;
