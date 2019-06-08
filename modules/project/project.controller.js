const jwt = require("jsonwebtoken");
const CONSTANTS = require("../../config/constants");
const bcrypt = require("bcryptjs");
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

module.exports = {
    // Thêm dự án
    add: async (req, res) => {
        //Chèn 3 ảnh
        // try {
        let length = 3;
        let arrImg = [];
        for (i = 0; i < length; i++) {
            arrImg.push(req.files[i].filename);
        }
        let newProject = await Project.create({
            total_area: req.body.total_area,
            Overview_of_the_data: req.body.Overview_of_the_data,
            img_url: arrImg,
            category: req.body.category_id,
            //location displayed: Vị trí hiển thị
            Address: req.body.Address,
            Investor: req.body.Investor,
            Name_of_project: req.body.Name_of_project,
            Price: req.body.Price,
            locationdisplayed: req.body.locationdisplayed,
            evaluateProject: null,
            role: 0
        });
        let result = {
            "status": true,
            "message": "success",
            "data": newProject
        };
        res.json(result);
    },
    //Xem thông tin dự án theo ID
    viewProject: async (req, res) => {
        let dataProject = await Project.findOne({ _id: req.params.id }).populate('userEvaluateProject.id_user', 'username');
        let result = {
            "status": true,
            "message": "success",
            "data": dataProject
        };
        res.json(dataProject);

    },
    //Xem thông tin toàn bộ dự án
    viewAllProject: async (req, res) => {
        let dataAllProject = await Project.find({}).populate('userEvaluateProject.id_user', 'username');
        let result = {
            "status": true,
            "message": "success",
            "data": dataAllProject
        };
        res.json(result);
    },

    // Cập nhập thông tin của dự án 
    updateProject: async (req, res) => {
        let updateProject = {
            $set: {
                Name_of_project: req.body.Name_of_project,
                Address: req.body.Address,
                Investor: req.body.Investor,
                Price: req.body.Price,
                total_area: req.body.total_area,
                Overview_of_the_data: req.body.Overview_of_the_data,
                img_url: arrImg,
                category: req.body.category_id,
            }
        };
        let result = await Project.findOneAndUpdate({ _id: req.params.id }, updateProject);

        let resultSuccess = {
            "status": true,
            "message": "success",
            "data": updateProject
        };
        res.json(resultSuccess);
    },

    updateLocationProject: async (req, res) => {
        let updateProject = {
            $set: {
                locationdisplayed: req.body.locationdisplayed,
                updateDate: Date.now
            }
        };
        let result = await Project.findOneAndUpdate({ _id: req.params.id }, updateProject);

        let resultSuccess = {
            "status": true,
            "message": "success"
        };
        res.json(resultSuccess);
    },

    //Xóa thông tin dự án
    deleteProject: async (req, res) => {
        await Project.findOneAndRemove({ _id: req.params.id });
        let result = {
            "status": true,
            "message": "success"
        };
        res.json(result)
    },

    //push: Có thể đẩy trùng nhau
    //set: Không thể trùng nhau
    //Thêm đánh giá về dự án
    addEvaluateProject: async (req, res) => {
        query = {
            _id: req.params.id
        };
        update = {
            '$push': {
                'userEvaluateProject': {
                    'id_user': req.user.data._id,
                    'comment': req.body.comment
                }
            }
        }
        options = { upsert: true };
        let result = await Project.update(query, update, options);

        let resultSuccess = {
            "status": true,
            "message": "success",
            "data": result
        };
        res.json(resultSuccess);
    }
}