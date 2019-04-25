const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const postRoutes = require("./app/routes/post.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/", postRoutes);

module.exports = app;
