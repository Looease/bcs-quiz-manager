var express = require('express');
var router = express.Router();
require('dotenv').config();
var usersService = require("../services/usersService")
var jwt = require('jsonwebtoken');

module.exports = router;

router.get('/login', function(req, res, next) {
  try
  {
    res.render('users/login', {layout: false});
  }
  catch (err) {
    console.log(err);
  }
  
});

router.post('/login', function(req, res, next) {
  function onSuccess(success, user) {
    if (!success) {
      res.render('error', { 
        message: 'No valid user', 
        layout: false,
        error: {title: 'User not recognised', message: ''} });
      return;
    } 
    const token = jwt.sign({ 
      user: {
        username: user.username
      }
    },
    process.env.AUTH_SECRET);
    
      res.cookie('token', token);
      res.redirect('/');
  }
  usersService.validateLogin(req.body, onSuccess)
});

router.get('/logout', function(req, res){
    req.destroy(function() {
    res.clearCookie('connect.sid');
    res.redirect('/users/login');
  });
});
 