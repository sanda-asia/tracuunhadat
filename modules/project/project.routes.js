const router = require("express").Router();
const projectController = require("./project.controller");
const auth = require("../../services/auth.service");
const check = require("../../services/checkPermision");

//Thêm dự án
router.post("/them-duan", auth, projectController.add);

//Update project
router.put("/sua-duan/:id", auth, projectController.updateProject);

//Delete project
router.delete("/xoa-duan/:id", auth, projectController.deleteProject);

//Xem thông tin dự án theo ID
router.get("/:id", auth, projectController.viewProject);

// fetch all project
router.get("/", auth, projectController.viewAllProject);


//Sửa đổi: put
//add evaluate about project
//Thêm đánh giá về dự án
router.put("/them-danhgia/:id", auth, projectController.addEvaluateProject);


router.post("/update-posision/:id", auth, projectController.updateLocationProject);

//view all evaluate about project
// router.get("/tatcadanhgia/:id", auth, projectController.viewAllEvaluateProject);


module.exports = router;
