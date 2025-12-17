const simpleLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // move to next middleware
};

module.exports = simpleLogger;
