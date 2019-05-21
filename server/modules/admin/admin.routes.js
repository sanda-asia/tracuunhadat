const router = require("express").Router();
const adminController = require("./admin.controller");
const auth = require("../../services/auth.service");


// router.post("/dang-nhap", adminController.login);

// router.post("/dang-ky", adminController.register);

// get profile 
// router.get("/:id", auth, adminController.getProfile);


module.exports = router;