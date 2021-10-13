var express = require('express');
var router = express.Router();
let helpers = require('../app.js')
let passport = require('passport');
var quizService = require('../services/quizService.js')

module.exports = router;


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

//Get all quizes
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  function onSuccess(result) {
      let quiz = result.rows;
      res.render('index', {
        quiz: quiz,
        meow: 'meow'
      });
  }
   quizService.getAllQuizes(onSuccess);
});