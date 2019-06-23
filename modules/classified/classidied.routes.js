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
router.get("/all", classifiedController.showAllListPost);

// return all posts approved or posts match query: search
router.get("/posts-approved", classifiedController.showListPostAprroved); 

router.get("/posts-pending", classifiedController.showListPostPending); //isAdmin

// pagination with query: page
router.get("/posts/:requirement", classifiedController.showPostApproved);
router.get("/count-classified",classifiedController.countClassified)

router.get("/post-details/:id", classifiedController.showPostDetails);

router.post("/posts", auth.checkLogin, upload.array('images'), classifiedController.createPost); //auth

router.put("/posts/:id", auth.checkLogin, classifiedController.updatePost); //auth

router.put("/posts-approve/:id", auth.checkAdmin, classifiedController.aprrovePost); //isAdmin

router.put("/posts-refuse/:id", auth.checkAdmin, classifiedController.refusePost); //isAdmin

router.put("/save-post/:id",auth.checkLogin, classifiedController.savePost); //auth

router.delete("/posts/:id",auth.checkLogin, classifiedController.deletePost); //auth

module.exports = router;