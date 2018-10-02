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
app.use(bodyParser.urlencoded({ extended: true }));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//ROUTES
app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

//Auth Routes
//show sign up for
app.get("/register", (req, res) => {
  res.render("register");
});

//handling user sign up info
app.post("/register", (req, res) => {
  req.body.username;
  req.body.password;
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log("error");
        return res.render("register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secret");
        });
      }
    }
  );
});

app.listen(4000, () => {
  console.log("Auth server is up!");
});
