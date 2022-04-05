const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expresslayout = require("express-ejs-layouts");
const PORT = process.env.port || 3000;
// assets
app.use(express.static('public'));
// set template engine
app.use(expresslayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/cart", function (req, res) {
    res.render("customers/cart");
});
app.get("/login", function (req, res) {
    res.render("auth/login");
});
app.get("/register", function (req, res) {
    res.render("auth/register");
});
app.listen(PORT, function () {
    console.log('Started on port 3000 ');
});