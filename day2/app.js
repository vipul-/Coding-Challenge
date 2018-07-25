//Dependencies
const express = require(express);
const mongoose = require(mongoose);

mongoose.connect("mongodb://localhost/CodingChallenge2");

//App Config
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

