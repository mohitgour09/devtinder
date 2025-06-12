const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Enter first Name & Last Name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Enter valide Email Address");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a Strong password");
  }
};

module.exports = { validateSignUpData };
