const router = require("express").Router();
const userController = require("./user.controller");
const auth = require("../../services/auth.service");
const check = require("../../services/checkPermision");

// đăng nhập
router.post("/dang-nhap", userController.login);

//đăng kí
router.post("/dang-ky", userController.register);

// get profile 

router.get("/:id", auth, check.isUser ,userController.getProfile);

//Lấy danh sách tin đăng được duyệt
router.get("/:id/list/checked", userController.getAllListClassifiedChecked);

// Lấy lịch sử giao dich
router.get("/:id/transaction", userController.getTransaction);


// Cập nhập thông tin user
router.put("/:id/transaction", userController.putUser);

module.exports = router;