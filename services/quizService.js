const db = require("../db");

function getAllQuizes(onSuccess) {
  db.query("SELECT * FROM quizzes", [], onSuccess);
}
module.exports.getAllQuizes = getAllQuizes;

function getQuizQuestionsAndAnswers(title, onSuccess) {
  db.query(
    "SELECT * FROM quizzes JOIN questions ON questions.quizid = quizzes.id  JOIN answers on answers.questionid = questions.id WHERE quizzes.title = ($1)",
    [title],
    onSuccess
  );
}
module.exports.getQuizQuestionsAndAnswers = getQuizQuestionsAndAnswers;

function getQuestions(id, onSuccess) {
  db.query("SELECT * from questions WHERE quizid = ($1)", [id], onSuccess);
}
module.exports.getQuestions = getQuestions;

function getAnswers(id, onSuccess) {
  db.query(
    "SELECT * FROM answers JOIN questions ON answers.questionid = questions.id WHERE questions.id = ($1)",
    [id],
    onSuccess
  );
}
module.exports.getAnswers = getAnswers;

function getQuizid(id, onSuccess) {
  db.query("SELECT quizid FROM questions WHERE quizid = ($1)", [id], onSuccess);
}
module.exports.getQuizid = getQuizid;

function deleteQuestion(questions, onSuccess) {
  db.query(
    "DELETE FROM questions WHERE id = ($1)",
    [questions.id],
    onSuccess
  );
}
module.exports.deleteQuestion = deleteQuestion;

function createQuestion(questions, onSuccess) {
  db.query(
    "INSERT INTO questions(questions, quizid) VALUES ($1, $2)",
    [questions.questions, questions.quizid],
    onSuccess
  );
}
module.exports.createQuestion = createQuestion;

function updateQuestion(questions, onSuccess) {
  db.query(
    "UPDATE questions SET questions = ($1) WHERE questions = ($2)",
    [questions.questions, questions.questions],
    onSuccess
  );
}
module.exports.updateQuestion = updateQuestion;

function deleteAnswer(answer, onSuccess) {
  db.query(
    "DELETE FROM answers WHERE answer = ($1)",
    [answer.answer],
    onSuccess
  );
}
module.exports.deleteAnswer = deleteAnswer;

function createAnswer(answers, onSuccess) {
  db.query(
    "INSERT INTO answers(answer,correct, questionid) VALUES ($1, $2, $3)",
    [answers.answer, answers.correct, answers.questionid],
    onSuccess
  );
}
module.exports.createAnswer = createAnswer;

function updateAnswer(answers, onSuccess) {
  db.query(
    "UPDATE answers SET answer = ($1) WHERE answer = ($2)",
    [answers.answer, answers.answer],
    onSuccess
  );
}
module.exports.updateAnswer = updateAnswer;

function createNewQuiz(quizzes, onSuccess) {
  db.query(
    "INSERT INTO quizzes(title) VALUES ($1)",
    [quizzes.title],
    onSuccess
  );
}
module.exports.createNewQuiz = createNewQuiz;

function deleteQuiz(quizzes, onSuccess) {
  db.query(
    'DELETE FROM quizzes WHERE "title" = ($1)',
    [quizzes.title],
    onSuccess
  );
}
module.exports.deleteQuiz = deleteQuiz;

function updateQuiz(quizzes, onSuccess) {
    db.query(
      "UPDATE quizzes SET title = $1 WHERE title = $2",
      [quizzes.title, quizzes.title],
      onSuccess
    );
  }
  module.exports.updateQuiz = updateQuiz;
