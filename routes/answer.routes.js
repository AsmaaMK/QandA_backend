const express = require("express");
const {
  getAllAnswers,
  createAnswer,
  getAnswerById,
  updateAnswer,
  deleteAnswer,
} = require("../controllers/answer.controller");

const router = express.Router();

router.route("/").get(getAllAnswers).post(createAnswer);
router
  .route("/:id")
  .get(getAnswerById)
  .put(updateAnswer)
  .delete(deleteAnswer);

module.exports = router;
