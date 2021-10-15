var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var JwtStrategy = require("passport-jwt").Strategy;
var passport = require("passport");
var UserService = require("./services/usersService"); // this is new
var CookieExtractor = require("./security/cookieExtractor");

var quizService = require("./services/quizService.js");

var JwtStrategy = require("passport-jwt").Strategy;
var passport = require("passport");
var CookieExtractor = require("./security/cookieExtractor");

var opts = {};
opts.jwtFromRequest = CookieExtractor.cookieExtractor;
opts.secretOrKey = process.env.AUTH_SECRET;

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    UserService.findUser(jwt_payload["user"].username, function (err, user) {
      if (err) {
        return done(err, null);
      }
      return done(null, user);
    });
  })
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var quizRouter = require("./routes/quiz");
var questionRouter = require("./routes/questions");
var answerRouter = require("./routes/answers"); //

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/quiz", quizRouter); 
app.use("/questions", questionRouter); 
app.use("/answers", answerRouter); 

app.post(
  "/answers-new",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      res.redirect("/answers/new");
    }
    quizService.createAnswer(req.body, onSuccess);
  }
);

app.post(
  "/answers/delete",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      res.redirect("/answers/delete");
    }
    quizService.deleteAnswer(req.body, onSuccess);
  }
);

app.post(
  "/answers/updated",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      console.log(result);
      res.redirect("/answers/updated");
    }
    quizService.updateAnswer(req.body, onSuccess);
  }
);

app.post(
  "/questions-new",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      res.redirect("/answers/new");
    }
    quizService.createQuestion(req.body, onSuccess);
  }
);

app.post(
  "/questions/delete",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      res.redirect("/answers/delete");
      console.log(req.body)
    }
    quizService.deleteQuestion(req.body, onSuccess);
  }
);

app.post(
  "/questions-updated",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      console.log(result);
      res.redirect("/answers/updated");
    }
    quizService.updateQuestion(req.body, onSuccess);
  }
);

app.post(
  "/quiz-updated",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    function onSuccess(result) {
      res.redirect("/answers/updated");
    }
    quizService.updateQuiz(req.body, onSuccess);
  }
);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
