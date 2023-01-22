const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  description: String,
  answeredBy: String,
  answeredOn: Date,
  votes: Number,
  accepted: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Answer", answerSchema);
