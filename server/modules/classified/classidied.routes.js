const router = require("express").Router();
const classifiedController = require("./classified.controller");
const auth = require("../../services/auth.service");
var multer  = require('multer');
const checkPermision = require("../../services/checkPermision");

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './public/upload')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + '_' + file.originalname);
   }
 });
 
var upload = multer({ storage: storage });

router.post("/posts", auth, upload.array('images',5), classifiedController.createPost); //auth

router.put("/posts/:id", auth, upload.array('images',5), classifiedController.updatePost); //auth

router.delete("/posts/:id",auth, classifiedController.deletePost); //auth

router.put("/posts-approve/:id", classifiedController.aprrovePost); //isAdmin

router.get("/posts-approved", classifiedController.showListPostAprroved); //isAdmin

router.get("/posts-pending", classifiedController.showListPostPending); //isAdmin

// //show post and user of post
router.get("/post-details/:id", classifiedController.showPostDetails); //isAdmin

router.put("/save-post/:id",auth, classifiedController.savePost);

router.get("/posts", classifiedController.showPostInPage); //isAdmin

module.exports = router;