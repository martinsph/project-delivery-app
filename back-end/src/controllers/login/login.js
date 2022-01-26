const services = require('../../services/login');

const login = async (req, res, next) => {
  try {
    const { dataValues } = req.user;
    const result = await services(dataValues);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = login;
