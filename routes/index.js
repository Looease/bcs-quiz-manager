var express = require('express');
var router = express.Router();
let passport = require('passport');
var quizService = require('../services/quizService.js');
let editAccess = require('../security/editAccess');
let viewAccess = require('../security/viewAccess');
let restrictedAccess = require('../security/restrictedAccess');

module.exports = router;

//Get all quizes
router.get('/', passport.authenticate('jwt', { session: false }),  function(req, res, next) {
  function onSuccess(result) {
      let quiz = result.rows;
      res.render('index', {
        quiz: quiz,
        meow: 'meow',
      });
  }
   quizService.getAllQuizes(onSuccess);
});