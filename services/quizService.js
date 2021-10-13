const db = require('../db');

function getAllQuizes(onSuccess) {
    db.query("SELECT * FROM quizzes", [], onSuccess);
}
module.exports.getAllQuizes = getAllQuizes;

function getMathsQuizQuestionsAnswers(onSuccess) {
    db.query("SELECT * FROM quizzes JOIN questions ON questions.quizid = quizzes.id  JOIN answers on answers.questionid = questions.id WHERE quizzes.title = 'Maths'", [], onSuccess);
}
module.exports.getMathsQuizQuestionsAnswers = getMathsQuizQuestionsAnswers;

function getHistoryQuizQuestionsAnswers(onSuccess) {
    db.query("SELECT * FROM quizzes JOIN questions ON questions.quizid = quizzes.id  JOIN answers on answers.questionid = questions.id WHERE quizzes.title = 'History'", [], onSuccess);
}
module.exports.getHistoryQuizQuestionsAnswers = getHistoryQuizQuestionsAnswers;


function getCSQuizQuestionsAnswers(onSuccess) {
    db.query("SELECT * FROM quizzes JOIN questions ON questions.quizid = quizzes.id  JOIN answers on answers.questionid = questions.id WHERE quizzes.title = 'Computer Science'", [], onSuccess);
}
module.exports.getCSQuizQuestionsAnswers = getCSQuizQuestionsAnswers;


////////////////////////////////////////////////////////////////Create new 
function createNewQuiz(quizzes, onSuccess){
    db.query("INSERT INTO quizzes(title) VALUES ($1)", [quizzes.title], onSuccess)
}
module.exports.createNewQuiz = createNewQuiz;

//////////////////////////////// DeleteBook
function deleteQuiz(quizzes, onSuccess) {
    db.query('DELETE FROM quizzes WHERE "title" = ($1)', [quizzes.title], onSuccess);
}
module.exports.deleteQuiz = deleteQuiz;

