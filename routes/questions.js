var express = require('express');
var router = express.Router();
let passport = require('passport');
let editAccess = require('../security/editAccess')

var quizService = require('../services/quizService.js');

module.exports = router;

router.get('/:title', function(req, res, next) {
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
        console.log(req)
        quizService.getQuizQuestionsAndAnswers(req.params.title, onSuccess);
});

//////////////////////////////// Edit 
router.get('/edit/:title',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let id = result.rows;
        let questions = result.rows;
        //let quizid = result.rows;
        //let answer = result.rows;
        let questionid = result.rows;
        res.render('questions/edit', {
            quiz: quiz, 
            id: id,
            questions: questions, 
            //quizid: quizid, 
            //answer: answer,
            questionId: questionid            
        });
    }
    console.log(title)
    //quizService.getAllData(onSuccess);
    quizService.getQuestions(req.params.title, onSuccess)
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
     console.log(req)
     quizService.getQuestions(req.params.id, onSuccess);
  });