const answerService = require("../services/answer.service");
 
exports.getAllAnswers = async (req, res) => {
  try {
    const answers = await answerService.getAllAnswers();
    res.json({ data: answers, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createAnswer = async (req, res) => {
  try {
    const answer = await answerService.createAnswer(req.body);
    res.json({ data: answer, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getAnswerById = async (req, res) => {
  try {
    const answer = await answerService.getAnswerById(req.params.id);
    res.json({ data: answer, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateAnswer = async (req, res) => {
  try {
    const answer = await answerService.updateAnswer(req.params.id, req.body);
    res.json({ data: answer, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteAnswer = async (req, res) => {
  try {
    const answer = await answerService.deleteAnswer(req.params.id);
    res.json({ data: answer, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};