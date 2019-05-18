const jwt = require("jsonwebtoken");
const CONSTANTS = require("../../config/constants");
const bcrypt = require("bcryptjs");

module.exports = {
    login: (req, res)=>{
        res.json("dang nhap");
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