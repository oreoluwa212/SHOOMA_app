const crypto = require("crypto");

// Generate a random session secret key
const generateSessionSecret = () => {
  const length = 32; // Adjust the key length as per your requirements
  return crypto.randomBytes(length).toString("hex");
};

module.exports = generateSessionSecret;
