const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  { timestamps: false, underscored: true });
  sale.associate = (model) => {
    sale.belongsTo(model.user,
      { foreingKey: 'user_id', as: 'user' });
    sale.belongsTo(model.user,
      { foreingKey: 'seller_id', as: 'seller' });
  }

  return sale;
};

module.exports = sale;
