// const saleKeyName = 'sale_id';
// const productKeyName = 'product_id';

const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    quantity: DataTypes.INTEGER,
    // saleId: { sale_id }
  },
  { timestamps: false, underscored: true, tableName: 'salesProducts' });

  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, { 
      as: 'products',
      through: salesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.product.belongsToMany(models.sale, { 
        as: 'sales',
        through: salesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
      }
  
  return salesProduct;
};

module.exports = salesProduct;
