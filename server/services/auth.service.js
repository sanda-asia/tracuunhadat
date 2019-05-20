const jwt = require("jsonwebtoken");
const CONSTANTS = require("../config/constants");


module.exports = (req, res, next)=>{
    let token = req.headers['x-access-token'];
    jwt.verify(token, CONSTANTS.SECRET_KEY, (err, decode)=>{
        if(err){
            let result = {
                "status": true,
                "message": err.message,
                "data": "error"
            };
            res.json(result);
        } else{
            req.data = decode.data;
            next();
        }
    })

}