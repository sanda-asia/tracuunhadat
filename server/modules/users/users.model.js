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
    show_agency: Number, // 0: không hiển thị, 1: đang chờ duyệt, 2: hiển thị
    transaction:[{
        _id:  mongoose.Schema.Types.ObjectId,
        transaction_amount: Number,
        transaction_content: String,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
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

    id_comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});

module.exports = mongoose.model("User", UserSchema);