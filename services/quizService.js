const db = require('../db');

function getAllQuizes(onSuccess) {
    db.query("SELECT * FROM quizzes", [], onSuccess);
}
module.exports.getAllQuizes = getAllQuizes;


function getMathsQuizQuestionsAnswers(onSuccess) {
    db.query("SELECT * FROM quizzes JOIN questions ON questions.quizid = quizzes.id  JOIN answers on answers.questionid = questions.id WHERE quizzes.title = 'Maths'", [], onSuccess);
}
module.exports.getMathsQuizQuestionsAnswers = getMathsQuizQuestionsAnswers;

// function getHistoryQuiz(onSuccess) {

// }

// function getCsQuiz(onSuccess) {

// }

