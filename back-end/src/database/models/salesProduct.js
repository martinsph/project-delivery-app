const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false });

    SalesProduct.associate = (models) => {
      models.Product.belongsToMany(models.Product, { 
          as: 'product', 
          through: SalesProduct,
          foreignKey: 'product_id',
          otherKey: 'sale_id',
        });
      models.Sale.belongsToMany(models.Sale, { 
          as: 'sales', 
          through: SalesProduct,
          foreignKey: 'sale_id',
          otherKey: 'product_id',
        });
      }
  
  return SalesProduct;
};

module.exports = SalesProduct;
