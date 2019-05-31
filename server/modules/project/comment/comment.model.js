const mongoose = require('mongoose');
Schema = mongoose.Schema;


const CommentSchema = Schema({
    id_project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: String
});

module.exports = mongoose.model("comment", CommentSchema);