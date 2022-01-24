const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false });

  return SalesProduct;
};

module.exports = SalesProduct;
