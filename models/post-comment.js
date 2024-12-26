const mongoose = require('mongoose');

const PostCommentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('PostComment', PostCommentSchema);