const notFound = (req, res, next) => {
  res.status(404).json({
    error: "404 - Rotta non trovata",
    message: "L'endpoint cercato non esiste",
  });
};

module.exports = notFound;
