// Import dependencies
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// Create Express app
const app = express();
const port = 3000;

const router = express.Router();
const userController = require("./controllers/userController");

// Middleware to parse request bodies as JSON
app.use(express.json());

// Configure session middleware
const generateSessionSecret = require("./sessionSecretGenerator");

// Generate the session secret key
const sessionSecret = generateSessionSecret();

app.use(
  session({
    secret: `${sessionSecret}`,
    resave: false,
    saveUninitialized: false,
  })
);

// Configure flash messages middleware
app.use(flash());

// Configure Passport
app.use(passport.initialize());
app.use(passport.session());


//Update the server.js file to include the MongoDB connection and user registration routes
const mongoose = require("mongoose");
const User = require("./models/user");


// Import routes
const authRoutes = require('./routes/auth');

// Set up routes
app.use('/', authRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/shooma", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



//Make sure to include the necessary body parsing middleware to parse the request body in your Express app
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





//Configure the Facebook authentication strategy in your server.js file

