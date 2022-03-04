const mongoose = require("mongoose");

const ProblemsSchema = new mongoose.Schema({
    problem: {
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
        grade: ["correct", "incorrect", "invalid"]
    }
});

const Problem = mongoose.model("Problem", ProblemsSchema)

module.export.Create = (req, res) => {
    const problem = new Problem({
        problemID: req.body.id
    });
    problem.save(function (err) {

};
