const serviceSales = require('../../services/sales');

const createSale = async (req, res, next) => {
  try {
    const sale = req.body;
    
    const result = await serviceSales.createSale(sale);
    
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getSalebyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await serviceSales.getSaleById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSalesbyUserId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await serviceSales.getSalesByUserId(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSalesbySellerId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await serviceSales.getSalesBySellerId(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { createSale, getSalebyId, getSalesbyUserId, getSalesbySellerId };
