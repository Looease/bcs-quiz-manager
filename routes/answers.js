var express = require('express');
var router = express.Router();
var passport = require('passport');
var quizService = require('../services/quizService.js');
var editAccess = require('../security/editAccess');
var viewAccess = require('../security/viewAccess');
var restrictedAccess = require('../security/restrictedAccess');


module.exports = router;

router.get('/answer/:title',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    function onSuccess(result) {
        let questions = result.rows;
        let quizid = result.rows;
        let answers = result.rows;
        res.render('answers/index', {
            questions: questions, 
            quizid: quizid, 
            answers: answers,
            answerIndex: ['A','B','C','D'],           
        });
    }
    quizService.getAnswers(req.params.title, onSuccess)
});

// router.get('/new/:id',passport.authenticate('jwt', { session: false }), function(req, res, next) {
//     function onSuccess(result) {
//         let questions = result.rows;
//         let quizid = result.rows;
//         let answers = result.rows;
//         res.render('answers/new', {
//             questions: questions, 
//             quizid: quizid, 
//             answers: answers,
//             answerIndex: ['A','B','C','D','E','F'],          
//         });
//     }
//     quizService.getAnswers(req.params.id, onSuccess)
// });

router.post('/',passport.authenticate('jwt', { session: false }),editAccess.editAccess, function(req, res) {
    function onSuccess(result) {
        res.redirect('/');
    }
    quizService.createNewQuiz(req.body, onSuccess)
});
///////Delete
// router.get('/delete/:id', function(req, res, next) {
//     function onSuccess(result) {
//         let questions = result.rows;
//         let quizid = result.rows;
//         let answers = result.rows;
//         res.render('answers/delete', {
//             questions: questions, 
//             quizid: quizid, 
//             answers: answers,
//             answerIndex: ['A','B','C','D'],          
//         });
//     }
//     quizService.getAnswers(req.params.id, onSuccess)
// });

router.get('/new',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.render('answers/new');
});

// router.post('/answer2/',passport.authenticate('jwt', { session: false }), function(req, res) {
//     function onSuccess(result) {
//        res.redirect('/');
// }
// quizService.deleteAnswer(req.body, onSuccess)
// });

// router.post('/answer3/',passport.authenticate('jwt', { session: false }), function(req, res) {
//     function onSuccess(result) {
//        res.redirect('/');
// }
// quizService.updateAnswer(req.body, onSuccess)
// });