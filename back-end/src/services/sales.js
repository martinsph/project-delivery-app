const { sale } = require('../database/models');

const sales = async (newsaleInfo) => {
  const {
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    userId,
    sellerId,
  } = newsaleInfo;

  const newSale = await sale.create({
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    userId,
    sellerId,
  });

  console.log(newSale);

  return newSale;
};

module.exports = sales;
