const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  { timestamps: false });
  sale.associate = (model) => {
    sale.belongsTo(model.user,
      { foreingKey: 'user_id', as: 'user' },
      { foreingKey: 'seller_id', as: 'seller' });
  }

  return sale;
};

module.exports = sale;
