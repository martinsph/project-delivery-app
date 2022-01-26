const serviceRegister = require('../../services/register');

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const result = await serviceRegister({ name, email, password, role });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = register;
