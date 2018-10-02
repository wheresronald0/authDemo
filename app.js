var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mondodb://localhost/auth_demo_app");

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
