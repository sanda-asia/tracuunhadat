const router = require("express").Router();
const classifiedController = require("./classified.controller");
const auth = require("../../services/auth.service");
var multer  = require('multer');
const check = require("../../services/checkPermision");

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './public/upload')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + '_' + file.originalname);
   }
 });
 
 var upload = multer({ storage: storage });

router.post("/create-post", auth, upload.array('images'), classifiedController.createPost); //auth

router.put("/update-post/:id", auth, upload.array('images'), classifiedController.updatePost); //auth

router.delete("/delete-post/:id",auth, classifiedController.deletePost); //auth

module.exports = router;