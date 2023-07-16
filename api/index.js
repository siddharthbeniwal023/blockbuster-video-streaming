const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth",authRouter);

app.listen(8800, () => {
  console.log("Backend Server in running");
});
