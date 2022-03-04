const router = require("express").Router();
const Problem = require("../models/Problems");

router.get("/", function (req, res) {
    Problem.find({}, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            console.log(results);
        }
    })
});

router.post("/", (req,res) => {
    const problem = new Problem({
        input: req.body.input,
        units: req.body.units,
        answer: req.body.answer
    });
    problem.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success ")
        }
    })
});

module.exports = router;
