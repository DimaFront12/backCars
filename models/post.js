const mongoose = require('mongoose');

const PostComment = require('./post-comment.js');
const PostCategory = require('./post-comment.js');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: PostComment,
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: PostCategory,
    }]
});

module.exports = mongoose.model('Post', PostSchema);