var mongoose = require("mongoose");

var recordSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    address: String,
    gender: String,
    salary: Number,
    dob: Date,
    startdate: Date,
    post: String,
    contactno: Number,
    qualifications: String
});

module.exports = mongoose.model("Records", recordSchema);