const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
