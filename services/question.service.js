const QuestionModel = require("../models/question.model");
 
exports.getAllQuestions = async () => {
  return await QuestionModel.find();
};
 
exports.createQuestion = async (blog) => {
  return await QuestionModel.create(blog);
};

exports.getQuestionById = async (id) => {
  return await QuestionModel.findById(id);
};
 
exports.updateQuestion = async (id, blog) => {
  return await QuestionModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteQuestion = async (id) => {
  return await QuestionModel.findByIdAndDelete(id);
};