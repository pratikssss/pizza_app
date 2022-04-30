require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const expresslayout = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("express-flash");
var passport = require("passport");
const Mongostore = require('connect-mongo');
const { json } = require("express");
const PORT = process.env.port || 8000;
const connection = mongoose.connection;
app.use(express.json());   // to use json data in app
app.use(express.urlencoded({ extended: false }));  // to get data of forms etc etc
app.use(flash());  // messages can be flashed

//session - config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 60 * 60 * 24 },      // 24 hours (time in ms)   (cookie lifetime)
    store: new Mongostore({
        mongoUrl: 'mongodb+srv://Pratik:pratik@cluster0.9nmq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', //YOUR MONGODB URL
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native'
    })
}));

// passport config (for login)
const passportInit = require('./app/config/passport');
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());

// global middleware
app.use((req, res, next) => {
    res.locals.session = req.session;      // so that session variable can be used anywhere
    res.locals.user = req.user;            //  so that user can be used anywhere 
    next();
});
// assets
app.use(express.static('public'));
// set template engine
app.use(expresslayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

// connecting web.js
require('./routes/web.js')(app);

mongoose.connect("mongodb+srv://Pratik:pratik@cluster0.9nmq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true });

// const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "Connection error"));
connection.once('open', () => {
    console.log("DB connected");
});


app.listen(PORT, function () {
    console.log('Started on port 8000 ');
});