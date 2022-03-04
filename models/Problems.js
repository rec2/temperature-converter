const mongoose = require("mongoose");

const ProblemsSchema = new mongoose.Schema({
    input: {
        type: Number,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    answer: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
    }
});

module.exports = mongoose.model("Problem", ProblemsSchema)