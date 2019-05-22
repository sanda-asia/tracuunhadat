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
            let user = await User.findOne({_id:req.params.id});
            if(user.password == decode.data.password && user.username == decode.data.username){
                req.user = {
                    "status" : true,
                    "message" : "login success",
                    "data" : user,
                }
                next();
            } else{
                let result = {
                    "status" : false,
                    "message" : "login failure"
                }
                res.json(result);
            }
                next();
            }
    })

}