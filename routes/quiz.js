var express = require('express');
var router = express.Router();
var quizService = require('../services/quizService.js')

module.exports = router;

//Get all quizes
router.get('/home', function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        res.render('quiz/home', {quiz: quiz});
    }
     quizService.getAllQuizes(onSuccess);
});

// router.get('/view', function(req, res, next) {
//     function onSuccess(result) {
//         let quiz = result.rows;
//         res.render('quiz/view', {quiz: quiz});
//     }
//      quizService.getMathsQuiz(onSuccess);
//      //quizService.getMathsQuestionsQuiz(onSuccess);
//      //quizService.getMathsAnswers(onSuccess);
// });

router.get('/view', function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let questions = result.rows;
        let answer = result.rows
        res.render('quiz/view', {quiz: quiz, questions: questions, answer: answer});
    }
     //quizService.getMathsQuiz(onSuccess);
     quizService.getMathsQuizQuestionsAnswers(onSuccess);
     //quizService.getMathsAnswers(onSuccess);
});




/* GET quiz start page. */
router.get('/start', function(req, res, next) {
    try{
        res.render('quiz/start');
    }
    catch(err){
        console.log(err);
    }  
});