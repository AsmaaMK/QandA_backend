require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const questionRouter = require("./routes/QuestionRoutes");
 
//middlewares
app.use(express.json());
app.get("/", (req, res)=>{
  res.send("hello")
})
app.use("/api/questions", questionRouter);
 
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
 
mongoose.set('strictQuery', true);

//configure mongoose
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = app;