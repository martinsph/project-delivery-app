const services = require('../../services/products');

const products = async (req, res, next) => {
  try {
    const result = await services();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = products;
