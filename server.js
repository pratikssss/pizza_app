const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expresslayout = require("express-ejs-layouts");
const PORT = process.env.port || 3000;
app.get("/", function (req, res) {
    res.render("home");
});

// set template engine
app.use(expresslayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
app.listen(PORT, function () {
    console.log(' Started on port ${PORT} ');
});