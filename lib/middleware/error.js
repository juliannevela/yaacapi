module.exports = (err, req, res, next) => {
  err.status ? res.status(err.status) : res.status(500);

  res.send({
    message: err.message,
    error: err,
  });
};
