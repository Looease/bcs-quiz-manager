var express = require('express');
var router = express.Router();
let passport = require('passport');
var quizService = require('../services/quizService.js');
var userService = require('../services/usersService.js');
let editAccess = require('../security/editAccess');
let viewAccess = require('../security/viewAccess');
let restrictedAccess = require('../security/restrictedAccess');

module.exports = router;

//Get all quizzes landing page
router.get('/', passport.authenticate('jwt', { session: false }),  function(req, res, next) {
  function onSuccess(result) {
      let quiz = result.rows;
      let user = console.log(result.rows);
      res.render('index', {
        quiz: quiz,
        isAdmin: req.user.role === "admin",
        isView: req.user.role === "view",
        isRestricted: req.user.role === "restricted"
      });
  }
   quizService.getAllQuizes(onSuccess);
});