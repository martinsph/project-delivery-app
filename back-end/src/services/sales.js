const { sale } = require('../database/models');

const sales = async (newsaleInfo) => {
  const {
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    userId,
    sellerId,
  } = newsaleInfo;

  console.log(newsaleInfo);

  const newSale = await sale.create({
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    userId,
    sellerId,
  });

  return newSale;
};

module.exports = sales;
