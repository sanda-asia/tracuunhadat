const router = require("express").Router();
const userController = require("./user.controller");


router.post("/dang-nhap", userController.login);

router.post("/dang-ky", userController.register);

// get profile 
router.get("/:id", (req, res)=>{

});


module.exports = router;