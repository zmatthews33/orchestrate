const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/orchestrate", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected");
});

// Routes
const routes = require("./routes");
app.use("/", routes);


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
