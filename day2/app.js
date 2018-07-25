//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Records = require("./models/records");

mongoose.connect("mongodb://localhost/CodingChallenge2");

//App Config
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//App routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", (req, res) => {
    var newRecord = {
        _id: 1,
        name: req.body.name,
        address: req.body.address,
        gender: req.body.gender,
        salary: req.body.salary,
        dob: req.body.dob,
        startdate: req.body.startdate,
        post: req.body.post,
        contactno: req.body.contactno,
        qualifications: req.body.qualifications
    }
    Records.create(newRecord, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.listen(8080, () => {
    console.log("Server listening on port 8080!");
});