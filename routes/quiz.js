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


router.get('/view', function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let questions = result.rows;
        let answer = result.rows
        res.render('quiz/view', {quiz: quiz, questions: questions, answer: answer});
    }
    //if(){
        quizService.getMathsQuizQuestionsAnswers(onSuccess);
    //}
    //else if(){
      //  quizService.getHistoryQuizQuestionsAnswers(onSuccess);
    //}
    //else if(activeButton && button.dataset.index === 3){
    //    quizService.getCSQuizQuestionsAnswers(onSuccess); 
    //}
    //else{
     //   console.log('Error')
    //}
});

/* Create new quiz */
router.get('/new', function(req, res, next) {
        res.render('quiz/new');
});
router.post('/', function(req, res) {
    function onSuccess(result) {
        res.redirect('/home');
    }
    quizService.createNewQuiz(req.body, onSuccess)
});

//////////////////////////////// Delete
router.get('/delete', function(req, res, next) {
    res.render('quiz/delete');
});

router.post('/delete', function(req, res) {
        //const bookId = parseInt(req.params.bookId)
        //console.log(bookId);
         function onSuccess(result) {
            res.redirect('/quiz/home');
    }
    quizService.deleteQuiz(req.body, onSuccess)
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