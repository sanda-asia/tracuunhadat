/* eslint-disable prettier/prettier */
const jwt = require("jsonwebtoken");
const CONSTANTS = require("../../config/constants");
const bcrypt = require("bcryptjs");

module.exports = {
    // đăng nhập
    login: async (req, res)=>{
        let user = await User.find({username: req.body.username});
        if(user.length != 0){
            let isValid = bcrypt.compareSync(req.body.password, user[0].password);
            if( isValid == true){
                let token = jwt.sign({ data: {
                    _id: user[0]._id,
                    username: user[0].username,
                    fullname: user[0].fullname,
                    email: user[0].email,
                    phone_number: user[0].phone_number,
                    role: user[0].role,
                    avatar: user[0].avatar
                } }, CONSTANTS.SECRET_KEY, { expiresIn: 3600*60});
                let result = {
                    "status": true,
                    "message" : "success",
                    "data" : user[0],
                    "token": token
                };
                res.json(result);
            } else{
                let result = {
                    "status": false,
                    "message" : "password is not valid"
                };
                res.json(result);
            }
        }else{
            result = {
                "status": false,
                "message" : "username not found"
            };
            res.json(result);
        }
    },
    // đăng kí tài khoản
    register: async (req, res)=>{
        let newUser = await User.create({
            username: req.body.username,
            fullname: req.body.username,
            introduction: "Vui Lòng cập nhập thông tin mô tả của bạn!",
            password: bcrypt.hashSync(req.body.password),
            email: req.body.email,
            phone_number: req.body.phone_number,
            avatar: 'profile-icon-white-7.jpg',
            amount: 100000, // default 100k
            role: 1
        });
        let token = jwt.sign({ data: {
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            phone_number: req.body.phone_number,
            role: 1
        } }, CONSTANTS.SECRET_KEY, { expiresIn: 3600*60});
        let result = {
            "status": true,
            "message": "success",
            "data": newUser,
            "token": token
        };
        res.json(result);
    },
    // 

    getAllUser: async (req, res)=>{
        let listUser = await User.find({})
                                .sort({_id:-1})
        res.json(listUser)
    },

    getProfile: (req, res)=>{
        User.findOne({_id:req.params.id},(err, user)=>{
            if(err){
                throw new Error(err.message)
            } else{
                res.json(user)
            }
        })
    },
    //lấy lịch sử giao dich
    getTransaction: async (req, res)=>{
        // res.json(req.user.data.transaction);
        let list = await User.findOne({_id: req.params.id}).select('transaction')
        res.json(list);
    },

    getAllListClassified: async (req, res)=>{
        let list = await User.findOne({_id: req.params.id}).select('id_classified').populate("id_classified");
        res.json(list);
    },

    // Cập nhập thông tin của user 
    putUser: async (req, res)=>{
        let updateUser = {
            fullname:req.body.fullname,
            phone_number: req.body.phone_number,
            introduction: req.body.introduction
        };
        let result = await User.findOneAndUpdate({_id: req.params.id}, updateUser);
        res.json({
            "status" : true,
            "message" : "Updated successfuly",
            "data" : result
        });
    },

    // Yêu cầu Hiện thị profile lên top môi giới
    showAgency: async (req, res)=>{
        let updateUser = {
            "show_agency": 1
        };
        let user = await User.findOneAndUpdate({_id:req.params.id}, updateUser);
        res.json({
            "status" : true,
            "message" : "request was sent"
        });
    },

    upload: (req, res) =>{
        let updateImg = {
            avatar : req.file.filename
        };

        // console.log(arrImg)
        User.update({_id: req.params.id},updateImg, (err)=>{
            if(err){
                console.log(err.message)
            } else{
                res.json({
                    status: true,
                    name_images: req.file.filename,
                    message: "upload image successfully"
                });
            }
        });
        // res.json({status: true})
    }

}