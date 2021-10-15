var express = require('express');
var router = express.Router();
var passport = require('passport');
var editAccess = require('../security/editAccess')
var quizService = require('../services/quizService.js');

module.exports = router;

/* Create new quiz */
router.get('/new',passport.authenticate('jwt', { session: false }),editAccess.editAccess, function(req, res, next) {
        res.render('quiz/new');
});
router.post('/', function(req, res) {
    function onSuccess(result) {
        // res.redirect('/');
    }
    console.log('Louise', req.body )
    quizService.createNewQuiz(req.body, onSuccess)
});

//////////////////////////////// Delete
router.get('/delete',passport.authenticate('jwt', { session: false }),editAccess.editAccess, function(req, res, next) {
    res.render('quiz/delete');
});

router.post('/delete', function(req, res) {
         function onSuccess(result) {
            res.redirect('/');
    }
    quizService.deleteQuiz(req.body, onSuccess)
});



// router.get('/answer/:title', function(req, res, next) {
//     res.render('quiz/answer');
// });

// router.post('/delete', function(req, res) {
//         //const bookId = parseInt(req.params.bookId)
//         //console.log(bookId);
//          function onSuccess(result) {
//             res.redirect('/quiz/home');
//     }
//     quizService.deleteQuiz(req.body, onSuccess)
// });


// /* GET quiz start page. */
// router.get('/start', function(req, res, next) {
//     try{
//         res.render('quiz/start');
//     }
//     catch(err){
//         console.log(err);
//     }  
// });