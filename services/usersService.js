const db = require('../db');
var bcrypt = require('bcrypt');
require('dotenv').config();

function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
}
//npm install bcrypt
//npm install jsonwebtoken
//npm install dotenv
//npm install passport-jwt
//npm install passport

function createUser(user, onSuccess){
    db.query("INSERT INTO users(username, password, role) VALUES($1, $2, $3)", [user.username, hashPassword(user.password), user.role], onSuccess);

};
module.exports.createUser = createUser;

function validateLogin(user, onSuccess) {
    // React to query
    function onFindingUser(result){
        //with postgres we need to return the rows: 
        let users = result.rows;
        if (!users || users.length != 1) {
            onSuccess(false, null)
            return
        }
        var passwordCorrect = bcrypt.compareSync(user.password, users[0].password);

        onSuccess(passwordCorrect, users[0]);
    }
    db.query('SELECT * FROM users WHERE "username" = ($1)', [user.username], onFindingUser);
}

module.exports.validateLogin = validateLogin;

function findUser(username, onSuccess) {
        function onResult(result) {
        let user = result.rows;
        if(user && user.length > 0){
            onSuccess(null, user[0])
        }
        else{
            onSuccess("No such user", null)
        }};
        db.query('SELECT * FROM users WHERE "username" = ($1)', [username], onResult);
    }

    module.exports.findUser = findUser;