const db = require('../db');

function getAllQuizes(onSuccess) {
    db.query("SELECT * FROM quizzes", [], onSuccess);
}
module.exports.getAllQuizes = getAllQuizes;