const express = require("express");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//sessions
app.use(
    session({
      secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
      resave: false, //required
      saveUninitialized: false //required
    })
    )

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});
// MORGAN HTTP LOGGER
morgan("tiny");

// MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/orchestrate", {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected");
});

// Routes
const routes = require("./routes");
app.use("/", routes);

app.post('/user', (req, res) => {
    console.log('user signup');
    req.session.username = req.body.username;
    res.end()
  })

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
