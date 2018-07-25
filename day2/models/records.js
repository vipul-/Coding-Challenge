var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/CodingChallenge2");

autoIncrement.initialize(connection);

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

recordSchema.plugin(autoIncrement.plugin, {
    model: 'Records',
    startAt: 1000
});

module.exports = mongoose.model("Records", recordSchema);