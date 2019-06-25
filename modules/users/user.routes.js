const router = require("express").Router();
const userController = require("./user.controller");
const auth = require("../../services/auth.service");
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './static/upload/users/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname);
    }
  });
  
var upload = multer({ storage: storage });

router.get("/", auth.checkAdmin, userController.getAllUser);

// get profile
router.get("/:id", userController.getProfile);

//Lấy danh sách tin đăng được duyệt
router.get("/:id/list-classified", userController.getAllListClassified);

// Lấy lịch sử giao dich
router.get("/:id/transaction", auth.checkLogin, userController.getTransaction);

// Yêu cầu hiện thị thông tin lên chuyên mục top môi giới
router.get("/:id/show-agency", userController.showAgency);

// đăng nhập
router.post("/login", userController.login);

//đăng kí
router.post("/", userController.register);

//upload
router.post("/:id/upload", auth.checkLogin, upload.single('image'), userController.upload);

// Cập nhập thông tin user
router.put("/:id/", auth.checkLogin, userController.putUser);

router.put("/:id/recharge", auth.checkAdmin, userController.recharge);

module.exports = router;