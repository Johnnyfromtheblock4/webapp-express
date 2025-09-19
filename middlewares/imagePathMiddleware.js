const setImagePath = (req, res, next) => {
  req.setImagePath = `${req.protocol}://${req.get("host")}/movies_cover`;
  next();
};

module.exports = setImagePath;
