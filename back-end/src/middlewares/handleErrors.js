module.exports = (err, req, res, _next) => {
<<<<<<< HEAD
  console.log(err);
=======
>>>>>>> 9a6daadb778ad2ef984c9065f11273ecd8208c0b
  res.status(err.status || 500).json({ message: err.message });
};
