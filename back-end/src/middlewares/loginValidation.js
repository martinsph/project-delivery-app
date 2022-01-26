const errors = {
  emailFormat: { status: 400, message: '"email" must be a valid email' },
  emailEmpty: { status: 400, message: '"email" is required' },
  passwordLength: { status: 400, message: '"password" length must be 6 characters long' },
  passwordEmpty: { status: 400, message: '"password" is required' },
};

const isNotValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (email == null) return errors.emailEmpty;
  if (!regex.test(email)) return errors.emailFormat;
  return false;
};

const isNotValidPassword = (password) => {
  const passwordLength = 6;
  if (password == null) return errors.passwordEmpty;
  if (password.length < passwordLength) return errors.passwordLength;
  return false;
};

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const invalidEmail = isNotValidEmail(email);
  const invalidPassword = isNotValidPassword(password);
  if (invalidEmail) return next(invalidEmail);
  console.log(invalidEmail);
  if (invalidPassword) return next(invalidPassword);
  next();
}

module.exports = loginValidation;
