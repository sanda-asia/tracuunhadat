const router = require("express").Router();
const commentController = require("./comment.controller");
const auth = require("../../../services/auth.service");
const check = require("../../../services/checkPermision");


//Các chức năng mà user có thể làm: Thêm, xóa, sửa bình luận
//Thêm bình luận
router.post("/them-binhluan/:id", auth, check.isUser, commentController.add);
//Sửa bình luận
router.put("/sua-binhluan/:id", auth, check.isUser, commentController.update);
//Xóa bình luận
router.delete("/xoa-binhluan/:id", auth, check.isUser, commentController.delete);

//Các chứng năng mà admin có thể làm: Thêm, xóa, sửa, xem tất cả bình luận
//Thêm bình luận
router.post("/them-binhluan/:id", auth, check.isAdmin, commentController.add);
//Sửa bình luận
router.put("/sua-binhluan/:id", auth, check.isAdmin, commentController.update);
//Xóa bình luận
router.delete("/xoa-binhluan/:id", auth, check.isAdmin, commentController.delete);
//Xem bình luận theo ID
router.get("/:id", auth, check.isUser, commentController.view);

module.exports = router;
