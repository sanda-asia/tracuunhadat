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
                    "message" : "success",
                    "data" : user[0],
                    "token": token
                };
                res.json(result);
            } else{
                let result = {
                    "message" : "password is not valid",
                    "data" : "",
                    "token": ""
                };
                res.json(result);
            }
        }else{
            result = {
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
            "message": "success",
            "data": newUser,
            "token": token
        };
        res.json(result);

    }
}