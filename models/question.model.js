const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: String,
  description: String,
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer",
  },
  askedBy: String,
  askedOn: Date,
  votes: Number,
  views: Number,
  tags: Array,
  hasAcceptedAnswer: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", questionSchema);
