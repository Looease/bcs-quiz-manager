var express = require('express');
var router = express.Router();
let passport = require('passport');
let editAccess = require('../security/editAccess')

var quizService = require('../services/quizService.js');

module.exports = router;

//////////////////////////////// Delete
router.get('/delete', function(req, res, next) {
    res.render('manage/delete');
});

router.post('/delete', function(req, res) {
        //const bookId = parseInt(req.params.bookId)
        //console.log(bookId);
         function onSuccess(result) {
            res.redirect('/quiz/index');
    }
    quizService.deleteQuiz(req.body, onSuccess)
});