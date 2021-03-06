const jwt = require("jsonwebtoken");
const CONSTANTS = require("../config/constants");


module.exports = {
    checkLogin: async (req, res, next)=>{
        let token = req.headers['x-access-token'];
        jwt.verify(token, CONSTANTS.SECRET_KEY, async (err, decode)=>{
            if(err){
                let result = {
                    "status": false,
                    "message": err.message
                };
                res.json(result);
            } else{
                req.user = {
                    "status" : true,
                    "message" : "login success",
                    "data" : decode.data,
                }
                next();
            }
        })
    },
    checkAdmin: async (req,res, next)=>{
        let token = req.headers['x-access-token'];
        jwt.verify(token, CONSTANTS.SECRET_KEY, async (err, decode)=>{
            if(err){
                let result = {
                    "status": false,
                    "message": err.message
                };
                res.json(result);
            } else{
                if(decode.data.role == false){
                    req.user = {
                        "status" : true,
                        "message" : "login success",
                        "data" : decode.data,
                    }
                    next();
                } else{
                    res.json({
                        status: false,
                        message: "you was denied!"
                    })
                }
            }
        })
    }
}
