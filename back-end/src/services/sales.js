const { sale, salesProduct, user, product } = require('../database/models');

const createSale = async (newsaleInfo) => {
  const { products } = newsaleInfo;

  const newSale = await sale.create(newsaleInfo);

  await products.forEach(async (productInfo) => {
    await salesProduct.create({
      productId: productInfo.id,
      saleId: newSale.id,
      quantity: productInfo.quantity,
    });
  });

  return newSale;
};

const getSaleById = async (id) => {
  const getSale = await sale.findByPk(
    id, {
    include: [
      { model: user, as: 'seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  },
  );
  
  return getSale;
};

const getSalesByUserId = async (userId) => {
  const getSale = await sale.findAll({ where: { userId }, attributes: { 
    exclude: ['deliveryAddress','deliveryNumber','userId', 'sellerId'] } });
  
  return getSale;
};

module.exports = { createSale, getSaleById, getSalesByUserId };
