const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const api = require("./routes/api");

app.use("/api", api);

app.use("/", express.static("./public"));

mongoose.connect(
  `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@cluster0.ivmrt.gcp.mongodb.net/${process.env.MDB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
  });
});
