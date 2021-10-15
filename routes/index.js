var express = require('express');
var router = express.Router();
var passport = require('passport');
var quizService = require('../services/quizService.js');
var editAccess = require('../security/editAccess');
var viewAccess = require('../security/viewAccess');
var restrictedAccess = require('../security/restrictedAccess');

module.exports = router;

router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  function onSuccess(result) {
      let quiz = result.rows;
      let user = result.rows;
      res.render('index', {
        quiz: quiz,
        isAdmin: req.user.role === "admin",
        isView: req.user.role === "view",
        isRestricted: req.user.role === "restricted"
      });
  }
   quizService.getAllQuizes(onSuccess);
});