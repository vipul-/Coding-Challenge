//TODO:
    //CSS
    //Update form -> Radio Button, date

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
    Records.find((err, allRecords) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { allRecords: allRecords });
        }
    });
});

app.get("/update/:id", (req,res) => {
    Records.find({ _id: req.params.id }, (err, record) => {
        if (err) {
            console.log(err);
        } else {
            res.render("update", { record: record[0] });
        }
    });
});

app.post("/update/:id", (req, res) => {
    Records.findByIdAndUpdate(req.params.id, { 
            name: req.body.name,
            address: req.body.address,
            gender: req.body.gender,
            salary: req.body.salary,
            dob: req.body.dob,
            startdate: req.body.startdate,
            post: req.body.post,
            contactno: req.body.contactno,
            qualifications: req.body.qualifications 
        }, (err, updatedRecord) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", (req, res) => {
    var newRecord = {
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