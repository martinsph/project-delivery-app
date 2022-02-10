const { sale, salesProduct, user, product } = require('../database/models');

const createSale = async ({ 
  totalPrice, deliveryAddress, deliveryNumber, products, userId, sellerId }) => {
  const newSale = await sale.create({
    totalPrice, deliveryAddress, deliveryNumber, userId, sellerId,
  });

  products.map(async ({ id, quantity }) => salesProduct.create(
    { productId: id, saleId: newSale.id, quantity },
    ));
    
    // for (let i = 0; i < products.length; i++) {
      //   // console.log(products[i].id);
      //   await salesProduct.create({
        //         product_id: products[i].id,
        //         sale_id: newSale.id,
        //         quantity: products[i].quantity,
        //       });
        // }
        
        // await products.forEach(async (productInfo) => {
        //   await salesProduct.create({
        //     productId: productInfo.id,
        //     saleId: newSale.id,
        //     quantity: productInfo.quantity,
        //   });
        // });
        
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
  const getSale = await sale.findAll({ where: { userId }, 
    attributes: { exclude: ['deliveryAddress', 'deliveryNumber', 'userId', 'sellerId'] } });
  
  return getSale;
};

const getSalesBySellerId = async (sellerId) => {
  const getSale = await sale.findAll({ where: { sellerId }, 
    attributes: { exclude: ['userId', 'sellerId'] } });
  
  return getSale;
};

module.exports = { createSale, getSaleById, getSalesByUserId, getSalesBySellerId };
