const jwt = require("jsonwebtoken");
const CONSTANTS = require("../../config/constants");
const bcrypt = require("bcryptjs");

module.exports = {
    login: async (req, res)=>{
        let user = await User.find({username: req.body.username});
        if(user.length != 0){
            let isValid = bcrypt.compareSync(req.body.password, user[0].password);
            if( isValid == true){
                let token = jwt.sign({ data: user[0] }, CONSTANTS.SECRET_KEY, { expiresIn: 3600*60});
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
                    "message" : "password is not valid",
                    "data" : "",
                    "token": ""
                };
                res.json(result);
            }
        }else{
            result = {
                "status": false,
                "message" : "username not found",
                "data" : "",
                "token": ""
            };
            res.json(result);
        }
    },
    register: async (req, res)=>{
        let newUser = await User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password)
        });
        let token = jwt.sign({ data: newUser }, CONSTANTS.SECRET_KEY, { expiresIn: 3600*60});
        let result = {
            "status": true,
            "message": "success",
            "data": newUser,
            "token": token
        };
        res.json(result);

    },
    getProfile: async (req, res)=>{
        let user = await User.findOne({_id:req.params.id});
        if(user.password == req.data.password && user.username == req.data.username){
            let result = {
                "status" : true,
                "message" : "login success",
                "data" : user,
            }
            res.json(result);
        } else{
            let result = {
                "status" : false,
                "message" : "login failure",
                "data" : ""
            }
            res.json(result);
        }
        
    }
}