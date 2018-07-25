//Dependencies
const express = require(express);
const mongoose = require(mongoose);
const Records = require("./models/records")

mongoose.connect("mongodb://localhost/CodingChallenge2");

//App Config
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//App routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.listen(8080, () => {
    console.log("Server listening on port 8080!");
});