const jwt = require("jsonwebtoken");
const CONSTANTS = require("../config/constants");


module.exports = async (req, res, next)=>{
    let token = req.headers['x-access-token'];
    jwt.verify(token, CONSTANTS.SECRET_KEY, async (err, decode)=>{
        if(err){
            let result = {
                "status": false,
                "message": err.message
            };
            res.json(result);
        } else{
<<<<<<< HEAD
                req.user = decode;
                next();
=======
            req.user = {
                "status" : true,
                "message" : "login success",
                "data" : decode.data,
>>>>>>> int module project
            }
            next();
        }
    })
}