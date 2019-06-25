const router = require("express").Router();
const projectController = require("./project.controller");
const auth = require("../../services/auth.service");

// fetch all project
router.get("/", auth.checkAdmin, projectController.viewAllProject);

//Xem thông tin dự án theo ID
router.get("/:id", auth.checkAdmin, projectController.viewProject);

//Thêm dự án
router.post("/", auth.checkAdmin, projectController.add);

router.post("/:id/update-position", auth.checkAdmin, projectController.updateLocationProject);

//Update project
router.put("/:id", auth.checkAdmin, projectController.updateProject);

//Sửa đổi: put
//add evaluate about project
//Thêm đánh giá về dự án
router.put("/:id/evalute", auth.checkAdmin, projectController.addEvaluateProject);

//Delete project
router.delete("/:id", auth.checkAdmin, projectController.deleteProject);

//view all evaluate about project
// router.get("/tatcadanhgia/:id", auth, projectController.viewAllEvaluateProject);

module.exports = router;
