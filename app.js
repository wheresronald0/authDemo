var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user");

mongoose.connect(
  "mongodb://localhost/auth_demo_app",
  { useNewUrlParser: true }
);

var app = express();
app.use(
  require("express-session")({
    secret: "Max was the best cat but now hes dead",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.render("Home");
});

app.listen(4000, () => {
  console.log("Auth server is up!");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});
