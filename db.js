var {Client} = require('pg');
require('dotenv').config();

var connection = new Client({
    host:'localhost',
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:'quizmanagerdb'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    } else {
        console.log('Connected!');
    }
});

function query(psql, parameter, onResult ) {
    connection.query(psql, parameter, function (error, results, fields) {
        if (error) throw error;
        onResult(results);
    });
}

module.exports.query = query;