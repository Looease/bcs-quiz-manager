var express = require('express');
var router = express.Router();
let passport = require('passport');
let editAccess = require('../security/editAccess')

var quizService = require('../services/quizService.js');

module.exports = router;

router.get('/answer/:title',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(result) {
        //let quiz = result.rows;
        //let id = result.rows;
        let questions = result.rows;
        let quizid = result.rows;
        let answers = result.rows;
        //let questionid = result.rows;
        res.render('answers/index', {
            //quiz: quiz, 
            //id: id,
            questions: questions, 
            quizid: quizid, 
            answers: answers,
            answerIndex: ['A','B','C','D'],
            //questionId: questionid            
        });
    }
    //quizService.getAllData(onSuccess);
    quizService.getAnswers(req.params.title, onSuccess)
});