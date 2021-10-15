var express = require('express');
var router = express.Router();
var passport = require('passport');
var quizService = require('../services/quizService.js');

module.exports = router;

router.get('/:title',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let questions = result.rows;
        let answer = result.rows
        res.render('questions/index', {
            quiz: quiz, 
            questions: questions, 
            answerIndex: ['A','B','C','D','A','B','C','D','A','B','C','D'], 
            answer: answer,
        });
    }
        quizService.getQuizQuestionsAndAnswers(req.params.title, onSuccess);
});

router.get('/questionsOnly/:id', passport.authenticate('jwt', { session: false }),  function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let questions = result.rows;
        res.render('questions/questionsOnly', {
            quiz: quiz,
            questions: questions,
        });
    }
     quizService.getQuestions(req.params.id, onSuccess);
  });

router.get('/edit/:id',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let questions = result.rows;
        let answer = result.rows;
        let questionid = result.rows;
        res.render('questions/edit', {
            quiz: quiz, 
            questions: questions, 
            answer: answer,
            questionId: questionid,           
        });
    }
    quizService.getQuestions(req.params.id, onSuccess)
});

router.get('/new', function(req, res, next) {
    res.render('/questions/new');
});

router.get('/delete', function(req, res, next) {
    res.render('/questions/delete');
});
