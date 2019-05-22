module.exports = {
    isAdmin: (req, res, next)=>{
        if(req.user.data.role == false){
            next();
        } else{
            res.json({
                "status" : false,
                "message" : "user was denied",
            })
        }
    },
    isUser: (req, res, next)=>{ 
        if(req.user.data.role == true){
            next();
        } else{
            res.json({
                "status" : false,
                "message" : "user was denied",
            })
        }
    }
}