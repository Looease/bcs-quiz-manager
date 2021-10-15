var express = require("express");
var router = express.Router();
var passport = require("passport");
var editAccess = require("../security/editAccess");
var quizService = require("../services/quizService.js");

module.exports = router;

router.get(
  "/new",
  passport.authenticate("jwt", { session: false }),
  editAccess.editAccess,
  function (req, res, next) {
    res.render("quiz/new");
  }
);
router.post("/", function (req, res) {
  function onSuccess(result) {
    res.redirect("/");
  }
  quizService.createNewQuiz(req.body, onSuccess);
});

router.get(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  editAccess.editAccess,
  function (req, res, next) {
    res.render("quiz/delete");
  }
);

router.post("/delete", function (req, res) {
  function onSuccess(result) {
    res.redirect("/");
  }
  quizService.deleteQuiz(req.body, onSuccess);
});

router.get(
  "/edit",
  passport.authenticate("jwt", { session: false }),
  editAccess.editAccess,
  function (req, res, next) {
    res.render("quiz/edit");
  }
);
