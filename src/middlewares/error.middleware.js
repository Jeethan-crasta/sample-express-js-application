const AppError = require("../utils/AppError");

module.exports = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Default values
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";

  // Programming or unknown errors
  if (!error.isOperational) {
    console.error("ERROR 💥", err);
  }

  res.status(statusCode).json({
    status,
    message: error.message || "Something went wrong"
  });
};
