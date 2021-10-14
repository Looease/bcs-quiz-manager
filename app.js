var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var JwtStrategy = require('passport-jwt').Strategy;
var passport = require('passport');
var UserService = require('./services/usersService');// this is new
var CookieExtractor = require('./security/cookieExtractor');


var JwtStrategy = require('passport-jwt').Strategy;
var passport = require('passport');
var CookieExtractor = require('./security/cookieExtractor');

var opts = {}
opts.jwtFromRequest = CookieExtractor.cookieExtractor;
opts.secretOrKey = process.env.AUTH_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    UserService.findUser(jwt_payload['user'].username, function(err, user) {
        if (err) {
            return done(err, null);
        }
        return done(null, user);
    });
}));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var homeRouter = require('./routes/home'); // this is ne
var quizRouter = require('./routes/quiz'); // this is new
var questionRouter = require('./routes/questions'); // this is new
var answerRouter = require('./routes/answers'); // this is new


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/home', homeRouter); // this is new
app.use('/quiz', quizRouter); // this is new
app.use('/questions', questionRouter); // this is new
app.use('/answers', answerRouter); // this is new



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
