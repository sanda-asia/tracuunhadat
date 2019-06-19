const router = require("express").Router();
const auth = require("../../services/auth.service");
const checkPermision = require("../../services/checkPermision");
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
router.get("/posts", classifiedController.showPostApproved);

router.get("/post-details/:id", classifiedController.showPostDetails);

router.post("/posts", auth, upload.array('images'), classifiedController.createPost); //auth

router.put("/posts/:id", auth, classifiedController.updatePost); //auth

router.put("/posts-approve/:id", classifiedController.aprrovePost); //isAdmin
router.put("/posts-refuse/:id", classifiedController.refusePost); //isAdmin

router.put("/save-post/:id",auth, classifiedController.savePost); //auth

router.delete("/posts/:id",auth, classifiedController.deletePost); //auth

module.exports = router;