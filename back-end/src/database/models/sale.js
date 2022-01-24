const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  { timestamps: false });
  Sale.associate = (model) => {
    Sale.belongsTo(model.User,
      { foreingKey: 'user_id', as: 'user' },
      { foreingKey: 'seller_id', as: 'seller' });
  }

  return Sale;
};

module.exports = Sale;
