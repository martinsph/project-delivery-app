const serviceSales = require('../../services/sales');

const createSale = async (req, res, next) => {
  try {
    const { products, totalPrice, deliveryAddress, deliveryNumber, userId, sellerId,
    } = req.body;

    const result = await serviceSales({
      products,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      userId,
      sellerId,
    });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { createSale };
