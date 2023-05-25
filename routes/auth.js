// routes/auth.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// router.get("/", (req, res) => {
//   res.send("Welcome to Shooma");
// });

// Registration route
router.post("/register", userController.register);


module.exports = router;
