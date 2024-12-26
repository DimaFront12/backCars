const mongoose = require('mongoose');

const CarCommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('PostCategory', CarCommentSchema);