const mongoose = require('mongoose');

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

    //Bình luận
    userEvaluateProject: [{
        id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: String,
        posted: {
            type: Date,
            default: Date.now
        },
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

module.exports = mongoose.model("Project", ProjectSchema);