const router = require("express").Router();
const auth = require("../../services/auth.service");
const classifiedController = require("./classified.controller");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './static/upload/classified');
    },
    filename: function (req, file, callback) {
      callback(null, Date.now()+ file.originalname);
    }
  });
const upload = multer({ 
    storage : storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
});

// fetch all posts in classified
router.get("/", classifiedController.showAllListPost);

// return all posts approved or posts match query: search
router.get("/posts-approved", classifiedController.showListPostAprroved); 

router.get("/posts-pending", classifiedController.showListPostPending); //isAdmin

// pagination with query: requirement
// router.get("/:requirement", classifiedController.showPostApproved);
router.get("/requirement/:requirement", classifiedController.showPostApproved);

router.get("/count-classified",classifiedController.countClassified)

router.get("/:id", classifiedController.showPostDetails);

router.post("/", auth.checkLogin, upload.array('images'), classifiedController.createPost); //auth

router.put("/:id", auth.checkLogin, classifiedController.updatePost); //auth

router.put("/:id/approve", auth.checkAdmin, classifiedController.aprrovePost); //isAdmin

router.put("/:id/refuse", auth.checkAdmin, classifiedController.refusePost); //isAdmin

router.put("/:id/save",auth.checkLogin, classifiedController.savePost); //auth

router.delete("/:id",auth.checkLogin, classifiedController.deletePost); //auth

module.exports = router;