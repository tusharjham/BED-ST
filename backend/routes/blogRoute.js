const express = require("express");
const {
  getAllPosts,
  createPost,
  updatePost,
} = require("../controller/blogController");

const blogRoute = new express.Router();

blogRoute.route("/api/getAllPosts").get(getAllPosts);
blogRoute.route("/api/createPost").post(createPost);
blogRoute.route("/api/updatePost").post(updatePost);

module.exports = blogRoute;
