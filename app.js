var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("Home");
});

app.listen(4000, () => {
  console.log("Auth server is up!");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});
