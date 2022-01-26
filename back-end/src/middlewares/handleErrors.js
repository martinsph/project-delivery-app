module.exports = (err, req, res, _next) => {
  console.log(err, 'linha 2');
  res.status(err.status).json({ message: err.message });
};
