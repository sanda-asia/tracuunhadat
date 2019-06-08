const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const BlogSchema = mongoose.Schema({
    headerBlog: String,
    content: String,
    imageSrc: [{
        type: String
    }],
    author: String,
    timePost: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Blog', BlogSchema);