const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    avatar: String,
    email: String,
    password: String,
    address: String,
    phone_number: Number,
    amount: Number,
    role: Boolean, // 1, khachs hang 0-admin,
    save_list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classified'
    }],
    id_blog: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    id_classified: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classified'
    }],
    id_project: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
});

module.exports = mongoose.model("User", UserSchema);