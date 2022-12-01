const Blog = require("../models/blogModel");

const getAllPosts = async (req, res) => {
  try {
    const allblog = await Blog.find({});
    res.status(200).send(allblog);
  } catch (err) {
    res.status(401).send(err.toString());
  }
};
const createPost = async (req, res) => {
  try {
    const { heading, content, author } = req.body;
    const blog = await Blog.create({ heading, content, author });
    res.status(200).send({
      _id: blog._id,
      heading: blog.heading,
      content: blog.content,
      author: blog.author,
    });
  } catch (err) {
    res.status(401).send(err.toString());
  }
};
const updatePost = async (req, res) => {
  try {
    const { id, heading, content } = req.body;
    const blog = await Blog.findOne({ _id: id });
    if (blog) {
      blog.heading = heading;
      blog.content = content;
      await blog.save();
    } else res.status(400).send("No blog found");
    res.status(200).send(blog);
  } catch (err) {
    res.status(401).send(err.toString());
  }
};

module.exports = { getAllPosts, createPost, updatePost };
