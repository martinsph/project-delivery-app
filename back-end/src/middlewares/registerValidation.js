const errors = {
  emailFormat: { status: 400, message: '"email" must be a valid email' },
  emailEmpty: { status: 400, message: '"email" is required' },
  passwordLeght: { status: 400, message: '"password" length must be 6 characters long' },
  passwordEmpty: { status: 400, message: '"password" is required' },
  nameLenght: { status: 400, message: '"name" length must be 12 characters long' },
  nameEmpty: { status: 400, message: '"name" is required' },
};

const isValidName = (name) => {
  const nameLength = 12;
  if (name == null) throw errors.passwordEmpty;
  if (name.length < nameLength) throw errors.nameLenght;
};

const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (email == null) throw errors.emailEmpty;
  if (!regex.test(email)) throw errors.emailFormat;
};

const isValidPassword = (password) => {
  const passwordLength = 6;
  if (password == null) throw errors.passwordEmpty;
  if (password.length < passwordLength) throw errors.passwordLenght;
};

module.exports = { isValidEmail, isValidPassword, isValidName };
