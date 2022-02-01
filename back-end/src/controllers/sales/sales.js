const serviceSales = require('../../services/sales');

const createSale = async (req, res, next) => {
  try {
    const sale = req.body;

    const result = await serviceSales(sale);

    if (result.message) {
      next(result);
    }

    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { createSale };
