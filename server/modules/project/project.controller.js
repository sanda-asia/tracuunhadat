const jwt = require("jsonwebtoken");
const CONSTANTS = require("../../config/constants");
const bcrypt = require("bcryptjs");

module.exports = {
    // Thêm dự án
    add: async (req, res) => {
        //Chèn 3 ảnh
        // try {
        //     let length = 3;
        //     let arrImg = [];
        //     for (i = 0; i < length; i++) {
        //         arrImg.push(req.files[i].filename);
        //     }
        console.log("add project");
        let newProject = await Project.create({
            // total_area: req.body.total_area,
            // Overview_of_the_data: req.body.Overview_of_the_data,
            // img_url: arrImg,
            // category: req.body.category_id,
            //location displayed: Vị trí hiển thị
            // Address: req.body.Address,
            // Investor: req.body.Investor,
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
        //     res.redirect('/admin/product');
        // } catch (error) {
        //     // res.redirect('/admin/product');
        // }
    },

    //Xem thông tin dự án theo ID
    viewProject: async (req, res) => {
        let dataProject = await Project.find({ _id: req.params.id });
        let result = {
            "status": true,
            "message": "success",
            "data": dataProject
        };
        res.json(dataProject);
    },


    //Xem thông tin toàn bộ dự án
    viewAllProject: async (req, res) => {
        let dataAllProject = await Project.find({}).sort({locationdisplayed: 1});
        // let dataAllProject = await Project.find({});
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
            "message": "success"
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

    //Thêm đánh giá về sản phẩm
    addEvaluateProject: async (req, res) => {
        let addevaluateProject = {
            $set: {
                evaluateProject: req.body.evaluateProject
            }
        };
        let result = await Project.findOneAndUpdate({ _id: req.params.id }, addevaluateProject);

        let resultSuccess = {
            "status": true,
            "message": "success"
        };
        res.json(resultSuccess);
    },

    //Xem toàn bộ đánh giá về sản phẩm
    viewAllEvaluateProject: async (req, res) => {
        let evaluateProject = {
            //Dựa vào id xuất ra tên người đánh giá.
            evaluateProject: _id.avatar,
            evaluateProject: _id.username,
            evaluateProject: req.body.evaluateProject
        };
        let result = await Project.find({ _id: req.params.id, _id: req.params.id }, evaluateProject);
        let resultSuccess = {
            "status": true,
            "message": "success"
        };
        res.json(resultSuccess);
    }
}