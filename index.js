const express = require("express")
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "production";
const app = express();
const routes = require("./routes/routes")
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

require("./services/mongooseConnection")

app.get("/", (req, res) => res.redirect("/problem"));
app.use("/problem", routes)


app.listen(PORT, function () {
     console.log(`${PORT} connected!`);
});