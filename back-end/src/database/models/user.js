const user = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  { timestamps: false, underscored: true });
  user.associate = (model) => {
    user.hasMany(model.sale,
      { foreingKey: 'user_id', as: 'user' },
      { foreingKey: 'seller_id', as: 'seller' });
  }

  return user;
};

module.exports = user;
