const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const BlogSchema = mongoose.Schema({
    headerBlog: String,
    content: String,
    province: String,
    imageSrc: [{
        type: String
    }],
    author: {
        type: String,
        default: 'Admin'
    },
    timePost: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Blog', BlogSchema);