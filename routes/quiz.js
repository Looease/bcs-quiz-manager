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
        res.render('quiz/index', {
            quiz: quiz, 
            questions: questions, 
            answerIndex: ['A','B','C','D','A','B','C','D','A','B','C','D'], 
            answer: answer,
        });
    }
        quizService.getQuizQuestionsAndAnswers(req.params.title, onSuccess);
});

/* Create new quiz */
router.get('/new', function(req, res, next) {
        res.render('quiz/new');
});
router.post('/', function(req, res) {
    function onSuccess(result) {
        res.redirect('/');
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

//////////////////////////////// Edit 
router.get('/edit/:title',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let id = result.rows;
        let questions = result.rows;
        //let quizid = result.rows;
        //let answer = result.rows;
        let questionid = result.rows;
        res.render('quiz/edit', {
            quiz: quiz, 
            id: id,
            questions: questions, 
            title: 'title',
            //quizid: quizid, 
            //answer: answer,
            questionId: questionid            
        });
    }
    //quizService.getAllData(onSuccess);
    quizService.getQuestions(req.params.title, onSuccess)
});

// router.get('/answer/:title', function(req, res, next) {
//     res.render('quiz/answer');
// });

router.get('/answer/:id',passport.authenticate('jwt', { session: false }), editAccess.editAccess, function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        let id = result.rows;
        let questions = result.rows;
        let quizid = result.rows;
        let answer = result.rows;
        let questionid = result.rows;
        res.render('quiz/answer', {
            quiz: quiz, 
            id: id,
            questions: questions, 
            quizid: quizid, 
            answer: answer,
            questionId: questionid            
        });
    }
    //quizService.getAllData(onSuccess);
    quizService.getAnswers(req.params.id, onSuccess)
});




// router.post('/delete', function(req, res) {
//         //const bookId = parseInt(req.params.bookId)
//         //console.log(bookId);
//          function onSuccess(result) {
//             res.redirect('/quiz/home');
//     }
//     quizService.deleteQuiz(req.body, onSuccess)
// });


/* GET quiz start page. */
router.get('/start', function(req, res, next) {
    try{
        res.render('quiz/start');
    }
    catch(err){
        console.log(err);
    }  
});