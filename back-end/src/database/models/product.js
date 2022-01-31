const product = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING,
  },
  { timestamps: false });

  return product;
};

module.exports = product;
