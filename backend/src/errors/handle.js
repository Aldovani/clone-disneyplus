const { ValidationError } = require("yup");
const errorHandle = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.message;
    });
    return response.status(200).json({ message:"Validation fails", errors });
  }
  console.log(error);
  return response.status(500).json({ error: "internal server error " });
};

module.exports = errorHandle;
