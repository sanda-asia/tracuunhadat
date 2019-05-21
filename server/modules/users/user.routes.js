const router = require("express").Router();
const userController = require("./user.controller");
const auth = require("../../services/auth.service");
const check = require("../../services/checkPermision");


router.post("/dang-nhap", userController.login);

router.post("/dang-ky", userController.register);

// get profile 
router.get("/:id", auth, check.isUser ,userController.getProfile);


module.exports = router;