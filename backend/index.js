require("dotenv").config();
const express = require("express");
const mongo = require("./config/db");
const blogRoute = require("./routes/blogRoute");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongo();
app.use(blogRoute);
app.listen(PORT, () => {
  console.log("connected succesfully");
});
