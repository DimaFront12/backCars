const postsRouter = require("express").Router();

const { findAllPosts } = require("../middlewares/posts");
const { sendAllPosts } = require("../controllers/posts");

postsRouter.get("/posts", findAllPosts, sendAllPosts);

module.exports = postsRouter;