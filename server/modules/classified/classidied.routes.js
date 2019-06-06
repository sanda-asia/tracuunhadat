const router = require("express").Router();
var multer  = require('multer');
const auth = require("../../services/auth.service");
const checkPermision = require("../../services/checkPermision");
const classifiedController = require("./classified.controller");

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './public/upload')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + '_' + file.originalname);
   }
 });
 
var upload = multer({ storage: storage });

// return all posts approved or posts match query: search
router.get("/posts-approved", classifiedController.showListPostAprroved); 

router.get("/posts-pending", classifiedController.showListPostPending); //isAdmin

// pagination with query: page
router.get("/posts", classifiedController.showPostApproved);

router.get("/post-details/:id", classifiedController.showPostDetails);

router.post("/posts", auth, upload.array('images',5), classifiedController.createPost); //auth

router.put("/posts/:id", auth, upload.array('images',5), classifiedController.updatePost); //auth

router.put("/posts-approve/:id", classifiedController.aprrovePost); //isAdmin

router.put("/save-post/:id",auth, classifiedController.savePost); //auth

router.delete("/posts/:id",auth, classifiedController.deletePost); //auth

module.exports = router;