const { sale, salesProduct } = require('../database/models');

const sales = async (newsaleInfo) => {
  const {
    products, totalPrice, deliveryAddress, deliveryNumber, userId, sellerId,
  } = newsaleInfo;

  const newSale = await sale.create({
    totalPrice, deliveryAddress, deliveryNumber, userId, sellerId,
  });

  const { id: saleId } = newSale;

  await products.forEach(async (product) => {
    await salesProduct.create({
      productId: product.id,
      saleId,
      quantity: product.quantity,
    });
  });

  return newSale;
};

module.exports = sales;
