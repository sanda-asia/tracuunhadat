const router = require("express").Router();
const userController = require("./user.controller");
const auth = require("../../services/auth.service");
const check = require("../../services/checkPermision");
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

// đăng nhập
router.post("/dang-nhap", userController.login);

//upload
router.post("/:id/upload",upload.single('image'), userController.upload);

//đăng kí
router.post("/dang-ky", userController.register);

router.get("/", userController.getAllUser);

// get profile
router.get("/:id", userController.getProfile);

//Lấy danh sách tin đăng được duyệt
router.get("/:id/list-classified", userController.getAllListClassified);

// Lấy lịch sử giao dich
router.get("/:id/transaction",auth, userController.getTransaction);


// Cập nhập thông tin user
router.put("/:id/", userController.putUser);


// Yêu cầu hiện thị thông tin lên chuyên mục top môi giới
router.get("/:id/show-agency", userController.showAgency);

module.exports = router;