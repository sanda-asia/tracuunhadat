const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ProjectSchema = mongoose.Schema({

    Name_of_project: String,

    Address: String,

    //Investor: Chủ đầu tư
    Investor: String,

    //total_area: Tổng diện tích
    total_area: Number,

    // locationdisplayed: Vị trí
    locationdisplayed: Number,

    Price: Number,
    // Overview of the data: Tổng quan về dự án
    Overview_of_the_data: String,

    //Khi userEvaluateProject là một mảng thì báo lỗi 
    //Cannot create field 'id_user' in element {userEvaluateProject: []}
    userEvaluateProject: [{
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: String
    }],

    img_url: [{
        type: String
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    created: {
        type: Date,
        default: Date.now
    },

    updateDate: {
        type: Date,
    }
});

const CommentSchema = Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: String
});

module.exports = mongoose.model("Comment", CommentSchema);
module.exports = mongoose.model("Project", ProjectSchema);