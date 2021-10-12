var express = require('express');
var router = express.Router();
//let usersService = require("../services/usersService")
//var jwt = require('jsonwebtoken');

module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/login');
});

router.get('/login', function(req, res, next) {
  try
  {
    res.render('users/login');
  }
  catch (err) {
    console.log(err);
  }
  
});

router.post('/login', function(req, res, next) {
  function onSuccess(success, user) {
    if (!success) {
      res.render('error', { message: 'No valid user', error: {title: 'User not recognised', message: ''} });
      return;
    } 
    const token = jwt.sign({ 
      user: {
        username: user.username
      }
    },
    // Your secret, e.g. here set by environment variable
    process.env.AUTH_SECRET);
    
      res.cookie('token', token);
      res.redirect('/books');
  }

  usersService.validateLogin(req.body, onSuccess)
});
