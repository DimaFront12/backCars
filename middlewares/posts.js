const posts = require("../models/post")

const findAllPosts = async (req, res, next) => {
    req.allPosts = await posts.find({});
    next();
}

module.exports = { findAllPosts }