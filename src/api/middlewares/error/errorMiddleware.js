const errorMiddleware = (error, _req, res) => {
  console.log(error);
  return res.status(error.statusCode || 500).json({ message: error.message });
}

module.exports = { errorMiddleware };
