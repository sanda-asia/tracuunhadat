const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    avatar: String,
    email: String,
    password: String,
    address: String,
    phone_number: Number,
    role: Boolean, // 1, khachs hang 0-admin
    post_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    blog_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    project_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
});

module.exports = mongoose.model("User", UserSchema);