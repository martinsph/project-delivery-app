const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct", {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false });

  salesProduct.associate = (models) => {
      models.product.belongsToMany(models.product, { 
          as: 'product', 
          through: salesProduct,
          foreignKey: 'product_id',
          otherKey: 'sale_id',
        });
      models.sale.belongsToMany(models.sale, { 
          as: 'sales', 
          through: salesProduct,
          foreignKey: 'sale_id',
          otherKey: 'product_id',
        });
      }
  
  return salesProduct;
};

module.exports = salesProduct;
