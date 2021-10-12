var express = require('express');
var router = express.Router();
var quizService = require('../services/quizService')

module.exports = router;

//Get all qiuzes
router.get('/', function(req, res, next) {
    function onSuccess(result) {
        let quiz = result.rows;
        res.render('quiz', {quiz: quiz});
    }
     quizService.getAllQuizes(onSuccess);
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