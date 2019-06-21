const router = require("express").Router();
const projectController = require("./project.controller");
const auth = require("../../services/auth.service");

//Thêm dự án
router.post("/them-duan", auth.checkAdmin, projectController.add);

//Update project
router.put("/sua-duan/:id", auth.checkAdmin, projectController.updateProject);

//Delete project
router.delete("/xoa-duan/:id", auth.checkAdmin, projectController.deleteProject);

//Xem thông tin dự án theo ID
router.get("/:id", auth.checkAdmin, projectController.viewProject);

// fetch all project
router.get("/", auth.checkAdmin, projectController.viewAllProject);


//Sửa đổi: put
//add evaluate about project
//Thêm đánh giá về dự án
router.put("/them-danhgia/:id", auth.checkAdmin, projectController.addEvaluateProject);


router.post("/update-posision/:id", auth.checkAdmin, projectController.updateLocationProject);

//view all evaluate about project
// router.get("/tatcadanhgia/:id", auth, projectController.viewAllEvaluateProject);


module.exports = router;
