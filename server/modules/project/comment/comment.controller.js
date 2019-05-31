const jwt = require("jsonwebtoken");
const CONSTANTS = require("../../../config/constants");
const bcrypt = require("bcryptjs");

// const ObjectId = require('mongodb').ObjectID;
// const bodyParser = require('body-parser');

module.exports = {
    // Thêm bình luận
    add: async (req, res) => {
        let newComment = await Comment.create({
            comment: req.body.comment
        });
        query = { _id: req.params.id }
        update = {
            $push: {
                id_user: req.user.data._id,
                id_project: req.Project._id
            }
        }
        options = { upsert: true };
        let result = await Project.findOneAndUpdate(query, update, options);
        let resultStatus = {
            "status": true,
            "message": "success",
            "data": newComment
        };
        res.json(resultStatus);
    },

    // Xem bình luận theo dự án
    view: async (req, res) => {
        query = { _id: req.params.id }
        let viewComment = await Comment.find(query);
        let result = {
            "status": true,
            "message": "success",
            "data": viewComment
        };
        res.json(result);
    },

    //Xóa bình luận
    deleteProject: async (req, res) => {
        await Project.findOneAndRemove({ _id: req.params.id });
        let result = {
            "status": true,
            "message": "success"
        };
        res.json(result)
    },
}