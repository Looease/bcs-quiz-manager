const db = require('../db');

function getAllQuizes(onSuccess) {
    db.query("SELECT * FROM quizzes", [], onSuccess);
}
module.exports.getAllQuizes = getAllQuizes;

function getQuizQuestionsAndAnswers(title, onSuccess) {
    db.query("SELECT * FROM quizzes JOIN questions ON questions.quizid = quizzes.id  JOIN answers on answers.questionid = questions.id WHERE quizzes.title = ($1)", [title], onSuccess);
}
module.exports.getQuizQuestionsAndAnswers = getQuizQuestionsAndAnswers;

function getQuestions(id, onSuccess) {
    db.query("SELECT * from questions WHERE quizid = ($1)", [id], onSuccess);
}
module.exports.getQuestions = getQuestions;

function getAnswers(id, onSuccess) {
    db.query("SELECT * FROM answers JOIN questions ON answers.questionid = questions.id WHERE questions.id = ($1)", [id], onSuccess);
}
    module.exports.getAnswers = getAnswers;


////////////////////////////////Delte Question 
function deleteQuestion(id, onSuccess) {
    db.query("DELETE FROM questions where questions VALUES ($1)", [id], onSuccess)
}
module.exports.deleteQuestion = deleteQuestion;

////////////////////////////////Create Question

function getQuizid(id, onSuccess) {
    db.query("SELECT quizid FROM questions WHERE quizid = ($1)", [id], onSuccess)
}
module.exports.getQuizid = getQuizid;

function createQuestion(questions, onSuccess){
    db.query("INSERT INTO questions(questions) VALUES ($1)", [questions.question, questions.quizid], onSuccess);
}
module.exports.createQuestion = createQuestion;

////////////////////////////////Delete Answer
function deleteAnswer(answer, onSuccess) {
    db.query("DELETE FROM answers WHERE answer = ($1)", [answer.answer], onSuccess);
}
module.exports.deleteAnswer = deleteAnswer;

////////////////////////////////Create Answers
function createAnswer(answers, onSuccess){
    console.log('Louise', answers.answer)
    db.query("INSERT INTO answers(answer, correct, questionid) VALUES($1, $2, $3)"), [answers.answer, answers.questionid, answers.correct], onSuccess
}

module.exports.createAnswer = createAnswer;


////////////////////////////////////////////////////////////////Create new quiz
function createNewQuiz(quizzes, onSuccess){
    db.query("INSERT INTO quizzes(title) VALUES ($1)", [quizzes.title], onSuccess);
}
module.exports.createNewQuiz = createNewQuiz;

//////////////////////////////// Delete Quiz
function deleteQuiz(quizzes, onSuccess) {
    db.query('DELETE FROM quizzes WHERE "title" = ($1)', [quizzes.title], onSuccess);
}
module.exports.deleteQuiz = deleteQuiz;
