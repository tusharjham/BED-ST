const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  heading: {
    type: "string",
  },
  content: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
});

const Blog = new mongoose.model("BlogModel", blogSchema);

module.exports = Blog;
