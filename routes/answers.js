var express = require('express');
var router = express.Router();
var passport = require('passport');
var quizService = require('../services/quizService.js');
var editAccess = require('../security/editAccess');

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
            answerIndex: ['A','B','C','D', 'E', 'F', 'G'],
            true: true, 
            false: false,       
        });
    }
    quizService.getAnswers(req.params.title, onSuccess)
});

router.post('/',passport.authenticate('jwt', { session: false }),editAccess.editAccess, function(req, res) {
    function onSuccess(result) {
        res.redirect('/');
    }
    quizService.createNewQuiz(req.body, onSuccess)
});
router.get('/new',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.render('answers/new');
});
router.get('/updated',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.render('answers/updated');
});
router.get('/delete',passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.render('answers/delete');
});
