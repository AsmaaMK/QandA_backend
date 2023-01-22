const AnswerModel = require("../models/answer.model");
 
exports.getAllAnswers = async () => {
  return await AnswerModel.find();
};
 
exports.createAnswer = async (blog) => {
  return await AnswerModel.create(blog);
};

exports.getAnswerById = async (id) => {
  return await AnswerModel.findById(id);
};
 
exports.updateAnswer = async (id, blog) => {
  return await AnswerModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteAnswer = async (id) => {
  return await AnswerModel.findByIdAndDelete(id);
};