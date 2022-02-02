const serviceSales = require('../../services/sales');

const createSale = async (req, res, next) => {
  try {
    const sale = req.body;

    const result = await serviceSales(sale);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createSale };
