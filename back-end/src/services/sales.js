const { sale, salesProduct } = require('../database/models');

const sales = async (newsaleInfo) => {
  const { products } = newsaleInfo;

  const newSale = await sale.create(newsaleInfo);

  await products.forEach(async (product) => {
    await salesProduct.create({
      productId: product.id,
      saleId: newSale.id,
      quantity: product.quantity,
    });
  });

  return newSale;
};

module.exports = sales;
