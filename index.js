const express = require("express");
const connectMongoDB = require("./connection");
const dbUrl = "mongodb://127.0.0.1:27017/url-shortener";
const urlRouter = require("./routes/url");
const generateLog = require("./middleware");
const URL = require("./model/url");
const PORT = 1000;

const app = express();

connectMongoDB(dbUrl)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(`MongoDB connection erro : ${err}`));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(generateLog("log.txt"));
app.use("/url", urlRouter);
app.use("/", urlRouter);

app.listen(PORT, () => console.log(`Server Listening on Port : ${PORT}`));
